---
id: "cli-files"
title: "files"
slug: "/cli_commands/files"
sidebar_position: 3

---

Manage your files in third-party storages such as Storj. You will need to have set up access to a storage when [configuring SPCTL](/developers/cli_guides/configuring).

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