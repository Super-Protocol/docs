---
description: Introduction
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Предварительная настройка и локальный запуск

Minecraft - популярная игра, любимая многими. В этом обзоре мы представим простой гайд по запуску сервера и клиента Minecraft на платформе Super Protocol.

Здесь описывается пример, который демонстрирует возможность запуска динамических приложений в TEE, используя такие инструменты, как Туннель Сервер и Туннель Клиент.

С помощью этого руководства Вы можете запустить своё приложение в TEE, действуя шаг за шагом, по аналогии.

Для запуска игры необходим Minecraft сервер и web-клиент к нему.

В качестве примера, мы будем использовать сервер [flying-squid](https://github.com/PrismarineJS/flying-squid) и клиент [prismarine-web-client](https://github.com/PrismarineJS/prismarine-web-client).

Для начала, нам необходимо загрузить исходный код [проекта](https://github.com/Super-Protocol/solutions):

```bash
git clone https://github.com/Super-Protocol/solutions
cd solutions
```

Для безопасного запуска решения в TEE необходимо обеспечить защищённый канал между браузером пользователя и web-сервером клиента Minecraft. Для этого необходимо модифицировать файл клиента Minecraft [/client/server.js](https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/minecraft/client/server.js) (строки 42-45), а именно, добавить https-сервер, в конструктор которого передать приватный ключ и сертификат. Делается это следующей командой:

```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.crt -sha256 -days 365 -nodes -subj "/CN=localhost"
```

В результате у вас будет два файла: `cert.crt` и `key.pem` в каталоге, из которого вы выполнили эту команду. Чтобы поместить ключ и сертификат в наш файл `.env`, нам нужно преобразовать содержимое этих файлов в одну строку. Вы можете сделать это с помощью следующей команды:

```
$ awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' cert.crt
# -----BEGIN CERTIFICATE-----\nMIIFCTCCAvGgAwIBA...
```

```
$ awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' key.pem
# -----BEGIN PRIVATE KEY-----\nMIIJQwIBADANBgkqh...
```

Кроме этого, необходимо переименовать файл `.env.example` в `.env` и скопировать в него соответствующие строки из двух предыдущих команд. В результате должно получиться примерно следующее:

```
HTTPS_PORT=8888
TLS_CERT="-----BEGIN CERTIFICATE-----\nMIIFCTCCAvGgAwIBA..."
TLS_KEY="-----BEGIN PRIVATE KEY-----\nMIIJQwIBADANBgkqh..."
```

> Обратите внимание, что значения TLS\_CERT и TLS\_KEY должны быть указаны в кавычках.

После этого вы можете удалить файлы `cert.crt` и `key.pem`.

Далее, в корне проекта, в директории `src`, находится файл server.js, который запускает Minecraft сервер и клиент, создавая два потока.

```javascript
runWorker(resolve(__dirname, "..", "server/mc-server.js"));
runWorker(resolve(__dirname, "..", "client/server.js"));
```

Теперь мы можем установить все зависимости и запустить приложение в `dev mode`:

```bash
yarn dependencies
yarn build:all
yarn dev
```

Или вы можете использовать docker-compose для запуска решения в контейнере:

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

```bash
docker-compose up
```

UI будет доступен по адресу: [https://localhost:8888/](https://localhost:8888/)

На этом предварительная настройка закончена.