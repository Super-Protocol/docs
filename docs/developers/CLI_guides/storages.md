---
id: "cli_storages"
title: "Setting up Storages"
slug: "/cli_guides/storages"
sidebar_position: 5

---

## Introduction

At the moment only [STORJ](/developers/cli_guides/storages) is supported as an external storage solution for Super Protocol. More options will be available in the future.

Storj is a decentralized storage solution with free and paid offerings available. Before you can start using it for your encrypted solutions and data, you need to create an account at [storj.io](https://www.storj.io/).

## Creating a Bucket

Create a new bucket using [this guide](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/). Remember to save your passphrase to avoid loosing your data.

Bucket name is used in CLI [config file](/developers/cli_guides/configuring) (`bucket` parameter in `storage` section). 

## Creating Access Grants

Use [this guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/) to create 2 access grants:
- With `write` permission. This one is used to upload your encrypted data and solutions to the bucket. 
- With `read` permission. This one is used by TEE providers to access your encrypted data and solutions. 

Both derived tokens are used in CLI [config file](/developers/cli_guides/setup) (`writeAccessToken` and `readAccessToken` parameters in `storage` section).

:::caution
Both grants must affect the same bucket that was created earlier. When creating access grants, use the same passphrase you used for the bucket.
:::