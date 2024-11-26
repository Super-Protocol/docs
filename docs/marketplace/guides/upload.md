---
id: "upload"
title: "How to Upload a Model"
slug: "/guides/upload"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to upload a model to Super Protocol.

Before uploading, ensure your model fits into current [testnet limitations](/marketplace/limitations):

- The model's file size is less than 10 GB.
- One of the available engines supports your model's category.

## Step 1. Describe your model

In the **My Files** screen, press the **Upload File** button.

<img src={require('../images/myfiles-upload.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Fill out the form in the **Upload Content** window that appears:

- **Content Name**: type the desired model name.
- **Category**: choose the model's category from the drop-down menu.
- **Engine**: choose compatible AI engines from the drop-down menu.

<img src={require('../images/upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 2. Prepare the model

Pack the model's files into a TAR.GZ archive before uploading it.

First, put the model's GGUF or SAFETENSORS files in a separate directory. For the SAFETENSORS format, the model may be a single `model.safetensors` file or multiple `model-xxxxx-of-yyyyy.safetensors` files. Ensure no other files end up in the archive.

<Tabs>
  <TabItem value="windows" label="Windows" default>

    On Windows, open PowerShell or Windows Command Prompt and use the following command to create a TAR.GZ archive:

    ```
    tar.exe -czvf <contentArchivePath> -C <modelPath> *
    ```

    Replace `<contentArchivePath>` with the path and desired name of the output archive. Replace `<modelPath>` with the path to the folder with the model's files. Do not omit the asterisk `*` at the end of the command.

    For example:

    ```
    tar.exe -czvf C:\SPData\mymodel.tar.gz -C C:\SPData\my-model *
    ```

    Wait for the process to complete; it may take a few minutes.

    Alternatively, install a file archiver like [7-Zip](https://www.7-zip.org/) or similar to create a TAR.GZ archive using a graphical user interface instead of a command line.

  </TabItem>
  <TabItem value="linux" label="Linux and macOS">

    On Linux and macOS, open a terminal and use the following command to create a TAR.GZ archive:

    ```
    tar -czvf <contentArchivePath> -C <modelPath> .
    ```

    Replace `<contentArchivePath>` with the path and desired name of the output archive. Replace `<modelPath>` with the relative path to the directory with the model's files. Do not omit the dot `.` at the end of the command.

    For example:

    ```
    tar -czvf my-model.tar.gz -C ./my-model .
    ```

    Wait for the process to complete; it may take a few minutes.

  </TabItem>
</Tabs>

## Step 3. Upload the archive

Back in the **Upload Content** window, click **Select tar.gz archive** and select the TAR.GZ archive file you prepared in the previous step.

Press **Upload** and wait for the process to complete. Do not close the window until the upload is done.

<img src={require('../images/upload-content-done.png').default} width="auto" height="auto" border="1"/>
<br/>