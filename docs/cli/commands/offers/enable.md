---
id: "cli-offers-enable"
title: "offers enable"
slug: "/commands/offers/enable"
sidebar_label: "enable"
sidebar_position: 7
---

Enables an existing disabled <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/guides/provider-tools#providers-spctl).

## Syntax

```shell
./spctl offers enable <OFFER>
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
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl offers enable 39
```