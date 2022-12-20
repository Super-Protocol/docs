---
id: "cli-files-upload"
title: "Upload file"
slug: "/cli/commands/files/upload"
sidebar_label: "upload"
---

Upload a file specified by the `<localPath>` argument to the remote storage

## Usage

```
spctl files upload <localPath> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`localPath`|Path to a file for uploading|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--filename`|Random string|The name of the resulting file in the storage. |
|`--output`|`./resource.json`|Path to save resource file that is used to access the uploaded file|
|`--skip-encryption`||Skip file encrypting step before upload|
|`--metadata`||Path to a metadata file for adding fields to the resource file|
|`--config`|`./config.json`|Path to the configuration file|
