---
id: "offers-get"
title: "offers get"
slug: "/cli_commands/offers/offers/get"
sidebar_position: 2
---

Display information on an offer.

## Synopsis

```
./spctl offers get <type> <offerId> [option]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of the offer: `tee` or `value` |
| `offerId`     | Offer ID                        |

## Option

|**Name**|**Description**|
| :- | :- |
|`--save-to`|Save the output to a file|

## Example

The following command displays information on the data offer [Image Classification Dataset #1](https://marketplace.superprotocol.com/data?offer=offerId%3D19):

```
./spctl offers get value 18 --save-to ./offer-18.json
```

Arguments and options used:

- `value`: type of the offer
- `18`: offer ID
- `--save-to ./offer-19.json`: path to the file for the output