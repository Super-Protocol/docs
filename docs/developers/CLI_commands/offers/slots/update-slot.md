---
id: "update-slot"
title: "update-slot"
slug: "/cli_commands/offers/slots/update-slot"
sidebar_position: 2
---

This command uses information in a .json file to make updates to the [slot requirements](/developers/fundamentals/slots#requirements) in a previously created offer.

The initial offer requirements are created on Step 3 of the [Providers and Offers Guide](/developers/cli_guides/providers_offers#offer-requirements).

You can use the .json from the guide and modify the requirements as necessary or take the template from below. In this example we will call this file `offer-slot.json`. The file format and the field descriptions are outlined in the [offers add-slot](/developers/cli_commands/offers/slots/add-slot) command.

**Important:** You need to [configure your SPCTL](/developers/cli_guides/configuring#for-providers) with the provider information for this command to work.

## Usage

Syntax:

```
./spctl offers update-slot <type> [OPTIONS]
```

Example:

Update an existing value offer using the information in the `offer-slot.json`. You can point to the file location using the `--path` option. In the example below the file is assumed to be located in the SPCTL directory.

```
./spctl offers update-slot value --offer 10 --slot 1 --path ./offer-slot.json
```

To learn which slot id's are contained in an offer you can use the [offers get](/developers/cli_commands/offers/offers/get) command and then [offers get-slot](/developers/cli_commands/offers/slots/get-slot) to get additional details on the slot.

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |

## Options

| **Name, shorthand** | **Default**      | **Description**                |
|:--------------------|:-----------------|:-------------------------------|
| `--offer`           |                  | Offer `id`                     |
| `--slot`            |                  | Slot `id`                      |
| `--path`            | `./offer-slot.json`| Path to the slot content file  |
| `--config`          | `./config.json`  | Path to the configuration file |
