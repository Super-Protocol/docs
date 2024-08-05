---
id: "orders-cancel"
title: "orders cancel"
slug: "/cli_commands/orders/cancel"
sidebar_label: "cancel"
---

Cancels an order.

## Syntax

```
./spctl orders cancel orderId [option]
```

Replace `orderId` with the ID of the order.

## Options

| **Name** | **Description** |
| :- | :- |
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Example

The following command cancels the order with ID 1312:

```
./spctl orders cancel 1312
```