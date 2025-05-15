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
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerId>` | ID of the offer. |

## Options

| **Name** |**Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers enable 39
```