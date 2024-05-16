---
id: "offers-enable"
title: "enable"
slug: "/cli_commands/offers/offers/enable"
sidebar_position: 8
---

Enable an existing disabled offer.

**Important:** You need to [configure your SPCTL](/developers/cli_guides/configuring#for-providers) with the provider information for this command to work.

## Usage

Syntax:

```
./spctl offers enable <id> [OPTIONS]
```

Example: enable an existing disabled value offer.

```
./spctl offers enable 10
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `id`     | Offer `id`  |

## Options

| **Name, shorthand** | **Default**     | **Description**                |
|:--------------------|:----------------|:-------------------------------|
| `--config`          | `./config.json` | Path to the configuration file |