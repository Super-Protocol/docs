---
id: "cli-providers-list"
title: "providers list"
slug: "/commands/providers/list"
sidebar_label: "list"
---

Lists all registered providers.

## Syntax

```
./spctl providers list
    [--fields <field>,[<field>,...]]
    [--config <path>]
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

## Options  

| <div style={{width:265}}>**Name**</div> | **Description** |
| :- | :- |
| `--fields <field>,[<field>,...]`| Columns in the output table, separated by commas. Default fields: `address`, `name`. Additional fields: `description`, `authority_account`, `action_account`, `token_receiver`, `modified_date`, `metadata`. |
| `--limit <number>` | Number of records to display. The default is `10`. |
| `--cursor <cursorString>` | Cursor for pagination. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command displays the names, descriptions, authority account addresses, and action account addresses of all registered providers:

```
./spctl providers list --fields name,description,authority_account,action_account
```