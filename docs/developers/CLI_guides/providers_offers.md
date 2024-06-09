---
id: "providers_offers"
title: "Providers and Offers"
slug: "/cli_guides/providers_offers"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create and manage providers and offers

## About

This guide explains how to register a _provider_ on Super Protocol and create _solution_ and _data offers_. As a provider, you can monetize your offers by leasing your products to clients.

Confidentiality and decentralization ensure that customers can only use your offers in their orders on your terms. In other words, users cannot download, modify, or otherwise access your solution or data without your permission, even when they use it in their orders. Confidentiality protects both providers and customers.

:::info Testnet limitations

As of Testnet 5, you can only create solution and data offers. The ability to create _storage_ and _compute offers_ will be available in future releases. Monetization is only possible with test TEE tokens until the project goes to Mainnet.

:::

## Prerequisites

This guide requires a general understanding of Super Protocol basic concepts such as _Marketplace_, _orders_, _offers_, _slots_, etc. Learn about [Super Protocol fundamentals](/developers/fundamentals) before proceeding.

To set up a provider and create offers, you need:

- Computer with Linux or macOS operating system. On Windows, install [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux).

- Super Protocol Testnet access. If you do not have it yet, [apply to join](/testnet/). The Super Protocol team sends out invites daily, but it may take several days if the number of requests is high. You can ask any Community Manager on the [Super Protocol Discord server](https://discord.gg/superprotocol) about the status of your request. When your access is ready, you will receive an email with your Testnet credentials:
  + _Testnet Account address_ – the public key of Super testnet wallet;
  + _Private Key_ – the private key of the Super Protocol testnet wallet;
  + _Access Token_ – necessary to receive free test TEE and MATIC tokens.

- [SPCTL](/developers/cli_guides/) – Super Protocol CLI tool. You need it to upload your offers and create an Offer Provisioner order. Refer to the [SPCTL guide](/developers/cli_guides/configuring) to install and configure it.

- (optional) [Storj](https://www.storj.io/) account, either Free Trial or Pro.

### Set up Provider Tools

_Provider Tools_ is an application necessary to set up providers and create offers.

<Tabs>
  <TabItem value="linux" label="Linux" default>
To install Provider Tools on Linux, create a separate directory, open a terminal there, and run the following command:
```
curl -L https://github.com/Super-Protocol/provider-tools/releases/latest/download/provider-tools-linux-x64 -o provider-tools
chmod +x ./provider-tools
```
  </TabItem>
  <TabItem value="macos" label="macOS">
To install Provider Tools on macOS, create a separate directory, open Terminal there, and run the following command:
```
curl -L https://github.com/Super-Protocol/provider-tools/releases/latest/download/provider-tools-macos-x64 -o provider-tools
chmod +x ./provider-tools
```
  </TabItem>
  <TabItem value="windows" label="Windows">
To install Provider Tools on Windows, create a separate directory, open a WSL terminal window, and run the following command:
```
curl -L https://github.com/Super-Protocol/provider-tools/releases/latest/download/provider-tools-linux-x64 -o provider-tools
chmod +x ./provider-tools
```
  </TabItem>
</Tabs>

To avoid confusion, do not put Provider Tools in the same directory as your SPCTL.

:::note

Provider Tools and SPCTL is a work in progress. Super Protocol keeps optimizing the application and the offer creation and management process.

:::

## Main steps

To set up a provider and create an active offer, you must complete the following steps:

1. [Set up _provider accounts_](/developers/cli_guides/providers_offers#step-1-set-up-accounts). Besides the Testnet Account, there are three provider accounts you have to create using Provider Tools.

2. [Prepare and upload offer content](/developers/cli_guides/providers_offers#step-2-prepare-content). Use SPCTL to prepare your solution or data. Then, upload it to a remote storage.

3. [Configure the offer](/developers/cli_guides/providers_offers#step-3-configure-the-offer). You need to provide a general description of the offer, its properties, restrictions, and requirements.

4. [Create the provider and offer](/developers/cli_guides/providers_offers#step-4-create-the-provider-and-offer) on the blockchain.

5. [Deploy the offer on Super Protocol](/developers/cli_guides/providers_offers#step-5-run-offer-provisioner). _Offer Provisioner_ is an application that regularly checks for new orders that use your active offer and allows such orders to be processed.

6. [Pass the Marketplace moderation](/developers/cli_guides/providers_offers#step-6-marketplace-moderation) to move your offer from the Unmoderated category to Approved.

7. [Keep your offer alive](/developers/cli_guides/providers_offers#step-7-keep-your-offer-active). Ensure the offer content storage order and the Offer Provisioner order stay active.

## Step 1. Set up accounts

### Types of accounts

_User Account_ is the main wallet you use to create and manage orders. It is your Testnet Account provided by Super Protocol.

To become a provider, you also need three other accounts:

1. _Authority Account_ – to create your provider. It is your main provider account on Super Protocol.

2. _Action Account_ – to manage your provider and offers. This account executes actions on behalf of the Authority Account.

3. _Token Receiver Account_ – to receive rewards in TEE tokens for providing offers on Super Protocol.

---

### Create accounts

Use Provider Tools to generate the three provider accounts. Go to the directory where you downloaded Provider Tools and run the `./provider-tools setup` command.

The tool will request your Testnet Access Token and then ask if you need to create the provider accounts:

`Do you need to generate a new Authority account?`<br/>
Select `Yes`.

`Do you need to generate a new Action account?`<br/>
Select `Yes`.

`Do you need to generate a new TokenReceiver account?`<br/>
Select `Yes`.

Alternatively, you can use your own previously created Polygon accounts. Create them through Metamask and then follow [this guide](https://docs.polygon.technology/tools/wallets/metamask/add-polygon-network/) to add the Polygon Amoy Testnet network. Select `No` in the menu when prompted to generate new accounts and enter their private keys.

---

**Expected step result:**

* `provider-tools-config.json` with private keys to your provider accounts.

## Step 2. Prepare content

Before clients can use your application or dataset in their orders, you must prepare, pack, and upload it to remote storage. _Offer content_ is prepared and packed solution or data.

Go to your SPCTL directory and create the offer content using your User Account.

### Prepare the offer content

**For solution offers**

Before a solution can be executed inside an Intel SGX confidential enclave (_Trusted Execution Environment_ or _TEE_), you have to pack and sign it with Gramine (to "graminize" it). To prepare and pack your solution, use the [`solutions prepare`](/developers/cli_commands/solutions/prepare) command. It will create a TAR.GZ archive with your solution and a JSON file with essential metadata.

You can find a detailed example of preparing a Python solution in the [Python deployment guide](/developers/deployment_guides/python/solution_prep).

**For data offers**

To prepare data, put it into a TAR.GZ archive. Use the following command (do not miss the dot at the end of the command):

```
tar -czvf OFFER_CONTENT.tar.gz -C ./DATA .
```

Replace `OFFER_CONTENT.tar.gz` with the desired name of the output archive. Replace `./DATA` with the relative path to the directory with your data.

For example:

```
tar -czvf dataset1.tar.gz -C ./mydataset .
```

Ensure no hidden or system files end up in the archive.

### Upload offer content

You must upload your offer content to remote storage so TEE can download it and use it in clients' orders. Use the following [`files upload`](/developers/cli_commands/files/upload) command to create a storage order on Super Protocol with your offer content:

```
./spctl files upload OFFER_CONTENT.tar.gz --storage 25,33 --min-rent-minutes 43200
```

Where:
- `OFFER_CONTENT.tar.gz` is the name of the archive with your prepared solution or data;
- `--storage 25,33` – slot 33 of storage offer 25. The maximum disk capacity for this slot is 0.977 GB; you may choose [another slot](https://marketplace.superprotocol.com/storage?offer=offerId%3D25&tab=pricing) that suits your offer content better;
- `--min-rent-minutes 43200` – the lease time is 30 days because the offer content must be available on demand. You can make the lease shorter or longer. You can also [replenish the balance](/developers/cli_commands/orders/replenish-deposit) later to prolong the storage order.

As a result, SPCTL generates the `resource.json` file with information for TEE to access your uploaded offer content. Copy this file to the Provider Tools directory.

You can check all your orders, including storage orders, using the [`orders list`](/developers/cli_commands/orders/list) command.

---

**Expected step result:**
* prepared, packed, and uploaded offer content;
* `resource.json` with information to access the offer content.

## Step 3. Configure the offer

Before placing your offer on a blockchain, you must provide its general description, restrictions, and required slots and options. For this, you must create two JSON files in the Provider Tools root directory.

### Offer description

Create the first JSON file in the Provider Tools directory. In this guide, it will be called `offer-info.json`, but you can choose any name you want.

:::note

Your offer must be well-documented, operational, and not contain anything illegal. Refer to the [moderation guidelines](/developers/marketplace/moderation/) for more details.

:::

Copy and add the format below into this JSON file:

```json title="offer-info.json"
{
  "name": "Name of your offer",
  "group": "0",
  "offerType": "",
  "cancelable": false,
  "description": "Description of your offer; it may include HTML",
  "restrictions": {
    "offers": [
      ""
    ],
    "types": [
      ""
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

Fill in the following fields:

- `name` – the name of your offer;
- `group` – leave it as `0`;
- `cancelable` – leave it as `False`;
- `offerType` – must be either `2` for a solution offer or `3` for a data offer;
- `description` – the description of your offer, it may contain HTML;
- `restrictions` – if your offer depends on existing offers (for example, on [Python Base Image](https://marketplace.superprotocol.com/solutions?offer=offerId%3D5) or [Node.js Base Image](https://marketplace.superprotocol.com/solutions?offer=offerId%3D6)), specify them here:
  + `offers` – state the IDs of such required offers, including the IDs of their dependencies. Put each ID in quotation marks and separate with a comma. See the examples below;
  + `types` – state the types of the required offers. The type must be either `2` for a solution offer in `offers` or `3` for a data offer in `offers`. If there are several IDs in `offers`, state the type for each of them. Put each number in quotation marks and separate with a comma. See the examples below.

**Example 1**: For a solution offer identical to [Image Classification](/developers/offers/python-image), the part of `offer-info.json` that you have to fill out should look like this:

```json
"name": "Image Classification",
"group": "0",
"offerType": "2",
"cancelable": false,
"description": "Machine-trained Python model that recognizes and classifies objects in an image<br/><br/>This demo solution is compatible with Image Classification Dataset #1 and #2.<br/><br/>It is also possible to use custom datasets. Refer to the documentation for detailed instructions.",
"restrictions": {
  "offers": [
    "5"
  ],
  "types": [
    "2"
  ]
}
```

Image Classification is a solution offer, hence `"offerType": "2"`. It depends on Python Base Image (ID 5), so there is `"offers": ["5"]` in `restrictions`. Python Base Image is a solution offer, hence `"types": ["2"]`.

**Example 2**: For a data offer identical to [Image Classification Dataset #1](https://marketplace.superprotocol.com/data?offer=offerId%3D18), the part of `offer-info.json` that you have to fill out should look like this:

```json
"name": "Image Classification Dataset #1",
"group": "0",
"offerType": "3",
"cancelable": false,
"description": "Dataset with images of various breeds of dogs<br/><br/>This demo dataset is compatible with the Image Classification solution. Refer to the documentation for detailed instructions.",
"restrictions": {
  "offers": [
    "8",
    "5"
  ],
  "types": [
    "2",
    "2"
  ]
}
```

Image Classification Dataset #1 is a data offer, hence `"offerType": "3"`.

Users must use it with the Image Classification solution offer (ID 8), so there is `"8"` in the requirements. Image Classification solution, in turn, requires Python Base Image solution offer (ID 5), so you must include its ID as well. Put each ID in quotation marks and separate with a comma: `"offers": ["8","5"]`.

Further, you must specify the type for every offer in `restrictions`. Both Image Classification and Python Base Image are solution offers, hence `"types": ["2","2"]`.

To get more examples, check existing offers via the Marketplace GUI:

<img src={require('./../images/cli_guides_providers_offers_1.png').default} width="auto" height="auto"/>

<br/>

<img src={require('./../images/cli_guides_providers_offers_2.png').default} width="auto" height="auto"/>

<br/>

Or via CLI using the SPCTL [`offers get`](/developers/cli_commands/offers/offers/get) command:

```
./spctl offers get value 8
```

<img src={require('./../images/cli_guides_providers_offers_3.png').default} width="auto" height="auto"/>

<br/>

Refer to the [`offers update`](/developers/cli_commands/offers/offers/update) command's documentation to learn more about other fields.

---

### Offer requirements

You must specify the values of the required slots and options for your offer. Each slot has its price, either Fixed or Per Hour. Depending on the requirements, the client will select a compute offer configuration, which cannot be lower than your requirements. Read more about the slots and options [here](/developers/fundamentals/slots).

Create second JSON file. In this guide, it will be called `offer-slot.json`, but you can choose any name you want.

Copy and add the following example format to your `offer-slot.json` file:

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

Modify all these fields as necessary. Since this is your offer, only you know the [pricing terms](/developers/fundamentals/orders#cost-and-pricing) and compute configuration your solution or data needs to run.

Refer to the [`offers add-slot`](/developers/cli_commands/offers/slots/add-slot) command's documentation to learn more about these fields.

Every offer you create may have multiple requirements slots. You must create a separate JSON file for each slot.

To get examples, check existing offers via the Marketplace GUI:

<img src={require('./../images/cli_guides_providers_offers_4.png').default} width="auto" height="auto"/>

<br/>

Or via CLI using the SPCTL [offers get-slot](/developers/cli_commands/offers/slots/get-slot) command:

```
./spctl offers get-slot value --offer 8 --slot 4
```

<img src={require('./../images/cli_guides_providers_offers_5.png').default} width="300" height="auto"/>

<br/>

---

**Expected step result:**
* `offer-info.json` with the offer description;
* `offer-slot.json` with offer requirements (slots and options); there may be more than one such file.

## Step 4. Create the provider and offer

At this point, you should have the following files in the Provider Tools directory:
* `provider-tools-config.json` with the credentials for Authority, Action, and Token Receiver Accounts;
* `offer-info.json` with the description of the offer;
* `offer-slot.json`, one or several, with the required slots for the offer;
* `resource.json` with information for TEE to access your uploaded offer content.

### Create provider and offer

Run the following command in the Provider Tools directory to register your offer:

```
./provider-tools register OFFER_TYPE --result ./resource.json
```

Replace `OFFER_TYPE` with either `data` or `solution`.

The `register` command initiates a series of steps. Firstly, Provider Tools downloads a service copy of SPCTL into a temporary directory. Do not use this copy of SPCTL to run commands.

Further, the Provider Tools checks whether the provider with the Authority Account specified in `provider-tools-config.json` is already registered on the blockchain. If the provider exists, the prompt will go to the next step.

If the provider does not exist, Provider Tools will ask you to create one. Specify the desired provider name and write a short description. Provider Tools will also prompt you to save the provider info to a JSON file in case you need to [update](/developers/cli_guides/providers_offers#updating-provider-info) the provider description later.

Finally, Provider Tools asks if this provider already has a solution or data offer created on the blockchain. If you want to create a new offer, select `No`. Provider Tools will ask for the `offer-info.json` and `offer-slot.json` from Step 3.

When done, Provider Tools creates a new directory `solution-execution-controller` or `data-execution-controller`, depending on your order type. This directory contains two files, `.env` and `config.json`, with all the necessary artifacts to launch an Offer Provisioner order in the [next step](/developers/cli_guides/providers_offers#step-5-run-offer-provisioner). Note that `.env` file is hidden.

### Action Account SPCTL

Provider Tools also creates an Action Account SPCTL configuration file in its root directory. Its name is similar to `spctl-config-0xB9f0b7bBDbAe9fBe3E60BdC567e253f503605BAa.json`, where `0xB9f0b7bBDbAe9fBe3E60BdC567e253f503605BAa` is your Action Account address. This SPCTL config allows you to manage your provider and offers.

Rename this file to `config.json` so SPCTL can recognize it as its configuration file. Copy or [download](/developers/cli_guides/configuring) SPCTL to the Provider Tools root directory.

Alternatively, you can copy this Action Account SPCTL config to your SPCTL directory without renaming it. Use the `--config` option with [SPCTL commands](/developers/cli_commands) to manage your provider and orders.

Use must use your Action Account to perform any provider- and offer-related tasks: update your provider and offer information, enable and disable offers, and create and manage Offer Provisioner orders.

---

**Expected step result:**
- Your provider is created on the blockchain. The provider's address is its Authority Account public key. To get it, find the Authority Account private key in `provider-tools-config.json` and import your Authority Account into MetaMask.
- Your solution or data offer is created on the blockchain. You can find its ID and private key in `provider-tools-config.json`.
- `execution-controller` directory with two files necessary to run Offer Provisioner.
- A JSON file with SPCTL configuration for your Action Account.

## Step 5. Run Offer Provisioner

### About Offer Provisioner

Offer Provisioner is a utility application for solution and data providers. It is a crucial part of running and maintaining an active offer. It enables clients to launch orders using the provider's offers.

Every five minutes, Offer Provisioner checks for new orders that use your active solution or data offer. When found, the application decrypts the order with its private key and allows it to be processed securely.

Without a response from Offer Provisioner, it is impossible to process an order. If your offer fails to respond for 15 minutes, the system marks it as potentially abandoned by moving it into the Inactive category.

If your offer became Inactive, you can reactivate it by contacting the Super Protocol team on [Discord](https://discord.gg/superprotocol) in the [#developers](https://discord.com/channels/951018794590023681/1177643255198920737) channel. Refer to the [moderation guidelines](/developers/marketplace/moderation/).

Every active offer must have a dedicated Offer Provisioner order running.

### Create an Offer Provisioner order

Execute the following command to launch an Offer Provisioner order:

```
./provider-tools deploy OFFER_TYPE --path "/ABSOLUTE/PATH/TO/OFFER_TYPE-execution-controller"
```

Replace `OFFER_TYPE` with either `solution` or `data`, depending on your offer type. Replace the path in the quotation marks with the full path to the `execution-controller` directory inside the Provider Tools directory. For example:

```
./provider-tools deploy solution --path "/mnt/hdd/provider-tools/solution-execution-controller"
```

Check that your offer is on the blockchain using the [offers get](/developers/cli_commands/offers/offers/get) command:

```
./spctl offers get value OFFER_ID
```

Replace `OFFER_ID` with your offer ID. You can find it in the `provider-tools-config.json` in the Provider Tools directory.

<img src={require('./../images/cli_guides_providers_offers_6.png').default} width="500" height="auto"/>

<br/>

Be a responsible provider. If you no longer want to provide an application or data on Super Protocol, [disable its offer](/developers/cli_guides/providers_offers#enabledisable-offers).

## Step 6. Marketplace moderation

Every new offer appears in the Unmoderated category in the Marketplace GUI. This category is for the offers unreviewed by the Super Protocol team. Users can add such offers to their orders because Super Protocol is a permissionless cloud. However, there is a risk they may not work.

If you want the Super Protocol team to review your offer and move it to the Approved category in the Marketplace GUI, follow the [moderation guidelines](/developers/marketplace/moderation/).

## Step 7. Keep your offer active

As a provider, you must ensure your offer stays active. Keep track of the storage order with the offer content and the Offer Provisioner order. If a customer's order fails due to a provider fault, your offer becomes Inactive in the Marketplace GUI.

### Lease on uploaded offer content

:::warning Important!

Ensure your storage order does not end. If you created a [storage order](/developers/cli_commands/files/upload) for your offer content in [Step 2](/developers/cli_guides/providers_offers#upload-offer-content), keep track of the balance and replenish it in time.

:::

If the storage expires, the TEE can no longer access your uploaded offer content, and the customer order will fail. Execute the [`orders list`](/developers/cli_commands/orders/list) SPCTL command from your User Account to get the list of your storage orders:

```
./spctl orders list --my-account --type storage
```

Use the [`orders get`](/developers/cli_commands/orders/get) command to check the total and unspent deposits. Use the [`orders replenish-deposit`](/developers/cli_commands/orders/replenish-deposit) command to add tokens to the balance of the storage order.

### Lease on Offer Provisioner

:::warning Important!

Ensure your Offer Provisioner order does not end. Keep track of the balance and replenish it in time. Without a response from Offer Provisioner, it is impossible to process a customer's order, and your offer will become Inactive.

:::

Execute the [`orders list`](/developers/cli_commands/orders/list) SPCTL command from your Action Account to get the list of your Offer Provisioner orders:

```
./spctl orders list --my-account --type tee
```

An [Offer Provisioner order](/developers/cli_guides/providers_offers#create-an-offer-provisioner-order) must always be active and ready to authorize its offer.

Use the [`orders get`](/developers/cli_commands/orders/get) command to check the total and unspent deposits. Use the [`orders replenish-deposit`](/developers/cli_commands/orders/replenish-deposit) command to add tokens to the Offer Provisioner order.

## FAQ

### Update provider info

It is possible to update provider information such as name, description, Action Account, or Token Receiver Account. Make changes to `provider.json` you saved in [Step 4](/developers/cli_guides/providers_offers#create-provider-and-offer) and use the [`providers update`](/developers/cli_commands/providers/update) SPCTL command from your current Action Account.

If you changed your Action Account address, update the Action Account's SPCTL `config.json` with the new Action Account Private Key.

### Update offer info

**Offer description:**

Modify `offer-info.json` you have prepared in [Step 3](/developers/cli_guides/providers_offers#offer-description) and then run the [`offers update`](/developers/cli_commands/offers/offers/update) command from your Action Account.

**Offer requirements (slots):**

Modify `offer-slot.json` you have prepared in [Step 3](/developers/cli_guides/providers_offers#offer-requirements) and then run the [`offers update-slot`](/developers/cli_commands/offers/slots/update-slot) command from your Action Account.

Similarly, you can use the [`offers add-slot`](/developers/cli_commands/offers/slots/add-slot) command to add another slot and the [`offers delete-slot`](/developers/cli_commands/offers/slots/delete-slot) command to remove a slot.

### Create additional offers

To create a new offer in addition to an existing one on the same provider, rename or otherwise back up the `solution-execution-controller` or `data-execution-controller` folder. The new offer will overwrite the `.env` file, which you need to manage the Offer Provisioner order for your existing offer.

Then, go through the whole process again, starting with [Step 2](/developers/cli_guides/providers_offers#step-2-prepare-content).

If you need to create an Offer Provisioner order for an existing offer, use `.env` of that offer. Every active offer must have its Offer Provisioner order running.

### Enable/disable offers

Disable your offer if you no longer want to provide your application or data on Super Protocol. Execute the [`offers disable`](/developers/cli_commands/offers/offers/disable) command from your Action Account:

```
./spctl offers disable OFFER_ID
```

Replace `OFFER_ID` with the ID of the offer you want to disable.

It will make the offer unavailable to use but will not delete it. If later you want to reinstate it back to active status, use the [`offers enable`](/developers/cli_commands/offers/offers/enable) command.

### Inactive orders

Offers may be flagged as Inactive in the Marketplace GUI for two reasons:

1. If the offer content is no longer accessible because its [storage order has expired](/developers/cli_guides/providers_offers#lease-on-uploaded-offer-content). Due to confidentiality and security, the Super Protocol team cannot change the resource link in offers. In this case, you have to create your offer again.

2. If the lease on the [Offer Provisioner order has expired](/developers/cli_guides/providers_offers#lease-on-offer-provisioner). Create a new Offer Provisioner order and contact Super Protocol Community Managers [Discord](https://discord.gg/superprotocol). They will reactivate your offer.

### Troubleshooting

If there is any issue with creating an offer or its slots, check the error details in the `~/.provider-tools/error.log` file. It may help you identify a problem.

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol). The Community Managers will be happy to help you.