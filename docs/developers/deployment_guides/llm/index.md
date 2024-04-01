---
id: "llm"
title: "LLM"
slug: "/deployment_guides/llm"
sidebar_position: 4
---

# Large Language Model

Large Language Model (LLM) is advanced AI systems designed to understand, generate, and work with human language in a way that mimics human-like understanding and communication. 

## Prerequisites

Same as in [Part 1 of Node.js with Tunnels guide](/developers/deployment_guides/tunnels/preparing) of this guide.

## Launch on Super Protocol

Вы можете развернуть свой Python-base or NodeJs-base сервер с LLM в конфиденциальном режиме в [туннелях](/developers/deployment_guides/tunnels) на Super Protocol. Необходимым условием является нативная поддрежака сервером запуска через https.

Для запуска будут использованы:
- Unbuntu 20.04
- NodeJs 20.12.0
- Python 3.10.13

### 1. Prepare and launch Tunnel Server

Подготовка и запуск туннель-сервера описана в [п.1 раздела Node.js with Tunnels](/developers/deployment_guides/tunnels/manual_run/#prepare-and-deploy-tunnel-server). Пожалуйста, воспользутейсь ей.

### 2. Prepare Tunnel Client data

Для успешного разворачивания необходимо подготовить конфигурационные файлы для теннуль-клиента, файлы Вашего сервера и правильный `server.js` файл.

Туннель-клиент запускает `server.js` by NodeJs worker_threads, передавая следующие env переменные
    
- `HTTPS_PORT` - Port on which the local HTTPS web server is to be deployed and which will accept incoming connections.

- `TLS_CERT` - SSL certificate of the HTTPS server.

- `TLS_KEY` - Private key to the SSL of the HTTPS server.

Если Вы используете NodeJs-base LLM сервер (например использующий [node-llama-cpp](https://github.com/withcatai/node-llama-cpp)), то этот файл может быть entrypoint для старта Вашего application-а на порту, переданном в `HTTPS_PORT` env-переменной.

Если Вы используете Python-base LLM сервер (например [text-generation-webui](https://github.com/oobabooga/text-generation-webui)), то в `server.js` должен запускать python-приложение, через командную строку, использую `spawn` метод из `child_process` внутреннего NodeJS пакета (смотри [пример запуска Python-сервера](/developers/deployment_guides/llm#python-server-launch-example))

Для запуска туннель-клиента Вам необходим SSL сертификат и файл ключа к этому сертификату, а так же правильно сконфигрурированный `config.json` файл. Информация о получении SSL ключа и сертификата описана в [п.1 раздела Node.js with Tunnels](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate). Информация о правильной структуре каталога и формировании туннель-клиент конфига описана в [п.3 раздела Node.js with Tunnels](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-client)

Переместите Ваш `server.js` файл в папку `content`, которая должна находится на одном уровне с `config.json`-файлом. Туннель-килент будет искать `server.js` файл именно в этой папке.

Далее в папку `content` необходимо поместить файлы Вашего LLM сервера и `node_modules`, сбилдженные под linux/amd64 платформу (если Вы используете NodeJs сервер или если Ваш `server.js` файл использует какие-либо внешние библиотеки).

:::note
После успешного запуска контейнера на Super Protocol-е папка `content` будет находится по пути `/sp/run/inputs/input-0001/content`. Это может быть важно для некоторых зависимостей.
:::

Python зависимости так же должны быть скачаны под платформу linux/amd64 и находиться вместе с LLM-сервером. Рекомендуем использовать папку `pypi` внутри папки `content`. Смотри [пример запуска Python-сервера](/developers/deployment_guides/llm#python-server-launch-example) для лучшего понимания как правильно это сделать. Так же протестируйте локально Ваше приложение по аналогии из инструкции.

После того, как все необходимые файлы были сформированы, необходимо их запаковать и загрузить на StorJ при помощи нашей CLI [spctl](/developers/cli_guides/configuring), а так же необходимо создать заказ. Эти шаги детально описаны в [п.3 раздела Node.js with Tunnels](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-client). Воспользуйтесь данными инструкциями.

Tunnel Server у Вас должен быть уже запущен в рамках выполненной инструкции из [п.1](/developers/deployment_guides/llm#1-prepare-and-launch-tunnel-server).

После того как Тunnel Server и Tunnel Client будут успешно запущены, Вам необходимо будет настроить DNS для хоста, к которому Вы выпустиили SSL сертифифкат. Для этого воспользуйтесь [данной инструкцией](/developers/deployment_guides/tunnels/manual_run#set-up-dns)

## Python server launch example

Создадим папку с которой будем работать:

```bash
mkdir sp-python-in-tunnels-test
cd ./sp-python-in-tunnels-test
```

### 1. Launch Tunnel Server

Скачайте и настройте [spctl](/developers/cli_guides/configuring) в этой папке.

Пройтдите полностью [параграф Prepare and deploy Tunnel Server из п.3 раздела Node.js with Tunnels](/developers/deployment_guides/tunnels/manual_run/#prepare-and-deploy-tunnel-server).

### 2. Prepare and check Python server

Далее подготовим данные с Pytnon сервером для Туннель Клиента:

```bash
mkdir -p tunnel-client-data/content
```

Создайте файл `server.py` в папке `content`:

```bash
touch tunnel-client-data/content/server.py
```

И добавьте в него следующий код:

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

Далее создайте файл `server.js`, который будет запускаться Туннель Клиентом, а он в свою очередь будет запускать Python-сервер:

```bash
touch tunnel-client-data/content/server.js
```

И добавьте в него следующий код:

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

  const appFolder = `/sp/inputs/input-0001/content`;

  await new Promise((_resolve, _reject) => {
    const pythonProcess = spawn(`python`, [`${appFolder}/server.py`], {
      stdout: 'inherit',
      stderr: 'inherit',
      env: {
        ...process.env,
        PYTHONPATH: `${process.env.PYTHONPATH}:${appFolder}/pypi/lib/python3.10/site-packages`,
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
Обратите внимание, что `server.js` расширяет env переменную `PYTHONPATH`, добавляя туда дополнительный путь для Python зависимостей.
:::

Добавим Python-пакет `Flask` как зависимость нашего сервера и установим его в необходимую нам папку

```bash
echo "Flask==3.0.2" > tunnel-client-data/content/requirements.txt
docker run --platform linux/amd64 --rm -ti -v $PWD/tunnel-client-data/content/:/python --entrypoint /usr/local/bin/pip -w /python python:3.10-bullseye install -r requirements.txt -t ./pypi/lib/python3.10/site-packages
```

Далее можно проверить локально правильность настройки всех файлов и зависимостей. 

Скачайте и загрузите в Ваш докер наш `Node-Python` базовый образ:

```bash
./spctl offers download-content 76 (это dev, на тестнете будет другой)
docker load -i <path to the Python base image archive>
```

Далее необходимо скачать тестовый скрипт, эмулирующий запуск приложения в Туннель Клиенте:

```bash
curl -L https://raw.githubusercontent.com/Super-Protocol/solutions/sp-4220-tunnel-client-check-script/Tunnel%20Client/examples/tunnel-client-test-start.js -o tunnel-client-test-start.js
```

И протестируем работу Python сервера через Туннель Клиент:

```bash
docker run -p 9090:9090 --platform linux/amd64 --rm -ti -v $PWD:/sp/run -v $PWD/tunnel-client-data/content:/sp/inputs/input-0001/content --entrypoint /usr/local/bin/node -w /sp/run gsc-node20-python3.10-base-solution:latest tunnel-client-test-start.js /sp/inputs/input-0001/content/server.js
```

Проверьте по локальному адресу https://localhost:9090 успешность работы сервера. Ваш браузер будет ругаться на самоподписаный сертификат - дааное предупреждение можно игнорировать, т.к. данный сертификат был только что сгененирован у Вас в докере.

### 3. Prepare Tunnel Client

Сервер работает успешно, теперь необходимо настроить конфигурационный файл для Туннель Клиента.

Next, create `config.json` in the folder */tunnel-client-data/*.

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

Ознакомтесь с детальной информацией о кадом параметре и о том как правильно его заполнить в [п.3 раздела Node.js with Tunnels](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-client).

### 4. Launch Tunnel Client

После успешной натсройки конфига, пакуем все необходимые файлы в архив, загружаем в StorJ и создаем заказ на Туннель Клиент:

```bash
tar -czf tunnel-client-data.tar.gz -C ./tunnel-client-data .
./spctl files upload tunnel-client-data.tar.gz --output tunnel-client-data.json --filename tunnel-client-data.tar.gz
./spctl workflows create --tee 1 --solution 76 --solution 80 --data tunnel-client-data.json --storage 23 --orders-limit 10 --min-rent-minutes 60
```

### 5. DNS setup
 
Скачайте результат с запущеного в [п.1](/developers/deployment_guides/llm#1-launch-tunnel-server) Туннель-Сервера. Там будет ip, который необходимо добавить DNS вашего домена. Ознакомтесть с детальной информацией в [параграфе Set up DNS п.3 раздела Node.js with Tunnels](/developers/deployment_guides/tunnels/manual_run#set-up-dns)