---
id: "delete-slot"
title: "delete-slot"
slug: "/cli_commands/offers/slots/delete-slot"
sidebar_position: 3
---

Delete an existing slot in an existing offer.

**Important:** You need to [configure your SPCTL](/developers/cli_guides/configuring#for-providers) with the provider information for this command to work.

## Usage

Syntax:

```
./spctl offers delete-slot type [OPTIONS]
```

Example: delete an existing slot in an existing offer.

```
./spctl offers delete-slot value --offer 10 --slot 1
```

To learn which slot id's are contained in an offer you can use the [offers get](/developers/cli_commands/offers/offers/get) command and then [offers get-slot](/developers/cli_commands/offers/slots/get-slot) to get additional details on the slot.

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |

## Options

| **Name, shorthand** | **Default**     | **Description**                |
|:--------------------|:----------------|:-------------------------------|
| `--offer`           |                 | Offer `id`                     |
| `--slot`            |                 | Slot `id`                      |
| `--config`          | `./config.json` | Path to the configuration file |