---
id: "swarm-vllm-s3"
title: "Super Swarm: LLM Deployment with S3 Storage"
slug: "/guides/swarm-vllm-s3"
sidebar_position: 21
---

This guide provides step-by-step instructions for deploying an LLM on Super Swarm using an S3 object storage, with Qwen2.5 as an example. Modify the deployment script if you want to launch another model.

## Prerequisites

- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [helm](https://helm.sh/docs/intro/install/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- A domain to construct an API endpoint hostname

## 1. Download the deployment script

Download and rename the deployment script [`deploy_qwen_s3.sh`](/files/deploy_qwen_s3.sh).

In the script, find `BASE_DOMAIN="${BASE_DOMAIN:-superprotocol.com}"` and replace `superprotocol.com` with your domain.

Modify the deployment configuration and `vllmConfig` if you are deploying another model.

## 2. Sign in to Super Swarm

In the Super Swarm dashboard, sign in using either Google (recommended) or MetaMask.

<img src={require('../images/swarm-sign-in.png').default} width="auto" height="auto" border="1"/>
<br/>

## 3. Create a service account

**3.1.** Open **Service Accounts** and click **Create Service Account**:

<img src={require('../images/swarm-create-service-account.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**3.2.** Provide a name and click **Create**:

<img src={require('../images/swarm-create-service-account-window.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**3.3.** Copy and save both Access and Secret keys and click **Done**:

<img src={require('../images/swarm-create-service-account-keys.png').default} width="auto" height="auto" border="1"/>
<br/>

## 4. Create a bucket

**4.1.** Open **Object Storage** and click **Create Bucket**:

<img src={require('../images/swarm-object-storage.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**4.2.** Provide a name for the bucket and click **Create Bucket**:

<img src={require('../images/swarm-create-bucket.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

## 5. Provide access to the bucket

**5.1.** In Object Storage, click **Policy Rules**:

<img src={require('../images/swarm-object-storage-policy-rules.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**5.2.** Click **+Grant Access** in the top-right corner, select a Service Account, and click **Grant Access**:

<img src={require('../images/swarm-policy-rules-grant-access.png').default} width="auto" height="auto" border="1"/>
<br/>

## 6. Download a model from Hugging Face

This guide uses Qwen2.5 as an example. If you already have the model, skip this step.

**6.1.** Install [`huggingface_hub`](https://huggingface.co/docs/huggingface_hub/installation).

**6.2.** Download the model:

```shell
hf download Qwen/Qwen2.5-1.5B-Instruct --local-dir ./qwen-1.5b
```

## 7. Upload the model

**7.1.** In **Object Storage**, click **Connect Info** to see your S3 Endpoint, Bucket ID, and the region:

<img src={require('../images/swarm-object-storage-connect-info.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

<img src={require('../images/swarm-connect-info.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**7.2.** Export the following variables to set up the connection:

```shell
export AWS_ACCESS_KEY_ID="<YOUR_ACCESS_KEY>"
export AWS_SECRET_ACCESS_KEY="<YOUR_SECRET_KEY>"
export AWS_DEFAULT_REGION="us-east-1"
export S3_ENDPOINT="<YOUR_S3_ENDPOINT>"
export S3_BUCKET="<YOUR_BUCKET_ID>"
```

Replace:
- `<YOUR_ACCESS_KEY>` and `<YOUR_SECRET_KEY>` with the keys you obtained in [Step 3](/cli/guides/swarm-vllm-s3#3-create-a-service-account).
- `<YOUR_S3_ENDPOINT>` and `<YOUR_BUCKET_ID>` with corresponding values in the **Connect Info**.

Ensure `AWS_DEFAULT_REGION` matches the region in the **Connect Info**.

**7.3.** Upload the model:

```shell
aws s3 sync ./qwen-1.5b s3://${S3_BUCKET}/models/qwen-1.5b/ \
    --endpoint-url ${S3_ENDPOINT} \
    --exclude ".cache/*"
```

**7.4.** Check if the model was uploaded successfully:

```shell
aws s3 ls s3://${S3_BUCKET}/models/qwen-1.5b/ \
  --endpoint-url ${S3_ENDPOINT}
```

## 8. Create a Kubernetes cluster

**8.1.** Go to **Kubernetes** and click **Create Cluster**:

<img src={require('../images/swarm-kubernetes-create-cluster.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**8.2.** Provide a name, add a **GPU** to the cluster, allocate resources, and click **Create Cluster**:

<img src={require('../images/swarm-create-kubernetes-space.png').default} width="auto" height="auto" border="1"/>
<br/>

## 9. Download the cluster configuration file

<img src={require('../images/swarm-kubernetes-download-kubeconfig.png').default} width="auto" height="auto" border="1"/>
<br/>

## 10. Point `kubectl` to the configuration file

Execute the following command:

```shell
export KUBECONFIG=<xxxx-xxx-xxx-xxxx>-kubeconfig.yaml
```

Replace `<xxxx-xxx-xxx-xxxx>-kubeconfig.yaml` with the name of the cluster configuration file.

## 11. Set the API key

Choose a password that will protect your API endpoints. Execute the following command and type your chosen secret (characters won't be displayed):

```shell
read -rs API_KEY && export API_KEY
```

## 12. Deploy the model

Execute the deployment script:

```shell
bash deploy_qwen_s3.sh
```

## 13. Confirm DNS records

Back in the Super Swarm dashboard, go to **Ingresses** and check the hostname listed there:

<img src={require('../images/swarm-ingresses-s3.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

At your DNS provider, add a CNAME record pointing to the hostname and a TXT record for domain verification. 

Ensure the statuses have changed to **Verified** and **Delegated**. This may take a couple of minutes.

<img src={require('../images/swarm-ingresses-s3-verified.png').default} width="auto" height="auto" border="1"/>
<br/>

## 14. Publish the cluster

Go to **Kubernetes** and publish the cluster.

<img src={require('../images/swarm-kubernetes-publish-cluster.png').default} width="auto" height="auto" border="1"/>
<br/>


## 15. Send a test request

In the following test request, replace `<YOUR_DOMAIN>` with your domain.

```shell
curl https://qwen-vllm-s3.<YOUR_DOMAIN>/v1/chat/completions \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen",
    "messages": [{"role": "user", "content": "Hello! What model are you?"}],
    "max_tokens": 100
  }'
```

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).