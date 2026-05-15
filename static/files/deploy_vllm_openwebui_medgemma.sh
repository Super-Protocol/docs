#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

### ==========================
### CONFIG
### ==========================

BASE_DOMAIN="${BASE_DOMAIN:-superprotocol.com}"
CHAT_HOST="${CHAT_HOST:-medgemma.${BASE_DOMAIN}}"
API_HOST="${API_HOST:-medgemma-api.${BASE_DOMAIN}}"

MODEL_NAME="${MODEL_NAME:-google/medgemma-27b-it}"
SERVED_MODEL_NAME="${SERVED_MODEL_NAME:-medgemma}"
APP_LABEL="${APP_LABEL:-medgemma}"

VLLM_IMAGE="${VLLM_IMAGE:-vllm/vllm-openai:v0.18.0}"
WEBUI_IMAGE="${WEBUI_IMAGE:-ghcr.io/open-webui/open-webui:main}"

# vLLM tuning
DTYPE="${DTYPE:-bfloat16}"
GPU_MEMORY_UTILIZATION="${GPU_MEMORY_UTILIZATION:-0.40}"
MAX_MODEL_LEN="${MAX_MODEL_LEN:-8192}"
MAX_NUM_SEQS="${MAX_NUM_SEQS:-4}"
MAX_NUM_BATCHED_TOKENS="${MAX_NUM_BATCHED_TOKENS:-2048}"

# Resource limits
VLLM_CPU="${VLLM_CPU:-8}"
VLLM_MEMORY="${VLLM_MEMORY:-48Gi}"
GPU_COUNT="${GPU_COUNT:-1}"
CACHE_STORAGE="${CACHE_STORAGE:-80Gi}"
SHM_SIZE="${SHM_SIZE:-2Gi}"

WEBUI_CPU="${WEBUI_CPU:-1}"
WEBUI_MEMORY="${WEBUI_MEMORY:-2Gi}"

INGRESS_CLASS="${INGRESS_CLASS:-nginx}"

### ==========================
### VALIDATE REQUIRED VARS
### ==========================

if [ -z "${HF_TOKEN:-}" ] && [ -f "${SCRIPT_DIR}/.hf_token" ]; then
  HF_TOKEN="$(cat "${SCRIPT_DIR}/.hf_token")"
fi

if [ -z "${HF_TOKEN:-}" ]; then
  echo "ERROR: HF_TOKEN is required for ${MODEL_NAME}." >&2
  echo "  Set HF_TOKEN in the environment or create ${SCRIPT_DIR}/.hf_token" >&2
  exit 1
fi

need() { command -v "$1" >/dev/null 2>&1 || { echo "Missing dependency: $1" >&2; exit 1; }; }
need kubectl

### ==========================
### KUBECONFIG
### ==========================

if [ -z "${KUBECONFIG:-}" ]; then
  if [ ! -f "./kubeconfig.yaml" ]; then
    echo "❌ kubeconfig.yaml not found in project root."
    echo "   Place your cluster config at ./kubeconfig.yaml"
    exit 1
  fi
  export KUBECONFIG="./kubeconfig.yaml"
fi

### ==========================
### NAMESPACE
### ==========================

NAMESPACE="$(kubectl config view --minify -o jsonpath='{..namespace}' 2>/dev/null || true)"
if [ -z "${NAMESPACE}" ]; then
  NAMESPACE="llm"
  echo "==> No namespace in kubeconfig, using default: ${NAMESPACE}"
fi

kubectl get ns "${NAMESPACE}" >/dev/null 2>&1 || kubectl create ns "${NAMESPACE}"

### ==========================
### DERIVED NAMES
### ==========================

SECRET_NAME="${APP_LABEL}-hf-token"
DEPLOYMENT_NAME="${APP_LABEL}"
VLLM_SVC_NAME="${APP_LABEL}-vllm"
WEBUI_SVC_NAME="${APP_LABEL}-webui"
INGRESS_NAME="${APP_LABEL}"

echo "==> Namespace:        ${NAMESPACE}"
echo "==> Chat UI host:     ${CHAT_HOST}"
echo "==> API host:         ${API_HOST}"
echo "==> Model:            ${MODEL_NAME}"
echo "==> Served as:        ${SERVED_MODEL_NAME}"
echo "==> vLLM image:       ${VLLM_IMAGE}"
echo "==> WebUI image:      ${WEBUI_IMAGE}"
echo "==> GPU count:        ${GPU_COUNT}"
echo "==> GPU mem util:     ${GPU_MEMORY_UTILIZATION}"
echo "==> Max model len:    ${MAX_MODEL_LEN}"
echo

### ==========================
### SECRET: HF TOKEN
### ==========================

echo "==> Applying HF token secret..."
HF_TOKEN_B64="$(echo -n "${HF_TOKEN}" | base64 | tr -d '\n')"

kubectl -n "${NAMESPACE}" apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: ${SECRET_NAME}
type: Opaque
data:
  token: ${HF_TOKEN_B64}
EOF

### ==========================
### DEPLOYMENT: vLLM + WebUI
### ==========================

# Both containers run in the same Pod. Open WebUI reaches vLLM via localhost:8000,
# so no inter-service networking is needed and latency is minimal.

echo "==> Applying Deployment (vLLM + Open WebUI)..."
kubectl -n "${NAMESPACE}" apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${DEPLOYMENT_NAME}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ${APP_LABEL}
  template:
    metadata:
      labels:
        app: ${APP_LABEL}
    spec:
      runtimeClassName: nvidia
      nodeSelector:
        nvidia.com/gpu.present: "true"
      tolerations:
        - key: node-role.kubernetes.io/control-plane
          operator: Exists
          effect: NoSchedule
        - key: node-role.kubernetes.io/master
          operator: Exists
          effect: NoSchedule
      volumes:
        - name: cache
          emptyDir:
            sizeLimit: ${CACHE_STORAGE}
        - name: shm
          emptyDir:
            medium: Memory
            sizeLimit: ${SHM_SIZE}
      containers:

        # ---- vLLM ----
        - name: vllm
          image: ${VLLM_IMAGE}
          command:
            - python3
            - -m
            - vllm.entrypoints.openai.api_server
            - --model
            - ${MODEL_NAME}
            - --host
            - "0.0.0.0"
            - --port
            - "8000"
            - --dtype
            - ${DTYPE}
            - --gpu-memory-utilization
            - "${GPU_MEMORY_UTILIZATION}"
            - --max-model-len
            - "${MAX_MODEL_LEN}"
            - --trust-remote-code
            - --enable-chunked-prefill
            - --enable-prefix-caching
            - --max-num-seqs
            - "${MAX_NUM_SEQS}"
            - --max-num-batched-tokens
            - "${MAX_NUM_BATCHED_TOKENS}"
            - --mm-processor-cache-gb
            - "1"
            - --served-model-name
            - ${SERVED_MODEL_NAME}
          ports:
            - containerPort: 8000
          env:
            - name: HF_TOKEN
              valueFrom:
                secretKeyRef:
                  name: ${SECRET_NAME}
                  key: token
            - name: PYTORCH_CUDA_ALLOC_CONF
              value: "expandable_segments:True"
          resources:
            requests:
              cpu: "${VLLM_CPU}"
              memory: ${VLLM_MEMORY}
              nvidia.com/gpu: "${GPU_COUNT}"
            limits:
              cpu: "${VLLM_CPU}"
              memory: ${VLLM_MEMORY}
              nvidia.com/gpu: "${GPU_COUNT}"
          volumeMounts:
            - name: cache
              mountPath: /root/.cache/huggingface
            - name: shm
              mountPath: /dev/shm
          readinessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 60
            periodSeconds: 15
            failureThreshold: 20

        # ---- Open WebUI ----
        - name: webui
          image: ${WEBUI_IMAGE}
          ports:
            - containerPort: 8080
          env:
            - name: ENABLE_OLLAMA_API
              value: "false"
            - name: ENABLE_OPENAI_API
              value: "true"
            - name: OPENAI_API_BASE_URL
              # vLLM runs in the same Pod, so localhost works directly
              value: "http://localhost:8000/v1"
            - name: OPENAI_API_KEY
              value: "sk-dummy"
          resources:
            requests:
              cpu: "${WEBUI_CPU}"
              memory: ${WEBUI_MEMORY}
            limits:
              cpu: "${WEBUI_CPU}"
              memory: ${WEBUI_MEMORY}
EOF

### ==========================
### SERVICES
### ==========================

echo "==> Applying Services..."
kubectl -n "${NAMESPACE}" apply -f - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: ${VLLM_SVC_NAME}
spec:
  selector:
    app: ${APP_LABEL}
  ports:
    - name: openai
      port: 8000
      targetPort: 8000
---
apiVersion: v1
kind: Service
metadata:
  name: ${WEBUI_SVC_NAME}
spec:
  selector:
    app: ${APP_LABEL}
  ports:
    - name: http
      port: 80
      targetPort: 8080
EOF

### ==========================
### INGRESS
### ==========================

# Two separate Ingresses, one hostname each:
#   CHAT_HOST → Open WebUI  (browser chat interface)
#   API_HOST  → vLLM API    (direct API access and Gatekeeper)

echo "==> Applying Ingresses..."
kubectl -n "${NAMESPACE}" apply -f - <<EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ${INGRESS_NAME}-webui
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "0"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-buffering: "off"
spec:
  ingressClassName: ${INGRESS_CLASS}
  rules:
    - host: ${CHAT_HOST}
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: ${WEBUI_SVC_NAME}
                port:
                  number: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ${INGRESS_NAME}-api
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "0"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-buffering: "off"
spec:
  ingressClassName: ${INGRESS_CLASS}
  rules:
    - host: ${API_HOST}
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: ${VLLM_SVC_NAME}
                port:
                  number: 8000
EOF

### ==========================
### STATUS
### ==========================

echo
echo "==> Pods:"
kubectl -n "${NAMESPACE}" get pods -o wide

echo
echo "==> Services:"
kubectl -n "${NAMESPACE}" get svc

echo
echo "==> Ingress:"
kubectl -n "${NAMESPACE}" get ingress

echo
echo "==> Waiting for Pod readiness (model download may take several minutes)..."
kubectl -n "${NAMESPACE}" wait --for=condition=ready pod \
  -l "app=${APP_LABEL}" \
  --timeout=900s

echo
echo "=========================================="
echo "  Deployment complete"
echo "=========================================="
echo "  Chat UI : http://${CHAT_HOST}/"
echo "  API     : http://${API_HOST}/v1"
echo ""
echo "  Smoke test:"
echo "    curl http://${API_HOST}/v1/models"
echo "=========================================="
