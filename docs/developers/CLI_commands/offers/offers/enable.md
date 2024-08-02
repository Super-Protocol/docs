---
id: "offers-enable"
title: "offers enable"
slug: "/cli_commands/offers/offers/enable"
sidebar_position: 8
---

Enables an existing disabled offer.

**Important:** This command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

## Syntax

```
./spctl offers enable offerId [option]
```

Replace `offerId` with the ID of the offer.

## Options

| **Name** |**Description** |
| :- | :- |
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Example

The following command enables the offer with ID 39:

```
./spctl offers enable 39
```