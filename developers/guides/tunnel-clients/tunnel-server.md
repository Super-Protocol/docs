---
id: "tunnel-server"
title: "Туннель-сервер"
slug: "/guides/tunnel-clients/tunnel-server"
sidebar_position: 2
---

# Туннель-сервер

Полный код workflow туннель-сервера можно посмотреть [здесь](https://github.com/Super-Protocol/solutions/blob/main/.github/workflows/minecraft-tunnel-server-deploy.yml).

1. Get previous build for solution.
   
   Первый шаг отвечает за загрузку артефакта предыдущего запуска сервера. В рамках архитектуры этого проекта необходимо, 
   чтобы в определённый момент времени был запущен только один экземпляр сервера. Нужно, чтобы текущий запуск сервера 
   мог прервать работу уже запущенного экземпляра. По результату этого шага артефакт сохраняется в виде файла в рабочую 
   директорию GitHub Actions. Для выполнения этого шага необходимо в GitHub Secrets сохранить свой персональный токен 
   с названием `NPM_TOKEN_GH`. Токен можно сгенерировать в личном кабинете GitHub.

   ```yaml
    - name: Get previous build for solution
      continue-on-error: true
      env:
        GH_TOKEN: ${{ secrets.NPM_TOKEN_GH }}
        GH_ACTION_REPOSITORY: ${{ github.repository }}
        GH_WORKFLOW_NAME: ${{ github.workflow }}
      run: |
        LAST_RUN_ID=$(gh run --repo ${{ env.GH_ACTION_REPOSITORY }} list --workflow "${{ env.GH_WORKFLOW_NAME }}" -s success --json databaseId --jq .[0].databaseId)
        gh run --repo ${{ env.GH_ACTION_REPOSITORY }} download $LAST_RUN_ID -n last-orders
        echo "Artifact downloaded"
        ls -la
    ```

2. _Download SPCTL._
   
   Этот шаг отвечает за загрузку утилиты командной строки для работы с 
   Super Protocol, [`spctl`](https://docs.superprotocol.com/testnet/cli/);

   ```yaml
    - name: Download SPCTL
      run: |
        curl -L https://github.com/Super-Protocol/ctl/releases/download/v0.6.8/spctl-linux-x64 -o ./spctl 
        chmod +x ./spctl

        SPCTL_CONFIG=$(echo "${{ secrets.TESTNET_SPCTL_CONFIG_BASE64 }}" | base64 --decode)
        BASE_IMAGE_OFFER=5,2
        TUNNEL_SERVER_OFFER=10,7
        STORAGE_OFFER=20,17
        echo "$SPCTL_CONFIG" > ./config.json

        echo "Spctl" version
        ./spctl --version

        echo "BASE_IMAGE_OFFER=$BASE_IMAGE_OFFER" >> $GITHUB_ENV
        echo "TUNNEL_SERVER_OFFER=$TUNNEL_SERVER_OFFER" >> $GITHUB_ENV
        echo "STORAGE_OFFER=$STORAGE_OFFER" >> $GITHUB_ENV
    ```
    
   Для её запуска необходим `config.json`, который нужно закодировать в формат base64 и поместить в GitHub Secrets 
   под именем `TESTNET_SPCTL_CONFIG_BASE64`. Описание структуры файла можно посмотреть в документации [здесь](https://docs.superprotocol.com/testnet/cli/configuration/), 
   там же можно скачать шаблон этого файла.
 
   Закодировать `config.json` в формат base64 можно командой:
 
    ```shell title="config.json"
    echo "$(cat config.json)" | base64
    ```
 
   Информацию о значениях `BASE_IMAGE_OFFER`, `TUNNEL_SERVER_OFFER` и `STORAGE_OFFER` можно посмотреть [здесь](https://docs.superprotocol.com/testnet/cli/commands/workflows/create).

3. _Prepare tunnel server data._  
   
   На этом этапе происходит подготовка данных для запуска туннель-сервера. Первый параметр, который нужно подготовить и 
   сохранить в GitHub Secrets, это `SOLUTION_SERVER_TOKEN`. Это случайное значение, которое будет использоваться
   сервером для идентификации клиента. Сформировать его можно следующим образом:

   ``` shell
   node
   > require('crypto').randomUUID()
   '5ea1ad2c-b627-4ea1-bcc2-40922d2344a4'
   > .exit
   ```
   
4. _Run tunnel server._
   
   На этом этапе происходит проверка, запущен ли предыдущий экземпляр туннель-сервера. Если да, то ордер предыдущего 
   экземпляра отменяется. Далее, происходит создание нового ордера и запуск Туннель Сервера. Далее, формируется файл с 
   указанием текущего OrderId.
