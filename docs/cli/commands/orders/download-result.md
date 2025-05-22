---
id: "cli-orders-download-result"
title: "orders download-result"
slug: "/commands/orders/download-result"
sidebar_label: "download-result"
---

Downloads the order result—a TAR.GZ archive file containing:

- A log file with any errors occurred during the execution.
- A directory with the execution result.

If the order status is `Error`, the result archive will contain a text file with the error message.

## Syntax

```
./spctl orders download-result <orderId>
    [--save-to <path>]
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
| `--save-to <path>` | Path to save the result file. The default is the SPCTL root directory. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl orders download-result 1312 --save-to ./results/1312.tar.gz
```