---
id: "upload"
title: "How to Upload a Model"
slug: "/guides/upload"
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to upload a model to Super Protocol.

## Step 1. Choose a model

Your model must fit into the Super Protocol requirements. Otherwise, the order may fail.

### Model category

Your model must be of a supported category. To deploy models, Super Protocol provides two solutions called _engines_.

**Text Generation Web UI** supports models that involve text-based chats. It does not support any type of image generation.

- Text Generation
- Text Classification
- Translation
- Text2Text Generation

**ComfyUI** supports various image- and video-related tasks.

- Image Classification
- Object Detection
- Image Segmentation
- Text-to-Image
- Image-to-Text
- Image-to-Image
- Image-to-Video
- Video Classification
- Text-to-Video
- Mask Generation

If you download your model from Hugging Face, ensure that one of the engines supports its category (called _task_ in Hugging Face).

<img src={require('../images/hf-task.png').default} width="auto" height="auto" border="1"/>
<br/>

### Model size

Your model must be 10 GB or less.

To ensure proper deployment, all model files must fit entirely within the available RAM or VRAM. On the testnet, compute configuration slots are currently limited to 10 GB. Larger slots to support bigger models will come in the future with more compute availability.

Additionally, large models will perform poorly on TDX CPU without GPU support. If you plan on deploying on CPU, choose a smaller model.

## Step 2. Create a TAR.GZ archive

Prepare the model files and archive them to the TAR.GZ format.

### Prepare files

#### GGUF format

Models in the GGUF formats are quantized, and you only need one file. Pick whichever one you like and put it in a separate directory. Note that higher-bit quantization means a larger file.

For example:

<img src={require('../images/hf-gguf.png').default} width="auto" height="auto" border="1"/>
<br/>

#### GGML format

Models in the GGML formal are quantized as well. You need only one model file along with all other non-model files in the directory. For example:

<img src={require('../images/hf-ggml.png').default} width="auto" height="auto" border="1"/>
<br/>

#### Safetensors and BIN formats

Models in the Safetensors format must include all the files available in the repository.

Sometimes, the model files include both a single consolidated `model.safetensors` file and multiple `model-xxxxx-of-yyyyy.safetensors` files. For example:

<img src={require('../images/hf-safetensors.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Include only one set along with all other files. Do not add the consolidated file and multiple parts of the same model simultaneously.

Also, the model files on Hugging Face may include the model in multiple formats. For example:

<img src={require('../images/hf-formats.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Similarly, choose only one format and remove the other.

### Archive the files

When your model along with necessary files is in a separate folder, put it into a TAR.GZ archive.

<Tabs>
  <TabItem value="windows" label="Windows" default>

    On Windows, open PowerShell or Windows Command Prompt and use the following command

    ```
    tar.exe -czvf <contentArchivePath> <modelPath>
    ```

    Replace `<contentArchivePath>` with the path and desired name of the output archive. Replace `<modelPath>` with the path to the folder with the model files.

    For example:

    ```
    tar.exe -czvf C:\SPData\mymodel.tar.gz C:\SPData\my-model
    ```

    Wait for the process to complete; it may take a few minutes.

    Alternatively, install a file archiver like [7-Zip](https://www.7-zip.org/) or similar to create a TAR.GZ archive using a graphical user interface instead of a command line.

  </TabItem>
  <TabItem value="linux" label="Linux and macOS">

    On Linux and macOS, open a terminal and use the following command:

    ```
    tar -czvf <contentArchivePath> <modelPath>
    ```

    Replace `<contentArchivePath>` with the path and desired name of the output archive. Replace `<modelPath>` with the path to the directory with the model files.

    For example:

    ```
    tar -czvf mymodel.tar.gz ./my-model
    ```

    Wait for the process to complete; it may take a few minutes.

  </TabItem>
</Tabs>

## Step 3. Upload the archive

In the **My Files** screen, press the **Upload File** button. 

<img src={require('../images/myfiles-upload.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Fill out the form in the **Upload Content** window that appears.

**Content Name**: type the desired model name. It may be different from the file name. Providing a meaningful name makes it easier to find the model later.

**Category**: choose the model category from the drop-down menu. You can only choose one.

**Engine**: choose compatible engines from the drop-down menu. Each engine exists in two variants:

- Engines marked as 'GPU only' run the model on an NVIDIA H100 Tensor Core GPU.
- Engines marked as 'CPU only' run the model on an Intel TDX CPU.

It is recommended to choose both and then decide how you want to run the model during order creation.

<img src={require('../images/upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>

Click **Select tar.gz archive** and select the TAR.GZ archive file.

:::note

Super Protocol has [two options of decentralized storage](/marketplace/account/web3#storage) to upload your model:

- **Super Protocol cloud** is the recommended option selected by default. It does not require a setup or any additional actions.
- **Personal Storj account** is intended for advanced users. Read [How to Set Up Storage](/marketplace/guides/storage) for step-by-step instructions.

:::

Press **Upload** and wait for the process to complete. Do not close the window until the upload is done.

<img src={require('../images/upload-content-done.png').default} width="auto" height="auto" border="1"/>
<br/>

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistan