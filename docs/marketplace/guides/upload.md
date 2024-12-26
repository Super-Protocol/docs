---
id: "upload"
title: "How to Upload a Model"
slug: "/guides/upload"
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions for uploading a model to Super Protocol.

## Step 1. Check requirements

Ensure your model meets the following Super Protocol requirements.

### Model category

You model must belong to a category supported by one of the engines:

- **Text Generation Web UI** supports models that involve text-based chats:
  + Text Generation
  + Text Classification
  + Translation
  + Text2Text Generation
- **ComfyUI** supports various image- and video-related tasks:
  + Image Classification
  + Object Detection
  + Image Segmentation
  + Text-to-Image
  + Image-to-Text
  + Image-to-Image
  + Image-to-Video
  + Video Classification
  + Text-to-Video
  + Mask Generation

If your model is from Hugging Face, ensure its _task_ matches one of the supported categories.

<img src={require('../images/hf-task.png').default} width="auto" height="auto" border="1"/>
<br/>

### Model size

The size of your model should not exceed 10 GB; otherwise, deployment may fail. More machines with larger slots to support bigger models will be available in the future.

Note that large models may perform poorly on CPU-only machines without GPU support. If you plan on deploying on CPU, choose a smaller model.

## Step 2. Select files

Model repositories contain multiple files. Often, not all of them are required.

Create a directory for the model files—the model directory. Select files following the instructions for your model format.

If multiple formats are available, choose one of them and remove the others. For example, one of the highlighted sets of files on the following screenshot should be removed:

<img src={require('../images/hf-formats.png').default} width="auto" height="auto" border="1"/>
<br/>

### GGUF and GGML

For models in these formats, the files in the repository usually contain variants of the same model with different quantization. Note that higher-bit quantization means a larger file.

Choose one file and place it in the model directory. For example:

<img src={require('../images/hf-gguf.png').default} width="auto" height="auto" border="1"/>
<br/>

### Safetensors

Place all model files from the repository in the model directory. For example:

<img src={require('../images/hf-safetensors.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 3. Remove duplications

Some repositories contain several variants of the same model. Avoid duplications to reduce upload time. For example, one of the the highlighted files on the following screenshot can be removed:

<img src={require('../images/hf-safetensors-duplicates.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If a single consolidated `model.safetensors` file and multiple `model-xxxxx-of-yyyyy.safetensors` files are available, choose one set and remove the other. For example, one of the highlighted sets of files on the following screenshot should be removed:

<img src={require('../images/hf-safetensors-consolidated.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 4. Create a TAR.GZ archive

Ensure the model directory contains no hidden files and directories. Archive the model directory into a TAR.GZ file using the following instructions:

<Tabs>
  <TabItem value="windows" label="Windows" default>

    On Windows, open PowerShell, navigate to the directory that contains the model directory, and run the following command:

    ```
    tar.exe -czvf <ARCHIVE_FILE> <MODEL_DIRECTORY>
    ```

    - Replace `<ARCHIVE_FILE>` with the desired name of the output archive.
    - Replace `<MODEL_DIRECTORY>` with the name of the model directory.

    For example:

    ```
    tar.exe -czvf my-model.tar.gz my-model
    ```

    Wait for the process to complete; it may take a few minutes.

    Ensure the model directory is at the root of the archive; otherwise, deployment may fail. Run the following command to view the contents of the archive:

    ```
    tar.exe -tzvf <ARCHIVE_FILE>
    ```

    - Replace `<ARCHIVE_FILE>` with the name of the archive.

    Alternatively, install a file archiver like [7-Zip](https://www.7-zip.org/) or similar to create a TAR.GZ archive using a graphical user interface instead of a command line.

  </TabItem>
  <TabItem value="linux" label="Linux">

    On Linux, open a terminal, navigate to the directory that contains the model directory, and run the following command:

    ```
    tar -czvf <ARCHIVE_FILE> <MODEL_DIRECTORY>
    ```

    - Replace `<ARCHIVE_FILE>` with the path and desired name of the output archive.
    - Replace `<MODEL_DIRECTORY>` with the name of the model directory.

    For example:

    ```
    tar -czvf mymodel.tar.gz my-model
    ```

    Wait for the process to complete; it may take a few minutes.
    
    Ensure the model directory is at the root of the archive; otherwise, deployment may fail. Run the following command to view the contents of the archive:

    ```
    tar -tzvf <ARCHIVE_FILE>
    ```

    - Replace `<ARCHIVE_FILE>` with the name of the archive.

  </TabItem>
  <TabItem value="macos" label="macOS">

    On macOS, open the Terminal, navigate to the directory that contains the model directory, and run the following command:

    ```
    tar --no-mac-metadata --no-xattrs -czvf <ARCHIVE_FILE> <MODEL_DIRECTORY>
    ```

    Replace `<ARCHIVE_FILE>` with the path and desired name of the output archive. Replace `<MODEL_DIRECTORY>` with the name of the model directory.

    For example:

    ```
    tar --no-mac-metadata --no-xattrs -czvf mymodel.tar.gz my-model
    ```

    Wait for the process to complete; it may take a few minutes.
    
    Ensure the model directory is at the root of the archive; otherwise, deployment may fail. Run the following command to view the contents of the archive:

    ```
    tar -tzvf <ARCHIVE_FILE>
    ```

    - Replace `<ARCHIVE_FILE>` with the name of the archive.

  </TabItem>
</Tabs>

## Step 5. Upload the archive

In the [Marketplace web app](https://marketplace.superprotocol.com/), go to the **My Files** screen and press the **Upload File** button. 

<img src={require('../images/myfiles-upload.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Fill out the form:

- **Content Name**: type the desired model name. It may be different from the archive name. Providing a meaningful name makes it easier to find the model later.
- **Category**: choose the model category from the drop-down menu. You can only choose one.
- **Engine**: choose compatible engines from the drop-down menu. Select both available options.

<img src={require('../images/upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click **Select tar.gz archive** and select the TAR.GZ archive file.

:::note

Super Protocol has [two options of decentralized storage](/marketplace/account/web3#storage) to upload your model:

- **Super Protocol cloud** is the recommended option selected by default. It does not require a setup or any additional actions.
- **Personal Storj account** is intended for advanced users who want more control. Read [How to Set Up Personal Storage](/marketplace/guides/storage) for step-by-step instructions.

:::

Press **Upload** and wait for the process to complete. Do not close the window until the upload is done and the resource file is created.

<img src={require('../images/upload-content-done.png').default} width="auto" height="auto" border="1"/>
<br/>

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.