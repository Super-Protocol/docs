---
id: "swarm-vllm"
title: "vLLM on Super Swarm"
slug: "/guides/swarm-vllm"
sidebar_position: 20
---

This guide provides step-by-step instructions for deploying MedGemma and Apertus on Super Swarm using vLLM.

## Prerequisites

- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [helm](https://helm.sh/docs/intro/install/)
- A domain
- For [MedGemma](https://huggingface.co/google/medgemma-1.5-4b-it): a Hugging Face token from an account that has already accepted the model's terms

Also, download and rename deployment scripts:

- [`deploy_medgemma_official.sh`](/files/deploy_medgemma_official.sh)
- [`deploy_apertus_official.sh`](/files/deploy_apertus_official.sh)

## 1. Sign in to Super Swarm

In the Super Swarm dashboard, sign in using MetaMask:

<img src={require('../images/swarm-log-in.png').default} width="auto" height="auto" border="1"/>
<br/>

## 2. Create a Kubernetes cluster

2.1. Go to **Kubernetes** and press **Create Cluster**:

<img src={require('../images/kubernetes-create-cluster.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.2. Add a GPU to the cluster, allocate resources, and press **Create Cluster**:

<img src={require('../images/create-kubernetes-space.png').default} width="auto" height="auto" border="1"/>
<br/>

## 3. Download the cluster configuration file

<img src={require('../images/kubernetes-download-kubeconfig.png').default} width="auto" height="auto" border="1"/>
<br/>

## 4. Point `kubectl` to the configuration file

Execute the following command:

```shell
export KUBECONFIG=<xxxx-xxx-xxx-xxxx>-kubeconfig.yaml
```

Replace `<xxxx-xxx-xxx-xxxx>-kubeconfig.yaml` with the name of the downloaded configuration file.

## 5. Update the scripts

In both scripts (`deploy_medgemma_official.sh` and `deploy_apertus_official.sh`), find `BASE_DOMAIN="${BASE_DOMAIN:-monai-swarm.win}"` and replace `monai-swarm.win` with your domain.

## 6. Set the API key

Choose any password that will protect your API endpoints. Execute the following command and type your chosen secret (characters won't be displayed):

```shell
read -rs API_KEY && export API_KEY
```

## 7. Deploy the model

### Apertus

```shell
bash deploy_apertus_official.sh
```

The deployment usually takes 5-7 minutes.

A working Apertus config is already set in the script:

```
dtype=bfloat16
max-model-len=32768
gpu-memory-utilization=0.55
max-num-seqs=8
max-num-batched-tokens=4096
```

### MedGemma

```shell
export HF_TOKEN=hf_xxx
bash deploy_medgemma_official.sh
```

Replace `hf_xxx` with an HF_TOKEN.

Alternatively, create a `.hf_token` file with the token next to `deploy_medgemma_official.sh`; the script will read it automatically.

A working MedGemma config is already set in the script:

```
dtype=bfloat16
max-model-len=8192
gpu-memory-utilization=0.40
--mm-processor-cache-gb 1
max-num-seqs=4
max-num-batched-tokens=2048
```

## 8. Check Kubernetes

```shell
kubectl get pods -o wide
kubectl get svc
kubectl get ingress
```

Expected output:

- Two pods in `1/1 Running`
- Two services
- Two ingresses

## 9. Confirm DNS records

Back in the Super Swarm dashboard, go to **Ingresses** and note the two hostnames listed there.

<img src={require('../images/ingresses.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

For each hostname, add a CNAME record pointing to it and a TXT record for domain verification at your DNS provider.

## 10. Publish the cluster

In the Super Swarm dashboard, go to **Kubernetes** and publish the cluster.

<img src={require('../images/kubernetes-publish-cluster.png').default} width="auto" height="auto" border="1"/>
<br/>

## 11. Send test requests

In the test requests below, replace:

- `<DOMAIN>` with your domain.
- `<API_KEY>` with the key you set in [Step 6](/cli/guides/swarm-vllm#6-set-the-api-key).

### Apertus

```shell
curl https://apertus-vllm.<DOMAIN>/v1/completions \
  -H 'Authorization: Bearer <API_KEY>' \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "swiss-ai/Apertus-8B-2509",
    "prompt": "Write a concise technical summary of Kubernetes GPU scheduling.",
    "temperature": 0,
    "max_tokens": 200
  }'
```

### MedGemma

```shell
curl https://medgemma-vllm.<DOMAIN>/v1/chat/completions \
  -H 'Authorization: Bearer <API_KEY>' \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "google/medgemma-1.5-4b-it",
    "messages": [
      {
        "role": "user",
        "content": [
          {"type": "text", "text": "Describe this image briefly."},
          {"type": "image_url", "image_url": {"url": "data:image/png;base64,PASTE_BASE64_HERE"}} 
        ]
      }
    ],
    "temperature": 0,
    "max_tokens": 120
  }'
```