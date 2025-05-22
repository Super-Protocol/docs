---
id: "models"
title: "Models"
slug: "/models"
sidebar_position: 4
---

This screen lists AI models that users <a id="offer"><span className="dashed-underline">offer</span></a> on the Marketplace. You can lease the content listed here by adding it to your <a id="order"><span className="dashed-underline">orders</span></a>.

:::note

Datasets will be available in future versions of the Marketplace.

:::

<img src={require('../images/models-tiles.png').default} width="auto" height="auto" border="1"/>
<br/>

## Offers

To deploy a model, click the blue **Deploy** button next to it.

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

Clicking an offer opens the [**Offer** window](/marketplace/models/offer), which provides further details such as descriptions, <a id="requirements"><span className="dashed-underline">requirement slots</span></a>, and pricing.

## Filters and search

Use the search bar above the list of offers to find an offer by its name or ID.

To clear the search results and set filters to default values, click **Reset filters** on the left side of the screen.

**Offers** filters by the verification status:

- **All**: shows all offers.
- **Verified**: only shows offers that passed the initial check and can be deployed. Note that this status does not mean the model works well; it just indicates that the model can be deployed successfully.
- **Unsorted**: only shows offers that have yet to pass the initial check.

**Category** filters by the type of task that models are designed to perform:

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