---
id: "tokens-request"
title: "tokens request"
slug: "/cli_commands/tokens/request"
sidebar_label: "request"
---

Requests test TEE and MATIC tokens.

This command is only available during Testnet. Be mindful of [Testnet limitations](/testnet/limitations).

## Syntax

```
./spctl tokens request {--tee | --matic} [option]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `--tee` | Request for Super Protocol TEE tokens. |
| `--matic` | Request for Polygon Amoy MATIC tokens. |

Note that these arguments are mutually exclusive. Run the command twice if you need both TEE and MATIC tokens.

## Options

| **Name** | **Description** |
| :- | :- |
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Example

The following command requests TEE tokens:

```
./spctl tokens request --tee
```