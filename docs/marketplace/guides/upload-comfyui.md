---
id: "upload-comfyui"
title: "Upload a Model (ComfyUI)"
slug: "/guides/upload-comfyui"
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions for uploading a model supported by **ComfyUI** to Super Protocol. If your model is supported by Text Generation Web UI, refer to the [respective guide](/marketplace/guides/upload-tgwui).

To deploy your model in Super Protocol, you need to complete the following steps:

- [Step 1](/marketplace/guides/upload-comfyui#step-1-check-requirements): Ensure it fits the requirements and current limitations.
- [Step 2](/marketplace/guides/upload-comfyui#step-2-create-a-targz-archive): Create a TAR.GZ archive with your model files.
- [Step 3](/marketplace/guides/upload-comfyui#step-3-upload-the-archive): Upload the archive to Super Protocol.

## Step 1. Check requirements

Ensure your model meets the following Super Protocol requirements.

### Model category

You model must belong to a category supported by ComfyUI:

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

If your model is from Hugging Face, ensure its _task_ matches one of the supported categories.

<img src={require('../images/hf-text-to-image.png').default} width="auto" height="auto" border="1"/>
<br/>

### Model size

Due to current [testnet limitations](/marketplace/limitations), the size of your model should not exceed 13 GB; otherwise, deployment may fail. More machines with larger slots to support bigger models will be available in the future.

## Step 2. Create a TAR.GZ archive

You can prepare your model manually or using Docker and a script provided by Super Protocol.

<Tabs>
  <TabItem value="docker" label="Using the script" default>

    Prerequisits:

    - Linux or MacOS. On Windows, use the [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install).
    - [Docker](https://www.docker.com/)
    
    1. Clone the [Super-Protocol/solutions](https://github.com/Super-Protocol/solutions/) GitHub repository to the location of your choosing:

    ```
    git clone https://github.com/Super-Protocol/solutions.git --depth 1
    ```

    If you do not have Git installed, download and extract the [ZIP archive](https://github.com/Super-Protocol/solutions/archive/refs/heads/main.zip) with the repository.

    2. Launch Docker Desktop or otherwise start the Docker daemon.

    3. Go to the ComfyUI directory in the downloaded repository and run the script `start-dev-container.sh` to start a container with ComfyUI.

    If everything is fine, you will see the message `ComfyUI is running!` in the output.

    If you receive the error `bind source path does not exist`, add the repository directory to **File sharing** in the Docker's settings to make it available to the container.

    4. Open http://localhost:8188/ in your browser to access the running ComfyUI if it has not opened automatically.

    5. Load and customize the workflow. Use one of the following methods to add model files to the container:

    **Use a custom node**

    In ComfyUI, open Custom Node Manager and install a custom node to download model files. For example, [ComfyUI Model Downloader](https://github.com/ciri/comfyui-model-downloader) supports downloading models from Hugging Face and CivitAI. Download model files using the installed custom node.

    **Download directly to the container**

    Access the running container with the following command:

    ```
    docker exec -it comfyui bash
    ```

    Go to the `models` directory inside the container and download the model files to the corresponding subdirectories using the `wget` command. For example:

    ```
    wget https://huggingface.co/prompthero/openjourney/resolve/main/mdjrny-v4.safetensors
    ```

    **Copy from your computer**

    If you have the model on your computer, you can copy its files to the container using the following command:

    ```
    docker cp <LOCAL_FILE> comfyui:<CONTAINER_FILE>
    ```

    - Replace `<LOCAL_FILE>` with the path to a file on your computer.
    - Replace `<CONTAINER_FILE>` with the path inside the container.

    For example:

    ```
    docker cp ~/Downloads/openjourney/mdjrny-v4.safetensors comfyui:/opt/ComfyUI/models/checkpoints/mdjrny-v4.safetensors
    ```

    6. When the workflow is ready, save it (Ctrl+S).

    7. Run the script `save-and-stop-dev-container.sh`. Wait until the script is finished, it may take a few minutes. When done, the script will create a TAR.GZ archive file with your workflow and model files in the `solutions/ComfyUI/changeset/` directory. 

  </TabItem>
  <TabItem value="manually" label="Manually">

    1. Create a directory for the model files—the _model directory_.

    2. In this directory, create the following subdirectory structure:

    ```
    user/default/workflows/
    user/default/ComfyUI-Manager/snapshots/
    
    ```
    
    Place your workflow JSON file to `user/default/workflows/` or leave the directory empty to use the ComfyUI's default text-to-image workflow.

    Leave `user/default/ComfyUI-Manager/snapshots/` empty.

    3. If necessary, create additional subdirectories for the model files:

    ```
    models/checkpoints/
    models/clip/
    models/clip_vision/
    models/configs/
    models/controlnet/
    models/diffusers/
    models/diffusion_models/
    models/embeddings/
    models/gligen/
    models/hypernetworks/
    models/loras/
    models/photomaker/
    models/style_models/
    models/text_encoders/
    models/unet/
    models/upscale_models/
    models/vae/
    models/vae_approx/
    ```

    4. If necessary, create an additional subdirectory `custom_nodes` in the root of the model directory for custom nodes.

    5. Check if the subdirectory structure inside the model directory is correct. An example of a correct structure:

    ```
    .
    ├── custom_nodes
    │    └── comfyui-model-downloader
    │          └── ...
    ├── models
    │    └── checkpoints
    │          └── mdjrny-v4.safetensors
    └── user
         └── default
               ├── ComfyUI-Manager
               │    └── snapshots
               └── workflows
                    └── my-openjourney-workflow.json
    ```
    
    6. Run the following command to create a TAR.GZ archive:

    ```
    tar -czvf <ARCHIVE_FILE> -C <MODEL_DIRECTORY_PATH> .
    ```

    - Replace `<ARCHIVE_FILE>` with the path and desired name of the output archive. Do not create the output archive in the model directory.
    - Replace `<MODEL_DIRECTORY_PATH>` with the path to the model directory.
    - Do not omit the dot `.` at the end of the command.

    For example:

    ```
    tar -czvf ~/models/my-model.tar.gz -C ~/models/model_directory/ .
    ```

  </TabItem>
</Tabs>

## Step 3. Upload the archive

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