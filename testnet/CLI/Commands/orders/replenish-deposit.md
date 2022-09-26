---
id: "cli-orders-replenish-deposit"
title: "Replenish order deposit"
slug: "/cli/commands/orders/replenish-deposit"
sidebar_label: "replenish-deposit"
---

Withdraw unspent deposit from a completed order with `id`

## Usage

```
spctl orders replenish-deposit <id> <amount> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`id`|Order `id`|
|`amount`|Amount of tokens|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to the configuration file|