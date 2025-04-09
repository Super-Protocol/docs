---
id: "upload-tgwui"
title: "Upload a Model (TGWUI)"
slug: "/guides/upload-tgwui"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions for uploading a model supported by **Text Generation Web UI** to Super Protocol. If your model is supported by ComfyUI, refer to the [respective guide](/marketplace/guides/upload-comfyui).

To deploy your model in Super Protocol, you need to complete the following steps:

- [Step 1](/marketplace/guides/upload-tgwui#step-1-check-requirements): Ensure it fits the requirements and current limitations.
- [Step 2](/marketplace/guides/upload-tgwui#step-2-select-files): Prepare the model files.
- [Step 3](/marketplace/guides/upload-tgwui#step-3-create-a-targz-archive): Create a TAR.GZ archive with your model files.
- [Step 4](/marketplace/guides/upload-tgwui#step-4-upload-the-archive): Upload the archive to Super Protocol.

## Step 1. Check requirements

Ensure your model meets the following Super Protocol requirements.

### Model category

You model must belong to a category supported by Text Generation Web UI:

- Text Generation
- Text Classification
- Translation
- Text2Text Generation

If your model is from Hugging Face, ensure its _task_ matches one of the supported categories.

<img src={require('../images/hf-text-generation.png').default} width="auto" height="auto" border="1"/>
<br/>

### Model size

Due to current [testnet limitations](/marketplace/limitations), the size of your model should not exceed 13 GB; otherwise, deployment may fail. More machines with larger slots to support bigger models will be available in the future.

## Step 2. Select files

Model repositories contain multiple files. Not all of them are required.

Create a directory for the model files—the _model directory_. Select files following the instructions for your model format and place them to the model directory.

If multiple formats are available, choose one of them and do not include the others. For example, only one of the highlighted sets of files on the following screenshot should be selected:

<img src={require('../images/hf-formats.png').default} width="auto" height="auto" border="1"/>
<br/>

### GGUF and GGML

For models in these formats, the files in the repository usually contain variants of the same model with different quantization. Note that higher-bit quantization leads to better model responses but a larger model file.

Choose one file and place it in the model directory. For example:

<img src={require('../images/hf-gguf.png').default} width="auto" height="auto" border="1"/>
<br/>

### Safetensors

Place all model files from the repository in the model directory, except the hidden .git directory and the .gitattributes file. For example:

<img src={require('../images/hf-safetensors.png').default} width="auto" height="auto" border="1"/>
<br/>

Some repositories contain several variants of the same model. Avoid duplications to reduce upload time.

If a single consolidated `model.safetensors` file and multiple `model-xxxxx-of-yyyyy.safetensors` files are available, choose one set and do not include the other. For example, one of the highlighted sets of files on the following screenshot should be removed:

<img src={require('../images/hf-safetensors-consolidated.png').default} width="auto" height="auto" border="1"/>
<br/>

## Step 3. Create a TAR.GZ archive

Ensure the model directory contains no hidden files and directories. Archive the model directory into a TAR.GZ file using the following instructions:

<Tabs>
  <TabItem value="windows" label="Windows" default>

    1. On Windows, open PowerShell, go to the directory that contains the model directory, and run the following command to create a TAR.GZ archive:

    ```
    tar.exe -czvf <ARCHIVE_FILE> <MODEL_DIRECTORY>
    ```

    - Replace `<ARCHIVE_FILE>` with the desired name of the output archive.
    - Replace `<MODEL_DIRECTORY>` with the name of the model directory.

    For example:

    ```
    tar.exe -czvf my-model.tar.gz my-model
    ```

    2. Wait for the process to complete; it may take a few minutes.

    3. Ensure the model directory is at the root of the archive; otherwise, deployment may fail. Run the following command to view the contents of the archive:

    ```
    tar.exe -tzvf <ARCHIVE_FILE>
    ```

    - Replace `<ARCHIVE_FILE>` with the name of the archive.

    An example of a **correct** directory structure inside the archive:

    ```
    my-model\
    my-model\tokenizer_config.json
    my-model\added_tokens.json
    my-model\model.safetensors
    my-model\special_tokens_map.json
    my-model\tokenizer.json
    my-model\generation_config.json
    my-model\config.json
    ```

    An example of an **incorrect** directory structure inside the archive:

    ```
    Downloads\models\my-model\
    Downloads\models\my-model\tokenizer_config.json
    Downloads\models\my-model\added_tokens.json
    Downloads\models\my-model\model.safetensors
    Downloads\models\my-model\special_tokens_map.json
    Downloads\models\my-model\tokenizer.json
    Downloads\models\my-model\generation_config.json
    Downloads\models\my-model\config.json
    ```

  </TabItem>
  <TabItem value="linux" label="Linux">

    1. On Linux, open a terminal, navigate to the directory that contains the model directory, and run the following command to create a TAR.GZ archive:

    ```
    tar -czvf <ARCHIVE_FILE> <MODEL_DIRECTORY>
    ```

    - Replace `<ARCHIVE_FILE>` with the path and desired name of the output archive.
    - Replace `<MODEL_DIRECTORY>` with the name of the model directory.

    For example:

    ```
    tar -czvf mymodel.tar.gz my-model
    ```

    2. Wait for the process to complete; it may take a few minutes.
    
    3. Ensure the model directory is at the root of the archive; otherwise, deployment may fail. Run the following command to view the contents of the archive:

    ```
    tar -tzvf <ARCHIVE_FILE>
    ```  

    - Replace `<ARCHIVE_FILE>` with the name of the archive.

    An example of a **correct** directory structure inside the archive:

    ```
    my-model/
    my-model/tokenizer_config.json
    my-model/added_tokens.json
    my-model/model.safetensors
    my-model/special_tokens_map.json
    my-model/tokenizer.json
    my-model/generation_config.json
    my-model/config.json
    ```

    An example of an **incorrect** directory structure inside the archive:

    ```
    Downloads/models/my-model/
    Downloads/models/my-model/tokenizer_config.json
    Downloads/models/my-model/added_tokens.json
    Downloads/models/my-model/model.safetensors
    Downloads/models/my-model/special_tokens_map.json
    Downloads/models/my-model/tokenizer.json
    Downloads/models/my-model/generation_config.json
    Downloads/models/my-model/config.json
    ```

  </TabItem>
  <TabItem value="macos" label="macOS">

    1. On macOS, open the Terminal, navigate to the directory that contains the model directory, and run the following command to create a TAR.GZ archive:

    ```
    tar --no-mac-metadata --no-xattrs -czvf <ARCHIVE_FILE> <MODEL_DIRECTORY>
    ```

    - Replace `<ARCHIVE_FILE>` with the path and desired name of the output archive.
    - Replace `<MODEL_DIRECTORY>` with the name of the model directory.

    For example:

    ```
    tar --no-mac-metadata --no-xattrs -czvf mymodel.tar.gz my-model
    ```

    2. Wait for the process to complete; it may take a few minutes.
    
    3. Ensure the model directory is at the root of the archive; otherwise, deployment may fail. Run the following command to view the contents of the archive:

    ```
    tar -tzvf <ARCHIVE_FILE>
    ```

    - Replace `<ARCHIVE_FILE>` with the name of the archive.

    An example of a **correct** directory structure inside the archive:

    ```
    my-model/
    my-model/tokenizer_config.json
    my-model/added_tokens.json
    my-model/model.safetensors
    my-model/special_tokens_map.json
    my-model/tokenizer.json
    my-model/generation_config.json
    my-model/config.json
    ```

    An example of an **incorrect** directory structure inside the archive:

    ```
    Downloads/models/my-model/
    Downloads/models/my-model/tokenizer_config.json
    Downloads/models/my-model/added_tokens.json
    Downloads/models/my-model/model.safetensors
    Downloads/models/my-model/special_tokens_map.json
    Downloads/models/my-model/tokenizer.json
    Downloads/models/my-model/generation_config.json
    Downloads/models/my-model/config.json
    ```

  </TabItem>
</Tabs>

## Step 4. Upload the archive

In the [Marketplace web app](https://marketplace.superprotocol.com/), go to the **My Files** screen and press the **Upload File** button. 

<img src={require('../images/my-content-upload.png').default} width="auto" height="auto" border="1"/>
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