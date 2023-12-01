---
id: "cli-orders-replenish-deposit"
title: "Replenish order deposit"
slug: "/cli_commands/orders/replenish-deposit"
sidebar_label: "replenish-deposit"
---

Replenish order deposit with `id` by `amount` in TEE tokens. You will need this to keep an order going before it runs out of money. 

## Usage

```
./spctl orders replenish-deposit <id> <amount> [OPTIONS]
```

## Arguments

|**Name**| **Description**                  |
| :- |:---------------------------------|
|`id`| Order `id`                       |
|`amount`| Amount of TEE tokens to deposit. |

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to the configuration file|
