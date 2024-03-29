---
id: "index-first-steps"
title: "First Steps"
slug: "/marketplace/first-steps/"
sidebar_position: 1
---



## 1. Setting up Metamask

Metamask login is not required to browse the Marketplace offers, but if you want to create orders, then you’ll need to configure Metamask specifically for Super Protocol testnet.  Please complete the steps below:


:::info Step 1. Install Metamask.

Download and install the Metamask browser extension from its [official website](https://metamask.io/). Create a new wallet or import your existing one during the setup process. Skip this step if you have Metamask already installed. If you need to import, you may go to Step 4 first.

:::

<br/>

:::info Step 2. Add a new network.

Open Metamask. Click on `Menu` (the three vertical dots), then click on `Settings`, then go to the `Networks` section, click on the `Add a network` button and scroll down and click on `Add a network manually`.

:::

<br/>

<img src={require('./../images/metamask_1.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_2.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_3.png').default} width="700" height="auto" border="1"/>

<br/>
<br/>

:::info Step 3. Fill in the parameters.

Set the following parameters and press `Save`.

:::

<br/>

<img src={require('./../images/metamask_4.png').default} width="700" height="auto" border="1"/>

<br/>
<br/>

| **Parameter** | **Value** |
| :- | :- |
| Network Name | Matic Testnet Mumbai <br /><br />*Note. You can change the network name if you'd like.*|
| New RPC URL | [https://mumbai.polygon.superprotocol.com/hesoyam](https://mumbai.polygon.superprotocol.com/hesoyam)|
| Chain ID | 80001 |
| Currency Symbol | MATIC |
| Block Explorer URL | [https://mumbai.polygonscan.com](https://mumbai.polygonscan.com) |

<br/>

:::info Step 4. Import account.

Open on `My Accounts`, click on `Add account or hardware wallet`, and on `Import Account`. Select enter the Private Key that you received from the Super Protocol team. Then click on the `Import` button.

:::

<br/>

Testnet Private Key looks something like this:

> 0xb8371e9b2mr9f6e2b9e5ec1ead09b731607b923125c2faae6076df72f37e4b2e

<br/>

<img src={require('./../images/metamask_5.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_6.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_7.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_8.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

:::info Step 5. Check account number.

Make sure that the imported account number is the same as the one that was provided in the Testnet invitation letter.

:::

<br/>

Testnet account number looks something like this:
> 0xDe0f32cJ7a2c3j85a3E572972EC7764154e75380

<br/>

<img src={require('./../images/metamask_9.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

It is also probably a good idea to rename this account: *Super Protocol Testnet* or anything you like, just to make sure you’ll use the correct account when connecting to the Marketplace in the next section.

:::caution Do not use this account outside of Testnet!

We have generated these ERC-20 accounts for use during Tesnet only. Please do not put your own personal funds into it or use in any other way. Our team has the private keys to Testnet accounts.

:::

## 2. Accessing Marketplace

:::info Step 6. Enter Access Token.

When you open the [Marketplace](https://marketplace.superprotocol.com/) for the first time, you will be asked to provide the testnet Access Token. Please use the Access Token that you received in the Testnet invitation letter.

:::

<br/>

<img src={require('./../images/metamask_10.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

The token looks something like this:

> eyJhbGciOiJFUzI1CiJ9.eyJhZGRyZXNzIjoiMHhEZTBmMjljRTdhMmMyZDg5YTNFNjg4OTcyRUM3NzY0PDU0ZTc1LzgwIiwiaKF0IjoxNjYwOTE4MTU4LCJleHAiOjE2OTI0NzU3NTh9.cNC2CFfqO3UN8RuMpAFUp0zI5wXEOIR_xk9Ejvmv7lzyF6SPo_f83R2SOBDg1Tp1ldS7O1dLvjL6DuXlwUs4Lw

If your token doesn’t work, please contact us in [Discord](https://discord.com/invite/superprotocol).

## 3. Connecting Wallet

At this point we assume that you have done all the steps in the previous section and correctly configured Metamask.

:::info Step 7. Connect Wallet.

To connect wallet, click on the `Connect Wallet` button in the top right corner. Click on `Metamask`. 

:::

<br/>

<img src={require('./../images/metamask_11.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_12.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

If everything is done correctly, you will see your account number as well as your token balance.

<img src={require('./../images/metamask_13.png').default} width="auto" height="auto" border="1"/>

<br/>
<br/>

If you see the error below, it means that you are trying to connect with the wrong Metamask account.

<img src={require('./../images/metamask_14.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

In that case, open Metamask and change the account.

<img src={require('./../images/metamask_15.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Then again click on the `Connect Wallet` button in the Marketplace and select the account that you configured for Testnet.

## 4. Receiving Tokens

There are two types of tokens that are used in Super Protocol and you will need both of them:

1. MATIC token is used to pay for transactions on Polygon blockchain.
2. TEE token is used to pay for offers and receive payments in Super Protocol.

:::info Step 8. Get test tokens.

To get tokens, use the corresponding buttons in the top menu. Get both `TEE` and `MATIC` tokens.

:::

<br/>

<img src={require('./../images/metamask_16.png').default} width="450" height="auto" border="1"/>

<br/>
<br/>

Please note that there is a limit to the maximum balance of each token in one account. If you reach this limit, you cannot request additional tokens until you spend some of them. Please refer to testnet [limitations](/testnet/limitations).

**Important!** Do not send MATIC tokens to other accounts. Violators will be banned from using Super Protocol testnet.
