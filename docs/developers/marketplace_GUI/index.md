---
id: "marketplace"
title: "Marketplace GUI"
slug: "/marketplace/"
sidebar_position: 3
---

Marketplace GUI is a user-friendly web interface to [Marketplace](/developers/fundamentals). It also provides an interactive learning experience for new users. GUI serves as a companion tool to the Super Protocol CLI tool [SPCTL](/developers/cli_commands). However, GUI capabilities are currently limited so it is not a full alternative.

Go to Marketplace GUI: [**marketplace.superprotocol.com**](https://marketplace.superprotocol.com/)

Follow the [First steps](/developers/marketplace/first-steps/) and [Marketplace walkthrough](/developers/marketplace/walkthrough/) guides to get you started.

## Content

| **Guide**                                   | **Description**                                                               |
|:-------|:----------|
| [First steps](/developers/marketplace/first-steps/)            | Set up Metamask and Marketplace GUI   |
| [Marketplace walkthrough](developers/marketplace/walkthrough/)  | Create a sample order in the Marketplace GUI         |
| [Check confidentiality](/developers/marketplace/confidentiality) | Check if a domain is secure and deployed inside a Trusted Execution Emvironment       |
| [Moderation](/developers/marketplace/moderation/)                | Pass the offer verification to move your offer into the **Approved** category     |


## Available in Marketplace GUI

The things you can do in the Marketplace GUI and the their respective CLI commands:

| **Function**                                   | **SPCTL Command**                                                             |
|:-----------------------------------------------|:------------------------------------------------------------------------------|
| View details of offers available on blockchain | [`offers`](/developers/cli_commands/offers)                                     |
| Receive test TEE and MATIC tokens              | [`tokens request`](/developers/cli_commands/tokens/request)                     |
| Create orders using offers                     | [`workflows create`](/developers/cli_commands/workflows/create)                 |
| Use your own data for the solution offers      | [`workflows create`](/developers/cli_commands/workflows/create)                 |
| Generate encryption keys for orders            | [`workflows generate-key`](/developers/cli_commands/workflows/generate-key)     |
| See list of all your orders                    | [`orders list`](/developers/cli_commands/orders/list)                           |
| See details and statuses of specific orders    | [`orders get`](/developers/cli_commands/orders/get)                             |
| Replenish order deposits                       | [`orders replenish-deposit`](/developers/cli_commands/orders/replenish-deposit) |
| Cancel orders                                  | [`orders cancel`](/developers/cli_commands/orders/cancel)                       |
| Receive order results                          | [`orders download-result`](/developers/cli_commands/orders/download-result)     |
| Check confidentiality                          | [`quotes validate`](/developers/cli_commands/quotes/validate)                   |

## Available in SPCTL only

A list of most important functions that are available only through [SPCTL](/developers/cli_commands).

| **Function**                                   | **SPCTL Command**                                                               |
|:-----------------------------------------------|:------------------------------------------------------------------------------|
| Prepare your solutions for execution | [`solutions prepare`](/developers/cli_commands/solutions/prepare)                                     |
| Upload your files to storage                | [`files upload`](/developers/cli_commands/files/upload)                     |
| Create orders using your solutions              | [`workflows create`](/developers/cli_commands/workflows/create)                       |
| Updating your offers | [`offers update`](/developers/cli_commands/offers/offers/update) and [`offers update-slot`](/developers/cli_commands/offers/slots/update-slot)|
| Updating your provider                     | [`providers update`](/developers/cli_commands/providers/update)                 |

You can also register a provider to create solution or data offers. Refer to the [Providers and offers](/developers/cli_guides/providers_offers) guide.


