---
id: "swarm-vllm-openwebui"
title: "Deploy vLLM + Open WebUI"
slug: "/guides/swarm-vllm-openwebui"
sidebar_position: 1
---

This guide provides step-by-step instructions for deploying an LLM on Super Swarm using [vLLM](https://github.com/vllm-project/vllm) and [Open WebUI](https://github.com/open-webui/open-webui). The guides uses MedGemma as an example; modify the deployment script accordingly if you want to launch another model.

## Prerequisites

- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [helm](https://helm.sh/docs/intro/install/)
- A domain to construct API and WebUI endpoint hostnames
- For MedGemma from Hugging Face: accept the [model's terms](https://huggingface.co/google/medgemma-27b-it) and create a [Hugging Face `READ` token](https://huggingface.co/settings/tokens)

## 1. Download and update the deployment script

Download and rename the deployment script [`deploy_vllm_openwebui_medgemma.sh`](/files/deploy_vllm_openwebui_medgemma.sh).

In the script, find `BASE_DOMAIN="${BASE_DOMAIN:-superprotocol.com}"` and replace `superprotocol.com` with your domain.

Modify the deployment parameters if you are using another model.

## 2. Sign in to Super Swarm

In the Super Swarm dashboard, sign in using either Google (recommended) or MetaMask.

<img src={require('../images/swarm-sign-in.png').default} width="auto" height="auto" border="1"/>
<br/>

## 3. Create a Kubernetes cluster

**3.1.** Go to **Kubernetes** and click **Create Cluster**:

<img src={require('../images/swarm-kubernetes-create-cluster.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**3.2.** Provide a name, add a **GPU** to the cluster, allocate resources, and click **Create Cluster**:

<img src={require('../images/swarm-create-kubernetes-space.png').default} width="auto" height="auto" border="1"/>
<br/>

## 4. Download the cluster configuration file

Download the `kubeconfig`:

<img src={require('../images/swarm-kubernetes-download-kubeconfig.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Rename the file to `kubeconfig.yaml`, so the script recognizes it automatically. Alternatively, point `kubectl` to the configuration file manually (replace `<YOUR_KUBECONFIG>` with the actual file name):

```shell
export KUBECONFIG=<YOUR_KUBECONFIG>.yaml
```

## 5. Set the API key and HF token

**5.1.** Choose a password that will protect your API endpoints. Execute the following command and type your chosen secret (characters won't be displayed):

```shell
read -rs API_KEY && export API_KEY
```

**5.2.** If you are using MedGemma from Hugging Face, create a `.hf_token` file with the HF token next to `deploy_vllm_openwebui_medgemma.sh`; the script will read it automatically.

Alternatively, export the token manually (replace `<YOUR_READ_TOKEN>` with the token):

```shell
export HF_TOKEN=<YOUR_READ_TOKEN>
```

## 6. Deploy the model

```shell
bash deploy_vllm_openwebui_medgemma.sh
```

A working MedGemma configuration is already set in the script:

```
dtype=bfloat16
max-model-len=8192
gpu-memory-utilization=0.40
--mm-processor-cache-gb 1
max-num-seqs=4
max-num-batched-tokens=2048
```

## 7. Confirm DNS records

Back in the Super Swarm dashboard, go to **Ingresses** and note two hostnames listed there.

```
<img src={require('../images/swarm-ingresses-vllm-openwebui.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>
```

At your DNS provider, add a CNAME record pointing to a hostname and a TXT record for domain verification. Do this for both hostnames.

Back in the Super Swarm dashboard, ensure the statuses have changed to **Verified** and **Delegated**. This may take a couple of minutes.

```
<img src={require('../images/swarm-ingresses-vllm-openwebui-verified.png').default} width="auto" height="auto" border="1"/>
<br/>
```

## 8. Publish the cluster

Go to **Kubernetes** and publish the cluster.

<img src={require('../images/swarm-kubernetes-publish-cluster.png').default} width="auto" height="auto" border="1"/>
<br/>

## 9. Test the deployment

### WebUI

The model's web UI should be available at `medgemma.<YOUR_DOMAIN>`, where `<YOUR_DOMAIN>` is, obviously, your domain.

### API

Below is an API test request. In this request, replace:

- `<YOUR_DOMAIN>` with your domain.
- `<BASE64_IMAGE>` with a base64-encoded image. To convert an image, use the command: `base64 -i your-image.png`.

Ensure that `image/png` matches your actual file type; use `image/jpeg` for JPG files, for example.

```shell
curl https://medgemma-vllm.<YOUR_DOMAIN>/v1/chat/completions \
-H 'Authorization: Bearer ${API_KEY}' \
-H 'Content-Type: application/json' \
-d '{
    "model": "google/medgemma-1.5-4b-it",
    "messages": [
    {
        "role": "user",
        "content": [
        {"type": "text", "text": "Describe this image briefly."},
        {"type": "image_url", "image_url": {"url": "data:image/png;base64,<BASE64_IMAGE>"}}
        ]
    }
    ],
    "temperature": 0,
    "max_tokens": 120
}'
```

## Troubleshooting

Use the following commands to get information and the status of your deployment.

1. Lists all Pods in the current namespace:

```shell
kubectl get pods -o wide
```

Expected output:

2. Lists all Services in the current namespace:

```shell
kubectl get svc
```

Expected output:

3. Lists all Ingress resources in the current namespace:

```shell
kubectl get ingress
```

Expected output:

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).