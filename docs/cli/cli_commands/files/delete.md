---
id: "cli-files-delete"
title: "files delete"
slug: "/cli_commands/files/delete"
sidebar_label: "delete"
---

Deletes a file in remote storage using the information in a resource JSON file.

The resource JSON file is created as a result of the [`files upload`](/cli/cli_commands/files/upload) command.

## Syntax

```
./spctl files delete <resourceFilePath> \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/cli_commands#command-syntax).

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

The following command deletes a file in remote storage using the information in the `resource-old-data.json` file located in the SPCTL root directory:

```
./spctl files delete ./resource-old-data.json
```