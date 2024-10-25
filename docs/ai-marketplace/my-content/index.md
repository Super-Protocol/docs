---
id: "my-content"
title: "My Content"
slug: "/my-content"
sidebar_position: 5
---

You can upload AI models and datasets to Super Protocol. This serves two purposes:

- You can add your uploaded models and datasets to orders instead of Marketplace offers.
- Registered providers can create offers from the uploaded files and lease the uploaded model or dataset to other users.

While uploading a file, the system encrypts it and creates a resource JSON file. This resource file contains information for confidential computing devices on how to access the uploaded model or dataset to use in compute orders.

The functionality related to offers has not yet been implemented in the current version of the AI Marketplace.

## Select a storage provider

**Web3 users** can choose one of two upload methods in the [**Web3 Account**](/ai-marketplace/account/web3) window.

(images/ai-marketplace-13.png').default} width="400" height="auto" border="1"/>)
<br/>
<br/>

- _Super Protocol cloud_: Super Protocol's Storj account.
- _Your Storj account_: your personal Storj account.

Uploading to a personal Storj:

- Requires [creating and setting up](/ai-marketplace/guides/guide-upload) a Storj account
- Gives sole control over the uploaded content.

Uploading to the Super Protocol cloud:

- Does not require additional setup
- Requires paying test TEE tokens to keep the uploaded files available (not implemented yet in this version of the Marketplace)
- Uses Super Protocol's Storj account and thus relies on Super Protocol as the storage provider.

Both methods involve encryption of the uploaded files. No unauthorized parties, including the Super Protocol and Storj teams, can access the file contents, regardless of the method.

**Demo users** are [limited](/ai-marketplace/account/demo#demo-mode-limitations) to the Super Protocol cloud.

(images/ai-marketplace-14.png').default} width="400" height="auto" border="1"/>)
<br/>

## Table of contents

| **Document** | **Description** |
| :- | :- |
| [My Files](/ai-marketplace/my-content/my-files) | The **My Files** screen displays the list of your uploaded files. |
| - [Upload Content](/ai-marketplace/my-content/my-files/upload-content) | The **Upload Content** window allows uploading files to Super Protocol. |
| - [Info](/ai-marketplace/my-content/my-files/info) | The **Info** window displays the information about an uploaded file. |
| - [Edit Content](/ai-marketplace/my-content/my-files/upload-content) | The **Edit Content** window allows editing the information about an uploaded file. |
| - [Delete Content](/ai-marketplace/my-content/my-files/delete-content) | The **Delete Content** window confirms the uploaded file deletion. |
| [My Offers](/ai-marketplace/my-content/my-offers) | The **My Offers** screen displays the list of your offers. |