---
id: "log-in"
title: "Log In as a Web3 user"
slug: "/guides/log-in"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to log in to the [Super Protocol Marketplace](https://marketplace.superprotocol.com/) as a [Web3 user](/marketplace/account#web3-user-account).

:::note

The Marketplace web app does not officially support mobile devices. Use a desktop or laptop with a screen resolution of at least 1280x720.

:::

To log in as a Web3 user, you need one of the supported software cryptocurrency wallets:

- MetaMask
- Trust Wallet

Both are free, popular, and non-custodial. Choose either and install its browser extension from your browser's extension store.

:::important

Super Protocol is not affiliated with MetaMask or Trust Wallet in any way.

:::

<Tabs>
  <TabItem value="metamask" label="MetaMask" default>
    ## MetaMask, step 1. Create a new wallet address
    
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
    <br/>

    ## MetaMask, step 2. Connect the account

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
    <br/>

    ## MetaMask, step 3. Get tokens

    Web3 users need two types of tokens:

    - SPPI tokens to pay and receive payments in Super Protocol.
    - BNB tokens to pay for opBNB blockchain transactions.

    Both types are necessary to place <a id="order"><span className="dashed-underline">orders</span></a>. During the testnet, you can request free tokens in the **Account** setting.

    <img src={require('../images/marketplace-mm-account-menu.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    There is a limit to the daily amount of tokens you can get. Check the [Testnet Limitations](/marketplace/limitations).

    ## MetaMask, step 4. Import SPPI tokens (optional)

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

  </TabItem>
  <TabItem value="trust" label="Trust Wallet">
    ## Trust Wallet, step 1. Create a new wallet address

    Although you can use an existing EVM wallet address, it is recommended that you create a new one specifically for Super Protocol.

    1.1. Open Trust Wallet.

    <img src={require('../images/trust-open.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    1.2. Click your current account name, and then **Add new wallet**.

    <img src={require('../images/trust-newwallet.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    1.3. Select **Create a new wallet**.

    <img src={require('../images/trust-newwallet-create.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    1.4. Confirm your Trust Wallet password and click **Next**.

    <img src={require('../images/trust-newwallet-password.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>
 
    ## Trust Wallet, step 2. Connect the account

    2.1. Open the [Marketplace web app](https://marketplace.superprotocol.com/) and press **Enter Marketplace**.

    <img src={require('../images/enter-marketplace-button.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    2.2. Select **Connect Wallet**.

    <img src={require('../images/enter-marketplace-connect-wallet.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    2.3 Select **Trust Wallet**.

    <img src={require('../images/enter-marketplace-trust.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    2.4. In the Trust Wallet window, press **Connect** and then **Confirm** the signature request.

    <img src={require('../images/trust-connect.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    2.5. If you connect successfully, you will see your account address in the top-right corner of the Marketplace screen.

    <img src={require('../images/marketplace-web3acc-trust.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    ## Trust Wallet, step 3. Get tokens

    Web3 users need two types of tokens:

    - SPPI tokens to pay and receive payments in Super Protocol.
    - BNB tokens to pay for opBNB blockchain transactions.

    Both types are necessary to place <a id="order"><span className="dashed-underline">orders</span></a>. During the testnet, you can request free tokens in the **Account** setting.

    <img src={require('../images/marketplace-trust-account-menu.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    There is a limit to the daily amount of tokens you can get. Check the [Testnet Limitations](/marketplace/limitations).

    ## Trust Wallet, step 4. Import SPPI tokens (optional)

    To see your SPPI token balance in Trust Wallet, import the token.

    4.1. Open Trust Wallet, go to the **Crypto** tab and click **Manage crypto** at the bottom of the list.

    <img src={require('../images/trust-import-sppi-1.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    4.2. Click **Don't see your crypto? Import**.

    <img src={require('../images/trust-import-sppi-2.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    4.3. Find **OpBNB** in the list of networks.

    <img src={require('../images/trust-import-sppi-3.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>
    
    4.4. Add the following address: `0xDb8E4557E34256d3E8bBA0f7796Cf633a8F08C27`. Ensure the Super Protocol Incentives Token (SPPI) is found. Click **Add token**.

    <img src={require('../images/trust-import-sppi-4.png').default} width="auto" height="auto" border="1"/>
    <br/>
    <br/>

    4.5. Check that SPPI has appeared in the **Tokens** tab.

    <img src={require('../images/trust-import-sppi-5.png').default} width="auto" height="auto" border="1"/>
    <br/>

  </TabItem>
</Tabs>

## Contact Super Protocol

If you face any issues, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.