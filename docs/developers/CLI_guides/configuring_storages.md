---
id: "cli_storages"
title: "Setting up Storage"
slug: "/cli_guides/storages"
sidebar_position: 1

---

## Introduction

In order to use SPCTL you will need an external storage account.

Super Protocol uses external storages for three main purposes:

* Storing your own solutions and data files pre-deployment as well as neccessary service files (such as auth tokens);
* Storing your order results;
* Storing content for solution and data offers from the marketplace.

All stored data is encrypted.

## Creating account on Storj

We plan on integrating a wide selection of decentralized storages, but for the purposes of testnet we only support Storj, a Web3 storage.

First, you will need to [set up an account](https://www.storj.io/) with Storj. It's free.

## Creating a Bucket

Second, you will need to create a bucket. Buckets are your containers that store objects on Storj. Your solutions, data, service files and results will be uploaded here. 

Use [this guide](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/) to create a new bucket. 

Remember to **save your passphrase** in order to avoid losing access to your data.

## Creating Access Grants

Third, you will need to create access grants. An Access Grant is a bearer token that enables applications to interact with Storj DCS to access objects stored on the service and decrypt them client-side. 

Grants must be related to the same bucket that was created earlier. When creating access grants, use the **same passphrase** you used for the bucket.

Use [this guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/) to create two access grants:
- With *write* permission. It will be used to upload your encrypted data and solutions to the bucket. 
- With *read* permission. It will be used by Compute providers to download your encrypted data and solutions. 

