---
id: "cli-orders-replenish-deposit"
title: "orders replenish-deposit"
slug: "/commands/orders/replenish-deposit"
sidebar_label: "replenish-deposit"
sidebar_position: 3
---

Replenishes the order deposit.

Certain <a id="order"><span className="dashed-underline">orders</span></a> require a positive balance to keep running.

## Syntax

```shell
./spctl orders replenish-deposit <ORDER_ID> <SPPI_AMOUNT>
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<ORDER_ID>`                              | Order ID. |
| `<SPPI_AMOUNT>`                           | Amount of SPPI tokens to deposit. |

## Option

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl orders replenish-deposit 1312 3
```