---
id: "cli-offers-delete-slot"
title: "offers delete-slot"
slug: "/commands/offers/delete-slot"
sidebar_label: "delete-slot"
sidebar_position: 10
---

Deletes a <a id="slot"><span className="dashed-underline">slot</span></a> in an <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

Use the [`offers get`](/cli/commands/offers/get) command to get the IDs of all slots in an offer. Use the [`offers get-slot`](/cli/commands/offers/get-slot) command to get additional information on a slot.

## Syntax

```
./spctl offers delete-slot <offerType>
    --offer <offerId>
    --slot <slotId>
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Option

| **Name** | **Description** |
| :- | :- |
| `--offer <offerId>` | Offer ID. |
| `--slot <slotId>` | Slot ID. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers delete-slot value --offer 39 --slot 47
```