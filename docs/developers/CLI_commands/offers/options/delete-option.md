---
id: "delete-option"
title: "delete-option"
slug: "/cli_commands/offers/options/delete-option"
sidebar_position: 3
---

Delete an existing option in an existing TEE offer.

## Usage

Syntax:

```
./spctl offers delete-option [OPTIONS]
```

Example: delete an existing option in an existing TEE offer.

```
./spctl offers delete-option --offer 10 --option 1
```

## Options

| **Name, shorthand** | **Default**     | **Description**                |
|:--------------------|:----------------|:-------------------------------|
| `--offer`           |                 | Offer `id`                     |
| `--option`            |                 | Slot `id`                      |
| `--config`          | `./config.json` | Path to the configuration file |