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

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

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

The following command downloads and decrypts a file from remote storage using the information in the `resource-data.json` file located in the SPCTL root directory. The downloaded file will appear in the SPCTL root directory.

```
./spctl files download ./resource-data.json  ./
```