---
id: "offers-disable"
title: "disable"
slug: "/cli_commands/offers/offers/disable"
sidebar_position: 7
---

Disables an existing enabled offer.

**Important:** This command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

## Syntax

```
./spctl offers disable <offerId> \
    [--config <path>] \
    [--help | -h]
```

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