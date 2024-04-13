---
id: "get-option"
title: "get-option"
slug: "/cli_commands/offers/get-option"
sidebar_position: 10
---

Display information for specific option of a specific offer.

## Usage

Syntax.

```
./spctl offers get-option <type> --offer <id> --option <id>
```

For example, this line will get you option information for [this](https://marketplace.superprotocol.com/compute?offerId=1) compute offer.

```
./spctl offers get-option tee --offer 1 --option 1
```

## Arguments

|**Name**| **Description**                 |
| :- |:--------------------------------|
|`type`| Type of offer: `tee` or `value` |

## Options

You will need to use both `offer` and `option` with their id's.

| **Name, shorthand** | **Default** | **Description**             |
|:--------------------|:------------|:----------------------------|
| `--offer`           |             | Available fields: offer ID  |
| `--option`          |             | Available fields: option ID |