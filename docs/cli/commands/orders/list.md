---
id: "cli-orders-list"
title: "orders list"
slug: "/commands/orders/list"
sidebar_label: "list"
---

Lists <a id="order"><span className="dashed-underline">orders</span></a> stored on the blockchain.

This command displays a list of all orders and suborders, unless the `--my-account true` option is specified.

## Syntax

```
./spctl orders list
    [--fields <field>,[<field>,...]]
    [--my-account]
    [--type {tee | storage | solution | data}]
    [--save-to <path>]
    [--limit <number>]
    [--cursor <cursorString>]
    [--config <path>]
    [--help | -h]
```

## Options

| <div style={{width:369}}>**Name**</div> | **Description** |
| :- | :- |
| `--fields <field>,[<field>,...]` | Columns in the output table, separated by commas. Default fields: `id`, `offer_name`, `status`. Additional fields: `offer_description`, `type`, `offer_id`, `consumer_address`, `parent_order_id`, `total_deposit`, `total_unspent_deposit`, `deposit`, `unspent_deposit`, `cancelable`, `sub_orders_count`, `modified_date`. |
| `--my-account` | Flag for showing the orders created by the account specified in the config file. The default is `false`. |
| `--type {tee │ storage │ solution │ data}` | Filter to only show orders of the specified type. |
| `--save-to <path>` | Path to save the output to the file. |
| `--limit <number>` | Number of records to display. The default is `10`. |
| `--cursor <cursorString>` | Cursor for pagination. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl orders list --fields id,offer_name,offer_description --my-account true --type tee
```