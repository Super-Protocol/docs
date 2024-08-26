---
id: "upload-content"
title: "Upload Content"
slug: "/upload-content"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The primary purpose of uploading models and datasets is to make them available for creating offers and adding to compute orders. During upload, the system encrypts the file and creates a content resource JSON file. This resource file contains the information for confidential computing devices on accessing the uploaded model or dataset to use in compute orders.

The functionality related to compute orders and offers is not implemented yet.

## Select a storage provider

Web3 users can upload content to their Storj accounts or Super Protocol's Storj account—Super Protocol cloud. Both methods encrypt the uploading files. No unauthorized parties, including the Super Protocol and Storj teams, can access the file contents, regardless of the method.

<img src={require('./images/ai-marketplace-13.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

Demo users are [limited](/ai-marketplace/enter-marketplace#demo-user-account-limitations) to the Super Protocol cloud.

<img src={require('./images/ai-marketplace-14.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

Uploading to a personal Storj:

- Requires [creating and setting up](/ai-marketplace/web3-access#step-4-storj-account) a Storj account
- Gives more control over the uploaded content.

Uploading to the Super Protocol cloud:

- Does not require additional setup
- Creates a storage order that requires paying TEE tokens to keep the uploaded files available (payment is not implemented yet).

## Manage the uploaded content

The [**My Content**](https://beta.marketplace.superprotocol.com/my-content) screen contains the full list of the uploaded files. To show, hide, and rearrange the table columns, open the menu by clicking the cog button.

<img src={require('./images/ai-marketplace-19.png').default} width="800" height="auto" border="1"/>
<br/>
<br/>

To manage the content, open the file menu by clicking the vertical ellipsis button:

- **Info**: check the uploaded content information and download a content resource JSON file with information on accessing the uploaded data for confidential computing devices.
- **Edit**: change the content name and type.
- **Create offer**: create an offer using the uploaded content (not implemented yet).
- **Delete content**: delete the uploaded content.

<img src={require('./images/ai-marketplace-18.png').default} width="800" height="auto" border="1"/>
<br/>

## How to prepare and upload content

Follow these steps to prepare and upload a model or dataset.

### Step 1. Prepare the content

Pack dataset or model into a TAR.GZ archive before uploading to Super Protocol.

<Tabs>
  <TabItem value="windows" label="Windows" default>

    On Windows, open PowerShell or Windows Command Prompt and use the following command to create a TAR.GZ archive:

    ```
    tar.exe -cvzf <offerContentArchivePath> -C <dataPath> *
    ```

    Replace `<offerContentArchive>` with the path and desired name of the output archive. Replace `<dataPath>` with the path to the directory with your data. Ensure no hidden or system files end up in the archive. Do not omit the asterisk `*` at the end of the command.

    For example:

    ```
    tar.exe -czvf C:\SPData\dataset1.tar.gz -C C:\SPData\mydataset *
    ```

    Alternatively, you can install [7-Zip](https://www.7-zip.org/) to create an archive using a graphical interface instead of a command line.

  </TabItem>
  <TabItem value="linux" label="Linux and macOS">

    On Linux and macOS, open a terminal and use the following command to create a TAR.GZ archive:

    ```
    tar -czvf <offerContentArchive> -C <dataPath> .
    ```

    Replace `<offerContentArchive>` with the desired name of the output archive. Replace `<dataPath>` with the relative path to the directory with your data. Ensure no hidden or system files end up in the archive. Do not omit the dot `.` at the end of the command.

    For example:

    ```
    tar -czvf dataset1.tar.gz -C ./mydataset .
    ```

  </TabItem>
</Tabs>

### Step 2. Upload the archive

On the [**My Content**](https://beta.marketplace.dev.superprotocol.com/my-content) screen, press the **Upload Content** button.

<img src={require('./images/ai-marketplace-15.png').default} width="800" height="auto" border="1"/>
<br/>
<br/>

In the **Upload Content** window that appeared:

1. Write any desired **Content Name**.
2. Select the **Content Type**: **Model** or **Dataset**.
3. Press **Select tar.gz archive** and select the archive file with the uploading data.
4. Press **Upload**.

<img src={require('./images/ai-marketplace-16.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

Do not close the window until the upload is complete.

<img src={require('./images/ai-marketplace-17.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>
