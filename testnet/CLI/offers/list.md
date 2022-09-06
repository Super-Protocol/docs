---
id: "cli-offers-list"
title: "List offers"
slug: "/cli/offers/list"
sidebar_label: "list"
---

## Usage:

```shell
$ CLI offers list <type> [--fields <fields>] [--limit <number>] [--cursor <string>] [--config <config>]
```

list all offers

## Description:

Get a list of all offers

## Arguments:

|**Name**|**Description**|
| :- | :- |
|`type`|`tee` for Tee offers or `value` for Data/Solution/Storage offers|

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,name,type`|A comma-separated list of fields <br/> For tee: `id, name, description, provider_id, provider_name, total_cores, free_cores, orders_in_queue, cancelable, modified_date` <br/> For value: `id, name, description, type, provider_id, provider_name, hold_sum, cancelable, modified_date`|
|`--limit`|`10`|The maximum number of records to return|
|`--cursor`||Cursor for pagination|
|`--config`|`./config.json`|Path to a config file|
