---
id: "superchat"
title: "Example: SuperChat"
slug: "/deployment_guides/tunnels/superchat"
sidebar_position: 7
---

This overview describes the process of launching a `Superprotocol Secret Chat` (or `Super Chat`) on the Super Protocol platform and locally as well.

Вы можете найти больше информации по данному приложенияю [здесь](/developers/offers/superchat)

## Prerequisites

* [Docker](https://docs.docker.com/engine/install/)

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

Для создания S3 Cretendials с этому бакету воспользуйтесь инструкцией [здесь](https://docs.storj.io/dcs/access#create-s3-credentials).

После создания бакета и S3 Credentials, разместите `Access Key`, `Secret Key`, `S3 Endpoint` и название вашего бакета в `.env` файле. 

Например:
```
S3_ACCESS_KEY_ID=jv467.....
S3_ACCESS_SECRET_KEY=jy8wqh6......
S3_ENDPOINT=https://gateway.storjshare.io
STORJ_BUCKET=superchat
```

## Local run

Данное приложение работает только под платформой linux/amd64 с необходимыми внешними зависимостями, такими как `python 3.10` и `go 1.18`.  Поэтому для установки зависимостей и билда проекта, находясь в корневой папке чата, воспользуйтесь docker-compose командой:

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

Дальше вам необходмио папки и файлы `.next`, `dist`, `node_modules`, `public` ,`next.config.js`, `package.json`, `.env` скопировать а отдельную папку `content` и полностью следовать инструкции из [п.3 Manual Run](/developers/deployment_guides/tunnels/manual_run) данного гайда

### Deploy with Github Actions

Для деплоя Super Chat-а через Github Actions, вы должны использовать или существоующий Github репозиторий или создать новый. Мы рекомендуем Вам сделать [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) нашего репозитория [solutions](https://github.com/Super-Protocol/solutions), чтобы структура папок сохранилась неизменной.

Дальше необходимо настроить в репозитории secrets and variables, как указано [п.4 нашего гайда](/developers/deployment_guides/tunnels/repo#preparing-secrets-and-variables).

Если все secrets and variables были настроены правильно, то уже готовые GitHub actions `superchat-...` в репозитории задеплоят Super Chat на вашем домене с Вашем SSL сертификатом.

:::caution
С одним SSL сертификатом может быть задеплоено только одно приложение!
 Если Вы уже задеплоили какое-то приложение на Superprotocol-е с Вашим сертификатом, то для деплоя нового, нужно сгенерировать новый сертификат и ключ (можно использовать сабдомены).
  Для автоматического деплоя через Github Action-ы Вам так же нужно будет создать новые `secret`-ы с новым ключом и новым сертифкатом, и заменить ими `SOLUTION_SSL_...` сикреты в `.yml`-файлах Github Action
:::