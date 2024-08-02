---
id: "solutions-generate-key"
title: "solutions generate-key"
slug: "/cli_commands/solutions/generate-key"
sidebar_label: "generate-key"
---

Generates a signing key necessary to prepare a solution.

Docker needs this key to [pack a solution](/developers/cli_commands/solutions/prepare) into a container.

## Syntax

```
./spctl solutions generate-key <outputPath> [option]
```

## Argument

|**Name**| **Description**                      |
| :- |:-------------------------------------|
|`outputPath`| Path to save the generated key file |

## Option

|**Name**|**Description**|
| :- | :- |
|`--config`|Path to the configuration file. The default is `./config.json`|

## Example

The following command generates a signing key and saves it to the `new-key` file in the SPCTL root directory:

```
./spctl solutions generate-key new-key
```