---
id: "add-slot"
title: "add-slot"
slug: "/cli_commands/offers/slots/add-slot"
sidebar_position: 1
---

Add a new slot to an existing offer.

## Usage

Syntax:

```
./spctl offers add-slot <type> [OPTIONS]
```

Example: add a new slot to an existing offer using the information in `offerSlot.json` which is located in the same directory together with SPCTL.

```
./spctl offers add-slot value --offer 10 --path ./offerSlot.json
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |

## Options

| **Name, shorthand** | **Default**        | **Description**                |
|:--------------------|:-------------------|:-------------------------------|
| `--offer`           |                    | Offer `id`                     |
| `--path`            | `./offerSlot.json` | Path to the slot content file  |
| `--config`          | `./config.json`    | Path to the configuration file |

## Content file requirements

The file should contain the following sections:
1. computing power configuration
- `cpuCores` - a float value
- `gpuCores` - a float value
- `diskUsage` - a value in bytes
- `ram` - a value in bytes
2. terms and conditions of usage
- `maxTimeMinutes` - 0 for no limits,
- `minTimeMinutes` - 0 for no limits,
- `price` - a value in weis
- `priceType` - 1 for fixed price, 0 for price per hour. **Note:** in case of TEE slot, only price per hour is supported.
3. internet access configuration (only for value offers)
-  `bandwidth` - a value in bits
- `traffic` - a value in bits
- `externalPort` - 1 for Yes, 0 for No

Please note that there are few data modifications used in the Marketplace:
1. `diskUsage` and `ram` values will be converted to GB in accordance with the formula `initial value / (1024 ^ 3)`
2. `price` value will be converted to Ether in accordance with the formula `initial value / (10 ^ 18)`
3. `bandwidth` value will be converted to Mbit in accordance with the formula `initial value / (1000 ^ 2)`
4. `traffic` value will be converted to Gbit in accordance with the formula `initial value / (1000 ^ 3)`

JSON example for a value offer:
```json title="value-offer-slot.json"
{
  "info": {
    "cpuCores": 3,
    "gpuCores": 0,
    "diskUsage": 536870912,
    "ram": 34359738368
  },
  "usage": {
    "maxTimeMinutes": 0,
    "minTimeMinutes": 60,
    "price": "400000000000000000",
    "priceType": "1" 
  },
  "option": {
    "bandwidth": 0,
    "traffic": 0,
    "externalPort": 0
  }
}
```
JSON example for a TEE offer:
```json title="tee-offer-slot.json"
{
  "info": {
    "cpuCores": 1,
    "gpuCores": 0,
    "diskUsage": 14910627722,
    "ram": 8454701250
  },
  "usage": {
    "maxTimeMinutes": 0,
    "minTimeMinutes": 10,
    "price": "140000000000000000",
    "priceType": "0"
  }
}
```

**Note for TEE offers:** for the most optimal use of the equipment, it is recommended to set slots that divide the overall configuration evenly.