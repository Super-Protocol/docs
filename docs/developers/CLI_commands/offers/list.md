---
id: "offers-list"
title: "list"
slug: "/cli_commands/offers/list"
sidebar_position: 1
---

Retrieves a list of available offers depending on the type.

## Usage

Syntax:

```
./spctl offers list <type> [options]
```

Example: lists the first 30 solution and data offers.

```
./spctl offers list value --limit 30
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |

## Options

|**Name, shorthand**| **Default**                              | **Description**                                                                                                                                                                            |
| :- |:-----------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`--fields`| `id`<br/> `name`<br/> `orders_in_queue`  | **For `tee` offer type**<br/>Available fields : <br/>`id`,`name`,`description`,`provider_address`,`provider_name`,`total_cores`,`free_cores`,`orders_in_queue``cancelable`,`modified_date` |
|`--fields`| `id`<br/>  `name`<br/> `type`                       | **For `value` offer type**<br/> Available fields:<br/> `id`,`name`,`description`,`type`,`provider_address`,`provider_name`,`cancelable``modified_date`                                     |
|`--limit`| 10                                       | Number of records to display                                                                                                                                                               |
|`--cursor`|                                          | Cursor for pagination                                                                                                                                                                      |
|`--config`| `./config.json`                          | Path to the configuration file                                                                                                                                                             |
