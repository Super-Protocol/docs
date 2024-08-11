---
id: "cli-quotes-validate"
title: "quotes validate"
slug: "/cli_commands/quotes/validate"
sidebar_label: "validate"
---

Checks if the domain content runs in a confidential environment. The command also displays if the domain content is a Super Protocol offer.

In the Marketplace GUI, use the [Check Confidentiality](/developers/marketplace/confidentiality) feature.

## Syntax

```
./spctl quotes validate <domainUrl> \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/developers/cli_commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<domainUrl>` | URL of the domain to check. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl quotes validate https://bbs-tdr-bren.superprotocol.io
```