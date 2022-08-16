---
id: "cli-workflows-create"
title: "Create workflow"
slug: "/cli/workflows/create"
sidebar_label: "workflows create"
---

## Usage:

```shell
$ CLI workflows create --tee <id> --storage <id> --solution <id|filepath> [--data <id|filepath>] [--config <config>]
```

сreate workflow orders

## Description:

Create workflow orders

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--tee`||TEE offer id|
|`--storage`||Output storage offer id|
|`--solution`||Solution offer id or path to the resource file (may be repeated)|
|`--data`||Data offer id or path to the resource file (may be repeated)|
|`--config`|`./config.json`|Path to a config file|
