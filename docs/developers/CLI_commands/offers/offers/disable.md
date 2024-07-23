---
id: "offers-disable"
title: "offers disable"
slug: "/cli_commands/offers/offers/disable"
sidebar_position: 7
---

Disables an existing enabled offer.

**Important:** This command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

## Syntax

```
./spctl offers disable <offerId> [option]
```

## Argument

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `offerId`     | Offer ID  |

## Option

| **Name** |**Description**                |
|:--------------------|:-------------------------------|
| `--config`          |Path to the configuration file. The default is `./config.json` |

## Example

The following command disables the offer with ID 39:

```
./spctl offers enable 39
```