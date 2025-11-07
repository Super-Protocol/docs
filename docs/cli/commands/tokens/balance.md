---
id: "cli-tokens-balance"
title: "tokens balance"
slug: "/commands/tokens/balance"
sidebar_label: "balance"
---

Displays the balance of SPPI and BNB tokens in your wallet.

## Syntax

```shell
./spctl tokens balance
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Option

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl tokens balance --config ./config-provider.json
```