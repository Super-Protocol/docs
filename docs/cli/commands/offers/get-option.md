---
id: "cli-offers-get-option"
title: "offers get-option"
slug: "/commands/offers/get-option"
sidebar_label: "get-option"
sidebar_position: 12
---

Displays the information on a [configuration option](/fundamentals/slots) of a <a id="offer"><span className="dashed-underline">compute offer</span></a>.

## Syntax

```shell
./spctl offers get-option
    --offer <OFFER>
    --option <OPTION>
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--offer <OFFER>`                         | Offer ID. |
| `--option <OPTION>`                       | Configuration option ID. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl offers get-option --offer 1 --option 3
```