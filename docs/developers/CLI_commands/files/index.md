---
id: "cli-files"
title: "files"
slug: "/cli_commands/files"
sidebar_position: 3

---

Manage files in third-party storage such as Storj.

The majority of these commands require a Storj account and SPCTL configured to use it. Refer to the [Set up Storj](/developers/cli_guides/configure#set-up-storj) section to create a bucket and access grants and set up SPCTL.

## Synopsis

```
./spctl files <command>
```

## Child commands

|**Command**|**Description**|
| :- | :- |
|[delete](/developers/cli_commands/files/delete)|Delete a file in remote storage |
|[download](/developers/cli_commands/files/download)|Download and decrypt a file from remote storage|
|[upload](/developers/cli_commands/files/upload)|Upload a file to remote storage or create a storage order|