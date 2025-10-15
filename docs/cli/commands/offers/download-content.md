---
id: "cli-offers-download-content"
title: "offers download-content"
slug: "/commands/offers/download-content"
sidebar_label: "download-content"
sidebar_position: 4
---

Downloads the content of an <a id="offer"><span className="dashed-underline">offer</span></a>.

The command only works with offers that allow this operation.

## Syntax

```
./spctl offers download-content <offerId>
    [--save-to <path>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerId>` | Offer ID. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--save-to <path>` | Path to save the content. <br/>Default: the original filename. |
| `--config <CONFIG_PATH>` | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers download-content 12
```