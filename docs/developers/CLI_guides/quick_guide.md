---
id: "quick_guide"
title: "Quick Deployment Guide"
slug: "/cli_guides/quick_guide"
sidebar_position: 2
---

This quick guide will take you step by step through deploying a solution and data on Super Protocol. Its purpose is to introduce you to the logic and sequence of the CLI commands. For more details, refer to the [Deployment Guides](/developers/deployment_guides) and the examples in the descriptions of each command.

## Prepare a solution

### Step 1. Pack a solution

To prepare a solution for the execution inside a Trusted Execution Environment, pack and sign it with [Gramine](https://gramineproject.io/). To do this, run the [`solutions prepare`](/developers/cli_commands/solutions/prepare) command.

It will create a TAR.GZ archive with the solution and a JSON file with essential metadata.

### Step 2. Upload the solution to storage

Run the [`files upload`](/developers/cli_commands/files/upload) command using the TAR.GZ archive from the previous step.

The command will create a resource JSON file with the information for the compute resource on how to access and download the solution.

## Prepare data

### Step 1. Pack data

To prepare data, pack it into a TAR.GZ archive. Run the following command to create the archive:

```
tar -czvf <archiveName> -C <pathToData> .
```

Where
- `<archiveName>`: desired name of the resulting archive
- `<pathToData>`: directory with the data

Do not omit the dot at the end of the command. Ensure no system or hidden files end up in the archive.

For example:

```
tar -czvf archived_data.tar.gz -C ./data .
```

### Step 2. Upload the data to storage

Run the [`files upload`](/developers/cli_commands/files/upload) command using the TAR.GZ archive from the previous step.

The command will create a resource JSON file with the information for the compute resource on how to access and download the data.

## Manage orders

### Step 3. Create an order

Run the [`workflows create`](/developers/cli_commands/workflows/create) using the resource JSON file created in Step 2. When the order is created, you will see the order ID in the terminal output.

It may be more convenient to use the [**Marketplace GUI**](/developers/marketplace/) for this and the following step.

### Step 4. Receive the result

Orders take a few minutes to process. Use the [`orders get`](/developers/cli_commands/orders/get) command to track the progress. When the order status is `Done`, retrieve the result using the [`orders download-result`](/developers/cli_commands/orders/download-result) command.

Certain solutions, such as Tunnel Server, may have the result available earlier. For them, the status `Processing` means they are live and operational. Read more in the [Usage scenarios](Usage scenarios) section.