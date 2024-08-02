---
id: "create"
title: "workflows create"
slug: "/cli_commands/workflows/create"
sidebar_label: "create"
---

Creates a main compute [order](/developers/fundamentals/orders) and necessary suborders: solution, data, and storage.

The output of the command contains the order ID necessary to track and manage the order with the [`orders`](/developers/cli_commands/orders) commands.

For solutions and data, you can add to an order either Marketplace [offers](/developers/fundamentals/offers) or [uploaded](/developers/cli_commands/files/upload) files. Refer to the [fundamentals](/developers/fundamentals) and the [Marketplace Walkthrough](/developers/marketplace/walkthrough/) to understand the logic of the Super Protocol order creation process.

The example of the resulting order in the [Marketplace GUI](/developers/marketplace):

<img src={require('./../../images/cli_workflows_1.png').default} width="auto" height="auto"/>

<br/>

## Syntax

```
./spctl workflows create --solution {solutionId,solutionSlotId | solutionResourceJson} [--solution ...] [--data {dataId,dataSlotId | dataResourceJson}] [--data ...] --storage <storageId,storageSlotId> [option ...]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `solutionId` | ID of the solution offer you are adding to the order. |
| `solutionSlotId` | ID of the [requirement slot](/developers/fundamentals/slots#requirements) in the solution offer. |
| `solutionResourceJson` | Path to the resource JSON file with the information for the compute provider on how to access the uploaded solution. Use it instead of `solutionId,solutionSlotId` if you are adding an uploaded solution. See the "Example 3" below. |
| `dataId` | ID of the data offer you are adding to the order. |
| `dataSlotId` | ID of the [requirement slot](/developers/fundamentals/slots#requirements) in the data offer. |
| `dataResourceJson` | Path to the resource JSON file with the information for the compute provider on how to access the uploaded data. Use it instead of `dataId,dataSlotId` if you are adding uploaded data. See the "Example 3" below. |
| `storageId` | ID of the storage offer you are adding to the order. |
| `storageSlotId` | ID of the slot in the storage offer. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--tee` | IDs of the compute offer and [configuration slot](/developers/fundamentals/slots#configurations) separated by a comma. The default is automatic selection. |
| `--tee-slot-count` | Configuration slot increments—how many times use the selected slot. Use this option together with `--tee`. The default is automatic selection. |
| `--tee-options` | ID of the [configuration option](/developers/fundamentals/slots#configurations). Use this option together with `--tee`. The default is automatic selection. |
| `--tee-options-count` | Number of configuration option increments. Use this option together with `--tee`. The default is automatic selection. |
| `--deposit` | [Deposit](/developers/fundamentals/orders#lease-deposit-and-balance) in TEE tokens. The default is the minimum required deposit. |
| `--min-rent-minutes` | Compute [lease time](/developers/fundamentals/orders#lease-deposit-and-balance) in minutes. Using this option will increase the required deposit. The default is the minimum required time. |
| `--solution` | Either the IDs of the solution offer and requirement slot, separated by a comma, or the path to the solution resource JSON file. Use this option multiple times if necessary. |
| `--data` | Either the IDs of the data offer and requirement slot, separated by a comma, or the path to the data resource JSON file. Use this option multiple times if necessary. Note that this option is obligatory in most cases. However, if you run an uploaded solution that does not require data, do not use this option. |
| `--storage` | IDs of the storage offer and slot separated by a comma. |
| `--config` | Path to the configuration file. The default is `./config.json`. |

## Examples

The following are three examples of using the `workflows create` command:

- With automatic selection of a compute offer
- With manual selection of a compute offer
- With uploaded solution and data.

### Example 1. Super Chat with automatic compute selection

The following command deploys [Super Chat](/developers/offers/superchat):

```
./spctl workflows create --solution 12,12 --solution 6,2 --data 17,22 --storage 25,30
```

Options used:

- `--solution 12,12`: [Tunnels Launcher](https://marketplace.superprotocol.com/solutions?offer=offerId%3D12) solution (offer ID 12, requirement slot ID 12)
- `--solution 6,2`: [Node.js Base Image](https://marketplace.superprotocol.com/?offer=offerId%3D6) solution (offer ID 6, requirement slot ID 2). Tunnels Launcher requires this solution to work
- `--data 17,22`: [Super Chat Config](https://marketplace.superprotocol.com/data?offer=offerId%3D17) dataset (offer ID 17, requirement slot ID 22)
- `--storage 25,30`: [Storj DCS Offer](https://marketplace.superprotocol.com/storage?offer=offerId%3D25) (offer ID 25, requirement slot ID 30)

The absence of the `--tee` option means that SPCTL automatically selects the most suitable compute offer and configuration for your workload. However, in certain scenarios, you might want to specify the exact compute offer but let SPCTL select the configuration slots and options automatically:

```
./spctl workflows create --tee 4 --solution 12,12 --solution 6,2 --data 17,22 --storage 25,30
```

The `--tee 4` option means you want to use [TEE Offer #4](https://marketplace.superprotocol.com/compute?offer=offerId%3D4) (offer ID: 4) but automatically determine the slot and option to use.

### Example 2. Super Chat with manual compute selection

The following command deploys [Super Chat](/developers/offers/superchat) without automatic selection:

```
./spctl workflows create --tee 4,7 --tee-slot-count 4 --tee-options 10 --tee-options-count 7 --solution 12,12 --solution 6,2 --data 17,22 --storage 25,30 --deposit 2 --min-rent-minutes 120
```

Options used:

- `--tee 4,7`: [TEE Offer #4](https://marketplace.superprotocol.com/compute?offer=offerId%3D4) (offer ID 4, slot ID 7)
- `--tee-slot-count 4`: four increments—use the selected slot four times
- `--tee-options 10`: option ID 10 that is used in 7 increments
- `--tee-options-count 7`: seven increments—use the selected option seven times
- `--deposit 2`: deposit is 2 TEE tokens
- `--min-rent-minutes 120`: a minimum lease time is 120 minutes
- other options are explained in the previous example.

If the `--deposit` and `--min-rent-minutes` are not specified, SPCTL uses the default minimums. The minimum lease time is the biggest of the minimum time values of all the offers in the order.

For the offers in this example, the minimum deposit is 1.120 TEE tokens and the minimum lease time is 60 minutes:

- The requirement slot ID 7 of [TEE Offer #4](https://marketplace.superprotocol.com/compute?offer=offerId%3D4) has a minimum lease time of 10 minutes; four increments result in 40 minutes.
- The requirement slot of [Tunnels Launcher](https://marketplace.superprotocol.com/solutions?offer=offerId%3D12) offer has a minimum lease time of 60 minutes.
- Other offers in the order do not restrict the minimum lease time.

### Example 3. Uploaded solution and data

The following command creates an order using an [uploaded](/developers/cli_commands/files/upload) solution and data instead of adding Marketplace offers:

```
./spctl workflows create --solution ./python-solution.json --solution 5,1 --data ./data-input-1.json --data ./data-input-2.json --storage 25,30
```

Options used:

- `--solution ./python-solution.json`: uploaded solution specified in the `python-solution.json` resource file in the SPCTL root directory
- `--solution 5,1`: solution offer ID 5 ([Python Base Image](https://marketplace.superprotocol.com/solutions?offer=offerId%3D5)), requirement slot ID 1
- `--data ./data-input-1.json` and `--data ./data-input-2.json`: uploaded datasets specified in the `data-input-1.json` and `data-input-2.json` resource files in the SPCTL root directory.

Learn more about deploying custom solutions in the [Deployment guides](/developers/deployment_guides).
