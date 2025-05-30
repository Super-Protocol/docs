---
id: "cli-orders-cancel"
title: "orders cancel"
slug: "/commands/orders/cancel"
sidebar_label: "cancel"
---

Cancels an <a id="order"><span className="dashed-underline">order</span></a>.

## Syntax

```
./spctl orders cancel <orderId>
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<orderId>` | Order ID. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl orders cancel 1312
```