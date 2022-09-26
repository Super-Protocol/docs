---
id: "cli-orders-get"
title: "Get order"
slug: "/cli/commands/orders/get"
sidebar_label: "get"
---

Display detailed information on order with `id`

## Usage

```
$ spctl orders get <id> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`id`|Order `id`|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`offer_name,offer_description,`<br/>`type,status,total_deposit,`<br/>`total_unspent_deposit,modified_date`|Available fields: `id, offer_name, offer_description, type, status, offer_id, consumer_address, parent_order_id, total_deposit, total_unspent_deposit, deposit, unspent_deposit, cancelable, modified_date`|
|`--suborders`|`false`|Show sub-orders|
|`--suborders_fields`|`id,offer_name,offer_description,`<br/>`type,status,modified_date`|Sub-order available fields: `id, offer_name, offer_description, type, status, cancelable, actual_cost, modified_date`|
|`--config`|`./config.json`|Path to the configuration file|