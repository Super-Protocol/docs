---
id: "cli-providers-update"
title: "Update provider"
slug: "/cli_commands/providers/update"
sidebar_label: "update"
---

Update the information of the current provider.

## Usage

Syntax:
```
./spctl providers update [OPTIONS]
```

Example: update the current provider using `myProviderInfo.json` file which contains new information.

```
./spctl providers update --path ./myProviderInfo.json
```


## Options

| **Name, shorthand** | **Default**           | **Description**                     |
|:--------------------|:----------------------|:------------------------------------|
| `--path`            | `./providerInfo.json` | Path to the provider info json file |
| `--config`          | `./config.json`       | Path to the configuration file      |

**Note**: provider info file requirements are the same as in the process of creating a provider. Please follow the [link](/developers/cli_commands/providers/create) to get more details.