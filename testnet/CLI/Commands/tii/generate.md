---
id: "cli-tii-generate"
title: "Generate TII"
slug: "/cli/commands/tii/generate"
sidebar_label: "generate"
---

Generate TII from an uploaded resource
что нужно чтобы нго сгенерировать
prerequisites
TII file is generated from a resource file that is created by upload command.

## Usage

```
spctl tii generate <resourcePath> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`resourcePath`|Path to a resource file|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--offer`||TEE offer id (required)|
|`--config`|`./config.json`|Path to the configuration file|
