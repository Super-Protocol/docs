---
id: "cli-offers-get-option"
title: "offers get-option"
slug: "/commands/offers/get-option"
sidebar_label: "get-option"
sidebar_position: 12
---

Displays the information on a [configuration option](/fundamentals/slots) of a <a id="offer"><span className="dashed-underline">compute offer</span></a>.

## Syntax

```
./spctl offers get-option
    --offer <offerId>
    --option <optionId>
    [--config <path>]
    [--help | -h]
```

## Options

| **Name** | **Description** |
| :- | :- |
| `--offer <offerId>` | Offer ID. |
| `--option <optionId>` | Configuration option ID. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers get-option --offer 1 --option 3
```