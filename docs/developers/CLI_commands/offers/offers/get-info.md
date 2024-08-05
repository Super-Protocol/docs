---
id: "offers-get-info"
title: "offers get-info"
slug: "/cli_commands/offers/offers/get-info"
sidebar_position: 3
---

Displays the information on an offer as stored on the blockchain.

## Syntax

```
./spctl offers get-info offerType offerId [option]
```

Replace the following:
- `offerType`: `tee` for a compute offer or `value` for a solution, data, or storage offer.
- `offerId`: ID of the offer.

## Option

| **Name** | **Description** 
| :- | :- |
| `--save-to` | Path to save the output to a file. |

## Example

The following command displays information on the data offer [Image Classification Dataset #2](https://marketplace.superprotocol.com/data?offer=offerId%3D19) (offer ID: 19), as stored on the blockchain:

```
./spctl offers get-info value 19 --save-to ./offer-19.json
```

Where:

- `value`: type of the offer
- `19`: offer ID
- `--save-to ./offer-19.json`: path to the file for the output.