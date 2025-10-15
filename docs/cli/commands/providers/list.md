---
id: "cli-providers-list"
title: "providers list"
slug: "/commands/providers/list"
sidebar_label: "list"
sidebar_position: 2
---

Lists all registered providers.

## Syntax

```
./spctl providers list
    [--fields <FIELD>[,<FIELD>,...]]
    [--limit <NUMBER>]
    [--cursor <CURSOR_STRING>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Options  

| <div style={{width:265}}>**Name**</div>   | <div style={{width:500}}>**Description**</div> |
| :-                                        | :- |
| `--fields <FIELD>[,<FIELD>,...]`          | Columns in the output table, separated by commas. Default fields: `address`, `name`. Additional fields: `description`, `authority_account`, `action_account`, `token_receiver`, `modified_date`, `metadata`. |
| `--limit <NUMBER>`                        | Number of records to display. <br/>Default: `10`. |
| `--cursor <CURSOR_STRING>`                 | Cursor for pagination. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```
./spctl providers list --fields name,description,authority_account,action_account
```