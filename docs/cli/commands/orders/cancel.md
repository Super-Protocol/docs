---
id: "cli-orders-cancel"
title: "orders cancel"
slug: "/commands/orders/cancel"
sidebar_label: "cancel"
sidebar_position: 4
---

Cancels an <a id="order"><span className="dashed-underline">order</span></a>.

## Syntax

```shell
./spctl orders cancel <ORDER_ID> ...
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<ORDER_ID>`                              | Order ID. |

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl orders cancel 1312
```