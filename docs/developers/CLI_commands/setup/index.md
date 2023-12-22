---
id: "setup"
title: "setup"
slug: "/cli_commands/setup"
sidebar_position: 0

---

Interactively creates `config.json` file

## Usage

```bash
./spctl setup
```

Be prepared to provide next:

* JWT access token
* account private key
* (optional) StorJ Bucket, Read Access Token, Write Access Token (to obtain it follow [this guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/))

You can get more info about `config.json` and its parts [here](/developers/cli_guides/configuring#set-up-configjson-manually)

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to the configuration file|