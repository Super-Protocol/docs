---
id: "tgwui"
title: "TGWUI and ComfyUI With Tunnels"
slug: "/guides/solutions/tgwui"
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions for uploading and deploying an AI model on Super Protocol using Text Generation Web UI and ComfyUI, both already available in the Marketplace. However, the general workflow described here can be applied to any solution, whether new or existing.

## Prerequisites

- [SPCTL](https://docs.develop.superprotocol.com/cli/)
- BNB and SPPI tokens (opBNB) to pay for transactions and orders

## 1. Prepare

Ensure your model meets the Super Protocol requirements:

1.1. Your model must belong to a category supported by one of the <a id="engine"><span className="dashed-underline">engines</span></a>.

**Text Generation Web UI**:

- Text Generation
- Text Classification
- Translation
- Text2Text Generation

**ComfyUI**:

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

If you plan to deploy a ComfyUI workflow with custom nodes, [prepare the files](/cli/guides/solutions/comfyui) before proceeding to the next step. For security reasons, you cannot upload custom nodes directly to a deployed ComfyUI.

1.2. Due to [testnet limitations](/marketplace/limitations), the total size of model files should not exceed 13 GB. Support for bigger models will be available in the future.

## 2. Upload the model

Upload the model:

```shell
./spctl files upload <MODEL_DIR> \
  --output model.resource.json \
  --use-addon
```

Replace `<MODEL_DIR>` with the path to the dataset directory, for example:

```shell
./spctl files upload ~/Downloads/models/SmolLM2-1.7B \
  --output model.resource.json \
  --use-addon
```

## 3. Deploy tunnels

3.1. Place an order to deploy a [confidential tunnel](/fundamentals/tunnels):

```shell
./spctl workflows create --tee 7 --solution 19
```

3.2. Wait for the order to be created, and find the tunnel order ID in the output, for example:

```text
Workflow was created, TEE order id: ["273899"]
```

3.3. Check the order status:

```shell
./spctl orders get <ORDER_ID>
```

Replace `<ORDER_ID>` with the tunnel order ID from the previous step.

3.4. When the status is `Done`, download the result:

```shell
./spctl orders download-result <ORDER_ID>
```

3.5. Extract the downloaded `result.tar.gz`, open `output/result.json`, and find the domain address. For example:

```json title="result.json"
"domain":"pret-tons-wade.superprotocol.io"
```

Your model's web UI will be available at this address.

## 4. Prepare engine configuration files

4.1. Open the SPCTL's `config.json` and find the `workflow.resultEncryption.key` property that contains the key used for decrypting workflow results; for example: `NapSrwQRz2tL9ZftJbi6DATpCDn0BRImpSStU9xZT/s=`.

4.2.
<Tabs>
    <TabItem value="tgwui" label="TGWUI" default>
        Create a file named `engine-configuration-tgwui.json` and paste the following:

        ```json title="engine-configuration-tgwui.json"
        {
            "engine": {
                "main_settings": {
                    "character": {
                        "name": "Superprotocol AI",
                        "context": "The following is a conversation with an AI Large Language Model. The AI has been trained to answer questions, provide recommendations, and help with decision making. The AI follows user requests. The AI thinks outside the box.",
                        "greeting": "How can I help you today?"
                    },
                    "api": {},
                    "mode": {}
                },
                "model": {
                    "parameters": {
                        "temperature": 1,
                        "top_p": 1,
                        "top_k": 0,
                        "typical_p": 1
                    },
                    "parameters2": {
                        "min_p": 0.05,
                        "repetition_penalty": 1,
                        "frequency_penalty": 0,
                        "presence_penalty": 0
                    }
                },
                "model_loader": {
                    "loader_name": "Autodetect"
                }
            },
            "tunnels": {
                "domain_settings": {
                    "provision_type": "Temporary Domain (on *.superprotocol.io)",
                    "tunnel_provisioner_order": {
                        "order_id": "",
                        "order_key": ""
                    }
                }
            }
        }
        ```
    </TabItem>
    <TabItem value="comfyui" label="ComfyUI" default>
        Create a file named `engine-configuration-comfyui.json` and paste the following:

        ```json title="engine-configuration-comfyui.json"
        {
            "engine": {
                "main_settings": {
                    "preview_method": "none",
                    "preview_size": 512
                }
            },
            "tunnels": {
                "domain_settings": {
                    "provision_type": "Temporary Domain (on *.superprotocol.io)",
                    "tunnel_provisioner_order": {
                        "order_id": "",
                        "order_key": ""
                    }
                }
            }
        }
        ```
    </TabItem>
</Tabs>

In `tunnels.domain_settings.tunnel_provisioner_order`, set:

- `order_id` to your tunnel order ID from Step 3.2
- `order_key` to your encryption key from Step 4.1

Save and close the file.

## 5. Deploy the model

5.1.
<Tabs>
    <TabItem value="tgwui" label="TGWUI" default>
        Create the main order to deploy your uploaded model:

        ```shell
        ./spctl workflows create --tee <COMPUTE_OFFER> --solution 25 --solution-configuration ./engine-configuration-tgwui.json --data ./model.resource.json
        ```

        Replace `<COMPUTE_OFFER>` with a selected compute offer. See available compute offer IDs on the [Marketplace](https://marketplace.superprotocol.com/).

        Note that `--solution 25` refers to [Text Generation Web UI with GPU support](https://marketplace.superprotocol.com/marketplace/models?offer=offerId%3D25). If you need the CPU version, use `--solution 26` instead.
    </TabItem>
    <TabItem value="comfyui" label="ComfyUI" default>
        Create the main order to deploy your uploaded model:

        ```shell
        ./spctl workflows create --tee <COMPUTE_OFFER> --solution 27 --solution-configuration ./engine-configuration-comfyui.json --data ./model.resource.json
        ```

        Replace `<COMPUTE_OFFER>` with a selected compute offer. See available compute offer IDs on the [Marketplace](https://marketplace.superprotocol.com/).

        Note that `--solution 27` refers to [ComfyUI UI with GPU support](https://marketplace.superprotocol.com/marketplace/models?offer=offerId%3D27). If you need the CPU version, use `--solution 28` instead.
    </TabItem>
</Tabs>

5.2. Wait for the order to be created, and find the main order ID in the output, for example:

```text
Workflow was created, TEE order id: ["273900"]
```

5.3. Deployment may take 15-20 minutes or more, depending on the model size and other parameters. Check the domain from Step 3.5 every few minutes until the UI is available.

If you suspect something went wrong, check the order status:

```shell
./spctl orders get <MAIN_ORDER_ID>
```

Replace `<MAIN_ORDER_ID>` with the main order ID from the previous step.

The most important statuses (see the [full list](/fundamentals/orders#compute-order)):

- **Processing**: The compute is executing the order inside a TEE. Your model is either already available or will be available soon.
- **In Queue**: The order is waiting for the compute to become available. This status appears only if the compute is overloaded with orders. If this status persists for a few minutes, place a new main order the same tunnel order and engine configuration but another compute offer.
- **Done**: The order is completed successfully and the model's UI is no longer available.
- **Error**: The order completed with an error. [Download the order results](/cli/commands/orders/download-result) to get more information about the error.