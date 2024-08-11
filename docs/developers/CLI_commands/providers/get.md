---
id: "cli-providers-get"
title: "providers get"
slug: "/cli_commands/providers/get"
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

Read about the Super Protocol [command syntax](/developers/cli_commands#command-syntax).

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

The following command displays the name, address, and description of the provider with the authority account 0xB9fD0bbA3E60BdC56777BEe9fBe453f506053BAa:

```
./spctl providers get 0xB9fD0bbA3E60BdC56777BEe9fBe453f506053BCa --fields name,address,description
```