---
id: "get-option"
title: "offers get-option"
slug: "/cli_commands/offers/options/get-option"
sidebar_position: 4
---

Display the information for an option of a compute offer.

## Synopsis

```
./spctl offers get-option tee --offer <offerId> --option <optionId>
```

## Arguments

|**Name**| **Description**                 |
| :- |:--------------------------------|
| `offerId`  |Offer ID  |
| `optionId`  |Option ID |

## Example

The following command displays the information for the option (ID 3) of [TEE Offer #1](https://marketplace.superprotocol.com/compute?offerId=1):

```
./spctl offers get-option tee --offer 1 --option 3
```