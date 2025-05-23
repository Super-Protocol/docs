---
id: "order"
title: "Order"
slug: "/all-orders/order"
sidebar_position: 1
---

This screen provides detailed information about a particular <a id="order"><span className="dashed-underline">order</span></a>.

<img src={require('../images/order.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The contents of an order are encrypted and accessible only to the user who placed it. However, general information about orders is recorded on the blockchain and publicly visible due to the blockchain's transparent nature.

## Order

**Status** indicates the current state of the order:

- **Suspended**. The order is awaiting the creation of suborders.
- **Blocked**. A suborder temporarily blocks the order to generate access keys and authorize the confidential computing device to access the suborder's content.
- **In Queue**. The order is awaiting in the queue for the computing device to become available.
- **Processing**. The machine is executing the order inside a <a id="tee"><span className="dashed-underline">Trusted Execution Environment</span></a>.

Statuses specific for deployment orders:

- **Deployed**. The model is running and available via the **Access Link**.
- **Done**. The model is no longer running.

Additional possible statuses:

- **Canceling**: the order is being canceled by the customer's request.
- **Canceled**: the order has been canceled successfully, and the remaining order deposit was transferred back to the customer's wallet.
- **Error**: the order was not completed successfully due to an error. To check the error message, download the order result by clicking the **Get Result** button. Read about the [most common errors and how to fix them](/marketplace/guides/troubleshooting#order-status-error).

Read about [statuses](/fundamentals/orders#order-status).

**Lease Remaining** indicates the remaining time until the order is completed and gets the Done status. It is calculated by dividing the remaining order balance by the total cost of all the <a id="offer"><span className="dashed-underline">offers</span></a> priced per hour. For deployment orders with the Deployed status, it is the duration the model will remain operational.

## Financials

The **Financials** section shows payment-related information about the order:

- **Cost To Date** is the total amount of SPPI tokens spent on the order so far.
- **Cost Per Hour** is the total cost of all the offers priced per hour. The order balance decreases by this amount every hour.
- **Balance** is the remaining order balance. You can replenish the balance using the **Extend Lease** button.

## Deployment

The **Deployment** section informs about the launched <a id="tunnel"><span className="dashed-underline">tunnel</span></a>.

**Status** indicates the current state of the tunnel:

- **Creating**: the tunnel order has been placed, but the tunnel or the model is not ready yet. The model interface is not accessible.
- **Online**: the tunnel is operational, and the model is running. End users may access the model interface via the **Access Link**.
- **Offline**: the tunnel order is done, and the tunnel is no longer available. The model is inaccessible, but the expired **Access Link** remains visible.

To get detailed information about the tunnel orders related to the main order, open the **Tunnels Orders** tab at the bottom of the screen. The **Tunnels** section and the **Tunnels Orders** tab only exist for orders that utilize tunnels and are only visible to the user who placed the order.

## Order management buttons

Depending on the order status, different buttons are visible:

- **Cancel Order** and **Extend Lease** for orders with the Suspended, Blocked, New, or Processing statuses.
- **Get Result** for orders with the Done, Error, and Canceled statuses.
- No buttons for orders with the Canceling status.

These buttons are only visible to the user who placed the order.

### Cancel Order

The **Cancel Order** button lets you cancel the order and transfer the remaining balance back to your wallet. Clicking the button initiates the cancellation process by creating a transaction that Web3 users should **Confirm** in MetaMask.

<img src={require('../images/metamask-transaction.png').default} width="auto" height="auto" border="1"/>
<br/>

### Extend Lease

The **Extend Lease** button opens the **Extend Lease** window that allows you to add SPPI tokens to the order balance:

- For Fine-tune orders, it may be necessary to finish the computation.
- For deployment orders, it increases the time the model will be running.

<img src={require('../images/extend-lease.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

During the testnet, the maximum running time for orders is limited due to limited computing resources. Check the [Testnet Limitations](/marketplace/limitations).

When the order is complete, all unspent SPPI tokens on the order balance automatically return to the customer's wallet.

### Get Result

The **Get Result** button allows you to download a file containing:

- Order logs. If the order was completed with an error, you can check what went wrong.
- The result of computation if the order was completed successfully. For example, a new fine-tuned layer for a model.

## Providers tab

The **Providers** tab contains additional information about the order and its suborders.

<img src={require('../images/order-providers.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click the suborder's **ID** number to open its **Order** screen. Note that some suborders may not be available to view.

## Tunnel Orders tab

The **Tunnel Orders** tab contains information about the tunnel orders related to the main order. The tab is visible only for orders that utilize <a id="tunnel"><span className="dashed-underline">tunnels</span></a>.

<img src={require('../images/order-tunnels.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **Date Created** (hidden by default): The date and time when the customer placed the order.
- **Date Modified**: The date and time of the latest change in the order status.
- **Order ID**: A unique offer identification number. It is incremental and continuous for all orders and suborders on Super Protocol.
- **Offer**: The <a id="solution"><span className="dashed-underline">solution</span></a> used in the tunnel order or suborder.
- **Status**: The current order status.
- **Lease Remaining**: The remaining time until the order is complete and gets the Done status.
- **Cost to Date**: The total amount of SPPI tokens spent on the order so far.
- **Cost Per Hour** (hidden by default): The total cost of all the offers priced per hour. Every hour, the order balance decreases by this amount.
- **Balance**: The remaining order balance. When it reaches zero, the order gets the Done status. You can replenish the balance using the **Extend Lease** button.

## Events tab

The **Events** tab contains information on what is happening with the order.

<img src={require('../images/order-events.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **Date**: The date and time of the event.
- **Order ID**: The identification number of the order or suborder to which the event is related.
- **Order Type**: either **Order** or **Suborder**.
- **Type**: **Compute** for the main order; **Solution**, **Data**, or **Storage** for suborders.
- **Provider**: The name of the provider.
- **Name**: The name of the offer.
- **Status**: The status of the order or suborder when the event occurred.
- **Event**: The code of what happened. The main blockchain events:
    - **OrderCreated**: The order or suborder is created on the blockchain.
    - **OrderStarted**: The compute order has started.
    - **OrderStatusUpdated**: The order or suborder status has changed without any new events.
    - **OrderEncryptedResultUpdated**: The resource path to the order result was written to the blockchain.
    - **OrderChangeWithdrawn**: The remaining token balance was returned to the customer.
    - **OrderProfitWithdrawn**: The provider withdrew the offer payment from the order balance.
- **Value**: The transaction value in SPPI tokens, if applicable.
- **Txn Hash**: The transaction hash. Clicking it opens the transaction in the [OKLink block explorer](https://www.oklink.com/).