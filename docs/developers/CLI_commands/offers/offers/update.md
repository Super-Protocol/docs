---
id: "offers-update"
title: "update"
slug: "/cli_commands/offers/offers/update"
sidebar_position: 6
---

Update an existing offer.

## Usage

Syntax:

```
./spctl offers update <type> <id> [OPTIONS]
```

Example: update an existing value offer using the information in `offerInfo.json` which is located in the same directory together with SPCTL.

```
./spctl offers update value 10 --path ./offerInfo.json
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |
| `id`     | Offer `id`  |

## Options

| **Name, shorthand** | **Default**        | **Description**                |
|:--------------------|:-------------------|:-------------------------------|
| `--path`            | `./offerInfo.json` | Path to the offer content file |
| `--config`          | `./config.json`    | Path to the configuration file |


**Note**: сontent file requirements are the same as in the process of creating an offer. You can find details in [offers create](/developers/cli_commands/offers/offers/create) command.