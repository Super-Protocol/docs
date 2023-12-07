---
id: "solutions-generate-key"
title: "Generate a key"
slug: "/cli_commands/solutions/generate-key"
sidebar_label: "generate-key"
---

For Docker image to run inside the TEE, the image has to be built and signed with Gramine (a.k.a graminized). To [pack](/developers/cli_commands/solutions/prepare) the solution into a Docker image you will need to generate a signing key. 

## Usage

```
./spctl solutions generate-key <outputPath> [OPTIONS]
```

## Arguments

|**Name**| **Description**                      |
| :- |:-------------------------------------|
|`outputPath`| Path to save the generated key file. |

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to the configuration file|