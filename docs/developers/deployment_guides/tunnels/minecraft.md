---
id: 'minecraft'
title: 'Example: Minecraft'
slug: '/deployment_guides/tunnels/minecraft'
sidebar_position: 6
---

## Prerequisites

Same as in [Part 1](/developers/deployment_guides/tunnels/preparing) of this guide.

## Download Minecraft source code

To launch the game you will need the Minecraft server and a web client.
In this example we'll be using [flying-squid](https://github.com/PrismarineJS/flying-squid) and web client [prismarine-web-client](https://github.com/PrismarineJS/prismarine-web-client).

The first step is to download Minecraft from our [GitHub repository](https://github.com/Super-Protocol/solutions/tree/main/Tunnel%20Client/minecraft):

```bash
git clone https://github.com/Super-Protocol/solutions
cd solutions/Tunnel\ Client/minecraft/
```

## Local run

Install all necessary dependencies and build the project:

```bash
yarn dependencies
yarn build:all
```

Run Minecraft using `docker compose`:

```bash
docker compose up
```

Connect using this link http://localhost:8888.

## Deploy on Super Protocol

### Manual deploy

To deploy Minecraft using tunnels manually you first need to install dependencies and build the project for the linux/amd64 platform. To do this, run the following command from the Minecraft directory:

```bash
docker run --platform linux/amd64 --rm -it -w /home/node -v ./:/home/node node:16-buster yarn dependencies && yarn build:all
```

Copy folders and files `dist`, `node_modules`, `package.json`, `server`, `client` to the `content` folder and then follow the steps in [Part 3](/developers/deployment_guides/tunnels/manual_run) of this guide.



### Deploy with GitHub Actions

Create a [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of our [solutions](https://github.com/Super-Protocol/solutions) repository.

Next, follow the steps in [Part 4](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables) to automate GitHub actions. Some variables will be different.

**Required GitHub Secrets:**

- `GH_TOKEN` - same as in [Part 4](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables).

- `MINECRAFT_SOLUTION_SERVER_TOKEN` - any random UUID. Generate it using this command:

  ```bash
  uuidgen
  ```

  And add it as a secret. This UUID cannot be the same as the one you used to deploy the tunnel server of some other solution. It must be unique.

- `MINECRAFT_SOLUTION_SSL_CERTIFICATE_BASE64` - generate a separate SSL certificate for Minecraft ([Part 1](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate)). Convert it to base64 using this command:

  ```bash
  cat <your SSL cerficate.crt> | base64
  ```

- `MINECRAFT_SOLUTION_SSL_KEY_BASE64` - private key from your generated SSL certificate ([Part 1](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate)). Convert it to base64 using this command:

  ```bash
  cat <your SSL private key.pem> | base64
  ```

- `SPCTL_CONFIG_BASE64` - same as in [Part 4](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables).

**Required GitHub Variables:**

- `TUNNEL_SERVER_MRENCLAVE` and `TUNNEL_SERVER_MRSIGNER`, as in [Part 4](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables)

- `MINECRAFT_DOMAIN` (optional) - specify here your Minecraft domain if you are using wildcard SSL certificate

Next, go to the "Actions" tab of your repository and start the Minecraft deployment actions! They can run in parallel.

After the successful execution of GitHub Actions you will need to manually configure DNS for your Minecraft domain. Use the instructions from [Part 4: Setup DNS](/developers/deployment_guides/tunnels/repo#setup-dns).

