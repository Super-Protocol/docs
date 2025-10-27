---
id: "cli-offers-get"
title: "offers get"
slug: "/commands/offers/get"
sidebar_label: "get"
sidebar_position: 2
---

Displays information on an <a id="offer"><span className="dashed-underline">offer</span></a>.

## Syntax

```shell
./spctl offers get <OFFER_TYPE> <OFFER>
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
./spctl offers get value 30 --save-to ./offer-30.json
```