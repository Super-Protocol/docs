---
id: "spctl-orders-get"
title: "Get order"
slug: "/spctl/orders/get"
sidebar_label: "orders get"
---

# spctl orders get

## Usage:

```shell
$ spctl orders get <id> [--fields <fields>] [--suborders <boolean>] [--suborders_fields <fields>] [--config <config>]
```

get order

## Description:

Fetch data about order with specified id

## Arguments:

|**Name**|**Description**|
| :- | :- |
|`id`|ID of the order|

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--fields`|`id,name,description,authority_account,action_account`|A comma-separated list of fields `id, name, description, authority_account, action_account, modified_date`|
|`--suborders`|`true`|Show suborders|
|`--suborders_fields`|`id,offer_name,offer_description,type,status,modified_date`|A comma-separated list of fields of suborders. `id, offer_name, offer_description, type, status, cancelebel, actual_cost, modified_date`|
|`--config`|`./config.json`|Path to a config file|