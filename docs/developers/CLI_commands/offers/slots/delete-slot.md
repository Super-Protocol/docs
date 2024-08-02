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
./spctl offers delete-slot <type> --offer <offerId> --slot <slotId> [option]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
|`type`   |Type of the offer: `tee` for a compute offer or `value` for a value offer |
| `offerId`  |Offer ID  |
| `slotId`  |Slot ID |

## Option

| **Name** |**Description**                |
|:--------------------|:-------------------------------|
| `--config`          |Path to the configuration file. The default is `./config.json` |

## Example

The following command deletes the specified requirement slot in the specified offer:

```
./spctl offers delete-slot value --offer 39 --slot 47
```

Options used:
`value`: 
`--offer 39`: offer with ID 39
`--slot 47`: slot with ID 47