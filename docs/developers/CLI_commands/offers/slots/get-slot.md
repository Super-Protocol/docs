---
id: "offers-get-slot"
title: "offers get-slot"
slug: "/cli_commands/offers/slots/get-slot"
sidebar_position: 4
---

Displays the information for a [requirement slot](/developers/fundamentals/slots#requirements) in an offer.

Use the [`offers get`](/developers/cli_commands/offers/offers/get) command to get the IDs of all slots in an offer.

## Syntax

```
./spctl offers get-slot offerType \
    --offer offerId \
    --slot slotId \
    [option]
```

Replace `offerType` with `tee` for a compute offer or `value` for a solution, data, or storage offer.

## Arguments

| **Name** | **Description** |
| :- | :- |
| `--offer` | Offer ID. |
| `--slot` | Slot ID. |

## Option

| **Name** | **Description** |
| :- | :-|
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Example

The following command displays the information on a requirement slot with ID 47 in a value offer with ID 39:

```
./spctl offers get-slot value \
    --offer 39 \
    --slot 47
```