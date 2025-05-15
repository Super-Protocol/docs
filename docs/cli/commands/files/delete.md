---
id: "cli-files-delete"
title: "files delete"
slug: "/commands/files/delete"
sidebar_label: "delete"
---

Deletes a file in remote storage using the information in a resource JSON file.

The resource JSON file is created as a result of the [`files upload`](/cli/commands/files/upload) command.

## Syntax

```
./spctl files delete <resourceFilePath>
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<resourceFilePath>` | Path to the resource JSON file. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl files delete ./resource-old-data.json
```