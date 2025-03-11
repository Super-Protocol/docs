---
id: "oracles"
title: "Example: Oracles"
slug: "/deployment_guides/blockchain/oracles"
sidebar_position: 10
---

## **About**

This guide will take you step by step through the process of deploying a confidential [oracle](https://en.wikipedia.org/wiki/Blockchain_oracle) service on Super Protocol. This specific Oracle service was created by the Super team as an example for deploying off-chain computing services and its function is to process reliable historical data on the New York temperature. 

* The Oracle service should publish the New York temperature exchange rate every 5 minutes by accessing the open [Open Meteo API](https://open-meteo.com/en/docs/).

* The Oracle smart contract must receive and store data from the Oracle script and verify that this script was executed and performed within a Trusted Execution Environment (TEE).

* Our DApp (smart contract) should be able to read this data and ensure that it is: 
  * Up-to-date (by verifying the timestamp) 
  * Available to be read on-chain.

:::note
SMART-CONTRACTS IN THIS EXAMPLE USE UN-AUDITED CODE. DO NOT USE THIS CODE IN PRODUCTION.
:::

## **Prerequisites**

To successfully complete this advanced guide it will be useful to have experience with Node.js, EVM blockchains and Solidity programming. 

You will need:

### Install

- [Node.js](https://nodejs.org/en/download/package-manager) - This example is based on Node.js v16. **Note:** we recommend to install Node.js using `nvm`. For more details, please follow the [link](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage).

- [Docker](https://www.docker.com/get-started/) - for building solutions.

- [OpenSSL](https://www.openssl.org/) - you will need OpenSSL installed to generate solution signing key. Linux: by default, Ubuntu: `apt install openssl`, MacOs: `brew install openssl`.

- [SPCTL](/developers/cli_guides/) - our CLI tool, must be fully [configured](/cli), including access to decentralized storage: it will be used to store encrypted configurations for the oracle script.

### Create / generate

- [Oklink](https://www.oklink.com/polygon) - register and generate an API Key for contract verification on block explorer. Even though in this example we will be using the [Amoy Polygon Testnet](https://www.oklink.com/polygon), you will need the **mainnet** API key.

- Polygon Testnet Wallet #1 - for deploying "x509 verifier" smart contract. Wallet needs to contain test POL tokens.
- Polygon Testnet Wallet #2 - for deploying Oracle smart contract. Wallet needs to contain test POL tokens.

You can create the wallets using MetaMask and follow [this guide](https://support.polygon.technology/support/solutions/articles/82000907114-how-to-add-amoy-network-in-your-wallet-) to add the Polygon Amoy Testnet network. Save their addresses and private keys, you will need them later in the guide.

We highly recommend that you create two different wallets on Polygon Testnet specifically for this guide. But if you are going to use a single wallet, please make sure that you do not use it for any other operations, as they might disrupt the Oracle.

**Note:** These wallets are **not** the Testnet wallets have you have received from the Super Protocol team.

## **Step 1. Prepare environment variables and install dependencies**

Create a new folder for the Oracle project, name it anything you want. Place the SPCTL executable and its configured `config.json` there. 

Download the Super Protocol solutions repository into it:

```shell
git clone https://github.com/Super-Protocol/solutions
```

Now you will need to prepare two `.env` files with all the required parameters and place them in the directories:
- `Blockchain/sp-x509`
- `Blockchain/sp-oracle/smart-contract`.

Go to the `Super-Protocol/solutions` directory and make a copy of the example `.env`: 

```shell
cd ./solutions/Blockchain/sp-x509/
cp .env.example .env
```

Add the following parameters to `.env` file:

- `AMOY_DEPLOYER_PRIVATE_KEY` -  private key for Polygon Testnet Wallet #1.
- `AMOY_URL` - you can use `https://amoy.polygon.superprotocol.com/hesoyam`, which is the Super Protocol Polygon node, or your own.
- `OKLINK_AMOY_API` - the mainnet API Key you have generated in [Oklink](https://www.oklink.com/polygon).

Install dependencies and compile the contract:

```shell
docker compose up build
```

Now you will need to do the same thing in the directory `Blockchain/sp-oracle/smart-contract`: 

```shell
cd ../sp-oracle/smart-contract/
cp .env.example .env
```
Copy and insert all the parameters as above.

In the same directory, install dependencies and compile the contract:

```shell
npm i
npx hardhat compile
```

Then you need install dependencies in the `scripts` folder. Please follow:

```shell
 cd ../script/
 docker compose up build
```

A `run` folder will be created, containing folders `dist` and `node_modules` with the artifacts for the future solution.

## **Step 2. Local run**

Let's test the Oracle locally before deploying it to Super Protocol.

Execute the following command in the directory `Blockchain/sp-oracle/script`:

```shell
docker compose up blockchain oracle
```

When you see the log `The iteration of oracle loop has been ended`, it means that Oracle performance has been successful and you can check the results. 

Scroll up the docker's output to find the logs `To test app please use these commands inside "smart-contract" folder` and copy the first command. Running containers must NOT be stopped. Open a new terminal window, go to the directory `smart-contact`, insert the copied command and execute it.

For example:

```
bash $ npx hardhat process-a --address 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 --network localhost
Tx result: BigNumber { value: "4" }
```

The result `Tx result: BigNumber { value: "4" }` means that API data (New York temperature  4°C) has been successfully written to a local blockchain and you have retrieved it by another smart contract.

## **Step 3. Deploy the "x509 verifier" smart contract**

This smart contract is responsible for on-chain cryptographic verification of the Oracle service, ensuring that it's running inside a secure SGX Trusted Execution Environment (TEE) with validation of TEE quote, MRENCLAVE and MRSIGNER.

It's worth noting that this x509 verifier smart contract acts as a validator of data and is not tied to this implementation of the Oracle. In other words, it can service multiple instances of Confidential Oracles, all pointing to the same 'x509 verifier.'

### Deploy the smart-contract

We will use Intel's SGX Root CA Certificate [intel-root-cert.pem](https://github.com/Super-Protocol/solutions/blob/main/Blockchain/sp-x509/intel-root-cert.pem) for deployment. The integrity of the entire certificate chain depends on this root certificate. 

Go to `/solutions/Blockchain/sp-x509/` directory and execute this command to deploy the x509 verifier contract to the Polygon testnet network.

```shell
cd ./solutions/Blockchain/sp-x509/
npx hardhat deploy --cert ./intel-root-cert.pem --network amoy
```

The result will be a x509 verifier smart contact address. You'll need it in later steps, so make sure to save it.

To be able to interact with the contract via GUI (such as Oklink) you will need to verify the contract on-chain by uploading the contract ABI:

```shell
npx hardhat verify-x509 --cert ./intel-root-cert.pem --network amoy --address <verifier-contract-address>
```

You should get a "Successfully verified" response. Now you can observe your deployed x509 verifier smart contract through Oklink.

**Example:** a previously [deployed and verified x509 smart contract](https://www.oklink.com/polygon/address/0xb57718CC0A2149A376715503d15182f5a773e1F7#readContract).


## **Step 4. Prepare Oracle service for deployment on Super Protocol**

Now we move to the preparing and deploying the components of the oracle itself. This process consists of two components:

- An off-chain service that will run inside the TEE and call on the oracle smart-contract at specified intervals (default frequency is 5 minutes).

- The oracle smart contract that will store the New York temperature. It will also verify, by using the x509 smart contract from previous step, that the request comes from a trusted off-chain service.

In this step we will cover the first component.

### Download Node.js base image

All the solutions deployed on Super Protocol have to use a base image solution offer. In this case it will be a Node.js base image.

Go to your project root directory and execute this [command](/cli/commands/offers/download-content):

```shell
./spctl offers download-content 6
```

It will download the Node.js base image file to the current directory. It might be called `node16-base-solution-image-v0.3.1.tar.gz` or a later version (base image offers are updated often).

### Writing manifest and encrypting the oracle service

Next, we will build a Docker image of the service. For the Docker image to run inside the TEE, the image has to be built and signed with [Gramine](https://gramine.readthedocs.io/en/latest/gsc-installation.html) (a.k.a graminized). Let's create the signing key:

```shell
./spctl solutions generate-key signing-key
```

Execute the following [command](/cli/commands/solutions/prepare) in the root of your project to prepare and pack the solution:

```shell
./spctl solutions prepare --pack-solution oracle-solution.tar.gz --write-default-manifest --base-image-path <path to the Node.js base image archive> ./solutions/Blockchain/sp-oracle/script/run/ signing-key
```

The result will be `oracle-solution.tar.gz` and `metadata.json` files. 

Additionally, in the terminal logs you will see MRENCLAVE and MRSIGNER values. They look something like this:

```
MRENCLAVE: d6906986298db89f91941921579e058429bd9ec63c0f97246274b25a4bbfbf0c
MRSIGNER: 36f3bb39d10617852d1eef2f5066d8f9add2c65fb1a026d86398fec405fe725c
```

**Save these values!** Important: different MRENCLAVE and MRSIGNER values are generated for each run of the `prepare` command. 

Finally, we will [encrypt and upload](/cli/commands/files/upload) the prepared solution to decentralized storage (Storj):

```shell
./spctl files upload oracle-solution.tar.gz --output oracle-solution.json --filename oracle-solution.tar.gz --metadata ./metadata.json
```

An `oracle-solution.json` file will be generated. It contains storage access credentials and encryption keys for the uploaded file. Do not share it with untrusted parties. We will use it later to create a workflow on Super Protocol.

## **Step 5. Prepare and deploy Oracle smart contract**

For this step you will need Polygon Testnet Wallet #2. This account will be used to send transactions from Oracle service to the smart contract.

### Deploy oracle

Now we are ready to deploy an Oracle smart contract.

Go to the `/Blockchain/sp-oracle/smart-contract` directory and run this command:

```shell
cd ../sp-oracle/smart-contract
npx hardhat deploy-oracle --publishers <publisher-address> --enclave <MRENCLAVE> --signer <MRSIGNER> --verifier <x509-verifier-address> --network amoy
```

Where:

- `<publisher-address>` - the Polygon Testnet Wallet #2 address that will be used by Oracle service to send new prices to the contract;

- `<MRENCLAVE>` and `<MRSIGNER>` - values that you received at the end of [Step 2](#writing-manifest-and-encrypting-the-oracle-service). <br/>**Note:** if at some point you will need to redo Step 2 and prepare the solution again, you will have different MRENCLAVE and MRSIGNER and will have to change them in the smart contract. Refer to [updating MRENCLAVE and MRSIGNER](#updating-mrenclave-and-mrsigner) to modify these without redeploying the contract;

- `<x509-verifier-address>` - x509 verifier contract address, the result of [Step 1](#deploy-the-smart-contract).

The result will be the oracle smart contact address. Use it to verify the contract on-chain, as we did for x509-verifier:

```shell
npx hardhat verify-oracle --address <oracle-address> --publishers <publisher-address> --enclave <MRENCLAVE> --signer <MRSIGNER> --verifier <x509-verifier-address> --network amoy
```

You should get a "Successfully verified" response. 

**Example:** a previously [deployed and verified oracle smart contract](https://www.oklink.com/polygon/address/0x9e090892a8b65F59c8A52c5c811a3a859BE684A8#readContract).

### Deploy dApp

Since Oracle serves as a data repository, and its goal is to provide up-to-date data for the on-chain world, for clarity, we will deploy a [simple contract](https://github.com/Super-Protocol/solutions/tree/main/Blockchain/sp-oracle/smart-contract/contracts/App.sol) as a decentralized application that will use the data from our Oracle.

```
npx hardhat deploy-app --oracle <oracle-address> --network amoy
```

Verify the dApp contract on-chain:

```
npx hardhat verify-app --address <d-app-address> --oracle <oracle-address> --network amoy
```

You should get a "Successfully verified" response. 

**Example:** a previously [deployed and verified dApp smart contract](https://www.oklink.com/polygon/address/0x9fF6c385F06Ecc6Fb09a321AEDeFf50Dc83Cb20C#readContract).

At the end of this guide we will observe this contract through Oklink to see how data changes.

## **Step 6. Deploy oracle service**

At this point we should have:
- Deployed the x590 verifier smart contract ([Step 3](/developers/deployment_guides/blockchain/oracles#step-3-deploy-the-x509-verifier-smart-contract))
- Prepared the oracle service solution ([Step 4](/developers/deployment_guides/blockchain/oracles#step-4-prepare-oracle-service-for-deployment-on-super-protocol))
- Deployed the oracle smart contract ([Step 5](/developers/deployment_guides/blockchain/oracles#step-5-prepare-and-deploy-oracle-smart-contract))

In this step we will deploy the oracle service that will be running on Super Protocol inside TEE. To recap, its function is to regularly update the New York temperature from the Oracle contract which we have deployed on the previous step.

Open a new terminal window and go to `/Blockchain/sp-oracle/script/inputs/` folder where we will need to configure the API inputs for Oracle service.

### Set up root certificates

First, you will need to retrieve the trusted root certificates to validate the connection to the API service that your oracle will be requesting to. You can extract root certificate of the particular API that you will be using, but because certificates may change unpredictably we recommend listing the full root certificates list from your computer. 

If you have run the Oracle locally, the file `ca_certificates.crt` has been already generated. It is located in the directory `/Blockchain/sp-oracle/script/inputs`. In addition, you can update it with your own list of trusted certificates. Otherwise, you can go on to the creation of `input.json`.

While in the `inputs` directory, execute:

Linux
```shell
cat /etc/ssl/certs/*.pem >> ./ca_certificates.crt
```

Mac OS
```shell
security export -t certs -f pemseq -k /System/Library/Keychains/SystemRootCertificates.keychain -o ./ca_certificates.crt
```

This command will create or update file `ca_certificates.crt` inside the `/inputs` directory. It contains the system root certificates.

### Configure input.json

Second, create `input.json` by copying the `input.example.json`:

```shell
cp input.example.json input.json
```

And configure it:

* `interval` - the frequency of requests to the API (how often the data will be published, in seconds);
* `dataKey` - key by which historical data of requests will be stored in the smart contract, for instance “NewYork_temperature”;
* `smartContractAddress` - address of the oracle smart contract;
* `publisher` - address and the private key of Polygon Testnet Wallet #2. It will be publishing data from the TEE onto the blockchain;
* `apiConfig` - containing:
    - `endpoint` - API URL (default using Open Meteo API query URL);
* `debugMode` - false.

To sum up: you should end up having two files in `inputs` folder:
- `input.json` (the file must have this name)
- `ca_certificates.crt`

### Upload and create order on Super Protocol

Create an archive with those files:

```shell
tar -czvf oracle-input.tar.gz input.json ca_certificates.crt
```

Go to the base directory with your SPCTL and upload the archive to storage:

```shell
cd ../../../../../
./spctl files upload ./solutions/Blockchain/sp-oracle/script/inputs/oracle-input.tar.gz --output oracle-input.json --filename oracle-input.tar.gz
```

An `oracle-input.json` will be created. We will use this file and `oracle-solution.json` from [Step 4](/developers/deployment_guides/blockchain/oracles#writing-manifest-and-encrypting-the-oracle-service) to create an order:

```shell
./spctl workflows create --tee 1,1 --tee-slot-count 1 --tee-options 1 --tee-options-count 1 --storage 25,30 --solution 6,2 --solution oracle-solution.json --data oracle-input.json --min-rent-minutes 60
```

The result will be an order ID.

You can check the status of the order using [Marketplace GUI](/developers/marketplace) or this [command](/cli/commands/orders/get):

```shell
./spctl orders get <order ID>
```

Wait until the order turns to status `Processing`. The script will start about 15 minutes after that. 

## **Step 7. Observing oracle**

Now we can observe the oracle live through Oklink.

Open the dApp contract page on Oklink: `https://www.oklink.com/polygon/address/<d-app-address>`, using the contract address we have received on the [Deploy dApp](#deploy-dapp) step. On the `Contract` -> `Read Contract` tab select methods:
- processA - requests the New York temperature in Celsius which is not older than 1 hour;
- processB - requests the New York temperature in Fahrenheit which is not older than 1 hour;

<img src={require('../../images/guides_blockchain_2.png').default} width="auto" height="auto"/>

If you are interested in directly monitoring the work of the oracle contract you can call its methods on the Oracle contract page on Oklink similarly to the dApp. However, as a key it won't take 'NewYork_temperature' directly, but rather the keccak256 hash of it.

You can find open online services for convertation, but if you are using the same pair (NewYork_temperature), then the key will be `0xb186074e0e3ae110d728b99f004e457e6f557aab3f713681c9f5b906e3cc5cd0`. You can use it to call on the oracle methods.  

<img src={require('../../images/guides_blockchain_3.png').default} width="auto" height="auto"/>

On the screenshot above getDataCounts shows how many times the price was refreshed in blockchain.

## **Troubleshooting**

### Updating MRENCLAVE and MRSIGNER

If you have already deployed the Oracle smart contract and then realized that you need to go back and rebuild the Oracle service solution, then you will get new MRENCLAVE and MRSIGNER values. To avoid redeploying the Oracle contract, we have prepared Hardhat tasks `change-mr-enclave` and `change-mr-signer` to update the values in the deployed contract which should be executed in `smart-contract` directory. When using these tasks, the `AMOY_DEPLOYER_PRIVATE_KEY` environment variable must be a **private key** of a `publisher-address` that you used on the [Deploy oracle](#deploy-oracle) step.

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

