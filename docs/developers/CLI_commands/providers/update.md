---
id: "cli-providers-update"
title: "Update provider"
slug: "/cli_commands/providers/update"
sidebar_label: "update"
---

This command is used to make updates to the current provider.

The .json file used to update a provider is created on Step 4 of the [Providers and Offers Guide](/developers/cli_guides/providers_offers#create-provider-and-offer).

You can use the .json from the guide and modify the requirements as necessary or take the template from below. In this example we will call this file `provider.json`.

**Important:** You need to [configure your SPCTL](/developers/cli_guides/configuring#for-providers) with the provider information for this command to work.

## Usage

Syntax:
```
./spctl providers update [OPTIONS]
```

Example: 

Update the current provider using `provider.json` file which contains new information. You can point to the file location using the `--path` option. In the example below the file is assumed to be located in the SPCTL directory.

```
./spctl providers update --path ./provider.json
```

## Options

| **Name, shorthand** | **Default**           | **Description**                     |
|:--------------------|:----------------------|:------------------------------------|
| `--path`            | `./provider.json` | Path to the provider info json file |
| `--config`          | `./config.json`       | Path to the configuration file      |

### Provider info file requirements

The provider info file should contain the following fields.

| **Field**       | **Description**                                  | 
|:----------------|:-------------------------------------------------|
| `name`          | Provider name                                    | 
| `description`   | Description of services provided by the provider | 
| `tokenReceiver` | Token receiver account address                   |
| `actionAccount` | Action account address                           | 
| `metadata`      | Additional information about the provider        | 

All of the parameters are mandatory except for `description` and `metadata`, which may be left empty.

JSON example:
```json title="provider.json"
{
  "name": "Data Provider",
  "description": "It provides various datasets for modeling",
  "tokenReceiver": "0x...",
  "actionAccount": "0x...",
  "metadata": ""
}
```