---
id: "log-in"
title: "How to Log In (Web3)"
slug: "/guides/log-in"
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to log in to the [Super Protocol Marketplace](https://marketplace.superprotocol.com/) as a Web3 user. Read about [user account types](/marketplace/account).

:::note

The Marketplace web app does not officially support mobile devices. Use a desktop or laptop with a screen resolution of at least 1280x720.

:::

## Step 1. Create a new wallet address

To log in as a Web3 user, you need the MetaMask browser extension. MetaMask is one of the most popular software cryptocurrency wallets for Ethereum and EVM-compatible blockchains.

<Tabs>
  <TabItem value="no-mm" label="If you do not have MetaMask" default>

    If you do not have MetaMask, you need to install it and create a new EVM wallet address.

    1. Add the MetaMask extension to your browser from its [official website](https://metamask.io/) or your browser's extension store. During the installation, choose **Create a new wallet**.

    <img src={require('../images/metamask-install-new.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    2. Create a password. You will use it to unlock MetaMask.

    <img src={require('../images/metamask-install-password.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    3. When prompted to secure your wallet, select **Remind me later** for a quick start or **Secure my wallet** to be able to restore your wallet address if you uninstall MetaMask. You can secure your wallet any time later.

    <img src={require('../images/metamask-install-secure.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    4. You can find the address of your newly created wallet in the MetaMask extension window.

    <img src={require('../images/metamask-install-complete.png').default} width="auto" height="auto" border="1"/>

  </TabItem>
  <TabItem value="mm" label="If you already have MetaMask">

    If you have previously installed MetaMask, create a new EVM wallet address. Although you can use an existing EVM wallet address, it is recommended that you create a new one specifically for Super Protocol.

    1. Open MetaMask and click your current account name:

    <img src={require('../images/metamask-newacc-menu.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    2. Press **Add account or hardware wallet** and then select **Add a new Ethereum account**.

    <img src={require('../images/metamask-newacc-add.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    3. Type any desired account name and click **Add account**.

    <img src={require('../images/metamask-newacc-name.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    4. If you wish to recover this wallet address later, save its Secret Key. You can find it in the **Account details**.

    <img src={require('../images/metamask-newacc-details.png').default} width="auto" height="auto" border="1"/>

  </TabItem>
</Tabs>

## Step 2. Connect the account

1. Open the [Marketplace web app](https://marketplace.superprotocol.com/) and press the **Enter Marketplace** button.

<img src={require('../images/enter-marketplace-button.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2. Select **MetaMask**.

<img src={require('../images/enter-marketplace-mm.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

3. In the MetaMask window that appears, **Approve** adding a new network (opBNB) and then **Confirm** the signature request.

<img src={require('../images/metamask-add-opbnb.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

4. If you connect successfully, you will see your account address in the top-right corner of the Marketplace screen.

<img src={require('../images/marketplace-web3acc.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 3. Get tokens

Super Protocol users need two types of tokens:

- SPPI tokens to pay and receive payments in Super Protocol.
- BNB tokens to pay for opBNB blockchain transactions.

Both types are necessary to place orders. During the testnet, you can request free tokens in the **Account** setting.

<img src={require('../images/marketplace-web3acc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

There is a limit to the daily amount of tokens you can get. Check the [Testnet Limitations](/marketplace/limitations).

## Step 4. Import SPPI to MetaMask (optional)

To make your MetaMask display your SPPI token balance, import the token:

1. Open Metamask.

<img src={require('../images/metamask-open.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2. Go to the **Tokens** tab, click the **[ ⋮ ]** button, and select **Import tokens** in the menu.

<img src={require('../images/metamask-import-sppi-1.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

3. Add the following address to **Token contract address**: `0xDb8E4557E34256d3E8bBA0f7796Cf633a8F08C27`. **Token symbol** `SPPI` and **Token decimal** `18` will fill in automatically.

<img src={require('../images/metamask-import-sppi-2.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click **Next** and then **Import**.

4. Check that SPPI has appeared in the **Tokens** tab.

<img src={require('../images/metamask-import-sppi-3.png').default} width="auto" height="auto" border="1"/>
<br/>

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.