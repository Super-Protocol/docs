---
id: "upload"
title: "How to Upload a Model"
slug: "/guides/upload"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to upload a model to Super Protocol.

## Step 1. Choose a model

Ensure that Super Protocol supports your model. Otherwise, the order may fail.

### Model category

Your uploaded model must be of supported category. Marketplace currently supports two AI engines—solutions that are used to deploy the models.

**Text Generation Web UI** supports models that involve text-based chats. Doesn’t support any type of image generation.

- Text Generation,
- Text Classification,
- Translation,
- Text2Text Generation

**ComfyUI** supports image- and video-related tasks.

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

If you download your model from Hugging Face, ensure that its category (called _task_ in Hugging Face) matches those supported by our AI engines.

<img src={require('../images/hf-task.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

### Model size

Model size must be 10 GB or less.

To deploy correctly, the model must fully fit in the RAM or VRAM. This includes all the model’s files. 

The reason for this limitation is that the slots on the testnet are 10 GB. With more compute availability we will have larger slots to accommodate larger models.

Additionally, note that large models will perform poorly on TDX CPU without GPU support. It’s a good idea to choose smaller models if you plan on deploying on CPU.

## Step 2. Create a TAR.GZ archive

A model must be archived with TAR.GZ before uploading to Super Protocol.

### Select files

**GGUF format**

These are usually quantized, and you only need one file. Pick whichever one you like. Higher quantization usually means a larger file.

You can see an example on the following screenshot:

<img src={require('../images/hf-gguf.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

You can put this file in a folder and archive the folder or just archive the file itself.

**SafeTensors or Bin format**

These model formats must include all the files in the repository.

You can see an example on the following screenshot:

<img src={require('../images/hf-safetensors.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

You need to archive the whole folder with the files.

If the model's files include both a single consolidated `model.safetensors` file and multiple `model-xxxxx-of-yyyyy.safetensors` files, add only one set.

### Add to an archive

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

## Step 3. Upload the model through Marketplace

In the **My Files** screen, press the **Upload File** button. 

<img src={require('../images/myfiles-upload.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Fill out the form in the **Upload Content** window that appears:

**Content Name**: type the desired model name. It may be different from the file name. Providing a meaningful name makes it easier to find the model later.

**Category**: choose the model's category from the drop-down menu. You can only choose one.

**Engine**: choose compatible AI engines from the drop-down menu. Each engine exists in two variants:

- Engines marked as 'GPU only' will run the model on an NVIDIA H100 GPU.
- Engines marked as 'CPU only' will run the model on an Intel TDX CPU.

You can choose both and then decide during order creation how you want to run the model. 

<img src={require('../images/upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>

Click **Select tar.gz archive** and select the TAR.GZ archive file.

Press **Upload** and wait for the process to complete. Do not close the window until the upload is done.

<img src={require('../images/upload-content-done.png').default} width="auto" height="auto" border="1"/>
<br/>