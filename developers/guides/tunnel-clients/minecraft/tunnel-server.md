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

# Туннель Сервер

Полный код Туннель Сервера можно посмотреть [здесь](https://github.com/Super-Protocol/solutions/blob/main/.github/workflows/minecraft-tunnel-server-deploy.yml).

1. Get previous build for solution. Первый шаг отвечает за загрузку артефакта предыдущего запуска сервера. В рамках архитектуры этого проекта нам необходимо, чтобы в определённый момент времени был запущен только один экземпляр сервера. Нам нужно, чтобы текущий запуск сервера мог прервать уже запущенный экземпляр. По результату этого шага артефакт сохраняется в виде файла в рабочую директорию GitHub Actions. Для выполнения этого шага необходимо в GitHub Secrets сохранить свой персональный токен с названием `NPM_TOKEN_GH`. Токен можно сгенерировать в своём GitHub личном кабинете.

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

2. Download SPCTL. Этот шаг отвечает за загрузку утилиты командной строки для работы с Super Protocol, [`spctl`](https://docs.superprotocol.com/testnet/cli/).&#x20;

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

Для её запуска необходим `config.json`, который кодируется в формат base64 и, так же, помещается в GitHub Secrets под именем `TESTNET_SPCTL_CONFIG_BASE64`. Описание структуры файла можно посмотреть в документации [здесь](https://docs.superprotocol.com/testnet/cli/configuration/), там же можно скачать пример файла. В итоге, у Вас должно получиться примерно следующее:

<pre class="language-json"><code class="lang-json">{
    "backend": {
      "url": "https://bff.dev.superprotocol.com/graphql",
      "accessToken": "<a data-footnote-ref href="#user-content-fn-1">Ваш личный токен доступа из электронного письма с приглашением Testnet</a>"
    },
    "blockchain": {
      "rpcUrl": "https://mumbai.polygon.superprotocol.com/over9000",
      "smartContractAddress": "0x988442478D67a6fE93811Bc1bdA9a3EcAc516008",
      "accountPrivateKey": "<a data-footnote-ref href="#user-content-fn-2">Ваш личный закрытый ключ из письма-приглашения Testnet</a>"
    },
    "storage": {
      "type": "STORJ",
      "bucket": "inputs-dev",
      "writeAccessToken": "<a data-footnote-ref href="#user-content-fn-3">Токен для предоставление доступа к STORJ на запись</a>",
      "readAccessToken": "<a data-footnote-ref href="#user-content-fn-4">Токен для предоставление доступа к STORJ на чтение</a>"
    },
    "workflow": {
      "resultEncryption": {
        "algo": "ECIES",
        "key": "<a data-footnote-ref href="#user-content-fn-5">Приватный ключ для шифрования результатов заказа. Используйте команду генерирования ключа рабочих процессов, чтобы сгенерировать этот ключ</a>",
        "encoding": "base64"
      }
    }
  }
</code></pre>

Закодировать `config.json` в формат base64 можно командой:

```bash
echo "$(cat config.json)" | base64
```

Информацию о значениях `BASE_IMAGE_OFFER`, `TUNNEL_SERVER_OFFER` и `STORAGE_OFFER` можно посмотреть [здесь](https://docs.superprotocol.com/testnet/cli/commands/workflows/create).

3. Prepare tunnel server data. На этом этапе происходит подготовка данных для запуска Туннель Сервера. Первый параметр, который нужно подготовить и сохранить в GitHub Secrets, это `MINECRAFT_SERVER_TOKEN`. Это случайное значение, которое будет использоваться и сервером для идентификации клиента. Сформировать его можно следующим образом:

```
node
> require('crypto').randomUUID()
'5ea1ad2c-b627-4ea1-bcc2-40922d2344a4'
> .exit
```

4. Run tunnel server. На этом этапе происходит проверка, запущен ли предыдущий экземпляр Туннель Сервера. Если да, то ордер предыдущего экземпляра отменяется. Далее, происходит создание нового ордера и запуск Туннель Сервера. Далее, формируется файл с указанием текущего OrderId.

[^1]: 

[^2]: 

[^3]: 

[^4]: 

[^5]: 
