---
id: "cli-orders-get"
title: "orders get"
slug: "/commands/orders/get"
sidebar_label: "get"
sidebar_position: 2
---

Displays the information on an <a id="order"><span className="dashed-underline">order</span></a>.

You can check any order, not only yours. The information on all orders is openly available on the blockchain.

## Syntax

```shell
./spctl orders get <ORDER_ID>
    [--fields <FIELD>[,<FIELD>,...]]
    [--suborders]
    [--suborders_fields <FIELD>[,<FIELD>,...]]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:355}}>**Name**</div>       | <div style={{width:410}}>**Description**</div> |
| :-                                            | :- |
| `<ORDER_ID>`                                  | Order ID. |

## Options

| <div style={{width:355}}>**Name**</div>       | <div style={{width:410}}>**Description**</div> |
| :-                                            | :- |
| `--fields <FIELD>[,<FIELD>,...]`              | Fields in the output, separated by commas. Default fields: `offer_name`, `offer_description`, `type`, `status`, `total_deposit`, `total_unspent_deposit`, `modified_date`. Additional fields: `id`, `offer_id`, `consumer_address`, `parent_order_id`, `deposit`, `unspent_deposit`, `cancelable`. |
| `--suborders`                                 | Flag for showing suborders. <br/>Default: `false`. |
| `--suborders_fields <FIELD>[,<FIELD>,...]`    | Columns in the output table, separated by commas. Default fields: `id`, `offer_name`, `offer_description`, `type`, `status`, `modified_date`. Additional fields: `cancelable`, `actual_cost`. Use together with `--suborders true`. |
| `--config <CONFIG_PATH>`                      | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                                | Help for the command. |

## Example

```shell
./spctl orders get 1312 \
    --suborders true \
    --suborders_fields id,offer_name
```