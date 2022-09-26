---
id: "cli-workflows-create"
title: "Create workflow"
slug: "/cli/commands/workflows/create"
sidebar_label: "create"
---

Create new orders

## Usage

```
spctl workflows create [OPTIONS]
```

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--tee`||TEE offer `id` (required)|
|`--storage`||Storage offer `id` (required)|
|`--solution`||Solution offer `id` or resource file path (required and accepts multiple values)|
|`--data`||Data offer `id` or resource file path (accepts multiple values)|
|`--deposit`||Amount of the payment deposit in TEE tokens (if not specified, the minimum deposit required is used)|
|`--config`|`./config.json`|Path to the configuration file|
