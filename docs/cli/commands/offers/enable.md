---
id: "cli-offers-enable"
title: "offers enable"
slug: "/commands/offers/enable"
sidebar_label: "enable"
sidebar_position: 7
---

Enables an existing disabled <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

## Syntax

```
./spctl offers enable <offerId>
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerId>` | Offer ID. |

## Options

| **Name** |**Description** |
| :- | :- |
| `--config <CONFIG_PATH>` | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers enable 39
```