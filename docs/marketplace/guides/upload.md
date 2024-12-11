---
id: "upload"
title: "How to Upload a Model"
slug: "/guides/upload"
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions for uploading a model to Super Protocol.

## Step 1. Requirements for models

Ensure your model meets the Super Protocol requirements. Otherwise, the order may fail.

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

The total size of your model files must not exceed 10 GB; otherwise, deployment may fail. Larger slots to support bigger models will be available in the future.

Note that large models perform poorly on TDX CPU without GPU support. If you plan on deploying on CPU, choose a smaller model.

## Step 2. Select files

Models consist of multiple files. Usually, not all of them are required. Select files following the instructions for your model's format.

### GGUF format

For models in this format, the files in the repository usually contain variants of the same model with different quantization. Note that higher-bit quantization means a larger file.

Choose one GGUF file and place it in a separate directory. For example:

<img src={require('../images/hf-gguf.png').default} width="auto" height="auto" border="1"/>
<br/>

### GGML format

Models in the GGML formal are quantized as well.

Choose one BIN and all other files and place them in a separate directory. For example:

<img src={require('../images/hf-ggml.png').default} width="auto" height="auto" border="1"/>
<br/>

### Safetensors formats

Place all files from the repository into a separate directory.

Ensure to avoid duplications. If a single consolidated `model.safetensors` file and multiple `model-xxxxx-of-yyyyy.safetensors` files are available, select one set and remove the other. For example:

<img src={require('../images/hf-safetensors-consolidated.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If multiple formats are available, select one format and remove the others. For example:

<img src={require('../images/hf-formats.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 3. Create a TAR.GZ archive

Archive the directory with the model files into a TAR.GZ file using the following instructions:

<Tabs>
  <TabItem value="windows" label="Windows" default>

    On Windows, open PowerShell or Windows Command Prompt and run the following command:

    ```
    tar.exe -czvf <ARCHIVE_PATH> <MODEL_PATH>
    ```

    Replace `<ARCHIVE_PATH>` with the path and desired name of the output archive. Replace `<MODEL_PATH>` with the path to the folder with the model files.

    For example:

    ```
    tar.exe -czvf C:\SPData\mymodel.tar.gz C:\SPData\my-model
    ```

    Wait for the process to complete; it may take a few minutes.

    Alternatively, install a file archiver like [7-Zip](https://www.7-zip.org/) or similar to create a TAR.GZ archive using a graphical user interface instead of a command line.

  </TabItem>
  <TabItem value="linux" label="Linux and macOS">

    On Linux and macOS, open a terminal and run the following command:

    ```
    tar -czvf <ARCHIVE_PATH> <MODEL_PATH>
    ```

    Replace `<ARCHIVE_PATH>` with the path and desired name of the output archive. Replace `<MODEL_PATH>` with the path to the directory with the model files.

    For example:

    ```
    tar -czvf mymodel.tar.gz ./my-model
    ```

    Wait for the process to complete; it may take a few minutes.

  </TabItem>
</Tabs>

## Step 4. Upload the archive

In the [Marketplace web app](https://marketplace.superprotocol.com/), go to the **My Files** screen and press the **Upload File** button. 

<img src={require('../images/myfiles-upload.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Fill out the form:

- **Content Name**: type the desired model name. It may be different from the file name. Providing a meaningful name makes it easier to find the model later.
- **Category**: choose the model category from the drop-down menu. You can only choose one.
- **Engine**: choose compatible engines from the drop-down menu. It is recommended to choose both and then decide how you want to run the model during order creation:
  + Engines marked as 'GPU only' run the model on an NVIDIA H100 Tensor Core GPU.
  + Engines marked as 'CPU only' run the model on an Intel TDX CPU.

<img src={require('../images/upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>

Click **Select tar.gz archive** and select the TAR.GZ archive file.

:::note

Super Protocol has [two options of decentralized storage](/marketplace/account/web3#storage) to upload your model:

- **Super Protocol cloud** is the recommended option selected by default. It does not require a setup or any additional actions.
- **Personal Storj account** is intended for advanced users who want more control. Read [How to Set Up Personal Storage](/marketplace/guides/storage) for step-by-step instructions.

:::

Press **Upload** and wait for the process to complete. Do not close the window until the upload is done.

<img src={require('../images/upload-content-done.png').default} width="auto" height="auto" border="1"/>
<br/>

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.