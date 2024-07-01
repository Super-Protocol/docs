---
id: "offers-enable"
title: "offers enable"
slug: "/cli_commands/offers/offers/enable"
sidebar_position: 8
---

Enable an existing disabled offer.

**Important:** The `offers enable` command requires SPCTL with the [provider configuration file]((/developers/cli_guides/configuring#for-providers)).

## Synopsis

```
./spctl offers enable <offerId> [option]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `offerId`     | Offer ID  |

## Options

| **Name, shorthand** |**Description**                |
|:--------------------|:-------------------------------|
| `--config`          |Path to the configuration file. Default is `./config.json` |

## Example

The following command enables the offer (ID 39):

```
./spctl offers enable 39
```