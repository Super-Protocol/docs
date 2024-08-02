---
id: "cli-orders-replenish-deposit"
title: "orders replenish-deposit"
slug: "/cli_commands/orders/replenish-deposit"
sidebar_label: "replenish-deposit"
---

Replenishes the order deposit.

Certain orders require a positive deposit balance to keep running. For example, [Offer Provisioner](/developers/cli_guides/providers_offers#step-5-run-offer-provisioner) and storage orders.

## Syntax

```
./spctl orders replenish-deposit orderId tokenAmount [option]
```

Replace the following:

- `orderId`: ID of the order.
- `tokenAmount`: amount of TEE tokens to deposit.

## Option

| **Name** | **Description** |
| :- | :- |
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Example

The following command adds 3 TEE tokens to the deposit of the order with ID 1312:

```
./spctl orders replenish-deposit 1312 3
```