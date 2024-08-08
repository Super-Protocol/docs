---
id: "generate-key"
title: "workflows generate-key"
slug: "/cli_commands/workflows/generate-key"
sidebar_label: "generate-key"
---

Generates a private key necessary to access order results.

SPCTL generates this key automatically during the [configuration](/developers/cli_guides/configure). Use this command only if you need another key or if you create the `config.json` file manually.

## Syntax

```
./spctl workflows generate-key \
    [--config <path>] \
    [--help | -h]
```

## Option

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl workflows generate-key
```