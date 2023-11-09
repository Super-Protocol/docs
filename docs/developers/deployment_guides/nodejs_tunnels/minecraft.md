---
id: "minecraft"
title: "Example: Minecraft"
slug: "/deployment_guides/nodejs_tunnels/minecraft"
sidebar_position: 6
---

Minecraft - популярная игра, любимая многими. В этом обзоре описан процесс по запуску сервера и клиента Minecraft на платформе Super Protocol.

Этот пример демонстрирует возможность запуска динамических приложений в TEE, используя такие инструменты, как туннель-сервер и туннель-клиент.

Примером можно руководствоваться для запуска своих приложений в TEE, действуя шаг за шагом, по аналогии.



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

:::caution
Обратите внимание, значения TLS_CERT и TLS_KEY в файле .env должны быть указаны в кавычках.
:::

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

:::caution
Обратите внимание, для запуска этого решения необходима Node.js v16.
:::

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


# Подготовка решения для деплоя в ТЕЕ

На этом шаге необходимо создать скрипт для production-сборки и подготовки её для деплоя в TEE.

Например, можно создать директорию scripts и поместить туда файл, `prepare-solution.sh`:

```shell title="scripts/prepare-solution.sh"
#!/bin/bash
set -e

solution_path=$1

# cd to one directory up of current script
REAL_PATH=$(realpath "$0")
LOCAL_PATH=$(dirname "$REAL_PATH")
cd "$LOCAL_PATH"
cd ..

echo "Install dependencies for client & sever module"
yarn dependencies-scripts
yarn build:all

echo "Copy files"
cp -R dist node_modules package.json yarn.lock server client "$solution_path"
```

Для запуска, скрипту необходимо передать параметр, путь к директории, куда будут копироваться необходимые файлы.

```shell
cd minecraft
./scripts/prepare-solution.sh /home/user/mc-solution
```

После запуска скрипта, будет сформирована примерно следующая файловая структура:

```text
.
├── client
├── dist
├── logs
├── node_modules
├── package.json
├── server
└── yarn.lock
```

:::caution
Запускать вручную скрипт не нужно. Эта информация приведена для общего понимания процесса. Его запуск будет
происходить автоматически, что будет описано далее.
:::
