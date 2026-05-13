---
id: "cli-orders-download-result"
title: "orders download-result"
slug: "/cli/commands/orders/download-result"
sidebar_label: "download-result"
sidebar_position: 5
---

Downloads the order result—a TAR.GZ archive file containing:

- A log file with any errors occurred during the execution.
- A directory with the execution result.

If the order status is `Error`, the result archive will contain a text file with the error message.

## Syntax

```shell
./spctl orders download-result <ORDER_ID>
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
| `--save-to <PATH>`                        | Path to save the result file. <br/>Default: the SPCTL root directory. |
| `--config <CONFIG_PATH>`                   | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl orders download-result 1312 --save-to ./results/1312.tar.gz
```