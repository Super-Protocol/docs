---
id: "add-option"
title: "add-option"
slug: "/cli_commands/offers/options/add-option"
sidebar_position: 1
---

Add a new option to an existing TEE offer.

## Usage

Syntax:

```
./spctl offers add-option [OPTIONS]
```

Example: add a new option to an existing TEE offer using the information in `offerOption.json` which is located in the same directory together with SPCTL.

```
./spctl offers add-option --offer 1 --path ./offerOption.json
```


## Options

| **Name, shorthand** | **Default**          | **Description**                 |
|:--------------------|:---------------------|:--------------------------------|
| `--offer`           |                      | TEE offer `id`                  |
| `--path`            | `./offerOption.json` | Path to the option content file |
| `--config`          | `./config.json`      | Path to the configuration file  |

## Content file requirements

The file should contain the following sections:
1.  internet access configuration
- `bandwidth` - a value in bits
- `traffic` - a value in bits
- `externalPort` - 1 for Yes, 0 for No
2. terms and conditions of usage
- `maxTimeMinutes`
- `minTimeMinutes`
- `price` - a value in weis
- `priceType` - 1 for fixed price, 0 for price per hour

Please note that there are few data modifications used in the Marketplace:
1. `price` value will be converted to Ether in accordance with the formula `initial value / (10 ^ 18)`
2. `bandwidth` value will be converted to Mbit in accordance with the formula `initial value / (1000 ^ 2)`
3. `traffic` value will be converted to Gbit in accordance with the formula `initial value / (1000 ^ 3)`

JSON example:
```json title="tee-offer-option.json"
{
  "info": {
    "bandwidth": 125000,
    "traffic": 100000000, 
    "externalPort": 0
  },
  "usage": {
    "maxTimeMinutes": 0,
    "minTimeMinutes": 0,
    "price": "14000000000000000",
    "priceType": "0"
  }
}
```

**Note:** for the most optimal use of the equipment, it is recommended to set options that divide the overall configuration evenly.