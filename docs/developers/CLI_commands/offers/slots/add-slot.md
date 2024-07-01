---
id: "add-slot"
title: "offers add-slot"
slug: "/cli_commands/offers/slots/add-slot"
sidebar_position: 1
---

Create an additional [requirement slot](/developers/fundamentals/slots#requirements) in an offer using the information in the offer slot JSON file.

Refer to the [Offer requirements](/developers/cli_guides/providers_offers#offer-requirements) section to create the initial offer requirements.

**Important:** The `offers add-slot` command requires SPCTL with the [provider configuration file]((/developers/cli_guides/configure#for-offer-providers)).

## Synopsis

```
./spctl offers add-slot <type> --offer <offerId> [option ...]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of the offer: `tee` or `value` |
| `offerId`  |Offer ID  |

## Options

| **Name** |**Description**                |
|:--------------------|:-------------------------------|
| `--path`            |Path to the offer slot JSON file. Default is `./offer-new-slot.json`  |
| `--config`          |Path to the configuration file. Default is `./config.json` |

## Offer slot file

The offer slot JSON file must contain the following objects and strings:

- `info`: object with computing power configuration
  + `cpuCores`: number of CPU cores required, float value
  + `gpuCores`: number of GPU cores required, float value
  + `diskUsage`: bytes
  + `ram`: bytes
- `usage`: object with terms and conditions of usage
  + `maxTimeMinutes`: minutes; `0` for no limit
  + `minTimeMinutes`: minutes; `0` for no limit
  + `price`: denominations of TEE token
  + `priceType`: `1` for fixed price, `0` for price per hour; [learn more](/developers/fundamentals/orders#cost-and-pricing) about price types
- `option`: object with internet access configuration (only for value offers)
  + `bandwidth`: bits per second
  + `traffic`: bits
  + `externalPort`: `1` for yes, `0` for no

Offer slot JSON file template with example values:

```json title="offer-new-slot.json"
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

Note that some of the data is represented differently in the Marketplace GUI:
- `diskUsage` and `ram` values are converted to GiB by the formula `initial value / (1024 ^ 3)`
- `price` value is converted to TEE by the formula `initial value / (10 ^ 18)`
- `bandwidth` value is converted to Mbit per second by the formula `initial value / (10 ^ 6)`
- `traffic` value is converted to Gb by the formula `initial value / (10 ^ 9)`

## Example

The following command adds a new requirement slot to the offer (ID 39) using the `offer-new-slot.json` file in the SPCTL directory:

```
./spctl offers add-slot value --offer 39 --path ./offer-new-slot.json
```