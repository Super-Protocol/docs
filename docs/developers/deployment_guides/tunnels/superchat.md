---
id: 'superchat'
title: 'Example: SuperChat'
slug: '/deployment_guides/nodejs_tunnels/superchat'
sidebar_position: 7
---

This overview describes the process of launching a `Superprotocol Secret Chat` (or `Super Chat`) on the Super Protocol platform and locally as well.

Вы можете найти больше информации по данному приложенияю [здесь](/developers/offers/superchat)

## Prerequisites

- [Docker](https://docs.docker.com/engine/install/)

## Download Super Chat source code

First step is to load the [source code](https://github.com/Super-Protocol/solutions):

```bash
git clone https://github.com/Super-Protocol/solutions
cd solutions/Tunnel\ Client/chat/
```

## Setup env variables

Создайте `.env` файл командой

```bash
cp .env.example .env
```

Для успешного запуска чата, Вам необходим [StorJ](https://www.storj.io) Bucket и S3 Credentials к нему.

Для создания бакета воспользуйтесь информацие [здесь](developers/cli_guides/storages#creating-a-bucket)

Для создания S3 Cretendials к этому бакету воспользуйтесь инструкцией [здесь](https://docs.storj.io/dcs/access#create-s3-credentials).

После создания бакета и S3 Credentials, разместите `Access Key`, `Secret Key`, `S3 Endpoint` и название вашего бакета в `.env` файле.

Например:

```
S3_ACCESS_KEY_ID=jv467.....
S3_ACCESS_SECRET_KEY=jy8wqh6......
S3_ENDPOINT=https://gateway.storjshare.io
STORJ_BUCKET=superchat
```

## Local run

Данное приложение работает только под платформой linux/amd64 с необходимыми внешними зависимостями, такими как `python 3.10` и `go 1.18`. Поэтому для установки зависимостей и билда проекта, находясь в корневой папке чата, воспользуйтесь docker-compose командой:

```bash
docker compose up build
```

Дождитесь окончания выполнения команды. Это займет от 5 до 10 минут.

Далее для запуска приложения выполните:

```bash
docker compose up chat
```

Подключайтесь по ссылке http://localhost:3000

## Deploy on Superprotocol

### Manual deploy

Для запуска Super Chat-а через собственноручно созданные офферы, вам сначала необходимо установить зависимости и сбилдить проект для linux/amd64 платформы. Выполните следующую команду (если вы ее не выполняли в рамках ## Local run):

```bash
docker compose up build
```

Дальше вам необходмио папки и файлы `.next`, `dist`, `node_modules`, `public` ,`next.config.js`, `package.json`, `.env` скопировать а отдельную папку `content` и полностью следовать инструкции из [п.3 Manual Run](/developers/deployment_guides/nodejs_tunnels/manual_run) данного гайда

### Deploy with Github Actions

Сделайте [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) нашего репозитория [solutions](https://github.com/Super-Protocol/solutions).

Дальше необходимо настроить в репозитории secrets and variables, как указано [п.4 нашего гайда](/developers/deployment_guides/nodejs_tunnels/repo#preparing-secrets-and-variables), но некоторые переменные будут именть другие названия.

Необходимые сикреты:

- `GH_TOKEN` - такой же как и в [п.4 нашего гайда](/developers/deployment_guides/nodejs_tunnels/repo#preparing-secrets-and-variables)

- `SUPERCHAT_SOLUTION_SERVER_TOKEN` - любой случайный uuid. Сгененриуйте его при помощи команды

  ```bash
  uuidgen
  ```

  и добавьте в качестве секрета. Нельзя использовать UUID, который вы уже использовали для деплоя туненль сервера какого-нибудь другого приложения. Он должен быть другим.

- `SUPERCHAT_SOLUTION_SSL_CERTIFICATE_BASE64` - сгенерируйте отдельный ssl сертифифкат для Superchat. Сконвертируйте его в base64 при помощи команды

  ```bash
  awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' superchat-ssl.crt | base64
  ```

  Замените `superchat-ssl.crt` на название файла с вашим сертификатом

- `SUPERCHAT_SOLUTION_SSL_KEY_BASE64` - приватный ключ от сгенерированного ssl сертификата. Сконвертируйте его в base64 при помощи команды

  ```bash
  awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' superchat-private.pem | base64
  ```

  Замените `superchat-private.pem` на название файла с вашим сертификатом

- `SPCTL_CONFIG_BASE64` - такой же как и в [п.4 нашего гайда](/developers/deployment_guides/nodejs_tunnels/repo#preparing-secrets-and-variables)

Так же добавьте variables `TUNNEL_SERVER_MRENCLAVE` и `TUNNEL_SERVER_MRSIGNER`, как указано [п.4 нашего гайда](/developers/deployment_guides/nodejs_tunnels/repo#preparing-secrets-and-variables)

Дальше переходите во вкладку Actions вашего репозитория и запускайте экшены деплоя Superchat! Они могут выполняться параллельно.

После успешной отработки Guthub Actuin-ов, Вам нужно будет вручную внести DNS для вашего домена с Superchat. Используйте инструкцию из [п.4 Setup DNS](/developers/deployment_guides/nodejs_tunnels/repo#setup-dns)

:::caution
С одним SSL сертификатом может быть задеплоено только одно приложение!
Если Вы уже задеплоили какое-то приложение на Superprotocol-е с Вашим сертификатом, то для деплоя нового, нужно сгенерировать новый сертификат и ключ (можно использовать сабдомены).
:::
