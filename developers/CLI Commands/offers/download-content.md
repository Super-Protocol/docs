---
id: "cli-offers-download-content"
title: "Download content from an offer"
slug: "/cli/commands/offers/download-content"
sidebar_label: "download-content"
---

Download the content of an offer with `id` (only for offers that allow this operation)

## Usage

```
spctl offers download-content <id> [OPTIONS]
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
