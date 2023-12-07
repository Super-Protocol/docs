---
id: "orders"
title: "Orders"
slug: "/fundamentals/orders"
sidebar_position: 4
---

## What are orders

An *order* on Super Protocol is a digital contract between the customer and the providers of products and computing services called [offers](/developers/fundamentals/offers). Because Super Protocol is decentralized and there is no central intermediary, a separate order is created with each provider. If the customer supplies their own solution and data, then there is no order for those.

## How orders work

<img src={require('./../images/fundamentals_orders_1.png').default} width="auto" height="auto"/>

### Orders and sub-orders

When we say *order* we always refer to a compute order because this is where the solutions and data from different providers (or your own) come together to be executed.

The *sub-orders* are related to the main orders, and they are always between the customer and the providers of solutions, data and storage. 

There could be various combinations of sub-orders depending on the scenario. For instance in case of tunnels orders there is no storage sub-order because there is no result file to be downloaded. The result for tunnels is that they are up and accessible. There is no data sub-order either. 

### Creating orders

There are two ways to create orders:

1. Using CLI [workflows command](/developers/cli_commands/workflows) if you want to deploy your own solutions.
2. Using [Marketplace GUI](/developers/marketplace) if you just want to deploy offers already on the Marketplace (with some limtations). 

### Viewing orders

Orders are accessible openly on blockchain. While the contents inside the TEE are confidential, the general information about the order is available to anyone, just like any crypto wallet.

For instance, you can view this order: [https://marketplace.superprotocol.com/order/101](https://marketplace.superprotocol.com/order/101) - but you won't know who the owner is, what site is deployed inside the TEE, or what domain its using.

### Cost of the order

The cost of an order is the sum of the compute order as well as all sub-orders. The cost is distributed between the providers so that everyone gets their share. *Actual Cost* is the total cost of the order and it adds up as the order is being processed. Final cost is determined after the order had moved into status Done.

### Replenishing orders

An order keeps working as long as the providers are getting paid. As long as you keep depositing funds into the order it will either keep on going, as in case of tunnels, or will finish when it has completed its job. Anyone can deposit funds into any order. Some offers will have restrictions on how long they may be leased in a single order. When the order's deposit is close to being empty, customer is warned with an *Awaiting Payment* flag. 

### Awaiting Payment

*Awaiting Payment* is a warning flag to the user that their order is running out of funds and will soon be terminated. Sometimes this is intended scenario, but in most cases the user is simply not aware. Marketplace GUI will highlight such orders in bright orange colors to attract attention. 

### Getting results

Contents of the orders are encrypted by a private key that known only to the customer. The results can be received by anyone with the key. 

### Order Statuses

The order can be in one of those statuses:

* *New* - An order has just been created and it's in queue waiting for an available compute slot to begin processing. 

* *Blocked* - The solutions and data are being downloaded into the TEE for processing.

* *Processing* - The order is being actively processed by the TEE. In case of limited time jobs it will process and finish. But in case of tunnels it can stay in this status for any amount of time, as long as you keep the order replenished with TEE tokens.

* *Cancelling* - The order is being cancelled. 

* *Canceled* - The order is canceled. If the offer is *cancelable*, you might get some of your money back from the providers. 

* *Done* - Completed! In case of single jobs it means that the computation has finished. In case of tunnels and other leased solutions it means that whatever application was working inside the TEE is no longer active.

