---
id: "cli_commands"
title: "CLI commands"
slug: "/cli_commands"
sidebar_position: 7
---

This section contains the list of commands for the Super Protocol CLI tool SPCTL.

[Configure SPCTL](/developers/cli_guides/configure) before using these commands. Be mindful of the [testnet limitations](/testnet/limitations) when using the Marketplace CLI and GUI.

## Command groups

| **Group** | **Description** |
| :- | :- |
| [tokens](/developers/cli_commands/tokens) | Receive test TEE and MATIC tokens; **testnet only**. |
| [solutions](/developers/cli_commands/solutions) | Prepare a solution for deployment. |
| [files](/developers/cli_commands/files) | Manage files in decentralized storage. |
| [workflows](/developers/cli_commands/workflows) | Create a new order. |
| [orders](/developers/cli_commands/orders) | Manage your orders. |
| [offers](/developers/cli_commands/offers) | View and manage Marketplace offers. |
| [providers](/developers/cli_commands/providers) | View and manage offer providers. |
| [quotes](/developers/cli_commands/quotes) | Verify the authenticity and integrity of a Trusted Execution Environment. |

## Command syntax

SPCTL uses the following syntax format for commands:

```
./spctl <command group> <command> <arguments> <options>
```

_Command groups_ contain functionally related commands. Check the complete list of command groups in the [previous section](/developers/cli_commands#command-groups).

_Commands_ perform a specific function, like uploading a file or showing the list of orders.

For example, the [`tokens`](/developers/cli_commands/tokens) command group includes the following commands:
- [`balance`](/developers/cli_commands/tokens/balance) to check the balance
- [`request`](/developers/cli_commands/tokens/request) to get testnet tokens.

_Options_ modify the command behavior. _Arguments_ provide values for the command and its options. This documentation uses the following special characters to indicate arguments and options:

- Angle brackets `< >` indicate an argument. Replace the argument name and the brackets with a value.
- Double hyphen `--` prefixes an option. Use options as given, including the double hyphen `--`.

Arguments can follow a command or an option. Command arguments are always required by the command and mandatory to use. Option arguments can be required by the option or be optional.

Options can be mandatory—required by the command—or optional. Note that most options require at least one argument, although exceptions exist.

Command syntax may also contain the following special characters:

- Square brackets `[ ]` indicate optional arguments and options.
- Curly brackets `{ }` indicate a required choice between two or more options or arguments.
- A vertical bar `|` separates mutually exclusive options or arguments you must choose from.
- An ellipsis `...` indicates you may use the preceding option or argument multiple times.
- A backslash `\` breaks a long command line for better readability.

Do not include these special characters, except backslash `\`, in the final command. Do not include backslashes `\` if you write the command in a single line, but include them if you are breaking the line.

### Example

The following is a required option `--solution` of the [`workflows create`](/developers/cli_commands/workflows/create) command:

```
--solution {<offerId>,[<slotId>] | <path>}
```

The format `{<offerId>,[<slotId>] | <path>}` requires you to choose either `<offerId>,[<slotId>]` or `<path>` as an argument of this option:
- `<offerId>,[<slotId>]` are a required argument `<offerId>` and an optional argument `<slotId>` (note the square brackets `[ ]`), separated by a comma.
- `<path>` is a required argument.

So, the final format of this option must be one of the following:
- `--solution <offerId>`. For example, `--solution 13`.
- `--solution <offerId>,<slotId>`. For example, `--solution 13,15`.
- `--solution <path>`. For example, `--solution ./python-solution.json`.

Read the descriptions of arguments and options and refer to the examples for more information. If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol). Community Managers will be happy to help.