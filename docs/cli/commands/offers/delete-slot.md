---
id: "cli-offers-delete-slot"
title: "offers delete-slot"
slug: "/commands/offers/delete-slot"
sidebar_label: "delete-slot"
sidebar_position: 10
---

Deletes a [requirement slot](/fundamentals/slots#requirements) in an [offer](/fundamentals/offers).

**Important:** This command requires SPCTL with the [provider configuration file](/cli/#configure-spctl-for-providers).

Use the [`offers get`](/cli/commands/offers/get) command to get the IDs of all slots in an offer. Use the [`offers get-slot`](/cli/commands/offers/get-slot) command to get additional information on a slot.

## Syntax

```
./spctl offers delete-slot <offerType>
    --offer <offerId>
    --slot <slotId>
    [--config <path>]
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

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

The following command deletes a requirement slot with ID 47 in a <a id="value-offer"><span className="dashed-underline">value offer</span></a> with ID 39:

```
./spctl offers delete-slot value --offer 39 --slot 47
```