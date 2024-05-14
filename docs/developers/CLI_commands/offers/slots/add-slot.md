---
id: "add-slot"
title: "add-slot"
slug: "/cli_commands/offers/slots/add-slot"
sidebar_position: 1
---

This command uses information in a .json file to create additional [slot requirements](/developers/fundamentals/slots#requirements) in a previously created offer.

The initial offer requirements are created on Step 3 of the [Providers and Offers Guide](/developers/cli_guides/providers_offers#offer-requirements).

You can use the .json from the guide and modify the requirements as necessary or take the template from below. In this example we will call this file `offer-new-slot.json`. 

**Important:** You need to [configure your SPCTL](/developers/cli_guides/configuring#for-providers) with the provider information for this command to work.

## Usage

Syntax:

```
./spctl offers add-slot <type> [OPTIONS]
```

Example: 

Add a new slot using the information in the `offer-new-slot.json`. You can point to the file location using the `--path` option. In the example below the file is assumed to be located in the SPCTL directory.

```
./spctl offers add-slot value --offer 10 --path ./offer-new-slot.json
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |

## Options

| **Name, shorthand** | **Default**        | **Description**                |
|:--------------------|:-------------------|:-------------------------------|
| `--offer`           |                    | Offer `id`                     |
| `--path`            | `./offer-new-slot.json` | Path to the slot content file  |
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
- `priceType` - 1 for fixed price, 0 for price per hour.
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
```json title="value-new-slot.json"
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