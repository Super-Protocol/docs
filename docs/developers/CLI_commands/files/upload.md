---
id: "cli-files-upload"
title: "Upload file"
slug: "/cli_commands/files/upload"
sidebar_label: "upload"
---

Upload a file to the remote storage. Usually it's the file resulted from the [solutions prepare](/developers/cli_commands/solutions/prepare) command.

There are two types of uploading:
1. uploading to your own storage

In this case the file will be uploaded to the root directory of the bucket specified in the configuration file.

2. uploading to a temporary storage 

In this case a new storage order will be processed. **Note:** you will be charged for that in accordance with the pricing of a chosen offer and the rent period specified.

## Usage

```
./spctl files upload <localPath> [OPTIONS]
```

## Arguments

|**Name**| **Description**                |
| :- |:-------------------------------|
|`localPath`| Path to the file for uploading |

## Options

| **Name, shorthand**  | **Default**       | **Description**                                                                                                                                                                              |
|:---------------------|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--filename`         | Random string     | The name of a resulting file in the storage                                                                                                                                                  |
| `--output`           | `./resource.json` | The path to save a resource file that is used to access the uploaded file                                                                                                                    |
| `--skip-encryption`  |                   | Skip file encrypting step before upload                                                                                                                                                      |
| `--metadata`         |                   | The path to a metadata file for adding fields to a resource file                                                                                                                             |
| `--max-concurrent`   |             | Maximum concurrent pieces to upload at once per transfer. It allows to limit the number of threads when uploading, it should be used only when dealing with a memory-constrained environment |
| `--storage`          | []                | Storage offer in the format `<offer_id>,<slot_id>`                                                                                                                                           |
| `--min-rent-minutes` | 60                | Storage rent period. It should be speficied together with `--storage` option. **Note:** if less than `MinTime` in slot, the latter is used                                                   |
| `--config`           | `./config.json`   | The path to a configuration file                                                                                                                                                             |

Example:

```
./spctl files upload --filename ./fileData.tar.gz --output ./fileResource.json --metadata ./fileMedata.json --storage 1,2 --min-rent-minutes 120
```

Where:
* `--filename ./fileData.tar.gz` - the name of a result file in a storage.
* `--output ./fileResource.json` - the path to a resource file that will be created during the uploading process and will contain access data to the uploaded file.
* `--metadata ./fileMedata.json` - the path to a metadata file that will be added to a resource file during the uploading process.
* `--storage 1,2` - slot #1 of storage offer #1 will be used to create a storage order.
* `--min-rent-minutes 120` - the rent period of a storage, equal to 2 hours.

If you are going to use encryption, please note that:
1. Primarily, an encrypted file will be saved to your local directory where the command has been executed and then it will be uploaded to the storage. 
2. Its name will contain `.encrypted` at the end.

The resource file should contain:
1. metadata from the metadata file if it has been used;
2. encryption data if `--skip-encryption` hasn't been applied; 
3. information about where the file has been uploaded.

The resource file might be used if at some point you need to get a file, which was previously uploaded to the storage, using the [download](/developers/cli_commands/files/download) command.