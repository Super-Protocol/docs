---
id: "cli-offers-list"
title: "offers list"
slug: "/commands/offers/list"
sidebar_label: "list"
sidebar_position: 1
---

Displays a list of available <a id="offer"><span className="dashed-underline">offers</span></a>.

## Syntax

```shell
./spctl offers list <OFFER_TYPE>
    [--fields <FIELD>[,<FIELD>,...]]
    [--ids <OFFER> [<OFFER> ...]]
    [--limit <NUMBER>]
    [--cursor <CURSOR_STRING>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:265}}>**Name**</div>   | <div style={{width:500}}>**Description**</div> |
| :-                                        | :- |
| `<OFFER_TYPE>`                            | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |

## Options

For the `tee` offer type:

| <div style={{width:265}}>**Name**</div>   | <div style={{width:500}}>**Description**</div> |
| :-                                        | :- |
| `--fields <FIELD>[,<FIELD>,...]`          | Columns in the output table, separated by commas. Default fields: `id`, `name`, `orders_in_queue`. Additional fields: `description`, `provider_address`, `provider_name`, `total_cores`, `free_cores`, `cancelable`, `modified_date`. |

For the `value` offer type:

| <div style={{width:265}}>**Name**</div>   | <div style={{width:500}}>**Description**</div> |
| :-                                        | :- |
| `--fields <FIELD>[,<FIELD>,...]`          | Columns in the output table, separated by commas. Default fields: `id`, `name`, `type`. Additional fields: `description`, `provider_address`, `provider_name`, `cancelable`, `modified_date`. |

For both offer types:

| <div style={{width:265}}>**Name**</div>   | <div style={{width:500}}>**Description**</div> |
| :-                                        | :- |
| `--ids <OFFER> [<OFFER> ...]`             | Filter by offer IDs, separated by spaces. |
| `--limit <NUMBER>`                        | Number of rows to display. <br/>Default: `10`. |
| `--cursor <CURSOR_STRING>`                | Cursor for pagination. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Examples

### Example 1

```shell
./spctl offers list value --limit 30
```

### Example 2

```shell
./spctl offers list value --ids 25 26 27 28 --fields id,name,modified_date
```