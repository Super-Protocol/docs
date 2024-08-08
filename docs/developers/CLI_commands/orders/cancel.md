---
id: "orders-cancel"
title: "orders cancel"
slug: "/cli_commands/orders/cancel"
sidebar_label: "cancel"
---

Cancels an order.

## Syntax

```
./spctl orders cancel <orderId> \
    [--config <path>] \
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<orderId>` | ID of the order. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command cancels the order with ID 1312:

```
./spctl orders cancel 1312
```