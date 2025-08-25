---
id: "deploy-model"
title: "Deploy Your Model"
slug: "/deploy-model"
sidebar_position: 3
---

This guide provides step-by-step instructions for uploading and deploying an AI model on Super Protocol.

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

If you plan to deploy a ComfyUI workflow with custom nodes, [prepare the files](/guides/prepare-comfyui) before uploading. For security reasons, you cannot upload custom nodes directly to a deployed ComfyUI.

1.2. Due to [testnet limitations](/marketplace/limitations), the total size of model files should not exceed 13 GB. Support for bigger models will be available in the future.

## 2. Create an offer

To deploy your model, you need to create a new <a id="offer"><span className="dashed-underline">offer</span></a> and upload model files. This offer will remain private and unavailable to other users until you [publish it](/guides/publish-offer).

2.1. Open **My Offers** and click **New Offer**.

<img src={require('../marketplace/images/my-offers-new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.2. Type in the model name and click **Create Offer**.

<img src={require('../marketplace/images/new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.3. In the Offer Builder, select the model's **Category** and **Engine**.

Engines exist in two variants; select both if you are not sure:

- **GPU-only** to run models with GPU support; it requires CPU+GPU compute offers.
- **CPU-only** to run models without GPU support. Note that models work significantly slower in this mode, especially big ones.

<img src={require('../marketplace/images/offer-builder-category-engine.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.4. Open the **Content** tab and click **Upload Content**.

<img src={require('../marketplace/images/offer-builder-upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.5. Select the model files or folder and click **Upload**.

<img src={require('../marketplace/images/upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.6. Wait until the upload is complete and close the **Upload Content** window.

## 3. Deploy

3.1. In the Offer Builder, click **Deploy**. You will be redirected to the Order Builder with a preconfigured <a id="order"><span className="dashed-underline">order</span></a> for a quick deployment.

<img src={require('../marketplace/images/offer-builder-deploy.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

3.2. In the Order Builder, review and modify the order if necessary. Click **Pay Now** to place your order.

<img src={require('../marketplace/images/order-builder-pay-now.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

3.3. When the order is created, you will be redirected to the Order screen. Wait until the deployment is ready. It may take 15-45 minutes, depending on the model size and other factors.

<img src={require('../marketplace/images/order-processing.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

3.4. When your order is ready, you will see the **Deployed** status and an **Access Link** to your model's interface.

<img src={require('../marketplace/images/order-deployed-online.png').default} width="auto" height="auto" border="1"/>

## Contact Super Protocol

If you face any issues, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.