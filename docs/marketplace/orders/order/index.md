---
id: "order"
title: "Order"
slug: "/orders/order"
sidebar_position: 3
---

This screen provides detailed information about an order. Learn more about [Orders](/fundamentals/orders).

<img src={require('../../images/order-full.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The contents of an order are encrypted and accessible only to the user who placed it. However, general information about orders is recorded on the blockchain and publicly visible due to the blockchain's transparent nature.

## Order

**Status** indicates the current state of the order:

- **Suspended**. The order is awaiting the creation of suborders.
- **Blocked**. A suborder temporarily blocks the order to generate access keys and authorize the confidential computing device to access the suborder's content.
- **In Queue**. The order is awaiting in the queue for the computing device to become available.
- **Processing**. The machine is executing the order inside a Trusted Execution Environment.

Statuses specific for Deploy orders:

- **Deployed**. The model is running and available via the **Access Link**.
- **Done**. The model is no longer running.

Statuses specific for Fine-tune orders:

- **Ready**. The new layer is available for download using the **Get Result** button.
- **Done**. The order result is no longer available for download.

Additional possible statuses:

- **Canceling**: the order is being canceled by the customer's request.
- **Canceled**: the order has been canceled successfully, and the remaining order deposit was transferred back to the customer's wallet.
- **Error**: the order was not completed successfully due to an error. To check the error message, download the order result by clicking the **Get Result** button. Read about the [most common errors and how to fix them](/marketplace/guides/troubleshooting#order-status-error).

Learn more about [statuses](/fundamentals/orders#order-status).

**Lease Remaining** indicates the remaining time until the order is completed and gets the Done status. It is calculated by dividing the remaining order balance by the total cost of all the offers priced per hour. For Deploy orders with the Deployed status, it is the duration the model will remain operational.

## Financials

The **Financials** section shows payment-related information about the order:

- **Cost To Date** is the total amount of TEE tokens spent on the order so far.
- **Cost Per Hour** is the total cost of all the offers priced per hour. The order balance decreases by this amount every hour.
- **Balance** is the remaining order balance. You can replenish the balance using the **Extend Lease** button.

## Deployment

The **Deployment** section informs about the launched tunnel. Tunnels enable end users to securely access a model deployed on Super Protocol from the internet. Learn more about [Tunnels](/fundamentals/tunnels).

**Status** indicates the current state of the tunnel:

- **Creating**: the tunnel order has been placed, but the tunnel or the model is not ready yet. The AI engine's web UI is not accessible.
- **Online**: the tunnel is operational, and the model is running. End users may access the AI engine's web UI via the **Access Link**.
- **Offline**: the tunnel order is done, and the tunnel is no longer available. The model is inaccessible, but the expired **Access Link** remains visible.

To get detailed information about the tunnel orders related to the main order, open the **Tunnels Orders** tab at the bottom of the screen. The **Tunnels** section and the **Tunnels Orders** tab only exist for orders that utilize tunnels and are only visible to the user who placed the order.

## Order management buttons

Depending on the order status, different buttons are visible:

- **Cancel Order** and **Extend Lease** for orders with the Suspended, Blocked, New, or Processing statuses.
- **Get Result** for orders with the Done, Error, and Canceled statuses.
- No buttons for orders with the Canceling status.

These buttons are only visible to the user who placed the order.

### Cancel Order

The **Cancel Order** button lets you cancel the order and transfer the remaining balance back to your wallet. Clicking the button initiates the cancellation process by creating a transaction that Web3 users should **Confirm** in MetaMask. If you **Reject** the transaction, the cancellation process will not proceed.

<img src={require('../../images/metamask-transaction.png').default} width="auto" height="auto" border="1"/>
<br/>

### Extend Lease

The **Extend Lease** button opens the **Extend Lease** window that allows you to add TEE tokens to the order balance:

- For Fine-tune orders, it may be necessary to finish the computation.
- For Deploy orders, it increases the time the model will be running.

<img src={require('../../images/extend-lease.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

During the testnet, the maximum running time for orders is limited due to limited computing resources. Refer to the [Testnet Limitations](/marketplace/limitations).

When the order is complete, all unspent TEE tokens on the order balance automatically return to the customer's wallet.

### Get Result

The **Get Result** button allows you to download a file containing:

- Order logs. If the order was completed with an error, you can check what went wrong.
- The result of computation if the order was completed successfully. For example, a new fine-tuned layer for a model.

## Providers tab

The **Providers** tab contains additional information about the order and its suborders.

<img src={require('../../images/order-providers.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click the suborder's **ID** number to open its **Order** screen. Note that some suborders may not be available to view.

Read more about [order types](/fundamentals/orders).

## Tunnel Orders tab

The **Tunnel Orders** tab contains information about tunnel orders related to the main order. The tab is visible only for orders that utilize tunnels.

<img src={require('../../images/order-tunnels.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **Date Created** (hidden by default): the date and time when the customer placed the order.
- **Date Modified**: the date and time of the latest change in the order status.
- **Order ID**: a unique offer identification number. It is incremental and continuous for all orders and suborders on Super Protocol.
- **Offer**: the solution used in the tunnel's order or suborder. Learn more about [orders](/fundamentals/orders) and [tunnels](/fundamentals/tunnels).
- **Status**: current status of the order. Learn more about [statuses](/fundamentals/orders#order-status).
- **Lease Remaining**: the remaining time until the order is complete and gets the Done status.
- **Cost to Date**: the total amount of TEE tokens spent on the order so far.
- **Cost Per Hour** (hidden by default): the total cost of all the offers priced per hour. Every hour, the order balance decreases by this amount.
- **Balance**: the remaining order balance. When it reaches zero, the order gets the Done status. You can replenish the balance using the **Extend Lease** button.

## Events tab

The **Events** tab contains information on what is happening with the order.

<img src={require('../../images/order-events.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **Date**: the date and time of the event.
- **Order ID**: the identification number of the order or suborder to which the event is related.
- **Order Type**: either **Order** or **Suborder**.
- **Type**: **Compute** for the main order; **Solution**, **Data**, or **Storage** for suborders.
- **Provider**: the name of the provider.
- **Name**: the name of the offer.
- **Status**: status of the order or suborder when the event occurred.
- **Event**: code of what happened. The full list of the events:
    + **OrderCreated**: the order or suborder is created on the blockchain.
    + **OrderStarted**: the compute order has started.
    + **OrderStatusUpdated**: the order or suborder status has changed without any new events.
    + **OrderEncryptedResultUpdated**: the resource path to the order result was written to the blockchain.
    + **OrderChangeWithdrawn**: the remaining token balance was returned to the customer.
    + **OrderProfitWithdrawn**: the provider withdrew the offer payment from the order balance.
- **Value**: transaction value in TEE tokens, if applicable.
- **Txn Hash**: transaction hash. Clicking it opens the transaction in the [OKLink block explorer](https://www.oklink.com/).