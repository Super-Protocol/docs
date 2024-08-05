---
id: "delete-slot"
title: "offers delete-slot"
slug: "/cli_commands/offers/slots/delete-slot"
sidebar_position: 3
---

Deletes a [requirement slot](/developers/fundamentals/slots#requirements) in an [offer](/developers/fundamentals/offers).

**Important:** This command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

Use the [`offers get`](/developers/cli_commands/offers/offers/get) command to get the IDs of all slots in an offer. Use the [offers get-slot](/developers/cli_commands/offers/slots/get-slot) command to get additional information on a slot.

## Syntax

```
./spctl offers delete-slot offerType \
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
| :- | :- |
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Example

The following command deletes a requirement slot with ID 47 in a value offer with ID 39:

```
./spctl offers delete-slot value \
    --offer 39 \
    --slot 47
```