---
id: "cli-files-upload"
title: "files upload"
slug: "/commands/files/upload"
sidebar_label: "upload"
sidebar_position: 1
---

Uploads files to remote storage such as Storj.

The primary purpose of this command is to make uploaded files available for download and execution inside a <a id="cvm"><span className="dashed-underline">CVM</span></a>. The uploaded data is automatically encrypted and placed in the [storage configured](/cli#set-up-storj-access-optional) in the SPCTL's `config.json` file. If no storage was preconfigured, a free storage space of up to 20 GB will be created using the Super Protocol's Storj account.

The input of the command can be a TAR.GZ file or a directory (with the `--use-addon` flag).

The output of the command is a resource JSON file with the information for the CVM on how to access and decrypt the uploaded file.

## Syntax

```shell
./spctl files upload <PATH>
    [--filename <NAME>]
    [--output <RESOURCE>]
    [--skip-encryption]
    [--metadata <PATH>]
    [--max-concurrent <NUMBER>]
    [--use-addon]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:230}}>**Name**</div>   | <div style={{width:535}}>**Description**</div> |
| :-                                        | :- |
| `<PATH>`                                  | Path to the file or directory you want to upload. |

## Options

| <div style={{width:230}}>**Name**</div>   | <div style={{width:535}}>**Description**</div> |
| :-                                        | :- |
| `--filename <NAME>`                       | Desired name of the resulting file or directory in the storage. <br/>Default: a random string (with no file extension). |
| `--output <RESOURCE>`                     | Path to save the output resource JSON file. <br/>Default: `./resource.json`. |
| `--skip-encryption`                       | Flag for skipping file encryption before uploading. <br/>Default: `false`. |
| `--metadata <PATH>`                       | Path to a metadata JSON file for adding fields to the resource JSON file. |
| `--max-concurrent <NUMBER>`               | Maximum concurrent pieces to upload at once per transfer to limit the number of threads. Use only when dealing with a memory-constrained environment. |
| `--use-addon`                             | Flag for uploading a directory instead of a single TAR.GZ archive. <br/>Use this option with the [`files delete`](/cli/commands/files/delete) and [`files download`](/cli/commands/files/download) commands to manage the data uploaded this way. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Examples

### Upload a TAR.GZ archive

```shell
./spctl files upload ./data.tar.gz \
    --filename data_2025.tar.gz
```

### Upload a directory

```shell
./spctl files upload ./content/ \
    --output ./resource-data.json \
    --use-addon
```

Because the `--filename` option is not used, the uploaded directory will have a random name in the storage, for example, `5a3cfa5be14256fc`.