---
id: "cli-files-delete"
title: "files delete"
slug: "/commands/files/delete"
sidebar_label: "delete"
sidebar_position: 4
---

Deletes files in remote storage using the information in a resource JSON file.

## Syntax

```shell
./spctl files delete <RESOURCE>
    [--use-addon]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<RESOURCE>`                              | Path to a resource JSON file. This file is created as a result of the <br/>[`files upload`](/cli/commands/files/upload) command. |

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--use-addon`                             | Option required to delete files that were [uploaded](/cli/commands/files/upload) with this option. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl files delete ./resource-old-data.json
```