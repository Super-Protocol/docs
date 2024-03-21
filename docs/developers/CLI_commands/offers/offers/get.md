---
id: "offers-get"
title: "get"
slug: "/cli_commands/offers/offers/get"
sidebar_position: 2
---

Display detailed information on a value or compute offer with `id`.

## Usage

Syntax:

```
./spctl offers get <type> <id>
```

Example: displays information on [this](https://marketplace.superprotocol.com/compute?offerId=1) compute offer.

```
./spctl offers get tee 1
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |
| `id`     | Offer ID                        |

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--save-to`| |Save output to the file (e.g. `./offer-1.json`)|
