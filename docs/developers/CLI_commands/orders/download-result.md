---
id: "cli-orders-download-result"
title: "Download order result"
slug: "/cli_commands/orders/download-result"
sidebar_label: "download-result"
---

Download order result with `id`.

## Usage

```
./spctl orders download-result <id> [OPTIONS]
```

This command downloads the `result.tar.gz` file, containing:
1. `logs\log.txt` - a log file of the script. If any errors occur during the execution of the script, they will be recorded to this log file.
2. `output` - directory where the script's output is stored.

If the order status is `Error`, you can still download the results, but instead of an archive there will be a result.txt file with an error message.

## Arguments

|**Name**|**Description**|
| :- | :- |
|`id`|Order `id`|

## Options

|**Name, shorthand**| **Default**                            |**Description**|
| :- |:---------------------------------------| :- |
|`--save-to`| `./result.txt` <br/> `./result.tar.gz` |Path to save the result|
|`--config`| `./config.json`                        |Path to the configuration file|
