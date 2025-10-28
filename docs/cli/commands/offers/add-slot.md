---
id: "cli-offers-add-slot"
title: "offers add-slot"
slug: "/commands/offers/add-slot"
sidebar_label: "add-slot"
sidebar_position: 9
---

Adds a <a id="slot"><span className="dashed-underline">slot</span></a> to an <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#for-providers).

## Syntax

```shell
./spctl offers add-slot <OFFER_TYPE>
    --offer <OFFER_ID>
    [--path <SLOT_INFO>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div> | <div style={{width:565}}>**Description**</div> |
| :-                                      | :- |
| `<OFFER_TYPE>`                          | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Options

| <div style={{width:200}}>**Name**</div> | <div style={{width:565}}>**Description**</div> |
| :-                                      | :- |
| `--offer <OFFER_ID>`                    | Offer ID. |
| `--path <SLOT_INFO>`                    | Path to a slot-info JSON file. <br/>Default: `./slotInfo.json`. |
| `--config <CONFIG_PATH>`                | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                          | Help for the command. |

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

```shell
./spctl offers add-slot value \
    --offer 39 \
    --path ./new-slot.json
```