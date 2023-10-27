---
id: "tunnel-server"
title: "Настройка репозитория"
slug: "/guides/tunnel-clients/repo"
sidebar_position: 2
---

Для автоматического деплоймента решения можно использовать GitHub Actions, которые позволяют его автоматически разворачивать — 
[туннель-сервер](https://github.com/Super-Protocol/solutions/blob/main/.github/workflows/minecraft-tunnel-server-deploy.yml) 
и [туннель-клиент](https://github.com/Super-Protocol/solutions/blob/main/.github/workflows/minecraft-tunnel-client-deploy.yml).  

## Туннель-сервер

Для работы GitHub Actions туннель-сервера необходимо установить следующие значения:

1. `NPM_TOKEN_GH`. Необходимо в GitHub Secrets сохранить свой персональный токен
   с названием `NPM_TOKEN_GH`. Токен можно сгенерировать в личном кабинете GitHub.

2. `SPCTL_CONFIG_BASE64`. Так же, необходим `config.json`, который нужно закодировать в формат base64 и поместить в 
   GitHub Secrets под именем `SPCTL_CONFIG_BASE64`. 
   Описание структуры файла можно посмотреть в документации [здесь](https://docs.superprotocol.com/testnet/cli/configuration/), там же можно скачать шаблон этого файла.

   Закодировать `config.json` в формат base64 можно командой:

    ```shell title="config.json"
    echo "$(cat config.json)" | base64
    ```

3. `SOLUTION_SERVER_TOKEN`. Также, нужно подготовить и сохранить в GitHub Secrets `SOLUTION_SERVER_TOKEN`. 
   Это случайное значение, которое будет использоваться сервером для идентификации клиента.
   Сформировать его можно следующим образом:

   ``` shell
   node
   > require('crypto').randomUUID()
   '5ea1ad2c-b627-4ea1-bcc2-40922d2344a4'
   > .exit
   ```

## Туннель-клиент

1. `SOLUTION_SSL_KEY_BASE64` и `SOLUTION_SSL_CERTIFICATE_BASE64`.
   Для дальнейшей работы с [ключом и сертификатом](https://docs.dev.superprotocol.com/developers/guides/tunnel-clients/prepare),
   необходимо преобразовать содержимое этих файлов в одну строку. Для этого достаточно выполнить команды:

   ```shell
   awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' fullchain.pem
   awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' privkey.pem
   ```

   Нужно скопировать эти значения в `SOLUTION_SSL_CERTIFICATE_BASE64` и `SOLUTION_SSL_KEY_BASE64`, в кодировке base64.

   Закодировать значения в base64 можно следующими командами:

   ```shell title="config.json"
   echo "<YOUR_CERTIFICATE>" | base64
   echo "<YOUR_KEY>" | base64
   ```
   
2. `TUNNEL_SERVER_MRSIGNER` и `TUNNEL_SERVER_MRENCLAVE`. Для корректной работы туннель-клиента необходимо в GitHub Variables 
   создать два параметра, MrSigner и MrAnclave, со значениями:

    ```tsconfig
    TUNNEL_SERVER_MRSIGNER=82e55c6ec7268b07e030226cc42417b89cb17ecc8b6b73bafb84fc44b0ed059c
    TUNNEL_SERVER_MRENCLAVE=22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513
    ```

3. В результате, в GitHub Secrets и в GitHub Variables должно быть следующее содержимое:

   <Imager src={require('./images/secrets.png').default} />
   <Imager src={require('./images/values.png').default} />
