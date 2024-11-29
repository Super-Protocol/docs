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

## Step 1. Set up Storj

Register a [Storj](https://www.storj.io/) account if you do not have one yet. Both free Trial and Pro Storj accounts are suitable. However, with a Trial account, your files will become unavailable after the end of the trial period.

In the Storj account dashboard, create a new project and a bucket. Refer to the Storj documentation for instructions on how to [create a project](https://storj.dev/support/projects) and [create a buckets](https://storj.dev/support/object-browser#configure-object-browser-access).

In the same Storj account dashboard, create two S3 Access Keys for this bucket. Creating an Access Key also generates a Secret Key:

- Access Key should look something like this: `jv7ke2m5vqkyxffywr3qmc47ibxa`.
- Secret Key should look something like this: `jzbf5fgqz56nlun2jht7pjoiapmowvb3uarpzeqb2t2wiivij3jvg`.

One S3 Access Key should provide the **Write** and **Delete** permissions. The other one should provide the **Read** and **List** permissions. As a result, you should have two Access Keys and two Secret Keys. Refer to the Storj documentation to learn how to [generate S3 Access Keys](https://storj.dev/dcs/getting-started#generate-s3-compatible-credentials).

## Step 2. Set up your Web3 account

In the Marketplace web app, open the **Account** window.

<img src={require('../images/marketplace-web3acc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Select the **Your Storj account** radio button, fill in the fields, and click **Save**.

| **Field** | **Value** |
| :- | :- |
| Bucket | Name of the Storj bucket |
| Path | Path to a directory inside the bucket; it can be empty |
| WriteAccessKeyId | Access Key with the **Write** and **Delete** permissions |
| WriteSecretAccessKey | Secret Key with the **Write** and **Delete** permissions |
| ReadAccessKeyId | Access Key with the **Read** and **List** permissions |
| ReadSecretAccessKey | Secret Key with the **Read** and **List** permissions |

<img src={require('../images/web3acc-storj.png').default} width="auto" height="auto" border="1"/>
<br/>

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.
