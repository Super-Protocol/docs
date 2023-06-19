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
|`--solution {<id,slotId> OR <path>}`|Solution offer `id` with `slotId` or resource/tii file `path` (required and accepts multiple values)|
|`--data {<id,slotId> OR <path>}`|Data offer `id` with `slotId` or resource/tii file `path` (accepts multiple values)|
|`--deposit <amount>`|`Amount` of the payment deposit in TEE tokens (if not specified, the minimum deposit required is used)|
|`--config <path>`|`Path` to the configuration file. Defaoul value `./config.json`|

## Examples
Here are examples for several workflows.

Create Image Classification workflow with sample images
```
./spctl workflows create --tee 1,1 --tee-slot-count 3 --solution 7,3 --solution 5,1 --data 13,9 --data 14,10 --storage 20,16
```

Create Speech Recognition workflow with sample images
```
./spctl workflows create --tee 2,2 --tee-slot-count 3 --solution 8,4 --solution 2,1 --data 15,11 --data 16,12 --storage 20,16
```

Create Face Recognition workflow with sample images
```
./spctl workflows create --tee 3,3 --tee-slot-count 3 --solution 9,5 --solution 2,1 --data 17,13 --data 18,14 --storage 20,16
```

## Offers and provided slots table
|**Offer Id**|**Description**|**Slot Id**|
| :- | :- | :- |
|1|TEE Offer #1|1|
|2|TEE Offer #2|2|
|3|TEE Offer #3|3|
|4|TEE Offer #4|4|
|5|Python Base Image|1|
|6|NodeJS Base Image|2|
|7|Image Classification Solution|3|
|8|Speech Recognition Solution|4|
|9|Face Recognition Solution|5|
|10|Tunnel Server Solution|6|
|11|Tunnel Client Solution|7|
|12|Hosting Launcher Solution|8|
|13|Image Classification Dataset #1|9|
|14|Image Classification Dataset #2|10|
|15|Speech Recognition Dataset #1|11|
|16|Speech Recognition Dataset #2|12|
|17|Face Recognition Dataset #1|13|
|18|Face Recognition Dataset #2|14|
|19|Demo Static Website|15|
|20|Storj DCS Offer|16|
