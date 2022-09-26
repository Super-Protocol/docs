---
id: "cli-offers-get-tee"
title: "Get TEE offer"
slug: "/cli/commands/offers/get/tee"
sidebar_label: "tee"
---

Display detailed information on TEE offer with `id`

## Usage

```
$ spctl offers get tee <id> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`id`|Offer `id`|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`name,description,provider_address,`<br/>`provider_name,total_cores,`<br/>`free_cores,orders_in_queue,`<br/>`cancelable,modified_date`|Available fields: `name, description, provider_address, provider_name, total_cores, free_cores, orders_in_queue, cancelable, modified_date`|
|`--config`|`./config.json`|Path to the configuration file|
