---
id: "cli-orders-list"
title: "orders list"
slug: "/commands/orders/list"
sidebar_label: "list"
sidebar_position: 1
---

Lists <a id="order"><span className="dashed-underline">orders</span></a> stored on the blockchain.

This command displays a list of all orders and suborders, unless the `--my-account true` flag is specified.

## Syntax

```shell
./spctl orders list
    [--fields <FIELD>[,<FIELD>,...]]
    [--my-account]
    [--type {tee | storage | solution | data}]
    [--status <ORDER_STATUS>]
    [--save-to <PATH>]
    [--limit <NUMBER>]
    [--cursor <CURSOR_STRING>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Options

| <div style={{width:370}}>**Name**</div>       | <div style={{width:395}}>**Description**</div> |
| :-                                            | :- |
| `--fields <FIELD>[,<FIELD>,...]`              | Columns in the output table, separated by commas. Default fields: `id`, `offer_name`, `status`. Additional fields: `offer_description`, `type`, `offer_id`, `consumer_address`, `parent_order_id`, `total_deposit`, `total_unspent_deposit`, `deposit`, `unspent_deposit`, `cancelable`, `sub_orders_count`, `modified_date`. |
| `--my-account`                                | Flag for showing the orders created by the account specified in the config file. <br/>Default: `false`. |
| `--type {tee \| storage \| solution \| data}` | Filter to only show orders of the specified type. |
| `--status <ORDER_STATUS>`                     | Filter to only show orders with the specified statuses, separated by comma. Available statuses: `new`, `processing`, `canceling`, `canceled`, `done`, `error`, `blocked`, `suspended`. |
| `--save-to <PATH>`                            | Path to save the output to the file. |
| `--limit <NUMBER>`                            | Number of records to display. <br/>Default: `10`. |
| `--cursor <CURSOR_STRING>`                    | Cursor for pagination. |
| `--config <CONFIG_PATH>`                      | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                                | Help for the command. |

## Example

```shell
./spctl orders list --fields id,offer_name,status --my-account --type tee --status new,blocked,processing
```