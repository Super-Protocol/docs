---
id: "cli-offers-get-info"
title: "offers get-info"
slug: "/commands/offers/get-info"
sidebar_label: "get-info"
sidebar_position: 3
---

Displays the information on an <a id="offer"><span className="dashed-underline">offer</span></a> as stored on the blockchain.

## Syntax

```
./spctl offers get-info <offerType> <offerId>
    [--save-to <path>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| **Name**      | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |
| `<offerId>`   | Offer ID. |

## Option

| **Name**           | **Description** 
| :- | :- |
| `--save-to <path>` | Path to save the output to a file. |
| `--config <CONFIG_PATH>`  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`     | Help for the command. |

## Example

```
./spctl offers get-info value 30 --save-to ./offer-30.json
```