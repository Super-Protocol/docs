---
id: "cli-providers-get"
title: "providers get"
slug: "/cli_commands/providers/get"
sidebar_label: "get"
---

Displays the information on a provider using its authority account address.

## Syntax

```
./spctl providers get authorityAccount [option ...]
```

Replace `authorityAccount` with the provider authority account address.

## Options

| **Name** | **Description** |
| :- | :- |
| `--fields` | Columns in the output table, separated by commas. Default fields: `name`, `description`, `authority_account`, `action_account`, `token_receiver`, `metadata`. Additional fields: `address`, `modified_date`. |
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Example

The following command displays the name, address, and description of the provider with the authority account 0xB9fD0bbA3E60BdC56777BEe9fBe453f506053BAa:

```
./spctl providers get 0xB9fD0bbA3E60BdC56777BEe9fBe453f506053BAa --fields name,address,description
```