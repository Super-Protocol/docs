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

## Arguments

|**Name**|**Description**|
| :- | :- |
|`id`|Order `id`|

## Options

|**Name, shorthand**| **Default**                            |**Description**|
| :- |:---------------------------------------| :- |
|`--save-to`| `./result.txt` <br/> `./result.tar.gz` |Path to save the result|
|`--config`| `./config.json`                        |Path to the configuration file|
