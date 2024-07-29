---
id: "cli-files-delete"
title: "files delete"
slug: "/cli_commands/files/delete"
sidebar_label: "delete"
---

Delete a file in remote storage using information in a resource JSON file.

The resource JSON file is created as a result of the [`files upload`](/developers/cli_commands/files/upload) command.

## Synopsis

```
./spctl files delete <resourceFilePath> [option]
```

## Argument

|**Name**| **Description**                      |
| :- |:-------------------------------------|
|`resourceFilePath`| Path to the resource JSON file |

## Option

|**Name**|**Description**|
| :- | :- |
|`--config`|Path to the configuration file. The default is `./config.json`|

## Example

The following command deletes a file in remote storage using the information in the `resource-old-data.json` file located in the SPCTL root directory.

```
./spctl files delete resource-old-data.json
```