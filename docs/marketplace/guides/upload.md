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

**Content Name**: type the desired model name. It may be different from the file name. Providing a meaningful name makes it easier to find the model later.

**Category**: choose the model's category from the drop-down menu. If you downloaded your model from Hugging Face, ensure the model's task there matches one of the supported categories.

**Engine**: choose compatible AI engines from the drop-down menu. Each engine exists in two variants:

- Engines marked as 'GPU only' are for models that need an NVIDIA H100 Tensor Core GPU to function correctly. These engines are not compatible with computing devices without an H100.
- Engines marked as 'CPU only' are for models that can operate correctly on computing devices without an NVIDIA H100 Tensor Core GPU. These engines will not utilize the GPU, even if the computing device includes an H100. Note that models running in this mode may work significantly slower. However, due to the expected high demand for the TDX+H100 confidential computing device, launching a model on the TDX confidential computing device may be a suitable way to deploy smaller models.

<img src={require('../images/upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 2. Prepare the model

For models compatible with Text Generation Web UI, put all the files that come with the model in a separate directory.

For models compatible with ComfyUI, put only the files that contain the model itself in a separate directory; do not add other files.

Ensure to exclude duplicates:

- If the model is in several formats, for example, SAFETENSORS and BIN, choose between them.
- If the model's files include several GGUF files for different quantization levels, add only one of them.
- If the model's files include both a single consolidated `model.safetensors` file and multiple `model-xxxxx-of-yyyyy.safetensors` files, add only one set.

<Tabs>
  <TabItem value="windows" label="Windows" default>

    On Windows, open PowerShell or Windows Command Prompt and use the following command to create a TAR.GZ archive:

    ```
    tar.exe -czvf <contentArchivePath> <modelPath>
    ```

    Replace `<contentArchivePath>` with the path and desired name of the output archive. Replace `<modelPath>` with the path to the folder with the model's files.

    For example:

    ```
    tar.exe -czvf C:\SPData\mymodel.tar.gz C:\SPData\my-model
    ```

    Wait for the process to complete; it may take a few minutes.

    Alternatively, install a file archiver like [7-Zip](https://www.7-zip.org/) or similar to create a TAR.GZ archive using a graphical user interface instead of a command line.

  </TabItem>
  <TabItem value="linux" label="Linux and macOS">

    On Linux and macOS, open a terminal and use the following command to create a TAR.GZ archive:

    ```
    tar -czvf <contentArchivePath> <modelPath>
    ```

    Replace `<contentArchivePath>` with the path and desired name of the output archive. Replace `<modelPath>` with the path to the directory with the model's files.

    For example:

    ```
    tar -czvf mymodel.tar.gz ./my-model
    ```

    Wait for the process to complete; it may take a few minutes.

  </TabItem>
</Tabs>

## Step 3. Upload the archive

Back in the **Upload Content** window, click **Select tar.gz archive** and select the TAR.GZ archive file you prepared in the previous step.

Press **Upload** and wait for the process to complete. Do not close the window until the upload is done.

<img src={require('../images/upload-content-done.png').default} width="auto" height="auto" border="1"/>
<br/>