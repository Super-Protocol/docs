---
id: "oracles"
title: "Example: Oracles"
slug: "/guides/oracles"
sidebar_position: 10
---

Пример с оракулами от Влада

https://automatic-silver-2cc.notion.site/SP-Oracle-demo-cde23dc6b00445fcbfb61587b19a2b8f


# SP Oracle demo.

### 🎯 **Задача “демо”:**

Показать процесс развертывания и работы оракула на специально подготовленном примере.

а. **Сервис оракула** должен публиковать курс BCT/USD каждые 10 минут, по средством обращения к открытому API: https://rest.coinapi.io/v1/exchangerate/BTC/USD

b. **Смарт-контракт оракула**, должен получать и хранить данные от скрипта оракула и проверять, что именно этот скрипт был выполнен и выполнен в TEE.

c. Наш **DApp** (смарт-контракт) должен иметь возможность прочитать эти данные и убедиться что они:

- актуальны (сверка timestamp)
- доступны для чтения on-chain

### 🛠 **Используемые инструменты:**

[**polygonscan**](https://mumbai.polygonscan.com/) - обозреватель блоков, через который будем наглядно демонстрировать работу смарт-контрактов в сети Polygon (тестовая сеть Mumbai).

[**spctl**](https://github.com/Super-Protocol/spctl) -  консольный интерфейс Супер Протокола для создания заказа оракула.

[**storj**](http://storj.io) - децентрализованное хранилище данных. Через него будет передаваться зашифрованный конфигурация для скрипта-оракула (кошелек “паблишера” и т.д.)

[**sp-oracle-sample**](https://github.com/Super-Protocol/sp-oracle-sample) - содержит в себе 3 компонента: “смарт-контракт оракла”, “скрипт оракла” и “пример приложения”(которое использует данные из оракула).

[**sp-x509-poc**](https://github.com/Super-Protocol/sp-x509-poc) - смарт-контракт, который хранить в себе корневой сертификат Intel и содержит реализацию проверок квоты и самих сертификатов. (полностью on-chain)

<Highlight color="red">битые ссылки</Highlight>


## Кастомизация

Возможности быстрой кастомизации оракул-скрипта под собственные задачи:

### Cмена блокчейна
* при переходе на другой EVM совместимый блокчейн достаточно просто заменить адрес ноды в конфигурационном `input` файле
* при переходе на другой тип блокчейна, необходимо заменить сервис `blockchan.provider.ts` и заменить смарт-контракты на совместимые с данным блокчейном.

### Смена API
* необходимо заменить сервис `exchangeApi.service.ts` на новый 
* добавить `dto` файлы с объектами из API
* добавить соответствующие `dto` типы в конечный **DApp**.

### Расширение до офф-чейн вычислений
* необходимо создать новый сервис с бизнес-логикой и подключить его в `index.js`
* расширить `blockchan.provider.ts` для публикации разных типов вычислений
* обязательно подписывать все публикуемые данные сессионным ключом.

---

## Развертывание контракта с x509

Мы исходим из того, что “владельцем” смарт-контракта, отвечающего за проверку квоты и сертификатов может отличаться от “владельца” оракула, т.е. быть внешним агентом. Давайте развернем такой сервис самостоятельно:

### Разворачиваем контракт “верификатор X509”

`npx hardhat verify-x509 --cert test/certs/certC.pem --network mumbai`

Address: [0xB7fc844b3c8Aa1016BC5D93289dF748B9CEc6f94](https://mumbai.polygonscan.com/address/0xb7fc844b3c8aa1016bc5d93289df748b9cec6f94#readContract)

### Публикуем его код на Polygonscan (для удобства демонстрации)

`npx hardhat verify-x509 --cert test/certs/certC.pem --network mumbai --address <>`

---

## Сборка сервис оракула

собрать скрипт в билд файл

```
cd /script
npm i
npm run build
```

## Подготовка скрипта для работы в TEE

###  Убедиться что на Storj нет одноименных файлов с нашим скриптом.

<Highlight color="red">Это как? нужно завести аккаунт на StorJ?</Highlight>

https://eu1.storj.io/buckets/upload/

### Скачать специальный Node.js образ

`dist/spctl offers download-content <>`

где `<>` это id оффера с Node.js образом // `5` на dev

<Highlight color="red">Расписать подробнее</Highlight>

### Создать ключ для шифрования

<Highlight color="red">Расписать подробнее</Highlight>

`dist/spctl solutions generate-key signing-key`

### Формируем манифест и шифруем наш оракл-сервис

<Highlight color="red">может тут нужна какая-то отсылка к статья про подготовку и публикацию через CLI?</Highlight>

`dist/spctl solutions prepare --pack-solution solution.tar.gz --write-default-manifest --base-image-path node16-base-solution-image-v0.3.1.tar.gz <PATH> signing-key`

где `<PATH>` - Путь до билда со скриптом
// `/Users/vladislavkapicyn/Desktop/sp-oracle-sample/script/run`

записываем полученные идентификаторы:
mrEnclave: `d6906986298db89f91941921579e058429bd9ec63c0f97246274b25a4bbfbf0c`
mrSigner: `36f3bb39d10617852d1eef2f5066d8f9add2c65fb1a026d86398fec405fe725c`

### Залить в IPFS хранилище

`dist/spctl files upload solution.tar.gz --output solution.json --filename solution.tar.gz --metadata ./metadata.json`

## Публикуем смарт-контракт оракула
  
 указав mrEnclave, mrSigner и список аккаунтов которые будут публиковать данные

###  Cоздать кошелек паблишера, пополнить его матиками

pk: `cff7d1f99edf63c53494ad233b22891ad7e64011a25d9886ab0626a3d51a0d5e`
address: `0xdc8abD677D7DFA20c0861DB7F38bBe523b0AD6fd`

###  Задеплоить контракт оракулов

`npx hardhat deploy-oracle --publishers 0xE0404A3091ac640A9225d1B2D0B4A224d8aE6349 --enclave d6906986298db89f91941921579e058429bd9ec63c0f97246274b25a4bbfbf0c --signer 36f3bb39d10617852d1eef2f5066d8f9add2c65fb1a026d86398fec405fe725c --verifier 0xB7fc844b3c8Aa1016BC5D93289dF748B9CEc6f94 --network mumbai`
address: 0x2E455bA264bD31F76d095996a1F3Dee555af2E3f

###  Верифицировать контракт оракулов на polygonscan

`npx hardhat verify-oracle --publishers 0xE0404A3091ac640A9225d1B2D0B4A224d8aE6349 --enclave <> --signer <> --verifier <> --address <> --network mumbai`

---

## Публикуем демонстрационный DApp

###  Публикуем

`npx hardhat deploy-app --oracle 0x2E455bA264bD31F76d095996a1F3Dee555af2E3f --network mumbai`
address: `0xdEee3438481Be71D2370A02F72652A907506F330`

###  Верифицируем

`npx hardhat verify-app --oracle <> --address <> --network mumbai`

## Формируем входящие данные для сервиса оракула

- [x]  "interval” - частота запросов к API в секундах. (равно частоте публикации данных)
- [x]  "dataKey” - ключ по которому в смарт-контракте будут храниться исторические данные запросов, например “BTC/USD”.
- [x]  “smartContractAddress” - адрес контракта оракула
- [x]  “publisher” - адрес и приватный ключ кошелька, который из анклава будет постить данные в блокчейн
- [x]  “apiConfig” - содержит в себе:
    - “endpoint” - API url
    - “certs” - Root сертификат от ssl сертификата API.

  команда для получения: `openssl s_client -connect **<ENDPOINT>**:443 -showcerts 2>&1 < /dev/null | awk 'BEGIN {cert=""} /-----BEGIN CERTIFICATE-----/ {p=1} p {cert = cert $0 ORS} /-----END CERTIFICATE-----/ {if (p) {print cert > ("cert" ++n ".crt")} p=0; cert=""}'`

    - “auth” - содержит в себе ключ для аутентификации, если API его требует
- [x]  “debugMode” - false
- [x]  Архивируем

`tar -czvf input.tar.gz -C <PATH> .`
где PATH - это пусть
// `/Users/vladislavkapicyn/Desktop/sp-oracle-sample/script/inputs`

##  Загружаем на IPFS

`dist/spctl files upload input.tar.gz --output input.json --filename input.tar.gz`

---

## Создаем заказ

`dist/spctl workflows create --tee 1,1 --tee-slot-count 3 --storage 20,17 --solution 5,2 --solution solution.json --data input.json`

Готово!
Теперь можно наблюдать за работой оракула из обозревателя блоков

