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

Для успешного запуска LLM, Вам необходим запущенный заказ на туннель-сервер и заказ с LLM-сервером в качестве солюшена, плюс добавленные конфигурационные файлы туннель-клиента с SSL - сертификатом, как данные.

Сервер управления моделью в обязательном порядке должен поддерживать HTTPS с самоподписанным сертификатом.

### 1. Prepare and launch Tunnel Server

The process of preparing and launching Tunnel Server is described in the section [Prepare and deploy Tunnel Server](/developers/deployment_guides/tunnels/manual_run/#prepare-and-deploy-tunnel-server) of Node.js with Tunnels guide. Please refer to it for more details.

### 2. Prepare LLM server

Наш базовый образ уже содержит туннель-клиент, который запускает `server.js` файл из папки `/sp/run`. Это базовая папка в которой Superprotocol помещает файлы солюшена. 

Вам необходимо в отдельной папке подготовить все необходмые файлы https-сервера упраления моделью, а так же `server.js` файл, который данный сервер будет запускать.

Tunnel Client launches `server.js` by Node.js `worker_threads`, passing the following `env` variables:
    
- `HTTPS_PORT` - Port on which the local HTTPS web server is to be deployed and which will accept incoming connections;

- `TLS_CERT` - SSL certificate of the HTTPS server;

- `TLS_KEY` - Private key to the SSL of the HTTPS server.

If you are using a Node.js-based LLM server, for example, the one that is based on [node-llama-cpp](https://github.com/withcatai/node-llama-cpp), `server.js` файл должен несопосредственно запускать https-сервер управления моделью.

If you are using a Python-based LLM server, for example, [text-generation-webui](https://github.com/oobabooga/text-generation-webui), `server.js` should be launched via a command line with the usage of `spawn` method of `child_process` internal Node.js package. You can take a look at the [example](/developers/deployment_guides/llm#llm-launch-example) of launching **text-generation-webui** server on the Superprotocol.

### 3. Prepare Tunnel Client data

To launch Tunnel Client, you will need a SSL certificate, a key file to it, and `config.json` file. 
All the information about SSL keys and certificates is described in the section [Generate SSL certificate](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate) of Node.js with Tunnels guide. 
All the information about Tunnel CLient config is described in the section [Prepare and deploy Tunnel Client](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-client) of Node.js with Tunnels guide.

As soon Тunnel Server and Tunnel Client have been launched successfully, you will need to configure DNS of the host, for which SSL certificates were issued. Please follow the instructions that are available in the section [Set up DNS](/developers/deployment_guides/tunnels/manual_run#set-up-dns) of Node.js with Tunnels guide.

## LLM launch example

Запустим популярное model launcher application [text-generation-webui](https://github.com/oobabooga/text-generation-webui) на суперпротоколе.

Create a folder that will be used for further operations:

```bash
mkdir llm-model-launcher-example

cd ./llm-model-launcher-example
```
Download and configure [SPCTL](/developers/cli_guides/configuring) in this folder.

### 1. Launch Tunnel Server

Follow the instruction that is available in the section [Prepare and deploy Tunnel Server](/developers/deployment_guides/tunnels/manual_run/#prepare-and-deploy-tunnel-server) of Node.js with Tunnels guide.

### 2. Download model

Создадим папку куда загрузим тестовую модель

```bash
mkdir llm-model
```

Установим питоновский пакет для скачивания моделей из `huggingface` и скачаем простую модель (2,83Gb):

```bash
python3 -m pip install -U "huggingface_hub[cli]"
huggingface-cli download TheBloke/Llama-2-7B-Chat-GGUF llama-2-7b-chat.Q2_K.gguf --local-dir ./llm-model --local-dir-use-symlinks False
```

Упаковываем данные и загружаем на StorJ:

```bash
tar -czf llm-model.tar.gz -C ./llm-model .

./spctl files upload llm-model.tar.gz --output llm-model.json --filename llm-model.tar.gz
```

### 3. Prepare and test model launcher

:::warning
Для данного шага необходимо использовать операционную систему Linux с x64 архитектурой процессора
:::

Скачайте и загрузите себе в докер наш базовый образ:

```bash
./spctl offers download-content 7
docker load -i node16-python3.10-base-image-gsc-v1.6-gramine-v1.6.4-sp.tar.gz
```

Создадим отдельную папку: 

```bash
mkdir model-launcher-solution
```

Далее склонируем open-source репозиторий [text-generation-webui](https://github.com/oobabooga/text-generation-webui)

```bash
git clone https://github.com/oobabooga/text-generation-webui.git ./model-launcher-solution/text-generation-webui
```

Для правильной установки зависимостей, необходимо чтобы `text-generation-webui` проект находился по тому же абсолютному пути, который и будет у него в момент запуска. Поэтому для установки зависимостей выполним следующую докер-команду:

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

Добавим `server.js` файл в директорию `model-launcher-solution`, который будет запускать `text-generation-webui` сервер

```bash
touch ./model-launcher-solution/server.js
```

Add the following code to it:

```javascript
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
    '/sp/inputs/input-0002',
    '--model',
    'llama-2-7b-chat.Q2_K.gguf'
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

При необходимости добавьте нужные Вам аргументы командной строки с массив `commandLineArgs`.

Download a test script that will imitate the application launch in Tunnel Client:

```bash
curl -L https://raw.githubusercontent.com/Super-Protocol/solutions/main/Tunnel%20Client/examples/tunnel-client-test-start.js -o model-launcher-solution/tunnel-client-test-start.js
```

И проверим, что все настроено правильно:

```bash
docker run -p 9090:9090 --platform linux/amd64 --rm -ti -v $PWD/model-launcher-solution:/sp/run -v $PWD/llm-model:/sp/inputs/input-0002 --entrypoint /usr/local/bin/node gsc-node16-python3.10-base:latest tunnel-client-test-start.js ./server.js
```

:::note
Обратите внимание, что скачанную модель в [п.1](/developers/deployment_guides/llm#2-download-model) мы будем подключать в папке `/sp/inputs/input-0002`. Данное название не случайно, так подключаются в Суперпротоколе данные к заказу. В папке `/sp/inputs/input-0001` будут нахоидтся конфиг туннель-клиента с SSL ключом и сертификатом (они будут сформированы в [п.4 данного гайда](/developers/deployment_guides/llm#4-prepare-and-upload-tunnel-client-data))
:::

You can check it on a local address https://localhost:9090. Your browser will warn you about the presence of a self-signed certificate. The warning might be ignored since the certificate has been just generated in your Docker.

Подготовьте конфигурацию приложения (скачивание модели,)

Сгенерируем ключ для подписи солюшена:

```bash
./spctl solutions generate-key signing-key
```

Далее создадим солюшн:

```bash
./spctl solutions prepare --pack-solution model-launcher-solution.tar.gz --write-default-manifest --sgx-enclave-size 16G --env NODE_ENV=production --base-image-path $PWD/node16-python3.10-base-image-gsc-v1.6-gramine-v1.6.4-sp.tar.gz ./model-launcher-solution ./signing-key
```

Наберитесь терпения, данная операция займет время...

И загрузим полученный архив в StorJ:

```bash
./spctl files upload model-launcher-solution.tar.gz --output model-launcher-solution.json --filename model-launcher-solution.tar.gz --metadata metadata.json
```

### 4. Prepare and upload Tunnel Client data

It's time to set Tunnel Client's config file.

Create `tunnel-client-data` folder.

```bash
mkdir tunnel-client-data
```

Create `config.json` in the folder `tunnel-client-data`.

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
`config.json` parameters:

- `sgxMrEnclave` и `sgxMrSigner` - leave these values as above, don't change them.
- `authToken` - token from the `auth-token` file that you have created for Tunnel Server at [Step 1](/developers/deployment_guides/llm#1-launch-tunnel-server).
- `cert` и `key` - relative path from the `config.json` to the files with a SSL certificate and a private key that were generated at [Prerequisites](/developers/deployment_guides/llm#prerequisites) step. Place these files next to `config.json`. 
- `domain` (optional) - specify here you domain name if you are using a wildcard SSL certificate, otherwise you can leave it empty

Упаковываем данные и загружаем на StorJ:

```bash
tar -czf tunnel-client-data.tar.gz -C ./tunnel-client-data .

./spctl files upload tunnel-client-data.tar.gz --output tunnel-client-data.json --filename tunnel-client-data.tar.gz
```

### 4. Launch LLM 

После загрузки и солюшена а днных на StorJ, необходимо создать заказ командой:

```bash
./spctl workflows create --tee 1,1 --tee-slot-count 15 --solution 7 --solution model-launcher-solution.json --data tunnel-client-data.json --data llm-model.json --storage 25 --orders-limit 10 --min-rent-minutes 120
```

:::note
Время запусука сервера - около от часа до двух.
:::

### 5. DNS setup
 
Download the result of Tunnel Server launched at [Step 1](/developers/deployment_guides/llm#1-launch-tunnel-server). It should contain IP which you will need to add to DNS of your server. Please follow the instructions that are available in the section [Set up DNS](/developers/deployment_guides/tunnels/manual_run#set-up-dns) of Node.js with Tunnels guide.