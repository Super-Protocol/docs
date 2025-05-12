---
id: "cli-providers-get"
title: "providers get"
slug: "/commands/providers/get"
sidebar_label: "get"
---

Displays the information on a provider using its authority account address.

## Syntax

```
./spctl providers get <authorityAccount>
    [--fields <field>,[<field>,...]]
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<authorityAccount>` | Provider's authority account address. |

## Options

| <div style={{width:265}}>**Name**</div> | **Description** |
| :- | :- |
| `--fields <field>,[<field>,...]` | Fields in the output, separated by commas. Default fields: `name`, `description`, `authority_account`, `action_account`, `token_receiver`, `metadata`. Additional fields: `address`, `modified_date`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl providers get 0xB9f0b77BDC567E453fbAe9fBe3E60Bd503605BAa --fields name,address,description
```