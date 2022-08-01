---
id: "spctl-files-upload"
title: "Upload file"
slug: "/spctl/files/upload"
sidebar_label: "files upload"
---

# spctl files upload

## Usage:

```shell
$ spctl files upload <localPath> [--output <path>] [--metadata <path>] [--config <config>]
```

upload a file or a directory to the remote storage 

## Description:

Upload a file or a directory specified by the `<localPath>` argument to the remote storage. Outputs remote path

## Arguments:

|**Name**|**Description**|
| :- | :- |
|`localPath`|Path to a file or folder for uploading|

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--output`|`./resource.json`|Path to save output resource file (download credentials, encryption and metadata)|
|`--metadata`||Path to a metadata file to add fields into output resource|
|`--config`|`./config.json`|Path to a config file|
