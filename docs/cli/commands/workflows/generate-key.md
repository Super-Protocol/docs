---
id: "cli-workflows-generate-key"
title: "workflows generate-key"
slug: "/commands/workflows/generate-key"
sidebar_label: "generate-key"
sidebar_position: 2
---

Generates a private key necessary to access order results.

Note that SPCTL generates this key automatically during the [configuration](/cli). Use this command only if you need another key or if you create the `config.json` file manually.

## Syntax

```shell
./spctl workflows generate-key
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Option

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl workflows generate-key
```