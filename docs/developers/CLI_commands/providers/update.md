---
id: "cli-providers-update"
title: "providers update"
slug: "/cli_commands/providers/update"
sidebar_label: "update"
---

Update the current provider using a provider JSON file.

Provider Tools creates the provider JSON file in [Step 4 of the Providers and Offers](/developers/cli_guides/providers_offers#step-4-create-the-provider-and-offer) guide.

**Important:** The `providers update` command requires SPCTL with the [provider configuration file](/developers/cli_guides/configure#for-offer-providers).

## Synopsis

```
./spctl providers update [option ...]
```

## Options

|**Name** |**Description**                     |
|:--------------------|:------------------------------------|
|`--path`            |Path to the provider info JSON file. Default is `./provider.json`|
|`--config`          |Path to the configuration file. Default is `./config.json`      |

### Provider info file requirements

The provider info file must contain the following strings:

| **Field**       | **Description**                                  | 
|:----------------|:-------------------------------------------------|
| `name`          | Provider name                                    | 
| `description`   | Description of services provided by the provider | 
| `tokenReceiver` | Token receiver account address                   |
| `actionAccount` | Action account address                           | 
| `metadata`      | Additional information about the provider        | 

The `description` and `metadata` strings may be empty. All other strings require values.

Provider JSON file template with example values:

```json title="provider.json"
{
  "name": "Data Provider",
  "description": "It provides various datasets for modeling",
  "tokenReceiver": "0xB9f0b77BDbeA9fBe60BdC563E7E453f503605BAa",
  "actionAccount": "0xfe9CB4941639a3aB7892ab7F0A994Eed89477120",
  "metadata": ""
}
```

## Example

The following command updates the current provider using the `updated-provider.json` file located in the SPCTL root directory:

```
./spctl providers update --path ./updated-provider.json
```