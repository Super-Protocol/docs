---
id: "cli-offers-get-slot"
title: "offers get-slot"
slug: "/commands/offers/get-slot"
sidebar_label: "get-slot"
sidebar_position: 8
---

Displays the information for a <a id="slot"><span className="dashed-underline">slot</span></a> in an <a id="offer"><span className="dashed-underline">offer</span></a>.

Use the [`offers get`](/cli/commands/offers/get) command to get the IDs of all the offer's slots.

## Syntax

```shell
./spctl offers get-slot <OFFER_TYPE>
    --offer <OFFER>
    --slot <SLOT>
    [--save-to <PATH>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<OFFER_TYPE>`                            | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Option

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--offer <OFFER>`                         | Offer ID. |
| `--slot <SLOT>`                           | Slot ID. |
| `--save-to <PATH>`                        | Path to save the result file. <br/>Default: the SPCTL root directory. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl offers get-slot value \
    --offer 39 \
    --slot 38
```