---
id: "cli-offers-update-slot"
title: "offers update-slot"
slug: "/commands/offers/update-slot"
sidebar_label: "update-slot"
sidebar_position: 9
---

Updates a <a id="slot"><span className="dashed-underline">slot</span></a> in an <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

Use the [`offers get`](/cli/commands/offers/get) command to get the IDs of all slots in an offer. Use the [`offers get-slot`](/cli/commands/offers/get-slot) command to get additional information on a slot.

Refer to the description of the [`offers add-slot`](/cli/commands/offers/add-slot) command for the slotInfo JSON file format and object descriptions and to create the initial offer requirements.

## Syntax

```
./spctl offers update-slot <offerType>
    --offer <offerId>
    --slot <slotId>
    [--path <slotInfo>]
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
| `--offer <offerId>` | Offer ID. |
| `--slot <slotId>` | Slot ID. |
| `--path <slotInfo>` | Path to the slotInfo JSON file. The default is `./slotInfo.json`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers update-slot value --offer 46 --slot 45 --path ./new-slot.json
```