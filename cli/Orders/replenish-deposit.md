---
id: "cli-orders-replenish-deposit"
title: "replenish-deposit order"
slug: "/orders/replenish-deposit"
sidebar_label: "orders replenish-deposit"
---

# spctl orders replenish-deposit

## Usage:

```shell
$ spctl orders replenish-deposit <id> <amount> [--config <config>]
```

replenish deposit for order

## Description:

Replenish deposit for order with specified id at `<amount>`

## Arguments:

|**Name**|**Description**|
| :- | :- |
|`id`|ID of the order|
|`amount`|Amount of tokens to replenish|

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to a config file|