---
id: "cli-orders"
title: "orders"
slug: "/cli_commands/orders"
sidebar_position: 5

---

View and manage your orders. In most cases it is more convenient to do via the [Marketplace GUI](/developers/marketplace) where all the below functions are available.

## Usage

```
./spctl orders <command>
```

## Child commands

|**Command**|**Description**|
| :- | :- |
|[cancel](/developers/cli_commands/orders/cancel)|Cancel order with `id`|
|[download-result](/developers/cli_commands/orders/download-result)|Download order result with `id`|
|[get](/developers/cli_commands/orders/get)|Display detailed information on order with `id`|
|[list](/developers/cli_commands/orders/list)|List orders|
|[replenish-deposit](/developers/cli_commands/orders/replenish-deposit)|Replenish order deposit with `id` by `amount`|
|[withdraw-deposit](/developers/cli_commands/orders/withdraw-deposit)|Withdraw unspent deposit from a completed order with `id`|