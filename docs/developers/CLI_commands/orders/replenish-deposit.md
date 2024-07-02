---
id: "cli-orders-replenish-deposit"
title: "orders replenish-deposit"
slug: "/cli_commands/orders/replenish-deposit"
sidebar_label: "replenish-deposit"
---

Replenish the order deposit.

Certain orders (e.g. Offer Provisioner and storage orders) require a positive deposit balance to keep running. 

## Synopsis

```
./spctl orders replenish-deposit <orderId> <amount> [option]
```

## Arguments

|**Name**| **Description**                  |
| :- |:---------------------------------|
|`orderId`| Order ID                       |
|`amount`| Amount of TEE tokens to deposit |

## Option

|**Name**|**Description**|
| :- | :- |
|`--config`|Path to the configuration file. Default is `./config.json`|
