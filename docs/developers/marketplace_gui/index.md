---
id: "marketplace"
title: "Marketplace GUI"
slug: "/marketplace/"
sidebar_position: 3
---

Marketplace graphical interface (GUI) is a user-friendly web interface to [Marketplace](/fundamentals). It also provides an interactive learning experience for new users. GUI serves as a companion tool to the Super Protocol command-line interface (CLI) tool [SPCTL](/cli/commands). However, GUI capabilities are currently limited so it is not a full alternative to CLI.

Go to Marketplace GUI: [**marketplace.superprotocol.com**](https://marketplace.superprotocol.com/)

Follow the [First steps](/developers/marketplace/first-steps) and [Marketplace walkthrough](/developers/marketplace/walkthrough) guides to start using the Super Protocol Marketplace.

## Content

| **Guide**                                   | **Description**     |
|:-------|:----------|
| [First steps](/developers/marketplace/first-steps)            | Set up MetaMask and Marketplace GUI   |
| [Marketplace walkthrough](/developers/marketplace/walkthrough)  | Create a sample order in the Marketplace GUI         |
| [Check confidentiality](/developers/marketplace/confidentiality) | Check if a domain is secure and deployed inside a Trusted Execution Emvironment       |
| [Moderation](/developers/marketplace/moderation)                | Pass the offer verification to move your offer into the **Approved** category     |

## Available in the Marketplace GUI

The things you can do in the Marketplace GUI and the their respective CLI commands:

| **Function**                                   | **SPCTL Command**                                                             |
|:-----------------------------------------------|:------------------------------------------------------------------------------|
| View details of offers available on blockchain | [`offers`](/cli/commands/offers)                                     |
| Create orders using offers                     | [`workflows create`](/cli/commands/workflows/create)                 |
| Use your own data for the solution offers      | [`workflows create`](/cli/commands/workflows/create)                 |
| Generate encryption keys for orders            | [`workflows generate-key`](/cli/commands/workflows/generate-key)     |
| See list of all your orders                    | [`orders list`](/cli/commands/orders/list)                           |
| See details and statuses of specific orders    | [`orders get`](/cli/commands/orders/get)                             |
| Replenish order deposits                       | [`orders replenish-deposit`](/cli/commands/orders/replenish-deposit) |
| Cancel orders                                  | [`orders cancel`](/cli/commands/orders/cancel)                       |
| Receive order results                          | [`orders download-result`](/cli/commands/orders/download-result)     |

## Available in the Marketplace CLI only

The most important functions available only in [SPCTL](/cli/commands):

| **Function**                                   | **SPCTL Command**                                                               |
|:-----------------------------------------------|:------------------------------------------------------------------------------|
| Upload files to storage                | [`files upload`](/cli/commands/files/upload)                     |
| Create orders using your solutions              | [`workflows create`](/cli/commands/workflows/create)                       |
| Update an offer | [`offers update`](/cli/commands/offers/update) and [`offers update-slot`](/cli/commands/offers/update-slot)|
| Update a provider                     | [`providers update`](/cli/commands/providers/update)                 |

Refer to the [Providers and offers](/developers/cli_guides/providers_offers) guide to register a provider and create a solution or data offer.


