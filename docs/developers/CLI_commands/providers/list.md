---
id: "cli-providers-list"
title: "providers list"
slug: "/cli_commands/providers/list"
sidebar_label: "list"
---

Lists all registered providers on the blockchain.

## Syntax

```
./spctl providers list [option ...]
```

## Options

| **Name** | **Description** |
| :- | :- |
| `--fields`|Columns in the output table, separated by commas. Default fields: `address`, `name`. Additional fields: `description`, `authority_account`, `action_account`, `token_receiver`, `modified_date`, `metadata`. |
| `--limit` | Number of records to display. The default is `10`. |
| `--cursor` | Cursor for pagination. |
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Example

The following command displays the names, descriptions, authority account addresses, and action account addresses of all registered providers:

```
./spctl providers list --fields name,description,authority_account,action_account
```