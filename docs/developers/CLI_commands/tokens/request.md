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
./spctl tokens request \
    {--tee | --matic} \
    [--config <path>] \
    [--help | -h]
```

## Options

| **Name** | **Description** |
| :- | :- |
| `--tee` | Request for Super Protocol TEE tokens. |
| `--matic` | Request for Polygon Amoy MATIC tokens. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |


Note that options `--tee` and `--matic` are mutually exclusive. Execute the command twice if you need both TEE and MATIC tokens.

## Example

The following command requests TEE tokens:

```
./spctl tokens request --tee
```

And the following command requests MATIC tokens:

```
./spctl tokens request --matic
```