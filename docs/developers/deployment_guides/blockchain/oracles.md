---
id: "oracles"
title: "Example: Oracles"
slug: "/deployment_guides/nodejs_blockchain/oracles"
sidebar_position: 10
---

## Confidential Oracles

This example will guide you step by step through the process of deploying your own Oracle service on the Super Protocol. The Oracle's function will be to store reliable historical data on the BTC/USD price. We assume that you are familiar with the purpose of [oracles](https://en.wikipedia.org/wiki/Blockchain_oracle) in web3. To successfully complete this guide, you will need experience with Node.js and EVM blockchains, as well as proficiency in Solidity programming, command line usage, and our spctl command-line interface.

This guide uses free [CoinAPI](https://coinapi.io/) service to access the price data. If you stick with this API, you'll need to register and obtain an api key.

<Highlight color="red">краткое общее описание приложения и возможно ссылка на уже задеплоиное приложение для референса. Возможно ли (и нужно ли) сделать специальный оффер для деплоя оракулов по клику - или там слишком много кастомных настроек?</Highlight>

## **Goal**

The goal of this example is to show process of deploying and operating an oracle with the following criteria:

* The Oracle service should publish the BTC/USD exchange rate every 10 minutes by accessing the open [CoinAPI](https://rest.coinapi.io/v1/exchangerate/BTC/USD).

* The Oracle smart contract must receive and store data from the Oracle script and verify that this script was executed and performed within a Trusted Execution Environment (TEE).

* Our DApp (smart contract) should be able to read this data and ensure that it is: **a)** Up-to-date (by verifying the timestamp) and **b)** Available to be read on-chain.

## **Instruments Used**

[**polygonscan**](https://mumbai.polygonscan.com/) - обозреватель блоков, через который будем наглядно демонстрировать работу смарт-контрактов в сети Polygon (тестовая сеть Mumbai).

[**spctl**](https://github.com/Super-Protocol/ctl) -  консольный интерфейс Супер Протокола для создания заказа оракула.

[**storj**](http://storj.io) - децентрализованное хранилище данных. Через него будет передаваться зашифрованный конфигурация для скрипта-оракула (кошелек “паблишера” и т.д.)

[**sp-oracle-sample**](https://github.com/Super-Protocol/sp-oracle-sample) - содержит в себе 3 компонента: “смарт-контракт оракла”, “скрипт оракла” и “пример приложения”(которое использует данные из оракула).

[**sp-x509-poc**](https://github.com/Super-Protocol/sp-x509-poc) - смарт-контракт, который хранить в себе корневой сертификат API и содержит реализацию проверок квоты и самих сертификатов. (полностью on-chain)

<Highlight color="red">битые ссылки</Highlight>

---

:::note
SMART-CONTRACTS IN THESE EXAMPLES USE UN-AUDITED CODE. DO NOT USE THIS CODE IN PRODUCTION.
:::

## **Step 1. Deploy the "x509 verifier" smart contract**

This smart contract is responsible for cryptographic verification of the Oracle service, ensuring that it is genuinely running in a secure Trusted Execution Environment (TEE) with validation of TEE quote, MRENCLAVE and MRSIGNER.

It is worth noting that this smart contract, the `x509 verifier` acts as a validator of data and contains functionality not tied to the implementation of the Oracle itself. In other words, it allows for the creation of multiple instances of Confidential Oracles, all pointing to the same 'x509 verifier.'

### Preparing

Clone the [sp-x509-poc](https://github.com/Super-Protocol/sp-x509-poc) repository to you computer and follow `Setup` and `Instalation` steps from Readme to set up the project.

We will use Intel's SGX Root CA Certificate [intel-root-cert.pem](https://github.com/Super-Protocol/sp-x509-poc/blob/main/intel-root-cert.pem) at the root of the repository for deployment. Essentially, the integrity of the entire certificate chain depends on this root certificate. When an error arises during the process of verifying traceability and trustworthiness, it means that the data is currently untrusted, and the opposite is true when no errors are found.

<Highlight color="red">нужно больше контекста. Почему здесь нужен х501? если это не очевидно для разработчиков</Highlight>

:::caution
Для нормальной работы, необходимо установить переменную окружения MUMBAI_URL, указав путь к Mumbai Polygon ноде, например, это может быть https://mumbai.polygon.superprotocol.com/hesoyam
:::

### Deploy the smart-contract

This command will deploy the verifier contract to the polygon testnet network.
<Highlight color="red">это контракт который мы скачали? это путь на него?</Highlight>

```shell
npx hardhat deploy --cert ./intel-root-cert.pem --network mumbai
```

<Highlight color="red">как адрес этого контракта связан с предыдущей строчкой?</Highlight>

Upon execution, a contract address will be printed to console. It will be used in later steps, so make sure you save it.


<Highlight color="red">причем тут Полискан? в чем удобство демонстрации?</Highlight>

To be able to interact with the contract via GUI (e.g. Polygonscan) you will need to verify the contract on-chain by uploading the contract abi.

```shell
npx hardhat verify-x509 --cert ./intel-root-cert.pem --network mumbai --address <verifier-contract-address>
```

На этом настройка контракта `x509 verifier` завершена, его можно посмотреть через Polygonscan. Пример уже задеплоенного и верифицированного контракта - [0xB7fc844b3c8Aa1016BC5D93289dF748B9CEc6f94](https://mumbai.polygonscan.com/address/0xb7fc844b3c8aa1016bc5d93289df748b9cec6f94#readContract)


## **Step 2. Prepare Oracle service for deployment on Super Protocol**


Далее, мы переходим к подготовке и деплою компонентов самого Оракла. Этот этап состоит из 2-х компонентов:

- офчейн сервиса, который будет выполняться в защищенной среде ТЕЕ и по расписанию вызывать функции смартконтракта оракла

- смартконтракта оракла который будет хранить в себе данные о цене BTC/USD. Так же, с помощью контракта `sp-x509-poc`, который мы задеплоили на предыдущем шаге, он будет верифицировать, что вызов идет от доверенного офчейн сервиса в рамках сессии.

В этом разделе речь пойдет про первый компонент, и за ним покроем второй.

### Prerequisites

Clone the repository [sp-oracle-sample](https://github.com/Super-Protocol/sp-oracle-sample) and setup the service sub-project:

```shell
cd ./script
npm i
npm run build
```

After that, a folder `run` will be created with artifacts for the future solution.

### Скачать базовый образ Node.js

All of the solutions that will be processed on Super Protocol, should be built upon supported platform, which are called Base Images. In our case, we will be utilizing [Node.js](https://nodejs.org/). You can find all the supported images on the Marketplace under `Solutions` section. To prepare our script for deployment, let's download Node.js base image from [Offer #6](https://marketplace.superprotocol.com/?offerId=6)

```shell
./spctl offers download-content 6
```

### Формируем манифест и шифруем наш оракл-сервис

Now, we will build a Docker image of the service. When the Docker image should run within an Intel SGX enclave, the image has to be built and signed with [Gramine](https://gramine.readthedocs.io/en/latest/gsc-installation.html) (a.k.a graminized). Let's create signing key:

```shell
./spctl solutions generate-key signing-key
```

Then, execute the following command in the root of your project to prepare and pack the solution:

```shell
./spctl solutions prepare --pack-solution oracle-solution.tar.gz --write-default-manifest --base-image-path node16-base-solution-image-v0.3.1.tar.gz /path/to/run signing-key
```

where `/path/to/run` - is an **absolute** path to a dist folder (e.g. `/<root>/sp-oracle-sample/script/run`)

After running the command, `oracle-solution.tar.gz` and `metadata.json` files will be generated. And in terminal, you will see logs, make sure to save MRENCLAVE and MRSIGNER, they should look like the following:

```
MRENCLAVE: d6906986298db89f91941921579e058429bd9ec63c0f97246274b25a4bbfbf0c
MRSIGNER: 36f3bb39d10617852d1eef2f5066d8f9add2c65fb1a026d86398fec405fe725c
```

Finally, we will encrypt and upload the prepared solution to a decentralized cloud storage:

```shell
./spctl files upload oracle-solution.tar.gz --output oracle-solution.json --filename oracle-solution.tar.gz --metadata ./metadata.json
```

`oracle-solution.json` file will be generated. It contains StorJ credentials and encryption private data for the uploaded file. Do not share it with untrusted parties. We will use it later to create workflow on Super Protocol.


## **Step 3. Prepare and deploy Oracle smart contract**

### Preparing

For this step you will need an Ethereum account with MATIC tokens on it. This account will be used to send transactions from Oracle service to the smart contract. We highly recommend to use a new account, which will be used by the oracle only, to avoid errors with nonce calculation.

Staying in the same repository, switch directory to `./smart-contract/` and follow `Set up` and `Installation` steps from Readme.

Now we are ready to deploy an Oracle smart contract:

```shell
npx hardhat deploy-oracle --publishers <publisher-address> --enclave <mrenclave> --signer <mrsigner> --verifier <x509-verifier-address> --network mumbai
```

Deployed contract address will be printed to console. Use it to verify contract onchain, as we did for x509-verifier:

```shell
npx hardhat verify-oracle --address <oracle-address> --publishers <publisher-address> --enclave <mrenclave> --signer <mrsigner> --verifier <x509-verifier-address> --network mumbai
```

## **Step 4. Deploy oracle service**

By now, we have:
- deployed contract x509
- deployed contract Oracle
- prepared Oracle service solution

In this section we'll deploy an oracle service, that will be running on Super Protocol inside SGX enclave. To recap, its function is to update BTC/USD price by interval in Oracle contract, which we've deployed on the previous step.

In the same repository `sp-oracle-sample`, go to `./script/inputs/` folder. We'll need to set up a config for solution in this directory.

First, you'll need to retrieve the root certificate of the API service, that your oracle will be requesting to. For our example, we will be parsing `rest.coinapi.io` certificate chain.

```shell
export API_URL=rest.coinapi.io:443

openssl s_client -connect $API_URL -showcerts 2>&1 < /dev/null | awk 'BEGIN {cert=""} /-----BEGIN CERTIFICATE-----/ {p=1} p {cert = cert $0 ORS} /-----END CERTIFICATE-----/ {if (p) {print cert > ("cert" ++n ".crt")} p=0; cert=""}'
```

This command will request the server's certificate chain to be displayed and will save 3 files with names `certN.crt`. The certificates are presented in order from the end-entity certificate (server certificate) to the root certificate. Hence, you will need `cert3.crt`, put it into `inputs` directory.

Rename `input.example.json` to `input.json`, and fill the data:

<Highlight color="red">где мы это делаем? не хватает пары слов вводных</Highlight>

* interval - частота запросов к API в секундах. (равно частоте публикации данных)
* dataKey - ключ по которому в смарт-контракте будут храниться исторические данные запросов, например “BTC/USD”.
* smartContractAddress - адрес контракта оракула
* publisher - адрес и приватный ключ кошелька, который из анклава будет постить данные в блокчейн
* apiConfig - содержит в себе:
    - endpoint - API url, уже подставлен нужный coinapi
    - rootCertificateFiles - имя Root сертификата API `cert3.crt` в нашем случае.
    - auth - содержит в себе ключ для аутентификации, как требует [coinapi](https://docs.coinapi.io/authentication#x-coinapi-key-header). Если вы используете другой API, который не требует аутентификации, оставьте значения пустыии
* debugMode - false

You will end up having two files in `inputs` folder:
- `input.json` file (file must have that name)
- `cert3.crt` (file must be named the same as the filename in `rootCertificateFiles` and have extension `.crt`)

Create an archive with those files:

```shell
tar -czvf oracle-input.tar.gz input.json cert3.crt
```

And upload archive to StorJ. You are already familiar with it.

```shell
./spctl files upload <path-to-oracle-input.tar.gz> --output oracle-input.json --filename oracle-input.tar.gz
```

File `oracle-input.json` will be generated, which we will use as argument to create Oracle order:

```shell
./spctl workflows create --tee 1,1 --tee-slot-count 1 --storage 20,17 --solution 5,2 --solution oracle-solution.json --data oracle-input.json
```

You can check the status of the order using the order ID in the following [command](/developers/cli_commands/orders/get):

```shell
./spctl orders get <order ID>
```

You can also visit our Marketplace by url `https://marketplace.superprotocol.com/order/<your-order-ID>` for more convenient observation. Wait till the both orders turn to status `Processing`, wait for ~10-15 minutes till the script starts and then see oracle works live on the Polygonscan.

You can compare the result with this [example](https://mumbai.polygonscan.com/address/0x2E455bA264bD31F76d095996a1F3Dee555af2E3f#readContract).

<Highlight color="red">а что смотреть в обозревателе блоков? Может быть задеплоить перманентный пример оракула для референса и показать как он работает?</Highlight>


## **Кастомизация**

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
