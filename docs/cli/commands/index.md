---
id: "cli-commands"
title: "CLI Commands"
slug: "/commands"
sidebar_position: 2
---

This section contains the list of commands for the Super Protocol CLI tool SPCTL.

[Configure SPCTL](/cli) before using these commands. Also keep in mind [testnet limitations](/marketplace/limitations).

## Command groups

| **Group** | **Description** |
| :- | :- |
| [tokens](/cli/commands/tokens) | Receive SPPI and BNB test tokens; **testnet only**. |
| [solutions](/cli/commands/solutions) | Prepare a solution for deployment. |
| [files](/cli/commands/files) | Manage files in decentralized storage. |
| [workflows](/cli/commands/workflows) | Create a new order. |
| [orders](/cli/commands/orders) | Manage your orders. |
| [offers](/cli/commands/offers) | View and manage Marketplace offers. |
| [providers](/cli/commands/providers) | View and manage offer providers. |
| [quotes](/cli/commands/quotes) | Verify the authenticity and integrity of a Trusted Execution Environment. |

## Command syntax

SPCTL uses the following syntax format for commands:

```
./spctl <command group> <command> <arguments> <options>
```

_Command groups_ contain functionally related commands. Check the complete list of command groups in the [previous section](/cli/commands#command-groups).

_Commands_ perform a specific function, like placing an order or showing the list of providers.

For example, the [`tokens`](/cli/commands/tokens) command group includes the following commands:
- [`balance`](/cli/commands/tokens/balance): checks the balance
- [`request`](/cli/commands/tokens/request): requests testnet tokens.

_Options_ modify the command behavior and are prefixed by double hyphen `--`. For example, `--help` is an option that displays help information for a command.

_Arguments_ provide values for commands and options. Arguments that follow a command are always required by the command and mandatory to use. Arguments that follow an option can be mandatory—required by the option—or be optional. Angle brackets `< >` indicate argument placeholders in the command syntax. When executing a command, replace placeholders, including the brackets, with values. For example, replace `<offerId>` with `5` for [Python Base Image](https://marketplace.superprotocol.com/?offer=offerId%3D5) (offer ID: 5).

Options, too, can be mandatory—required by the command—or be optional. Note that most options require at least one argument, although exceptions exist.

Command syntax may also contain the following special characters:

- Square brackets `[ ]` indicate optional arguments and options.
- Curly brackets `{ }` indicate a required choice between two or more options or arguments.
- A vertical bar `|` separates mutually exclusive options or arguments you must choose from.
- An ellipsis `...` indicates you may use the preceding option or argument multiple times.

Never include these special characters in the final command.

### Example

The following is a mandatory option `--solution` of the [`workflows create`](/cli/commands/workflows/create) command:

```
--solution {<offerId>,[<slotId>] | <path>}
```

The format `{<offerId>,[<slotId>] | <path>}` requires you to choose either `<offerId>,[<slotId>]` or `<path>`:
- `<offerId>,[<slotId>]` are a mandatory argument `<offerId>` and an optional argument `<slotId>` (note the square brackets `[ ]`), separated by a comma.
- `<path>` is a mandatory argument.

So, the final format of this option must be one of the following:
- `--solution <offerId>`. For example, `--solution 13`.
- `--solution <offerId>,<slotId>`. For example, `--solution 13,15`.
- `--solution <path>`. For example, `--solution ./python-solution.json`.

Read the descriptions of arguments and options and refer to the examples for more information. If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol).