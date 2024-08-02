---
id: "index-first-steps"
title: "First Steps"
slug: "/marketplace/first-steps/"
sidebar_position: 1
---

This guide provides step-by-step instructions to help you set up MetaMask and access the Super Protocol Marketplace via the web-based [graphical user interface (GUI)](/developers/marketplace/). If you want to use the command-line interface (CLI), check the [Configure SPCTL](/developers/cli_guides/configure/) guide.

The Marketplace GUI is available for anyone to browse even without the MetaMask extension installed. However, you need a Testnet Account to access the full functionality of Super Protocol Marketplace. If you don't have your Testnet access credentials yet, [apply to join](/testnet/). When your access is ready, you will receive a Testnet invitation letter with your Testnet Account address, Private Key, and Access Token.

The Super Protocol team sends out invites daily, but it may take a few days if the number of requests is high. You can ask any Community Manager on the [Super Protocol Discord server](https://discord.gg/superprotocol) about the status of your request.

## MetaMask

MetaMask is a software crypto wallet available as a browser extension or mobile app. You do not need it to browse Marketplace offers. However, to create orders, you must install and configure the MetaMask browser extension specifically for the Super Protocol Testnet.

:::note
The mobile version of the Marketplace GUI is view-only. Use a desktop or laptop for full functionality.

If you already use a computer but still see the warning about the mobile version, expand the browser window to full screen.
:::

## Step 1. Install MetaMask

Download and install the MetaMask browser extension from its [official website](https://metamask.io/) or your browser's extension store. During the setup, create a new wallet or import an existing one. Skip this step if you already have MetaMask installed.

## Step 2. Add a new network

Open the menu by clicking the three vertical dots at the MetaMask window's top-right corner. Go to **Settings** and then select **Networks**.

<img src={require('./../images/metamask_1.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

There, press the **Add network** button.

<img src={require('./../images/metamask_2.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

And then click **Add a network manually** at the bottom of the page.

<img src={require('./../images/metamask_3.png').default} width="700" height="auto" border="1"/>

<br/>
<br/>

## Step 3. Fill in the parameters

Set the following parameters and press **Save**.

<img src={require('./../images/metamask_4.png').default} width="700" height="auto" border="1"/>

<br/>
<br/>

| **Parameter** | **Value** |
| :- | :- |
| Network Name | SuperProtocol Polygon Amoy Testnet <br /><br />*You can change the network name if you'd like*|
| New RPC URL | [https://amoy.polygon.superprotocol.com/hesoyam](https://amoy.polygon.superprotocol.com/hesoyam)|
| Chain ID | 80002 |
| Currency Symbol | MATIC |
| Block Explorer URL | [https://www.oklink.com/amoy](https://www.oklink.com/amoy) |

## Step 4. Import the Testnet Account

Click on your account name at the top of the MetaMask window to open the list of your accounts.

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

Enter the Private Key you received from Super Protocol and press the **Import** button. Testnet Private Key looks something like this:

>0xb8371e9b2mr9f6e2b9e5ec1ead09b731607b923125c2faae6076df72f37e4b2e

<br/>

<img src={require('./../images/metamask_8.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

## Step 5. Check the account

Ensure that the imported wallet address matches the Testnet Account address you received in the Testnet invitation letter. The Testnet Account address looks something like this:

>0xDe0f32cJ7a2c3j85a3E572972EC7764154e75380

<br/>

<img src={require('./../images/metamask_9.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

You can rename this account into _Super Protocol Testnet_ or anything you like to quickly find it next time, especially if you have several other wallets in your MetaMask. Open the list of your MetaMask accounts, go to **Account details**, and click on the pencil icon near the wallet name to change it.

:::caution Important!

Do not use this account outside of Testnet!

Super Protocol generates ERC-20 wallets for use during Tesnet only. Do not use your Testnet Account wallet elsewhere or put your funds in it. The Super Protocol team also has the Private Key to your Testnet Account, so it is not truly yours.

:::

## Step 6. Connect the wallet

To connect your wallet, open the [Marketplace GUI](https://marketplace.superprotocol.com/) and press the **Connect Wallet** button at the top-right corner.

<img src={require('./../images/metamask_11.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

In the pop-up window, click **MetaMask**.

<img src={require('./../images/metamask_12.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Then open your MetaMask, select your Testnet account, and click **Next**.

<img src={require('./../images/metamask_12-1.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Finally, click **Connect**.

<img src={require('./../images/metamask_12-2.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

If everything is done correctly, you will see your account address and token balance.

<img src={require('./../images/metamask_13.png').default} width="auto" height="auto" border="1"/>

<br/>
<br/>

## Step 7. Get testnet tokens

Super Protocol uses two types of tokens, and you will need both of them:

- MATIC tokens, to pay for transactions on the Polygon blockchain
- TEE tokens, to pay for offers and receive payments in Super Protocol.

To get tokens, use the buttons at the top of the page.

<img src={require('./../images/metamask_16.png').default} width="450" height="auto" border="1"/>

<br/>
<br/>

When you request tokens for the first time, the system asks you to enter your Access Token. You can find it in the Testnet invitation letter next to your Testnet Account and Private Key. The Access Token looks something like this:

>eyJhbGciOiJFUzI1CiJ9.eyJhZGRyZXNzIjoiMHhEZTBmMjljRTdhMmMyZDg5YTNFNjg4OTcyRUM3NzY0PDU0ZTc1LzgwIiwiaKF0IjoxNjYwOTE4MTU4LCJleHAiOjE2OTI0NzU3NTh9.cNC2CFfqO3UN8RuMpAFUp0zI5wXEOIR_xk9Ejvmv7lzyF6SPo_f83R2SOBDg1Tp1ldS7O1dLvjL6DuXlwUs4Lw

<br/>

<img src={require('./../images/metamask_10.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Note that there is a limit to the maximum balance of each token in one account. If you reach this limit, you can only request additional tokens once you spend some of them. Refer to testnet [limitations](/testnet/limitations).

:::caution Important!

Do not send MATIC tokens to other accounts. Violators will be banned from using the Super Protocol Testnet.

:::

## Troubleshooting

If your Access Token doesn't work, check that you didn't accidentally copy it with line break characters or spaces.

Also, ensure you have selected the correct account. Your Access Token only works with the Testnet account you received from Super Protocol. If you see the following error, you are trying to connect with the wrong MetaMask account:

<img src={require('./../images/metamask_14.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

In that case, open MetaMask and change the account.

<img src={require('./../images/metamask_15.png').default} width="300" height="auto" border="1"/>

<br/>
<br/>

Then, click the **Connect Wallet** button in the Marketplace GUI again and select the account you configured for Testnet.

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol). Community Managers will be happy to help.