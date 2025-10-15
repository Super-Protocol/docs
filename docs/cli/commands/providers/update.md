---
id: "cli-providers-update"
title: "providers update"
slug: "/commands/providers/update"
sidebar_label: "update"
sidebar_position: 3
---

Updates information about a provider.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

## Syntax

```shell
./spctl providers update
    [--path <PROVIDER_INFO>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--path <PROVIDER_INFO>`                           | Path to the provider info JSON file. <br/>Default: `./provider.json`. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Provider info file

The provider info JSON file must contain the following keys:

| <div style={{width:200}}>**Key**</div>  | <div style={{width:565}}>**Description**</div> |
| :-                                      | :- |
| `name`                                  | Provider name. | 
| `description`                           | (optional) Description of services provided by the provider. | 
| `tokenReceiver`                         | Token receiver account address. |
| `actionAccount`                         | Action account address. | 
| `metadata`                              | (optional) Additional information about the provider. | 

Template with example values:

```json title="providerInfo.json"
{
  "name": "AI Model Provider",
  "description": "Various AI models",
  "tokenReceiver": "0xB9f0bB77DbeA9fBeC563E60Bd7E453f503605BAa",
  "actionAccount": "0xfe9CB4557639a3aB7892ab7F0A994Eed89477120",
  "metadata": ""
}
```

## Example

```shell
./spctl providers update --path ./provider-info.json
```