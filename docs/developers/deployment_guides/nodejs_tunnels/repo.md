---
id: "repo"
title: "4. Github repository"
slug: "/deployment_guides/nodejs_tunnels/repo"
sidebar_position: 4
---

## Description

Для Вашего удобвства мы подготволили репозиторий со скриптами Github Action, которые Вы можете использовать для автоматического деплоя Вашего приложения на сервера Superprotocol-а.

Эти Github Action-ы автоматизируют команды с [предыдущего пункта гайда](/developers/deployment_guides/nodejs_tunnels/manual_run).

## Prepare Git Repository

* Go to [github](https://github.com)
* Log in to your account
* Click the [new repository](https://github.com/new) button in the top-right. Type `superprotocol-test-app` as repository name. You’ll have an option there to initialize the repository with a README file. Add `Node` as `.gitignore` tepmlate
* Click the “Create repository” button.

Дальше давайте загрузим папку `superprotocol-test-app` из [п 1. данного гайда](/developers/deployment_guides/nodejs_tunnels/preparing) в новосозданный рапозиторий
```bash
cd superprotocol-test-app
git init
echo "node_modules" > .gitignore
git remote add origin git@github.com:YOUR_USERNAME/superprotocol-test-app
git add .
git commit -m "init"
git push -u origin main
cd ..
```

## Preparing secrets and variables

Вам необходимо добавить следующие секреты:

* `GH_TOKEN` - Github token у которого есть доступ ко всему репозиторию для чтения/записи артефактов. Используйте инструкцию [здесь](https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
* `SOLUTION_SERVER_TOKEN` - токен из файла `auth-token` туннель-сервера, который вы сгенерировали в [п. 2 данного гайда](/developers/deployment_guides/nodejs_tunnels/manual_run). Получить его можно командой 
   ```bash
   cat tunnel-server-data/auth-token
   ```
* `SOLUTION_SSL_CERTIFICATE_BASE64` - сюда необходимо сохранить base64 сертификат из [п 1. данного гайда](/developers/deployment_guides/nodejs_tunnels/preparing); для генерации его из файла `fullchain.crt`, находящегося в папке `content` с [п. 2 данного гайда](/developers/deployment_guides/nodejs_tunnels/manual_run) воспользуйтесь командой

   ```
   awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' tunnel-client-data/fullchain.crt | base64
   ```

* `SOLUTION_SSL_KEY_BASE64` - приватный ключ из [п 1. данного гайда](/developers/deployment_guides/nodejs_tunnels/preparing) в формате bas64; для генерации его из файла `private.pem`, находящегося в папке `content` с [п. 2 данного гайда](/developers/deployment_guides/nodejs_tunnels/manual_run) воспользуйтесь командой

   ```
   awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' tunnel-client-data/private.pem | base64
   ```
   При необходимости замените название файла на ваше

* `SPCTL_CONFIG_BASE64` - сюда сохраните ваш конфиг для SPCTL в формате base64, созданный по [данному руководству](/developers/cli_guides/configuring); для этого воспользуйтесь командой
    ```
    echo "$(cat config.json)" | base64
    ```


Так же необходимо указать 2 переменные в настройках репозитория:

* `TUNNEL_SERVER_MRENCLAVE` - 82e55c6ec7268b07e030226cc42417b89cb17ecc8b6b73bafb84fc44b0ed059c
* `TUNNEL_SERVER_MRSIGNER` - 22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513

Укажите hex-коды такими без изменения.

As result, your GitHub Secrets and GitHub Variables should look something like this:

   <Imager src={require('./images/secrets.png').default} />
   <Imager src={require('./images/values.png').default} />


## Run tunnel-server Github Action

Создадим папку, в которой будут храниться Githuib Actionы
```bash
cd superprotocol-test-app
mkdir -p .github/workflows
```
Скопируйте файл [superprotocol-test-app-tunnel-server.yaml](https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/examples/Github%20Actions/superprotocol-test-app-tunnel-server.yml) в эту новую папку, переименуя его в `tunnel-server-deploy.yml`

```bash
curl -L https://raw.githubusercontent.com/Super-Protocol/solutions/main/examples/superprotocol-test-app-tunnel-server.yml -o .github/workflows/tunnel-server-deploy.yml
```

Закомитим наши изменения и запушим их в гит

```bash
git add .
git commit -m "Added tunnel server deploy Action"
git push
```

Теперь из вашего репозитория перейдите на вкладку `Actions` и запустите `Run Test App tunnel-server on SuperProtocol`. Заказ должен успешно создаться и должен быть доступен для скачивания `last-orders.txt` артефакт с номером вашего заказа.


## Run tunnel-client Github Action

Скопируйте файл [superprotocol-test-app-tunnel-client.yaml](https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/examples/Github%20Actions/superprotocol-test-app-tunnel-client.yml) в эту новую папку, переименуя его в `tunnel-client-deploy.yml`

```bash
curl -L https://raw.githubusercontent.com/Super-Protocol/solutions/main/examples/superprotocol-test-app-tunnel-client.yml -o .github/workflows/tunnel-client-deploy.yml
```

Данный Github Action предполагает, что для вашего приложения должны быть установлены зависимости, а так же оно должно быть собрано. 

Создайте файл `scripts/prepare-solution.sh` 

```bash
touch scripts/prepare-solution.sh
```

В этом файле необходимо будет прописать логику сборки вашего приложения. Это скрипт будет вызывать непосредственно сам Actoin, передавая 2 паратмера:
* _$1_ - папка, куда нужно производить сборку (к моменту вызова скрипта папка уже будет создана, `mkdir` делать не нужно)
* _$2_ - название солюшена

Сохраните следующий код в файле `scripts/prepare-solution.sh` при помощи любого текстового редактора

```bash title="prepare-solution.sh"
#!/bin/bash
set -e

solution_path=$1
solution_name=$2

# cd to one directory up of current script
REAL_PATH=$(realpath "$0")
LOCAL_PATH=$(dirname "$REAL_PATH")
cd "$LOCAL_PATH"
cd ..

echo "Install dependencies for client & sever module"
npm install

echo "Copy files"
cp -R server.js node_modules package.json "$solution_path"

echo "$solution_name build succesfull"
```

Закомитим наши изменения и запушим их в гит

```bash
git add .
git commit -m "Added tunnel client deploy Action"
git push
```

Если все сдкелано правильно - запускайте Action и точно так же в `last-orders` артефакте должен появиться номер созданного заказа.


## Setup DNS

Записи в DNS нужно будет внести вручную. Скачайте `last-orders` артефакт с Action-а туннель сервера для того чтобы узнать номер созданного ордера. Он необходим для ручного скачивания результата `result.txt`, как указано в [п.2 #Prepare and run tunnel-server solution](/developers/deployment_guides/nodejs_tunnels/manual_run#prepare-and-run-tunnel-server-solution). 
Получив ip, нужно будет создать в DNS 2 записи, как указано [п.2 #Setup DNS](/developers/deployment_guides/nodejs_tunnels/manual_run#setup-dns)

