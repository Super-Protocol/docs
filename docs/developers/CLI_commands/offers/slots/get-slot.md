---
id: "offers-get-slot"
title: "offers get-slot"
slug: "/cli_commands/offers/slots/get-slot"
sidebar_position: 4
---

Display the information for a requirement slot in an offer.

Use the [offers get](/developers/cli_commands/offers/offers/get) command to get the IDs of all slots in an offer.

## Synopsis

```
./spctl offers get-slot <type> --offer <offerId> --slot <slotId>
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

The following command displays the information on the slot (ID 47) in the offer (ID 39):

```
./spctl offers get-slot tee --offer 39 --slot 47
```