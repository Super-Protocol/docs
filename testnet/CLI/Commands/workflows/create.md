---
id: "cli-workflows-create"
title: "Create workflow"
slug: "/cli/commands/workflows/create"
sidebar_label: "create"
---

Creation of new workflows. This command allows you to create an entire process on the TEE device based on the selected solution and data. You can choose a solution from the offer or by providing your own. The same is true for data.

To save the results, you must specify an offer for the storage provider.

## Usage

```
spctl workflows create [OPTIONS]
```

## Options

|**Name, shorthand**|**Description**|
| :- | :- |
|`--tee <id,slotId>`|TEE offer `id` with the `slotId` (required)|
|`--tee-slot-count <count>`|Number of using TEE slots (required)|
|`--storage <id,slotId>`|Storage offer `id` (required)|
|`--solution {<id,slotId> | <path>}`|Solution offer `id` with `slotId` or resource/tii file `path` (required and accepts multiple values)|
|`--data {<id,slotId> | <path>}`|Data offer `id` with `slotId` or resource/tii file `path` (accepts multiple values)|
|`--deposit <amount>`|`Amount` of the payment deposit in TEE tokens (if not specified, the minimum deposit required is used)|
|`--config <path>`|`Path` to the configuration file. Defaoul value `./config.json`|

## Examples
Here are examples for several workflows.

Create Image Classification workflow with sample images
```
./spctl workflows create --tee 1,1 --tee-slot-count 3 --solution 4,3 --solution 2,1 --data 11,10 --data 12,11 --storage 18,17
```

Create Speech Recognition workflow with sample images
```
./spctl workflows create --tee 1,1 --tee-slot-count 3 --solution 5,4 --solution 2,1 --data 13,12 --data 14,13 --storage 18,17
```

Create Face Recognition workflow with sample images
```
./spctl workflows create --tee 1,1 --tee-slot-count 3 --solution 6,5 --solution 2,1 --data 15,14 --data 16,15 --storage 18,17
```

## Offers and provided slots table
|**Offer Id**|**Description**|**Slot Id**|
| :- | :- | :- |
|1|TEE Offer|1|
|2|Python Base Image|1|
|3|NodeJS Base Image|2|
|4|Image Classification Solution|3|
|5|Speech Recognition Solution|4|
|6|Face Recognition Solution|5|
|8|Tunnel Server Solution|7|
|9|Tunnel Client Solution|8|
|10|Hosting Launcher Solution|9|
|11|Image Classification Dataset #1|10|
|12|Image Classification Dataset #2|11|
|13|Speech Recognition Dataset #1|12|
|14|Speech Recognition Dataset #2|13|
|15|Face Recognition Dataset #1|14|
|16|Face Recognition Dataset #2|15|
|17|Demo Static Website|16|
|18|Storj DCS Offer|17|
