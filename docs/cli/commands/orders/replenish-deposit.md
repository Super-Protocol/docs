---
id: "cli-orders-replenish-deposit"
title: "orders replenish-deposit"
slug: "/commands/orders/replenish-deposit"
sidebar_label: "replenish-deposit"
---

Replenishes the order deposit.

Certain orders require a positive deposit balance to keep running.

## Syntax

```
./spctl orders replenish-deposit <orderId> <tokenAmount>
    [--config <path>]
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<orderId>` | ID of the order. |
| `<tokenAmount>` | Amount of SPPI tokens to deposit. |

## Option

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command adds 3 SPPI tokens to the deposit of the order with ID 1312:

```
./spctl orders replenish-deposit 1312 3
```