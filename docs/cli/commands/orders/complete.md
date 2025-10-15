---
id: "cli-orders-complete"
title: "orders complete"
slug: "/commands/orders/complete"
sidebar_label: "complete"
sidebar_position: 6
---

Completes an <a id="order"><span className="dashed-underline">order</span></a>.

## Syntax

```shell
./spctl orders complete <ORDER_ID> ...
    --status <STATUS>
    [--result <RESOURCE>]
    [--solution-hash <HASH>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:220}}>**Name**</div>   | <div style={{width:545}}>**Description**</div> |
| :-                                        | :- |
| `<ORDER_ID>`                              | Order ID. |

## Options

| <div style={{width:220}}>**Name**</div>   | <div style={{width:545}}>**Description**</div> |
| :-                                        | :- |
| `--status <STATUS>`                       | Order status to set. Available statuses: `done`, `error`, `canceled`. |
| `--result <RESOURCE>`                     | Path to the resource JSON file that should be the suborder's result (for suborders that receive the `done` status). |
| `--solution-hash <HASH>`                  | Prevents the completion of a <a id="data"><span className="dashed-underline">data</span></a> suborder if the hash of the order's <a id="solution"><span className="dashed-underline">solution</span></a> doesn't match. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl orders complete 1312 \
    --status done \
    --result ./resource.json \
    --solution-hash 1e6724cd8622e286fed0740223400571488359c7608055df9f83cbdc18067a0e
```