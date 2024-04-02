---
id: "llm"
title: "LLM"
slug: "/deployment_guides/llm"
sidebar_position: 4
---

# Large Language Model

Large Language Model (LLM) is an advanced AI system designed to understand, generate, and work with human language in a way that mimics human-like understanding and communication. 

## Prerequisites

Same as in [Generate SSL certificate](/developers/deployment_guides/tunnels/preparing) of Node.js with Tunnels guide.

## Launch on Super Protocol

You can deploy your own Python-based or Node.js-based LLM server in a confidential mode using SuperProtocol [tunnels](/developers/deployment_guides/tunnels). 
It's mandatory that the server has native support of being run via HTTPS.

For the launch, we will need:
- Unbuntu 20.04
- NodeJs 20.12.0
- Python 3.10.13

### 1. Prepare and launch Tunnel Server

The process of preparing and launching Tunnel Server is described in the section [Prepare and deploy Tunnel Server](/developers/deployment_guides/tunnels/manual_run/#prepare-and-deploy-tunnel-server) of Node.js with Tunnels guide. Please refer to it for more details.
### 2. Prepare Tunnel Client data

To deploy Tunner Client successfully, you will need to prepare configuration, server files and `server.js` file.

Tunnel Client  launches `server.js` by Node.js `worker_threads`, passing the following `env` variables:
    
- `HTTPS_PORT` - Port on which the local HTTPS web server is to be deployed and which will accept incoming connections;

- `TLS_CERT` - SSL certificate of the HTTPS server;

- `TLS_KEY` - Private key to the SSL of the HTTPS server.

If you are using a Node.js-based LLM server, for example, the one that is based on [node-llama-cpp](https://github.com/withcatai/node-llama-cpp), `entrypoint`might be used to start your application on the port specified in `HTTPS_PORT` variable.

If you are using a Python-based LLM server, for example, [text-generation-webui](https://github.com/oobabooga/text-generation-webui), `server.js` should be launched via a command line with the usage of `spawn` method of   `child_process` internal Node.js package. You can take a look at the example of launching [Python server](/developers/deployment_guides/llm#python-server-launch-example).

To launch Tunnel Client, you will need a SSL certificate, a key file to it, and`config.json`file. 
All the information about SSL keys and certificates is described in the section [Generate SSL certificate](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate) of Node.js with Tunnels guide. 
All the information about forming the right catalogue structure  and configs is described in the section [Prepare and deploy Tunnel Client](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-client) of Node.js with Tunnels guide.

Please place your`server.js` file in `content` directory that should be located on the same level as `config.json` file. Tunnel Clien searches for `server.js` file in this directory only.

LLM server files and `node_modules` should be placed in `content` directory as well. They should be built for Linux / ARMD64 platforms if you are using a Node.js server or your `server.js` file is dependent on any external libraries.

:::note
When the container is successfully started on SuperProtocol, the directory `content` will be available on the path `/sp/run/inputs/input-0001/content`. It might be of great importance for certain dependencies.
:::

Python dependencies should be downloaded for Linux / AMD64 platforms and placed next to a LLM server as well. 
We recommend that you use `pypi` folder in `content` directory. Please take a look at the example of [Python server](/developers/deployment_guides/llm#python-server-launch-example) to get a better understanding of how it can be organized. It's advisable to test your application locally in accordance with the instruction.

When all the files are ready, you will need to pack and upload them to StorJ through SPCTL [files upload](/developers/cli_commands/files/upload) command, create an order. Please follow the instructions that are available in the section [Prepare and deploy Tunnel Client](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-client) of Node.js with Tunnels guide.

Tunnel Server should be launched in accordance with [Step 1](/developers/deployment_guides/llm#1-prepare-and-launch-tunnel-server).

As soon Тunnel Server and Tunnel Client have been launched successfully, you will need to configure DNS of the host, for which SSL certificates were issued. Please follow the instructions that are available in the section [Set up DNS](/developers/deployment_guides/tunnels/manual_run#set-up-dns) of Node.js with Tunnels guide.

## Python server launch example

Create a folder that will be used for further operations:

```bash
mkdir sp-python-in-tunnels-test

cd ./sp-python-in-tunnels-test
```

### 1. Launch Tunnel Server

Download and configure [SPCTL](/developers/cli_guides/configuring) in the folder above.

Follow the instruction that is available in the section [Prepare and deploy Tunnel Server](/developers/deployment_guides/tunnels/manual_run/#prepare-and-deploy-tunnel-server) of Node.js with Tunnels guide.

### 2. Prepare and check Python server

Prepare Python server data for Tunnel Client:

```bash
mkdir -p tunnel-client-data/content
```

Create `server.py` file in `content` directory:

```bash
touch tunnel-client-data/content/server.py
```

Add the following code to it:

```python
from flask import Flask
import os

app = Flask(__name__)

@app.route("/")
def hello():
    return "Super Protocol is awesome!"

if __name__ == "__main__":
    ssl_certificate = os.environ['TLS_CERT_FILE']
    ssl_private_key = os.environ['TLS_KEY_FILE']
    port = int(os.environ['HTTPS_PORT'])

    app.run(ssl_context=(ssl_certificate, ssl_private_key), port=port, host='0.0.0.0')
```

Create `server.js` which will be launched by Tunnel Client that, in turn, will launch Python server:

```bash
touch tunnel-client-data/content/server.js
```

Add the following code to it:

```javascript
const fs = require('fs');
const { spawn } = require('child_process');
const { parentPort } = require('worker_threads');

const privateKeyFilePath = `${__dirname}/private.pem`;
const certificateFilePath = `${__dirname}/certificate.crt`;

const handledSignals = ['SIGINT', 'SIGTERM'];
parentPort?.on('message', (message) => {
  if (handledSignals.includes(message)) {
    console.log(`${signal} received. Stoping`);
    process.exit(0);
  }
});

async function run() {
  fs.writeFileSync(privateKeyFilePath, process.env.TLS_KEY);
  fs.writeFileSync(certificateFilePath, process.env.TLS_CERT);

  await new Promise((_resolve, _reject) => {
    const pythonProcess = spawn(`python`, [`${__dirname}/server.py`], {
      stdout: 'inherit',
      stderr: 'inherit',
      env: {
        ...process.env,
        PYTHONPATH: `${process.env.PYTHONPATH}:${__dirname}/pypi/lib/python3.10/site-packages`,
        TLS_CERT_FILE: certificateFilePath,
        TLS_KEY_FILE: privateKeyFilePath,
      },
    });

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

:::note
Please pay attention to the fact that `server.js` expands `PYTHONPATH` env variable, adding there an additional path for Python dependencies.
:::

Add Python `Flask` package as a dependency for the server and install it in `pypi` folder:

```bash
echo "Flask==3.0.2" > tunnel-client-data/content/requirements.txt

docker run --platform linux/amd64 --rm -ti -v $PWD/tunnel-client-data/content/:/python --entrypoint /usr/local/bin/pip -w /python python:3.10-bullseye install -r requirements.txt -t ./pypi/lib/python3.10/site-packages
```

After that, you can check locally whether all the files and dependencies are set properly. 

Download and upload SuperProtocol `Node-Python` base image to Docker:

```bash
./spctl offers download-content 76 (это dev, на тестнете будет другой)

docker load -i <path to the Python base image archive>
```

Download a test script that will imitate the application launch in Tunnel Client:

```bash
curl -L https://raw.githubusercontent.com/Super-Protocol/solutions/main/Tunnel%20Client/examples/tunnel-client-test-start.js -o tunnel-client-test-start.js
```

Test Python server performance through Tunnel Client:

```bash
docker run -p 9090:9090 --platform linux/amd64 --rm -ti -v $PWD:/sp/run -v $PWD/tunnel-client-data/content:/sp/inputs/input-0001/content --entrypoint /usr/local/bin/node -w /sp/run gsc-node20-python3.10-base-solution:latest tunnel-client-test-start.js /sp/inputs/input-0001/content/server.js
```

You can check it on a local address https://localhost:9090. Your browser will warn you about the presence of a self-signed certificate. The warning might be ignored since the certificate has been just generated in your Docker.

### 3. Prepare Tunnel Client

The server works properly, now it's time to set Tunnel Client's config file.

Create `config.json` in the folder `/tunnel-client-data/`.

```bash
touch tunnel-client-data/config.json
```

Copy the following configuration to the `config.json` file:

```json title="config.json"
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

Please carefully study the detailed information about the parameter code and how it should be specified in the section [Prepare and deploy Tunnel Client](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-client) of Node.js with Tunnels guide.

### 4. Launch Tunnel Client

When the configs are ready, you will need to pack all the necessary files into an archive, upload it to StorJ and create Tunnel Client order:

```bash
tar -czf tunnel-client-data.tar.gz -C ./tunnel-client-data .

./spctl files upload tunnel-client-data.tar.gz --output tunnel-client-data.json --filename tunnel-client-data.tar.gz

./spctl workflows create --tee 1 --solution 76 --solution 80 --data tunnel-client-data.json --storage 23 --orders-limit 10 --min-rent-minutes 60
```

### 5. DNS setup
 
Download the result of Tunnel Server launched at [Step 1](/developers/deployment_guides/llm#1-launch-tunnel-server). It should contain IP which you will need to add to DNS of your server. Please follow the instructions that are available in the section [Set up DNS](/developers/deployment_guides/tunnels/manual_run#set-up-dns) of Node.js with Tunnels guide.