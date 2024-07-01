---
id: "delete-slot"
title: "offers delete-slot"
slug: "/cli_commands/offers/slots/delete-slot"
sidebar_position: 3
---

Delete a requirement slot in an offer.

Use the [offers get](/developers/cli_commands/offers/offers/get) command to get the IDs of all slots in an offer. Use the [offers get-slot](/developers/cli_commands/offers/slots/get-slot) command to get additional information on a slot.

**Important:** The `offers delete-slot` command requires SPCTL with the [provider configuration file]((/developers/cli_guides/configure#for-offer-providers)).

## Synopsis

```
./spctl offers delete-slot type --offer <offerId> --slot <slotId> [option]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
|`type`   |Type of the offer: `tee` or `value` |
| `offerId`  |Offer ID  |
| `slotId`  |Slot ID |

## Option

| **Name** |**Description**                |
|:--------------------|:-------------------------------|
| `--config`          |Path to the configuration file. Default is `./config.json` |

## Example

The following command deletes the requirement slot (ID 47) in the offer (ID 39):

```
./spctl offers delete-slot value --offer 39 --slot 47
```