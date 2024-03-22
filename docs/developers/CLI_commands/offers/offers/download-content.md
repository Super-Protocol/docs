---
id: "offers-download-content"
title: "download-content"
slug: "/cli_commands/offers/offers/download-content"
sidebar_position: 4

---

Download the content of an offer with `id` (only for offers that allow this operation)

## Usage

```
./spctl offers download-content <id> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`id`|Offer `id`|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--save-to`|`./offer.tar.gz`|Path to save the content|
|`--config`|`./config.json`|Path to the configuration file|
