---
id: "cli-orders-download-result"
title: "orders download-result"
slug: "/commands/orders/download-result"
sidebar_label: "download-result"
---

Downloads the order result.

This command downloads a TAR.GZ archive file containing:

- Log file with any errors occured during the execution of the script
- Directory with the result.

If the order status is `Error`, the result archive will contain a text file with the error message.

## Syntax

```
./spctl orders download-result <orderId> \
    [--save-to <path>] \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<orderId>` | ID of the order. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--save-to <path>` | Path to save the result file. The default is the SPCTL root directory. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command downloads the result of the order 1312 and saves it to the `1312.tar.gz` file in the `results` directory:

```
./spctl orders download-result 1312 --save-to ./results/1312.tar.gz
```