---
id: "cli_commands"
title: "CLI Commands"
slug: "/cli_commands"
sidebar_position: 7
---

## Most often used CLI commands

Below are the most popular CLI commands for developers. Most other functions, such as viewing offers and managing orders, may be more convenient using the [Marketplace GUI](/developers/marketplace).

You need to have previously [configured SPCTL](/developers/cli_guides/configuring) to use these commands. [Quick guide](/developers/cli_guides/quick_guide) might be userful to make sense of the logic and sequence of the main commands.

Please be mindful of the [Testnet Limitations](/testnet/limitations) when using CLI (and GUI).

| **Group**                                      | **Command**                                                     | **Description**                                               |
|:-----------------------------------------------|:----------------------------------------------------------------|:--------------------------------------------------------------|
| solutions                                      | [generate-key](/developers/cli_commands/solutions/generate-key) | Generate solution signing key.                                |
| solutions                                      | [prepare](/developers/cli_commands/solutions/prepare)           | Prepare your solution for deployment.                         |
| files                                          | [upload](/developers/cli_commands/files/upload)                 | Upload your solution and data to storage.                     |
| workflows                                      | [generate-key](/developers/cli_commands/workflows/generate-key) | Generate key to encrypt order results and manage your orders. |
| workflows                                      | [create](/developers/cli_commands/workflows/create)             | Create new orders. |

## CLI command groups

| **Commands**                                    | **Description**                                                    |
|:------------------------------------------------|:-------------------------------------------------------------------|
| [Tokens](/developers/cli_commands/tokens)       | Receive test TEE and MATIC tokens. **Testnet only**                |
| [Solutions](/developers/cli_commands/solutions) | Prepare solutions for deployment.                                  |
| [Files](/developers/cli_commands/files)         | Manage files in decentralized storages.                            |
| [Workflows](/developers/cli_commands/workflows) | Create new orders.                                                 |
| [Orders](/developers/cli_commands/orders)       | Manage your orders.                                                |
| [Offers](/developers/cli_commands/offers)       | View Marketplace offers.                                           |
| [Providers](/developers/cli_commands/providers) | View Marketplace providers.                                        |