---
id: "list"
title: "Models/Datasets"
slug: "/marketplace/list"
sidebar_position: 1
---

This screen lists models or datasets offered on the Marketplace. You can lease the content listed here by adding it to your orders. Read [How to Place an Order](/marketplace/guides/place-order) for step-by-step instructions.

:::note

Datasets are not yet available in the current version of the Marketplace.

:::

<img src={require('../images/models-tiles.png').default} width="auto" height="auto" border="1"/>
<br/>

## Offers

To add a model or dataset to an order, click the blue **[+]** button next to it.

You can view the list as either tiles or a table. The buttons in the top-right corner allow you to sort offers, switch between views, and customize table columns. The same list in the table view:

<img src={require('../images/models-table.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

In the table view, you can see the following columns:

- **ID**: a unique offer identification number. It is incremental and continuous for model offers and dataset offers.
- **Name**: the name of the offer as defined by its provider.
- **Provider**: the name of the provider offering the content.
- **Price, hr**: the hourly rate for leasing the offer.
- **Price, fix**: the fixed price for each use of the offer, regardless of the lease duration.

Clicking an offer opens the [**Offer**](/marketplace/marketplace/offer) window, which provides further details such as descriptions, requirement slots, and pricing.

## Filters

Use the filters on the left side of the screen to narrow down the list and quickly find specific offers.

In the current version of the Marketplace, you can only filter by the category—the type of task that models are designed to perform:

- Image Classification
- Image Segmentation
- Image-to-Image
- Image-to-Text
- Image-to-Video
- Mask Generation
- Object Detection
- Text Classification
- Text Generation
- Text-to-Image
- Text-to-Video
- Text2Text Generation
- Translation
- Video Classification