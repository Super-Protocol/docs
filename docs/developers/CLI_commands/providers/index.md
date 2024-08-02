---
id: "providers"
title: "providers"
slug: "/cli_commands/providers"
sidebar_position: 7

---

Tracks and updates [providers](/developers/fundamentals/offers).

Any user can register a provider and create solution and data offers. Currently, only Super Protocol provides storage and compute offers. In future releases, the ability to create compute and storage offers will be available to anyone with proper hardware.

## Syntax

```
./spctl providers <command>
```

## Child commands

| **Command**                                         | **Description**                                         |
|:----------------------------------------------------|:--------------------------------------------------------|
| [get](/developers/cli_commands/providers/get)       | Display information on a provider using its authority account address|
| [update](/developers/cli_commands/providers/update) | Update the current provider information               |
| [list](/developers/cli_commands/providers/list)     | List all providers                                          |