---
id: "tokens-request"
title: "tokens request"
slug: "/cli_commands/tokens/request"
sidebar_label: "request"
---

Requests test TEE and MATIC tokens.

This command is only available during Testnet. Be mindful of [Testnet limitations](/testnet/limitations).

## Synopsis

```
./spctl tokens request [option ...]
```

## Options

| **Name** | **Description**                      |
|:--------------------|:-------------------------------------|
| `--tee`             | Request Super Protocol TEE tokens    |
| `--matic`           | Request Polygon Amoy MATIC tokens  |
| `--config`          | Path to the configuration file. Default is `./config.json`       |

## Example

The followin command requests TEE tokens:

```
./spctl tokens request --tee
```