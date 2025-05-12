---
id: "cli-tokens-balance"
title: "tokens balance"
slug: "/commands/tokens/balance"
sidebar_label: "balance"
---

Displays the balance of SPPI and BNB tokens in your wallet.

## Syntax

```
./spctl tokens balance
    [--config <path>]
    [--help | -h]
```

## Option

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl tokens balance --config ./config-provider.json
```