---
id: 'superchat'
title: 'Example: SuperChat'
slug: '/deployment_guides/tunnels/superchat'
sidebar_position: 7
---

This is the guide to deploy the [Super Chat](/developers/offers/superchat) app. These steps are complimentary to the main [tunnels deployment guide](/developers/deployment_guides/tunnels/preparing).

## Prerequisites

Same as in [Part 1](/developers/deployment_guides/tunnels/preparing) of this guide.

## Download Super Chat source code

First step is to download the [source code](https://github.com/Super-Protocol/solutions/tree/main/Tunnel%20Client/chat):

```bash
git clone https://github.com/Super-Protocol/solutions
cd solutions/Tunnel\ Client/chat/
```

## Setup env variables

Create `.env` file using command:

```bash
cp .env.example .env
```

In addition to storage access that you have previously [created](/cli) to configure SPCTL, you will need S3 credentials for those buckets (because the Super Chat app uses S3 to interact with StorJ). Get them through [this guide](https://docs.storj.io/dcs/access#create-s3-credentials).

Add `Access Key`, `Secret Key`, `S3 Endpoint` and the name of your bucket to the `.env` file.

For example:

```
S3_ACCESS_KEY_ID=jv467.....
S3_ACCESS_SECRET_KEY=jy8wqh6......
S3_ENDPOINT=https://gateway.storjshare.io
STORJ_BUCKET=superchat
```

## Local run

Super Chat only works on the linux/amd64 platform with necessary external dependencies, such as  `python 3.10` и `go 1.18`. To install dependencies and build the project, go to root solution folder and use the docker-compose command:

```bash
docker compose up build
```

Wait until it finishes. It should take about 5-10 minutes.

Then, run solution:

```bash
docker compose up chat
```

And connect to it at http://localhost:3000.

## Deploy on Superprotocol

### Manual deploy

To deploy Super Chat using tunnels manually you first need to install dependencies and build the project for the linux/amd64 platform. Execute the following command (if you haven't done it previously):
):

```bash
docker compose up build
```

Copy folders and files `.next`, `dist`, `node_modules`, `public` ,`next.config.js`, `package.json`, `.env` to the `content` folder and then follow the steps in [Part 3](/developers/deployment_guides/tunnels/manual_run) of this guide.

### Deploy with Github Actions

Create a [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of our [solutions](https://github.com/Super-Protocol/solutions) repository.

Next, follow the steps in [Part 4](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables) to automate GitHub actions. Some variables will be different.

**Required GitHub Secrets:**

- `CHAT_ENV` - *.env* file, which you prepared previously. Convert it to base64 using this command:
  ```bash
  cat .env | base64
  ```

- `GH_TOKEN` - same as in [Part 4](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables).

- `SUPERCHAT_SOLUTION_SERVER_TOKEN` - any random UUID. Generate it using this command:

  ```bash
  uuidgen
  ```

  And add it as a secret. This UUID cannot be the same as the one you used to deploy the tunnel server of some other solution. It must be unique.

- `SUPERCHAT_SOLUTION_SSL_CERTIFICATE_BASE64` - generate a separate SSL certificate for Minecraft ([Part 1](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate)). Convert it to base64 using this command:

  ```bash
  cat <your SSL cerficate.crt> | base64
  ```

- `SUPERCHAT_SOLUTION_SSL_KEY_BASE64` - private key from your generated SSL certificate ([Part 1](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate)). Convert it to base64 using this command:

  ```bash
  cat <your SSL private key.pem> | base64
  ```

- `SPCTL_CONFIG_BASE64` - same as in [Part 4](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables).

**Required GitHub Variables:**

- `TUNNEL_SERVER_MRENCLAVE` and `TUNNEL_SERVER_MRSIGNER`, as in [Part 4](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables)

- `SUPERCHAT_DOMAIN` (optional) - specify here your Superchat domain if you are using wildcard SSL certificate

Next, go to the "Actions" tab of your repository and start the Super Chat deployment actions! They can run in parallel.

After the successful execution of GitHub Actions you will need to manually configure DNS for your Super Chat domain. Use the instructions from [Part 4: Setup DNS](/developers/deployment_guides/tunnels/repo#setup-dns).
