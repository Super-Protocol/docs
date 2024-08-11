---
id: "offers-get-slot"
title: "offers get-slot"
slug: "/cli_commands/offers/slots/get-slot"
sidebar_label: "get-slot"
sidebar_position: 13
---

Displays the information for a [requirement slot](/developers/fundamentals/slots#requirements) in an offer.

Use the [`offers get`](/developers/cli_commands/offers/offers/get) command to get the IDs of all slots in an offer.

## Syntax

```
./spctl offers get-slot <offerType> \
    --offer <offerId> \
    --slot <slotId> \
    [--save-to <path>] \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/developers/cli_commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Option

| **Name** | **Description** |
| :- | :-|
| `--offer <offerId>` | ID of the offer. |
| `--slot <slotId>` | ID of the slot. |
| `--save-to <path>` | Path to save the result file. The default is the SPCTL root directory. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command displays the information on a requirement slot with ID 47 in a value offer with ID 39:

```
./spctl offers get-slot value --offer 39 --slot 47
```