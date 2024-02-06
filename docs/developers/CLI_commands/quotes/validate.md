---
id: "cli-quotes-validate"
title: "Validate a quote"
slug: "/cli_commands/quotes/validate"
sidebar_label: "validate"
---

Check that the contents of a domain are running in a genuine confidential environment (TEE). 

In addition, the command allows to link the contents to Marketplace solution offers if the contents are offers.

In the marketplace, it is known as [Check Confidentiality](/developers/marketplace/confidentiality).

## Usage

```
./spctl quotes validate <url> [OPTIONS]
```

## Arguments

| **Name** | **Description**                |
|:---------|:-------------------------------|
| `url`    | The valid URL of a domain only |


## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to the configuration file|

Example with our permanently running SuperChat domain:

```
./spctl quotes validate https://vota-eli-gals.superprotocol.io/
```