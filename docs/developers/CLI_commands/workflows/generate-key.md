---
id: "generate-key"
title: "workflows generate-key"
slug: "/cli_commands/workflows/generate-key"
sidebar_label: "generate-key"
---

Generates a private key necessary to access order results.

SPCTL generates this key automatically during the [configuration](/developers/cli_guides/configure). Use this command only if you need another key or if you create the `config.json` file manually.

## Syntax

```
./spctl workflows generate-key [option]
```

## Option

|**Name**|**Description**|
| :- | :- |
|`--config`|Path to the configuration file. The default is `./config.json`|
