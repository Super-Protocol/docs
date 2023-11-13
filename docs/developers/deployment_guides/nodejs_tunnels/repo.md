---
id: "repo"
title: "2. Configure Repository"
slug: "/deployment_guides/nodejs_tunnels/repo"
sidebar_position: 2
---

For automated deployment of the solution, you can use GitHub Actions: [Tunnel Server](https://github.com/Super-Protocol/solutions/blob/main/.github/workflows/minecraft-tunnel-server-deploy.yml) and [Tunnel Client](https://github.com/Super-Protocol/solutions/blob/main/.github/workflows/minecraft-tunnel-client-deploy.yml).  

<Highlight color="red">//тут не хватает контекста про github actions. Также такое ощущение что за счет того что мы вынесли многие шаги в GitHub actions (где эти шаги никак не описаны), то пропущена целостность процесса. К примеру в гайде нет шагов про создание заказов, они будто вынесены за скобки.</Highlight>

To set up Tunnel Server and Tunnel Client you need to perform the following steps.

## Tunnel Server

### Save your token to GitHub Secrets

Save your personal token with the name `NPM_TOKEN_GH` in GitHub Secrets. This token can be generated in your GitHub account.

### Encode Config.json into base64

`Config.json` (see the guide [here](/developers/cli_guides/configuring)) has to be encoded into base64 format and placed in GitHub Secrets under the name `SPCTL_CONFIG_BASE64`. Use this command to encode the `config.json` into base64:

    ```
    echo "$(cat config.json)" | base64
    ```

### Save server token to Github Secrets

Prepare and save `SOLUTION_SERVER_TOKEN` in GitHub Secrets. This is a random value that will be used by the server to identify the client. You can generate it in the following manner:

   ```
require('crypto').randomUUID()
   ```

## Tunnel Client

### Convert key and certificate into single line

`SOLUTION_SSL_KEY_BASE64` and `SOLUTION_SSL_CERTIFICATE_BASE64`. To further work with the [key and certificate](https://docs.dev.superprotocol.com/developers/guides/tunnel-clients/prepare), it's necessary to convert the contents of these files into a single line. To do this, execute the following commands:

   ```shell
   awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' fullchain.pem
   awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' privkey.pem
   ```

Copy these values into `SOLUTION_SSL_CERTIFICATE_BASE64` and `SOLUTION_SSL_KEY_BASE64` in base64 encoding.

You can encode values into base64 with the following commands:

   ```shell title="config.json"
   echo "<YOUR_CERTIFICATE>" | base64
   echo "<YOUR_KEY>" | base64
   ```

### Create mrsigner and mrenclave variables
   
In order for tunnel client to communicate with the tunnel server you need to create `TUNNEL_SERVER_MRSIGNER` and `TUNNEL_SERVER_MRENCLAVE` in GitHub Variables with the following parameters:

    ```tsconfig
    TUNNEL_SERVER_MRSIGNER=82e55c6ec7268b07e030226cc42417b89cb17ecc8b6b73bafb84fc44b0ed059c
    TUNNEL_SERVER_MRENCLAVE=22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513
    ```

## Check your work

As result, your GitHub Secrets and GitHub Variables should look something like this:

   <Imager src={require('./images/secrets.png').default} />
   <Imager src={require('./images/values.png').default} />

