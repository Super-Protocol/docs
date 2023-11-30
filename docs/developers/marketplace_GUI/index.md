---
id: "marketplace"
title: "Marketplace GUI"
slug: "/marketplace/"
sidebar_position: 3
---

## Marketplace

Marketplace enables providers to list and monetize their [offers](/developers/offers) through Super Protocol. All offers are recorded on blockchain. Additionally, Solution and Data offers have content stored on decentralized storage networks such as Storj. These storage networks are represented by Storage offers. Compute offers are connected to confidential computing (TEE) machines that process the orders. 

Marketplace can be managed entirely via [CLI](/developers/cli_commands/).

## Marketplace GUI

The purpose of Marketplace GUI is to present a user-friendly web interface to the Marketplace as well as an interactive learning experience for onboarding new users. We see it as a companion tool to CLI, but not yet a full alternative, as the GUI capabilities are currently limited. 

Go to Marketplace GUI: [marketplace.superprotocol.com](https://marketplace.superprotocol.com/)

Read the [First Steps](/developers/marketplace/first-steps/) and [Marketplace Walkthrough](/developers/marketplace/walkthrough/) guides to get you started.

## Available now

The things you can do right now with the Marketplace GUI and their CLI counterparts:

| **Function**                                   | **CLI Command**                                                               |
|:-----------------------------------------------|:------------------------------------------------------------------------------|
| View details of offers available on blockchain | [offers](/developers/cli_commands/offers)                                     |
| Receive test TEE and MATIC tokens              | [tokens request](/developers/cli_commands/tokens/request)                     |
| Create orders using offers                     | [workflows create](/developers/cli_commands/workflows/create)                 |
| Use your own data for the solution offers      | [workflows create](/developers/cli_commands/workflows/create)                 |
| Generate encryption keys for orders            | [workflows generate-key](/developers/cli_commands/workflows/generate-key)     |
| See list of all your orders                    | [orders list](/developers/cli_commands/orders/list)                           |
| See details and statuses of specific orders    | [orders get](/developers/cli_commands/orders/get)                             |
| Replenish order deposits                       | [orders replenish-deposit](/developers/cli_commands/orders/replenish-deposit) |
| Withdraw order deposits                        | [orders withdraw-deposit](/developers/cli_commands/orders/withdraw-deposit)   |
| Cancel orders                                  | [orders cancel](/developers/cli_commands/orders/cancel)                       |
| Receive order results                          | [orders download-result](/developers/cli_commands/orders/download-result)     |
| Check confidentiality                          | GUI only for now                                                              |

## Coming soon to GUI

These functions are currently CLI only because they are not simple commands, but rather whole guides with multiple steps and configurations.

* Creating orders with your own solutions;
* Connecting your own storage (current default is the Super Protocol account);
* Deploying your own tunnels (current default is the pre-configured provisioner offer that can easily deploy Super Chat and static webpages, but uses Super Protocol credentials);




