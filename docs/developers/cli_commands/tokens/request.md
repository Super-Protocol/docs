---
id: "tokens-request"
title: "tokens request"
slug: "/cli_commands/tokens/request"
sidebar_label: "request"
---

Requests test TEE and POL tokens.

This command is only available during the Testnet. Be mindful of [Testnet limitations](/marketplace/limitations).

## Syntax

```
./spctl tokens request \
    [--tee] \
    [--matic] \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/developers/cli_commands#command-syntax).

## Options

| **Name** | **Description** |
| :- | :- |
| `--tee` | Request for Super Protocol TEE tokens. |
| `--matic` | Request for Polygon Amoy POL tokens. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command requests TEE tokens:

```
./spctl tokens request --tee
```