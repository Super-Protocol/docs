---
id: index-first-steps
title: First Steps
slug: /marketplace/first-steps/
---

# First Steps

### 1. Setting up Metamask

Metamask login is not required to browse the Marketplace offers, but if you want to create orders, then you’ll need to configure Metamask specifically for Super Protocol testnet - your usual configuration will not work. Please complete the steps below:

:::info Step 1. Install Metamask.

Download and install the Metamask browser extension from its [official website](https://metamask.io/). Create a new wallet or import your existing one during the setup process. Skip this step if you have Metamask already installed.

:::

\


:::info Step 2. Add a new network.

Open Metamask. Click on `My Accounts` (avatar in the top right corner), then click on `Settings`, then go to the `Networks` section, click on the `Add a network` button and then scroll down and click on `Add a network manually`.

:::

\


![](images/metamask\_1.png'\).default%7D)

![](images/metamask\_2.png'\).default%7D)

:::info Step 3. Fill in the parameters.

Set the following parameters and press `Save`.

:::

\


![](images/metamask\_3.png'\).default%7D)

| Parameter          | Value                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| Network Name       | <p>Matic Testnet Mumbai<br><br><em>Note. You can change the network name if you'd like.</em></p>     |
| New RPC URL        | [https://mumbai.polygon.superprotocol.com/hesoyam](https://mumbai.polygon.superprotocol.com/hesoyam) |
| Chain ID           | 80001                                                                                                |
| Currency Symbol    | MATIC                                                                                                |
| Block Explorer URL | [https://mumbai.polygonscan.com](https://mumbai.polygonscan.com)                                     |

\


:::info Step 4. Import account.

Open again `My Accounts` and click on `Import Account`. Select type `Private Key` and enter the private key that you received from the Super Protocol team. Then click on the `Import` button.

:::

\


Testnet Private Key looks something like this:

> 0xb8371e9b2mr9f6e2b9e5ec1ead09b731607b923125c2faae6076df72f37e4b2e

\


![](images/metamask\_4.png'\).default%7D)

![](images/metamask\_5.png'\).default%7D)

:::info Step 5. Check account number.

Make sure that the imported account number is the same as the one that was provided in the Testnet invitation letter.

:::

\


Testnet account number looks something like this:

> 0xDe0f32cH7a2c3d85a3E578972EC7764154e75380

\


![](images/metamask\_6.png'\).default%7D)

It is also probably a good idea to rename this account: Super Protocol Testnet or anything you like. Just to make sure you’ll use the correct account when connecting to the Marketplace in the next section.

:::caution Do not use this account outside of Testnet!

We have generated these ERC-20 accounts for use during Tesnet only. Please do not put your own personal funds into it or use in any other way. Our team has the private keys to the Testnet accounts.

:::

### 2. Accessing Marketplace

When you open the [Marketplace](https://marketplace.superprotocol.com/) for the first time, you will be asked to provide an access token. Please use the access token that you received in the Testnet invitation letter.

![](images/access\_token.png'\).default%7D)

The token looks something like this:

> eyJhbGciOiJFUzI1CiJ9.eyJhZGRyZXNzIjoiMHhEZTBmMjljRTdhMmMyZDg5YTNFNjg4OTcyRUM3NzY0PDU0ZTc1LzgwIiwiaKF0IjoxNjYwOTE4MTU4LCJleHAiOjE2OTI0NzU3NTh9.cNC2CFfqO3UN8RuMpAFUp0zI5wXEOIR\_xk9Ejvmv7lzyF6SPo\_f83R2SOBDg1Tp1ldS7O1dLvjL6DuXlwUs4Lw

If your token doesn’t work, please contact us in [Discord](https://discord.com/invite/superprotocol).

### 3. Connecting Wallet

At this point we assume that you have done all the steps in the previous section and correctly configured Metamask.

:::info Step 1. Connect Wallet.

Go to the [Marketplace](https://marketplace.superprotocol.com). To connect the wallet, click on the `Connect Wallet` button in the top right corner.

:::

\


![](images/metamask\_7.png'\).default%7D)

![](images/metamask\_8.png'\).default%7D)

\


:::info Step 2. Select Metamask account.

The Metamask app will open. Select the account that you have configured in the previous section.

:::

\


If everything is done correctly, you will see your account number as well as your token balance.

![](images/metamask\_9.png'\).default%7D)

\


If you see the error below, it means that you are trying to connect with the wrong Metamask account.

![](images/metamask\_10.png'\).default%7D)

In this case, open Metamask and disconnect this account.

![](images/metamask\_11.png'\).default%7D)

And then again click on the `Connect Wallet` button in the Marketplace and select the account that you configured for Testnet.

### 4. Receiving Tokens

There are two types of tokens that are used in Super Protocol and you will need both of them:

1. MATIC token is used to pay for transactions on Polygon blockchain.
2. TEE token is used to pay for offers and receive payments in Super Protocol.

To get tokens, use the corresponding links in the top menu.

![](images/metamask\_12.png'\).default%7D)

Please note that there is a limit to the maximum balance of each token in one account. If you reach this limit, you cannot request additional tokens until you spend some of them.

**Important!** Do not send MATIC tokens to other accounts. Violators will be banned from using Super Protocol testnet.
