---
id: "cli-files-download"
title: "files download"
slug: "/commands/files/download"
sidebar_label: "download"
sidebar_position: 3
---

Downloads files from remote storage and decrypts it using the information in a resource JSON file.

## Syntax

```shell
./spctl files download <RESOURCE> <LOCAL_DIRECTORY>
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<RESOURCE>`                              | Path to a resource JSON file. This file is created as a result of the [`files upload`](/cli/commands/files/upload) command. |
| `<LOCAL_DIRECTORY>`                       | Path to save the downloaded files. |

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--use-addon`                             | Option required to download files that were [uploaded](/cli/commands/files/upload) with this option. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Example

```shell
./spctl files download ./resource-data.json  ./
```