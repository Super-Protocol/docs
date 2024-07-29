---
id: "cli-providers-get"
title: "providers get"
slug: "/cli_commands/providers/get"
sidebar_label: "get"
---

Display information on a provider using its authority account address.

## Synopsis

```
./spctl providers get <address> [option ...]
```

## Argument

|**Name**| **Description**   |
| :- |:------------------|
|`address`| Provider authority account address |

## Options

|**Name**|**Description**|
|:-|:-|
|`--fields`|Default fields: `name`, `description`, `authority_account`, `action_account`, `token_receiver`, `metadata`. Additional fields: `address`, `modified_date`. Fields must be separated with commas|
|`--config`|Path to the configuration file. The default is `./config.json`|

## Example

The following command displays the name, address, and description of the provider with the authority account `0xB9fD0b77BbA3E60BdC567Ee9fBe453f506053BAa`:

```
./spctl providers get 0xB9fD0b77BbA3E60BdC567Ee9fBe453f506053BAa --fields name,address,description
```