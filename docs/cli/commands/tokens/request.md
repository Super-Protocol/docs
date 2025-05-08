---
id: "cli-tokens-request"
title: "tokens request"
slug: "/commands/tokens/request"
sidebar_label: "request"
---

Requests SPPI and BNB tokens.

This command is only available during the Testnet. Be mindful of [Testnet limitations](/marketplace/limitations).

## Syntax

```
./spctl tokens request
    [--tee]
    [--matic]
    [--config <path>]
    [--help | -h]
```

## Options

| **Name** | **Description** |
| :- | :- |
| `--tee` | Request for SPPI tokens. |
| `--matic` | Request for BNB tokens. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command requests SPPI tokens:

```
./spctl tokens request --tee
```