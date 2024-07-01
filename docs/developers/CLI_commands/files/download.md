---
id: "cli-files-download"
title: "files download"
slug: "/cli_commands/files/download"
sidebar_label: "download"
---

Download a file from remote storage and decrypts it using the information in a resource JSON file.

The resource JSON file is created as a result of the [`files upload`](/cli_commands/files/upload) command.

## Synopsis

```
./spctl files download <resourceFilePath> <localPath> [option]
```

## Arguments

|**Name**| **Description**                      |
| :- |:-------------------------------------|
|`resourceFilePath`| Path to the resource JSON file |
|`localPath`| Path to save the downloaded file        |

## Options

|**Name**|**Description**|
| :- | :- |
|`--config`|Path to the configuration file. Default is `./config.json`|

## Example

The following command downloads and decrypt a file from the remote storage using the information in the `resource-data.json` file in the SPCTL root directory. The downloaded file will appear into the SPCTL root directory.

```
./spctl files download ./resource-data.json  ./
```