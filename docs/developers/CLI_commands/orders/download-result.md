---
id: "cli-orders-download-result"
title: "orders download-result"
slug: "/cli_commands/orders/download-result"
sidebar_label: "download-result"
---

Download the order result.

This command downloads a TAR.GZ file containing:
- Log file of the script; if any errors occur during the execution of the script, they will be recorded to this log file
- Directory with the result

If the order status is `Error`, the result archive will contain a text file with the error message.

## Synopsis

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

The following command downloads the result of the order 2391 and saves it to the `2391.tar.gz` file in the `results` directory:

```
./spctl orders download-result 2391 --save-to ./results/2391.tar.gz
```