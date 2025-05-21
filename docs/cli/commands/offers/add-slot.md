---
id: "cli-offers-add-slot"
title: "offers add-slot"
slug: "/commands/offers/add-slot"
sidebar_label: "add-slot"
sidebar_position: 8
---

Adds a <a id="slot"><span className="dashed-underline">slot</span></a> to an <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

## Syntax

```
./spctl offers add-slot <offerType>
    --offer <offerId>
    [--path <slotInfo>]
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name**      | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Options

| **Name**            | **Description** |
| :- | :- |
| `--offer <offerId>` | Offer ID. |
| `--path <slotInfo>` | Path to a slot-info JSON file. The default is `./slotInfo.json`. |
| `--config <path>`   | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h`      | Help for the command. |

## Slot info

A slot-info JSON file must contain the following objects:

- `info`: An object with requirements:
  - `cpuCores`: The number of virtual CPU cores, a float value.
  - `gpuCores`: The number of virtual GPU cores, a float value.
  - `diskUsage`: Disk space in bytes.
  - `ram`: RAM in bytes.
  - `vram`: Video RAM in bytes.
- `usage`: An object with terms and conditions of usage:
  - `maxTimeMinutes`: Maximum lease duration limits in minutes; `0` for no limit.
  - `minTimeMinutes`: Minimum lease duration limits in minutes; `0` for no limit.
  - `price`: Lease price in denominations of SPPI token (10<sup>18</sup> = 1 SPPI).
  - `priceType`: [Pricing type](/fundamentals/orders#cost-and-pricing): `1` for fixed price, `0` for price per hour.
- `option`: An object with internet access requirements (only for value offers):
  - `bandwidth`: Data transfer rate in bits per second.
  - `traffic`: Total required data transfer usage in bytes.
  - `externalPort`: `1` for yes, `0` for no.

A template with example values:

```json title="slotInfo.json"
{
  "info":{
    "cpuCores":3,
    "gpuCores":0,
    "diskUsage":16106127360,
    "ram":34359738368,
    "vram":0
  },
  "usage":{
    "maxTimeMinutes":0,
    "minTimeMinutes":60,
    "price":"400000000000000000",
    "priceType":"1" 
  },
  "option":{
    "bandwidth":0,
    "traffic":0,
    "externalPort":0
  }
}
```

## Example

```
./spctl offers add-slot value --offer 39 --path ./new-slot.json
```