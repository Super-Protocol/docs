---
id: "update-option"
title: "update-option"
slug: "/cli_commands/offers/options/update-option"
sidebar_position: 2
---

Update an existing option in an existing TEE offer.

## Usage

Syntax:

```
./spctl offers update-option [OPTIONS]
```

Example: update an existing option in an existing TEE offer using the information in `offerOption.json` which is located in the same directory together with SPCTL.

```
./spctl offers update-slot --offer 10 --option 1 --path ./offerOption.json
```

## Options

| **Name, shorthand** | **Default**          | **Description**                |
|:--------------------|:---------------------|:-------------------------------|
| `--offer`           |                      | TEE offer `id`                 |
| `--option`          |                      | Option `id`                    |
| `--path`            | `./offerOption.json` | Path to the slot content file  |
| `--config`          | `./config.json`      | Path to the configuration file |


**Note**: сontent file requirements are the same as in the process of adding an option. You can find details in [offers add-option](/developers/cli_commands/offers/options/add-option) command.