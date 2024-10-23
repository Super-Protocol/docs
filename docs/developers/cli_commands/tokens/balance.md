---
id: "tokens-balance"
title: "tokens balance"
slug: "/cli_commands/tokens/balance"
sidebar_label: "balance"
---

Displays the balance of TEE and POL tokens in your wallet.

## Syntax

```
./spctl tokens balance \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/developers/cli_commands#command-syntax).

## Option

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command checks the balance of the account specified in the `config-provider.json` file.

```
./spctl tokens balance --config ./config-provider.json
```