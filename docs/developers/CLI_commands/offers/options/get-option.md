---
id: "get-option"
title: "offers get-option"
slug: "/cli_commands/offers/options/get-option"
sidebar_position: 4
---

Displays the information on an [option](/developers/fundamentals/slots) of a compute offer.

## Syntax

```
./spctl offers get-option tee \
    --offer offerId \
    --option optionId
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `--offer` | Offer ID. |
| `--option` | Option ID. |

## Example

The following command displays the information on the option with ID 3 of [TEE Offer #1](https://marketplace.superprotocol.com/compute?offerId=1) (offer ID: 1):

```
./spctl offers get-option tee \
    --offer 1 \
    --option 3
```