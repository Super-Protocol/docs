---
id: "offers-get-slot"
title: "get-slot"
slug: "/cli_commands/offers/get-slot"
sidebar_position: 9
---

Display information for specific slot of a specific offer.

## Usage

Syntax.

```
./spctl offers get-slot <type> --offer <id> --slot <id>
```

For example, this line will get you slot information for [this](https://marketplace.superprotocol.com/compute?offerId=1) compute offer.

```
./spctl offers get-slot tee --offer 1 --slot 1
```

## Arguments

|**Name**| **Description**                 |
| :- |:--------------------------------|
|`type`| Type of offer: `tee` or `value` |

## Options

You will need to use both `offer` and `slot` with their id's.

| **Name, shorthand** | **Default** | **Description**            |
|:--------------------|:------------|:---------------------------|
| `--offer`           |             | Available fields: offer ID |
| `--slot`            |             | Available fields: slot ID  |