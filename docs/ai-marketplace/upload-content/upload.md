---
id: "upload"
title: "How to Upload Content"
slug: "/upload-content/upload"
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to prepare and upload a model or dataset.

### Step 1. Prepare the content

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

### Step 2. Upload the archive

On the [**My Content**](https://beta.marketplace.superprotocol.com/my-content) screen, press the **Upload Content** button.

<img src={require('../images/ai-marketplace-15.png').default} width="800" height="auto" border="1"/>
<br/>
<br/>

In the **Upload Content** window that appeared:

1. Write any desired **Content Name**.
2. Select the **Content Type**: **Model** or **Dataset**.
3. Press **Select tar.gz archive** and select the archive file you want to upload.
4. Press **Upload**.

<img src={require('../images/ai-marketplace-16.png').default} width="400" height="auto" border="1"/>
<br/>
<br/>

Do not close the window until the upload is complete.

<img src={require('../images/ai-marketplace-17.png').default} width="400" height="auto" border="1"/>
<br/>