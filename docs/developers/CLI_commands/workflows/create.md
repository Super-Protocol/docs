---
id: "create"
title: "Create workflow"
slug: "/cli_commands/workflows/create"
sidebar_label: "create"
---

This command enables the creation of a complete workflow on the TEE device, encompassing the primary order as well as associated sub-orders for solutions and data. Users have the flexibility to select a solution from available offers or provide their own. Similarly, data for processing can be chosen or provided. Each selected solution and data (with specified offer) set forms separate sub-orders, all linked with the main order.

In addition to this, to store the outcomes of the TEE device’s operation, users must specify an offer from a data storage provider. This creates an additional sub-order, which is also integrated into the overall workflow.

Also it is necessary to specify a using slot, except for the TEE offer. In the case of the TEE offer, if a slot is not specified, an auto-matching feature is activated. This feature automatically identifies and selects the necessary equipment required for the workflow's execution. This auto-matching ensures optimal allocation of resources and seamless integration of the TEE device within the workflow.

Therefore, when specifying offers for solutions, data, and storage, users must include the relevant slot IDs. However, for the TEE offer, users have the option to either specify a slot ID or rely on the system’s auto-matching capability to determine the most suitable equipment for their workflow.
## Usage

```
./spctl workflows create [OPTIONS]
```

## Options

|**Name, shorthand**|**Description**|
| :- | :- |
|`--tee <id,slotId>`|TEE offer `id` with the `slotId` (required)|
|`--tee-slot-count <count>`|Number of using TEE slots (required)|
|`--tee-options <id...>`|TEE options `id` (TEE options array. Accepts multiple values) (default: [])|
|`--tee-options-count <value...>`|TEE options count array <values>. Accepts multiple values (default: [])|
|`--storage <id,slotId>`|Storage offer `id` (required)|
|`--solution {<id,slotId> OR <path>}`|Solution offer `id` with `slotId` or resource/tii file `path` (required and accepts multiple values)|
|`--data {<id,slotId> OR <path>}`|Data offer `id` with `slotId` or resource/tii file `path` (accepts multiple values)|
|`--deposit <amount>`|`Amount` of the payment deposit in TEE tokens (if not specified, the minimum deposit required is used)|
|`--min-rent-minutes <number>`|Minutes of TEE processing that will be paid in advance|
|`--config <path>`|`Path` to the configuration file. Defaoul value `./config.json`|

## Examples
Here are examples for several workflows.

Create Image Classification workflow with sample images from offers
```
./spctl workflows create --tee 1,1 --tee-slot-count 3 --solution 7,3 --solution 5,1 --data 13,9 --data 14,10 --storage 20,16
```

Create Speech Recognition workflow with sample images from offers with auto-matching on specified TEE offer
```
./spctl workflows create --tee 2 --solution 8,4 --solution 2,1 --data 15,11 --data 16,12 --storage 20,16
```

Create Face Recognition workflow with own images with auto-matching on any TEE offer
```
./spctl workflows create --solution 9,5 --solution 2,1 --data ./data.json --storage 20,16
```

Create workflow with own solution based on Python base image and own data
```
./spctl workflows create --tee 3,5 --tee-slot-count 3 --solution 2,1 --solution solution.json --data ./data.json --storage 20,16
```
