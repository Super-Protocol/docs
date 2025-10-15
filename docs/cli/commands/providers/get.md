---
id: "cli-providers-get"
title: "providers get"
slug: "/commands/providers/get"
sidebar_label: "get"
sidebar_position: 1
---

Displays the information on a provider using its authority account address.

## Syntax

```shell
./spctl providers get <AUTHORITY_ACCOUNT>
    [--fields <FIELD>[,<FIELD>,...]]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:265}}>**Name**</div>   | <div style={{width:500}}>**Description**</div> |
| :-                                        | :- |
| `<AUTHORITY_ACCOUNT>`                      | Provider's authority account address. |

## Options

| <div style={{width:265}}>**Name**</div>   | <div style={{width:500}}>**Description**</div> |
| :-                                        | :- |
| `--fields <FIELD>[,<FIELD>,...]`          | Fields in the output, separated by commas. Default fields: `name`, `description`, `authority_account`, `action_account`, `token_receiver`, `metadata`. Additional fields: `address`, `modified_date`. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl providers get 0xB9f0b77BDC567E453fbAe9fBe3E60Bd503605BAa --fields name,address,description
```