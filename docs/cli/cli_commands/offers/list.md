---
id: "offers-list"
title: "offers list"
slug: "/cli_commands/offers/offers/list"
sidebar_label: "list"
sidebar_position: 1
---

Displays a list of available offers.

## Syntax

```
./spctl offers list <offerType> \
    [--fields <field>,[<field>,...]] \
    [--ids <offerId> [<offerId> ...]] \
    [--limit <number>] \
    [--cursor <cursorString>] \
    [--config <path>] \
    [--help | -h]
```

Read about the Super Protocol [command syntax](/cli/cli_commands#command-syntax).

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Options

For the `tee` offer type:

| <div style={{width:265}}>**Name**</div> | **Description** |
| :- | :- |
| `--fields <field>,[<field>,...]` | Columns in the output table, separated by commas. Default fields: `id`, `name`, `orders_in_queue`. Additional fields: `description`, `provider_address`, `provider_name`, `total_cores`, `free_cores`, `cancelable`, `modified_date`. |

For the `value` offer type:

| <div style={{width:265}}>**Name**</div> | **Description** |
| :- | :- |
| `--fields <field>,[<field>,...]` | Columns in the output table, separated by commas. Default fields: `id`, `name`, `type`. Additional fields: `description`, `provider_address`, `provider_name`, `cancelable`, `modified_date`. |

For both offer types:

| <div style={{width:275}}>**Name**</div> | **Description** |
| :- | :- |
| `--ids <offerId> [<offerId> ...]` | Filter by offer IDs. This option accepts multiple values separated by spaces. |
| `--limit <number>` | Number of rows to display. The default is `10`. |
| `--cursor <cursorString>` | Cursor for pagination. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Examples

### Example 1

The following command displays the IDs, names, and types of the first 30 value offers:

```
./spctl offers list value --limit 30
```

### Example 2

The following command displays the IDs, names, and descriptions of value offers with IDs 37, 39, and 40:

```
./spctl offers list value --ids 37 39 40 --fields id,name,description
```