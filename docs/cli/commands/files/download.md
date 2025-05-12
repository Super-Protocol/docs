---
id: "cli-files-download"
title: "files download"
slug: "/commands/files/download"
sidebar_label: "download"
---

Downloads a file from remote storage and decrypts it using the information in a resource JSON file.

The resource JSON file is created as a result of the [`files upload`](/cli/commands/files/upload) command.

## Syntax

```
./spctl files download <resourceFilePath> <saveToPath>
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<resourceFilePath>` | Path to the resource JSON file. |
| `<saveToPath>` | Path to save the downloaded file. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl files download ./resource-data.json  ./
```