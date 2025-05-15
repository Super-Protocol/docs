---
id: "orders"
title: "Orders"
slug: "/orders"
sidebar_position: 3
---

_Orders_ and _suborders_ on Super Protocol are digital contracts between customers and providers for leasing computing services, software products, and data—collectively referred to as <a id="offer"><span className="dashed-underline">offers</span></a>.

The term _order_ always implies the usage of a compute offer. Every additional offer added to the order creates a separate _suborder_ with the respective provider. If you add your uploaded <a id="solution"><span className="dashed-underline">solutions</span></a> and data, they create no suborders.

Every order and suborder has a unique identification number—_order ID_. It is incremental and continuous for both orders and suborders.

<img src={require('../marketplace/images/order.png').default} width="auto" height="auto"/>
<br/>

## Order creation

Most orders consist of four building blocks:

- **Solution**: <a id="engine"><span className="dashed-underline">Engines</span></a>, applications, scripts, base images, and other programs intended to launch on Super Protocol.
- **Data**: AI models, webpages, configs, datasets, databases, and any other data that solutions may require.
- **Compute**: Confidential computing resources required to execute solutions and data inside a <a id="tee"><span className="dashed-underline">Trusted Execution Environment</span></a> (TEE).
- **Storage**: Decentralized storage that keeps order results after execution.

There are two ways to place an order:

- The [Marketplace web app](https://marketplace.superprotocol.com/) has a convenient graphical user interface, but limited to deploying AI models using the engines available on the Marketplace.
- The [command-line interface (CLI)](/cli) allows the launch of any applications and provides additional functionality.

Orders exist on the blockchain and thus are visible to anyone. The general information about any order is readily available using the [`orders get`](/cli/commands/orders/get) command. However, the solutions and data inside a TEE remain confidential.

The storage suborder keeps the encrypted order result for as long as the customer keeps paying for it. Only the customer who placed the order knows the private key necessary to decrypt the result.

## Usage scenarios

Depending on the solution, there are two typical usage scenarios:

- One-off orders perform a specific computation and produce a result, such as an order to fine-tune an AI model.
- Long-term orders keep running as long as the order has money in the balance. For example, an order to deploy an AI model using an engine with a web interface accessible through a confidential <a id="tunnel"><span className="dashed-underline">tunnel</span></a>.

_Lease time_ is the duration for which a customer rents the services of an offer. Solutions, data, and storage are suborders, so their lease time is tied to the compute lease time.

_Deposit_ is the initial payment for the order. It is calculated during the order creation depending on the selected offers and the desired lease time.

Order _balance_ is a dedicated amount of funds to pay the providers. The deposit determines the initial balance.

Long-term orders keep working as long as there is money on the balance to pay the provider. If the customer wants to extend the lease time, they can _replenish the balance_—add more funds. The customer gets all unspent tokens back automatically when the order is completed or canceled.

When the balance is close to zero, the order gets the "awaiting payment" flag. It warns the customer that the lease time will end soon. The Marketplace web app highlights such orders with a bright orange color.

## Cost and pricing

Super Protocol uses a _Pay-as-you-go_ model. Customers pay for services as they use them, rather than paying for a set period upfront.

Every offer has a cost set by its provider. The price can be either fixed or per hour depending on the offer.

| **Offer Type** | **Pricing**       | **Description**   |
|:-|:-|:-|
| Solution       | Fixed or per hour | Solution may require one-time payment or an hourly payment. |
| Data           | Fixed or per hour | Data may require one-time payment or an hourly payment. |
| Compute        | Per hour          | The main order works until it is completed or the balance runs out. |
| Storage        | Per hour          | The storage suborder launches when the main order is completed to keep the order result until the balance runs out. |

## Order status

You can check the status of your order in the Marketplace web app on the **All Orders** screen. In the CLI, use the [`orders get`](/cli/commands/orders/get) command.

### Compute order

Statuses:

- **Suspended**: The order is waiting for the creation of the solution and data suborders.
- **Blocked**: The order is waiting for the authorization from the solution and data providers to access the content.
- **New**: The order is waiting for the response from the compute provider.
- **In Queue**: The order is waiting in the queue for the compute to become available. This status appears only if the compute is overloaded with orders.
- **Processing**: The compute is executing the order inside a TEE.
- **Done**: The order is completed.

Note that the **Processing** and **Done** statuses may have different meanings depending on the usage scenario. For one-time orders, such as executing a Python script, **Processing** means that the machine is working with the solution and data. When this is over, the main order becomes **Done**.

For long-term orders, such as AI model deployment orders, **Processing** means that the order is up and running normally, and its service is accessible to users. When the order is **Done**, the order ends, and the service is no longer available.

### Solution and data suborders

Statuses:

- **New**: The suborder was created on the blockchain.
- **Processing**: The offer provider authorizes the compute to access the offer content—the solution or data.
- **Done**: The content is available to the compute, and the offer provider withdraws their earnings from the order.

Typically, these steps take less than a minute.

If you launch your solution or data, they create no suborders. The compute downloads your solution and data into the TEE before processing the order.

### Storage suborder

Storage keeps the encrypted order result after the order is completed. The TEE does not store anything and is destroyed after the main order is done. Typically the storage suborder is created when the main order is almost completed.

Statuses:

- **New**: The suborder was created, but the order result is not ready yet.
- **Processing**: The storage now has the order result, and the customer can download it.
- **Done**: The lease expired, and the order result is no longer available.

Users can create independent storage orders to keep files. This functionality is only available via the CLI using the [`files upload`](/cli/commands/files/upload) command. Note that such orders do not appear in the Marketplace web app.

### Order cancelation

Any order or suborder may be canceled. If the customer cancels the main order, all its suborders are canceled as well. Similarly, if the customer cancels a solution or data suborder, the main orders and all its suborders are canceled too. Storage suborders may be canceled without affecting the main order because they start when the main order is already done.

In any case, all tokens left of the balance are returned to the customer.

Statuses:

- **Canceling**: The order is being canceled.
- **Canceled**: The order is canceled.

## Events

To check the information on what is happening with the order, check the [**Events** tab](/marketplace/all-orders/order#events-tab) on the **Order** screen in the Marketplace web app.

<img src={require('../marketplace/images/order-events.png').default} width="auto" height="auto"/>
<br/>
<br/>

The tab shows, among other things:

- The list of the main blockchain events.
- Correlation between the events and the order and suborder statuses.
- Absolute transaction values.
- Links to the transaction details on a block explorer.

The main blockchain events:

- **OrderCreated**: The order or suborder is created on the blockchain.
- **OrderStarted**: The compute order has started.
- **OrderStatusUpdated**: The order or suborder status has changed without any new events.
- **OrderEncryptedResultUpdated**: The resource path to the order result was written to the blockchain.
- **OrderChangeWithdrawn**: The remaining token balance was returned to the customer.
- **OrderProfitWithdrawn**: The provider withdrew the offer payment from the order balance.
