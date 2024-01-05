---
id: "create"
title: "Create workflow"
slug: "/cli_commands/workflows/create"
sidebar_label: "create"
---

This is one of the most important commands in Super Protocol. It manages the creation of new orders.

This command creates the main order (TEE compute) as well as the sub-orders (solution, data, storage) that are related to the main order. For solutions and data you can choose offers from the Marketplace or upload your own.

The resulting order might look something like this (when viewed in the [Marketplace GUI](/developers/marketplace)):

<img src={require('./../../images/cli_workflows_1.png').default} width="auto" height="auto"/>

<br/>
<br/>

This command uses all the fundamental Super Protocol concepts: [offers](/developers/fundamentals/offers), [orders](/developers/fundamentals/orders), and [slots](/developers/fundamentals/slots). The [Marketplace GUI Walkthrough](/developers/marketplace/walkthrough) is also helpful in understanding the logic of order creation.

Please be mindful of the [testnet limitations](/testnet/limitations) when creating orders.

## Usage

```
./spctl workflows create [OPTIONS]
```

The result of this command is an order ID that you can then use to track and manage the order.

## Example: Marketplace Offers

Let's say you want to deploy [Super Chat](/developers/offers/superchat) using only the offers from the Marketplace, just like in the [Marketplace GUI Walkthrough](/developers/marketplace/walkthrough) guide.

The command you'd use would look something like this:

```
./spctl workflows create --solution 11,11 --solution 6,2 --data 15,19 --storage 23,27
```

Where:
* `--solution 11,11` - the [Tunnels Launcher](/developers/offers/launcher), offer ID 11. Requirements: slot ID also #11.
* `--solution 6,2` - the Node.js base image, offer ID #6. Requirements: slot ID #2.
* `--data 15,19` - Super Chat Config data, offer ID #15. Requirements: slot ID #19.
* `--storage 23,27` - storage for storing results, offer ID #23. Requirements: slot ID #27.

**Note:** the absence of the `--tee` option means that SPCTL will use auto-select to choose the most appropriate compute offer and configuration for your workload.

In some scenarios you might want to specify the exact compute offer that you want, but leave the rest to the auto-select. Then the command might look like this:

```
./spctl workflows create --tee 4 --solution 11,11 --solution 6,2 --data 15,19 --storage 23,27
```

Where `--tee 4` means that you want to use specifically compute offer #4, but the combinations of slots and options are to be determined automatically.

## Example: Manual Compute Selection

You can also completely bypass auto-select and specify exactly which compute offer and configuration you want. Then your command might look something like this:

```
./spctl workflows create --tee 4,7 --tee-slot-count 4 --tee-options 10 --tee-options-count 7 --solution 11,11 --solution 6,2 --data 15,19 --storage 23,27
```
Where:
* `--tee 4,7 --tee-slot-count 4` - compute offer ID #4 with slot ID #7 that is used in 4 increments (so, four times).
* `--tee-options 10 --tee-options-count 7` - compute offer ID #4 (as above) with options ID #10 that is used in 7 increments.

Now let's specify deposits and lease:

```
./spctl workflows create --tee 4,7 --tee-slot-count 4 --tee-options 10 --tee-options-count 7 --solution 11,11 --solution 6,2 --data 15,19 --storage 23,27 --deposit 2 --min-rent-minutes 120
```

Where:
* `--deposit 2` - deposit is specified as 2 TEE. 
* `--min-rent-minutes 120` - the lease time is specified as 120 minutes. 

If these are not specified, then the default minimums will be used. For instance, for the above offers the minimum deposit is 1.120 TEE and minimum lease time is 60 minutes. Minimum lease is determined by the maximum value of all Min.Time values across all offers in the order: if your compute Min.Time is 40 minutes, your base image Min.Time is 0 minutes, and your Tunnels Launcher Min.Time is 60 minutes, the system will require 60 minutes. 


## Example: Using own solution and data

The examples above use only offers from the Marketplace, but you most likely will want to deploy your own solutions and data. 

Let's take a scenario where you want to deploy your own Python solution with two datasets: 

```
./spctl workflows create --solution 5,1  --solution ./your-python.json --data ./your-input-1.json --data ./your-input-2.json --storage 23,27
```

Where:

* `--solution 5,1` - Python base image with offer ID #5. Requirements: slot ID #1.
* `--solution ./your-python.json` - your own solution.
* `--data ./your-input-1.json` and `--data ./your-input-2.json` - your two data sets.

**Note:** this command requires that your solutions and data have been previously uploaded to the storage using the [upload](/developers/cli_commands/files/upload) command. It won't work as copy/paste.

You can learn more about deploying your own solutions in the deployment guides. It's probably best to start with a simple Python solution [here](/developers/deployment_guides/python).

## Options

|**Name, shorthand**|**Description**|
| :- | :- |
|`--tee <id,slotId>`|Compute offer `id` with the `slotId`. Compute auto-select activates if not specified.|
|`--tee-slot-count <value>`|Number of compute slots increments.|
|`--tee-options <id...>`|Compute options `slotId`.|
|`--tee-options-count <value...>`|Number of compute options increments.|
|`--deposit <value>`|Deposit in TEE tokens. If not specified, then the minimum required deposit is used).|
|`--min-rent-minutes <value>`|Compute lease time in minutes. Will increase the required deposit. |
|`--solution {<id,slotId>`|Solution offer `id` with `slotId`.|
|`--data <id,slotId>`|Data offer `id` with `slotId`.|
|`--storage <id,slotId>`|Storage offer `id` with `slotId`.|
|`--config <path>`|`Path` to the configuration file. Default value `./config.json`|

