---
id: "cli-orders-download-result"
title: "orders download-result"
slug: "/cli_commands/orders/download-result"
sidebar_label: "download-result"
---

Downloads the order result.

This command downloads a TAR.GZ archive file containing:

- Log file with any errors occured during the execution of the script
- Directory with the result.

If the order status is `Error`, the result archive will contain a text file with the error message.

## Syntax

```
./spctl orders download-result <orderId> [option ...]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`orderId`|Order ID|

## Options

|**Name**|**Description**|
| :- |:---------------------------------------| :- |
|`--save-to`|Path to save the result file. The default is the SPCTL root directory|
|`--config`|Path to the configuration file. The default is `./config.json`|

## Example

The following command downloads the result of the order 1312 and saves it to the `1312.tar.gz` file in the `results` directory:

```
./spctl orders download-result 1312 --save-to ./results/1312.tar.gz
```