---
id: "cli-files-upload"
title: "Files upload"
slug: "/cli_commands/files/upload"
sidebar_label: "upload"
---

Upload files to the remote storage, such as Storj. Usually it's the files resulted from the [solutions prepare](/developers/cli_commands/solutions/prepare) command, or data archives. 

The main purpose of the upload is to store your files until you create the main TEE compute order using the [workflows create](/developers/cli_commands/workflows/create) command, whereas your solutions and data will be transferred to the TEE for execution.


There are two ways to upload:

**1. Upload to a storage offer** 
 
A storage order will be created using one of the storage offers from the Marketplace. This is a convenient way for new users because you don't need to set up your own storage account. This functionality is available in SPCTL version 0.8.6 and up. You will be charged for this order according to the offer pricing and your selected lease duration.

**2. Upload to your own storage**

Advanced users may choose to upload to their own storage for better control and flexibility. In this case the file will be uploaded to the root directory of the bucket specified in the SPCTL [configuration file](/developers/cli_guides/configuring#set-up-storj).

## Usage

```
./spctl files upload <localPath> [OPTIONS]
```

## Example:

In this example we will use the scenario of uploading to a storage offer.

```
./spctl files upload fileData.tar.gz --filename ./fileData.tar.gz --output ./fileResource.json --metadata ./fileMetadata.json --storage 23,27 --min-rent-minutes 120
```

Where:
* `--filename ./fileData.tar.gz` - the name of a result file in a storage.
* `--output ./fileResource.json` - the path to a resource file that will be created during the uploading process and will contain access data to the uploaded file.
* `--metadata ./fileMetadata.json` - the path to a metadata file that will be added to a resource file during the uploading process.
* `--storage 23,27` - slot ID #27 of storage offer ID #23 will be used to create a storage order. Not needed if uploading to your own storage.
* `--min-rent-minutes 120` - the lease period of a storage, equal to 2 hours. Not needed if uploading to your own storage.

If you are going to use encryption, please note that:

1. Primarily, the file will be encrypted and then uploaded to the storage. 
2. Its name will contain `.encrypted` at the end.

The resource file should contain:
1. metadata from the metadata file if it has been used;
2. encryption data if `--skip-encryption` hasn't been applied;
3. information about where the file has been uploaded.

The resource file might be used if at some point you need to get a file, which was previously uploaded to the storage, using the [download](/developers/cli_commands/files/download) command.

## Arguments

|**Name**| **Description**                |
| :- |:-------------------------------|
|`localPath`| Path to the file for uploading |

## Options

| **Name, shorthand**  | **Default**       | **Description**                                                                                                                                                                                                         |
|:---------------------|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--filename`         | Random string     | The name of a resulting file in the storage                                                                                                                                                                             |
| `--output`           | `./resource.json` | The path to save a resource file that is used to access the uploaded file                                                                                                                                               |
| `--skip-encryption`  |                   | Skip file encrypting step before upload                                                                                                                                                                                 |
| `--metadata`         |                   | The path to a metadata file for adding fields to a resource file. **Note:** it should be a metadata file that has been generated as a result of [solutions prepare](/developers/cli_commands/solutions/prepare) command |
| `--max-concurrent`   |             | Maximum concurrent pieces to upload at once per transfer. It allows to limit the number of threads when uploading, it should be used only when dealing with a memory-constrained environment                            |
| `--storage`          | []                | Storage offer in the format `<offer_id>,<slot_id>`                                                                                                                                                                      |
| `--min-rent-minutes` | 60                | Storage lease period. It should be speficied together with `--storage` option. **Note:** if less than `MinTime` in slot, the latter is used                                                                              |
| `--config`           | `./config.json`   | The path to a configuration file                                                                                                                                                                                        |

