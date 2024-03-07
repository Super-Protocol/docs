---
id: "offers-enable"
title: "enable"
slug: "/cli_commands/offers/offers/enable"
sidebar_position: 8
---

Enable an existing disabled offer.

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