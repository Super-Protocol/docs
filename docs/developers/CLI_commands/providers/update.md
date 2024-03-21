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

### Provider info file requirements

The provider info file should contain the following fields.

| **Field**       | **Description**                                  | 
|:----------------|:-------------------------------------------------|
| `name`          | Provider name                                    | 
| `description`   | Description of services provided by the provider | 
| `tokenReceiver` | Action account address                           |
| `actionAccount` | Token receiver account address                   | 
| `metadata`      | Additional information about the provider        | 

All of the parameters are mandatory. `description` and `metadata` can be left empty.

JSON example:
```json title="value-offer.json"
{
  "name": "Data Provider",
  "description": "It provides various datasets for modeling",
  "tokenReceiver": "0x...",
  "actionAccount": "0x...",
  "metadata": ""
}
```