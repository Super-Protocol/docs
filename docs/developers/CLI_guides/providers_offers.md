---
id: "providers_offers"
title: "Providers and Offers"
slug: "/cli_guides/providers_offers"
sidebar_position: 4
---

# How to Deploy Data/Solution offer

## About
This guide will take you step by step through the process of creating your Data / Solution provider and deploying your own Data / Solution offer to Super Protocol.

## Prerequisites

### Testnet credentials

You should have:
received the credentials by email from Super Team:
- Testnet account address
- Private key
- Access token 

### Set up Provider Tools

Super Protocol has a powerful tool called `provider-tools` through which you can create a provider, create an offer and obtain further instructions how to run the offer.

The following commands are available in this tool:
1. `./provider-tools setup` to configure your provider information;
2. `./provider-tools register` to configure your offer information.

To start working with the tool, open Terminal in the directory where you want to place the tool for Linux and run the following command:
```
curl -L TBD
chmod +x ./provider-tools
```

## Step 1 - Registering a Provider


### Accounts

Testnet account is considered as your user account in SuperProcotol under which you will perform actions as a User. Please do not to use it for other purposes.

In Superprotocol, there are three types of provider accounts and each of them performs its own functions:
1. **Authority account** is considered as your main provider account in SuperProcotol under which a provider is created and modified.
2. **Action account** executes actions on behalf of an authority account in Execution Controller with the purpose to add and modify offers. Execution Controller allows processing and further distribution of requests from the blockchain.
3. **Token receiver** account gets rewards as a result of service delivery.
   **Note:** its private key should be stored safely.

We highly recommend that you create and use three different Polygon Testnet accounts. Later on, you will be able to change action and token receiver accounts using SPCTL `providers update` command but please remember that **only one** provider can be created under an authority account.

### Registering a provider

Command syntax: `./provider-tools setup`

While running the command, the tool will :
1. ask to specify your Access token
2. ask if authority account needs to be generated
- in case you have already created an account, please specify its private key
3. ask if action account needs to be generated
- in case you have already created an account, please specify its private key
4. ask if token receiver account needs to be generated
- in case you have already created an account, please specify its private key

As a result, `config.json` file will be created in the root directory. This file will contain the information about spctl configs and generated / specified accounts.

### Security deposit

Before executing the next command, you should check the balance of action account.

The operation of creating an offer costs 5 TEEs and it will be debited form action account. So, there should be enough TEEs (for a creation operation in SuperProtocol) and MATICs (for a write operation to blockchain). **Note:** you can receive tokens in the [Marketplace](/developers/marketplace/first-steps/#4-receiving-tokens).

The operation of creating a provider requires a security deposit of 5 TEEs. If at some point the security deposit gets lower, for example, in case penalties have been applied and no replenishment has been made, all the provider’s offers become unavailable for orders.

So, before starting, it is necessary to check the balance of authority account and verify that there are enough TEEs (for a deposit in SuperProtocol) and MATICs (for a write operation to blockchain). **Note:** you can receive tokens in the [Marketplace](/developers/marketplace/first-steps/#4-receiving-tokens).

## Step 2 - Creating an Offer

### Prepare offer content

Please follow the [guide](/developers/cli_guides/quick_guide/) to get more details about how to upload them to the storage. The resource file which is generated as a result of uploading will be needed later in this guide.

### Prepare offer information
To create a new data / solution offer, you will need to provide 2 json files:
1. Containing data / solution offer general information

To get more details about the format, please follow the link.

2. Containing data / solution offer slot information;

To get more details about the format, please follow the link.



Command syntax: `./provider-tools register <offerType> --result <path to the resource json of data offer>`

Example for Data offers: `./provider-tools register data --result ./data_resource.json`

Example for Solution offers: `./provider-tools register solution --result ./solution_resource.json`

While running the command, the tool will :
1. download SPCTL in the directory `tool`
2. check whether a provider exists based on accounts in config.json file
- if no, a new provider will be created, you will be asked to specify its name and description
3. suggest saving your provider information into a json file
4. ask if there is a data / solution offer already created:
- if yes, you will be asked to specify its id and private key
    - you will be offered to add new slots as well
- if no, you will be asked to specify the paths to json files from Step 2, which will be used to create an offer and its slots.

**Important notes:**
1. We strongly insist on creating a new offer using this tool because you will be able to access an offer’s private key that is required for deployment. The private key is generated on the first step when you provide the path to your offer information. It will be available in `config.jso`n file, in providerDataOffers section, in `argPrivatekey` field. The public key will be written to `argPublickey` field in the offer.
2. If any issue occurs while creating an offer or its slot, you can always check the error details in `error.log` file located in `tool` directory and take corresponding action.

As a result, a new directory `<offerType>-execution-controller` will be created in the root directory. It will contain all the necessary artifacts to run your Execution Controller.

## Step 3 - Running Execution Controller
In the terminal, you will observe an instruction how to run your Execution Controller. Please use the option of running via shell script.

To be able to run your Execution Controller, you will need to:
1. install [jq](https://jqlang.github.io/jq/download/);
2. open the terminal and go to your `<offerType>-execution-controller` directory;
3. run the script using the following command: `sh runner.sh`

Every 5 minutes the script will check if there are any orders in the status New or Processing that contain your offer. If there are any, it will complete them using the resource file to access your uploaded data / solution.

**Note:** by default, your offer is set to `Unmoderated` mode in the Marketplace. Please contact SuperTeam to set your offer to `Approved` mode in the Marketplace.

## Troubleshooting
### How to update a provider
In case you need to update any information in the provider’s description, please use SPCTL providers update command.

### How to run a new offer
In case you need to create and run a new offer in addition to an existing one, you will need to go through the process of configuring an offer at Step 2 once again.

As a result, `<offerType>-execution-controller` directory will be updated in accordance with changes. To check that, please go to `<offerType>-execution-controller` and open `.env` file. A new offer will be added to the block `PROVIDER_OFFERS_JSON`.

### How to update an offer
In case you need to update any information in the offer description, please use SPCTL  offers update command.

### How to update a slot
In case you need to update any information in the slot description, please use SPCTL  offers update-slot command.