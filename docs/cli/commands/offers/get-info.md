---
id: "cli-offers-get-info"
title: "offers get-info"
slug: "/commands/offers/get-info"
sidebar_label: "get-info"
sidebar_position: 3
---

Displays the information on an <a id="offer"><span className="dashed-underline">offer</span></a> as stored on the blockchain.

## Syntax

```shell
./spctl offers get-info <OFFER_TYPE> <OFFER>
    [--save-to <PATH>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<OFFER_TYPE>`                            | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |
| `<OFFER>`                                 | Offer ID. |

## Option

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--save-to <PATH>`                        | Path to save the output to a file. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl offers get-info value 30 --save-to ./offer-30.json
```