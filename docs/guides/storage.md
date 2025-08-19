---
id: "storage"
title: "Set Up Personal Storage"
slug: "/storage"
sidebar_position: 6
---

This guide provides step-by-step instructions on how to set up your personal Storj account.

The guide is intended for advanced Web3 users; feel free to skip it and continue using the default recommended option—**Super Protocol cloud**. Read about [types of storage](/marketplace/account/web3#storage).

<img src={require('../marketplace/images/web3-account.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Web2 users must first [log in as a Web3 user](/guides/log-in) to be able to upload to a personal Storj account instead of the Super Protocol cloud.

## Step 1. Register a Storj account

If you don't already have a [Storj](https://www.storj.io/) account, register one. Both free Trial and Pro accounts are suitable. Note that with a Trial account, your files will become inaccessible once the trial period ends.

## Step 2. Create a project and bucket

[Log in](https://www.storj.io/login) to your Storj account dashboard and create a new project and a bucket. Refer to the Storj documentation for instructions on how to [create a project](https://storj.dev/support/projects) and [create a bucket](https://storj.dev/support/object-browser#configure-object-browser-access).

## Step 3. Generate S3 Access Keys

In the Storj dashboard, generate two S3 Access Keys for the bucket. Refer to the [Storj documentation](https://storj.dev/dcs/getting-started#generate-s3-compatible-credentials) to learn how to do it.

Assign **Read** permission to one key. Assign **Full** permission (**Read**, **List**, **Write**, and **Delete**) to the other key. Note that each S3 Access Key comes with a corresponding Secret Key:

- Example Access Key: `jv7ke2m5vqkyxffywr3qmc47ibxa`.
- Example Secret Key: `jzbf5fgqz56nlun2jht7pjoiapmowvb3uarpzeqb2t2wiivij3jvg`.

As a result, you should have two pairs Access Key + Secret Key.

## Step 4. Set up your Super Protocol Web3 account

Open the [Marketplace web app](https://marketplace.superprotocol.com/). Log in as a Web3 user and open the **Account** window.

<img src={require('../marketplace/images/marketplace-mm-account-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Select the **Your Storj account** radio button, fill in the fields, and click **Save**.

| **Field**            | **Value** |
| :- | :- |
| Bucket               | Name of the Storj bucket. |
| Path                 | Path to a directory inside the bucket; it can be empty. |
| S3 Access Key (Full) | Access Key with **Full** permission. |
| S3 Secret Key (Full) | Secret Key with **Full** permission. |
| S3 Access Key (Read) | Access Key with **Read** permission. |
| S3 Secret Key (Read) | Secret Key with **Read** permissions. |

<img src={require('../marketplace/images/web3-storage.png').default} width="auto" height="auto" border="1"/>
<br/>

## Contact Super Protocol

If you face any issues, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.
