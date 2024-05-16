---
id: "providers_offers"
title: "Providers and Offers"
slug: "/cli_guides/providers_offers"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating and managing Providers and Offers

## **About**

This guide will take you step by step through the process of creating a provider and a Solution or Data offer in Super Protocol. As a provider you will be able to monetize your offers by earning TEE tokens from leasing your products to clients. 

Confidentiality and decentralization ensure that your Solution and Data offers may be securely used in orders, on the terms that you specify, but cannot be downloaded, modified or otherwise used without your permission. Confidentiality protects both providers and customers.

:::info Testnet limitations

As of Testnet 5, you can only create Solution and Data offers. Ability to create Storage and TEE Compute offers will be available in future releases. Monetization currently is only possible with test TEE tokens until project goes to Mainnet.

:::

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

Please keep in mind that Provider Tools is still a work in progress and we will keep on optimizing the provider and offer creation and management processes. In next releases we will adapt it for Marketplace GUI.

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

<Highlight color="red">токены приходят позже, ТЕЕ будет 200</Highlight>


## **Step 2 - Preparing content**

Steps 2 and 5 will require you to prepare and upload your solution or data, and then create an order. This process is also outlined in the [Quick Deployment Guide](/developers/cli_guides/quick_guide#prepare-data).

### Prepare offer content

**For solution offers**

In order to be run correctly inside an Intel SGX confidential enclave (TEE), a solution has to be packed and signed with [Gramine](https://gramineproject.io/) (a.k.a graminized).

Use SPCTL to run the [**solutions prepare**](/developers/cli_commands/solutions/prepare) command.

As a result, a `tar.gz` archive will be generated. 

**For data offers**

For data, you can simply place the data into an archive. There is no need to prepare it.

As a result, a `tar.gz` archive will be generated.

---

### Upload offer content

<Highlight color="red">это делается под юзер аккаунтом</Highlight>

Before the solution can be executed in TEE, it needs to be uploaded to a storage, from where the TEE will download it for execution when ordered.

Use SPCTL to run the [**files upload**](/developers/cli_commands/files/upload) command using the `tar.gz` archive above. Let's call it `offer-content.tar.gz`.

```
./spctl files upload offer-content.tar.gz --storage 25,33 --min-rent-minutes 43200
```

Where:
* `--storage 25,33` - slot 33 of storage offer 25. Maximum disk capacity for this slot is 0.977 GB.
* `--min-rent-minutes 43200` - the lease time is specified as 30 days, because we need the offer content to be available on demand. You can make the lease longer and you can also [replenish the balance](/developers/cli_commands/orders/replenish-deposit) at a later date.

As a result, a resource file will be generated in the `json` format, containing the information for TEE on how to access your uploaded solution. Copy this file to the Provider Tools directory (you will need it in Step 4).

---

**Expected step result:**
* Solution or data has been prepared, archived and uploaded to long term storage;
* A `resource.json` has been generated and copied to the Provider Tools directory.

## **Step 3 - Configuring offer**

Now that we have the accounts, it's time to configure the offers.

You will need to create two .json files in the Provider Tools directory.

### Offer description

**First**, a .json with the general description and properties of the offer.

Let's say that in this example our offer is a Solution, a Python script similar to the [Image Classification](/developers/offers/python-image) offer.

Copy and save the format below in a .json file. You can name it anything you want, but for this tutorial let's call it `offer.json`.

```json title="offer.json"
{
  "name": "Name of your offer goes here",
  "group": "0",
  "offerType": "2",
  "cancelable": false,
  "description": "Description of your offer goes here, it may include HTML",
  "restrictions": {
    "offers": [
      "5"
    ],
    "types": [
      "2"
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
* `group` - leave it as 0, meaning it belongs to input group (Solution or Data offers);
* `cancelable` - leave it as False;
* `offerType` - type has to be either 2 for a Solution offer or 3 for Data offer;
* `description` - the description of your offer. Description may contain HTML;
* `restrictions` - restrictions indicate which other offers must be used together with your solution:
  * `offers` - you can restrict here to one of two base images: either 5 (Python) or 6 (Node.js);
  * `types` - you need to restrict to either offer types 2 (Solutions) or 3 (Data).

<Highlight color="red">История с рестрикшенами не очень понятна: если солюшен, то можно указать также данные? или данные, то можно указать солюшен? Можно вообще не указывать? людям это будет не понятно, нужно обсудить. И на странице offers update тоже уточнить, там тоже не понятно описано.</Highlight>

You can learn more about the other fields in the [offers update](/developers/cli_commands/offers/offers/update) command.

As an example, this is what these fields look like in the Marketplace:

<img src={require('./../images/cli_guides_providers_offers_1.png').default} width="auto" height="auto"/>

<img src={require('./../images/cli_guides_providers_offers_2.png').default} width="auto" height="auto"/>

And in SPCTL (on blockchain), using the [offers get](/developers/cli_commands/offers/offers/get) command:

```
./spctl offers get value 8
```

<img src={require('./../images/cli_guides_providers_offers_3.png').default} width="auto" height="auto"/>

<br/>
<br/>

It is important that your offer is well-documented, operational, and not containing anything illegal.

Please refer to the [**Moderation Guidelines**](/developers/marketplace/moderation/) for more details.

---

### Offer requirements

**Second**, a .json with the values of the required slots and options for your solution or data offer.

You can learn more about the slots and options [here](/developers/fundamentals/slots).

In a few words: each offer, either solution or data, has system requirements for execution. This is where you specify these requirements. Each requirements slot can have its own price, either Fixed or Per Hour. Depending on these requirements, the customer will select a TEE compute offer configuration, which cannot be lower than your requirements. 

Copy and save this format in a .json file. You can name it anything you want, but for this tutorial let's call it `offer-slot.json`.

Do this for each requirements slot that you want to add to the offer (you can have multiple).

```json title="offer-slot.json"
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

You can learn more about these fields in the [offers add-slot](/developers/cli_commands/offers/slots/add-slot) command. Note that this command may be used to create additional slots, but the initial slot must be created using Provider Tools as per this guide.

Modify these fields as necessary. This is your offer, and only you know what compute configuration your solution or data will need to run, as well as the [pricing terms](/developers/fundamentals/orders#cost-and-pricing).

As an example, this is what they look like in the Marketplace: 

<img src={require('./../images/cli_guides_providers_offers_4.png').default} width="auto" height="auto"/>

And in SPCTL (on blockchain), using the [offers get-slot](/developers/cli_commands/offers/slots/get-slot) command:

```
./spctl offers get-slot value --offer 8 --slot 4
```

<img src={require('./../images/cli_guides_providers_offers_5.png').default} width="300" height="auto"/>

---

**Expected step result:**
* `offer.json` with offer description is prepared;
* `offer-slot.json` with offer requirements (slots and options) is prepared. There may be more than one.

## **Step 4 - Creating provider and offer**

Let's recap. At this point you need to have the following in the Provider Tools directory:
* `config.json` with the credentials for authority, action and tokenReceiver accounts;
* `offer.json` containing the description of the offer;
* `offer-slot.json` containing the required slots for the offer;
* `resource.json` which was generated in the SPCTL directory after uploading solution to storage and copied to Provider Tools directory.

<Highlight color="red">поправить названия конфигов</Highlight>


### Create provider and offer

Now let's put all of this together. 

Run this command in the Provider Tools directory:

```
./provider-tools register <offerType> --result ./resource.json
```

Where:
* `<offerType>` is either `data` or `solution`;
* `resource.json` is the resource file that was generated by uploading to storage.

The tool will take you through the following steps:

**First**, the command will automatically download SPCTL into the `tool` directory inside the Provider Tools directory. **Note:** please don't use this copy of SPCTL to run commands, it's a service copy because Provider Tools is an extension of SPCTL.

**Second**, the Provider Tools will check whether a provider with the Authority account specified in the `config.json` is already registered on blockchain. 
* If provider exists, the prompt will go to the next step; 
* If provider doesn't exist, then you will be prompted to create one. You will need to specify its name and description. The system will also prompt you to save the provider info into a .json (let's call it `provider.json`) in case you need to [update](/developers/cli_guides/providers_offers#updating-provider-info) the provider description later.

**Third**, the Provider Tools will ask if this provider already has solution or data offers created on blockchain.
* You want to create a new offer, so select `No`. The tool will ask for the `offer.json` and `offer-slot.json` from Step 3. 

As a result, a new directory `<offerType>-execution-controller` will be created in your Provider Tools directory. It will contain all the necessary artifacts to run your Execution Controller (see Step 5).

### Update SPCTL

This step is optional (for now). But to manage your provider and offers later on (update information, update and create slots, disable offers, etc) you will need to [update your SPCTL config.json](/developers/cli_guides/configuring#for-providers) with the provider information.

<Highlight color="red">скопировать spctl-provider-config Или указать путь</Highlight>


---

**Expected step result:**
* A provider is created on blockchain. The private keys to its three accounts are found in `config.json`. The provider address is its Authority account public key, you can also get it by importing the Authority private key into Metamask;
* An offer is created on blockchain. Its ID and private key is found in the `config.json`;
* All necessary files to run the Execution Controller are created in the `<offerType>-execution-controller` folder;
* Optional: SPCTL configuration is updated with the provider information.


## **Step 5 - Running Execution Controller**

### About EC

<Highlight color="red">нужно придумать как мы будем называть этот оффер, возможно не Execution Controller, а как-то еще</Highlight>

A critical part of running and maintaining an active offer is the hosting of an Execution Controller. EC will check every 5 minutes for new orders containing your offer. If there are, the Execution Controller will use your offer private key to decrypt and allow it to process securely. Because Super Protocol is decentralized, the responsibility for hosting this component belongs to the provider.

**Important:** if an order does not receive a response from your Execution Controller, then the entire order will not process and hang indefinitely, which is not a user-friendly experience for customers. We understand that some offers will be created and then abandoned. This is why Marketplace will place your offer into an **Inactive** category if it does not respond within 15 minutes. This is done to warn users that this offer is likely no longer supported by its provider. Providers can reactivate their offers by contacting our support in Discord (see [Moderation Guidelines](/developers/marketplace/moderation/)).


### Creating an EC order

<Highlight color="red">этот шаг переписать целиком</Highlight>


For your convenience, we have made a special offer with an Execution Controller script that can run as a regular order in the TEE.

<Highlight color="red">здесь ссылка на этот оффер в Маркетплейсе и в папке Marketplace offers, Зуля и Паша напишут</Highlight>

In this step you will need to create an Execution Controller order with with your own data. You can do this entirely using Marketplace GUI (by adding your own data) or using SPCTL.

Go to the `<offerType>-execution-controller` directory and put these two files into a single tar.gz archive (let's name it `offer-ec.tar.gz`):

* `.env` file, located in the `<offerType>-execution-controller` directory;
* `config.json` file, located in `tool` directory within the `<offerType>-execution-controller` directory. 

Use this command to create the archive:

```
tar -czf offer-ec.tar.gz .env -C tool/ config.json
```

Once you have the `offer-ec.tar.gz` archive with the two files, move it to the SPCTL directory and upload it to a storage using the [files upload](/developers/cli_commands/files/upload) command:

```
./spctl files upload offer-ec.tar.gz --storage 25,33 --min-rent-minutes 10080
```

Then, run the [workflows create](/developers/cli_commands/workflows/create) command with the `resource.json` resulted from the upload:

```
./spctl workflows create --solution 5,1 --solution XXX --data ./resource.json --storage 25,30 --deposit 2 --min-rent-minutes 43200
```

<Highlight color="red">прописать номер оффера ExecController</Highlight>


Where:
* `--deposit 5` - deposit is specified as 5 TEE.
* `--min-rent-minutes 43200` - suggested lease time is 30 days, but you can set any lease time, just keep in mind that it should long-term.

<Highlight color="red">какой тут указать размер депозита и время аренды - Зуля придумает</Highlight>

And then you are done! Check that your offer is on blockchain using the [offers get](/developers/cli_commands/offers/offers/get) command:

```
./spctl offers get value <offer id>
```

Where:
* `offer id` can be found in the `config.json` located in the Provider Tools root directory.

<img src={require('./../images/cli_guides_providers_offers_6.png').default} width="500" height="auto"/>

## **Step 6 - Marketplace GUI Moderation**

By default, your offer is assigned to **Unmoderated** category in the Marketplace GUI. This category is for new offers that have not yet been reviewed by the Super team. Generally, we don't recommend our users to run offers from this category because we don't know if they even work. That said, Super Protocol is a permissionless cloud, so anyone can create and run what they like. 

If you would like to have your offer reviewed by the Super team and moved to the **Approved** category in the Marketplace GUI, then please follow the process outlined in the [**Moderation Guidelines**](/developers/marketplace/moderation/).

## **Step 7 - Keeping your offer active**

Please see below the things that you as a provider need to keep track of.

### Lease on uploaded offer content

:::warning Make sure your storage order doesn't end!
If you choose to create an [order for storage](/developers/cli_commands/files/upload), then please keep track of the balance and replenish it in time.
:::

If the storage expires, then the TEE won't be able to access your [uploaded offer content](/developers/cli_guides/providers_offers#upload-offer-content) and the customer order will fail. Use the [orders replenish-deposit](/developers/cli_commands/orders/replenish-deposit) command to add tokens to the balance of the storage order.

If an order fails due to a provider fault, then the offer will be made Inactive in the Marketplace GUI.

### Lease on Execution Controller

:::warning Make sure your Execution Controller order doesn't end!
Please keep track of the balance and replenish it in time.
:::

Your [Execution Controller order](/developers/cli_guides/providers_offers#creating-an-ec-order) has to remain active all the time and be ready to authorize your offer. Use the [orders replenish-deposit](/developers/cli_commands/orders/replenish-deposit) command to add tokens to the balance of the Execution Controller order.

### Disabling your offer

Please be a responsible provider. If you no longer wish to provide products and services on Super Protocol, then please [disable your offer](/developers/cli_commands/offers/offers/disable).

## **FAQ**

### Updating provider info

To update provider information (name, description, associated Action and Token Receiver accounts), you have to use the [**providers update**](/developers/cli_commands/providers/update) SPCTL command. For this you will need to make changes to the `provider.json` that you saved while creating the provider in [Step 4](/developers/cli_guides/providers_offers#create-provider-and-offer).

### Updating offer info

**For offer description:**

Modify the `offer.json` that you prepared in [Step 3](/developers/cli_guides/providers_offers#offer-description) and then run the [**offers update**](/developers/cli_commands/offers/offers/update) SPCTL command.

**For offer requirements (slots):**

Modify the `offer-slot.json` that you prepared in [Step 3](/developers/cli_guides/providers_offers#offer-requirements) and then run the [**offers update-slot**](/developers/cli_commands/offers/slots/update-slot) SPCTL command.

Similarly, you can also use the [offers add-slot](/developers/cli_commands/offers/slots/add-slot) command to add another slot and [offers delete-slot](/developers/cli_commands/offers/slots/delete-slot) to remove a slot.

### Creating additional offers

To create a new offer in addition to an existing one on the same provider, you will need to go through most of the process once again.

1. Rename or otherwise save the `<offerType>-execution-controller` folder. The newly created offer will overwrite the `.env` file and you might still need it to manage the Execution Controllers for your previous offers.
2. Go through Steps 2-6. And as always, keep an eye on Step 7.

If for some reason you will need to re-create an EC order, use the appropriate `.env` for that offer. As a rule, each of your offers should have its own EC order. Technically, a single EC order can support multiple offers, but it's better to separate to avoid conflicts.

### Enabling / Disabling offers

If you no longer want to provide products and services on Super Protocol, please disable your offer using the [offers disable](/developers/cli_commands/offers/offers/disable) SPCTL command. This will not delete your offer, just make it unavailable to order. Similarly, if you want to reinstate it back to active status, use the [offers enable](/developers/cli_commands/offers/offers/enable) command.

### Orders marked Inactive

Offers may be flagged as **Inactive** in Marketplace GUI in two cases:
* If the offer contents uploaded to Storj are no longer accessible because the lease expired. In this case your offer will have to be recreated: due confidentiality and security we cannot change the resource link in an active offer;
* If the lease on the order with your Execution Controller has expired. In this case you can create a new EC order, contact our support and we will re-active your offer.

### How to troubleshoot

If any issue occurs while creating an offer or its slot, you can always check the error details in the `error.log` file located in `tool` directory in Provider Tools directory and take action or contact our support.

### Support

Please feel free to ask us any questions and provide feedback in [Discord](https://discord.com/invite/superprotocol) in the **#developers** channel.