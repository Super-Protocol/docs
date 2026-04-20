---
id: "swarm-vllm"
title: "Super Swarm: LLM Deployment (API)"
slug: "/guides/swarm-vllm"
sidebar_position: 20
displayed_sidebar: null
unlisted: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions for deploying an LLM on Super Swarm using [vLLM](https://github.com/vllm-project/vllm), with MedGemma and Apertus as examples. Modify the deployment script if you want to launch another model.

## Prerequisites

- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [helm](https://helm.sh/docs/intro/install/)
- A domain to construct API endpoint hostnames
- For [MedGemma](https://huggingface.co/google/medgemma-1.5-4b-it): a Hugging Face token from an account that has already accepted the model's terms

## 1. Download and update deployment scripts

<Tabs>
    <TabItem value="medgemma" label="MedGemma" default>
      Download and rename the deployment script [`deploy_medgemma_official.sh`](/files/deploy_medgemma_official.sh)
    </TabItem>
    <TabItem value="apertus" label="Apertus">
      Download and rename the deployment script [`deploy_apertus_official.sh`](/files/deploy_apertus_official.sh)
    </TabItem>
</Tabs>

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

<img src={require('../images/swarm-kubernetes-download-kubeconfig.png').default} width="auto" height="auto" border="1"/>
<br/>

## 5. Point `kubectl` to the configuration file

Execute the following command:

```shell
export KUBECONFIG=<xxxx-xxx-xxx-xxxx>-kubeconfig.yaml
```

Replace `<xxxx-xxx-xxx-xxxx>-kubeconfig.yaml` with the name of the downloaded configuration file.

## 6. Set the API key

Choose a password that will protect your API endpoints. Execute the following command and type your chosen secret (characters won't be displayed):

```shell
read -rs API_KEY && export API_KEY
```

## 7. Deploy the model

<Tabs>
    <TabItem value="medgemma" label="MedGemma" default>
      ```shell
      export HF_TOKEN=hf_xxx
      bash deploy_medgemma_official.sh
      ```

      Replace `hf_xxx` with an HF_TOKEN.

      Alternatively, create a `.hf_token` file with the token next to `deploy_medgemma_official.sh`; the script will read it automatically.

      A working MedGemma configuration is already set in the script:

      ```
      dtype=bfloat16
      max-model-len=8192
      gpu-memory-utilization=0.40
      --mm-processor-cache-gb 1
      max-num-seqs=4
      max-num-batched-tokens=2048
      ```
    </TabItem>
    <TabItem value="apertus" label="Apertus">
      ```shell
      bash deploy_apertus_official.sh
      ```

      A working Apertus configuration is already set in the script:

      ```
      dtype=bfloat16
      max-model-len=32768
      gpu-memory-utilization=0.55
      max-num-seqs=8
      max-num-batched-tokens=4096
      ```
    </TabItem>
</Tabs>

## 8. Check Kubernetes

```shell
kubectl get pods -o wide
kubectl get svc
kubectl get ingress
```

Expected output:

- A pod in `1/1 Running`
- A service
- An ingress

## 9. Confirm DNS records

Back in the Super Swarm dashboard, go to **Ingresses** and note a hostname listed there.

<img src={require('../images/swarm-ingresses-vllm.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

At your DNS provider, add a CNAME record pointing to the hostname and a TXT record for domain verification.

Back in the Super Swarm dashboard, ensure the statuses are **Verified** and **Delegated**. This may take a couple of minutes.

<img src={require('../images/swarm-ingresses-vllm-verified.png').default} width="auto" height="auto" border="1"/>
<br/>

## 10. Publish the cluster

Go to **Kubernetes** and publish the cluster.

<img src={require('../images/swarm-kubernetes-publish-cluster.png').default} width="auto" height="auto" border="1"/>
<br/>

## 11. Send test requests

<Tabs>
    <TabItem value="medgemma" label="MedGemma" default>
      In the following test request, replace:

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
    </TabItem>
    <TabItem value="apertus" label="Apertus">
      In the following test request, replace `<YOUR_DOMAIN>` with your domain.

      ```shell
      curl https://apertus-vllm.<YOUR_DOMAIN>/v1/completions \
        -H 'Authorization: Bearer ${API_KEY}' \
        -H 'Content-Type: application/json' \
        -d '{
          "model": "swiss-ai/Apertus-8B-2509",
          "prompt": "Write a concise technical summary of Kubernetes GPU scheduling.",
          "temperature": 0,
          "max_tokens": 200
        }'
      ```
    </TabItem>
</Tabs>

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).