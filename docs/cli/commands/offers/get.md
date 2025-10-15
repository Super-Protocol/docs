---
id: "cli-offers-get"
title: "offers get"
slug: "/commands/offers/get"
sidebar_label: "get"
sidebar_position: 2
---

Displays information on an <a id="offer"><span className="dashed-underline">offer</span></a>.

## Syntax

```
./spctl offers get <offerType> <offerId>
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

| **Name**           | **Description** |
| :- | :- |
| `--save-to <path>` | Path to save the output to a file. |
| `--config <CONFIG_PATH>`  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`     | Help for the command. |

## Example

```
./spctl offers get value 30 --save-to ./offer-30.json
```