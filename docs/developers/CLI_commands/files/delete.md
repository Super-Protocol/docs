---
id: "cli-files-delete"
title: "files delete"
slug: "/cli_commands/files/delete"
sidebar_label: "delete"
---

Deletes a file in remote storage using the information in a resource JSON file.

The resource JSON file is created as a result of the [`files upload`](/developers/cli_commands/files/upload) command.

## Syntax

```
./spctl files delete resourceFilePath [option]
```

Replace `resourceFilePath` with the path to the resource JSON file.

## Options

| **Name** | **Description** |
| :- | :- |
| `--config` | Path to the SPCTL configuration file. The default is `./config.json`. |

## Example

The following command deletes a file in remote storage using the information in the `resource-old-data.json` file located in the SPCTL root directory:

```
./spctl files delete ./resource-old-data.json
```