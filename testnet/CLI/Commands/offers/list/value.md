---
id: "cli-offers-list-value"
title: "List value offers"
slug: "/cli/commands/offers/list/value"
sidebar_label: "value"
---

List value offers

## Usage

```
spctl offers list value [OPTIONS]
```

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,name,type`|Available fields: `id, name, description, type, provider_address, provider_name, hold_sum, cancelable, modified_date`|
|`--limit`|`10`|Number of records to display|
|`--cursor`||Cursor for pagination|
|`--config`|`./config.json`|Path to the configuration file|
