---
id: "syntax"
title: "Command Syntax"
slug: "/syntax"
sidebar_position: 1
---

Command format:

```
./spctl <command_group> <command> <arguments> <options>
```

_Command groups_ contain functionally related commands. See the [full list of command groups](/cli/commands).

_Commands_ perform a specific function, like placing an order or showing the list of providers.

For example, the [`files`](/cli/commands/files) command group includes the following commands:

- [`upload`](/cli/commands/files/upload)
- [`calculate-hash`](/cli/commands/files/calculate-hash)
- [`download`](/cli/commands/files/download)
- [`delete`](/cli/commands/files/delete)

_Options_ modify the command behavior and are prefixed by double hyphen `--`; for example, `--help`. Options can be mandatory or optional.

_Arguments_ provide values for commands and options. Angle brackets `< >` and upper case indicate argument placeholders in the command syntax. When executing a command, replace placeholders, including the brackets, with values.

Command syntax may also contain the following special characters:

- Square brackets `[ ]` indicate an optional argument or option.
- Curly brackets `{ }` indicate a required choice between two or more options or arguments.
- A vertical bar `|` separates mutually exclusive options or arguments you must choose from.
- An ellipsis `...` indicates you may use the preceding option or argument multiple times.

Never include these special characters in the final command.

### Example

The following is a mandatory option `--solution` of the [`workflows create`](/cli/commands/workflows/create) command:

```
--solution {<OFFER>[,<SLOT>] | <PATH>}
```

The format `{<OFFER>[,<SLOT>] | <PATH>}` requires you to choose one of the following:

- `<OFFER>[,<SLOT>]`: a mandatory argument `<OFFER>` and an optional argument `<SLOT>`, separated by a comma.
- `<PATH>`: a mandatory argument.

So, the final format of this option should be one of the following:

- `--solution <OFFER>`. For example, `--solution 26`.
- `--solution <OFFER>,<SLOT>`. For example, `--solution 26,25`.
- `--solution <PATH>`. For example, `--solution ./solution.resource.json`.

Read the descriptions of arguments and options and refer to the examples for more information. If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).