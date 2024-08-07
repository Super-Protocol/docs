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
./spctl orders get <orderId> \
    [--fields <field>,[<field>,...]] \
    [--suborders {true ┃ false}] \
    [--suborders_fields <field>,[<field>,...]] \
    [--config <path>] \
    [--help ┃ -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<orderId>` | ID of the order. |

## Options

| **Name**> | **Description** |
| :- | :- |
| `--fields <field>,[<field>,...]` | Fields in the output, separated by commas. Default fields: `offer_name`, `offer_description`, `type`, `status`, `total_deposit`, `total_unspent_deposit`, `modified_date`. Additional fields: `id`, `offer_id`, `consumer_address`, `parent_order_id`, `deposit`, `unspent_deposit`, `cancelable`. |
| `--suborders {true ┃ false}` | Flag for showing suborders. The default is `false`. |
| `--suborders_fields <field>,[<field>,...]` | Columns in the output table, separated by commas. Default fields: `id`, `offer_name`, `offer_description`, `type`, `status`, `modified_date`. Additional fields: `cancelable`, `actual_cost`. Use together with `--suborders true`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command display the information on the order with ID 1312, including the IDs and offer names of its suborders:

```
./spctl orders get 1312 --suborders true --suborders_fields id,offer_name
```