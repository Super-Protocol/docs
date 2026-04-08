#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ===========================
# VALIDATE REQUIRED VARS
# ===========================
if [ -z "${API_KEY:-}" ]; then
  echo "ERROR: API_KEY must be set. Execute:" >&2
  echo "  read -rs API_KEY && export API_KEY" >&2
  exit 1
fi

if [ -z "${AWS_ACCESS_KEY_ID:-}" ] || [ -z "${AWS_SECRET_ACCESS_KEY:-}" ]; then
  echo "ERROR: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY must be set." >&2
  echo "  export AWS_ACCESS_KEY_ID=<your-key>" >&2
  echo "  export AWS_SECRET_ACCESS_KEY=<your-secret>" >&2
  exit 1
fi

if [ -z "${S3_ENDPOINT:-}" ] || [ -z "${S3_BUCKET:-}" ]; then
  echo "ERROR: S3_ENDPOINT and S3_BUCKET must be set." >&2
  echo "  export S3_ENDPOINT=<your-s3-endpoint>" >&2
  echo "  export S3_BUCKET=<your-bucket-id>" >&2
  exit 1
fi

S3_MODEL_PATH="${S3_MODEL_PATH:-models/qwen-1.5b}"

# ===========================
# DEPLOYMENT CONFIG
# ===========================
BASE_DOMAIN="${BASE_DOMAIN:-superprotocol.com}"
API_HOST="${API_HOST:-qwen-vllm-s3.${BASE_DOMAIN}}"
MODEL_NAME="s3://${S3_BUCKET}/${S3_MODEL_PATH}"
MODEL_ENTRY_NAME="${MODEL_ENTRY_NAME:-qwen}"
RELEASE_NAME="${RELEASE_NAME:-vllm-s3}"
IMAGE_REPOSITORY="${IMAGE_REPOSITORY:-vllm/vllm-openai}"
IMAGE_TAG="${IMAGE_TAG:-v0.8.5}"
GPU_MEMORY_UTILIZATION="${GPU_MEMORY_UTILIZATION:-0.85}"
MAX_MODEL_LEN="${MAX_MODEL_LEN:-4096}"
CPU_REQUEST="${CPU_REQUEST:-4}"
MEMORY_REQUEST="${MEMORY_REQUEST:-16Gi}"
GPU_COUNT="${GPU_COUNT:-1}"
PVC_STORAGE="${PVC_STORAGE:-10Gi}"
INGRESS_CLASS="${INGRESS_CLASS:-nginx}"

need() { command -v "$1" >/dev/null 2>&1 || { echo "Missing dependency: $1" >&2; exit 1; }; }
need kubectl
need helm

NAMESPACE="${NAMESPACE:-$(kubectl config view --minify -o jsonpath='{..namespace}' 2>/dev/null || true)}"
if [ -z "${NAMESPACE}" ]; then
  NAMESPACE="llm"
fi

SECRET_NAME="${RELEASE_NAME}-auth"
S3_SECRET_NAME="${RELEASE_NAME}-s3-creds"
SERVICE_NAME="${RELEASE_NAME}-${MODEL_ENTRY_NAME}-engine-service"
INGRESS_NAME="${RELEASE_NAME}-api-ingress"

echo "==> Runtime: vLLM (official helm chart) + S3 model"
echo "==> Namespace: ${NAMESPACE}"
echo "==> Release: ${RELEASE_NAME}"
echo "==> API host: ${API_HOST}"
echo "==> Model (S3): ${MODEL_NAME}"
echo "==> S3 endpoint: ${S3_ENDPOINT}"
echo "==> Image: ${IMAGE_REPOSITORY}:${IMAGE_TAG}"
echo

kubectl get ns "${NAMESPACE}" >/dev/null 2>&1 || kubectl create ns "${NAMESPACE}"

helm repo add vllm https://vllm-project.github.io/production-stack >/dev/null 2>&1 || true
helm repo update >/dev/null 2>&1

# API key secret
cat <<EOF | kubectl -n "${NAMESPACE}" apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: ${SECRET_NAME}
type: Opaque
stringData:
  VLLM_API_KEY: ${API_KEY}
EOF

# S3 credentials secret
cat <<EOF | kubectl -n "${NAMESPACE}" apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: ${S3_SECRET_NAME}
type: Opaque
stringData:
  AWS_ACCESS_KEY_ID: ${AWS_ACCESS_KEY_ID}
  AWS_SECRET_ACCESS_KEY: ${AWS_SECRET_ACCESS_KEY}
  AWS_DEFAULT_REGION: ${AWS_DEFAULT_REGION:-us-east-1}
  AWS_ENDPOINT_URL: ${S3_ENDPOINT}
EOF

VALUES_FILE="$(mktemp)"
cleanup() { rm -f "${VALUES_FILE}"; }
trap cleanup EXIT

cat > "${VALUES_FILE}" <<EOF
servingEngineSpec:
  runtimeClassName: nvidia
  vllmApiKey:
    secretName: ${SECRET_NAME}
    secretKey: VLLM_API_KEY
  modelSpec:
    - name: ${MODEL_ENTRY_NAME}
      repository: ${IMAGE_REPOSITORY}
      tag: ${IMAGE_TAG}
      modelURL: /model-cache
      replicaCount: 1
      requestCPU: ${CPU_REQUEST}
      requestMemory: "${MEMORY_REQUEST}"
      requestGPU: ${GPU_COUNT}
      pvcStorage: "${PVC_STORAGE}"
      initContainer:
        name: s3-downloader
        image: amazon/aws-cli:latest
        command: ["sh", "-c"]
        args:
          - |
            aws configure set default.s3.multipart_threshold 10GB &&
            aws configure set default.s3.multipart_chunksize 10GB &&
            aws s3 sync s3://${S3_BUCKET}/${S3_MODEL_PATH} /model-cache/ \
              --endpoint-url ${S3_ENDPOINT} \
              --no-progress \
              --exclude ".cache/*"
        env:
          - name: AWS_ACCESS_KEY_ID
            valueFrom:
              secretKeyRef:
                name: ${S3_SECRET_NAME}
                key: AWS_ACCESS_KEY_ID
          - name: AWS_SECRET_ACCESS_KEY
            valueFrom:
              secretKeyRef:
                name: ${S3_SECRET_NAME}
                key: AWS_SECRET_ACCESS_KEY
          - name: AWS_DEFAULT_REGION
            valueFrom:
              secretKeyRef:
                name: ${S3_SECRET_NAME}
                key: AWS_DEFAULT_REGION
          - name: S3_BUCKET
            value: "${S3_BUCKET}"
          - name: S3_MODEL_PATH
            value: "${S3_MODEL_PATH}"
          - name: S3_ENDPOINT
            value: "${S3_ENDPOINT}"
        extraVolumeMounts:
          - name: model-cache
            mountPath: /model-cache
      extraVolumes:
        - name: model-cache
          emptyDir: {}
      extraVolumeMounts:
        - name: model-cache
          mountPath: /model-cache
      vllmConfig:
        dtype: float16
        maxModelLen: ${MAX_MODEL_LEN}
        gpuMemoryUtilization: ${GPU_MEMORY_UTILIZATION}
        enablePrefixCaching: true
        enableChunkedPrefill: true
        maxNumSeqs: 8
        extraArgs:
          - --served-model-name
          - ${MODEL_ENTRY_NAME}
routerSpec:
  enableRouter: false
EOF

echo "==> Values file:"
cat "${VALUES_FILE}"
echo

KUBECONFIG="${KUBECONFIG:-}" helm upgrade --install "${RELEASE_NAME}" vllm/vllm-stack \
  --namespace "${NAMESPACE}" \
  -f "${VALUES_FILE}" \
  --skip-crds \
  --wait --timeout=20m

cat <<EOF | kubectl -n "${NAMESPACE}" apply -f -
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ${INGRESS_NAME}
  annotations:
    kubernetes.io/ingress.class: ${INGRESS_CLASS}
    nginx.ingress.kubernetes.io/proxy-body-size: "0"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-buffering: "off"
spec:
  rules:
  - host: ${API_HOST}
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: ${SERVICE_NAME}
            port:
              number: 80
EOF

echo
echo "==> Pods:"
kubectl -n "${NAMESPACE}" get pods -o wide
echo
echo "==> Services:"
kubectl -n "${NAMESPACE}" get svc -o wide
echo
echo "==> Ingress:"
kubectl -n "${NAMESPACE}" get ingress -o wide
echo
echo "==> Waiting for vLLM pod readiness..."
kubectl -n "${NAMESPACE}" wait --for=condition=ready pod \
  -l "model=${MODEL_ENTRY_NAME},helm-release-name=${RELEASE_NAME}" \
  --timeout=900s
echo
echo "==================================="
echo "Ready. API base URL: http://${API_HOST}/v1"
echo "Model: ${MODEL_NAME}"
echo "Smoke test:"
echo "  curl http://${API_HOST}/v1/models -H 'Authorization: Bearer \${API_KEY}'"
echo "==================================="
