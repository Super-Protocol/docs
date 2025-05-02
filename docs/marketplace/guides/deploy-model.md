---
id: "deploy-model"
title: "Deploy Your Model"
slug: "/guides/deploy-model"
sidebar_position: 4
---

This guide provides step-by-step instructions on how to upload and deploy an AI model.

:::note

Uploading models is currently available to Web2 users only.

:::

## 1. Create an offer

1.1. In the **My Offers** screen, click the **New Offer** button.

<img src={require('../images/publish-offer-new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

1.2. Complete all the fields in the appearing window.

<img src={require('../images/new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **Name**: Type in the model name. Providing a meaningful name makes it easier to find the model later.
- **Category**: Select the type of task that the model is designed to perform.
- **Engine**: Select compatible engines; it is recommended to select both variants:
    + **GPU-only** engines require CPU+GPU compute offers.
    + **CPU-only** engines can run on both CPU-only and CPU+GPU compute offers. However, models work much slower in this mode.
- **Upload**: Click to upload files or a directory. The selected directory will become the root after upload.

:::note

Due to [Testnet limitations](/marketplace/limitations), the total size of model files should not exceed 13 GB. Support for bigger models will be available in the future.

:::

1.3. Click the **Create Offer** button. Do not close the window until the upload is complete.

## 2. Open the Offer Builder

The created offer is unpublished. You need to configure it in the Offer Builder before publishing to the Marketplace.

To open the offer in the Offer Builder, click **Go to Offer** in the **New Offer** window.

<img src={require('../images/publish-offer-new-offer-go-to-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Or click the **Edit** button next to your offer in the **My Offers** screen.

<img src={require('../images/my-offers-edit.png').default} width="auto" height="auto" border="1"/>
<br/>

## 3. Check the model files

In the **Files** tab, ensure the model format is recognized correctly.

<img src={require('../images/publish-offer-files.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If you need to upload more files related to this model, click the **Add Files** button.

## 4. Deploy the model

Click the **Deploy** button in the bottom-right corner of the screen. This will build an order with your model for a quick deployment.