---
id: 'repo'
title: '4. Automating GitHub Actions'
slug: '/deployment_guides/tunnels/repo'
sidebar_position: 4
---

## Description

For your convenience, we have prepared a GitHub Actions repository with scripts that you can use for the automatic deployment of your application to Super Protocol.

These Github Actions are automating the commands outlined in the  [previous step](/developers/deployment_guides/tunnels/manual_run) of this guide.

## Prepare Git Repository

1. Go to [GitHub](https://github.com) and log in to your account.

2. Click the [New Repository](https://github.com/new) button in the top-right. Enter `superprotocol-test-app` as repository name. You’ll have an option there to initialize the repository with a README file. Add `Node` as `.gitignore` template.

3. Click the “Create repository” button.

Now we will load `superprotocol-test-app` from [Part 1](/developers/deployment_guides/tunnels/preparing) into this new repository.

```bash
cd superprotocol-test-app
git init
echo "node_modules" > .gitignore
git remote add origin git@github.com:YOUR_USERNAME/superprotocol-test-app
git add .
git commit -m "init"
git push -u origin main
cd ..
```

## Preparing secrets and variables

### Repository Secrets

You need to add the following secrets:

- `GH_TOKEN`: GitHub token with read/write access to artifacts in the entire repository. Follow the instructions [here](https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) to obtain this token.

- `SOLUTION_SERVER_TOKEN`: Token from the `auth-token` file of the tunnel server, generated in [Part 3](/developers/deployment_guides/tunnels/manual_run) of this guide. You can obtain it using the command:

  ```bash
  cat tunnel-server-data/auth-token
  ```
- `SOLUTION_SSL_CERTIFICATE_BASE64` - save the base64 certificate from [Part 1](/developers/deployment_guides/tunnels/preparing) of this guide; to generate it from `fullchain.crt` from [Part 3](/developers/deployment_guides/tunnels/manual_run) use the following command:

  ```
  cat tunnel-client-data/fullchain.crt | base64
  ```

- `SOLUTION_SSL_KEY_BASE64` - private key from [Part 1](/developers/deployment_guides/tunnels/preparing) in the bas64 format; to generate it from `private.pem` file from [Part 3](/developers/deployment_guides/tunnels/manual_run) use the following command:

  ```
  cat tunnel-client-data/private.pem | base64
  ```

  If you private key and certificate files are named differently, then adjust the commands accordingly.

- `SPCTL_CONFIG_BASE64` - save here your [SPCTL config](/developers/cli_guides/configure) in base64 format. Use this command:

  ```
  echo "$(cat config.json)" | base64
  ```

### Repository Variables

You need to change two variables:
 
- `TUNNEL_SERVER_MRENCLAVE` - 40154d45ffb11e7298c90b6092404cd974616c021a5e7e8ccf184ec8f585ab14
- `TUNNEL_SERVER_MRSIGNER` - 292dbf9d7256b124de0259dca586c53135175f431f2336d4a27c49c3cd60b518
- `DOMAIN` (optional) - specify here your domain if you are using wildcard SSL certificate

Your hex codes should be just like this, without changes.

As result, your GitHub Secrets and GitHub Variables should look something like this:

<img src={require('../../images/guides_tunnels_3.png').default} width="auto" height="auto"/>
<img src={require('../../images/guides_tunnels_4.png').default} width="auto" height="auto"/>

## Run tunnel server Github Action

Let's create a folder for GitHub Actions:

```bash
cd superprotocol-test-app
mkdir -p .github/workflows
```

Copy this file [superprotocol-test-app-tunnel-server.yml](https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/examples/Github%20Actions/superprotocol-test-app-tunnel-server.yml) into the new folder and rename it as `tunnel-server-deploy.yml`:

```bash
curl -L https://raw.githubusercontent.com/Super-Protocol/solutions/main/Tunnel%20Client/examples/Github%20Actions/superprotocol-test-app-tunnel-server.yml -o .github/workflows/tunnel-server-deploy.yml
```

Commit the changes and push them to Git:

```bash
git add .
git commit -m "Added tunnel server deploy Action"
git push
```

Now go to the tab `Actions` from your repository and run `Run Test App tunnel-server on SuperProtocol`. The order should be created and artifact `last-orders.txt` containg your order ID should be available for download.

## Run tunnel client GitHub Action

Copy file [superprotocol-test-app-tunnel-client.yml](https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/examples/Github%20Actions/superprotocol-test-app-tunnel-client.yml) to that new */superprotocol-test-app/* folder and rename the file to `tunnel-client-deploy.yml`:

```bash
curl -L https://raw.githubusercontent.com/Super-Protocol/solutions/main/Tunnel%20Client/examples/Github%20Actions/superprotocol-test-app-tunnel-client.yml -o .github/workflows/tunnel-client-deploy.yml
```

This GitHub Action assumes that your solution has been built and has dependencies configured.

Create file `scripts/prepare-solution.sh`:

```bash
touch scripts/prepare-solution.sh
```

In this file, you will need to write the logic for building your application. This script will directly call the Action, providing two parameters:

- _$1_ - the directory where the build should take place (the folder will already be created at the time the script is called; no need to use `mkdir`).
- _$2_ - the name of the solution.

Save the following code to file `scripts/prepare-solution.sh`:

```bash title="prepare-solution.sh"
#!/bin/bash
set -e

solution_path=$1
solution_name=$2

# cd to one directory up of current script
REAL_PATH=$(realpath "$0")
LOCAL_PATH=$(dirname "$REAL_PATH")
cd "$LOCAL_PATH"
cd ..

echo "Install dependencies for client & sever module"
npm install

echo "Copy files"
cp -R server.js node_modules package.json "$solution_path"

echo "$solution_name build succesfull"
```

Commit the changes and push them to Git:

```bash
git add .
git commit -m "Added tunnel client deploy Action"
git push
```

Now go to the tab `Actions` from your repository and run `Run Test App tunnel-client on SuperProtocol`. The order should be created and artifact `last-orders.txt` containg your order ID should be available for download.

## Setup DNS

You will have to change DNS manually. Get the order ID in the `last-orders` artifact for tunnel server and then use the order ID to download the order result for tunnel server, which will provide you the IP.

Once you have the IP, you'll need to add two records to the DNS as in [Step 3: Setup DNS](/developers/deployment_guides/tunnels/manual_run#set-up-dns).