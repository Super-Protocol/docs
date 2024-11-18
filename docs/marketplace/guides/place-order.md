---
id: "place-order"
title: "How to Place an Order"
slug: "/guides/place-order"
sidebar_position: 3
---

This guide provides step-by-step instructions on how to build and place an order on Super Protocol using **Order Builder**. It is a tool to pick the order's components, configure them, calculate prices, and place orders. Refer to the [Order Builder](/marketplace/orders/order-builder) documentation to learn more.

Open Order Builder by clicking **Order** in the header of the Marketplace web app:

(image: header, Order highlighted)
<br/>

## Step 1. Select the order type

**Order Type** determines the operating mode:

- **Fine-tune** is an order to customize a pre-trained model for a specific purpose by creating an additional layer.
- **Deploy** is an order to run a pre-trained model with a web interface.

:::note

Fine-tune orders are not yet available in the current version of the Marketplace.

:::

Select **Deploy**:

(image: Order Type)
<br/>

## Step 2. Add models

Click **Marketplace** if you want to add an offer from the Marketplace or **My Content** if you want to add your uploaded model:

(image: order builder, Model highlighted)
<br/>
<br/>

You can also add models right from the **Models** and **My Files** screens.

Click the blue **[+]** button next to a model to add it to the order. If the offer has multiple slots, this will open the **Offer** window with the list of slots.

:::warning

A yellow warning icon indicates that the requirements of the selected model are not specified, and the system will not include the model in the automatic calculation of the compute configuration.

In this case, manually adjust the compute configuration before checkout to include the model's requirements.

:::

Learn more about [requirements and configurations](/fundamentals/slots).

## Step 3. Add datasets

For Deploy orders, dataset is an optional component.

:::note

Datasets are not yet available in the current version of the Marketplace.

:::

Skip this step and go to the Step 4.

## Step 4. Add an engine

Click **Select AI engine** to open a list of engines compatible with the added model:

(image: order builder, Engine highlighted)
<br/>
<br/>

Click the blue **[+]** button next to an engine to add it to the order. Once you add an engine, its configuration will open:

(image: engine settings)
<br/>
<br/>

Do not make changes unless you are confident in what you are doing. Modifying these settings can cause the model to malfunction.

## Step 5. Add a compute

Click **Select Compute** to open a list of available compute offers:

(image: order builder, compute highlighted)
<br/>
<br/>

The system calculates the compute configuration automatically based on the offers you already added to the order.

:::warning

If the requirements of the models or datasets you added were not specified, you will see a yellow warning icon next to them. In this case, manually adjust the compute configuration you see on the right side of the screen to include the models' or datasets' requirements.

:::

Click the blue **[+]** button next to a compute offer to add it to the order.

## Step 6. Set lease time

The footer at the bottom of the screen displays the total costs of the offers added to the order:

- **Fixed** is the total cost in TEE tokens for all fixed-price offers added to the order.
- **Per Hour** is the total cost in TEE tokens of all hourly-priced offers added to the order.
- **Lease Time** is the duration in hours for which you plan to lease the offers.
- **Pay now** is the initial order deposit you must pay at checkout.

(image: footer)
<br/>
<br/>

Set the desired **Lease Time**. For Deploy orders, this is the duration for which the model will remain running. For Fine-tune orders, ensure the lease time is sufficient to complete the computation. 

Note that increasing lease time increases the initial order deposit. You can also increase the deposit and, consequently, the lease time after checkout while the order is processing.

## Step 7. Confirm transactions

When everything is ready, click the **Checkout** button. This will open the [**Confirm Transactions** window](/marketplace/orders/order-builder/checkout) that will inform you about the final step of placing the order.

The confirmation process depends on the account type:

- **Web3 users** must confirm the transactions in the MetaMask window. If it does not appear automatically, manually open the MetaMask browser extension, select the transaction in the **Activity** tab, and confirm it.
- **Demo users** do not need to confirm the transaction manually, as they pay using free TEE tokens they provided at account creation. The transaction is processed automatically.

Note that placing a Deploy order also places a Tunnels order. So, you need to confirm two transactions.

Once the order is placed successfully, you will be redirected to its [**Order** screen](/marketplace/orders/order).

## Handling errors

If an error occurs during transaction confirmation, you will see the error message in this window and a notification in the bottom-right corner of the screen.

(image: errors)
<br/>
<br/>

To retry, click the **Try again** button. If the error persists, contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) for assistance.