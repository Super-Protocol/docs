---
id: "cli-files-download"
title: "Download file"
slug: "/cli_commands/files/download"
sidebar_label: "download"
---

Download and decrypt a file from the remote storage.

## Usage

```
./spctl files download <resourcePath> <localPath> [OPTIONS]
```

## Arguments

|**Name**| **Description**                      |
| :- |:-------------------------------------|
|`resourcePath`| Path to the file inside the storage. |
|`localPath`| Path to save downloaded file.        |

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to the configuration file|
