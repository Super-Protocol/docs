---
id: "deploy-model"
title: "Deploy Your Model"
slug: "/deploy-model"
sidebar_position: 3
---

This guide provides step-by-step instructions for uploading and deploying an AI model.

:::note

Uploading models and creating <a id="offer"><span className="dashed-underline">offers</span></a> are currently available to Web2 users only.

:::

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

## 2. Upload

2.1. Open **My Offers** and click the **New Offer** button.

<img src={require('../marketplace/images/my-offers-new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.2. Complete all fields in the appearing window.

<img src={require('../marketplace/images/new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **Name**: Type in the model name. Providing a meaningful name makes it easier to find the model later.
- **Category**: Select the type of task that the model is designed to perform.
- **Engine**: Select compatible <a id="engine"><span className="dashed-underline">engines</span></a>; it is recommended to select both variants:
    - **GPU-only** engines require CPU+GPU <a id="compute"><span className="dashed-underline">compute</span></a> offers.
    - **CPU-only** engines can run on both CPU-only and CPU+GPU compute offers. However, models work much slower in this mode.
- **Upload**: Click to upload files or a directory. The selected directory will become the root after upload.

2.3. Click **Create Offer**. Do not close the window until the upload is complete. This may take a few minutes.

2.4. When the upload is complete, close the window or click **Go to Offer** to open the offer in the [Offer Builder](/marketplace/my-offers/offer-builder).

<img src={require('../marketplace/images/new-offer-go-to-offer.png').default} width="auto" height="auto" border="1"/>
<br/>

## 3. Deploy

3.1. Click the **Deploy** button next to your offer in the My Offers screen or the bottom-right corner of the Offer Builder. You will be redirected to the [Order Builder](/marketplace/order-builder) with a preconfigured <a id="order"><span className="dashed-underline">order</span></a> for a quick deployment.

3.2. In the Order Builder, review and modify the order if necessary. Click **Pay Now** to place the order.

<img src={require('../marketplace/images/order-builder-pay-now.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

3.3. When the order is created, you will be redirected to the [Order](/marketplace/all-orders/order) screen. Wait until the deployment is ready. It may take 15-45 minutes, depending on the model size and other factors.

<img src={require('../marketplace/images/order-processing.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

3.4. When your order is ready, you will see the **Deployed** status and an **Access Link** to your model's interface.

<img src={require('../marketplace/images/order-deployed-online.png').default} width="auto" height="auto" border="1"/>

## Contact Super Protocol

If you face any issues, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.