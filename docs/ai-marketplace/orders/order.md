---
id: "order"
title: "Order"
slug: "/orders/order"
sidebar_position: 3
---

This screen provides detailed information about a placed order.

Note that the general information about orders and their suborders is visible to anyone. Blockchain is a transparent environment, and all orders are publicly accessible. However, the content of an order remains confidential and the order result is encrypted.

Learn more about [Orders](/fundamentals/orders).

(image: full screen, UI elements highlighted and numbered)
<br/>

## Order section

**Status** indicates the current state of the order:

- **Suspended**: the order is awaiting the creation of suborders.
- **Blocked**: the solution and data providers generate access keys and authorize the compute provider to access the content. _ПЕРЕПИСАТЬ. Нужно придумать, что делать со словом provider, оно слишком многозначное_
- **New**: the order is awaiting in the queue for the compute to become available.
- **Processing**: the compute is executing the order inside a Trusted Execution Environment. Note that this status has different meanings depending on the order type:
    _Поменять формулировки на Сашины:_
    + For Fine-tune orders, the compute is working with the data.
    + For Deploy orders, the model is up and running. 
- **Done**: the computation is over, and the customer can download the order result. For Deploy orders, it also means the model is no longer ПОДУМАТЬ НАД СЛОВОМ working. For storage suborders, it means the order result is no longer available for download.

Additional possible statuses:

- **Cancelling**: the order is in the process of being canceled by the customer's request.
- **Canceled**: the order has been canceled successfully, and the remaining order deposit was transferred back to the customer's wallet.
- **Error**: the order was not completed successfully due to an error. To check the error message, download the order result by clicking the **Get Result** button.

**Lease Remaining** indicates the remaining time until the order is completed and gets the Done status. It is calculated by dividing the remaining order balance by the total cost of all the offers priced per hour.

For Deploy orders, it is the duration the model will remain operational. For storage suborders, it is the duration the order result will remain available for download.

## Financials section

The **Financials** section shows payment-related information about the order:

- **Cost To Date** is the total amount of TEE tokens spent on the order so far.
- **Cost Per Hour** is the total cost of all the offers priced per hour. The order balance decreases by this amount every hour.
- **Balance** is the remaining order balance. When it reaches zero, Deploy orders and storage suborders ПЛОХОЕ СЛОВО _get_ the Done status. You can replenish the balance using the **Extend Lease** button.

## Tunnels section

The **Tunnels** section shows information about the launched tunnel. Tunnels enable end users to securely access a model deployed on Super Protocol from the internet. Read about [Tunnels](/fundamentals/tunnels) to learn more.

**Status** indicates the current state of the tunnel:

- **Creating**: the tunnel order has been placed, but the tunnel is not ready yet. The AI engine's web UI is not accessible.
- **Online**: the tunnel order is processing, and the tunnel is operational. End users may access the AI engine's web UI via the **Access Link**.
- **Offline**: the tunnel order is completed, and the tunnel is no longer available. The AI engine's web UI is inaccessible, but the expired **Access Link** remains visible.

To get detailed information about the tunnel orders related to the main order, open the **Tunnels Orders** tab at the bottom of the screen. Note that the **Tunnels** section and the **Tunnels Orders** tab are visible only for orders that utilize tunnels.

## Order management buttons

Depending on the order status, different buttons are visible:

- **Cancel Order** and **Extend Lease** for orders with the Suspended, Blocked, New, or Processing statuses.
- **Get Result** for orders with the Done and Error status.
- No buttons for orders with the Cancelling and Canceled statuses.

(image: two cutouts side-by-side on the same image)
<br/>
<br/>

The **Cancel Order** button lets you cancel the order and transfer the remaining balance back to your wallet. Clicking the button initiates the cancellation process by creating a transaction that you should **Confirm** in MetaMask. If you **Reject** the transaction, the cancellation process will not proceed.

Note that only the customer who placed the order can cancel it.

(image: MetaMask, cancellation confirmation)
<br/>
<br/>

The **Extend Lease** button opens a pop-up window that allows you to add TEE tokens to the order balance:

- _Fine-tune ТОЖЕ_
- For Deploy orders, replenishing the order balance increases the time the model will be operational.
- For storage suborders, replenishing the order balance increases the time the order result will be available for download.

Note that anyone can replenish the balance, not just the customer who placed the order.

The **Get Result** button allows you to download a TAR.GZ archive file containing:

- The result of computation. For example, a new fine-tuned layer for a model.
- Order logs. If the order was completed with an error, here you can check what went wrong.

_Web3:_
To download the order result, you must enter the order passphrase you created when you placed the order. If you lost the passphrase, there is no way to recover it, and you should place it again.

Note that anyone can download the order result if they have the order passphrase.

_Demo:_

## Providers tab

The **Providers** tab contains short information about the order and its suborders: ЗДЕСЬ МОЖНО ДАТЬ ССЫЛКУ на фандаменталз про сабордеры

- **ID**
- **Type**
- **Provider**
- **Name**
- **Status**
- **Created Date**
- **Modified Date**
- **Cost**

To show, hide, and rearrange table columns, use the **cogwheel** button.

(image: Providers tab)
<br/>
<br/>

## Events tab

The **Events** tab contains information on what is happening with the order:

- **Date**: date and time of the event.
- **Order ID**: identification number of the order or suborder to which the event is related.
- **Order Type**: either **Order** or **Suborder**.
- **Type**: **Compute** for the order itself; **Solution**, **Data**, or **Storage** for suborders. Read about [Orders](/fundamentals/orders) to learn more.
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
<br/>

## Tunnel Orders tab

The **Tunnel Orders** tab contains information about tunnel orders related to the main order. It is visible only for orders that utilize tunnels. _РАСПИСАТЬ Tunnel Launcher и Tunnel Server, их сабордеры, пассфразу туннель сервера, Extend Lease, etc._

- **Date Created** (hidden by default): the date and time when the customer placed the order.
- **Date Modified**: the date and time of the latest change in the order status.
- **Order ID**: a unique offer identification number. It is incremental and continuous for all orders and suborders on Super Protocol.
- **Offer**:
- **Status**: current status of the order. [Read more](/ai-marketplace/orders#order-status) about statuses.
- **Lease Remaining**: the remaining time until the order is completed and gets the Done status. It is calculated by dividing the remaining order balance by the total cost of all the offers priced per hour. For Deploy orders, it is the duration the model will operate. For storage suborders, it is the duration the order result will remain available. _-- СОКРАТИТЬ, чтобы не было повторов, отправить назад_
- **Cost to Date**: the total amount of TEE tokens spent on the order so far.
- **Cost Per Hour** (hidden by default): the total cost of all the offers priced per hour. Every hour, the order balance decreases by this amount.
- **Balance**: the remaining order balance. When it reaches zero, the order gets the Done status. You can replenish the balance using the **Extend Lease** button.
- **Model**: 
- **Datasets** (hidden by default):

(image: Tunnel Orders tab)
<br/>
<br/>