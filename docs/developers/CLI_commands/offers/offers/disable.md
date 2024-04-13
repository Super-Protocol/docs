---
id: "offers-disable"
title: "disable"
slug: "/cli_commands/offers/offers/disable"
sidebar_position: 7
---

Disable an existing enabled offer.

## Usage

Syntax:

```
./spctl offers disable <id> [OPTIONS]
```

Example: disable an existing enabled value offer.

```
./spctl offers disable 10
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `id`     | Offer `id`  |

## Options

| **Name, shorthand** | **Default**     | **Description**                |
|:--------------------|:----------------|:-------------------------------|
| `--config`          | `./config.json` | Path to the configuration file |