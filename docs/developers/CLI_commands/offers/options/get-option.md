---
id: "get-option"
title: "get-option"
slug: "/cli_commands/offers/options/get-option"
sidebar_position: 4
---

Displays the information on a [configuration option](/developers/fundamentals/slots) of a compute offer.

## Syntax

```
./spctl offers get-option \
    --offer <offerId> \
    --option <optionId> \
    [--config <path>] \
    [--help | -h]
```

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
./spctl offers get-option tee --offer 1 --option 3
```