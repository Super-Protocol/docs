---
id: "guide-upload"
title: "How to Upload Content"
slug: "/guides/guide-upload"
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to prepare and upload a model or dataset.

## Step 1. Select a storage

[Select a storage](/ai-marketplace/my-content)

### Set up personal storage

This step is optional—you can use Super Protocol as a [storage provider] instead of personal storage.

#### Register and set up Storj

Register a [Storj](https://www.storj.io/) account if you do not have one yet. Both free Trial and Pro Storj accounts are suitable. However, with a Trial account, your files will become unavailable after the end of the trial period.

Create a new project and a bucket. Refer to the [Storj documentation](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/).

Create two S3 Access Keys for this bucket. One should provide the **Write** and **Delete** permissions, and the other one the **Read** and **List** permissions. Alternatively, you can create a single key with **Full Access** (**All permissions**). Refer to the [Storj documentation](https://storj.dev/dcs/getting-started#generate-s3-compatible-credentials) to generate S3 credentials.

#### Add to the Marketplace account

In the Marketplace web app, click on your account address in the top-right corner and select **Account**.

images/ai-marketplace-12.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

Select the **Your Storj account** radio button, fill in the fields, and press **Save**.

| **Field** | **Value** |
| :- | :- |
| Bucket | Name of the Storj bucket |
| Path | Path to the directory in the bucket; it can be empty |
| WriteAccessKeyId | Access Key with the **Write** and **Delete** permissions |
| WriteSecretAccessKey | Secret Key with the **Write** and **Delete** permissions |
| ReadAccessKeyId | Access Key with the **Read** and **List** permissions |
| ReadSecretAccessKey | Secret Key with the **Read** and **List** permissions |

images/ai-marketplace-13.png').default} width="400" height="auto" border="1"/>
<br/>

## Step 1. Prepare the content

Pack a dataset or model into a TAR.GZ archive before uploading it to Super Protocol.

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

## Select a provider

...

## Step 2. Upload the archive

On the [**My Content**](https://beta.marketplace.superprotocol.com/my-content) screen, press the **Upload Content** button.

images/ai-marketplace-15.png').default} width="800" height="auto" border="1"/>
<br/>
<br/>

Fill in all the fields in the pop-up window.

images/ai-marketplace-16.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

1. **Content Name**: write any desired name.  
2. **Content Type**: select the type of content you are uploading.  
3. **Engine**: choose compatible AI engines from the drop-down menu.  
4. **Category**: choose compatible categories from the drop-down menu.  
5. **Requirements**: specify the requirements of the AI model or dataset now or later. If you decide to do it now, fill in all the fields:  
    + **CPU vCores**: number of CPUs, can be fractional  
    + **CPU  RAM, GB**: RAM in gigabytes  
    + **GPU vCore**: number of GPUs, can be fractional  
    + **GPU  RAM, GB**: VRAM in gigabytes  
    + **Disk, GB**: disk space in gigabytes  
    + **Bandwidth, Mbps**: required bandwidth in megabits per second  
    + **Traffic, GB**: required traffic in gigabytes  
    + **Ext.Port**: external port availability  
6. **Upload file**: press **Select tar.gz archive** and select the archive file you want to upload.  
7. Press **Upload**.

Wait and do not close the window until the upload is complete.

images/ai-marketplace-17.png').default} width="400" height="auto" border="1"/>
<br/>