---
id: "spctl-providers-get"
title: "Get provider"
slug: "/spctl/providers/get"
sidebar_label: "providers get"
---

# spctl providers get

## Usage:

```shell
$ spctl providers get <id> [--fields <fields>] [--config <config>]
```

get provider

## Description:

Fetch data about provider with specified id

## Arguments:

|**Name**|**Description**|
| :- | :- |
|`id`|ID of the provider|

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,name,description,authority_account,action_account`|A comma-separated list of fields `id, name, description, authority_account, action_account, modified_date`
|`--config`|`./config.json`|Path to a config file|