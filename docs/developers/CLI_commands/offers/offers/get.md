---
id: "offers-get"
title: "get"
slug: "/cli_commands/offers/offers/get"
sidebar_position: 2
---

Displays information on an offer.

## Syntax

```
./spctl offers get <offerType> <offerId> \
    [--save-to <path>] \
    [--config <path>] \
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |
| `<offerId>` | ID of the offer. |

## Option

| **Name** | **Description** |
| :- | :- |
| `--save-to <path>` | Path to save the output to a file. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command displays information on the data offer [Image Classification Dataset #1](https://marketplace.superprotocol.com/data?offer=offerId%3D19) (offer ID: 18):

```
./spctl offers get value 18 --save-to ./offer-18.json
```

Where:

- `value`: type of the offer
- `18`: offer ID
- `--save-to ./offer-19.json`: save the output to `offer-19.json` in the SPCTL root directory.