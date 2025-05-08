---
id: "cli-solutions-generate-key"
title: "solutions generate-key"
slug: "/commands/solutions/generate-key"
sidebar_label: "generate-key"
---

Generates a signing key necessary to prepare a <a id="solution"><span className="dashed-underline">solution</span></a>.

Docker needs this key to [pack a solution](/cli/commands/solutions/prepare) into a container.

## Syntax

```
./spctl solutions generate-key <outputPath>
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<outputPath>` | Path to save the generated key file. |

## Option

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command generates a signing key and saves it to the `new-key` file in the SPCTL root directory:

```
./spctl solutions generate-key ./new-key
```