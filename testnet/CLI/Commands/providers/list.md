---
id: "cli-providers-list"
title: "List providers"
slug: "/cli/commands/providers/list"
sidebar_label: "list"
---

List providers

## Usage

```
$ spctl providers list [OPTIONS]
```

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`address,name`|Available fields: `address, name, description, authority_account, action_account, modified_date`|
|`--limit`|`10`|Number of records to display|
|`--cursor`||Cursor for pagination|
|`--config`|`./config.json`|Path to the configuration file|
