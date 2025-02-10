---
id: "cli-offers-disable"
title: "offers disable"
slug: "/commands/offers/disable"
sidebar_label: "disable"
sidebar_position: 6
---

Disables an existing enabled offer.

**Important:** This command requires SPCTL with the [provider configuration file](/cli#for-offer-providers).

## Syntax

```
./spctl offers disable <offerId>
    [--config <path>]
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerId>` | ID of the offer. |

## Option

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command disables the offer with ID 39:

```
./spctl offers enable 39
```