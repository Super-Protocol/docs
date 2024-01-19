---
id: "oracles"
title: "Example: Oracles"
slug: "/deployment_guides/blockchain/oracles"
sidebar_position: 10
---

## Confidential Oracles

This guide will take you step by step through the process of deploying a confidential [oracle](https://en.wikipedia.org/wiki/Blockchain_oracle) service on Super Protocol. This specific Oracle service was created by the Super team as an example for deploying off-chain computing services and its function is to process reliable historical data on the BTC/USD price. 

:::note
SMART-CONTRACTS IN THIS EXAMPLE USE UN-AUDITED CODE. DO NOT USE THIS CODE IN PRODUCTION.
:::

## Goal

The goal of this example is to show process of deploying and operating an oracle with the following criteria:

* The Oracle service should publish the BTC/USD exchange rate every 10 minutes by accessing the open [Alpha Vantage data prices API](https://www.alphavantage.co/documentation/).

* The Oracle smart contract must receive and store data from the Oracle script and verify that this script was executed and performed within a Trusted Execution Environment (TEE).

* Our DApp (smart contract) should be able to read this data and ensure that it is: **a)** Up-to-date (by verifying the timestamp) and **b)** Available to be read on-chain.

## Prerequisites

To successfully complete this advanced guide you will need experience with Node.js, EVM blockchains and Solidity programming. 

You will also  need the following:

- [Polygonscan](https://polygonscan.com/login) - You will need to register and **create API Key** for contract verification on block explorer. Even though in this example we will be using the [Mumbai](https://mumbai.polygonscan.com/) Polygon Testnet, you will need the mainnet API key.

- [Node.js](https://nodejs.org/en/download/package-manager) - This example is based on Node.js v16.

- [Docker](https://www.docker.com/get-started/) - for building solutions

- [Alpha Vantage data prices API](https://www.alphavantage.co/support/#api-key) - **receive the API key**.

- [OpenSSL](https://www.openssl.org/) - you will need OpenSSL installed to generate solution signing key. Linux: by default, Ubuntu: `apt install openssl`, MacOs: `brew install openssl`.

- [SPCTL](/developers/CLI_guides/) - our CLI tool, must be fully configured, including access to decentralized storage: it will be used to store encrypted configurations for the oracle script.

- [SP solutions](https://github.com/Super-Protocol/solutions) - Super Protocol repository with solution examples, including the Oracle service.

- Polygon Testnet wallets - you will need to create new wallets, **receive their addresses and private keys**, you can simply create new ones in MetaMask. 
  - We highly recommend you to use two different wallets: 
    - the first one will be used for deploying "x509 verifier" smart contract, 
    - the second one will be used for deploying Oracle smart contract. 
  - But if you are going to use one single wallet, please make sure that you do not use it for any other operations.

Please create an oracle project folder, place the SPCTL executable and config there, and download the solutions repository into it:

```shell
git clone https://github.com/Super-Protocol/solutions
```

## **Step 1. Deploy the "x509 verifier" smart contract**

This smart contract is responsible for on-chain cryptographic verification of the Oracle service, ensuring that it's running inside a secure SGX Trusted Execution Environment (TEE) with validation of TEE quote, MRENCLAVE and MRSIGNER.

It's worth noting that this x509 verifier smart contract acts as a validator of data and is not tied to this implementation of the Oracle. In other words, it can service multiple instances of Confidential Oracles, all pointing to the same 'x509 verifier.'

### Preparing

Go to the `solutions` directory that you have cloned earlier and make a copy of the example `.env`: 

```shell
cd ./solutions/Blockchain/sp-x509/
cp .env.example .env
```

To set up the project you will need to configure env variables in the `.env` file:

- `MUMBAI_DEPLOYER_PRIVATE_KEY` - the first Polygon Testnet wallet private key with MATICs. **Note:** this is not the Testnet wallet that you received from the Super team, you will need to create your own wallet for the oracle and add MATICs to it.
- `MUMBAI_URL` - you can use `https://mumbai.polygon.superprotocol.com/hesoyam`, which is the Super Protocol Polygon node, or your own.
- `POLYGON_API_KEY` - the API Key you have generated in [Polygonscan](https://polygonscan.com/login).

Then install dependencies and compile the contract:

```shell
docker compose up build
```

### Deploy the smart-contract

We will use Intel's SGX Root CA Certificate [intel-root-cert.pem](https://github.com/Super-Protocol/solutions/blob/main/Blockchain/sp-x509/intel-root-cert.pem) for deployment. The integrity of the entire certificate chain depends on this root certificate. 

In the same directory, install dependencies and compile the contract:

```shell
npm i
npx hardhat compile
```

Then execute this command to deploy the x509 verifier contract to the Polygon Testnet network.

```shell
npx hardhat deploy --cert ./intel-root-cert.pem --network mumbai
```

The result will be a x509 verifier smart contact address. You'll need it in later steps, so make sure to save it.

To be able to interact with the contract via GUI (such as Polygonscan) you will need to verify the contract on-chain by uploading the contract ABI:

```shell
npx hardhat verify-x509 --cert ./intel-root-cert.pem --network mumbai --address <verifier-contract-address>
```

You should get a "Successfully verified" response. Now you can observe your deployed x509 verifier smart contract through Polygonscan.

**Example:** a previously [deployed and verified x509 smart contract](https://mumbai.polygonscan.com/address/0xb57718CC0A2149A376715503d15182f5a773e1F7#readContract).


## **Step 2. Prepare Oracle service for deployment on Super Protocol**

Now we move to the preparing and deploying the components of the oracle itself. This process consists of two components:

- An off-chain service that will run inside the TEE and call on the oracle smart-contract at specified intervals (every 5 minutes).

- The oracle smart contract that will store the BTC/USD price data. It will also verify, by using the x509 smart contract from previous step, that the request comes from a trusted off-chain service.

In this step we will cover the first component.

### Prerequisites

Change current directory to `sp-oracle` and set up the service sub-project:

```shell
cd ../sp-oracle/script/
docker compose up build
```

A `run` folder will be created with artifacts for the future solution. It should consist of non-empty folders: `dist`, `node_modules`.


### Download Node.js base image

All the solutions deployed on Super Protocol have to use a base image solution offer. In this case it will be a Node.js base image.

Go to your project directory and execute this [command](/developers/CLI_commands/offers/download-content):

```shell
./spctl offers download-content 6
```

It will download file `node16-base-solution-image-v0.3.1.tar.gz` to the current directory.

### Writing manifest and encrypting the oracle service

Next, we will build a Docker image of the service. For the Docker image to run inside the TEE, the image has to be built and signed with [Gramine](https://gramine.readthedocs.io/en/latest/gsc-installation.html) (a.k.a graminized). Let's create the signing key:

```shell
./spctl solutions generate-key signing-key
```

Then, execute the following command in the root of your project to prepare and pack the solution:

```shell
./spctl solutions prepare --pack-solution oracle-solution.tar.gz --write-default-manifest --base-image-path node16-base-solution-image-v0.3.1.tar.gz ./solutions/Blockchain/sp-oracle/script/run/ signing-key
```

The result will be `oracle-solution.tar.gz` and `metadata.json` files. 

Additionally, in the terminal logs you will see MRENCLAVE and MRSIGNER values. They look something like this:

```
MRENCLAVE: d6906986298db89f91941921579e058429bd9ec63c0f97246274b25a4bbfbf0c
MRSIGNER: 36f3bb39d10617852d1eef2f5066d8f9add2c65fb1a026d86398fec405fe725c
```

**Save these values!** Important: different MRENCLAVE and MRSIGNER values are generated for each run of the `prepare` command. 

Finally, we will encrypt and upload the prepared solution to a decentralized storage:

```shell
./spctl files upload oracle-solution.tar.gz --output oracle-solution.json --filename oracle-solution.tar.gz --metadata ./metadata.json
```

An `oracle-solution.json` file will be generated. It contains storage access credentials and encryption keys for the uploaded file. Do not share it with untrusted parties. We will use it later to create workflow on Super Protocol.

## **Step 3. Prepare and deploy Oracle smart contract**

### Prepare

For this step you will need the second Polygon account with MATIC Testnet coins on it. This account will be used to send transactions from Oracle service to the smart contract. As it was mentioned above, it is highly recommended to use a new account that will be used by the oracle only, e.g. nonce calculation. Doing that will allow to avoid errors with sending transactions. This should not be the Super Protocol Testnet account.

The next actions are nearly identical to the Prepare section from Step 1.

Go to the directory containing smart-contract and make a copy of the `.env`.

```shell
cd ./solutions/Blockchain/sp-oracle/smart-contract/
cp .env.example .env
```

To set up the project you will need to configure env variables in the `.env` file:

- `MUMBAI_DEPLOYER_PRIVATE_KEY` - the private key to the second Polygon Testnet wallet with MATIC tokens.
- `MUMBAI_URL` - you can use `https://mumbai.polygon.superprotocol.com/hesoyam`, which is the Super Protocol Polygon node, or your own.
- `POLYGON_API_KEY` - the API Key you have generated in [Polygonscan](https://polygonscan.com/login).

Then install dependencies and compile the contract:

```shell
npm i
npx hardhat compile
```

### Deploy oracle

Now we are ready to deploy an Oracle smart contract:

```shell
npx hardhat deploy-oracle --publishers <publisher-address> --enclave <MRENCLAVE> --signer <MRSIGNER> --verifier <x509-verifier-address> --network mumbai
```

Where:

- `<publisher-address>` - the second wallet address that will be used by Oracle service to send new prices to the contract;

- `<MRENCLAVE>` and `<MRSIGNER>` - values that you received at the end of [Step 2](#writing-manifest-and-encrypting-the-oracle-service). <br/>**Note:** if at some point you will need to redo Step 2 and prepare the solution again, you will have different MRENCLAVE and MRSIGNER and will have to change them in the smart contract. Refer to [updating MRENCLAVE and MRSIGNER](#updating-mrenclave-and-mrsigner) to modify these without redeploying the contract;

- `<x509-verifier-address>` - x509 verifier contract address, the result of [Step 1](#deploy-the-smart-contract).

The result will be the oracle smart contact address. Use it to verify the contract on-chain, as we did for x509-verifier:

```shell
npx hardhat verify-oracle --address <oracle-address> --publishers <publisher-address> --enclave <MRENCLAVE> --signer <MRSIGNER> --verifier <x509-verifier-address> --network mumbai
```

You should get a "Successfully verified" response. 

**Example:** a previously [deployed and verified oracle smart contract](https://mumbai.polygonscan.com/address/0x9e090892a8b65F59c8A52c5c811a3a859BE684A8#readContract).

### Deploy dApp

Since Oracle serves as a data repository, and its goal is to provide up-to-date data for the on-chain world, for clarity, we will deploy a [simple contract](https://github.com/Super-Protocol/solutions/tree/main/Blockchain/sp-oracle/smart-contract/contracts/App.sol) as a decentralized application that will use the data from our Oracle.

```
npx hardhat deploy-app --oracle <oracle-address> --network mumbai
```

Verify the dApp contract on-chain:

```
npx hardhat verify-app --address <d-app-address> --oracle <oracle-address> --network mumbai
```

You should get a "Successfully verified" response. 

**Example:** a previously [deployed and verified dApp smart contract](https://mumbai.polygonscan.com/address/0x9fF6c385F06Ecc6Fb09a321AEDeFf50Dc83Cb20C#readContract).

At the end of this guide we will observe this contract through Polygonscan to see how data changes.

## **Step 4. Deploy oracle service**

At this point we should have:
- Deployed the x590 verifier smart contract (Step 1)
- Prepared the oracle service solution (Step 2)
- Deployed the oracle smart contract (Step 3)

In this step we will deploy the oracle service that will be running on Super Protocol inside TEE. To recap, its function is to regularly update the BTC/USD price from the Oracle contract which we have deployed on the previous step.

Open a new terminal window and go to `solutions/Blockchain/sp-oracle/script/inputs/` folder. We will need to set up a config for Oracle service.

First, you will need to retrieve the trusted root certificates to validate the connection to the API service that your oracle will be requesting to. You can extract root certificate of the particular API that you will be using, but because certificates may change unpredictably we recommend listing the full root certificates list from your computer. 

While in the `inputs` directory, execute:

### Linux
```shell
cat /etc/ssl/certs/*.pem >> ./ca_certificates.crt
```

### Mac OS
```shell
security export -t certs -f pemseq -k /System/Library/Keychains/SystemRootCertificates.keychain -o ./ca_certificates.crt
```

This command will create file `ca_certificates.crt` inside `inputs/` directory. It contains the system root certificates.

Second, create `input.json` by copying the `input.example.json`:

```shell
cp input.example.json input.json
```

And configure it:

* `interval` - the frequence of requests to the API (how often the data will be published);
* `dataKey` - key by which historical data of requests will be stored in the smart contract, for instance “BTC/USD”;
* `smartContractAddress` - address of the oracle smart contract;
* `publisher` - address and the private key of the wallet that was used as `<publisher-address>` on the previous step for [Oracle deployment](#deploy-oracle). Again, it will be publishing data from the TEE onto blockchain;
* `apiConfig` - containing:
    - `endpoint` - API URL (default using Alpha Vantage API query url with api-key);
* `debugMode` - false.

To sum up: you should end up having two files in `inputs` folder:
- `input.json` (the file must have this name)
- `ca_certificates.crt`

Create an archive with those files:

```shell
tar -czvf oracle-input.tar.gz input.json ca_certificates.crt
```

Go to the base directory with your SPCTL and upload the archive to the storage:

```shell
cd ../../../../../
./spctl files upload ./solutions/Blockchain/sp-oracle/script/inputs/oracle-input.tar.gz --output oracle-input.json --filename oracle-input.tar.gz
```

`oracle-input.json` will be created. We will use it and `oracle-solution.json` from Step 2 to create an order:

```shell
./spctl workflows create --tee 1,1 --tee-slot-count 1 --tee-options 1 --tee-options-count 1 --storage 23,27 --solution 6,2 --solution oracle-solution.json --data oracle-input.json --min-rent-minutes 60
```

The result will be an order ID.

You can check the status of the order using [Marketplace GUI](/developers/marketplace) or this [command](/developers/cli_commands/orders/get):

```shell
./spctl orders get <order ID>
```

Wait until the order turns to status `Processing`. The script will start about 15 minutes after that. 

## **Step 5. Observing oracle**

Now we can observe the oracle live through Polygonscan.

Open the dApp contract page on Polygonscan: `https://mumbai.polygonscan.com/address/<d-app-address>`, using the contract address we have received on the [Deploy dApp](#deploy-dapp) step. On the `Contract` -> `Read Contract` tab select methods:
- processA - requests the BTC/USD price which is not older than 1 hour (and adds 1);
- processB - requests any last BTC/USD price regardless of the data age (and adds 2).

<img src={require('./../../images/guides_blockchain_2.png').default} width="auto" height="auto"/>

If you are interested in directly monitoring the work of the oracle contract you can call its methods on the Oracle contract page on Polygonscan similarly to the dApp. However, as a key it won't take 'BTC/USD' directly, but rather the keccak256 hash of it.

You can find open online services for convertation, but if you are using the same pair (BTC/USD), then the key will be `0xee62665949c883f9e0f6f002eac32e00bd59dfe6c34e92a91c37d6a8322d6489`. You can use it to call on the oracle methods.  

<img src={require('./../../images/guides_blockchain_3.png').default} width="auto" height="auto"/>

On the screenshot above getDataCounts shows how many times the price was refreshed in blockchain.

## **Troubleshooting**

### Updating MRENCLAVE and MRSIGNER

If you have already deployed the Oracle smart contract and then realized that you need to go back and rebuild the Oracle service solution, then you will get new MRENCLAVE and MRSIGNER values. To avoid redeploying the Oracle contract, we have prepared Hardhat tasks `change-mr-enclave` and `change-mr-signer` to update the values in the deployed contract which should be executed in `smart-contract` directory. When using these tasks, the `MUMBAI_DEPLOYER_PRIVATE_KEY` environment variable must be a **private key** of a `publisher-address` that you used on the [Deploy oracle](#deploy-oracle) step.

```shell
npx hardhat change-mr-signer --address <oracle-address> --signer <new-mrsigner>
npx hardhat change-mr-enclave --address <oracle-address> --enclave <new-mrenclave>
```

## **Customization**

A quick customization guide of the oracle script:

### Changing the Blockchain
* When switching to another EVM-compatible blockchain it is sufficient to replace the node address in the configuration `input` file.
* When transitioning to another type of blockchain, replace the `blockchan.provider.ts` service and replace the smart contracts with those compatible with the specific blockchain.

### Changing the API
* Replace the `exchangeApi.service.ts` service with a new one.
* Add `dto` files with objects from the API.
* Add corresponding `dto` types to the final dApp.

### Extending to Off-Chain Computations
* Create a new service with business logic and connect it in `index.js`.
* Extend `blockchan.provider.ts` to publish different types of computations.
* Always sign all published data with a session key.

