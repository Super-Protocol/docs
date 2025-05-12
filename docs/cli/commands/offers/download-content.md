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
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerId>` | ID of the offer. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--save-to <path>` | Path to save the content. The default is the original filename. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl offers download-content 12
```