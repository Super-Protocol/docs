#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

BASE_DOMAIN="${BASE_DOMAIN:-monai-swarm.win}"
API_HOST="${API_HOST:-apertus-vllm.${BASE_DOMAIN}}"
MODEL_NAME="${MODEL_NAME:-swiss-ai/Apertus-8B-2509}"
MODEL_ENTRY_NAME="${MODEL_ENTRY_NAME:-apertus}"
RELEASE_NAME="${RELEASE_NAME:-apertus-official}"
if [ -z "${API_KEY:-}" ]; then
  echo "API_KEY must be set. Execute:" >&2
  echo "read -rs API_KEY && export API_KEY" >&2
  echo "And then type a desired key." >&2
  exit 1
fi
IMAGE_REPOSITORY="${IMAGE_REPOSITORY:-vllm/vllm-openai}"
IMAGE_TAG="${IMAGE_TAG:-v0.18.0}"
GPU_MEMORY_UTILIZATION="${GPU_MEMORY_UTILIZATION:-0.55}"
MAX_MODEL_LEN="${MAX_MODEL_LEN:-32768}"
CPU_REQUEST="${CPU_REQUEST:-8}"
MEMORY_REQUEST="${MEMORY_REQUEST:-48Gi}"
GPU_COUNT="${GPU_COUNT:-1}"
PVC_STORAGE="${PVC_STORAGE:-80Gi}"
INGRESS_CLASS="${INGRESS_CLASS:-nginx}"

need() { command -v "$1" >/dev/null 2>&1 || { echo "Missing dependency: $1" >&2; exit 1; }; }
need kubectl
need helm

NAMESPACE="${NAMESPACE:-$(kubectl config view --minify -o jsonpath='{..namespace}' 2>/dev/null || true)}"
if [ -z "${NAMESPACE}" ]; then
  NAMESPACE="llm"
fi

SECRET_NAME="${RELEASE_NAME}-auth"
SERVICE_NAME="${RELEASE_NAME}-${MODEL_ENTRY_NAME}-engine-service"
DEPLOY_LABEL_MODEL="${MODEL_ENTRY_NAME}"
INGRESS_NAME="${RELEASE_NAME}-api-ingress"

echo "==> Runtime: vLLM (official helm chart)"
echo "==> Namespace: ${NAMESPACE}"
echo "==> Release: ${RELEASE_NAME}"
echo "==> API host: ${API_HOST}"
echo "==> Model: ${MODEL_NAME}"
echo "==> Model entry name: ${MODEL_ENTRY_NAME}"
echo "==> Image: ${IMAGE_REPOSITORY}:${IMAGE_TAG}"
echo "==> Max model length: ${MAX_MODEL_LEN}"
echo "==> GPU memory utilization: ${GPU_MEMORY_UTILIZATION}"
echo

kubectl get ns "${NAMESPACE}" >/dev/null 2>&1 || kubectl create ns "${NAMESPACE}"

helm repo add vllm https://vllm-project.github.io/production-stack >/dev/null 2>&1 || true
helm repo update >/dev/null 2>&1

cat <<EOF | kubectl -n "${NAMESPACE}" apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: ${SECRET_NAME}
type: Opaque
stringData:
  VLLM_API_KEY: ${API_KEY}
EOF

VALUES_FILE="$(mktemp)"
cleanup() {
  rm -f "${VALUES_FILE}"
}
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
      modelURL: ${MODEL_NAME}
      replicaCount: 1
      requestCPU: ${CPU_REQUEST}
      requestMemory: "${MEMORY_REQUEST}"
      requestGPU: ${GPU_COUNT}
      pvcStorage: "${PVC_STORAGE}"
      vllmConfig:
        dtype: bfloat16
        maxModelLen: ${MAX_MODEL_LEN}
        gpuMemoryUtilization: ${GPU_MEMORY_UTILIZATION}
        enablePrefixCaching: true
        enableChunkedPrefill: true
        maxNumSeqs: 8
        extraArgs:
          - --max-num-batched-tokens
          - "4096"
routerSpec:
  enableRouter: false
EOF

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
echo "==> Waiting for Apertus pod readiness..."
kubectl -n "${NAMESPACE}" wait --for=condition=ready pod \
  -l "model=${DEPLOY_LABEL_MODEL},helm-release-name=${RELEASE_NAME}" \
  --timeout=900s
echo
echo "==> Ready"
echo "Base URL: https://${API_HOST}/v1"
echo "Model: ${MODEL_NAME}"
echo "Example:"
echo "  curl https://${API_HOST}/v1/models -H 'Authorization: Bearer ${API_KEY}'"
