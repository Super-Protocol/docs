---
id: "update-slot"
title: "offers update-slot"
slug: "/cli_commands/offers/slots/update-slot"
sidebar_position: 2
---

Update a [requirement slot](/developers/fundamentals/slots#requirements) in an existing offer using the information in a JSON file.

Use the [offers get](/developers/cli_commands/offers/offers/get) command to get the IDs of all slots in an offer. Use the [offers get-slot](/developers/cli_commands/offers/slots/get-slot) command to get additional information on a slot.

Refer to the [Offer requirements](/developers/cli_guides/providers_offers#offer-requirements) section to create the initial offer requirements. Refer to the description of the [offers add-slot](/developers/cli_commands/offers/slots/add-slot) command for the JSON file format and object descriptions.

**Important:** The `offers update-slot` command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

## Synopsis

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
| `--path`    |Path to the slot content file. Default is `./offer-slot.json`|
| `--config`          |Path to the configuration file. Default is `./config.json` |

## Example

The following command updates the slot (ID 47) in the offer (ID 39) using the information in the file `offer-slot.json` in the SPCTL directory:

```
./spctl offers update-slot value --offer 39 --slot 47 --path ./offer-slot.json
```