---
id: "guide-upload"
title: "How to Upload Content"
slug: "/guides/guide-upload"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to prepare and [upload](/ai-marketplace/my-content) an AI model or dataset to Super Protocol. 

## Step 1. Prepare the content

Pack the content into a TAR.GZ archive before uploading it to Super Protocol.

<Tabs>
  <TabItem value="windows" label="Windows" default>

    On Windows, open PowerShell or Windows Command Prompt and use the following command to create a TAR.GZ archive:

    ```
    tar.exe -czvf <contentArchivePath> -C <dataPath> *
    ```

    Replace `<contentArchivePath>` with the path and desired name of the output archive. Replace `<dataPath>` with the path to the directory with the data. Ensure no hidden or system files end up in the archive. Do not omit the asterisk `*` at the end of the command.

    For example:

    ```
    tar.exe -czvf C:\SPData\dataset1.tar.gz -C C:\SPData\mydataset *
    ```

    Alternatively, install [7-Zip](https://www.7-zip.org/) to create an archive using a graphical interface instead of a command line.

  </TabItem>
  <TabItem value="linux" label="Linux and macOS">

    On Linux and macOS, open a terminal and use the following command to create a TAR.GZ archive:

    ```
    tar -czvf <contentArchivePath> -C <dataPath> .
    ```

    Replace `<contentArchivePath>` with the path and desired name of the output archive. Replace `<dataPath>` with the relative path to the directory with the data. Ensure no hidden or system files end up in the archive. Do not omit the dot `.` at the end of the command.

    For example:

    ```
    tar -czvf dataset1.tar.gz -C ./mydataset .
    ```

  </TabItem>
</Tabs>

## Step 2. Select a storage provider

Web3 users can [Select a storage](/ai-marketplace/account#select-a-storage) to upload files to:

- _Super Protocol cloud_: Super Protocol's Storj account.
- _Your Storj account_: your personal Storj account.

Demo users can only upload to the Super Protocol cloud.

## Step 3. Set up Storj

This step is only for Web3 users who use a personal Storj account to upload files. If you want to use Super Protocol cloud instead, skip this step and go to [Step 4](/ai-marketplace/guides/guide-upload#step-4-upload-the-archive).

### Register a Storj account

Register a [Storj](https://www.storj.io/) account if you do not have one yet. Both free Trial and Pro Storj accounts are suitable. However, with a Trial account, your files will become unavailable after the end of the trial period.

In the Storj dashboard, create a new project and a bucket. Refer to the [Storj documentation](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/) for instructions.

Then, create two S3 Access Keys for this bucket. One should provide the **Write** and **Delete** permissions, and the other—the **Read** and **List** permissions. Alternatively, create a single key with **Full Access** (or **All permissions**). Refer to the [Storj documentation](https://storj.dev/dcs/getting-started#generate-s3-compatible-credentials) to generate S3 credentials.

S3 Credentials is a pair of keys:
- Access Key that should look something like this: `jv7ke2msvqkyxffywr3qmc47ibxa`
- Secret Key that should look something like this: `jzbf5fgqz56nlun2jhttpjoiapmowvbeuarpzeqb2t2wiivij3jvg`.

Добавить про четыре ключа всего, расписать подробнее

### Add to the Marketplace account

In the Marketplace web app, click on your account address in the top-right corner and select **Account**.

(images/ai-marketplace-12.png').default} width="400" height="auto" border="1"/>)
<br/>
<br/>

Select the **Your Storj account** radio button, fill in the fields, and press **Save**.

(images/ai-marketplace-13.png').default} width="400" height="auto" border="1"/>)
<br/>
<br/>

| **Field** | **Value** |
| :- | :- |
| Bucket | Name of the Storj bucket |
| Path | Path to the directory in the bucket; it can be empty |
| WriteAccessKeyId | Access Key with the **Write** and **Delete** permissions |
| WriteSecretAccessKey | Secret Key with the **Write** and **Delete** permissions |
| ReadAccessKeyId | Access Key with the **Read** and **List** permissions |
| ReadSecretAccessKey | Secret Key with the **Read** and **List** permissions |

## Step 4. Upload the archive

On the [**My Content**](https://beta.marketplace.superprotocol.com/my-content) screen, press the **Upload Content** button.

(images/ai-marketplace-15.png').default} width="800" height="auto" border="1"/>)
<br/>
<br/>

Fill out the form in the [pop-up window](/ai-marketplace/my-content/my-files/upload-content).

(images/ai-marketplace-16.png').default} width="400" height="auto" border="1"/>)
<br/>
<br/>

- **Content Name**: type any desired name.
- **Content Type**: select whether you are uploading a model or a dataset.
- **Category**: choose the content categories from the drop-down menu.
- **Engine**: choose compatible AI engines from the drop-down menu.
- **Upload file**: click **Select tar.gz archive** and select the TAR.GZ archive file you have prepared in [Step 1](/ai-marketplace/guides/guide-upload#step-1-upload-the-archive).

Press **Upload** and wait for the process to complete. Do not close the window until the upload is done.

(images/ai-marketplace-17.png').default} width="400" height="auto" border="1"/>)
<br/>