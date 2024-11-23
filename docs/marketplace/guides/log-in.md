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

To log in as a Web3 user, you need the MetaMask browser extension. MetaMask is one of the most popular software cryptocurrency wallets for Ethereum and EVM-compatible blockchains like Polygon.

If you do not have MetaMask installed, complete [Step 1-1](/marketplace/guides/log-in#step-1-1-install-metamask) to install it and create a new Ethereum account or, using another term, an ERC-20 wallet address.

If you already have MetaMask installed, complete [Step 1-2](/marketplace/guides/log-in#step-1-2-add-new-account) instead to create a new ERC-20 wallet address.

:::note

Super Protocol Marketplace is in an early beta stage, and bugs and unexpected behavior are possible. Although you can use an existing Ethereum wallet address, it is recommended that you create a new one specifically to test Super Protocol.

:::

### Step 1-1. Install MetaMask

Add the MetaMask extension to your browser from its [official website](https://metamask.io/) or your browser's extension store. During the installation, choose **Create a new wallet**.

<img src={require('../images/metamask-install-new.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Create a password that will unlock your MetaMask browser extension.

<img src={require('../images/metamask-install-password.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

When prompted to secure your wallet, select **Remind me later** for a quick start or **Secure my wallet** to be able to restore it if you uninstall MetaMask. You can secure your wallet any time later.

<img src={require('../images/metamask-install-secure.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

You can find the address of your newly created wallet in the MetaMask extension window.

<img src={require('../images/metamask-install-complete.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Skip Step 1-2, as you already have a new wallet, and go directly to [Step 2](/marketplace/guides/log-in#step-2-add-the-amoy-testnet).

### Step 1-2. Add new account

To create a new ERC-20 wallet address, open MetaMask and click your current account name at the top of the window.

<img src={require('../images/metamask-newacc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Press **Add account or hardware wallet** and then select **Add a new Ethereum account**.

<img src={require('../images/metamask-newacc-add.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Type any desired account name and click **Add account**.

<img src={require('../images/metamask-newacc-name.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If you wish to recover this wallet address later, save its Secret Key. You can find it in the **Account details**.

<img src={require('../images/metamask-newacc-details.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 2. Add the Amoy testnet

In the MetaMask window, open the menu in the top-left corner and press **Add a custom network**.

<img src={require('../images/metamask-testnet-add.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Set the following parameters and press **Save**:

| **Field** | **Value** |
| :- | :- |
| Network name | Super Protocol Polygon Amoy Testnet |
| New RPC URL | https://amoy.polygon.superprotocol.com/hesoyam |
| Chain ID | 80002 |
| Currency symbol | POL |
| Block explorer URL | https://www.oklink.com/amoy |

You can change the network name if you like.

<img src={require('../images/metamask-testnet-form.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Switch to the newly added network.

<img src={require('../images/metamask-testnet-switch.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 3. Connect the account

In the main Marketplace screen, press the **Enter Marketplace** button.

<img src={require('../images/enter-marketplace-button.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Select **MetaMask**.

<img src={require('../images/enter-marketplace-mm.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

In the MetaMask window that appears, click **Connect** and then **Confirm** the signature request.

<img src={require('../images/metamask-connect.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If you connect successfully, you will see your account address in the top-right corner of the Marketplace screen.

<img src={require('../images/marketplace-web3acc.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 4. Request TEE and POL

Super Protocol users need two types of tokens:

- POL tokens: to pay for Polygon blockchain transactions.
- TEE tokens: to pay for offers and receive payments in Super Protocol.

Both types are necessary to place orders. During the testnet, Super Protocol provides free tokens for testing purposes. To request them, open the **Account** setting.

<img src={require('../images/marketplace-web3acc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click the **Get TEE** and **Get POL** buttons. You will get tokens in a couple of minutes.

<img src={require('../images/web3acc-teepol.png').default} width="auto" height="auto" border="1"/>
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

<img src={require('../images/web3acc-storage.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

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

<img src={require('../images/marketplace-web3acc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Select the **Your Storj account** radio button, fill in the fields, and click **Save**.

| **Field** | **Value** |
| :- | :- |
| Bucket | Name of the Storj bucket |
| Path | Path to a directory inside the bucket; it can be empty |
| WriteAccessKeyId | Access Key with the **Write** and **Delete** permissions |
| WriteSecretAccessKey | Secret Key with the **Write** and **Delete** permissions |
| ReadAccessKeyId | Access Key with the **Read** and **List** permissions |
| ReadSecretAccessKey | Secret Key with the **Read** and **List** permissions |

<img src={require('../images/web3acc-storj.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>