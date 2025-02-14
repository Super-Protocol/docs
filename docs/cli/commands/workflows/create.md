---
id: "cli-workflows-create"
title: "workflows create"
slug: "/commands/workflows/create"
sidebar_label: "create"
---

Creates a main compute order and necessary suborders: solution, data, and storage.

The output of the command contains the order ID necessary to track and manage the order with the [`orders`](/cli/commands/orders) commands or in the [Marketplace web app](https://marketplace.superprotocol.com/marketplace).

For solutions and data, you can add to an order either Marketplace [offers](/fundamentals/offers) or [uploaded files](/cli/commands/files/upload). Refer to the [fundamentals](/fundamentals) to understand the logic of the Super Protocol order creation process.

## Syntax

```
./spctl workflows create
    --solution {<offerId>,[<slotId>] | <path>} [--solution ...]
    --storage <offerId>,[<slotId>]
    [--data {<offerId>,[<slotId>] | <path>}] [--data ...]
    [--tee <offerId>,[<slotId>]]
    [--tee-slot-count <inc>]
    [--tee-options <optionId> [<optionId> ...]]
    [--tee-options-count <inc> [<inc> ...]]
    [--deposit <teeTokens>]
    [--min-rent-minutes <minutes>]
    [--config <path>]
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

## Options

| <div style={{width:375}}>**Name**</div> | **Description** |
| :- | :- |
| `--solution {<offerId>,[<slotId>] │ <path>}` | Solution you are adding to the order: <br/><br/>• For a Marketplace offer, state the solution offer ID and the solution [requirement slot](/fundamentals/slots#requirements) ID (optional), separated by a comma. If the requirement slot is not specified, it will be selected automatically.<br/>• For an [uploaded](/cli/commands/files/upload) solution, state the path to the solution resource JSON file.<br/><br/>You can use this option multiple times. |
| `--storage <offerId>,[<slotId>]` | Storage offer you are adding to the order. State the storage offer ID and the storage requirement slot ID (optional), separated by a comma. If the requirement slot is not specified, it will be selected automatically. |
| `--data {<offerId>,[<slotId>] │ <path>}` | Data you are adding to the order: <br/><br/>• For a Marketplace offer, state the data offer ID and the data requirement slot ID (optional), separated by a comma. If the requirement slot is not specified, it will be selected automatically.<br/>• For [uploaded](/cli/commands/files/upload) data, state the path to the data resource JSON file. <br/><br/>You can use this option multiple times. <br/><br/>Although this option is technically not mandatory, most solutions require data. |
| `--tee <offerId>,[<slotId>]` | Compute offer you are adding to the order. State the compute offer ID and, optionally, the [configuration slot](/fundamentals/slots#configuration) ID, separated by a comma. If the configuration slot is not specified, it will be selected automatically. <br/><br/>If you do not use this option, the compute offer and its configuration will be selected automatically. |
| `--tee-slot-count <inc>` | Configuration slot increments—how many times the selected slot is applied. Use this option together with `--tee`. <br/><br/>If you do not use this option, the increments will be calculated automatically. |
| `--tee-options <optionId> [<optionId> ...]` | IDs of [configuration options](/fundamentals/slots#configuration) separated by spaces. Use `--tee-options` together with `--tee`. <br/><br/>If you do not use `--tee-options`, configuration options will be selected automatically. |
| `--tee-options-count <inc> [<inc> ...]` | Increments for each configuration option separated by spaces. Use `--tee-options-count` together with `--tee` and `--tee-options`. <br/><br/>If you do not use `--tee-options-count`, increments will be calculated automatically. |
| `--deposit <teeTokens>` | [Deposit](/fundamentals/orders#lease-deposit-and-balance) in TEE tokens. The default is the minimum required deposit. |
| `--min-rent-minutes <minutes>` | Compute [lease time](/fundamentals/orders#lease-deposit-and-balance) in minutes. Using this option will increase the required deposit. The default is the minimum required time. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |
