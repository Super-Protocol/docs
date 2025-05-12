---
id: "cli-quotes-validate"
title: "quotes validate"
slug: "/commands/quotes/validate"
sidebar_label: "validate"
---

Checks if the domain content runs in a <a id="tee"><span className="dashed-underline">Trusted Execution Environment</span></a>. The command also displays if the domain content is an <a id="offer"><span className="dashed-underline">offer</span></a>.

## Syntax

```
./spctl quotes validate <domainUrl>
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<domainUrl>` | URL of the domain to check. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Example

```
./spctl quotes validate https://bbs-tdr-bren.superprotocol.io
```