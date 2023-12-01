---
id: 'minecraft'
title: 'Example: Minecraft'
slug: '/deployment_guides/nodejs_tunnels/minecraft'
sidebar_position: 6
---

This overview describes the process of launching a Minecraft server and client on the Super Protocol platform and locally as well.

This example demonstrates the capability to run dynamic applications in a Trusted Execution Environment (TEE) using tools such as the [Tunnel Server](/developers/architecture/tunnels/server) and [Tunnel Client](/developers/architecture/tunnels/client).

## Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/en/download/package-manager) v16
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Docker](https://docs.docker.com/engine/install/)

## Download Minecraft source code

To launch the game you will need the Minecraft server and a web client.
In this example we'll be using [flying-squid](https://github.com/PrismarineJS/flying-squid) and web client [prismarine-web-client](https://github.com/PrismarineJS/prismarine-web-client).

First step is to load the [source code](https://github.com/Super-Protocol/solutions):

```bash
git clone https://github.com/Super-Protocol/solutions
cd solutions/Tunnel\ Client/minecraft/
```

## Local run

Установите все необходимые зависимости и сбилдите проект

```bash
yarn dependencies
yarn build:all
```

Запустите minecraft при помощи `docker compose`

```bash
docker compose up
```

Подключайтесь по ссылке http://localhost:8888

## Deploy on Superprotocol

### Manual deploy

Для запуска Minecraft через собственноручно созданные офферы, вам сначала необходимо установить зависимости и сбилдить проект для linux/amd64 платформы. Для этого из каталога с Maincraft-ом запустите слудующую команду

```bash
docker run --platform linux/amd64 --rm -it -w /home/node -v ./:/home/node node:16-buster yarn dependencies && yarn build:all
```

Дальше вам необходмио папки и файлы `dist`, `node_modules`, `package.json`, `server`, `client` скопировать а отдельную папку `content` и полностью следовать инструкции из [п.3 Manual Run](/developers/deployment_guides/nodejs_tunnels/manual_run) данного гайда

### Deploy with Github Actions

Сделайте [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) нашего репозитория [solutions](https://github.com/Super-Protocol/solutions).

Дальше необходимо настроить в репозитории secrets and variables, как указано [п.4 нашего гайда](/developers/deployment_guides/nodejs_tunnels/repo#preparing-secrets-and-variables), но некоторые переменные будут именть другие названия.

Необходимые сикреты:

- `GH_TOKEN` - такой же как и в [п.4 нашего гайда](/developers/deployment_guides/nodejs_tunnels/repo#preparing-secrets-and-variables)

- `MINECRAFT_SOLUTION_SERVER_TOKEN` - любой случайный uuid. Сгененриуйте его при помощи команды

  ```bash
  uuidgen
  ```

  и добавьте в качестве секрета. Нельзя использовать UUID, который вы уже использовали для деплоя туненль сервера какого-нибудь другого приложения. Он должен быть другим.

- `MINECRAFT_SOLUTION_SSL_CERTIFICATE_BASE64` - сгенерируйте отдельный ssl сертифифкат для майнкрафта. Сконвертируйте его в base64 при помощи команды

  ```bash
  awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' minecraft-ssl.crt | base64
  ```

  Замените `minecraft-ssl.crt` на название файла с вашим сертификатом

- `MINECRAFT_SOLUTION_SSL_KEY_BASE64` - приватный ключ от сгенерированного ssl сертификата. Сконвертируйте его в base64 при помощи команды

  ```bash
  awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' minecraft-private.pem | base64
  ```

  Замените `minecraft-private.pem` на название файла с вашим сертификатом

- `SPCTL_CONFIG_BASE64` - такой же как и в [п.4 нашего гайда](/developers/deployment_guides/nodejs_tunnels/repo#preparing-secrets-and-variables)

Так же добавьте variables `TUNNEL_SERVER_MRENCLAVE` и `TUNNEL_SERVER_MRSIGNER`, как указано [п.4 нашего гайда](/developers/deployment_guides/nodejs_tunnels/repo#preparing-secrets-and-variables)

Дальше переходите во вкладку Actions вашего репозитория и запускайте экшены деплоя Minecraft! Они могу выполняться параллельно.

После успешной отработки Guthub Actuin-ов, Вам нужно будет вручную внести DNS для вашего домена с майнкрафтом. Используйте инструкцию из [п.4 Setup DNS](/developers/deployment_guides/nodejs_tunnels/repo#setup-dns)

:::caution
С одним SSL сертификатом может быть задеплоено только одно приложение!
Если Вы уже задеплоили какое-то приложение на Superprotocol-е с Вашим сертификатом, то для деплоя нового, нужно сгенерировать новый сертификат и ключ (можно использовать сабдомены).
Для автоматического деплоя через Github Action-ы Вам так же нужно будет создать новые `secret`-ы с новым ключом и новым сертифкатом, и заменить ими `SOLUTION_SSL_...` сикреты в `.yml`-файлах Github Action
:::
