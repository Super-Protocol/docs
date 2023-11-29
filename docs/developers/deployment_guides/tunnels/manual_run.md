---
id: "manual_run"
title: "3. Run your app at Superprotocol tunnels"
slug: "/deployment_guides/tunnels/manual_run"
sidebar_position: 3
---

## Prepare and run tunnel-server solution

Запуск Вашего приложения на Superprotocol-е состоит из создания 2х заказов: заказа на Туннель-Сервер и заказа на Туннель-Клиент. В заказе на туннель-сервер будет включен авторизационный токен, который так же будет находится в конфиге туннель-клиента, и по которому будет происходить аутентификация туннель-сервером Вашего туннель-клиента.

Создем и сохраняем токен в файл `auth-token` (название файла важно, не меняйте его)
```bash
uuidgen > auth-token
```

Архивируем токен для последующей загрузки на StorJ:
```bash
tar -zcvf auth-token.tar.gz auth-token
```

Шифруем и загружаем архив на StorJ при помощи SPCTL:
```bash
./spctl files upload auth-token.tar.gz --output auth-token.json --filename auth-token.tar.gz
```

На выходе у вас должен создасться файл `auth-token.json`.

Для создания заказа убедитесь в достаточном количетсве ТЕЕ токенов на Вашем кошельке. При необходимости, перейдите на сайт нашего [Маркетплейса](https://marketplace.superprotocol.com) и нажмите на кнопку `Get TEE`.

Создаем заказ на туннель-сервер с только что загруженным токеном:
```bash
./spctl workflows create --tee 1 --solution 6,2 --solution 10,6 --data auth-token.json --storage 20,16 --orders-limit 10 --min-rent-minutes 60
```

Обратите внимание на последнюю строчку output-а, оставленного командой. Она будет иметь следующий вид
```
Workflow was created, TEE order id: ["XXXX"]
```
где XXXX - это номер созданного заказа. Через какое-то время (от 10 до 15 минут) нужно будет загрузить результат работы ордера при помощи команды

```bash
./spctl orders download-result XXXX
```

Результатом будет файл `result.txt` с ip адрессом. Он нам пригодится в следующих шагах


## Prepare and run tunnel-client solution

Сначала необходимо сформировать файл config.json где будет информация, необходимая туннель-клиенту для запуска. Используйте такой формат:

```json title="config.json"
{
  "tunnels": [
    {
      "sgxMrEnclave": "82e55c6ec7268b07e030226cc42417b89cb17ecc8b6b73bafb84fc44b0ed059c",
      "sgxMrSigner": "22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513"
    }
  ],
  "authToken": "10CEDE9D-79B5-4BA6-B308-B7FF51A1D298",
  "site": {
    "cert": "./fullchain.crt",
    "key": "./private.pem"
  }
}

```
* `sgxMrEnclave` и `sgxMrSigner` - оставьте как в этом примере без изменения
* `authToken` - токен с файла `auth-token`, который вы создали в предыдущем пункте
* `site.cert` и `site.key` - это releative путь от файла конфигурации с приватным ключом и SSL сертификатом, которые вы сгенерировали в [п 1. данного гайда](/developers/deployment_guides/nodejs_tunnels/preparing)


Туннель-клиент требует определенную структуру каталогов и файлов для успешного запуска. Пожалуйста, подготовьnе папку `my-tunnel-client-app`, где будут размещены файлы и каталоги в такой структуре:

```
my-tunnel-client-app
├──content               # здесь должны быть файлы вашего приложения
│    ├──.env             # переменные среды, если они необходимы
│    ├──node_modules
│    ├──package.json
│    └──server.js        # entrypoint of youe application
│
├──config.json           # файл конфигурации, объясненный выше
├──fullchain.crt         # файл с SSL сертификатами (your SSL, intermediate, root)
└──private.pem           # файл с приватным ключом от сертификата
```

Обратите внимание, что приложение должно быть production-сбилджено (если это необходимо), а так же все зависимости для linux/amd64 должны быть установлены. Так же приложение не должно ожидать никаких внешних env-переменных, все должно быть зашито в конфигурацию, либо `.env`-файл и считано при помощи `dotenv` npm пакета. За сохранность Ваших паролей и секретных ключей не переживайте - (to A.Manilov  - тут нужно добавить почему им не переживать.. что-то типа "доступа к этим файлам не будет даже у нас" или "все зашифровано и ключи будут только у Вас").

Если ваша CPU архитектура или OS отличается от linux/amd64, то воспользуейтесь docker-командой для установки зависимости и/или билда вашего приложения:

```bash
docker run --platform linux/amd64 --rm -it -w /home/node -v ./:/home/node node:16-buster npm install && npm run build
```
При необходимости поменяйте команды установки зависимостей и билда на те, которые требует ваше приложение.

Архиваруем папку при помощи команды:
```bash
tar -zcvf my-tunnel-client-app.tar.gz my-tunnel-client-app
```

Шифруем и загружаем архив на StorJ при помощи SPCTL:
```bash
./spctl files upload my-tunnel-client-app.tar.gz --output my-tunnel-client-app.json --filename my-tunnel-client-app.tar.gz
```

Создаем заказ на туннель-клиент с данными нашего приложения:
```bash
./spctl workflows create --tee 1 --solution 6,2 --solution xx,yy (пока нет оффера) --data my-tunnel-client-app.json --storage 20,16 --orders-limit 10 --min-rent-minutes 60
```

Последняя строчка output команды будет выглядеть так
```
Workflow was created, TEE order id: ["XXXX"]
```
где XXXX - номер созданного заказа туннель-клиента


## Setup DNS

Теперь необходимо, чтобы заказ с туннель-клиентом нашел туннель-сервер со своим токеном. Это он сможет сделать при помощи DNS. Возвращаемся к файлу `result.txt` и IP внутри него. Это адрес вашего будущего сервера. Необходимо добавить в DNS вашего домена 2 записи:

* `A` - record на ip `xxx.yyy.www.zzz` TTL=3600
* `TXT` - запись с текстом `r=superprotocol;ip=xxx.yyy.www.zzz` TTL=3600

Замените `xxx.yyy.www.zzz` на адрес с файла `result.txt`.

Через несколько минут открывайте браузер и заходите на ваш домен!


## Notes

При создании заказа в примере указан параметр `--min-rent-minutes 60`. Это значит, что туннель-сервер и туннель-клиент будут работать 60 минут. При необходимости замените цифру минут необходимым Вам количеством, но учите, что ВАм может понадобиться больше ТЕЕ токенов.


## Creating more tunnels

To maintain website reliability you can create more tunnel servers and clients using other Compute Providers' offers. This way you can be sure, that if one host goes down, your site will be available through another tunnel. In other words, your website runs in a decentralized way! For example, to create the same tunnel server on another host, change `--tee` parameter for another ID (you can pick any ID from [Compute](https://marketplace.superprotocol.com/compute) section on Marketplace) in `workflows create` command:

```
./spctl workflows create --tee 2 ...other params...
```

After you saw your website online for the first time, repeat some of the previous steps to deploy another couple of tunnels:

1. Create the tunnel server order - **Substitute `--tee 1` with another offer**

```bash
./spctl workflows create --tee 2 --solution 6,2 --solution 10,6 --data auth-token.json --storage 20,16 --orders-limit 10 --min-rent-minutes 60
```

2. Create the tunnel client order - **Substitute `--tee 1` with another offer**
```bash
./spctl workflows create --tee 2 --solution 6,2 --solution xx,yy (пока нет оффера) --data my-tunnel-client-app.json --storage 20,16 --orders-limit 10 --min-rent-minutes 60
```

2. [Set up DNS](#setup-dns) with new result file retrieved from Tunnel Server order.