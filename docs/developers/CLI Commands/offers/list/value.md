---
id: "cli-Marketplace GUI Offers-list-value"
title: "List value Marketplace GUI Offers"
slug: "/cli_commands/Marketplace GUI Offers/list/value"
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
