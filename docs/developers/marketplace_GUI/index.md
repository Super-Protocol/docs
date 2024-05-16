---
id: "marketplace"
title: "Marketplace GUI"
slug: "/marketplace/"
sidebar_position: 3
---

## Overview

The purpose of Marketplace GUI is to present a user-friendly web interface to the [Marketplace](/developers/fundamentals) as well as an interactive learning experience for onboarding new users. We see it as a companion tool to SPCTL, but not yet a full alternative, as the GUI capabilities are currently limited. 

Go to Marketplace GUI: [**marketplace.superprotocol.com**](https://marketplace.superprotocol.com/)

Read the [First Steps](/developers/marketplace/first-steps/) and [Marketplace Walkthrough](/developers/marketplace/walkthrough/) guides to get you started.

## Contents

| **Guide**                                   | **Description**                                                               |
|:-----------------------------------------------|:------------------------------------------------------------------------------|
| [First Steps](/developers/marketplace/first-steps/)                        | Setting up Metamask and Marketplace GUI with Super testnet accounts                                     |
| [Marketplace Walkthrough](developers/marketplace/walkthrough/)              | A sample step-by-step guide to create an order in the Marketplace GUI                    |
| [Check Confidentiality](/developers/marketplace/confidentiality)                    | Quote verification to check that domain is secure and is deployed inside TEE              |
| [Moderation](/developers/marketplace/moderation/)                             | For providers who want their offers to appear in the Approved category                 |


## Available in Marketplace GUI

The things you can do right now with the Marketplace GUI and their SPCTL counterparts:

| **Function**                                   | **SPCTL Command**                                                               |
|:-----------------------------------------------|:------------------------------------------------------------------------------|
| View details of offers available on blockchain | [offers](/developers/cli_commands/offers)                                     |
| Receive test TEE and MATIC tokens              | [tokens request](/developers/cli_commands/tokens/request)                     |
| Create orders using offers                     | [workflows create](/developers/cli_commands/workflows/create)                 |
| Use your own data for the solution offers      | [workflows create](/developers/cli_commands/workflows/create)                 |
| Generate encryption keys for orders            | [workflows generate-key](/developers/cli_commands/workflows/generate-key)     |
| See list of all your orders                    | [orders list](/developers/cli_commands/orders/list)                           |
| See details and statuses of specific orders    | [orders get](/developers/cli_commands/orders/get)                             |
| Replenish order deposits                       | [orders replenish-deposit](/developers/cli_commands/orders/replenish-deposit) |
| Cancel orders                                  | [orders cancel](/developers/cli_commands/orders/cancel)                       |
| Receive order results                          | [orders download-result](/developers/cli_commands/orders/download-result)     |
| Check confidentiality                          | [quotes validate](/developers/cli_commands/quotes/validate)                                                              |

## Available in SPCTL only

A list of most important functions that are available only through [SPCTL](/developers/cli_commands).

| **Function**                                   | **SPCTL Command**                                                               |
|:-----------------------------------------------|:------------------------------------------------------------------------------|
| Prepare your solutions for execution in TEE | [solutions prepare](/developers/cli_commands/solutions/prepare)                                     |
| Upload your files to storage              | [files upload](/developers/cli_commands/files/upload)                     |
| Create orders with your own solutions              | [workflows create](/developers/cli_commands/workflows/create)                       |
| Creating providers and offers                     | [Providers and Offers Guide](/developers/cli_guides/providers_offers)              |
| Updating your offers             |  [offers update](/developers/cli_commands/offers/offers/update) and [offers update-slot](/developers/cli_commands/offers/slots/update-slot)                   |
| Updating your provider                     | [providers update](/developers/cli_commands/providers/update)                 |



