---
id: "cli-files-download"
title: "Download file"
slug: "/cli_commands/files/download"
sidebar_label: "download"
---

Download and decrypt a file from the remote storage to `<localPath>` using resource file `<resourcePath>`

## Usage

```
./spctl files download <resourcePath> <localPath> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`resourcePath`|Path to a resource file|
|`localPath`|Path to save downloaded file|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to the configuration file|
