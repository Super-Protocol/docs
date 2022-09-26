---
id: "cli-providers-get"
title: "Get provider"
slug: "/cli/commands/providers/get"
sidebar_label: "get"
---

Display detailed information on provider with `address`

## Usage

```
$ spctl providers get <id> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`address`|Provider address|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`name,description,`<br/>`authority_account,action_account`|Available fields: `address, name, description, authority_account, action_account, modified_date`|
|`--config`|`./config.json`|Path to the configuration file|