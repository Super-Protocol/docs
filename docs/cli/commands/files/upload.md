---
id: "cli-files-upload"
title: "files upload"
slug: "/commands/files/upload"
sidebar_label: "upload"
---

Uploads a file to remote storage such as Storj.

The primary purpose of this command is to make the uploading files available for download and execution. This is necessary in two cases:

- With the [`workflows create`](/cli/commands/workflows/create) command, **users** can add the uploaded solution or data to an order instead of a Marketplace offer. In this case, a short-term storage period is enough.
- Solution and data **providers** can store the contents of their offers to make them available for customers' orders. This requires a long-term storage period.

Depending on the options, the command provides two ways to upload and store the files. Choose one that suits you better:

- **Uploads to storage directly.** This requires a Storj account and SPCTL [configured](/cli#set-up-storj) to use it. The command will upload the file to the root directory of the bucket specified in the SPCTL configuration file.
- **Creates a storage order using a Marketplace storage offer.** This does not require a Storj account but requires paying TEE tokens for the order according to the offer pricing and selected lease duration.

The input of the command is a TAR.GZ archive file. For solutions, this file is created by the [`solutions prepare`](/cli/commands/solutions/prepare) command. For data, it is an archive containing the dataset files.

The output of the command is a resource JSON file with the information for a compute provider on how to access the uploaded file.

## Syntax

```
./spctl files upload <targzArchivePath> \
    [--filename <string>] \
    [--output <path>] \
    [--skip-encryption] \
    [--metadata <path>] \
    [--max-concurrent <number>] \
    [--storage <offerId,slotId>] \
    [--min-rent-minutes <minutes>] \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<targzArchivePath>` | Path to the uploading TAR.GZ archive file. |

## Options

| <div style={{width:250}}>**Name**</div> | **Description** |
| :- | :- |
| `--filename <string>` | Desired name of the resulting file in storage. The default is a random string. |
| `--output <path>` | Path to save the output resource JSON file. The default is `./resource.json`. |
| `--skip-encryption` | Flag to skip file encryption before uploading. The default is `false`. |
| `--metadata <path>` | Path to a metadata file for adding fields to the resource JSON file. This file is generated by the [solutions prepare](/cli/commands/solutions/prepare) command. |
| `--max-concurrent <number>` | Maximum concurrent pieces to upload at once per transfer to limit the number of threads. Use only when dealing with a memory-constrained environment. |
| `--storage <offerId,slotId>` | Option to use a storage offer. State the storage offer ID and the requirement slot ID, separated by a comma. |
| `--min-rent-minutes <minutes>` | Storage lease period in minutes. Use this option together with `--storage`. The default is `60`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Examples

The following are three examples of using the `workflows create` command:

- Uploading to remote storage
- Creating a storage order
- Using additional options.

### Example 1. Upload to remote storage directly

The following command uploads the `content.tar.gz` file located in the SPCTL root directory:

```
./spctl files upload content.tar.gz
```

To execute this command successfully, you need a Storj account and SPCTL configured to use it. Refer to the [Set up Storj](/cli#set-up-storj) section to create a bucket and access grants and set up SPCTL.

### Example 2. Upload by creating a storage order

The following command uploads the `content.tar.gz` located in the SPCTL root directory:

```
./spctl files upload content.tar.gz --storage 25,33 --min-rent-minutes 120
```

Where:

- `--storage 25,33`: create a storage order using the [Storj DCS Offer](https://marketplace.superprotocol.com/storage?offer=offerId%3D25&tab=pricing) (offer ID: 25) and the requirement slot with ID 33.
- `--min-rent-minutes 120`: set the lease period for 120 minutes.

Since the `--storage` option is set, the command does not require a Storj account. However, when the lease period is over, the content will become unavailable unless you [replenish the order deposit](/cli/commands/orders/replenish-deposit).

### Example 3. Use additional options

The following command uploads the `content.tar.gz` file located in the `data` directory in the SPCTL root directory:

```
./spctl files upload ./data/content.tar.gz \
    --filename data.tar.gz \
    --output ./data-resource.json \
    --metadata ./meta.json \
    --storage 25,33 \
    --min-rent-minutes 120
```

Where:

- `--filename data.tar.gz`: name the uploaded file `data.tar.gz`
- `--output ./data-resource.json`: name the output resource JSON file `data-resource.json` and save it to the SPCTL root directory
- `--metadata ./meta.json`: add the `meta.json` metadata file to the resource file during the upload
- Other options are explained in the previous example.