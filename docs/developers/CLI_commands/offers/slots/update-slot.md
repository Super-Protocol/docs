---
id: "update-slot"
title: "update-slot"
slug: "/cli_commands/offers/slots/update-slot"
sidebar_position: 2
---

Update an existing slot in an existing offer.

## Usage

Syntax:

```
./spctl offers update-slot <type> [OPTIONS]
```

Example: update an existing slot in an existing offer using the information in `offerSlot.json` which is located in the same directory together with SPCTL.

```
./spctl offers update-slot value --offer 10 --slot 1 --path ./offerSlot.json
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |

## Options

| **Name, shorthand** | **Default**      | **Description**                |
|:--------------------|:-----------------|:-------------------------------|
| `--offer`           |                  | Offer `id`                     |
| `--slot`            |                  | Slot `id`                      |
| `--path`            | `./slotInfo.json`| Path to the slot content file  |
| `--config`          | `./config.json`  | Path to the configuration file |


**Note**: сontent file requirements are the same as in the process of adding a slot. You can find details in [offers add-slot](/developers/cli_commands/offers/slots/add-slot) command.