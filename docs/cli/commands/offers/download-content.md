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

```shell
./spctl offers download-content <OFFER>
    [--save-to <PATH>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<OFFER>`                                 | Offer ID. |

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--save-to <PATH>`                        | Path to save the content. <br/>Default: the original filename. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl offers download-content 12
```