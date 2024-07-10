---
id: "offers-get-info"
title: "offers get-info"
slug: "/cli_commands/offers/offers/get-info"
sidebar_position: 3
---

Display information on an offer as stored on blockchain.

## Synopsis

```
./spctl offers get-info <type> <offerId> [option]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of the offer: `tee` for a compute offer or `value` for a value offer |
| `offerId`     | Offer ID                        |

## Option

|**Name**|**Description**|
| :- | :- |
|`--save-to`|Save the output to a file|

## Example

The following command displays information as stored on blockchain on the data offer [Image Classification Dataset #2](https://marketplace.superprotocol.com/data?offer=offerId%3D19):

```
./spctl offers get-info value 19 --save-to ./offer-19.json
```

Arguments and options used:

- `value`: type of the offer
- `19`: offer ID
- `--save-to ./offer-19.json`: path to the file for the output