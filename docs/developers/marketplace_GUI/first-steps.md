---
id: "index-first-steps"
title: "First Steps"
slug: "/marketplace/first-steps/"
sidebar_position: 1
---

This guide is for setting up the accounts and Metamask for Marketplace GUI. To set up the Super Protocol CLI tool, check the [Configuring SPCTL](/developers/cli_guides/configuring/) guide.

## 1. Setting up Metamask

MetaMask is a software crypto wallet that is available as a browser extension or mobile app. It is not required to browse Marketplace offers. However, you must configure Metamask specifically for the Super Protocol Testnet to create orders. This guide will explain all the necessary steps.

### Step 1. Install Metamask

Download and install the Metamask browser extension from its [official website](https://metamask.io/). During the setup process, create a new wallet or import your existing one. Skip this step if you already have Metamask installed.

### Step 2. Add a new network

Open the menu by clicking the three vertical dots at the Metamask window's top-right corner. Go to **Settings** and then select **Networks**. There, press the **Add network** button and then click **Add a network manually** at the bottom of the page.

<img src={require('./../images/metamask_1.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_2.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_3.png').default} width="700" height="auto" border="1"/>

<br/>
<br/>

### Step 3. Fill in the parameters

Set the following parameters and press **Save**.

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

### Step 4. Import account

Click on your account name at the top of the Metamask window to open the list of your accounts.

<img src={require('./../images/metamask_5.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Click **Add account or hardware wallet** and select **Import Account**.

<img src={require('./../images/metamask_6.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

<img src={require('./../images/metamask_7.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Enter the Private Key you received from Super Protocol and press the **Import** button.

Testnet Private Key looks something like this:

```
0xb8371e9b2mr9f6e2b9e5ec1ead09b731607b923125c2faae6076df72f37e4b2e
```

<br/>

<img src={require('./../images/metamask_8.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

### Step 5. Check account number

Ensure that the imported wallet address matches the Testnet Account address you received in the Testnet invitation letter.

Testnet Account address looks something like this:

```
0xDe0f32cJ7a2c3j85a3E572972EC7764154e75380
```

<br/>

<img src={require('./../images/metamask_9.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

You can rename this account into _Super Protocol Testnet_ or anything you like to quickly find it next time, especially if you have several other wallets in your Metamask.

:::caution Do not use this account outside of Testnet!

We have generated these ERC-20 accounts for use during Tesnet only. Please do not put your funds into it or use it in any other way. The Super Protocol team has the private key to your Testnet account, so it is not truly yours.

:::

<br/>

## 2. Connecting Wallet

### Step 6. Connect Wallet

To connect your wallet, open the [Marketplace web interface](https://marketplace.superprotocol.com/) and press the **Connect Wallet** button at the top-right corner.

<img src={require('./../images/metamask_11.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

In the pop-up window, click **Metamask**.

<img src={require('./../images/metamask_12.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Then open your Metamask, select your Testnet account, click **Next**

<img src={require('./../images/metamask_12-1.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Finally, click **Connect**

<img src={require('./../images/metamask_12-2.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

If everything is done correctly, you will see your account number and token balance.

<img src={require('./../images/metamask_13.png').default} width="auto" height="auto" border="1"/>

<br/>
<br/>

## 3. Receiving Tokens

Two types of tokens are used in Super Protocol, and you will need both of them:

1. MATIC token is used to pay for transactions on Polygon blockchain.
2. TEE token is used to pay for offers and receive payments in Super Protocol.

### Step 7. Get test tokens

To get tokens, use the buttons at the top of the page. Get both TEE and MATIC tokens.

<img src={require('./../images/metamask_16.png').default} width="450" height="auto" border="1"/>

<br/>
<br/>

When you request tokens for the first time, the system asks you to enter your Access Token. You should have received it in the Testnet invitation letter along with your Testnet Account and Private Key.

<img src={require('./../images/metamask_10.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

The Access Token looks something like this:

```
eyJhbGciOiJFUzI1CiJ9.eyJhZGRyZXNzIjoiMHhEZTBmMjljRTdhMmMyZDg5YTNFNjg4OTcyRUM3NzY0PDU0ZTc1LzgwIiwiaKF0IjoxNjYwOTE4MTU4LCJleHAiOjE2OTI0NzU3NTh9.cNC2CFfqO3UN8RuMpAFUp0zI5wXEOIR_xk9Ejvmv7lzyF6SPo_f83R2SOBDg1Tp1ldS7O1dLvjL6DuXlwUs4Lw
```

<br/>

Note that there is a limit to the maximum balance of each token in one account. If you reach this limit, you can only request additional tokens once you spend some of them. Refer to testnet [limitations](/testnet/limitations).

**Important!** Do not send MATIC tokens to other accounts. Violators will be banned from using the Super Protocol Testnet..

## Troubleshooting

If your Access Token doesn’t work, ensure you have selected the correct account. Your Access Token only works with the Testnet account you received from Super Protocol. Also, check that you don’t accidentally copy your Access Token with line break characters or spaces.

If you see the error below, it means that you are trying to connect with the wrong Metamask account.

<img src={require('./../images/metamask_14.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

In that case, open Metamask and change the account.

<img src={require('./../images/metamask_15.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Then, click the **Connect Wallet** button in the Marketplace GUI again and select the account you configured for Testnet.

## Support

If you have any issues or questions, contact Super Protocol on its [Discord server](https://discord.gg/superprotocol). The Community Managers will be happy to help you.