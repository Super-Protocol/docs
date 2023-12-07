---
id: "cli_guides"
title: "CLI Guides"
slug: "/cli_guides"
sidebar_position: 6
---

## Overview

Super Protocol has a powerful CLI tool called **SPCTL** (Super Protocol Control). Through this tool you can create and manage orders, providers, keys, workflows, files on external storages, and more. See the full list of commands [here](/developers/cli_commands/).

## Getting Started with SPCTL

To start working with Super Protocol using CLI you'll need to do this sequence of steps:

1. Set up storage access using [this guide](/developers/cli_guides/storages).

2. Download SPCTL [here](/developers/CLI_guides/downloading).

3. Generate private encryption key using [this command](/developers/cli_commands/workflows/generate-key).

4. Set up config.json using [this guide](/developers/cli_guides/configuring).

5. Use [this command](/developers/cli_commands/tokens/request) to receive TEE and MATIC tokens, you will need them to create orders (testnet only). You'll need to repeat this step occasionally to refill your wallet balance.

And you're done! 

## CLI Guides

| **Guide**                                               | **Description**                                                                                                                                                                       |
|:--------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Setting up Storage](/developers/cli_guides/storages)   | Super Protocol uses external decentralized storage networks to store solutions, data and user service files. This guide describes how to set up your personal account with a storage. |
| [Downloading SPCTL](/developers/CLI_guides/downloading) | Guide on downloading SPCTL. |
| [Configuring SPCTL](/developers/cli_guides/configuring) | Guide on setting up your SPCTL with your storage, encryption and Super Protocol infrastructure.                                                                                       |