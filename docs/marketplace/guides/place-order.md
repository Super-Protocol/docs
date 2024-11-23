---
id: "place-order"
title: "How to Place an Order"
slug: "/guides/place-order"
sidebar_position: 3
---

This guide provides step-by-step instructions on how to build and place an order on Super Protocol.

Marketplace has an integrated tool called **Order Builder** to pick the order's components, configure them, calculate prices, and place orders. Refer to the [Order Builder](/marketplace/orders/order-builder) documentation to learn more.

## Step 1. Select a model

Select a model you want to deploy. You can add either a model from Marketplace or your model.

### Marketplace offer

To lease a model on Marketplace, open the list of available **Models** and click the blue **[+]** button next to a model to add it to the order.

<img src={require('../images/models-open.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Once you added a model, open the **Order Builder** by clicking **Order** in the top panel of the Marketplace web app.

<img src={require('../images/order-builder-open.png').default} width="auto" height="auto" border="1"/>
<br/>

### Your model

To add your model, you must upload it first. Read [How to Upload a Model](/marketplace/guides/upload) for step-by-step instructions.

When your model is uploaded, open **My Files** with the list of your uploaded models and click the blue **[+]** button next to the model to add it to the order.

<img src={require('../images/myfiles-open.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Once you added a model, open the **Order Builder** by clicking **Order** in the top panel of the Marketplace web app.

<img src={require('../images/order-builder-open.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

A yellow warning indicates that the requirements of the model are not specified. The system will not include the model in the automatic calculation of the compute configuration because it doesn't know how much resources it needs to run.

<img src={require('../images/model-warning.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

:::warning

Ensure your model fits into the total maximum compute configuration allowed for the testnet. Refer to the [Testnet Limitations](/marketplace/limitations).

:::

## Step 2. Add an engine

In the **Order Builder**, click **Select AI engine** to open the list of engines compatible with the added model.

Click the blue **[+]** button to add the engine to the order.

<img src={require('../images/order-builder-engine.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Once the engine is added, its configuration will open. Only make changes if you are confident in what you are doing, as modifying the engine's settings can cause the model to function incorrectly. For more information about the settings, refer to the documentation for [Text Generation Web UI](https://github.com/oobabooga/text-generation-webui/wiki) and [ComfyUI](https://docs.comfy.org/).

If a yellow warning icon appears, it indicates that the selected engine is incompatible with a selected model. Select another engine.

## Step 3. Add compute

Once you add an engine, click **Select Compute** to open the list of available confidential computing devices.

Click the blue **[+]** button to add a compute to the order. The system calculates the compute configuration automatically.

<img src={require('../images/order-builder-compute.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

:::warning

If you added your uploaded model, ensure it fits into the total maximum compute configuration allowed for the testnet. Refer to the [Testnet Limitations](/marketplace/limitations).

:::

## Step 4. Set lease time

The panel at the bottom of the screen displays the total prices:

- **Fixed** is the total for all fixed-price offers.
- **Per Hour** is the total for all hourly-priced offers.
- **Lease Time** is the duration for which you plan to run the order.
- **Pay now** is the initial order deposit you must pay at checkout. It is calculated using the formula: **Fixed** + (**Per Hour** * **Lease Time**).

Set the desired **Lease Time**.

<img src={require('../images/order-builder-footer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Note that increasing lease time increases the initial order deposit. You can also increase the deposit and, consequently, the lease time after checkout while the order is processing. However, offers may have limits on the minimum and maximum allowed lease time. The lease time of your order must be within these limits. Refer to the [Testnet Limitations](/marketplace/limitations).

Click the **Checkout** button. The system will check for [compatibility issues](/marketplace/orders/order-builder/compatibility) you need to fix. If there are no issues, the order will proceed to the next step.

## Step 5. Confirm transactions

This step is for Web3 users only.

Demo users do not need to confirm transactions; they do not pay using decentralized wallets. Instead, their payment relies on Super Protocol. The transactions are processed automatically.

Web3 users, however, must confirm two transactions in MetaMask. The first transaction is for the main model's order, the second one is placed automatically to deploy a set of confidential tunnels to make the running model available from the internet. Learn more about [Tunnels](/fundamentals/tunnels).

Each transaction may take 15-30 second to appear.

<img src={require('../images/metamask-transaction.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If the MetaMask browser extension do not open automatically, open it manually, select the transaction in the **Activity** tab, and confirm it.

<img src={require('../images/metamask-transaction-manually.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Once the Deploy order is placed successfully, you will be redirected to its **Order** screen.

## Step 6. Manage the order

Your order may take 20-30 minutes to process. You can check its status in the **Order** screen.

<img src={require('../images/order-full.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

When the model is deployed and available, you will see **Online** in the tunnel's status. To interact with the model, use the **Access Link** to open the engine's web UI in your browser.

To increase the time the model remains running, add tokens to the order deposit using the **Extend Lease** button.

<img src={require('../images/order-online.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Learn more about the [**Order**](/marketplace/orders/order) screen.

## Handling errors

If an error occurs during transaction confirmation, you will see the error message in this window and a notification in the bottom-right corner of the screen.

<img src={require('../images/error.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To retry, click the **Try again** button. If the error persists, contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.