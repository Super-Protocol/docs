---
id: "storage"
title: "How to Set Up Storage"
slug: "/guides/storage"
sidebar_position: 4
---

This guide provides step-by-step instructions on how to set up your personal Storj account.

The guide is intended for advanced Web3 users; feel free to skip it and continue using the default recommended option—**Super Protocol cloud**. Learn more about [types of storage](/marketplace/account/web3#storage).

<img src={require('../images/web3acc-storage.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Demo users must first [log in as a Web3 user](/marketplace/guides/log-in) to be able to upload to a personal Storj account instead of the Super Protocol cloud.

## Step 1. Register a Storj account

If you don't already have a [Storj](https://www.storj.io/) account, register one. Both free Trial and Pro accounts are suitable. However, with a Trial account, your files will become inaccessible once the trial period ends.

## Step 2. Create a project and bucket

Log in to your Storj account dashboard and create a new project and a bucket. Refer to the Storj documentation for instructions on how to [create a project](https://storj.dev/support/projects) and [create a bucket](https://storj.dev/support/object-browser#configure-object-browser-access).

## Step 3. Generate S3 Access Keys

In the Storj dashboard, generate two S3 Access Keys for the bucket. Assign **Write** and **Delete** permissions to one key. Assign **Read** and **List** permissions to the other key. Note that each S3 Access Key comes with a corresponding Secret Key:

- Example Access Key: `jv7ke2m5vqkyxffywr3qmc47ibxa`.
- Example Secret Key: `jzbf5fgqz56nlun2jht7pjoiapmowvb3uarpzeqb2t2wiivij3jvg`.

As a result, you should have two pairs Access Key + Secret Key. Refer to the Storj documentation to learn how to [generate S3 Access Keys](https://storj.dev/dcs/getting-started#generate-s3-compatible-credentials).

## Step 4. Set up your Super Protocol Web3 account

Open the [Marketplace web app](https://marketplace.superprotocol.com/). Log in as a Web3 user and open the **Account** window.

<img src={require('../images/marketplace-web3acc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Select the **Your Storj account** radio button, fill in the fields, and click **Save**.

| **Field** | **Value** |
| :- | :- |
| Bucket | Name of the Storj bucket |
| Path | Path to a directory inside the bucket; it can be empty |
| WriteAccessKeyId | Access Key with **Write** and **Delete** permissions |
| WriteSecretAccessKey | Secret Key with **Write** and **Delete** permissions |
| ReadAccessKeyId | Access Key with **Read** and **List** permissions |
| ReadSecretAccessKey | Secret Key with **Read** and **List** permissions |

<img src={require('../images/web3acc-storj.png').default} width="auto" height="auto" border="1"/>
<br/>

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.
