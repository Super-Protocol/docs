---
id: "offers-download-content"
title: "offers download-content"
slug: "/cli_commands/offers/offers/download-content"
sidebar_position: 4

---

Download the content of an offer.

The command only works for offers that allow this operation.

## Synopsis

```
./spctl offers download-content <offerId> [option ...]
```

## Argument

|**Name**|**Description**|
| :- | :- |
|`offerId`|Offer ID|

## Options

|**Name**|**Description**|
| :- | :- |
|`--save-to`|Path to save the content. The default is the original filename|
|`--config`|Path to the configuration file. The default is `./config.json`|
