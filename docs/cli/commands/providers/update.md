---
id: "cli-providers-update"
title: "providers update"
slug: "/commands/providers/update"
sidebar_label: "update"
---

Updates information about a provider.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

## Syntax

```
./spctl providers update
    [--path <path>]
    [--config <path>]
    [--help | -h]
```

## Options

| **Name** | **Description** |
| :- | :- |
| `--path <path>` | Path to the provider info JSON file. The default is `./provider.json`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Provider info file

The provider info JSON file must contain the following keys:

| **Key** | **Description** | 
| :- | :- |
| `name` | Provider name. | 
| `description` | Description of services provided by the provider. | 
| `tokenReceiver` | Token receiver account address. |
| `actionAccount` | Action account address. | 
| `metadata` | Additional information about the provider. | 

The `description` and `metadata` may be empty. All other strings require values.

Template with example values:

```json title="providerInfo.json"
{
  "name": "Data Provider",
  "description": "Various data for modeling",
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