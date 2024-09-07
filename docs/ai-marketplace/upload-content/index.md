---
id: "upload-content"
title: "Upload and Manage Content"
slug: "/upload-content"
sidebar_position: 3
---

The primary purpose of uploading models and datasets is to make them available for creating offers and adding to compute orders. While uploading a file, the system encrypts it and creates a resource JSON file. This resource file contains the information for confidential computing devices on accessing the uploaded model or dataset to use in compute orders.

The functionality related to orders and offers is not implemented yet in this version of the Marketplace.

## Select a storage provider

[Web3 users](/ai-marketplace/enter-marketplace) can choose a storage provider on the **Account** screen:

<img src={require('../images/ai-marketplace-12.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

Two available methods of upload are

- **Super Protocol cloud**: Super Protocol's Storj account
- **Your Storj account**: personal Storj account.

<img src={require('../images/ai-marketplace-13.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

Uploading to a personal Storj:

- Requires [creating and setting up](/ai-marketplace/enter-marketplace/web3-access#step-4-set-up-personal-storage) a Storj account
- Gives sole control over the uploaded content.

Uploading to the Super Protocol cloud:

- Does not require additional setup
- Creates a storage order that requires paying test TEE tokens to keep the uploaded files available (not implemented yet in this version of the Marketplace)
- Uses Super Protocol's Storj account and thus relies on Super Protocol as the storage provider.

Both methods involve encryption of the uploaded files. No unauthorized parties, including the Super Protocol and Storj teams, can access the file contents, regardless of the method.

Demo users are [limited](/ai-marketplace/enter-marketplace/demo) to the Super Protocol cloud.

<img src={require('../images/ai-marketplace-14.png').default} width="400" height="auto" border="1"/>
<br/>