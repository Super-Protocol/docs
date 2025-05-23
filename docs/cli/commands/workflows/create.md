---
id: "cli-workflows-create"
title: "workflows create"
slug: "/commands/workflows/create"
sidebar_label: "create"
---

Creates a main compute <a id="order"><span className="dashed-underline">order</span></a> and necessary suborders: solution, data, and storage.

The output of the command contains the order ID necessary to track and manage the order with the [`orders`](/cli/commands/orders) commands or in the [Marketplace web app](https://marketplace.superprotocol.com/marketplace).

For <a id="solution"><span className="dashed-underline">solutions</span></a> and data, you can add to an order either a Marketplace <a id="offer"><span className="dashed-underline">offer</span></a> or [uploaded files](/cli/commands/files/upload). Refer to the [fundamentals](/fundamentals) to understand the logic of the Super Protocol order creation process.

## Syntax

```
./spctl workflows create
    --solution {<offerId>,[<slotId>] | <path>} [--solution ...]
    --storage <offerId>,[<slotId>]
    [--data {<offerId>,[<slotId>] | <path>}] [--data ...]
    [--solution-configuration <path>]
    [--tee <offerId>,[<slotId>]]
    [--tee-slot-count <inc>]
    [--tee-options <optionId> [<optionId> ...]]
    [--tee-options-count <inc> [<inc> ...]]
    [--deposit <sppi>]
    [--min-rent-minutes <minutes>]
    [--config <path>]
    [--help | -h]
```

## Options

| <div style={{width:375}}>**Name**</div> | **Description** |
| :- | :- |
| `--solution {<offerId>,[<slotId>] │ <path>}` | Solution you are adding to the order: <br/><br/>• For a Marketplace offer, state the solution offer ID and the solution <a id="slot"><span className="dashed-underline">requirement slot</span></a> ID (optional), separated by a comma. If the slot is not specified, it will be selected automatically.<br/>• For an [uploaded](/cli/commands/files/upload) solution, state the path to the solution resource JSON file.<br/><br/>You can use this option multiple times. |
| `--storage <offerId>,[<slotId>]` | Storage offer you are adding to the order. State the storage offer ID and the storage requirement slot ID (optional), separated by a comma. If the requirement slot is not specified, it will be selected automatically. |
| `--data {<offerId>,[<slotId>] │ <path>}` | Data you are adding to the order: <br/><br/>• For a Marketplace offer, state the data offer ID and the data requirement slot ID (optional), separated by a comma. If the requirement slot is not specified, it will be selected automatically.<br/>• For [uploaded](/cli/commands/files/upload) data, state the path to the data resource JSON file. <br/><br/>You can use this option multiple times. <br/><br/>Although this option is technically not mandatory, most solutions require data. |
| `--solution-configuration <path>` | A solution configuration JSON file. |
| `--tee <offerId>,[<slotId>]` | Compute offer you are adding to the order. State the compute offer ID and, optionally, the [configuration slot](/fundamentals/slots#configuration) ID, separated by a comma. If the configuration slot is not specified, it will be selected automatically. <br/><br/>If you do not use this option, the compute offer and its configuration will be selected automatically. |
| `--tee-slot-count <inc>` | Configuration slot increments—how many times the selected slot is applied. Use this option together with `--tee`. <br/><br/>If you do not use this option, the increments will be calculated automatically. |
| `--tee-options <optionId> [<optionId> ...]` | IDs of [configuration options](/fundamentals/slots#configuration) separated by spaces. Use `--tee-options` together with `--tee`. <br/><br/>If you do not use `--tee-options`, configuration options will be selected automatically. |
| `--tee-options-count <inc> [<inc> ...]` | Increments for each configuration option separated by spaces. Use `--tee-options-count` together with `--tee` and `--tee-options`. <br/><br/>If you do not use `--tee-options-count`, increments will be calculated automatically. |
| `--deposit <sppi>` | [Deposit](/fundamentals/orders#usage-scenarios) in SPPI tokens. The default is the minimum required deposit. |
| `--min-rent-minutes <minutes>` | Compute [lease time](/fundamentals/orders#usage-scenarios) in minutes. Using this option will increase the required deposit. The default is the minimum required time. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl workflows create \
    --tee 8 \
    --solution 25 \
    --solution-configuration ./engine-configuration.json \
    --data ./data-resource.json \
    --storage 47
```
