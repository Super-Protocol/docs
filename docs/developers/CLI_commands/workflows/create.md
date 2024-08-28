---
id: "create"
title: "workflows create"
slug: "/cli_commands/workflows/create"
sidebar_label: "create"
---

Creates a main compute order and necessary suborders: solution, data, and storage.

The output of the command contains the order ID necessary to track and manage the order with the [`orders`](/developers/cli_commands/orders) commands or via the [Marketplace GUI](/developers/marketplace/).

For solutions and data, you can add to an order either Marketplace [offers](/developers/fundamentals/offers) or [uploaded files](/developers/cli_commands/files/upload). Refer to the [fundamentals](/developers/fundamentals) and the [Marketplace Walkthrough](/developers/marketplace/walkthrough/) to understand the logic of the Super Protocol order creation process.

An example of the resulting order in the Marketplace GUI:

<img src={require('../../images/cli_workflows_1.png').default} width="auto" height="auto"/>

<br/>

## Syntax

```
./spctl workflows create \
    --solution {<offerId>,[<slotId>] | <path>} [--solution ...] \
    --storage <offerId>,[<slotId>] \
    [--data {<offerId>,[<slotId>] | <path>}] [--data ...] \
    [--tee <offerId>,[<slotId>]] \
    [--tee-slot-count <inc>] \
    [--tee-options <optionId> [<optionId> ...]] \
    [--tee-options-count <inc> [<inc> ...]] \
    [--deposit <teeTokens>] \
    [--min-rent-minutes <minutes>] \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/developers/cli_commands#command-syntax).

## Options

| <div style={{width:375}}>**Name**</div> | **Description** |
| :- | :- |
| `--solution {<offerId>,[<slotId>] │ <path>}` | Solution you are adding to the order: <br/><br/>• For a Marketplace offer, state the solution offer ID and the solution [requirement slot](/developers/fundamentals/slots#requirements) ID (optional), separated by a comma. If the requirement slot is not specified, it will be selected automatically.<br/>• For an [uploaded](/developers/cli_commands/files/upload) solution, state the path to the solution resource JSON file.<br/><br/>You can use this option multiple times. |
| `--storage <offerId>,[<slotId>]` | Storage offer you are adding to the order. State the storage offer ID and the storage requirement slot ID (optional), separated by a comma. If the requirement slot is not specified, it will be selected automatically. |
| `--data {<offerId>,[<slotId>] │ <path>}` | Data you are adding to the order: <br/><br/>• For a Marketplace offer, state the data offer ID and the data requirement slot ID (optional), separated by a comma. If the requirement slot is not specified, it will be selected automatically.<br/>• For [uploaded](/developers/cli_commands/files/upload) data, state the path to the data resource JSON file. <br/><br/>You can use this option multiple times. <br/><br/>Although this option is technically not mandatory, most solutions require data. |
| `--tee <offerId>,[<slotId>]` | Compute offer you are adding to the order. State the compute offer ID and, optionally, the [configuration slot](/developers/fundamentals/slots#configuration) ID, separated by a comma. If the configuration slot is not specified, it will be selected automatically. <br/><br/>If you do not use this option, the compute offer and its configuration will be selected automatically. |
| `--tee-slot-count <inc>` | Configuration slot increments—how many times the selected slot is applied. Use this option together with `--tee`. <br/><br/>If you do not use this option, the increments will be calculated automatically. |
| `--tee-options <optionId> [<optionId> ...]` | IDs of [configuration options](/developers/fundamentals/slots#configuration) separated by spaces. Use `--tee-options` together with `--tee`. <br/><br/>If you do not use `--tee-options`, configuration options will be selected automatically. |
| `--tee-options-count <inc> [<inc> ...]` | Increments for each configuration option separated by spaces. Use `--tee-options-count` together with `--tee` and `--tee-options`. <br/><br/>If you do not use `--tee-options-count`, increments will be calculated automatically. |
| `--deposit <teeTokens>` | [Deposit](/developers/fundamentals/orders#lease-deposit-and-balance) in TEE tokens. The default is the minimum required deposit. |
| `--min-rent-minutes <minutes>` | Compute [lease time](/developers/fundamentals/orders#lease-deposit-and-balance) in minutes. Using this option will increase the required deposit. The default is the minimum required time. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Examples

The following are three examples of using the `workflows create` command:

- With automatic selection of a compute offer
- With manual selection of a compute offer
- With uploaded solution and data.

### Example 1. Super Chat with automatic compute selection

The following command deploys [Super Chat](/developers/offers/superchat):

```
./spctl workflows create \
    --solution 12,12 \
    --solution 6,2 \
    --data 17,22 \
    --storage 25,30
```

Where:

- `--solution 12,12`: [Tunnels Launcher](https://marketplace.superprotocol.com/solutions?offer=offerId%3D12) solution (offer ID 12, requirement slot ID 12)
- `--solution 6,2`: [Node.js Base Image](https://marketplace.superprotocol.com/?offer=offerId%3D6) solution (offer ID 6, requirement slot ID 2). Tunnels Launcher requires this solution to work
- `--data 17,22`: [Super Chat Config](https://marketplace.superprotocol.com/data?offer=offerId%3D17) dataset (offer ID 17, requirement slot ID 22)
- `--storage 25,30`: [Storj DCS Offer](https://marketplace.superprotocol.com/storage?offer=offerId%3D25) (offer ID 25, requirement slot ID 30)

The absence of the `--tee` option means that the system will automatically select the most suitable compute offer and its configuration for your workload. However, in certain scenarios, you might want to specify the exact compute offer:

```
./spctl workflows create \
    --tee 4 \
    --solution 12,12 \
    --solution 6,2 \
    --data 17,22 \
    --storage 25,30
```

The `--tee 4` option adds [TEE Offer #4](https://marketplace.superprotocol.com/compute?offer=offerId%3D4) (offer ID: 4) to the order. The lack of other `--tee`-related options and arguments lets the system determine the configuration slot and options automatically.

### Example 2. Super Chat with manual compute selection

The following command deploys [Super Chat](/developers/offers/superchat) without automatic selection:

```
./spctl workflows create \
    --tee 4,7 \
    --tee-slot-count 4 \
    --tee-options 10 \
    --tee-options-count 7 \
    --solution 12,12 \
    --solution 6,2 \
    --data 17,22 \
    --storage 25,30 \
    --deposit 2 \
    --min-rent-minutes 120
```

Where:

- `--tee 4,7`: [TEE Offer #4](https://marketplace.superprotocol.com/compute?offer=offerId%3D4) (offer ID: 4, configuration slot ID: 7)
- `--tee-slot-count 4`: four increments—apply the selected configuration slot four times
- `--tee-options 10`: configuration option with ID 10
- `--tee-options-count 7`: seven increments—apply the selected configuration option seven times
- `--deposit 2`: deposit is 2 TEE tokens
- `--min-rent-minutes 120`: a minimum lease time is 120 minutes
- Other options are explained in the previous example.

If the `--deposit` and `--min-rent-minutes` options are not specified, SPCTL uses the default minimums. The minimum lease time is the biggest of the minimum time values of all the offers in the order.

For the offers in this example, the minimum deposit is 1.120 TEE tokens and the minimum lease time is 60 minutes:

- The requirement slot with ID 7 of [TEE Offer #4](https://marketplace.superprotocol.com/compute?offer=offerId%3D4) has the minimum lease time of 10 minutes; four increments result in 40 minutes.
- The requirement slot with ID 12 of [Tunnels Launcher](https://marketplace.superprotocol.com/solutions?offer=offerId%3D12) (offer ID: 12) has the minimum lease time of 60 minutes.
- Other offers in the order do not restrict the minimum lease time.

### Example 3. Uploaded solution and data

The following command creates an order using an [uploaded](/developers/cli_commands/files/upload) solution and data instead of adding Marketplace offers:

```
./spctl workflows create \
    --solution ./python-solution.json \
    --solution 5,1 \
    --data ./data-input-1.json \
    --data ./data-input-2.json \
    --storage 25,30
```

Where:

- `--solution ./python-solution.json`: uploaded solution specified in the `python-solution.json` resource file in the SPCTL root directory
- `--solution 5,1`: [Python Base Image](https://marketplace.superprotocol.com/solutions?offer=offerId%3D5) (offer ID: 5, requirement slot: ID 1)
- `--data ./data-input-1.json` and `--data ./data-input-2.json`: uploaded datasets specified in the `data-input-1.json` and `data-input-2.json` resource files in the SPCTL root directory.

Learn more about deploying custom solutions in the [Deployment guides](/developers/deployment_guides).
