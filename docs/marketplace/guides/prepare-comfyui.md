---
id: "prepare-comfyui"
title: "Prepare a ComfyUI Workflow"
slug: "/guides/prepare-comfyui"
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions for preparing a **ComfyUI** workflow with custom nodes before uploading it . You cannot upload custom nodes directly to the deployed ComfyUI for security reasons.

:::note

Due to [testnet limitations](/marketplace/limitations), the total size of model files should not exceed 13 GB. Support for bigger models will be available in the future.

:::

You can prepare your model, workflow, and custom node files manually or using Docker and a script provided by Super Protocol.

<Tabs>
  <TabItem value="docker" label="Using the script" default>

    Prerequisites:

    - Linux or MacOS. On Windows, use the [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install).
    - [Docker](https://www.docker.com/)
    
    1. Clone the [Super-Protocol/solutions](https://github.com/Super-Protocol/solutions/) GitHub repository to the location of your choosing:

    ```
    git clone https://github.com/Super-Protocol/solutions.git --depth 1
    ```

    Alternatively, download and extract a [ZIP archive](https://github.com/Super-Protocol/solutions/archive/refs/heads/main.zip) with the repository.

    2. Launch Docker Desktop or otherwise start the Docker daemon.

    3. Go to the ComfyUI directory in the downloaded repository and run the script `start-dev-container.sh` to start a container with ComfyUI. If this is the first run, Docker will pull the image from the remote registry. This may take a few minutes.

    If you receive the error `bind source path does not exist`, add the repository directory to **File sharing** in the Docker's settings to make it available to the container.

    When the script is done, you will see the message `ComfyUI is running!` in the output.

    4. Open http://localhost:8188/ in your browser to access the running ComfyUI if it has not opened automatically.

    5. Load and customize the workflow. Use the following methods to add model files to the container:

    **Use a downloader**

    In ComfyUI, open **Custom Node Manager** and install a custom node to download model files. For example, [ComfyUI Model Downloader](https://github.com/ciri/comfyui-model-downloader) supports downloading models from Hugging Face and CivitAI. Download model files using the installed node.

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

    If you have the model on your computer, copy its files to the container using the following command:

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

    7. Run the script `save-and-stop-dev-container.sh`. Wait until the script is finished; this may take a few minutes. When done, the script will create a TAR.GZ archive file with your workflow and model files in the `solutions/ComfyUI/changeset/` directory.

    8. Unpack the archive using the following command:

    ```
    tar -xvzf snapshot.tar.gz -C <MODEL_DIRECTORY>
    ```
    
    - Replace `<MODEL_DIRECTORY>` with the name of the output directory.

    The output directory is ready for [upload](/marketplace/guides/deploy-model#2-upload) to Super Protocol.

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

    4. Create an additional subdirectory `custom_nodes` in the root of the model directory and place the node directories there.

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
    
    The model directory is ready for [upload](/marketplace/guides/deploy-model#2-upload) to Super Protocol.

  </TabItem>
</Tabs>

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.