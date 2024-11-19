---
id: "order"
title: "Order"
slug: "/orders/order"
sidebar_position: 3
---

This screen provides detailed information about an order. Note that this screen is only visible to the user who placed the order. Learn more about [Orders](/fundamentals/orders).

(image: full screen, UI elements highlighted and numbered)
<br/>

## Order

**Status** indicates the current state of the order:

- **Suspended**. The order is awaiting the creation of suborders.
- **Blocked**. A suborder temporarily blocks the order to generate access keys and authorize the compute to access the suborder's content.
- **New**. The order is awaiting in the queue for the compute to become available.
- **Processing**. The compute is executing the order inside a Trusted Execution Environment. Note that this status has different meanings depending on the order type:
    + For Fine-tune orders, the computation is in progress.
    + For Deploy orders, the model is running normally. -- _это неверно; модель работает хорошо и доступна, когда статус туннелей Online и есть ссылка_
    + _For Tunnel orders, the tunnel is deployed and running normally; the Tunnel client running the web server is available from the internet._
- **Done**. This status also has different meanings depending on the order type:
    + For Fine-tune orders, the computation is done, and the customer can download the order result.
    + For Deploy orders, the computation is done, the model is no longer running, and the customer can download the order result.
    + _For Tunnel orders, the tunnel is no longer deployed; the Tunnel client and the web server are no longer available from the internet._
    + For storage suborders, the main order's result is no longer available for download.

Additional possible statuses:

- **Cancelling**: the order is being canceled by the customer's request.
- **Canceled**: the order has been canceled successfully, and the remaining order deposit was transferred back to the customer's wallet.
- **Error**: the order was not completed successfully due to an error. To check the error message, download the order result by clicking the **Get Result** button.

Learn more about [statuses](/fundamentals/orders#order-status).

**Lease Remaining** indicates the remaining time until the order is completed and gets the Done status. It is calculated by dividing the remaining order balance by the total cost of all the offers priced per hour.

For Deploy orders, it is the duration the model will remain operational. For storage suborders, it is the duration the order result will remain available for download.

## Financials

The **Financials** section shows payment-related information about the order:

- **Cost To Date** is the total amount of TEE tokens spent on the order so far.
- **Cost Per Hour** is the total cost of all the offers priced per hour. The order balance decreases by this amount every hour.
- **Balance** is the remaining order balance. You can replenish the balance using the **Extend Lease** button.

## Tunnels

The **Tunnels** section informs about the launched tunnel. Tunnels enable end users to securely access a model deployed on Super Protocol from the internet. Learn more about [Tunnels](/fundamentals/tunnels).

**Status** indicates the current state of the tunnel:

- **Creating**: the tunnel order has been placed, but the tunnel is not ready yet. The AI engine's web UI is not accessible.
- **Online**: the tunnel order is processing, and the tunnel is operational. End users may access the AI engine's web UI via the **Access Link**.
- **Offline**: the tunnel order is complete, and the tunnel is no longer available. The AI engine's web UI is inaccessible, but the expired **Access Link** remains visible.

To get detailed information about the tunnel orders related to the main order, open the **Tunnels Orders** tab at the bottom of the screen. Note that the **Tunnels** section and the **Tunnels Orders** tab are visible only for orders that utilize tunnels.

## Order management buttons

Depending on the order status, different buttons are visible:

- **Cancel Order** and **Extend Lease** for orders with the Suspended, Blocked, New, or Processing statuses.
- **Get Result** for orders with the Done, Error, and Canceled statuses.
- No buttons for orders with the Cancelling statuses.

(image: two cutouts side-by-side on the same image)
<br/>
<br/>

### Cancel Order

The **Cancel Order** button lets you cancel the order and transfer the remaining balance back to your wallet. Clicking the button initiates the cancellation process by creating a transaction that _Web3 users_ should **Confirm** in MetaMask. If you **Reject** the transaction, the cancellation process will not proceed.

(image: MetaMask, cancellation confirmation)
<br/>
<br/>

### Extend Lease

The **Extend Lease** button opens the **Extend Lease** window that allows you to add TEE tokens to the order balance:

- For Fine-tune orders, it may be necessary to finish the computation.
- For Deploy orders, it increases the time the model will be running.

(image)
<br/>
<br/>

When the order is complete, all unspent TEE tokens on the order balance automatically return to the customer's wallet.

### Get Result

The **Get Result** button allows you to download a TAR.GZ archive file containing:

- The result of computation. For example, a new fine-tuned layer for a model.
- Order logs. If the order was completed with an error, here you can check what went wrong.

## Providers tab

The **Providers** tab contains additional information about the order and its suborders:

- **ID**
- **Type**
- **Provider**
- **Name**
- **Status**
- **Created Date**
- **Modified Date**
- **Cost**

(image: Providers tab)
<br/>

## Events tab

The **Events** tab contains information on what is happening with the order:

- **Date**: the date and time of the event.
- **Order ID**: the identification number of the order or suborder to which the event is related.
- **Order Type**: either **Order** or **Suborder**.
- **Type**: **Compute** for the main order; **Solution**, **Data**, or **Storage** for suborders.
- **Provider**: provider of the corresponding offer.
- **Name**: name of the offer.
- **Status**: status of the order or suborder when the event occurred.
- **Event**: code of what happened. The full list of the events:
    + **OrderCreated**: the order or suborder is created on the blockchain.
    + **OrderStarted**: the compute order has started.
    + **OrderStatusUpdated**: the order or suborder status has changed without any new events.
    + **OrderEncryptedResultUpdated**: the resource path to the order result was written to the blockchain.
    + **OrderChangeWithdrawn**: the remaining token balance was returned to the customer.
    + **OrderProfitWithdrawn**: the provider withdrew the offer payment from the order balance.
- **Value**: transaction value in TEE tokens, if applicable.
- **Txn Hash**: transaction hash. Clicking it opens the transaction in the OKLink block explorer.

(image: Events tab)
<br/>

## Tunnel Orders tab

The **Tunnel Orders** tab contains information about tunnel orders related to the main order. It is visible only for orders that utilize tunnels.

- **Date Created** (hidden by default): the date and time when the customer placed the order.
- **Date Modified**: the date and time of the latest change in the order status.
- **Order ID**: a unique offer identification number. It is incremental and continuous for all orders and suborders on Super Protocol.
- **Offer**:
- **Status**: current status of the order. Learn more about [statuses](/fundamentals/orders#order-status).
- **Lease Remaining**: the remaining time until the order is complete and gets the Done status.
- **Cost to Date**: the total amount of TEE tokens spent on the order so far.
- **Cost Per Hour** (hidden by default): the total cost of all the offers priced per hour. Every hour, the order balance decreases by this amount.
- **Balance**: the remaining order balance. When it reaches zero, the order gets the Done status. You can replenish the balance using the **Extend Lease** button.

(image: Tunnel Orders tab)
<br/>
<br/>