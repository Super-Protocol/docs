---
id: "cli-commands-offers-get-value"
title: "Get value offer"
slug: "/cli_commands/offers/get/value"
sidebar_label: "value"
---

Display detailed information on value offer with `id`

## Usage

```
./spctl offers get value <id> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`id`|Offer `id`|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`provider_address,name,`<br/>`description,type,cancelable,`<br/>`modified_date,hold_sum,restrictions`|Available fields: `provider_address, name, description, type, cancelable, modified_date, hold_sum, restrictions`|
|`--config`|`./config.json`|Path to the configuration file|
