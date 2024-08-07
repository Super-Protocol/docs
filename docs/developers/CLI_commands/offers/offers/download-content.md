---
id: "offers-download-content"
title: "offers download-content"
slug: "/cli_commands/offers/offers/download-content"
sidebar_position: 4

---

Downloads the content of an offer.

The command only works with offers that allow this operation.

## Syntax

```
./spctl offers download-content <offerId> \
    [--save-to <path>] \
    [--config <path>] \
    [--help ┃ -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerId>` | ID of the offer. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--save-to <path>` | Path to save the content. The default is the original filename. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

The following command downloads the content of the Python Base Image (offer ID: 5):

```
./spctl offers download-content 5
```