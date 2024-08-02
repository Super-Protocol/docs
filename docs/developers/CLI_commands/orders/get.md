---
id: "orders-get"
title: "orders get"
slug: "/cli_commands/orders/get"
sidebar_label: "get"
---

Displays the information on an order.

This command allows you to check any order, not only yours. The information on all orders is openly available on the blockchain.

## Syntax

```
./spctl orders get <orderId> [option ...]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`orderId`|Order ID|

## Options

|**Name**|**Description**|
| :- | :- |
|`--fields`|Default fields: `offer_name`, `offer_description`, `type`, `status`, `total_deposit`, `total_unspent_deposit`, `modified_date`. Additional fields: `id`, `offer_id`, `consumer_address`, `parent_order_id`, `deposit`, `unspent_deposit`, `cancelable`|
|`--suborders`|Flag for showing suborders. The default is `false`|
|`--suborders_fields`|Default fields: `id`, `offer_name`, `offer_description`, `type`, `status`, `modified_date`. Additional fields: `cancelable`, `actual_cost`. Use together with `--suborders true`|
|`--config`|Path to the configuration file. The default is `./config.json`|