---
id: "cli-commands-offers"
title: "offers"
slug: "/cli_commands/offers"
sidebar_position: 6

---

This command group contains commands to view and manage [offers](/fundamentals/offers). Note that [Marketplace GUI](/developers/marketplace) can be more convenient to use than most of these commands.

## Commands

| **Command** | **Description** |
| :- | :- |
| [offers list](/cli/cli_commands/offers/offers/list) | Lists available offers. |
| [offers get](/cli/cli_commands/offers/offers/get) | Displays information on an offer. |
| [offers get-info](/cli/cli_commands/offers/offers/get-info) | Displays information on an offer as stored on the blockchain. |
| [offers download-content](/cli/cli_commands/offers/offers/download-content) | Downloads the content of an offer. |
| [offers update](/cli/cli_commands/offers/offers/update) | Updates an offer. |
| [offers disable](/cli/cli_commands/offers/offers/disable) | Disables an enabled offer. |
| [offers enable](/cli/cli_commands/offers/offers/enable) | Enables a disabled offer. |

### Slot-related commands

| **Command** | **Description** |
| :- | :- |
| [offers add-slot](/cli/cli_commands/offers/slots/add-slot) | Adds a new slot to an existing offer. |
| [offers update-slot](/cli/cli_commands/offers/slots/update-slot) | Updates a slot. |
| [offers delete-slot](/cli/cli_commands/offers/slots/delete-slot) | Deletes a slot. |
| [offers get-slot](/cli/cli_commands/offers/slots/get-slot) | Displays information on a slot. |

### Option-related command

This command only works with compute offers.

| **Command** | **Description** |
| :- | :- |
| [offers get-option](/cli/cli_commands/offers/options/get-option) | Displays information for an option. |
