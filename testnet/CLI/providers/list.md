---
id: "cli-providers-list"
title: "List providers"
slug: "/cli/providers/list"
sidebar_label: "list"
---

## Usage:

```shell
$ CLI providers list [--fields <fields>] [--limit <number>] [--cursor <string>] [--config <config>]
```

list all providers

## Description:

Get a list of all providers

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,name`|A comma-separated list of fields `id, name, description, authority_account, action_account, modified_date`|
|`--limit`|`10`|The maximum number of records to return|
|`--cursor`||Cursor for pagination|
|`--config`|`./config.json`|Path to a config file|
