---
id: "offers-disable"
title: "offers disable"
slug: "/cli_commands/offers/offers/disable"
sidebar_position: 7
---

Disable an existing enabled offer.

**Important:** The `offers disable` command requires SPCTL with the [provider configuration file]((/developers/cli_guides/configure#for-offer-providers)).

## Synopsis

```
./spctl offers disable <offerId> [option]
```

## Argument

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `offerId`     | Offer ID  |

## Option

| **Name, shorthand** |**Description**                |
|:--------------------|:-------------------------------|
| `--config`          |Path to the configuration file. Default is `./config.json` |