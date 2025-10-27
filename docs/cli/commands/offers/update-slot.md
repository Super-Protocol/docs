---
id: "cli-offers-update-slot"
title: "offers update-slot"
slug: "/commands/offers/update-slot"
sidebar_label: "update-slot"
sidebar_position: 10
---

Updates a <a id="slot"><span className="dashed-underline">slot</span></a> in an <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

Use the [`offers get`](/cli/commands/offers/get) command to get the IDs of all slots in an offer. Use the [`offers get-slot`](/cli/commands/offers/get-slot) command to get additional information on a slot.

Refer to the description of the [`offers add-slot`](/cli/commands/offers/add-slot) command for the slotInfo JSON file format and object descriptions and to create the initial offer requirements.

## Syntax

```shell
./spctl offers update-slot <OFFER_TYPE>
    --offer <OFFER>
    --slot <SLOT>
    [--path <SLOT_INFO>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<OFFER_TYPE>`                            | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--offer <OFFER>`                         | Offer ID. |
| `--slot <SLOT>`                           | Slot ID. |
| `--path <SLOT_INFO>`                      | Path to the slotInfo JSON file. <br/>Default: `./slotInfo.json`. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl offers update-slot value --offer 46 --slot 45 --path ./slot-info.json
```