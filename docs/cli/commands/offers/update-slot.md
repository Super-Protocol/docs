---
id: "cli-offers-update-slot"
title: "offers update-slot"
slug: "/commands/offers/update-slot"
sidebar_label: "update-slot"
sidebar_position: 9
---

Updates a [requirement slot](/fundamentals/slots#requirements) of an <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

Use the [`offers get`](/cli/commands/offers/get) command to get the IDs of all slots in an offer. Use the [`offers get-slot`](/cli/commands/offers/get-slot) command to get additional information on a slot.

Refer to [Offer requirements] to create the initial offer requirements. Refer to the description of the [`offers add-slot`](/cli/commands/offers/add-slot) command for the JSON file format and object descriptions.

## Syntax

```
./spctl offers update-slot <offerType>
    --offer <offerId>
    --slot <slotId>
    [--path <path>]
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Options

| **Name** |**Description** |
| :- | :- |
| `--offer <offerId>` | ID of the offer. |
| `--slot <slotId>` | ID of the slot. |
| `--path <path>` | Path to the offer slot JSON file. The default is `./offerSlot.json`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers update-slot value --offer 46 --slot 45 --path ./offer-slot.json
```