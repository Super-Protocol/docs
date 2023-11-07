---
id: "cli-guides-managing-offers"
title: "Managing offers"
slug: "/cli_overview/managing-offers"
sidebar_position: 3

---

## Pre-requisites

To create offers, you have to be registerd as a provider on Super Protocol. Offer creation/modification uses a JSON file as a source of information for updating in blockchain. You can obtain the sample of the file for [TEE](https://github.com/Super-Protocol/ctl/blob/master/teeOfferInfo.example.json) and [Value](https://github.com/Super-Protocol/ctl/blob/master/offerInfo.example.json) offers from the repository.

## Offer creation

:::note
Make sure you specified your authority account in config file.
:::

When creating a new offer, fill in the sample `offerInfo.json` file with the required info about your offer.

Then, execute the following command:

```
spctl offers create <type> --path ./offerInfo.json
```

You can check the offer was created correctly by executing [offers get-info](/developers/cli_commands/offers/get-info) command.

## Offer modification

You can retrieve current offer information by the following command:

```
spctl offers get-info <type> <id>
```

Then fill in the `offerInfo.json` file according to the displayed data, making adjustments where necessary. Once you updated the file, you are now ready to update your offer in blockchain:

```
spctl offers update <type> <id> --path ./offerInfo.json
```

You can ensure update is applied correctly by executing [offers get-info](/developers/cli_commands/offers/get-info) command again.