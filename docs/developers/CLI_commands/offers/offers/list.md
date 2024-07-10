---
id: "offers-list"
title: "offers list"
slug: "/cli_commands/offers/offers/list"
sidebar_position: 1
---

Display a list of available offers depending on the type.

## Synopsis

```
./spctl offers list <type> [option ...]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of the offer: `tee` for a compute offer or `value` for a value offer|

## Options

For the `tee` type:

|**Name**|**Description**|
|:-|:-|
|`--fields`|Default fields: `id`, `name`, `orders_in_queue`. Additional fields: `description`, `provider_address`, `provider_name`, <br/>`total_cores`, `free_cores`, `cancelable`,`modified_date`. Fields must be separated with commas|

For the `value` type:

|**Name**|**Description**|
|:-|:-|
|`--fields`|Default fields: `id`, `name`, `type`. Additional fields: `description`, `provider_address`, `provider_name`, `cancelable`, `modified_date`. Fields must be separated with commas|

For both offer types:

|**Name**|**Description**|
|:-|:-|
|`--ids`|Filter by the offer ID. Accepts multiple values separated by spaces|
|`--limit`|Number of rows to display. Default is `10`|
|`--cursor`|Cursor for pagination|
|`--config`|Path to the configuration file. Default is `./config.json`|

## Examples

**Example 1.**

The following command lists the first 30 solution and data offers:

```
./spctl offers list value --limit 30
```

**Example 2.**

The following command displays the IDs, names, and descriptions of value offers with IDs 37, 39, and 40:

```
./spctl offers list value --ids 37 39 40 --fields id,name,description
```