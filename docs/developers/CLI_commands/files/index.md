---
id: "cli-files"
title: "Files"
slug: "/cli_commands/files"
sidebar_position: 1

---

Manage files in third-party storages

## Usage

```
./spctl files <command>
```

## Child commands

|**Command**|**Description**|
| :- | :- |
|[delete](/developers/cli_commands/files/delete)|Delete a file in the remote storage using resource file `<resourcePath>`|
|[download](/developers/cli_commands/files/download)|Download and decrypt a file from the remote storage to `<localPath>` using resource file `<resourcePath>`|
|[upload](/developers/cli_commands/files/upload)|Upload a file specified by the `<localPath>` argument to the remote storage|