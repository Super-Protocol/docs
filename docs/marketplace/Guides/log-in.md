---
id: "log-in"
title: "Log In with MetaMask"
slug: "/guides/log-in"
sidebar_position: 1
---

This guide provides step-by-step instructions on how to log in to [Super Protocol Marketplace](https://marketplace.superprotocol.com/) as a Web3 user using MetaMask—a popular, free, non-custodial software wallet.

:::important

Super Protocol is not affiliated with MetaMask.

:::

## Before you begin

Install the MetaMask extension for your browser:

- [MetaMask for Chromium](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) (Google Chrome, Microsoft Edge, Opera, Brave)
- [MetaMask for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
- [MetaMask for Safari](https://apps.apple.com/us/app/metamask-crypto-wallet/id1438144202)

## Step 1. Create a new wallet address

Although you can use an existing EVM wallet address, it is recommended that you create a new one specifically for Super Protocol.

1.1. Open MetaMask.

<img src={require('../images/metamask-open.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

1.2. Click your current account name.

<img src={require('../images/metamask-newacc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

1.3. Press **Add account or hardware wallet** and then select **Add a new Ethereum account**.

<img src={require('../images/metamask-newacc-add.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

1.4. Type any desired account name and click **Add account**.

<img src={require('../images/metamask-newacc-name.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 2. Connect the account

2.1. Open the [Marketplace web app](https://marketplace.superprotocol.com/) and press **Enter Marketplace**.

<img src={require('../images/enter-marketplace-button.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.2. Select **Connect Wallet**.

<img src={require('../images/enter-marketplace-connect-wallet.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.3 Select **MetaMask**.

<img src={require('../images/enter-marketplace-metamask.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.4. In the MetaMask window, press **Connect**, then **Approve** adding a new network (opBNB Mainnet), and finally, **Confirm** the signature request.

<img src={require('../images/metamask-add-opbnb.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.5. If you connect successfully, you will see your account address in the top-right corner of the Marketplace screen.

<img src={require('../images/marketplace-web3acc-metamask.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 3. Get tokens

Web3 users need two types of tokens:

- SPPI tokens to pay and receive payments in Super Protocol.
- BNB tokens to pay for opBNB blockchain transactions.

Both types are necessary to place <a id="order"><span className="dashed-underline">orders</span></a>. During the testnet, you can request free tokens in the **Account** setting.

<img src={require('../images/marketplace-mm-account-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

There is a limit to the daily amount of tokens you can get. Check the [Testnet Limitations](/marketplace/limitations).

## Step 4. Import SPPI tokens (optional)

To see your SPPI token balance in MetaMask, import the token.

4.1. Open MetaMask, go to the **Tokens** tab, click the **[ ⋮ ]** button, and select **Import tokens** in the menu.

<img src={require('../images/metamask-import-sppi-1.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

4.2. Add the following address to **Token contract address**: `0xDb8E4557E34256d3E8bBA0f7796Cf633a8F08C27`. **Token symbol** `SPPI` and **Token decimal** `18` should fill in automatically.

Click **Next** and then **Import**.

<img src={require('../images/metamask-import-sppi-2.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

4.3. Check that SPPI has appeared in the **Tokens** tab.

<img src={require('../images/metamask-import-sppi-3.png').default} width="auto" height="auto" border="1"/>
<br/>

## Contact Super Protocol

If you face any issues, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).