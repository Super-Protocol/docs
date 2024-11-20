---
id: "log-in"
title: "How to Log In as a Web3 User"
slug: "/guides/log-in"
sidebar_position: 1
---

This guide provides step-by-step instructions on how to log in to the [Super Protocol Marketplace](https://marketplace.superprotocol.com/) as a Web3 user and set up the account.

Learn more about [user account types](/marketplace/account).

:::note

The Marketplace web app does not support mobile devices. Use a desktop or laptop with a screen resolution of at least 1280x720.

:::

## Step 1. Create a new wallet address

To log in as a Web3 user, you need the MetaMask browser extension and an Ethereum account or, in other words, ERC-20 wallet address.

:::note 

Super Protocol Marketplace is in an early beta stage, and bugs and unexpected behavior are possible. Although you can use an existing ERC-20 wallet address, it is recommended to create a new one specifically to test Super Protocol.

:::

If you do not have MetaMask installed, complete [Step 1-1](/marketplace/guides/log-in#step-1-1-install-metamask) to install it and create a new wallet address.

If you already have MetaMask installed, complete [Step 1-2](/marketplace/guides/log-in#step-1-2-add-new-account) instead to create a new wallet address.

### Step 1-1. Install MetaMask

Add the MetaMask extension to your browser from its [official website](https://metamask.io/) or directly from your browser's extension store. During the installation, choose **Create a new wallet**.

(image: Let's get started, agree checkbox, Create a new wallet button)
<br/>
<br/>

Create a password. This password will only unlock your MetaMask browser extension. It does not affect your future ERC-20 wallet address.

(image: Create password)
<br/>
<br/>

Secure your wallet address by creating, saving, and confirming a 12-word Secret Recovery Phrase.

(image: Secure your wallet)
<br/>
<br/>

When you are done, you will see the address of your new ERC-20 wallet in the MetaMask extension window.

(image: MetaMask)
<br/>
<br/>

Skip Step 1-2, as you already have a new wallet, and go directly to [Step 2](/marketplace/guides/log-in#step-2-add-the-amoy-testnet).

### Step 1-2. Add new account

If you already completed Step 1-1 and created a new wallet address, skip this step and go to [Step 2](/marketplace/guides/log-in#step-2-add-the-amoy-testnet).

To create a new ERC-20 wallet address, open the MetaMask window and click your current account name at the top of the window.

(image: account name highlighted)
<br/>
<br/>

Click **Add account or hardware wallet**.

(image: Select an account)
<br/>
<br/>

Click **Add a new Ethereum account**.

(image: Add account)
<br/>
<br/>

Type any desired account name and click **Add account**. If you wish to recover this wallet address later, save its Secret Key. You can find in the **Account details**.

(image: Select an account, menu opened)
<br/>

## Step 2. Add the Amoy testnet

In the MetaMask window, open the menu in the top-left corner and click **Add a custom network**.

(image: MetaMask, menu highlighted + Add a custom network))
<br/>
<br/>

Set the following parameters and press **Save**.

| **Field** | **Value** |
| :- | :- |
| Network name | Super Protocol Polygon Amoy Testnet |
| New RPC URL | https://amoy.polygon.superprotocol.com/hesoyam |
| Chain ID | 80002 |
| Currency symbol | POL |
| Block explorer URL | https://www.oklink.com/amoy |

You can change the network name if you like.

Switch to the newly added network.

(image: MetaMask, menu highlighted + Amoy))
<br/>

## Step 3. Connect the account

In the main Marketplace screen, press the **Enter Marketplace** button.

(images/ai-marketplace-07.png').default} width="800" height="auto" border="1"/>)
<br/>
<br/>

Select **MetaMask**.

(images/ai-marketplace-08.png').default} width="400" height="auto" border="1"/>)
<br/>
<br/>

In the MetaMask window that appears, click **Connect** and then **Confirm** the signature request.

(image: connect + confirm)
<br/>
<br/>

If you connect successfully, you will see your account address in the top-right corner of the Marketplace screen.

(image: account address highlighted)
<br/>

## Step 4. Request TEE and POL

Super Protocol users need two types of tokens:

- POL tokens: to pay for Polygon blockchain transactions.
- TEE tokens: to pay for offers and receive payments in Super Protocol.

Both types are necessary to place orders. During the testnet, Super Protocol provides free tokens for testing purposes. To request them, open the **Account** setting.

(image: account, menu)
<br/>
<br/>

Click the **Get TEE** and **Get POL** buttons. You will get tokens in a couple of minutes.

(image: buttons)
<br/>
<br/>

There is a limit on the daily amount of tokens you can get. Refer to the [Testnet Limitations](/marketplace/limitations).

:::warning

Do not send TEE and POL tokens to other accounts. Violators will be banned from using the Super Protocol Marketplace.

:::

## Step 5. Set up storage

You have two options of decentralized storage to upload files:

- **Super Protocol cloud**
- **Your Storj account**

**Super Protocol cloud** is the recommended default option for most users. It does not require additional setup. Feel free to select this option and skip the following instructions.

**Your Storj account** is intended for advanced Web3 users. It requires you to register and set up a Storj account.

Learn more about [types of storage](/marketplace/account/web3#storage).

### Set up Storj account

Register a [Storj](https://www.storj.io/) account if you do not have one yet. Both free Trial and Pro Storj accounts are suitable. However, with a Trial account, your files will become unavailable after the end of the trial period.

In the Storj account dashboard, create a new project and a bucket. Refer to the [Storj documentation](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/) for instructions on how to do it.

In the same Storj account dashboard, create two S3 Access Keys for this bucket. Creating an Access Key also generates a Secret Key:

- Access Key should look something like this: `jv7ke2msvqkyxffywr3qmc47ibxa`.
- Secret Key should look something like this: `jzbf5fgqz56nlun2jhttpjoiapmowvbeuarpzeqb2t2wiivij3jvg`.

One S3 Access Key should provide the **Write** and **Delete** permissions. The other one should provide the **Read** and **List** permissions. As a result, you should have two Access Keys and two Secret Keys. Refer to the [Storj documentation](https://storj.dev/dcs/getting-started#generate-s3-compatible-credentials) to learn how to generate S3 Access Keys.

### Set up Marketplace account

In the Marketplace web app, open the **Account** window.

(images/ai-marketplace-12.png').default} width="400" height="auto" border="1"/>)
<br/>
<br/>

Select the **Your Storj account** radio button, fill in the fields, and click **Save**.

(images/ai-marketplace-13.png').default} width="400" height="auto" border="1"/>)
<br/>
<br/>

| **Field** | **Value** |
| :- | :- |
| Bucket | Name of the Storj bucket |
| Path | Path to a directory inside the bucket; it can be empty |
| WriteAccessKeyId | Access Key with the **Write** and **Delete** permissions |
| WriteSecretAccessKey | Secret Key with the **Write** and **Delete** permissions |
| ReadAccessKeyId | Access Key with the **Read** and **List** permissions |
| ReadSecretAccessKey | Secret Key with the **Read** and **List** permissions |