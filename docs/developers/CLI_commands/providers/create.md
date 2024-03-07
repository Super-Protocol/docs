---
id: "cli-providers-create"
title: "Create provider"
slug: "/cli_commands/providers/create"
sidebar_label: "create"
---

Create a new provider.

## Usage

Syntax:
```
./spctl providers create [OPTIONS]
```

Example: create a provider using `myProviderInfo.json` file.

```
./spctl providers create --path ./myProviderInfo.json
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
  "tokenReceiver": "0xb8371e9b2mr9f6e2b9e5ec1ead09b731607b923125c2faae6076df72f37e4b2e",
  "actionAccount": "0xb8371e9b2mr9f6e2b9e5ec1ead09b731607b923125c2faae6076df72f37e4b2e",
  "metadata": ""
}
```