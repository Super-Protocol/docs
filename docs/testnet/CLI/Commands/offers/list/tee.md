---
id: "cli-offers-list-tee"
title: "List TEE offers"
slug: "/cli/commands/offers/list/tee"
sidebar_label: "tee"
---

List TEE offers

## Usage

```
spctl offers list tee [OPTIONS]
```

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,name,orders_in_queue`|Available fields: `id, name, description, provider_address, provider_name, total_cores, free_cores, orders_in_queue, cancelable, modified_date`|
|`--limit`|`10`|Number of records to display|
|`--cursor`||Cursor for pagination|
|`--config`|`./config.json`|Path to the configuration file|
