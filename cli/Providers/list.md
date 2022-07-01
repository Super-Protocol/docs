---
id: "cli-providers-list"
title: "List providers"
slug: "/providers/list"
sidebar_label: "providers list"
---

# spctl providers list

## Usage:

```shell
$ spctl providers list [--fields <fields>] [--limit  <number>] [--cursor <string>] [--config <config>]
```

list all providers

## Description:

Get list of all providers

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,name`|A comma-separated list of fields `id, name, description, authority_account, action_account, modified_date`|
|`--limit`|`10`|The maximum number of records to return|
|`--cursor`||Cursor for pagination|
|`--config`|`./config.json`|Path to a config file|