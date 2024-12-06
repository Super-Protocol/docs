---
id: "place-order"
title: "How to Place an Order"
slug: "/guides/place-order"
sidebar_position: 2
---

This guide provides step-by-step instructions on how to build and place an order on Super Protocol.

## Step 1. Select a model

Select a model you want to deploy. You can add either a model from the Marketplace or your own model from My Content.

### From the Marketplace

To lease a model listed on the Marketplace, open the list of available **Models** and click the blue **[+]** button next to a model you want to add to the order.

<img src={require('../images/models-open.png').default} width="auto" height="auto" border="1"/>
<br/>

### Your model

To add your own model, you must prepare and upload it first. Read [How to Upload a Model](/marketplace/guides/upload) for step-by-step instructions.

When your model is uploaded, open **My Files** and click the blue **[+]** button next to a model to add it to the order.

<img src={require('../images/myfiles-open.png').default} width="auto" height="auto" border="1"/>
<br/>

### Open Order Builder

Once you add a model, open the **Order Builder** by clicking **Order** in the top panel of the Marketplace web app.

<img src={require('../images/order-builder-open.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**Order Builder** is a tool to pick the order's components, configure them, calculate prices, and place orders. Refer to the [Order Builder](/marketplace/orders/order-builder) documentation to learn more.

## Step 2. Add an engine

In the **Order Builder**, click **Select AI engine** to open the list of engines compatible with the added model.

<img src={require('../images/order-builder-engine.png').default} width="auto" height="auto" border="1"/> 
<br/>
<br/>

Each engine exists in two variants:

- Engines marked as 'GPU only' run the model on an NVIDIA H100 Tensor Core GPU.
- Engines marked as 'CPU only' run the model on an Intel TDX CPU. Models may run slower in this mode. However, it may be a suitable way to deploy smaller models since the TDX-only compute is cheaper and has more availability than TDX+H100 compute.

Click the blue **[+]** button to add the engine to the order.

If a yellow warning icon appears, it indicates that the selected engine is [incompatible](/marketplace/orders/order-builder/compatibility) with the selected model. Select another engine.

Once you add an engine, you can open its configuration by pressing the **Settings** button. Only make changes if you are confident in what you are doing, as modifying these settings can cause the model to fail to deploy. For more information about the settings, refer to the documentation for [Text Generation Web UI](https://github.com/oobabooga/text-generation-webui/wiki) and [ComfyUI](https://docs.comfy.org/).

## Step 3. Add compute

Once you add an engine, click **Select Compute** to open the list of available confidential computing devices.

<img src={require('../images/order-builder-compute.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click the blue **[+]** button to add a compute to the order.

:::warning

If you added your uploaded model, ensure it fits into the maximum compute configuration allowed for the testnet. Refer to the [Testnet Limitations](/marketplace/limitations).

:::

<img src={require('../images/order-builder-compute.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 4. Set lease time

The panel at the bottom of the screen displays the total prices:

- **Fixed** is the total for all fixed-price offers.
- **Per Hour** is the total for all hourly-priced offers.
- **Lease Time** is the duration for which you plan to run the order. Offers may have limits on the minimum and maximum allowed lease time.
- **Pay now** is the initial order deposit you must pay at checkout. It is calculated using the formula: **Fixed** + (**Per Hour** * **Lease Time**).

Set the desired **Lease Time**. During the testnet, it must be from two to four hours. Refer to the [Testnet Limitations](/marketplace/limitations).

<img src={require('../images/order-builder-footer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click the **Checkout** button. The system will check for [compatibility issues](/marketplace/orders/order-builder/compatibility) you need to fix. If there are no issues, the order will proceed to the next step.

## Step 5. Confirm transactions

This step is for Web3 users only.

Demo users do not need to confirm transactions; they do not pay using decentralized wallets. Instead, their payment relies on Super Protocol. The transactions are processed automatically.

Web3 users, however, must confirm two transactions in MetaMask. The first transaction is for the main model's order; the second one is placed automatically to deploy a set of confidential tunnels to make the running model available from the internet. Learn more about [Tunnels](/fundamentals/tunnels).

If you create an order for the first time, you need to confirm the spending cap. Click **Next** and then **Approve**.

<img src={require('../images/metamask-spending-cap.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

After that, confirm two transactions. Each may take 15-30 seconds to appear.

<img src={require('../images/metamask-transaction.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If the MetaMask browser extension does not open automatically, open it manually , select the transaction in the **Activity** tab, and confirm it.

<img src={require('../images/metamask-transaction-manually.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Once the Deploy order is placed successfully, you will be redirected to its [**Order**](/marketplace/orders/order) screen.

## Step 6. Manage the order

Your order may take about 30 minutes to process if you used a model from Marketplace and up to one hour for uploaded models. You can check the order status in the **Order** screen.

<img src={require('../images/order-full.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

When the model is deployed and available, you will see **Online** in the tunnel's status. To interact with the model, use the **Access Link** to open the engine's web UI in your browser.

<img src={require('../images/order-online.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To increase the time the model remains running, click the **Extend Lease** button and add tokens to the order deposit.

## Handle errors

If an error occurs during transaction confirmation, you will see an error message in this window and a notification in the bottom-right corner of the screen.

<img src={require('../images/error.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To retry, click the **Try again** button. If the error persists, contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.