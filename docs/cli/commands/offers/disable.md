---
id: "cli-offers-disable"
title: "offers disable"
slug: "/commands/offers/disable"
sidebar_label: "disable"
sidebar_position: 6
---

Disables an existing enabled <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

## Syntax

```
./spctl offers disable <offerId>
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerId>` | Offer ID. |

## Option

| **Name** | **Description** |
| :- | :- |
| `--config <CONFIG_PATH>` | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers disable 39
```