---
id: "cli-commands"
title: "CLI Commands"
slug: "/commands"
sidebar_position: 2
---

This section contains Super Protocol CLI commands. [Install and configure SPCTL](/cli) to access the CLI.

## Command groups

| **Group** | **Description** |
| :- | :- |
| [tokens](/cli/commands/tokens) | Receive SPPI and BNB test tokens; **testnet only**. |
| [solutions](/cli/commands/solutions) | Prepare a <a id="solution"><span className="dashed-underline">solution</span></a> for deployment. |
| [files](/cli/commands/files) | Manage files in decentralized storage. |
| [workflows](/cli/commands/workflows) | Create a new <a id="order"><span className="dashed-underline">order</span></a>. |
| [orders](/cli/commands/orders) | Manage your orders. |
| [offers](/cli/commands/offers) | View and manage Marketplace <a id="offer"><span className="dashed-underline">offers</span></a>. |
| [providers](/cli/commands/providers) | View and manage providers. |
| [quotes](/cli/commands/quotes) | Verify the authenticity and integrity of a <a id="tee"><span className="dashed-underline">Trusted Execution Environment</span></a>. |

## Command syntax

The syntax format for commands:

```
./spctl <command group> <command> <arguments> <options>
```

_Command groups_ contain functionally related commands. Check the complete list of command groups in the [previous section](/cli/commands#command-groups).

_Commands_ perform a specific function, like placing an order or showing the list of providers.

For example, the [`tokens`](/cli/commands/tokens) command group includes the following commands:

- [`balance`](/cli/commands/tokens/balance): Checks the balance.
- [`request`](/cli/commands/tokens/request): Requests testnet tokens.

_Options_ modify the command behavior and are prefixed by double hyphen `--`; for example, `--help`. Options can be mandatory or optional.

_Arguments_ provide values for commands and options. Angle brackets `< >` indicate argument placeholders in the command syntax. When executing a command, replace placeholders, including the brackets, with values. For example, replace `<offerId>` with `12` for [Python Base Image](https://marketplace.superprotocol.com/?offer=offerId%3D12).

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

The format `{<offerId>,[<slotId>] | <path>}` requires you to choose one of the following:

- `<offerId>,[<slotId>]`: a mandatory argument `<offerId>` and an optional argument `<slotId>`, separated by a comma.
- `<path>`: a mandatory argument.

So, the final format of this option must be one of the following:

- `--solution <offerId>`. For example, `--solution 13`.
- `--solution <offerId>,<slotId>`. For example, `--solution 13,15`.
- `--solution <path>`. For example, `--solution ./python-solution.json`.

Read the descriptions of arguments and options and refer to the examples for more information. If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).