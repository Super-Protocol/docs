---
id: "cli-orders-replenish-deposit"
title: "orders replenish-deposit"
slug: "/commands/orders/replenish-deposit"
sidebar_label: "replenish-deposit"
---

Replenishes the order deposit.

Certain <a id="order"><span className="dashed-underline">orders</span></a> require a positive deposit balance to keep running.

## Syntax

```
./spctl orders replenish-deposit <orderId> <tokenAmount>
    [--config <path>]
    [--help | -h]
```

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

```
./spctl orders replenish-deposit 1312 3
```