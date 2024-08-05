---
id: "cli-files-download"
title: "files download"
slug: "/cli_commands/files/download"
sidebar_label: "download"
---

Downloads a file from remote storage and decrypts it using the information in a resource JSON file.

The resource JSON file is created as a result of the [`files upload`](/developers/cli_commands/files/upload) command.

## Syntax

```
./spctl files download resourceFilePath localPath [option]
```

Replace the following:
- `resourceFilePath`: path to the resource JSON file.
- `localPath`: path to save the downloaded file.

## Options

| **Name** | **Description** |
| :- | :- |
| `--config` | Path to the SPCTL configuration file. The default is `./config.json`. |

## Example

The following command downloads and decrypts a file from remote storage using the information in the `resource-data.json` file located in the SPCTL root directory. The downloaded file will appear in the SPCTL root directory.

```
./spctl files download ./resource-data.json  ./
```