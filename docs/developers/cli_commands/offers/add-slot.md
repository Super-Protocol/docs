---
id: "add-slot"
title: "offers add-slot"
slug: "/cli_commands/offers/slots/add-slot"
sidebar_label: "add-slot"
sidebar_position: 10
---

Creates an additional [requirement slot](/fundamentals/slots#requirements) in an offer using the information in an offer slot JSON file.

Refer to the [Providers and Offers](/developers/cli_guides/providers_offers#offer-requirements) guide to create the initial offer requirements.

**Important:** This command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

## Syntax

```
./spctl offers add-slot <offerType> \
    --offer <offerId> \
    [--path <path>] \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/developers/cli_commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--offer <offerId>` | ID of the offer. |
| `--path <path>` | Path to the offer slot JSON file. The default is `./offerSlot.json`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Offer slot file

The offer slot JSON file must contain the following objects and strings:

- `info`: object with computing power configuration
  + `cpuCores`: number of CPU cores required, a float value
  + `gpuCores`: number of GPU cores required, a float value
  + `diskUsage`: bytes
  + `ram`: bytes
- `usage`: object with terms and conditions of usage
  + `maxTimeMinutes`: minutes; `0` for no limit
  + `minTimeMinutes`: minutes; `0` for no limit
  + `price`: denominations of TEE token
  + `priceType`: `1` for fixed price, `0` for price per hour; learn more about [price types](/fundamentals/orders#cost-and-pricing)
- `option`: object with internet access configuration (only for value offers)
  + `bandwidth`: bits per second
  + `traffic`: bytes
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
- `diskUsage` and `ram` values are converted to gibibytes (GiB) by the formula `initialValue / (1024 ^ 3)`
- `price` value is converted to TEE tokens by the formula `initialValue / (10 ^ 18)`
- `bandwidth` value is converted to megabits per second (Mbps) by the formula `initialValue / (10 ^ 6)`
- `traffic` value is converted to gigabytes (GB) by the formula `initialValue / (10 ^ 9)`

## Example

The following command adds a new requirement slot to a value offer with ID 39 using the `offer-new-slot.json` file located in the SPCTL directory:

```
./spctl offers add-slot value --offer 39 --path ./offer-new-slot.json
```