---
id: "index-first-steps"
title: "First Steps"
slug: "/marketplace/first-steps/"
sidebar_position: 1
---

This guide is for setting up the accounts and Metamask for Marketplace GUI. To set up the Super Protocol CLI tool, check the [Configuring SPCTL](/developers/cli_guides/configuring/) guide.

## 1. Setting up Metamask

Metamask login is not required to browse the Marketplace offers. However, if you want to create orders, you must configure Metamask specifically for the Super Protocol Testnet. This guide will explain all the necessary steps.

<br/>

### Step 1. Install Metamask

Download and install the Metamask browser extension from its [official website](https://metamask.io/). During the setup process, create a new wallet or import your existing one. Skip this step if you have Metamask already installed.

<br/>

### Step 2. Add a new network

Open the Metamask menu by clicking on three vertical dots in the top-right corner of the window. Go to the **Settings** and then select **Networks**. There, click the **Add network** button and then click **Add a network manually** at the bottom of the page.

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

:::info Step 3. Fill in the parameters

Set the following parameters and press `Save`.

:::

<br/>

<img src={require('./../images/metamask_4.png').default} width="700" height="auto" border="1"/>

<br/>
<br/>

| **Parameter** | **Value** |
| :- | :- |
| Network Name | SuperProtocol Polygon Amoy Testnet <br /><br />*Note. You can change the network name if you'd like.*|
| New RPC URL | [https://amoy.polygon.superprotocol.com/hesoyam](https://amoy.polygon.superprotocol.com/hesoyam)|
| Chain ID | 80002 |
| Currency Symbol | MATIC |
| Block Explorer URL | [https://www.oklink.com/amoy](https://www.oklink.com/amoy) |

<br/>

:::info Step 4. Import account.

Click on your account name at the top of the Metamask window to open the list of your accounts. Click `Add account or hardware wallet` and select `Import Account`. Enter the Private Key you received from Super Protocol and click `Import`.

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


## 2. Connecting Wallet

:::info Step 6. Connect Wallet.

To connect your wallet, click on the `Connect Wallet` button at the top right corner. In the pop-up window, click on `Metamask`. Then open your Metamask, select your Testnet account, click `Next`, and finally click `Connect`.

:::

<br/>

<img src={require('./../images/metamask_11.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_12.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_12-1.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_12-2.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

If everything is done correctly, you will see your account number as well as your token balance.

<img src={require('./../images/metamask_13.png').default} width="auto" height="auto" border="1"/>

<br/>
<br/>


## 3. Receiving Tokens

There are two types of tokens that are used in Super Protocol and you will need both of them:

1. MATIC token is used to pay for transactions on Polygon blockchain.
2. TEE token is used to pay for offers and receive payments in Super Protocol.

:::info Step 7. Get test tokens.

To get tokens, use the corresponding buttons in the top menu. Get both `TEE` and `MATIC` tokens.

:::

<br/>

<img src={require('./../images/metamask_16.png').default} width="450" height="auto" border="1"/>

<br/>
<br/>

When you request tokens for the first time, the system will ask you to enter your Access Token. You should have received it in the same Testnet invitation letter with your Testnet Account and Private key.

<img src={require('./../images/metamask_10.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

The token looks something like this:

> eyJhbGciOiJFUzI1CiJ9.eyJhZGRyZXNzIjoiMHhEZTBmMjljRTdhMmMyZDg5YTNFNjg4OTcyRUM3NzY0PDU0ZTc1LzgwIiwiaKF0IjoxNjYwOTE4MTU4LCJleHAiOjE2OTI0NzU3NTh9.cNC2CFfqO3UN8RuMpAFUp0zI5wXEOIR_xk9Ejvmv7lzyF6SPo_f83R2SOBDg1Tp1ldS7O1dLvjL6DuXlwUs4Lw

If your token doesn’t work, ensure you have selected the correct account. Your Access Token only works with the Testnet account you received from Super Protocol. Also, check that you don’t accidentally copy your Access Token with line break characters or spaces. If the issue persists, contact Super Protocol Community Managers on [Discord](https://discord.com/invite/superprotocol).

If you see the error below, it means that you are trying to connect with the wrong Metamask account.

<img src={require('./../images/metamask_14.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

In that case, open Metamask and change the account.

<img src={require('./../images/metamask_15.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Then click again on the `Connect Wallet` button in the Marketplace and select the account that you configured for Testnet.

Note that there is a limit to the maximum balance of each token in one account. If you reach this limit, you can only request additional tokens once you spend some of them. Refer to testnet [limitations](/testnet/limitations).

**Important!** Do not send MATIC tokens to other accounts. Violators will be banned from using Super Protocol testnet.

## Support

Feel free to contact any Community Manager on Super Protocol [Discord server](https://discord.gg/superprotocol) if you have issues or questions.
