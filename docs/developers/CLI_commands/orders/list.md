---
id: "cli-orders-list"
title: "List orders"
slug: "/cli_commands/orders/list"
sidebar_label: "list"
---

List orders on blockchain. By default you will get a list of all orders and sub-orders, unless you specify `--my-account` option.

## Usage

```
./spctl orders list [OPTIONS]
```

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,offer_name,status`|Available fields: `id, offer_name, offer_description, type, status, offer_id, consumer_address, parent_order_id, total_deposit, total_unspent_deposit, deposit, unspent_deposit, cancelable, sub_orders_count, modified_date`|
|`--my-account`|`false`|Only show orders that were created by the action account specified in the config file|
|`--type`||Only show orders of the specified type (choices: `tee, storage, solution, data`)|
|`--limit`|`10`|Number of records to display|
|`--cursor`||Cursor for pagination|
|`--config`|`./config.json`|Path to the configuration file|
