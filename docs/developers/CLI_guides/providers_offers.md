---
id: "providers_offers"
title: "Creating Providers and Offers"
slug: "/cli_guides/providers_offers"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating Providers and Offers

## **About**
This guide will take you step by step through the process of creating your Data / Solution provider and deploying your own Data / Solution offer to Super Protocol.



<Highlight color="red">short synopsys how it works</Highlight>



## **Prerequisites**

### Testnet credentials

You should have received the credentials by email from Super team:
- **Testnet account address** - the public key of Super testnet wallet;
- **Testnet account private key** - the private key of Super testnet wallet;
- **Access token** - used as an anti-fraud measure for receiving free test TEE and MATIC tokens.

If you haven't - please, [apply to join Testnet](/testnet/).

You will need the credentials to set up SPCTL, Marketplace GUI and Provider Tools.

### Set up Provider Tools

To guide you through the process of setting up a provider and offers we made a special SPCTL extension: **Provider Tools**. 

To install Provider Tools, open Terminal in the directory where you want to place the tool and then run the following command for your OS:

<Tabs>
  <TabItem value="linux" label="Linux" default>
```
curl -L TBD
chmod +x ./provider-tools
```

  </TabItem>
  <TabItem value="macos" label="MacOS">
```
curl -L TBD
chmod +x ./provider-tools
```

  </TabItem>
  <TabItem value="windows" label="Windows">
```
curl -L TBD
chmod +x ./provider-tools
```

  </TabItem>
</Tabs>

<Highlight color="red">указать ссылку для загрузки и выбор для разных OS</Highlight>

**Note:** in order to avoid confusion it is best to choose a directory separate from your SPCTL directory, since Provider Tools will also download its own service copy of SPCTL.

### Set up SPCTL

You probably already have SPCTL set up and configured  by now, but if you don't - please, [do it now](/developers/cli_guides/configuring). You will need SPCTL to prepare and upload your offers and run an Execution Controller script.

## **Step 1 - Setting up accounts**

### Types of accounts

The main wallet that is used to create and manage orders is called **User account**. For testnet purposes, this account is provided to you by the Super Protocol team.

But to become a provider, you need to have three other accounts:

1. **Authority account** your main provider account in Super Protocol, used to create and manage your provider; 
2. **Action account** executes actions on behalf of an Authority account, used to create and manage offers; 
3. **Token receiver account** used to receive the TEE rewards for providing offers on Super Protocol.

---

### Creating accounts

We will use the Provider Tools to auto-generate the three accounts.

Go to the directory where you downloaded Provider Tools and run this command: 

```
./provider-tools setup
```

The tool will request your Access token and then ask you questions regarding creation of the provider accounts:

`Do you need to generate a new Authority account?`<br/>
Select `Yes`.

`Do you need to generate a new Action account?`<br/>
Select `Yes`.

`Do you need to generate a new TokenReceiver account?`<br/>
Select `Yes`.

**Note:** alternatively, you can use your own previously created Polygon accounts. You can create them through Metamask and then follow [this guide](https://docs.polygon.technology/tools/wallets/metamask/add-polygon-network/) to add the Polygon Amoy Testnet network. Select `No` in the menu when prompted and enter their private keys.

---

**Expected step result:**
* `config.json` is created in the Provider Tools directory. It contains the SPCTL configuration for the next step as well as the private keys to your provider accounts.
* Required security deposit of 5 TEE is added to the Action account automatically (for testnet purposes).
* 5 MATICs are added to the Action account automatically (for testnet purposes).

## **Step 2 - Preparing content**

Steps 2 and 5 will require you to prepare and upload your solution or data, and then create an order. This process is also outlined in the [Quick Deployment Guide](/developers/cli_guides/quick_guide#prepare-data).

### Prepare offer content

**For solution offers**

In order to be run correctly inside an Intel SGX confidential enclave (TEE), a solution has to be packed and signed with [Gramine](https://gramineproject.io/) (a.k.a graminized).

Use SPCTL to run the [**solutions prepare**](/developers/cli_commands/solutions/prepare) command.

As a result, a `tar.gz` archive will be generated.

**For data offers**

For data, you can simply place the data into an archive.There is no need to prepare it.

As a result, a `tar.gz` archive will be generated.

---

### Upload offer content

Before the solution can be executed in TEE, it needs to be uploaded to a storage, from where the TEE will download it for execution.

Use SPCTL to run the [**files upload**](/developers/cli_commands/files/upload) command using the `tar.gz` archive above.

**Note**: unless you have a paid StorJ account, it's best to create an order for storage offer. 

<Highlight color="red">куда лучше грузить, в свой StorJ? или создавать оффер - но на какое время?</Highlight>

As a result, a resource file will be generated in the `json` format, containing the information for TEE on how to access your uploaded solution.

---

**Expected step result:**
* Solution or data has been prepared, archived and uploaded to storage;
* A resource `.json` has been generated.

## **Step 3 - Configuring offer**

Now that we have the accounts, it's time to configure the offers.

You will need to create two .json files.

### Offer description

**First**, a .json with the general description and properties of the offer.

Let's say that in this example our offer is a Solution, a Python script similar to the [Image Classification](/developers/offers/python-image).

Copy and save this format in a .json file. You can name it anything you want, but for this tutorial let's call it `offer.json`.

```json title="offer.json"
{
  "name": "Name of your offer goes here",
  "group": "0", // belongs to input group (Solution or Data offers)
  "offerType": "2", // offer type is Solution
  "cancelable": false,
  "description": "Description of your offer goes here, it may include HTML",
  "restrictions": {
    "offers": [
      "5", // must be executed together with the Python base image offer #5
    ],
    "types": [
    ]
  },
  "metadata": "",
  "input": "",
  "output": "",
  "allowedArgs": "",
  "allowedAccounts": [],
  "argsPublicKey": "",
  "resultResource": "",
  "linkage": "",
  "hash": ""
}
```

Where you need to fill out the following fields:

* `name` - the name of your offer;
* `offerType` - type has to be either 2 for a Solution offer or 3 for Data offer;
* `description` - the description of your offer. Description may contain HTML;
* `restrictions` - each Solution must use a base image offer from the Marketplace. The offer # is specified here. For Solutions only.

As an example, this is what these fields look like in the Marketplace:

<img src={require('./../images/cli_guides_providers_offers_1.png').default} width="auto" height="auto"/>

<img src={require('./../images/cli_guides_providers_offers_5.png').default} width="auto" height="auto"/>

And in SPCTL (on blockchain), using the [offers get](/developers/cli_commands/offers/offers/get) command:

```
./spctl offers get value 8
```

<img src={require('./../images/cli_guides_providers_offers_2.png').default} width="auto" height="auto"/>

<br/>
<br/>

You can learn more about the other fields in the [offers update](/developers/cli_commands/offers/offers/update) command.

It is important that the description clearly states: 
* What does your solution do? 
* What is the expected result? Provide an example;
* What kind of data does it use? Provide examples of format and structure; 
* Provide links to outside sources (such as GitHub).

Remember that users will be running your solution or data *blindly* - thus you need to be as precise as possible in describing the input/output requirements. Confidentiality does not allow for downloading of offers unless you specifically permit it in the offer settings. 

---

### Offer requirements

**Second**, a .json with the values of the required slots and options for your solution or data offer.

You can learn more about the slots and options [here](/developers/fundamentals/slots).

In a few words: each offer, either solution or data, has system requirements for execution. This is where you specify these requirements. Each requirements slot can have its own price, either Fixed or Per Hour. Depending on these requirements, the customer will select a TEE compute offer configuration, which cannot be lower than your requirements. 

Copy and save this format in a .json file. You can name it anything you want, but for this tutorial let's call it `offer-slots.json`.

Do this for each requirements slot that you want to add to the offer (you can have multiple).

```json title="offer-slots.json"
{
  "info": {
    "cpuCores": 1.15,
    "gpuCores": 0,
    "diskUsage": 1073741824,
    "ram": 1073741824
  },
  "usage": {
    "maxTimeMinutes": 0,
    "minTimeMinutes": 0,
    "price": "1000000000000000000",
    "priceType": "1" 
  },
  "option": {
    "bandwidth": 1000000,
    "traffic": 1000000000,
    "externalPort": 0
  }
}
```

Modify these fields as necessary. This is your offer, and only you know what compute configuration your solution or data will need to run.

You can learn more about these fields in the [offers add-slot](/developers/cli_commands/offers/slots/add-slot) command.

As an example, this is what they look like in the Marketplace: 

<img src={require('./../images/cli_guides_providers_offers_3.png').default} width="auto" height="auto"/>

And in SPCTL (on blockchain), using the [offers get-slot](/developers/cli_commands/offers/slots/get-slot) command:

```
./spctl offers get-slot value --offer 11 --slot 11
```

<img src={require('./../images/cli_guides_providers_offers_4.png').default} width="auto" height="auto"/>

---

**Expected step result:**
* `solution-offer.json` with offer description is prepared;
* `solution-offer-slots.json` with offer requirements (slots and options) is prepared. There may be more than one.

## **Step 4 - Creating provider and offer**

Let's recap. At this point you need to have the following:

* A folder with Provider Tools. In that folder:
  * `config.json` with the credentials for authority, action and tokenReceiver accounts;
  * `offer-resource.json` which was generated after uploading solution to storage;
  * `offer.json` containing the description of the offer;
  * `offer-slots.json` containing the required slots for the offer;

### Create provider and offer

Now let's put all of this together. 

Run this command:

```
./provider-tools register <offerType> --result ./offer-resource.json
```

Where:
* `<offerType>` is either `data` or `solution`;
* `offer-resource.json` is the resource file that was generated by uploading to storage.

The tool will take you through the following steps:

**First**, the command will automatically download SPCTL into the `tool` directory inside the Provider Tools directory. **Note:** please don't use this copy of SPCTL to run commands, it's a service copy because Provider Tools is an extension of SPCTL.

**Second**, the Provider Tools will check whether a provider with the Authority account specified in the `config.json` is already registered on blockchain. 
* If provider exists, the prompt will go to the next step; 
* If provider doesn't exist, then you will be prompted to create one. You will need to specify its name and description. The system will also prompt you to save the provider info into a .json in case you need to update the provider description later.

**Third**, the Provider Tools will ask if this provider already has solution or data offers created on blockchain.
* If you want to create a new offer, select `No`. The tool will ask for the two .json files from Step 3. 
* If you already created an offer and want to update it, select `Yes`. The tool will prompt you to specify the offer ID and the offer private key. It can be found in the `config.json`, in `providerDataOffers` section, in `argPrivatekey` field.

As a result, a new directory `<offerType>-execution-controller` will be created in your Provider Tools directory. It will contain all the necessary artifacts to run your Execution Controller (see Step 5).

<Highlight color="red">как вручную проверить что провайдер и офферы были созданы</Highlight>

---

**Expected step result:**
* A provider is created on blockchain. The private keys to its three accounts are found in `config.json`. The provider address is its Authority account public key, you can also get it by importing the Authority private key into Metamask;
* An offer is created on blockchain. Its ID and private key is found in the `config.json`;
* All necessary files to run the Execution Controller are created in the `<offerType>-execution-controller` folder.

## **Step 5 - Running Execution Controller**

<Highlight color="red">что такое EC, как он работает, зачем он нужен</Highlight>

Execution Controller allows processing and further distribution of requests from the blockchain.

Every 5 minutes the script will check if there are any orders in the status New or Processing that contain your offer. If there are any, it will complete them using the resource file to access your uploaded data / solution.

<Highlight color="red">добавить описание про active / inactive</Highlight>


In this step you need to launch a Marketplace offer with your own data. You can do this entirely using Marketplace GUI or using SPCTL.

Go to the `<offerType>-execution-controller` directory and put these two files into a single tar.gz archive (let's name it `offer-ec.tar.gz`):
* `.env` file;
* `config.json` file, located in `tool` directory. 

Use this command to create the archive:

```
tar -czf offer-ec.tar.gz .env -C tool/ config.json
```

Once you have the archive with the two files, upload it to a storage using the [files upload](/developers/cli_commands/files/upload) command:

```
./spctl files upload offer-ec.tar.gz --storage 25,30 --min-rent-minutes 120
```

Then, run the [workflows create](/developers/cli_commands/workflows/create) command with the `resource.json` resulted from the upload:

```
./spctl workflows create --solution 6,2 --solution XXX --data ./resource.json --storage 23,30
```

<Highlight color="red">прописать номер оффера ExecController</Highlight>



## **Step 6 - Marketplace GUI Moderation**


Note: by default, your offer is set to Unmoderated mode in the Marketplace. Please contact SuperTeam to set your offer to Approved mode in the Marketplace.





2. If any issue occurs while creating an offer or its slot, you can always check the error details in `error.log` file located in `tool` directory and take corresponding action.







## **FAQ**

### Updating a provider

In case you need to update any information in the provider’s description, please use SPCTL providers update command.

### Creating another offer

In case you need to create and run a new offer in addition to an existing one, you will need to go through the process of configuring an offer at Step 2 once again.

As a result, `<offerType>-execution-controller` directory will be updated in accordance with changes. To check that, please go to `<offerType>-execution-controller` and open `.env` file. A new offer will be added to the block `PROVIDER_OFFERS_JSON`.

### How to update an offer

In case you need to update any information in the offer description, please use SPCTL  offers update command.

### How to update a slot

In case you need to update any information in the slot description, please use SPCTL  offers update-slot command.

### How to enable downloading of offer

<Highlight color="red">как активировать возможность скачивая оффера?</Highlight>

### 


