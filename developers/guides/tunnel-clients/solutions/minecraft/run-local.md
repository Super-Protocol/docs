---
id: "run-local"
title: "Предварительная настройка"
slug: "/guides/tunnel-clients/minecraft/run-local"
sidebar_position: 1
---

# Предварительная настройка

Для выполнения последовательности всех действий необходимо установить 
[Node.js](https://nodejs.org/en/download/package-manager) v16, 
[yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) и 
[TypeScript](https://www.typescriptlang.org/download), а также, [Docker](https://docs.docker.com/engine/install/) и 
[Docker Compose](https://docs.docker.com/compose/install/).

Для запуска игры необходим Minecraft-сервер и web-клиент к нему.
В качестве примера будем использовать сервер [flying-squid](https://github.com/PrismarineJS/flying-squid) и клиент [prismarine-web-client](https://github.com/PrismarineJS/prismarine-web-client).

Для начала необходимо загрузить исходный код [проекта](https://github.com/Super-Protocol/solutions):

```shell
git clone https://github.com/Super-Protocol/solutions
cd solutions/Tunnel\ Client/minecraft/
```

Далее, необходимо переименовать файл `.env.example` в `.env`.

```shell
mv .env.example .env
```

Для безопасного запуска решения в TEE необходимо обеспечить защищённый канал между браузером пользователя и web-сервером 
клиента Minecraft. Для этого необходимо модифицировать файл клиента Minecraft [/client/server.js](https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/minecraft/client/server.js) (строки 42-45), 
а именно, добавить https-сервер, в конструктор которого передать приватный ключ и сертификат. 
Процедура создания ключа и сертификата описана [здесь](https://docs.dev.superprotocol.com/developers/guides/tunnel-clients/ssl).

В результате, должны получиться две строки, соответствующие файлам `cert.crt` и `key.pem`.

Их необходимо поместить в качестве значений констант `TLS_CERT` и `TLS_KEY` в файле `.env`.

<AdmonitionWrapper type="caution">
Обратите внимание, значения TLS_CERT и TLS_KEY в файле .env должны быть указаны в кавычках.
</AdmonitionWrapper>

В корне проекта, в директории `src`, находится файл server.ts, который запускает Minecraft-сервер и Minecraft-клиент, 
создавая два потока.

```javascript
runWorker(resolve(__dirname, "..", "server/mc-server.js"));
runWorker(resolve(__dirname, "..", "client/server.js"));
```

Теперь можно установить все зависимости и запустить приложение в `dev mode`:

```shell
cd minecraft
yarn dependencies
yarn build:all
yarn dev
```

<AdmonitionWrapper type="caution">
Обратите внимание, для запуска этого решения необходима Node.js v16.
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
