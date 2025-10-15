---
id: "cli-offers-get-slot"
title: "offers get-slot"
slug: "/commands/offers/get-slot"
sidebar_label: "get-slot"
sidebar_position: 11
---

Displays the information for a <a id="slot"><span className="dashed-underline">slot</span></a> in an <a id="offer"><span className="dashed-underline">offer</span></a>.

Use the [`offers get`](/cli/commands/offers/get) command to get the IDs of all the offer's slots.

## Syntax

```
./spctl offers get-slot <offerType>
    --offer <offerId>
    --slot <slotId>
    [--save-to <path>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Option

| **Name** | **Description** |
| :- | :-|
| `--offer <offerId>` | Offer ID. |
| `--slot <slotId>` | Slot ID. |
| `--save-to <path>` | Path to save the result file. <br/>Default: the SPCTL root directory. |
| `--config <CONFIG_PATH>` | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers get-slot value --offer 39 --slot 38
```