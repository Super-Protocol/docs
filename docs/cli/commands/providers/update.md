---
id: "cli-providers-update"
title: "providers update"
slug: "/commands/providers/update"
sidebar_label: "update"
---

Updates the current provider using a provider info JSON file.

Provider Tools creates a provider info JSON file in [Step 4 of the Providers and Offers] guide.

**Important:** This command requires SPCTL with the [provider configuration file](/cli#for-offer-providers).

## Syntax

```
./spctl providers update
    [--path <path>]
    [--config <path>]
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/commands#command-syntax).

## Options

| **Name** | **Description** |
| :- | :- |
| `--path <path>` | Path to the provider info JSON file. The default is `./provider.json`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Provider info file

The provider info file must contain the following strings:

| **Field** | **Description** | 
| :- | :- |
| `name` | Provider name. | 
| `description` | Description of services provided by the provider. | 
| `tokenReceiver` | Token receiver account address. |
| `actionAccount` | Action account address. | 
| `metadata` | Additional information about the provider. | 

The `description` and `metadata` strings may be empty. All other strings require values.

Provider JSON file template with example values:

```json title="provider.json"
{
  "name": "Data Provider",
  "description": "It provides various datasets for modeling",
  "tokenReceiver": "0xB9f0bB77DbeA9fBeC563E60Bd7E453f503605BAa",
  "actionAccount": "0xfe9CB4557639a3aB7892ab7F0A994Eed89477120",
  "metadata": ""
}
```

## Example

The following command updates the current provider using the `updated-provider.json` file located in the SPCTL root directory:

```
./spctl providers update --path ./updated-provider.json
```