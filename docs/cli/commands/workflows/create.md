---
id: "cli-workflows-create"
title: "workflows create"
slug: "/commands/workflows/create"
sidebar_label: "create"
sidebar_position: 1
---

Creates a main compute <a id="order"><span className="dashed-underline">order</span></a> and necessary suborders: solution, data, and storage.

The output of the command contains the order ID necessary to track and manage the order with the [`orders`](/cli/commands/orders) commands or in the [Marketplace web app](https://marketplace.superprotocol.com/marketplace).

For <a id="solution"><span className="dashed-underline">solutions</span></a> and <a id="data"><span className="dashed-underline">data</span></a>, you can add to an order either a Marketplace <a id="offer"><span className="dashed-underline">offer</span></a> or [uploaded files](/cli/commands/files/upload). Refer to the [fundamentals](/fundamentals) to understand the logic of the Super Protocol order creation process.

## Syntax

```shell
./spctl workflows create
    --tee <OFFER_ID>[,<SLOT_ID>]
        [--tee-slot-count <INC>]
        [--tee-options <OPTION_ID> [<OPTION_ID> ...]]
        [--tee-options-count <INC> [<INC> ...]]
    --solution {<OFFER_ID>[,<SLOT_ID>] | <PATH>}
        [--solution-configuration <PATH>]
        [--solution-hash <HASH>]
    [--data {<OFFER_ID>[,<SLOT_ID>] | <PATH>} [--data ...]]
    [--deposit <SPPI>]
    [--min-rent-minutes <MINUTES>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Options

| <div style={{width:335}}>**Name**</div>           | <div style={{width:420}}>**Description**</div> |
| :-                                                | :- |
| `--tee <OFFER>[,<SLOT>]`                          | Compute offer you are adding to the order. State the compute offer ID and, optionally, the [configuration slot](/fundamentals/slots#configuration) ID, separated by a comma. If the configuration slot is not specified, it will be selected automatically. <br/><br/>If you do not use this option, the compute offer and its configuration will be selected automatically. |
| `--tee-slot-count <INC>`                          | Configuration slot increments—how many times the selected slot is applied. Use this option together with `--tee`. <br/><br/>If you do not use this option, the increments will be calculated automatically. |
| `--tee-options <OPTION> [<OPTION> ...]`           | IDs of [configuration options](/fundamentals/slots#configuration) separated by spaces. Use `--tee-options` together with `--tee`. <br/><br/>If you do not use `--tee-options`, configuration options will be selected automatically. |
| `--tee-options-count <INC> [<INC> ...]`           | Increments for each configuration option separated by spaces. Use `--tee-options-count` together with `--tee` and `--tee-options`. <br/><br/>If you do not use `--tee-options-count`, increments will be calculated automatically. |
| `--solution {<OFFER>[,<SLOT>] \| <PATH>}`         | Solution you are adding to the order: <br/><br/>• For a Marketplace offer, state the solution offer ID and (optionally) a <a id="slot"><span className="dashed-underline">requirement slot</span></a> ID, separated by a comma. If the slot is not specified, it will be selected automatically. <br/>• For an [uploaded](/cli/commands/files/upload) solution, state the path to the solution resource JSON file. <br/><br/>You can use this option multiple times. |
| `--solution-configuration <PATH>`                 | A solution configuration JSON file. |
| `--solution-hash <HASH>`                          | Prevents the processing of the order if the hash of the <a id="solution"><span className="dashed-underline">solution</span></a> doesn't match. |
| `--data {<OFFER>[,<SLOT>] \| <PATH>}`             | Data you are adding to the order: <br/><br/>• For a Marketplace offer, state the data offer ID and (optionally) a requirement slot ID, separated by a comma. If the requirement slot is not specified, it will be selected automatically. <br/>• For [uploaded](/cli/commands/files/upload) data, state the path to the data resource JSON file. <br/><br/>You can use this option multiple times. |
| `--deposit <SPPI>`                                | [Deposit](/fundamentals/orders#usage-scenarios) in SPPI tokens. <br/>Default: the minimum required deposit. |
| `--min-rent-minutes <MINUTES>`                    | Compute [lease time](/fundamentals/orders#usage-scenarios) in minutes. Using this option will increase the required deposit. <br/>Default: the minimum required time. |
| `--config <CONFIG_PATH>`                          | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                                    | Help for the command. |

## Examples

### Marketplace solution

```shell
./spctl workflows create \
    --tee 11
    --solution 25 \
    --solution-configuration ./engine-configuration.json \
    --data ./ai-model.resource.json
```

### Uploaded script

```shell
./spctl workflows create \
    --tee 7,13 \
    --tee-slot-count 1 \
    --solution ./python-script.resource.json \
    --data ./data.resource.json
```
