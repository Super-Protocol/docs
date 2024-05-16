---
id: "orders"
title: "Orders"
slug: "/fundamentals/orders"
sidebar_position: 4
---

## What are orders

An *order* on Super Protocol is a digital contract between the customer and the providers of products and computing services called [offers](/developers/fundamentals/offers). Because Super Protocol is decentralized and there is no central intermediary, a separate order or sub-order is created with each provider. If the customer supplies their own solution and data, then there is no order for those.

When we say **order** we always refer to a TEE Compute order because this is where the solutions and data from different providers (or your own) come together to be executed.

The **sub-orders** are related to the main orders, and they are always between the customer and the providers of solutions, data and storage.

<img src={require('./../images/fundamentals_orders_1.png').default} width="auto" height="auto"/>

## Creating orders

There are two ways to create orders:

1. Using CLI if you want to deploy your own solutions (follow [this guide](/developers/cli_guides/quick_guide)).
2. Using [Marketplace GUI](/developers/marketplace) if you want to deploy data and solution offers from the Marketplace. 

Orders are accessible openly on blockchain. While the contents inside the TEE are confidential, the general information about the order is available to anyone, just like everything on blockchain.

Contents of the orders are encrypted by a private key that known only to the customer. The results are kept by the Storage sub-order for as long as you keep paying for it.

## Combinations

Most orders consist of four building blocks:

* **Solutions** - the application or model that you want to run, as well as its *Base Image* (which is also a solution);
* **Data** - data required to run the solution;
* **Storage** - where solution and data are stored before execution inside TEE and also where results are received;
* **TEE Compute** - the confidential enclave (TEE) where solutions and data are executed together.

*Solutions* and *Data* may be either **user-deployed** or **offers**. *User-deployed* means that you run in Super Protocol content that you have locally, while an *offer* is a product that is available for monetization on the Marketplace. 

Meanwhile, *Base Images*, *Storages* and *TEE Computes* may only be offers. For the moment these offers are provided only by Super Protocol.

Below are the most likely combinations when creating an order.

|  | **Solution**        | **Data** | **Base Image**  | **Storage** | **TEE Compute**
|:--|:------------|:------------|:------------|:------------|:------------|
| 1 | User-deployed         | User-deployed  | Offer | Offer | Offer | 
| 2 | Offer        | User-deployed  | Offer | Offer | Offer | 
| 3 | User-deployed        | Offer  | Offer | Offer | Offer | 
| 4| Offer | Offer        | Offer  | Offer | Offer | 

Where:
1. You use your own solution and data;
2. You use a solution offer from the Marketplace, but your own data;
3. You use your own solution, but data from the Marketplace;
4. Both your solution and its data come from the Marketplace.


## Usage scenarios

Depending on the solution, there are two typical usage scenarios:

A **Job** is an order that is tasked with a very specific computation to perform that produces a specific result. For instance, such a job could be using an ML/AI Python model to run an inference on a batch of data (such as our sample Python models). A result is produced and then the job is done. 

**Long term** is an ongoing order that is running an app, such as our [Super Chat](/developers/offers/superchat/), an [oracle](/developers/deployment_guides/blockchain), or an LLM with a web-interface that is deployed using the tunnels. As long as the order has money on the balance, it will keep running and be accessible to users and apps. There is no definitive end.  

## Lease, Deposit and Balance

A **Lease** is the time for which the customer would like to rent the services of a Compute or a Storage offer. For Solution and Data offers the leases are tied to the Compute as sub-orders. Lease time is also used during the creation of the order to calculate the **Deposit**, which is the initial payment for the order. The deposit puts funds on the order **Balance**, which is used to pay the providers. 

Often, the initial lease is not enough, and customer will want to extend the order by **Replenishing**, or putting more funds, on the balance. An order keeps working as long as there are funds on the balance and the providers are getting paid. Any balances that remain after the order is completed will be automatically returned to the customer.

When the order's balance is close to zero, customer is warned with an **Awaiting Payment** flag, which is a warning to the user that their order is will soon be terminated. Marketplace GUI will highlight such orders in bright orange colors.

## Cost and pricing

Super Protocol uses a *Pay-As-You-Go* model. Each provider has a **Cost** to the customer and depending on the pricing conditions of their offers, providers might charge once (Fixed Price model) or every hour (Per Hour model).

| **Offer Type**   | **Pricing Conditions**  |**Description**   |
|:-|:-|:-|
| Solution  | Fixed or Per Hour| One time payment or hourly charge.   |
| Data  | Fixed or Per Hour| One time payment or hourly charge.  |
| Compute  | Per Hour | Main order, will work until job completed or until balance runs out of funds.  |
| Storage  | Per Hour | Will launch when main order is done and will store results until balance runs out of funds.  |

## Statuses

### Compute

A Compute order, the main TEE order, begins as **Suspended**, which means that it's waiting for Solution and Data sub-orders to be created. After the sub-orders are created, the Compute order goes into status **Blocked** while the solutions and data providers are authorizing the TEE for access and generating access keys. Once this is completed, the Compute order goes into status **New**, where it waits in queue for the Compute offer to become available. 

Once the machine is available, the Compute goes into status **Processing**, which is the main status for execution inside the TEE. Once completed, the status is **Done**.

Note that these two statuses might take different meanings depending on the content and usage. For one time jobs, such as Python models, *Processing* means that the script is being computed, and it's completed when the status is *Done*. But for long term orders, such as tunnels and storages, for instance, *Processing* means that the order is running normally, it's up and providing services, accessible to users, etc. And when it's *Done*, it means that the order has ended and no longer working.

### Solution and Data

Solution and Data sub-orders start out as **New**, which means that the sub-order has been created on blockchain. Next is **Processing**, where the providers are authorizing the TEE for access and generating access keys. And once that is done, then the sub-order is **Done** and the providers withdraw their earnings from the order. Typically, all of the above takes less than a minute.

The above applies to the Marketplace offers that have providers. If you are deploying your own solution and data, then there would only be a base image solution offer. Your own solution and data are downloaded into the TEE before the order starts.

### Storage

The storage sub-order is used to store the results after the main order is completed (because the TEE doesn't store anything and is destroyed after order ends). The storage sub-order also starts out as **New**. But status **Processing** means that the Storage sub-order is active and its lease has not expired, that it has received the order results and is keeping them for the customer, accessible at any time. And when the status is **Done** it means that the storage and results are no longer available. 

Typically the storage sub-order is created when the main order is almost completed, because that's when the results become available. There are cases when storage sub-order is not created if there are no results to store. 

### Cancelations

Additionally, any order may be canceled. If the main Compute order is canceled, then all the sub-orders are canceled as well. If one of the Solution or Data sub-orders is canceled, then the main order is canceled as well, because it cannot proceed without the value offers. Storage sub-order may be canceled without affecting the main order because it is initiated after the main order is completed. Any funds left on the balance will be returned to the customer. 

Statuses:

* **Cancelling** - The order is in the process of being canceled.
* **Canceled** - The order is canceled. 

## Events

<img src={require('./../images/fundamentals_orders_2.png').default} width="auto" height="auto"/>

To have a more detailed view of what is happening with your order and to illustrate the decentralized principles of Super Protocol, we developed an Events panel. It shows the main blockchain events and how they correlate with order and sub-order statuses. Also shown are absolute transaction values and details on Oklink.

It's located in the **Events** tab of the main order page.

The main blockchain events are:

* **OrderCreated** - the order or sub-order is created on blockchain.
* **OrderStarted** - the Compute order has started.
* **OrderStatusUpdated** - order or sub-order status has been changed without any new events.
* **OrderEncryptedResultUpdated** - resource path to the order results has been written to the blockchain.
* **OrderChangeWithdrawn** - the token balance remaining after order completion has been returned to the customer.
* **OrderProfitWithdrawn** - the provider has withdrawn the offer payment from the order balance.







