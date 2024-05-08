---
id: "llm-pavel"
title: "LLM by Pavel"
slug: "/deployment_guides/llm/pavel"
sidebar_position: 4
---

# Large Language Model

## About

Large Language Model (LLM) is an advanced AI system designed to complete natural language processing tasks while mimicking human-like understanding and communication. This guide will help you launch your LLM management server on Super Protocol.

## Prerequisites

This guide requires a general understanding of Super Protocol basic concepts such as *Marketplace*, *orders*, *offers*, *tunnels*, etc. Learn about [Super Protocol fundamentals](https://docs.dev.superprotocol.com/developers/fundamentals) before proceeding.

To successfully deploy an LLM management server on Super Protocol you will need the following:

- Computer with Linux or macOS operating system. [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux) should also work but may cause unexpected complications.

- Super Protocol Testnet access. You can request it by filling out the [Testnet participation form](https://superprotocol.typeform.com/testnetm). Super Team sends out invites daily, but it may take several days if the number of requests is high. You can ask any Community Manager on the [Super Protocol Discord server](https://discord.com/invite/superprotocol) or [Telegram channel](https://t.me/superprotocol) about the status of your request. When your access is ready, you will receive an email with your:
    * Testnet account address;
    * Private key;
    * Access token.

- [Storj](https://www.storj.io/) account, either Free Trial or Pro.

- [SPCTL](https://docs.dev.superprotocol.com/developers/cli_guides/) – Super Protocol CLI tool. Refer to the [SPCTL guide](https://docs.dev.superprotocol.com/developers/cli_guides/configuring) to install and configure it using your Testnet credentials. The same guide also explains how to set up your Storj account.

- [Docker](https://www.docker.com/get-started/) – for building solutions.

- [Node.js 16](http://node.js) – use [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) or any other Node.js package manager to install, manage, and use different versions of Node.js. For nvm, type `nvm install 16` to install Node.js 16 and `nvm use 16` to start using it.

- [Python 3.10](https://www.python.org/) – to install it on Linux, type `apt install python3.10`; on macOS, type `brew install python3.10`. To check the version, type `python3 --version `.

- [GIT CLI](https://github.com/git-guides/install-git) – for cloning repositories.

- [OpenSSL](https://www.openssl.org/) – for generating signing keys. To install it on Linux, type `apt install openssl`; on macOS, type `brew install openssl`.

- Access to DNS – you need admin access to your domain or subdomain. Use [Cloudflare](https://www.cloudflare.com/) or any other domain registrar with DNS management.

- Python-based LLM management server such as [Text Generation Web UI](https://github.com/oobabooga/text-generation-webui) that meets the following requirements:
    * It should have native support for running via HTTPS with a self-signed certificate. This is necessary because deploying an LLM server on Super Protocol requires using [tunnels](https://docs.dev.superprotocol.com/developers/fundamentals/tunnels).
    * It should use Node.js 16 with CommonJS modules.
    * The entry point should be the `server.js` file ==in the `/sp/run` directory. Note that this file will be executed using the *worker_threads* module. `server.js` should be launched via the command line using the *child_process* spawn method of the internal Node.js package.==

>**Note**: The Text Generation Web UI server requires 64-bit Linux. Type `getconf LONG_BIT` to check if your Linux is running on 32- or 64-bit.
>The [macOS version of Text Generation Web UI](https://github.com/unixwzrd/text-generation-webui-macos) is under development and may contain unknown bugs.

Although this guide covers deploying a Text Generation Web UI server, using a Node.js-based server such as [node-llama-cpp](https://github.com/withcatai/node-llama-cpp) is also possible. ==In this case, `server.js` should launch the HTTPS server directly.==

## LLM server deployment

Deploying an LLM management server on Super Protocol involves creating orders for a *Tunnel Server* and *Tunnel Client* with a confidential connection between them. The Tunnel Client uses a prepared LLM server as a *Solution* and the LLM model, SSL certificate file, SSL private key file, and Tunnel Client Data configuration file as *Data*. To successfully launch an LLM server, you have to complete the following steps:

1. Prepare an LLM model and upload it to Storj. The uploaded archive file with the model will serve as one of two Data inputs for the future Tunnel Client order.

2. Prepare and upload the Tunnel Client Solution. To do so, prepare your LLM server, test it, and then create the Solution using *Python & Node.js Base Image* by the Super Team.

3. Generate an SSL certificate and SSL private key. SSL certificate enables a secure TLS connection between the Tunnel Server and a browser.

4. Prepare and place an order on Super Protocol for running a Tunnel Server. It has an external public IP and is accessible via HTTPS from the internet.

5. Prepare and upload the second Data input for the Tunnel Client. It should contain the SSL certificate and SSL private key you generated in Step 3 as well as the Tunnel Client Data configuration file.

6. Launch the LLM server. Place a Tunnel Client order on Super Protocol using the prepared LLM server (Step 2) as a Solution and two Data inputs (Steps 1 and 5) as Data.

7. Add DNS records to your domain provider.

## Step 1 – Prepare LLM model

Start with creating the root directory for your project:

```bash
mkdir llm-model-launcher
cd ./llm-model-launcher
```

[Download and configure SPCTL](https://docs.dev.superprotocol.com/developers/cli_guides/configuring/) in this directory, including access to Storj. If you already have a fully configured SPCTL in another directory, simply copy the files `spctl` and `config.json` from there to `llm-model-launcher`.

Prepare the LLM model. Create a directory for the model:

```bash
mkdir llm-model
```

If you already have a model, copy it to this new directory:

```bash
cp -r /path/to/your/model ./llm-model
```

Replace */path/to/your/model* with the actual path to your model's directory.

Alternatively, if you don't have a model, you can install the [Hugging Face CLI tool](https://huggingface.co/docs/huggingface_hub/en/guides/cli) and download a simple model using the following commands:

```bash
python3 -m pip install -U "huggingface_hub[cli]"
huggingface-cli download TheBloke/Llama-2-7B-Chat-GGUF llama-2-7b-chat.Q2_K.gguf --local-dir ./llm-model --local-dir-use-symlinks False
```

Now pack the model:

```bash
tar -czf llm-model.tar.gz -C ./llm-model .
```

And upload the archive to Storj:

```bash
./spctl files upload llm-model.tar.gz --output llm-model.json --filename llm-model.tar.gz
```

---

**Expected step result:**

- LLM model archive file `llm-model.tar.gz`.
- Resource file `llm-model.json` containing the information for TEE on how to access your uploaded model.

## Step 2 – Prepare LLM server

Super Team provides Python & Node.js Base Image you should use to prepare the Solution for your future Tunnel Client order. This Base Image contains Tunnel Client that launches `server.js`, passing the following environment variables:

* *HTTPS_PORT* – local HTTPS web server port that accepts incoming connections;
* *TLS_CERT* – SSL certificate of the HTTPS server;
* *TLS_KEY* – private key for the SSL certificate.

Download the Base Image from its *Solution Offer* on the Marketplace using the following SPCTL command:

```bash
./spctl offers download-content 7
```

The downloaded archive should have the name `node16-python3.10-base-solution-image-gsc-v1.6-gramine-v1.6.4-sp.tar.gz` or similar if a newer version exists. Use this name in the following command instead of *Python-Nodejs-Base-Image-archive-name* to load the Base Image to Docker:

```bash
docker load -i Python-Nodejs-Base-Image-archive-name
```

If the image has been loaded successfully, you should see `Loaded image: gsc-node16-python3.10-base:latest` in the output. Now create a directory for the Solution:

```bash
mkdir model-launcher-solution
``` 

Next, clone the open-source repository [Text Generation Web UI](https://github.com/oobabooga/text-generation-webui):

```bash
git clone https://github.com/oobabooga/text-generation-webui.git ./model-launcher-solution/text-generation-webui
```

Run the following command to install dependencies:

```bash
docker run -it --rm --platform linux/amd64 -v $PWD/model-launcher-solution:/sp/run --entrypoint /bin/bash \
    -e GPU_CHOICE=N \
    -e USE_CUDA118=FALSE \
    -e LAUNCH_AFTER_INSTALL=FALSE \
    -e INSTALL_EXTENSIONS=FALSE \
    gsc-node16-python3.10-base:latest -c '
        apt update \
        && apt install -y curl git \
        && git config --global --add safe.directory /sp/run/text-generation-webui \
        && ./text-generation-webui/start_linux.sh
    '
```

>**Note**: Do not move or rename your project's directories. Text Generation Web UI must have the same absolute path when executed for the dependencies to work correctly.

The installation should take a minute or two. When done, create `server.js` in the `model-launcher-solution` directory. This file will launch the LLM server:

```bash
touch ./model-launcher-solution/server.js
``` 

Open it using [nano](https://www.nano-editor.org/) or any other text editor:

```bash
nano ./model-launcher-solution/server.js
``` 

And add the following code:

```js
const fs = require('fs');
const { spawn } = require('child_process');
const { parentPort } = require('worker_threads');

const port = process.env.HTTPS_PORT;
const privateKeyFilePath = `${__dirname}/private.pem`;
const certificatePath = `${__dirname}/certificate.crt`;

const terminationHandler = (signal) => {
	console.log(`${signal} received. Stoping`);
	process.exit(0);
};

const handledSignals = ['SIGINT', 'SIGTERM'];
parentPort?.on('message', (message) => {
	if (handledSignals.includes(message)) {
		terminationHandler(message);
	}
});

async function run() {
	fs.writeFileSync(privateKeyFilePath, process.env.TLS_KEY);
	fs.writeFileSync(certificatePath, process.env.TLS_CERT);
	
	const commandLineArgs = [
		'--listen',
		'--listen-port',
		port,
		'--ssl-keyfile',
		privateKeyFilePath,
		'--ssl-certfile',
		certificatePath,
		'--model-dir',
		'/sp/inputs/input-0002'
	];
	
	await new Promise((resolve, reject) => {
		const pythonProcess = spawn(
			`${__dirname}/text-generation-webui/start_linux.sh`,
			commandLineArgs,
		);
		pythonProcess.stdout?.on('data', (data) => {
			const message = data?.toString();
			console.log(message);
		});

		pythonProcess.stderr?.on('data', (data) => console.error(data.toString()));
	});
}

run().catch((error) => {
	console.error(`Command fail: ${error.message}`);
});
```

You can add more command line arguments to the `commandLineArgs` array.

>**Note**: Super Protocol uses the content of the directories `/sp/inputs/input-0001` and `/sp/inputs/input-0002` as Data for the order. In this case, `input-0002` is for the LLM model. `input-0001` will contain the SSL certificate, SSL private key, and Tunnel Client Data configuration file `config.json`. You will prepare the latter in <ins>Step 5</ins>.

Super Team provides a test script that imitates an application launch in Tunnel Client. Download it:

```bash
curl -L https://raw.githubusercontent.com/Super-Protocol/solutions/main/Tunnel%20Client/examples/tunnel-client-test-start.js -o model-launcher-solution/tunnel-client-test-start.js
```

And run a new container:

```bash
docker run -p 9090:9090 --platform linux/amd64 --rm -ti -v $PWD/model-launcher-solution:/sp/run -v $PWD/llm-model:/sp/inputs/input-0002 --entrypoint /usr/local/bin/node gsc-node16-python3.10-base:latest tunnel-client-test-start.js ./server.js
```

Now check the server at the local address [https://localhost:9090](https://localhost:9090). Your browser will warn you about the presence of a self-signed certificate. Ignore this warning since Docker has just generated the certificate. If everything works correctly, terminate the command by pressing Ctrl+C.

The LLM server is now ready and you can create the Solution. Start with generating a key to sign the Solution:

```bash
./spctl solutions generate-key signing-key
```

Next, create the Solution using the following SPCTL command. Put the actual name of the Python & Node.js Base Image file instead of *Python-Nodejs-Base-Image-archive-name*:

```bash
./spctl solutions prepare --pack-solution model-launcher-solution.tar.gz --write-default-manifest --sgx-enclave-size 16G --env NODE_ENV=production --base-image-path $PWD/Python-Nodejs-Base-Image-archive-name ./model-launcher-solution ./signing-key
```

Wait for the SPCTL to finish, it will take some time. When done, you will get the archive file `model-launcher-solution.tar.gz` in your project root directory containing the Solution. Upload it to Storj using the following command:

```bash
./spctl files upload model-launcher-solution.tar.gz --output model-launcher-solution.json --filename model-launcher-solution.tar.gz --metadata metadata.json
```

---

**Expected step result:**

- Archive file `model-launcher-solution.tar.gz` with the Solution.
- Resource file `model-launcher-solution.json` containing the information for TEE on how to access the uploaded Tunnel Client Solution.

## Step 3 – Generate SSL certificate

Refer to the [Generate SSL certificate](https://docs.dev.superprotocol.com/developers/deployment_guides/tunnels/preparing) guide.

---

**Expected step result:**

- SSL certificate file (e.g. `certificate.crt`).
- SSL private key file (e.g. `private.key`).

## Step 4 – Launch Tunnel Server

Refer to the [Prepare and deploy Tunnel Server](https://docs.dev.superprotocol.com/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-server) guide.

---

**Expected step result:**

- Archive file `tunnel-server-data.tar.gz` with Tunnel Server Data.
- Authorization token file `auth-token` in the `tunnel-server-data` directory containing auth token.
- Running Tunnel Server order.
- Order result file `result.txt` containing server IP address and port.

## Step 5 – Prepare Tunnel Client Data

Further, prepare and upload the rest of the Tunnel Client Data. Create a directory and Data configuration file:

```bash
mkdir tunnel-client-data 
touch tunnel-client-data/config.json
```

Add the following code to `config.json`:

```json
{
	"tunnels": [
		{
			"sgxMrEnclave": "f539fcf25af2c8221bd150aa87f624379e2b216caa3f0689da03b2a74af6c833",
			"sgxMrSigner": "22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513"
		}
	],
	"authToken": "",
	"site": {
		"domain": "",
		"cert": "./fullchain.crt",
		"key": "./private.pem"
	}
}
```

Fill in the following parameters:

- *authToken* – the token from the auth-token file you have created for Tunnel Server in <ins>Step 4</ins>;

- *cert* and *key* – relative paths from `config.json` to the SSL certificate and SSL private key files you have generated in <ins>Step 3</ins>. You can place these files next to `config.json` to make things easier;

- *domain* (optional) – specify your domain name if you use a wildcard SSL certificate, otherwise, leave it empty.

Leave the *sgxMrEnclave* and *sgxMrSigner* parameters unchanged.

Pack this data:

```bash
tar -czf tunnel-client-data.tar.gz -C ./tunnel-client-data .
``` 

And upload it to Storj:

```bash
./spctl files upload tunnel-client-data.tar.gz --output tunnel-client-data.json --filename tunnel-client-data.tar.gz
```

---

**Expected step result:**

- Archive file `tunnel-client-data.tar.gz` with the Tunnel Client Data.
- Resource file `tunnel-client-data.json` containing the information for TEE on how to access your uploaded data.

## Step 6 – Launch LLM server

When the Solution and both Data inputs (i.e. LLM model and Tunnel Client Data) are uploaded to Storj, create an order for Tunnel Client:

```bash
./spctl workflows create --tee 1,1 --tee-slot-count 15 --solution 7 --solution model-launcher-solution.json --data tunnel-client-data.json --data llm-model.json --storage 25 --orders-limit 10 --min-rent-minutes 120
```

>**Note**: If your testnet account doesn’t have enough TEE or MATIC tokens, use the following commands to replenish the balance:
>```
>./spctl tokens request --tee
>./spctl tokens request --matic
>```
>Be mindful of testnet [limitations](https://docs.dev.superprotocol.com/testnet/limitations).

If the order has been created successfully, you should see `Workflow was created, TEE order id: ["XXXX"]` in the last line of the output where *XXXX* is the order ID.

It may take up to two hours for the server to start. You can check the order status using the [Marketplace web interface](https://marketplace.superprotocol.com/all-orders). Alternatively, type `./spctl orders get `*`XXXX`* where *XXXX* is the order ID.

---

**Expected step result:**

- Running Tunnel Client order.

## Step 7 – Set up DNS

Refer to the [Set up DNS](https://docs.dev.superprotocol.com/developers/deployment_guides/tunnels/manual_run#set-up-dns) guide.

---

**Expected step result:**

- Your domain is accessible via browser.
<!--stackedit_data:
eyJkaXNjdXNzaW9ucyI6eyJLM1FPa1NNUHBPckJzak0wIjp7In
N0YXJ0IjoxMjE4NCwiZW5kIjoxMjIxMywidGV4dCI6IklmIGV2
ZXJ5dGhpbmcgd29ya3MgY29ycmVjdGx5In0sImhVNmsxR1NHbW
91cGFtZTciOnsic3RhcnQiOjE1MDIxLCJlbmQiOjE1MDI2LCJ0
ZXh0IjoiPGlucz4ifX0sImNvbW1lbnRzIjp7IlNVVmduNURHM2
1OS3dkWGIiOnsiZGlzY3Vzc2lvbklkIjoiSzNRT2tTTVBwT3JC
c2pNMCIsInN1YiI6ImdvOjExNTcwMDA5Mjk0NjczMzE3NTkxMi
IsInRleHQiOiLQndGD0LbQvdC+INC00L7Qv9C40YHQsNGC0Yws
INC60LDQuiDRjdGC0L4g0LTQvtC70LbQvdC+INCy0YvQs9C70Y
/QtNC10YLRjCIsImNyZWF0ZWQiOjE3MTUwMTk3MjczNjB9LCJv
N2d4NFYyamZTSkZRRTlQIjp7ImRpc2N1c3Npb25JZCI6ImhVNm
sxR1NHbW91cGFtZTciLCJzdWIiOiJnbzoxMTU3MDAwOTI5NDY3
MzMxNzU5MTIiLCJ0ZXh0Ijoi0Y3RgtC4INGC0LXQs9C4INC90Y
PQttC90L4g0LHRg9C00LXRgiDQt9Cw0LzQtdC90LjRgtGMINC9
0LAg0YHRgdGL0LvQutC4IiwiY3JlYXRlZCI6MTcxNTAyMDMwOD
U5MH19LCJoaXN0b3J5IjpbLTExMDY2MzY4MzAsMTg4ODM1Mzk5
Myw4MjMxNzEzODgsLTIwNjU5NTg2NDcsLTQ1MDM3MzY5OCwtMT
Q2MDAyNTcxMCwtNTEzNzg0NjA3LC0yNzI1MjA0MjAsODI0MjE2
OTMwLDE0NTQyNjYxNTMsMTQ3MjY2NDMzMiw4Mjc1NDMzNjksMT
Y1NjUxMzg0NiwxNTM4ODEyNjkwLC0xMjQzNDczMDIxLC0zMTMz
MzY1NDUsOTA3NDkwNTA1LDg3ODA4MTg2NSwtMTY2ODg4MzA4Mi
wtMTc3MDcwNTM5OF19
-->