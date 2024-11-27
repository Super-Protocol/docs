---
id: "cli-files"
title: "files"
slug: "/cli_commands/files"
sidebar_position: 3

---

This command group contains commands to manage files in third-party storage such as Storj.

Most of these commands require a Storj account and SPCTL configured to use it. Refer to the [Set up Storj](/developers/cli_guides/configure#set-up-storj) section to create a bucket and access grants and set up SPCTL.

## Commands

| **Command** | **Description** |
| :- | :- |
| [files delete](/developers/cli_commands/files/delete) | Deletes a file in remote storage. |
| [files download](/developers/cli_commands/files/download) | Downloads and decrypt a file from remote storage. |
| [files upload](/developers/cli_commands/files/upload) | Uploads a file to remote storage or creates a storage order. |