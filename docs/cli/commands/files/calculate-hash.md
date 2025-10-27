---
id: "cli-files-calculate-hash"
title: "files calculate-hash"
slug: "/commands/files/calculate-hash"
sidebar_label: "calculate-hash"
sidebar_position: 2
---

Calculates the hash of a file or directory taking into account the file names.

## Syntax

```shell
./spctl files calculate-hash <PATH>
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<PATH>`                                  | Path to a file or directory. |

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl files calculate-hash ./content/
```