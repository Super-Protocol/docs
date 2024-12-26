---
id: "cli-providers-get"
title: "providers get"
slug: "/commands/providers/get"
sidebar_label: "get"
---

Displays the information on a provider using its authority account address.

## Syntax

```
./spctl providers get <authorityAccount> \
    [--fields <field>,[<field>,...]] \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

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

The following command displays the name, address, and description of the provider with the authority account 0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAa:

```
./spctl providers get 0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAa \
    --fields name,address,description
```