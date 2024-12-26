---
id: "get-option"
title: "offers get-option"
slug: "/cli_commands/offers/options/get-option"
sidebar_label: "get-option"
sidebar_position: 9
---

Displays the information on a [configuration option](/fundamentals/slots) of a compute offer.

## Syntax

```
./spctl offers get-option \
    --offer <offerId> \
    --option <optionId> \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/cli_commands#command-syntax).

## Options

| **Name** | **Description** |
| :- | :- |
| `--offer <offerId>` | ID of the offer. |
| `--option <optionId>` | ID of the configuration option. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command displays the information on the option with ID 3 of [TEE Offer #1](https://marketplace.superprotocol.com/compute?offerId=1) (offer ID: 1):

```
./spctl offers get-option --offer 1 --option 3
```