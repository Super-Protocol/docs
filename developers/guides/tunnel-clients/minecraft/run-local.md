---
id: "run-local"
title: "Предварительная настройка"
slug: "/guides/tunnel-clients/minecraft/run-local"
sidebar_position: 1
---

# Предварительная настройка

Для запуска игры необходим Minecraft-сервер и web-клиент к нему.
В качестве примера будем использовать сервер [flying-squid](https://github.com/PrismarineJS/flying-squid) и клиент [prismarine-web-client](https://github.com/PrismarineJS/prismarine-web-client).

Для начала необходимо загрузить исходный код [проекта](https://github.com/Super-Protocol/solutions):

```shell
git clone https://github.com/Super-Protocol/solutions
cd solutions
```

Для безопасного запуска решения в TEE необходимо обеспечить защищённый канал между браузером пользователя и web-сервером 
клиента Minecraft. Для этого необходимо модифицировать файл клиента Minecraft [/client/server.js](https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/minecraft/client/server.js) (строки 42-45), 
а именно, добавить https-сервер, в конструктор которого передать приватный ключ и сертификат. 
Делается это следующей командой:

```shell
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.crt -sha256 -days 365 -nodes -subj "/CN=localhost"
```

В результате должно получиться два файла: `cert.crt` и `key.pem` в каталоге, из которого выполнялась эта команда. 
Чтобы поместить ключ и сертификат в файл `.env`, необходимо преобразовать содержимое этих файлов в одну строку. 
Это можно сделать это с помощью следующей команды:

```shell
awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' cert.crt
# -----BEGIN CERTIFICATE-----\nMIIFCTCCAvGgAwIBA...
```

```shell
awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' key.pem
# -----BEGIN PRIVATE KEY-----\nMIIJQwIBADANBgkqh...
```

Кроме этого, необходимо переименовать файл `.env.example` в `.env` и скопировать в него соответствующие строки из двух 
предыдущих команд. В результате должно получиться примерно следующее:

```dotenv
HTTPS_PORT=8888
TLS_CERT="-----BEGIN CERTIFICATE-----\nMIIFCTCCAvGgAwIBA..."
TLS_KEY="-----BEGIN PRIVATE KEY-----\nMIIJQwIBADANBgkqh..."
```

<AdmonitionWrapper type="caution">
Значения TLS_CERT и TLS_KEY должны быть указаны в кавычках.
</AdmonitionWrapper>

После этого можно удалить файлы `cert.crt` и `key.pem`.

В корне проекта, в директории `src`, находится файл server.js, который запускает Minecraft-сервер и Minecraft-клиент, 
создавая два потока.

```javascript
runWorker(resolve(__dirname, "..", "server/mc-server.js"));
runWorker(resolve(__dirname, "..", "client/server.js"));
```

Теперь можно установить все зависимости и запустить приложение в `dev mode`:

```shell
yarn dependencies
yarn build:all
yarn dev
```

<AdmonitionWrapper type="caution">
Для запуска этого решения необходима Node.js v16.
</AdmonitionWrapper>

Также, для удобства, можно использовать docker-compose для запуска решения в контейнере:

```yaml
version: '3.8'

services:
  sp-minecraft:
    image: node:16-buster
    container_name: sp-minecraft
    platform: linux/amd64
    env_file:
      - .env
    volumes:
      - ./:/sp/run
    entrypoint: ["/bin/sh","-c"]
    command:
      - |
        yarn --cwd /sp/run build:all
        yarn --cwd /sp/run start
    ports:
      - "8888:8888"
```

```shell
docker-compose up
```

UI будет доступен по адресу: [https://localhost:8888/](https://localhost:8888/)
