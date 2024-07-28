---
id: "orders"
title: "Orders"
slug: "/fundamentals/orders"
sidebar_position: 4
---

_Orders_ and _suborders_ on Super Protocol are digital contracts between a customer and [offer](/developers/fundamentals/offers) providers. The term "order" always implies the usage of a compute offer. Every other offer added to the order creates a separate suborder related to the main order. Solutions and data uploaded by the customer create no suborders.

<img src={require('./../images/fundamentals_orders_1.png').default} width="auto" height="auto"/>

## Create orders

There are two ways to create orders:

- The [Marketplace GUI](/developers/marketplace) provides a more user-friendly experience, but you will be limited to the data and solution offers available on the Marketplace.
- [CLI](/developers/cli_guides) offers the full functionality. Check the [Quick guide](/developers/cli_guides/quick_guide) to deploy your own solutions and data.

Orders, just like everything else, are accessible on the blockchain. So, while the content inside a Trusted Execution Environment is confidential, the general information about the order is available to anyone.

The content of the order, including the order result, is encrypted. Only the customer knows the private key necessary to decrypt the result. The order result is kept by the storage suborder for as long as the customer keeps paying for it.

## Combinations

Most orders consist of four building blocks:

- **Solutions**: applications and base images
- **Data**: data required by solutions
- **Storage**: remote storage to keep solutions and data before the execution inside a Trusted Execution Environment as well as order results
- **Compute**: compute resources and a Trusted Execution Environment to execute together solutions and data.

Solutions and data may be either provided by offers or deployed by users. Offers are available for monetization on the Marketplace. But users can also upload solutions and data they have locally and add them to orders instead of using offers.

Storage and compute can only be provided by offers. Currently, only Super Protocol provides storage and compute resources.

## Usage scenarios

Super Protocol supports two order usage scenarios, depending on the solution:

- One-time orders perform a specific task and produce a result when done. For example, using an ML/AI Python model to run an inference on a batch of data.

- Long-term orders keep running and performing their functions as long as the order has money on the balance. For example, using tunnels to deploy an LLM with a web interface.

## Lease, deposit, and balance

_Lease time_ is the duration for which a customer rents the services of an offer. Solution and data are suborders, so their lease time is tied to the compute lease time.

_Deposit_ is the initial payment for the order. Lease time is necessary to calculate the deposit during the order creation.

Order _balance_ is a dedicated amount of funds to pay the providers. The deposit determines the initial balance.

Long-term orders keep working as long as there is money on the balance to pay the provider. If the customer wants to extend the lease time, they can _replenish the balance_—add more funds. The customer gets all unspent tokens back automatically when the order is completed or canceled.

When the balance is close to zero, the order gets the "awaiting payment" flag. It warns the customer that the lease time will end soon. Marketplace GUI highlights such orders with a bright orange color.

## Cost and pricing

Super Protocol uses a _Pay-As-You-Go_ model. Customers pay for services as they use them, rather than paying for a set period upfront.

Every offer has a cost set by its provider. The price can be either fixed or per hour depending on the offer.

| **Offer Type**   | **Pricing Conditions**  |**Description**   |
|:-|:-|:-|
| Solution  | Fixed or per hour| Solution orders may require payment for every use or every hour of usage.  |
| Data      | Per hour| Data orders require payment for every hour of usage.  |
| Compute  | Per hour         | The main order works until it is completed or the balance runs out.  |
| Storage  | Per hour          | The storage order launches when the main order is completed to keep the order result until the balance runs out.  |

## Order status

You can check the status of any order in the Marketplace GUI on the [**All orders**](https://marketplace.superprotocol.com/all-orders) page. In the Marketplace CLI, use the [`orders get`](/developers/cli_commands/orders/get) command.

### Compute order statuses

A compute order—the main order—begins as **Suspended**. This status means that the order waits for the creation of solution and data suborders.

When the suborders are created, the compute order gets the **Blocked** status. At this stage, the solution and data providers generate keys and authorize the compute provider to access the content.

Once this is done, the compute order gets the **New** status and waits in the queue for the compute offer to become available.

When the machine is available, the compute order gets the status **Processing**, which is the main status for execution inside a Trusted Execution Environment. When the order is completed, it receives the **Done** status.

Note that the **Processing** and **Done** statuses may have different meanings depending on the usage scenario. For one-time orders such as Python models, **Processing** means that the machine is working with the solution and data. When this processing is over, the main order becomes **Done**.

For long-term orders such as tunnel and storage orders, **Processing** means that the order is up and running normally, accessible to users, providing services, etc. And when the order is **Done**, the order has ended and is no longer working.

### Solution and data

A solution or data suborder starts as **New**. It means that the suborder was created on the blockchain.

The next status is **Processing**. At this stage, the solution and data providers generate keys and authorize the compute provider to access the content. The suborder becomes **Done**, and the providers withdraw their earnings from the order. Typically, all these steps take less than a minute.

The above applies to the Marketplace offers that have providers. If you deploy your solution or data, they are downloaded into the Trusted Execution Environment before the order starts.

### Storage

Storage suborder keeps the order result after the main order is completed. The Trusted Execution Environment does not store anything and is destroyed after the order ends.

A storage suborder also starts as **New**. When the order result is ready, the storage suborder receives the status **Processing**. It means, the suborder has the order result, and the customer can download it.

When the lease expires the suborder becomes **Done**. It means the order result is no longer available.

Typically the storage suborder is created when the main order is almost completed to keep the result available for the customer. However, sometimes there is no order result to store. In this case, the storage suborder is not created.

### Cancelations

Any order or suborder may be canceled. If the customer cancels the main order, all its suborders are canceled as well. Similarly, if the customer cancels a solution or data suborder, the main orders and all its suborders are canceled too. Storage suborders may be canceled without affecting the main order because they start when the main order is **Done**.

In any case, all tokens left of the balance are returned to the customer.

Statuses:

- **Canceling**: The order is being canceled.
- **Canceled**: The order is canceled.

### Stuck orders

If you are using a community offer in your order and the offer fails to respond, your order will not proceed. When you see your order stuck with the **New** status for more than 15 minutes, check the community offer you used. If it is in the **Inactive** category, this offer is nonfunctional. Cancel your order to return the deposit.

## Events

<img src={require('./../images/fundamentals_orders_2.png').default} width="auto" height="auto"/>
<br/>

Check the **Events** tab on the order page in the Marketplace GUI to get more information on what is happening with the order. The tab shows, among other things:
- List of the main blockchain events
- Correlation between the events and the order and suborder statuses
- Absolute transaction values
- Links to the transaction details on a block explorer

The main blockchain events are:

- **OrderCreated**: the order or sub-order is created on the blockchain.
- **OrderStarted**: the compute order has started.
- **OrderStatusUpdated**: the order or sub-order status has changed without any new events.
- **OrderEncryptedResultUpdated**: the resource path to the order result was written to the blockchain.
- **OrderChangeWithdrawn**: the remaining token balance was returned to the customer.
- **OrderProfitWithdrawn**: the provider withdrew the offer payment from the order balance.
