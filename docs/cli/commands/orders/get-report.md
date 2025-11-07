---
id: "cli-orders-get-report"
title: "orders get-report"
slug: "/commands/orders/get-report"
sidebar_label: "get-report"
sidebar_position: 7
---

Downloads the order report.

## Syntax

```shell
./spctl orders get-report <ORDER_ID>
    [--save-to <PATH>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<ORDER_ID>`                               | Order ID. |

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--save-to <PATH>`                   | Path to save the output to a file. |
| `--config <CONFIG_PATH>`                   | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl orders get-report 1312 --save-to report_1312.json
```