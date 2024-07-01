---
id: "cli-orders-list"
title: "orders list"
slug: "/cli_commands/orders/list"
sidebar_label: "list"
---

List orders on blockchain.

By default displays a list of all orders and suborders, unless you use the `--my-account true` option.

## Synopsis

```
./spctl orders list [option ...]
```

## Options

|**Name**|**Description**|
| :- | :- |
|`--fields`|Default fields: `id`, `offer_name`, `status`. Available fields: `offer_description`, `type`, `offer_id`, `consumer_address`, `parent_order_id`, `total_deposit`, `total_unspent_deposit`, `deposit`, `unspent_deposit`, `cancelable`, `sub_orders_count`, `modified_date`|
|`--my-account`|Flag for showing the orders created by the account specified in the config file. Default is `false`|
|`--type`|Filter to only show orders of the specified type. Available types: `tee`, `storage`, `solution`, `data`|
|`--save-to`| Path to save the output to the file|
|`--limit`|Number of records to display. Default is `10`|
|`--cursor`|Cursor for pagination|
|`--config`|Path to the configuration file. Default is `./config.json`|
