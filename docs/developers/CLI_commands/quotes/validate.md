---
id: "cli-quotes-validate"
title: "quotes validate"
slug: "/cli_commands/quotes/validate"
sidebar_label: "validate"
---

Checks if the domain content runs in a confidential environment. The command also displays if the domain content is a Super Protocol offer.

In the Marketplace GUI, use the [Check Confidentiality](/developers/marketplace/confidentiality) feature.

## Syntax

```
./spctl quotes validate <url> [option]
```

## Argument

| **Name** | **Description**                |
|:---------|:-------------------------------|
| `url`    |Domain URL |

## Option

|**Name**|**Description**|
|:-|:-|
|`--config`|Path to the configuration file. The default is `./config.json`|

## Example

```
./spctl quotes validate https://bbs-tdr-bren.superprotocol.io
```