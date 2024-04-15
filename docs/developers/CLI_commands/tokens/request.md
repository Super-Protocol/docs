---
id: "tokens-request"
title: "Request"
slug: "/cli_commands/tokens/request"
sidebar_label: "request"
---

Request to receive TEE and MATIC tokens for testing purposes. This command is only available during Testnet, subject to [Testnet limitations](/testnet/limitations/).

## Usage

Syntax.

```
./spctl tokens request [OPTIONS]
```

Example: receive TEE tokens.

```
./spctl tokens request --tee
```

## Options

| **Name, shorthand** | **Default**     | **Description**                      |
|:--------------------|:----------------|:-------------------------------------|
| `--tee`             |                 | Request Super Protocol TEE tokens    |
| `--matic`           |                 | Request Polygon Amoy MATIC tokens  |
| `--config`          | `./config.json` | Path to the configuration file       |
