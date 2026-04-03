---
id: "cli-offers-delete-slot"
title: "offers delete-slot"
slug: "/commands/offers/delete-slot"
sidebar_label: "delete-slot"
sidebar_position: 11
---

Deletes a <a id="slot"><span className="dashed-underline">slot</span></a> in an <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/guides/provider-tools#providers-spctl).

Use the [`offers get`](/cli/commands/offers/get) command to get the IDs of all slots in an offer. Use the [`offers get-slot`](/cli/commands/offers/get-slot) command to get additional information on a slot.

## Syntax

```shell
./spctl offers delete-slot <OFFER_TYPE>
    --offer <OFFER>
    --slot <SLOT>
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div> | <div style={{width:565}}>**Description**</div> |
| :-                                      | :- |
| `<OFFER_TYPE>`                          | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Option

| <div style={{width:200}}>**Name**</div> | <div style={{width:565}}>**Description**</div> |
| :-                                      | :- |
| `--offer <OFFER>`                       | Offer ID. |
| `--slot <SLOT>`                         | Slot ID. |
| `--config <CONFIG_PATH>`                | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                          | Help for the command. |

## Example

```shell
./spctl offers delete-slot value \
    --offer 39 \
    --slot 47
```