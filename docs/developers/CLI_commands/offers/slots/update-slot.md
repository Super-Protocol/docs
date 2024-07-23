---
id: "update-slot"
title: "offers update-slot"
slug: "/cli_commands/offers/slots/update-slot"
sidebar_position: 2
---

Updates a [requirement slot](/developers/fundamentals/slots#requirements) in an existing offer using the information in a JSON file.

**Important:** This command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

Use the [`offers get`](/developers/cli_commands/offers/offers/get) command to get the IDs of all slots in an offer. Use the [`offers get-slot`](/developers/cli_commands/offers/slots/get-slot) command to get additional information on a slot.

Refer to [Offer requirements](/developers/cli_guides/providers_offers#offer-requirements) to create the initial offer requirements. Refer to the description of the [`offers add-slot`](/developers/cli_commands/offers/slots/add-slot) command for the JSON file format and object descriptions.

## Syntax

```
./spctl offers update-slot <type> --offer <offerId> --slot <slotId> [option ...]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
|`type`   |Type of the offer: `tee` for a compute offer or `value` for a value offer |
| `offerId`  |Offer ID  |
| `slotId`  |Slot ID |


## Options

| **Name** |**Description**                |
|:--------------------|:-------------------------------|
| `--path`    |Path to the slot content file. The default is `./offer-slot.json`|
| `--config`          |Path to the configuration file. The default is `./config.json` |

## Example

The following command updates the slot with ID 47 in the offer with ID 39 using the information in the file `offer-slot.json` in the SPCTL directory:

```
./spctl offers update-slot value --offer 39 --slot 47 --path ./offer-slot.json
```