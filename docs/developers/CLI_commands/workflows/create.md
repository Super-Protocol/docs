---
id: "create"
title: "workflows create"
slug: "/cli_commands/workflows/create"
sidebar_label: "create"
---

Create a main compute order and necessary suborders: solution, data, storage.

For solutions and data, it is possible to use existing offers or [uploaded](/developers/cli_commands/files/upload) files. Be mindful of the [testnet limitations](/testnet/limitations).

Refer to the [Super Protocol fundamentals](/developers/fundamentals) and the [Marketplace Walkthrough](/developers/marketplace/walkthrough/) to understand the logic of the Super Protocol order creation process.

## Synopsis

```
./spctl workflows create --solution <solutionId,solutionSlotId|solutionResourceJson> [--solution <solutionId,solutionSlotId|solutionResourceJson> ...] --data <dataId,dataSlotId|dataResourceJson> [--data <dataId,dataSlotId|dataResourceJson> ...] --storage <storageId,storageSlotId> [option ...]
```

After creating the order, the command shows the order ID in the terminal output. Use this order ID to track and manage the order.

## Options

|**Name**|**Description**|
| :- | :- |
|`--tee`|IDs of the compute offer and slot separated with a comma. Default is automatic selection|
|`--tee-slot-count`|Compute slot increments—how many times use the selected slot. Use this option together with `--tee`. Default is automatic selection|
|`--tee-options`|ID of the compute option. Use this option together with `--tee`. Default is automatic selection|
|`--tee-options-count`|Number of compute option increments. Use this option together with `--tee`. Default is automatic selection|
|`--deposit`|Deposit in TEE tokens. Default is the minimum required deposit|
|`--min-rent-minutes`|Compute lease time in minutes. Using this option will increase the required deposit. Default is the minimum required time|
|`--solution`|IDs of the solution offer and slot separated with a comma, or the path to the solution resource JSON file. Use this option multiple times if necessary|
|`--data`|IDs of the data offer and slot separated with a comma or the path to the data resource JSON file. Use this option multiple times if necessary|
|`--storage`|IDs of the storage offer and slot separated with a comma|
|`--config`|Path to the configuration file. Default is `./config.json`|

If you run an uploaded solution that does not require data, do not use the `--data` option.

## Examples

**Example 1.** Super Chat with automatic compute selection

The following command deploys [Super Chat](/developers/offers/superchat):

```
./spctl workflows create --solution 12,12 --solution 6,2 --data 17,22 --storage 25,30
./spctl workflows create --solution 12,12 --solution 6,2 --data 17,22 --storage 25,30
```

Options used:

- `--solution 12,12`: [Tunnels Launcher](https://marketplace.superprotocol.com/solutions?offer=offerId%3D12) solution (offer ID 12, requirement slot ID 12)
- `--solution 6,2`: [Node.js Base Image](https://marketplace.superprotocol.com/?offer=offerId%3D6) solution (offer ID 6, requirement slot ID 2). Tunnels Launcher requires this solution to work
- `--data 17,22`: [Super Chat Config](https://marketplace.superprotocol.com/data?offer=offerId%3D17) dataset (offer ID 17, requirement slot ID 22)
- `--storage 25,30`: [Storj DCS Offer](https://marketplace.superprotocol.com/storage?offer=offerId%3D25) (offer ID 25, requirement slot ID 30)

The absence of the `--tee` option means that SPCTL automatically selects the most suitable compute offer and configuration for your workload. However, in certain scenarios, you might want to specify the exact compute offer but let SPCTL select the requirement slot and option automatically:

```
./spctl workflows create --tee 4 --solution 12,12 --solution 6,2 --data 17,22 --storage 25,30
./spctl workflows create --tee 4 --solution 12,12 --solution 6,2 --data 17,22 --storage 25,30
```

The `--tee 4` option means you want to use [TEE Offer #4](https://marketplace.superprotocol.com/compute?offer=offerId%3D4) (offer ID 4) but automatically determine the slot and option to use.

**Example 2.** Super Chat with manual compute selection

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
- other options are explained in the previous example

If the `--deposit` and `--min-rent-minutes` are not specified, SPCTL uses the default minimums. The minimum lease time is the biggest of the minimum time values of all the offers in the order.

For the offers in this example, the minimum deposit is 1.120 TEE tokens and the minimum lease time is 60 minutes:

- The requirement slot ID 7 of [TEE Offer #4](https://marketplace.superprotocol.com/compute?offer=offerId%3D4) has a minimum lease time of 10 minutes; four increments result in 40 minutes.
- The requirement slot of [Tunnels Launcher](https://marketplace.superprotocol.com/solutions?offer=offerId%3D12) offer has a minimum lease time of 60 minutes.
- Other offers in the order do not restrict the minimum lease time.

**Example 3.** Use uploaded solution and data

The following command creates an order using an [uploaded](/developers/cli_commands/files/upload) solution and data:

```
./spctl workflows create --solution 5,1  --solution ./python-solution.json --data ./data-input-1.json --data ./data-input-2.json --storage 25,30
```

Options used:

- `--solution 5,1`: offer ID 5 ([Python Base Image](https://marketplace.superprotocol.com/solutions?offer=offerId%3D5)), requirement slot ID 1
- `--solution ./python-solution.json`: uploaded solution specified in the `python-solution.json` resource file in the SPCTL root directory
- `--data ./data-input-1.json` and `--data ./data-input-2.json`: uploaded datasets specified in the `data-input-1.json` and `data-input-2.json` resource files in the SPCTL root directory

Learn more about deploying custom solutions in the [Deployment guides](/developers/deployment_guides).
