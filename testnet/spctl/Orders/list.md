---
id: "spctl-orders-list"
title: "List orders"
slug: "/spctl/orders/list"
sidebar_label: "orders list"
---

# spctl orders list

## Usage:

```shell
$ spctl orders list [--fields <fields>] [--limit <number>] [--cursor <string>] [--config <config>]
```

list all orders

## Description:

Get a list of all orders

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,offer_name,status`|A comma-separated list of fields `id, offer_name, offer_description, type, status, offer_id, consumer_address, parent_order_id, total_deposit, unspent_deposit, cancelebel, sub_orders_count, modified_date`|
|`--limit`|`10`|The maximum number of records to return|
|`--cursor`||Cursor for pagination|
|`--config`|`./config.json`|Path to a config file|
