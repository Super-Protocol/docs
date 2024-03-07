---
id: "cli-commands-offers"
title: "offers"
slug: "/cli_commands/offers"
sidebar_position: 6

---

View Super Protocol offers using CLI commands. In most cases it is more convenient to do via the [Marketplace GUI](/developers/marketplace) where all the below functions are available. 

## Usage

```
./spctl offers <command>
```

## Offers command

| **Command**                                                                 | **Description**                                                    |
|:----------------------------------------------------------------------------|:-------------------------------------------------------------------|
| [list](/developers/cli_commands/offers/offers/list)                         | Lists available offers.                                            |
| [get](/developers/cli_commands/offers/offers/get)                           | Displays detailed information on an offer.                         |
| [get-info](/developers/cli_commands/offers/offers/get-info)                 | Displays detailed information on an offer as stored on blockchain. |
| [download-content](/developers/cli_commands/offers/offers/download-content) | Downloads the content of a specific offer.                         |
| [create](/developers/cli_commands/offers/offers/create)                     | Creates a new offer.                                               |
| [update](/developers/cli_commands/offers/offers/update)                     | Updates a specific offer.                                          |
| [disable](/developers/cli_commands/offers/offers/disable)                   | Disables a specific enabled offer.                                 |
| [enable](/developers/cli_commands/offers/offers/enable)                     | Enables a specific disabled offer.                                 |

## Slots command

| **Command**                                                      | **Description**                           |
|:-----------------------------------------------------------------|:------------------------------------------|
| [add-slot](/developers/cli_commands/offers/slots/add-slot)       | Adds a new slot to an existing offer.     |
| [update-slot](/developers/cli_commands/offers/slots/update-slot) | Updates a specific slot.                  |
| [delete-slot](/developers/cli_commands/offers/slots/delete-slot) | Deletes a specific slot.                  |
| [get-slot](/developers/cli_commands/offers/slots/get-slot)       | Displays information for a specific slot. |

## Options command (only for TEE offers)

| **Command**                                                            | **Description**                                                    |
|:-----------------------------------------------------------------------|:-------------------------------------------------------------------|
| [add-option](/developers/cli_commands/offers/options/add-option)       | Adds a new option to an existing offer.                       
| [update-option](/developers/cli_commands/offers/options/update-option) | Updates a specific options.                            
| [delete-option](/developers/cli_commands/offers/options/delete-option) | Deletes a specific slot.  
| [get-option](/developers/cli_commands/offers/options/get-option)       | Displays information for a specific option.                        


