---
id: "delete-slot"
title: "offers delete-slot"
slug: "/cli_commands/offers/slots/delete-slot"
sidebar_position: 12
---

Deletes a [requirement slot](/developers/fundamentals/slots#requirements) in an [offer](/developers/fundamentals/offers).

**Important:** This command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

Use the [`offers get`](/developers/cli_commands/offers/offers/get) command to get the IDs of all slots in an offer. Use the [offers get-slot](/developers/cli_commands/offers/slots/get-slot) command to get additional information on a slot.

## Syntax

```
./spctl offers delete-slot <offerType> \
    --offer <offerId> \
    --slot <slotId> \
    [--config <path>] \
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Option

| **Name** | **Description** |
| :- | :- |
| `--offer <offerId>` | ID of the offer. |
| `--slot <slotId>` | ID of the slot. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command deletes a requirement slot with ID 47 in a value offer with ID 39:

```
./spctl offers delete-slot value --offer 39 --slot 47
```