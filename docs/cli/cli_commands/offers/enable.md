---
id: "offers-enable"
title: "offers enable"
slug: "/cli_commands/offers/offers/enable"
sidebar_label: "enable"
sidebar_position: 8
---

Enables an existing disabled offer.

**Important:** This command requires SPCTL with the [provider configuration file](/cli#for-offer-providers).

## Syntax

```
./spctl offers enable <offerId> \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/cli_commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerId>` | ID of the offer. |

## Options

| **Name** |**Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command enables the offer with ID 39:

```
./spctl offers enable 39
```