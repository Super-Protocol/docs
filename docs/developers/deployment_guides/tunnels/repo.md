---
id: "repo"
title: "4. Github repository"
slug: "/deployment_guides/tunnels/repo"
sidebar_position: 4
---

## Preparing secrets and variables

Для Вашего удобвства мы подготволили репозиторий со скриптами Github Action, которые Вы можете использовать для автоматического деплоя Вашего приложения на сервера Superprotocol-а.

Эти Github Action-ы автоматизируют команды с [предыдущего пункта гайда](/developers/deployment_guides/nodejs_tunnels/manual_run).

В новом или уже существующем репозитории с вашим приложением необходимо стоздать следующие secrets:

* `GH_TOKEN` - Github token у которого есть доступ ко всему репозиторию для чтения/записи артефактов
* `SOLUTION_SERVER_TOKEN` - токен из файла `auth-token` туннель-сервера, который вы сгенерировали в [п. 2 данного гайда](/developers/deployment_guides/nodejs_tunnels/manual_run)
* `SOLUTION_SSL_CERTIFICATE_BASE64` - сюда необходимо сохранить base64 сертификат из [п 1. данного гайда](/developers/deployment_guides/nodejs_tunnels/preparing); для генерации его из файла `fullchain.crt` воспользуйтесь командой

   ```
   awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' fullchain.crt | base64
   ```
   При необходимости замените название файла на ваше

* `SOLUTION_SSL_KEY_BASE64` - приватный ключ из [п 1. данного гайда](/developers/deployment_guides/nodejs_tunnels/preparing) в формате bas64; для генерации его из файла `private.pem` воспользуйтесь командой

   ```
   awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' private.pem" | base64
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

Скопируйте файл [minecraft-tunnel-server-deploy.yml](https://github.com/Super-Protocol/solutions/blob/main/.github/workflows/minecraft-tunnel-server-deploy.yml) в свой репозиторий, по пути `.github/workflows/minecraft-tunnel-client-deploy.yml`. Переимнуйте его по своему усмотрению. И замените везде слово `minecraft` на название вашего приложения.
 
В этом файле больше изменений вносить никаких не нужно. Если вы внесли правильные данные в secrets, то Action должен успешно выполниться и вы должны скачать `last-orders` артефакт, где будет указан номер созданного заказа.


## Run tunnel-client Github Action

Скопируйте файл [minecraft-tunnel-client-deploy.yml](https://github.com/Super-Protocol/solutions/blob/main/.github/workflows/minecraft-tunnel-client-deploy.yml) в свой репозиторий, по пути `.github/workflows/minecraft-tunnel-client-deploy.yml`. Переимнуйте его по своему усмотрению. И замените везде слово `minecraft` на название вашего приложения.

Данный Github Action предполагает, что для вашего приложения должны быть установлены зависимости, а так же оно должно быть собрано. 

Создайте файл `scripts/prepare-solution.sh` где необходимо будет прописать логику сборки вашего приложения. Это скрипт будет вызывать непосредственно сам Actoin, передавая 2 паратмера:
* _$1_ - папка, куда нужно производить сборку (к моменту вызова скрипта папка уже будет создана, `mkdir` делать не нужно)
* _$2_ - название солюшена

Изучите [наш пример](https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/minecraft/scripts/prepare-solution.sh) данного скрипта для `minecraft`


Если все сдкелано правильно - запускайте Action и точно так же в `last-orders` артефакте должен появиться номер созданного заказа.


## Setup DNS

Записи в DNS нужно будет внести вручную. Скачайте `last-orders` артефакт с Action-а туннель сервера для того чтобы узнать номер созданного ордера. Он необходим для ручного скачивания результата `result.txt`, как указано в [п.2 #Prepare and run tunnel-server solution](/developers/deployment_guides/nodejs_tunnels/manual_run#prepare-and-run-tunnel-server-solution). 
Получив ip, нужно будет создать в DNS 2 записи, как указано [п.2 #Setup DNS](http://localhost:3000/developers/deployment_guides/nodejs_tunnels/manual_run#setup-dns)

