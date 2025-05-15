---
id: "offer-builder"
title: "Offer Builder"
slug: "/my-offers/offer-builder"
sidebar_position: 2
---

_Offer Builder_ is a tool for uploading models and creating, editing, and publishing <a id="offer"><span className="dashed-underline">offers</span></a>.

To deploy your AI model, you must upload it and create an offer. Newly created offers are unpublished, meaning only you can view them and add them to orders for deployment.

You can deploy a model immediately after uploading it and creating an unpublished offer. Check the guide on how to [Deploy Your Model](/marketplace/guides/deploy-model) for step-by-step instructions.

To make an uploaded model available to other users, you must first configure and publish its offer. Check the guide on how to [Publish an Offer](/marketplace/guides/publish-offer) for step-by-step instructions.

## Files

This tab shows all uploaded files.

<img src={require('../images/offer-builder-files.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

You can navigate the file tree by interacting with folders and the location bar.

To upload additional files, use the **Add Files** button. Note that files and folders will be uploaded to the currently open folder.

To delete a file or a folder, click the **[ ⋮ ]** button next to it.

Offer Builder automatically detects all uploaded model formats and displays them in the right part of the screen.

## Description

This tab contains general information about the offer.

<img src={require('../images/offer-builder-description.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

 It is recommended to complete all the fields before publishing the offer:

- **Content Type**: Only models are currently available in the Marketplace. Support for datasets will be added in future releases.
- **About\***: Offer description with Markdown support. If the model files contain a `README.md` file, the description will be taken from it.
- **Name\***: The offer name. Providing a meaningful name makes it easier to find the model on the Marketplace.
- **Category\***: The tasks for which the model is intended.
- **Engine\***: A <a id="solution"><span className="dashed-underline">solution</span></a> designed to launch AI models, customize parameters, configure workflows, and provide an interface to interact with models. Each engine exists in two variants:
    - GPU-only engines require CPU+GPU <a id="compute"><span className="dashed-underline">compute</span></a> offers.
    - CPU-only engines can run on both CPU-only and CPU+GPU compute offers. However, models work much slower in this mode.
- **Parameters**: Model parameters in millions or billions.
- **License\***: The license under which the model is distributed.
- **Source URL**: A link to the resource with the model files.
- **Languages**: Supported languages.
- **Libraries**: Libraries that the model requires.

Fields required to publish the offer are marked with \*.

## Pricing

This tab contains <a id="requirements"><span className="dashed-underline">requirement slots</span></a> and their prices.

<img src={require('../images/offer-builder-pricing.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

You can configure multiple slots with different requirements and prices based on expected usage—a higher workload typically implies higher pricing.

If your model exists in multiple formats, each format must have at least one slot configured before you can publish the offer. Use the drop-down menu to switch between the model formats.

To support both CPU-only and GPU-only engines, create separate requirement slots.

The **Add Slot** button opens an editable template for a slot that allows you to set the offer requirements:

- **Price**: The price in SPPI tokens for leasing the model and the pricing type:
    - **Fixed**: A one-time payment for each <a id="order"><span className="dashed-underline">order</span></a>, regardless of the lease duration.
    - **Per Hour**: Payment is based on the number of hours the offer is leased.
- **CPU vCores**: Number of virtual CPU cores; can be fractional. Set to `0` to create a slot for GPU-only engines.
- **CPU RAM**: RAM in gigabytes (GB). Set to `0` to create a slot for GPU-only engines.
- **GPU vCores**: Number of virtual GPU cores; can be fractional. Set to `0` to create a slot for CPU-only engines.
- **GPU RAM**: Video RAM in gigabytes (GB). Set to `0` to create a slot for CPU-only engines.
- **Disk**: Disk space in gigabytes (GB).
- **Bandwidth**: Data transfer rate in megabits per second (Mbps).
- **Traffic**: Total required data transfer usage in gigabytes (GB).
- **Min Time** and **Max Time**: Minimum and maximum lease duration limits, as defined by the provider. `0` means no limit.

Use the top-right buttons to save or cancel the slot. You can also duplicate, copy, and paste existing slots to quickly create new ones.

## Offer management

The **Close** button returns you to the [My Offers](/marketplace/my-offers) screen.

The **Save Draft** button saves your current changes without publishing the offer, allowing you to return later and complete the editing.

The **Preview Offer** button opens the [offer window](/marketplace/models/offer) as it will be shown on the Marketplace.

The **Publish Offer** button validates and publishes the offer on the Marketplace. If validation is unsuccessful, you will see yellow indicators marking the fields that need to be configured before the offer can be published.

:::note

Publishing an offer makes the model available to other users for deploying. However, publishing does not provide access to model files. The content of your offer remains encrypted and inaccessible to anyone.

:::

The **Deploy** button adds the offer to an order and redirects you to the Order Builder. Note that you do not have to publish the offer to deploy the model.

The **[ ⋮ ]** button in the top-right corner of the screen allows you to unpublish the offer. Note that offers cannot be completely deleted due to the blockchain immutability. However, unpublished offers do not appear on the Marketplace and cannot be used in orders.