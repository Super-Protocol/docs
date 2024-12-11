---
id: "log-in"
title: "How to Log In"
slug: "/guides/log-in"
sidebar_position: 1
---

This guide provides step-by-step instructions on how to log in to the [Super Protocol Marketplace](https://marketplace.superprotocol.com/) as a Web3 user. Learn more about [user account types](/marketplace/account).

:::note

The Marketplace web app does not support mobile devices. Use a desktop or laptop with a screen resolution of at least 1280x720.

:::

## Step 1. Create a new wallet address

To log in as a Web3 user, you need the MetaMask browser extension. MetaMask is one of the most popular software cryptocurrency wallets for Ethereum and EVM-compatible blockchains like Polygon.

If you do not have MetaMask, complete [Step 1-1](/marketplace/guides/log-in#step-1-1-install-metamask) to install it and create a new EVM wallet address.

If you already have MetaMask installed, skip Step 1-1 and complete [Step 1-2](/marketplace/guides/log-in#step-1-2-add-new-account) instead to create a new EVM wallet address.

### Step 1-1. Install MetaMask

Add the MetaMask extension to your browser from its [official website](https://metamask.io/) or your browser's extension store. During the installation, choose **Create a new wallet**.

<img src={require('../images/metamask-install-new.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Create a password. You will use it to unlock MetaMask.

<img src={require('../images/metamask-install-password.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

When prompted to secure your wallet, select **Remind me later** for a quick start or **Secure my wallet** to be able to restore your wallet address if you uninstall MetaMask. You can secure your wallet any time later.

<img src={require('../images/metamask-install-secure.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

You can find the address of your newly created wallet in the MetaMask extension window.

<img src={require('../images/metamask-install-complete.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Skip Step 1-2, as you already have a new wallet, and go directly to [Step 2](/marketplace/guides/log-in#step-2-add-the-amoy-testnet).

### Step 1-2. Add new account

If you have previously installed MetaMask, create a new EVM wallet address.

:::note

Although you can use an existing Ethereum wallet address, it is recommended that you create a new one specifically for Super Protocol.

:::

Click your current account name at the top of the MetaMask window.

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
| Network name | Amoy |
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

Open the [Marketplace web app](https://marketplace.superprotocol.com/) and press the **Enter Marketplace** button.

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

- TEE tokens to pay and receive payments in Super Protocol.
- POL tokens to pay for Polygon's Amoy blockchain transactions.

Both types are necessary to place orders. During the testnet, Super Protocol provides free tokens for testing purposes. To request them, open the **Account** setting.

<img src={require('../images/marketplace-web3acc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click the **Get TEE** and **Get POL** buttons. You will get tokens in a couple of minutes.

<img src={require('../images/web3acc-teepol.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

There is a limit to the daily amount of tokens you can get. Refer to the [Testnet Limitations](/marketplace/limitations).

:::warning

Do not send TEE and POL tokens to other accounts. Violators will be banned from using the Super Protocol Marketplace.

:::

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistan