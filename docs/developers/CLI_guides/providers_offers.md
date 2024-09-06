---
id: "providers_offers"
title: "Providers and Offers"
slug: "/cli_guides/providers_offers"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide explains how to register a _provider_ on Super Protocol and create _solution_ and _data offers_. As a provider, you can monetize your offers by leasing your products to customers.

:::info Testnet limitations

As of Testnet 5, you can only create solution and data offers. The ability to create _storage_ and _compute offers_ will be available in future releases. Monetization is only possible with test TEE tokens until the project goes to Mainnet.

:::

Confidentiality and decentralization ensure that customers can only use your offers in their orders on your terms. In other words, users cannot download, modify, or otherwise access your solution or data without your permission, even when they use it in their orders. Confidentiality protects both providers and customers.

## Requirements

This guide requires a general understanding of Super Protocol basic concepts such as _Marketplace_, _orders_, _offers_, _slots_, etc. Learn about [Super Protocol fundamentals](/developers/fundamentals) before proceeding.

To set up a provider and create offers, you need:

- Linux or macOS operating system. On Windows, install [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux).
- Super Protocol Testnet access. If you do not have it yet, [apply to join](/testnet/). The Super Protocol team sends out invites daily, but it may take several days if the number of requests is high. You can ask any Community Manager on the [Super Protocol Discord server](https://discord.gg/superprotocol) about the status of your request. When your access is ready, you will receive an email with your _Testnet user account_:
  + _Testnet user account address_: the account public key
  + _Testnet private key_: to import the Testnet wallet to MetaMask
  + _Testnet access token_: to receive free test TEE and POL tokens.
- [SPCTL](/developers/cli_guides/configure)—Super Protocol CLI tool for uploading your offers and creating an Offer Provisioner order.
- [Storj](https://www.storj.io/) account, either Free Trial or Pro (optional).

### Set up Provider Tools

_Provider Tools_ is a CLI application necessary to set up providers and create offers.

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
To install Provider Tools on Windows, create a separate directory, launch WSL from PowerShell, and run the following command:
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

To set up a provider and create an active offer, complete the following steps:

1. [Prepare and upload the offer content](/developers/cli_guides/providers_offers#step-1-prepare-content). Use SPCTL to prepare your solution or data. Then, upload it to remote storage.
2. [Set up provider accounts](/developers/cli_guides/providers_offers#step-2-set-up-accounts). Create three provider accounts using Provider Tools.
3. [Configure the offer](/developers/cli_guides/providers_offers#step-3-configure-the-offer). Provide a general description of the offer, its properties, restrictions, and requirements.
4. [Register the provider and offer](/developers/cli_guides/providers_offers#step-4-create-the-provider-and-offer) on the blockchain.
5. [Deploy the offer on Super Protocol](/developers/cli_guides/providers_offers#step-5-run-offer-provisioner). Create an Offer Provisioner order to make your offer available for customers.
6. [Pass the Marketplace moderation](/developers/cli_guides/providers_offers#step-6-marketplace-moderation) to move your offer from the **Unmoderated** category to the **Approved** category in the Marketplace GUI.
7. [Keep your offer alive](/developers/cli_guides/providers_offers#step-7-keep-your-offer-active). Ensure the offer content remains available and the Offer Provisioner order keeps running.

## Step 1. Prepare content

Before customers can use your application or data in their orders, you must prepare, pack, and upload it to remote storage. _Offer content_ is prepared and packed solution or data.

Go to your SPCTL directory and create the offer content using your Testnet user account.

### Prepare the offer content

**For solution offers**

Use the [`solutions prepare`](/developers/cli_commands/solutions/prepare) command. It will pack and sign the solution with [Gramine](https://gramineproject.io/) to prepare it for execution inside a Trusted Execution Environment. The command will create a TAR.GZ archive with the solution and a metadata JSON file.

You can find a detailed example of preparing a Python solution in the [Python deployment guide](/developers/deployment_guides/python/solution_prep).

**For data offers**

To prepare data, put it into a TAR.GZ archive. Use the following command:

```
tar -czvf <offerContentArchive> -C <dataPath> .
```

Replace `<offerContentArchive>` with the desired name of the output archive. Replace `<dataPath>` with the relative path to the directory with your data. Ensure no hidden or system files end up in the archive. Do not omit the dot at the end of the command. 

For example:

```
tar -czvf dataset1.tar.gz -C ./mydataset .
```

### Upload offer content

You must upload your offer content to remote storage so the compute provider can download it and use it in customers' orders. There are two ways to do so:

- Create a storage order
- Upload to a Storj account.

Both ways have pros and cons. Pick the one that suits you better.

**Create a storage order**

It is a simpler and quicker way to upload offer content if you do not have a Storj account and have not configured SPCTL to use it. However, you must regularly check the storage order and [keep it alive](/developers/cli_guides/providers_offers#lease-on-uploaded-offer-content). Otherwise, your offer content will eventually become unavailable.

Execute the following [`files upload`](/developers/cli_commands/files/upload) command to create a storage order on Super Protocol with your offer content:

```
./spctl files upload <offerContentArchive> --storage 25,33 --min-rent-minutes 43200
```

Where
- `<offerContentArchive>` is the name of the archive file with your prepared solution or data.
- `--storage 25,33` is the slot ID 33 of the storage offer ID 25. The maximum disk capacity for this slot is 0.977 GB; you may choose [another slot](https://marketplace.superprotocol.com/storage?offer=offerId%3D25&tab=pricing) that suits your offer content better.
- `--min-rent-minutes 43200` is the lease time set to 30 days. The offer content will be available for that period. You can make the lease time shorter or longer. You can also [replenish the balance](/developers/cli_commands/orders/replenish-deposit) later to prolong the storage order.

As a result, SPCTL generates the `resource.json` file with information for a compute provider to access your uploaded offer content. Copy this file to the Provider Tools directory. This file also contains the storage order ID. Use it to check the storage order and replenish the deposit if necessary.

You can check all your orders, including storage orders, by using the [`orders list`](/developers/cli_commands/orders/list) command. Note that you cannot see your storage orders in the Marketplace GUI.

**Upload to a Storj account**

This way of uploading your content is more stable and provides more control. It is also less hassle in the long term since you do not need to keep a storage order running. As a downside, you must have a Storj account and [configured SPCTL](/developers/cli_guides/configure) to use it.

:::note

Both Free Trial and Pro Storj accounts are suitable. However, if you have a free Storj account, your files will become unavailable after the end of the trial period.

:::

Execute the following [`files upload`](/developers/cli_commands/files/upload) command to upload your offer content to Storj using SPCTL:

```
./spctl files upload <offerContentArchive>
```

Replace `<offerContentArchive>` with the name of the archive with your prepared solution or data.

As a result, SPCTL generates the `resource.json` file with information for TEE on how to access your uploaded offer content. Copy this file to the Provider Tools directory.

---

**Expected step results:**
- Prepared, packed, and uploaded offer content
- `resource.json` with information on how to access the offer content.

## Step 2. Set up accounts

Offer providers need the following Super Protocol accounts:

- _Testnet user account_. the Testnet account provided by Super Protocol
- Three _provider accounts_:
  + _Authority account_: can change provider's records; the main provider account
  + _Action account_: executes actions on behalf of the authority account
  + _Token receiver account_: receives rewards in TEE tokens for providing offers on Super Protocol.

### Create accounts

Use Provider Tools to generate all three provider accounts.

Go to the directory where you downloaded Provider Tools and run the `./provider-tools setup` command. The tool will request your Testnet Access Token and then ask if you need to create the provider accounts:

`Do you need to generate a new Authority account?`<br/>
Select `Yes`.

`Do you need to generate a new Action account?`<br/>
Select `Yes`.

`Do you need to generate a new TokenReceiver account?`<br/>
Select `Yes`.

Alternatively, you can use previously created Polygon accounts. Create them through MetaMask and then follow [this guide](https://docs.polygon.technology/tools/wallets/metamask/add-polygon-network/) to add the Polygon Amoy Testnet network. Select `No` in the menu when asked to generate new accounts and enter their private keys.

Import these accounts to MetaMask using their private keys to get their addresses and better control over the balances.

---

**Expected step results:**

- Three provider accounts: authority, action, and token receiver
- `provider-tools-config.json` with private keys to the provider accounts.

## Step 3. Configure the offer

Before placing your offer on a blockchain, you must provide its general description, restrictions, and requirements. For this, you must create two JSON files in the Provider Tools root directory:

- General offer description and dependencies
- Offer requirement slot.

### Offer description

Create the first JSON file in the Provider Tools directory. In this guide, it is called `offer-info.json`, but you can choose any name you want.

:::note

Your offer must be well-documented, operational, and not contain anything illegal. Refer to the [moderation guidelines](/developers/marketplace/moderation/) for more details.

:::

Copy and add the following to `offer-info.json` file:

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

Fill in the following values:

- `name`: enter the desired name of your offer.
- `group`: leave it as `0`.
- `cancelable`: leave it as `False`.
- `offerType`: enter either `2` for a solution offer or `3` for a data offer.
- `description`: enter the description of your offer, it may contain HTML.
- `restrictions`: specify your offer dependencies. If your offer depends on existing offers, for example, on [Python Base Image](https://marketplace.superprotocol.com/solutions?offer=offerId%3D5) or [Node.js Base Image](https://marketplace.superprotocol.com/solutions?offer=offerId%3D6):
  + `offers`: state the IDs of such required offers, including the IDs of their dependencies. Put each ID in quotation marks and separate with a comma. See the examples below.
  + `types`: state the types of the required offers. The type must be either `2` for a solution offer in `"offers"` or `3` for a data offer in `"offers"`. If there are several IDs in `"offers"`, state the type for each of them. Put each number in quotation marks and separate with a comma. See the examples below.

Refer to the documentation of the [`offers update`](/developers/cli_commands/offers/offers/update) command to learn more.

**Example 1**

 For a solution offer identical to [Image Classification](/developers/offers/python-image), the part of `offer-info.json` that you have to fill out should look like this:

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

**Example 2**

For a data offer identical to [Image Classification Dataset #1](https://marketplace.superprotocol.com/data?offer=offerId%3D18), the part of `offer-info.json` that you have to fill out should look like this:

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

Users must use it with the Image Classification solution offer (ID 8), so there is `"8"` in `"offers"`. Image Classification solution, in turn, requires Python Base Image solution offer (ID 5), so you must include its ID as well. Each ID is in quotation marks and separated by a comma: `"offers": ["8","5"]`

Further, you must specify the type for every offer in `restrictions`. Both Image Classification and Python Base Image are solution offers, hence `"types": ["2","2"]`.

To get more examples, check existing offers via the Marketplace GUI:

<img src={require('../images/cli_guides_providers_offers_1.png').default} width="auto" height="auto"/>

<br/>

<img src={require('../images/cli_guides_providers_offers_2.png').default} width="auto" height="auto"/>

<br/>

Or via CLI using the SPCTL [`offers get`](/developers/cli_commands/offers/offers/get) command:

```
./spctl offers get value 8
```

<img src={require('../images/cli_guides_providers_offers_3.png').default} width="auto" height="auto"/>

<br/>

### Offer requirements

You must specify the configuration required by your offer. Each requirement slot has its price, either Fixed or Per Hour. Depending on the requirements, the customer will select a compute offer configuration that cannot be lower than your requirements. Read more about [Slots and Options](/developers/fundamentals/slots).

Create the second JSON file. In this guide, it will be called `offer-slot.json`, but you can choose any name you want.

The following is an `offer-slot.json` template file with example values:

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

Copy it to your `offer-slot.json` file and modify all the values as necessary. Since this is your offer, only you know the [price](/developers/fundamentals/orders#cost-and-pricing) and compute configuration your solution or data needs to run. Every offer can have multiple requirements slots. You must create a separate JSON file for each slot.

Refer to the [`offers add-slot`](/developers/cli_commands/offers/slots/add-slot) command's documentation to learn more about the objects and strings in this file.

To get more examples, check existing offers via the Marketplace GUI:

<img src={require('../images/cli_guides_providers_offers_4.png').default} width="auto" height="auto"/>

<br/>

Or via CLI using the [offers get-slot](/developers/cli_commands/offers/slots/get-slot) command:

```
./spctl offers get-slot value --offer 8 --slot 4
```

<img src={require('../images/cli_guides_providers_offers_5.png').default} width="300" height="auto"/>

<br/>

---

**Expected step result:**
- `offer-info.json` with the offer description
- `offer-slot.json` with offer requirements, there may be more than one such file.

## Step 4. Register the provider and offer

At this point, you should have the following files in the Provider Tools directory:

- `provider-tools-config.json` with the credentials for the three provider accounts
- `offer-info.json` with the description of the offer
- `offer-slot.json`, one or several, with the required slots for the offer
- `resource.json` with information for TEE to access your uploaded offer content.

Run the following command in the Provider Tools directory to register your offer:

```
./provider-tools register <offerType> --result ./resource.json
```

Replace `<offerType>` with either `data` or `solution`.

The `register` command initiates a series of steps:

1. Provider Tools downloads a service copy of SPCTL into a hidden directory `~/.provider-tools`. Do not use this copy of SPCTL to run commands.

2. Provider Tools checks whether the provider with the Authority Account specified in `provider-tools-config.json` is already registered on the blockchain.
  + If the provider exists, the prompt will go to the next step.
  + If the provider does not exist, Provider Tools asks you to create one. Specify the desired provider name and write a short description. Provider Tools also prompts you to save the provider info to a JSON file in case you need to [update](/developers/cli_guides/providers_offers#updating-provider-info) the provider description later.

3. Provider Tools asks if this provider already has a solution or data offer created on the blockchain. If you want to create a new offer, select `No`. Provider Tools then asks for the `offer-info.json` and `offer-slot.json` from [Step 3](/developers/cli_guides/providers_offers#step-3-configure-the-offer).

When done, you will see a command in the output to launch an Offer Provisioner order in [Step 5](/developers/cli_guides/providers_offers#step-5-run-offer-provisioner). It should look something like this:

```
# To deploy this offer to SuperProtocol, use the following command:

./provider-tools deploy solution --path "/mnt/hdd/provider-tools/solution-execution-controller"
```

Provider Tools also creates a new directory `solution-execution-controller` or `data-execution-controller`, depending on your order type. This directory contains two files—`.env` and `config.json`—with all the necessary artifacts to launch an Offer Provisioner order in [Step 5](/developers/cli_guides/providers_offers#step-5-run-offer-provisioner). Note that the `.env` file is hidden.

### Provider SPCTL

Provider Tools also creates a provider SPCTL configuration file in its root directory. Its name is similar to `spctl-config-0xB9f0b7bBDbAe9fBe3E60BdC567e253f503605BAa.json`, where `0xB9f0b7bBDbAe9fBe3E60BdC567e253f503605BAa` is your authority account address. This SPCTL config allows you to manage your provider and offers.

Rename this file to `config.json` so SPCTL can recognize it as its configuration file. Copy or [download](/developers/cli_guides/configure) SPCTL to the Provider Tools directory. It is your provider SPCTL.

Alternatively, copy this provider's SPCTL config to your SPCTL directory. Use the `--config` option with [SPCTL commands](/developers/cli_commands) to manage your provider and orders. For example:

```
./spctl orders list --my-account --type tee --config spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAa.json
```

Use your the provider SPCTL to perform any provider- and offer-related tasks: 
- update your provider information
- create and manage offers
- create and manage Offer Provisioner orders.

---

**Expected step results:**
- Your provider is created on the blockchain.
- Your solution or data offer is created on the blockchain. You can find its ID and private key in `provider-tools-config.json`.
- `execution-controller` directory with two files necessary to run Offer Provisioner.
- A JSON file with configuration for your provider SPCTL.

## Step 5. Run Offer Provisioner

_Offer Provisioner_ is a utility application for solution and data providers. It enables customers to launch orders that use community offers. Offer Provisioner is a critical part of running and maintaining an active community offer.

Every five minutes, Offer Provisioner checks for new orders that use your active solution or data offer. When found, the application decrypts the order with its private key and allows it to be processed securely.

Every active offer must have an Offer Provisioner order running. However, you can have a single Offer Provisioner order for several offers. Read how to [Create additional offers](/developers/cli_guides/providers_offers/#create-additional-offers) to get more information.

Without a response from Offer Provisioner, it is impossible to process an order. If your offer fails to respond for 15 minutes, the system marks it as potentially abandoned by moving it into the **Inactive** category. You can reactivate an inactive offer by contacting the Super Protocol team on Discord in the [#developers](https://discord.com/channels/951018794590023681/1177643255198920737) channel. Refer to the [moderation guidelines](/developers/marketplace/moderation/).

### Create an Offer Provisioner order

You should have received the command to launch an Offer Provisioner order in the output when you created the provider and offer in the [previous step](/developers/cli_guides/providers_offers#create-provider-and-offer). It should look like the following:

```
./provider-tools deploy <offerType> --path "/absolute/path/to/execution-controller"
```

Where
- `<offerType>` is either `solution` or `data`, depending on your offer type.
- `/absolute/path/to/execution-controller` is the full path to the `execution-controller` directory inside the Provider Tools directory.

For example:

```
./provider-tools deploy data --path "/mnt/hdd/provider-tools/data-execution-controller"
```

When the order is created, you will see the ID of the Offer Provisioner order in the terminal output. For example:

```
{"Successfully created workflow with id: 3394. You can go to https://marketplace.superprotocol.com/order/3394 to track order status."}
```

Alternatively, you can create an Offer Provisioner order manually. Pack the content of the `execution-controller` directory (`config.json` and `.env`) into a TAR.GZ archive and upload it using the [`files upload`](/developers/cli_commands/files/upload) command. Add the resulting `resource.json` to the order as data and the Offer Provisioner solution offer (ID 26) as a solution using either Marketplace GUI or the `workflows create` SPCTL command.

Check that your offer is on the blockchain using the [offers get](/developers/cli_commands/offers/offers/get) command:

```
./spctl offers get value <offerID>
```

Replace `<offerID>` with the ID of your offer. You can find it in `provider-tools-config.json` in the Provider Tools directory.

<img src={require('../images/cli_guides_providers_offers_6.png').default} width="500" height="auto"/>

<br/>

:::note

Be a responsible provider. If you no longer want to provide an application or data on Super Protocol, [disable the offer](/developers/cli_guides/providers_offers#enabledisable-offers).

:::

## Step 6. Marketplace moderation

Every new offer appears in the **Unmoderated** category in the Marketplace GUI. This category is for the offers unreviewed by the Super Protocol team. Users can add such offers to their orders. However, there is a risk they may not work.

If you want the Super Protocol team to review your offer and move it to the **Approved** category in the Marketplace GUI, follow the [moderation guidelines](/developers/marketplace/moderation/).

## Step 7. Keep your offer active

As a provider, you must ensure your offer stays active. Keep track of the storage order with the offer content and the Offer Provisioner order. If a customer's order fails due to a provider fault, your offer becomes Inactive in the Marketplace GUI.

### Lease on uploaded offer content

:::warning Important!

Ensure your storage order does not end.

If you created a [storage order](/developers/cli_commands/files/upload) for your offer content in [Step 1](/developers/cli_guides/providers_offers#upload-offer-content), keep track of the balance and replenish it in time.

:::

If the storage order expires, the TEE can no longer access your uploaded offer content, and the customer order will fail. Execute the [`orders list`](/developers/cli_commands/orders/list) SPCTL command from your user account to get the list of your storage orders:

```
./spctl orders list --my-account --type storage
```

Use the [`orders get`](/developers/cli_commands/orders/get) command to check the total and unspent deposits. Use the [`orders replenish-deposit`](/developers/cli_commands/orders/replenish-deposit) command to add tokens to the balance of the storage order.

### Lease on Offer Provisioner

:::warning Important!

Ensure your Offer Provisioner order does not end.

Keep track of the balance and replenish it in time. Without a response from Offer Provisioner, it is impossible to process a customer's order, and your offer will become Inactive.

:::

Execute the [`orders list`](/developers/cli_commands/orders/list) command using the provider SPCTL to get the list of your Offer Provisioner orders:

```
./spctl orders list --my-account --type tee
```

An [Offer Provisioner order](/developers/cli_guides/providers_offers#create-an-offer-provisioner-order) must always be active and ready to authorize its offer.

Use the [`orders get`](/developers/cli_commands/orders/get) command to check the total and unspent deposits. Use the [`orders replenish-deposit`](/developers/cli_commands/orders/replenish-deposit) command to add tokens to the Offer Provisioner order.

## FAQ

### Update provider info

It is possible to update provider information such as name, description, action account, and token receiver account. Make changes to `provider.json` you saved in [Step 4](/developers/cli_guides/providers_offers#create-provider-and-offer) and use the [`providers update`](/developers/cli_commands/providers/update) SPCTL command from your current action account.

If you changed your action account address, update the Provider SPCTL's `config.json` with the new action account private key.

### Update offer info

**Offer description:**

Modify `offer-info.json` you have prepared in [Step 3](/developers/cli_guides/providers_offers#offer-description) and then run the [`offers update`](/developers/cli_commands/offers/offers/update) command using the Provider SPCTL.

**Offer requirements (slots):**

Modify `offer-slot.json` you have prepared in [Step 3](/developers/cli_guides/providers_offers#offer-requirements) and then run the [`offers update-slot`](/developers/cli_commands/offers/slots/update-slot) command using the Provider SPCTL.

Similarly, you can use the [`offers add-slot`](/developers/cli_commands/offers/slots/add-slot) command to add another slot and the [`offers delete-slot`](/developers/cli_commands/offers/slots/delete-slot) command to remove a slot.

### Create additional offers

To create a new offer in addition to an existing one on the same provider, back up the existing `data-execution-controller` or `solution-execution-controller` directory. Then, go through the guide again, starting with [Step 2](/developers/cli_guides/providers_offers#step-2-prepare-content).

After you register the new offer in [Step 4](/developers/cli_guides/providers_offers/#step-4-create-the-provider-and-offer), Provider Tools adds a new object into the `PROVIDER_OFFERS_JSON` array in the `.env` file. Cancel the previous Offer Provisioner order and launch a new one using this updated `.env` file and `config.json` from the same `execution-controller` directory. This new Offer Provisioner order will serve both of your offers simultaneously.

You can also manually edit the `PROVIDER_OFFERS_JSON` array in the `.env` file to add or remove offers. Recreate the Offer Provisioner order to apply changes.

### Enable/disable offers

Disable your offer if you no longer want to provide your application or data on Super Protocol. Execute the [`offers disable`](/developers/cli_commands/offers/offers/disable) command from your Provider SPCTL:

```
./spctl offers disable <offerId>
```

Replace `<offerId>` with the ID of the offer you want to disable.

It will make the offer unavailable to use but will not delete it. Later, if you want to reinstate it back to active status, use the [`offers enable`](/developers/cli_commands/offers/offers/enable) command.

### Inactive offers

Offers may be flagged as Inactive in the Marketplace GUI for two reasons:

- If the offer content is no longer accessible because its [storage order has expired](/developers/cli_guides/providers_offers#lease-on-uploaded-offer-content). Due to confidentiality and security, the Super Protocol team cannot change the resource link in offers. In this case, you have to create your offer again.
- If the lease on the [Offer Provisioner order has expired](/developers/cli_guides/providers_offers#lease-on-offer-provisioner). Create a new Offer Provisioner order and contact Super Protocol Community Managers [Discord](https://discord.gg/superprotocol). They will reactivate your offer.

### Troubleshooting

If there is an error, check `error.log` in the Provider Tools directory and `error.log` in `~/.provider-tools/`. It may help you identify the problem.

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol). The Community Managers will be happy to help you.