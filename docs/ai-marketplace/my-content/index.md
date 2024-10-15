---
id: "my-content"
title: "My Content"
slug: "/my-content"
sidebar_position: 13
---

You can upload AI models and datasets to Super Protocol. This serves two purposes:

- You can add your uploaded models and datasets to orders instead of Marketplace offers.
- If you register a provider, you can create an offer and lease the uploaded model or dataset to other users.

While uploading a file, the system encrypts it and creates a resource JSON file. This resource file contains the information for confidential computing devices on accessing the uploaded model or dataset to use in compute orders.

The functionality related to offers is not implemented yet in the current version of the AI Marketplace.

Web3 users can choose one of two methods of upload:

- **Super Protocol cloud**: Super Protocol's Storj account
- **Your Storj account**: personal Storj account.

images/ai-marketplace-12.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

images/ai-marketplace-13.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

Uploading to a personal Storj:

- Requires [creating and setting up] a Storj account
- Gives sole control over the uploaded content.

Uploading to the Super Protocol cloud:

- Does not require additional setup
- Creates a storage order that requires paying test TEE tokens to keep the uploaded files available (not implemented yet in this version of the Marketplace)
- Uses Super Protocol's Storj account and thus relies on Super Protocol as the storage provider.

Both methods involve encryption of the uploaded files. No unauthorized parties, including the Super Protocol and Storj teams, can access the file contents, regardless of the method.

Demo users are [limited] to the Super Protocol cloud.

images/ai-marketplace-14.png').default} width="400" height="auto" border="1"/>
<br/>

[Files](/ai-marketplace/my-content/files)

[Offers](/ai-marketplace/my-content/offers)