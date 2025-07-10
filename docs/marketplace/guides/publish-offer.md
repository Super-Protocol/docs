---
id: "publish-offer"
title: "Publish an Offer"
slug: "/guides/publish-offer"
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to register a provider and publish an AI model on the Marketplace.

:::note

Uploading models and creating <a id="offer"><span className="dashed-underline">offers</span></a> are currently available to Web2 users only.

:::

## 1. Create a provider

1.1. In the [Marketplace web app](https://marketplace.superprotocol.com/), open your account settings.

<img src={require('../images/my-offers-account.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

1.2. Scroll down, type in the desired **Provider Name**, and click **Create Provider**.

<img src={require('../images/account-create-provider.png').default} width="auto" height="auto" border="1"/>
<br/>

## 2. Create an offer

2.1. In the **My Offers** screen, click the **New Offer** button.

<img src={require('../images/my-offers-new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

2.2. Complete all the fields in the appearing window.

<img src={require('../images/new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **Name**: Type in the model name. Providing a meaningful name makes it easier to find the offer on the Marketplace.
- **Category**: Select the type of task that the model is designed to perform.
- **Engine**: Select compatible <a id="engine"><span className="dashed-underline">engines</span></a>; it is recommended to select both variants:
    - **GPU-only** engines require CPU+GPU <a id="compute"><span className="dashed-underline">compute</span></a> offers.
    - **CPU-only** engines can run on both CPU-only and CPU+GPU compute offers. However, models work much slower in this mode.
- **Upload**: Click to upload files or a directory. The selected directory will become the root after upload.

:::note

Due to [Testnet limitations](/marketplace/limitations), the total size of the model files should not exceed 13 GB. Support for bigger models will be available in the future.

:::

1.3. Click the **Create Offer** button. Do not close the window until the upload is complete. This may take a few minutes.

## 3. Open the Offer Builder

The created offer is unpublished. You need to configure it in the Offer Builder before publishing to the Marketplace.

To open the offer in the Offer Builder, click **Go to Offer** in the **New Offer** window.

<img src={require('../images/new-offer-go-to-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Alternatively, click the **Edit** button next to the offer in the **My Offers** screen.

<img src={require('../images/my-offers-edit.png').default} width="auto" height="auto" border="1"/>
<br/>

## 4. Check the model files

In the **Files** tab, ensure the model formats are recognized correctly.

<img src={require('../images/offer-builder-format.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If you need to upload more files related to this model, click the **Add Files** button.

## 5. Provide the offer description

In the **Description** tab, provide information about the offer. It is recommended that you complete all the fields.

<img src={require('../images/offer-builder-description.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **About\***: Write a general model description. This field supports Markdown. If the model files contain a `README.md` file, the description will be taken from it.
- **Name\***: Change the offer name if you like or leave the name you gave during the offer creation.
- **Category\***: Change the model category if you like or leave the one you selected during the offer creation.
- **Engine\***: Change the engine selection if you like or leave those you selected during the offer creation. 
- **Parameters**: Specify the number of model parameters in millions or billions.
- **License\***: State the license under which the model is distributed.
- **Source URL**: Provide a link to the resource with the model files.
- **Languages**: Select supported languages.
- **Libraries**: Select the libraries that the model requires.

Fields required to publish the offer are marked with \*.

## 6. Create requirement slots

In the **Pricing** tab, click the **Add Slot** button to open an editable template for a <a id="requirements"><span className="dashed-underline">requirement slot</span></a>.

<img src={require('../images/offer-builder-pricing.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

You can create and configure multiple slots for each offer.

If the offer supports both GPU-only and CPU-only engines, create at least one slot for each type to enable deployment on both.

<Tabs>
    <TabItem value="gpu" label="To deploy the model on GPU" default>
        Complete the following fieds:

        - **Price**: Set the price in SPPI tokens for leasing the model and select the pricing type:
            - **Fixed**: A one-time payment for each <a id="order"><span className="dashed-underline">order</span></a>, regardless of the lease duration.
            - **Per Hour**: Payment is based on the number of hours the offer is leased.
        - **Disk**: Set the required disk space in gigabytes (GB). It should not be less than the sum of all model files.
        - **GPU RAM**: Set the required video RAM in gigabytes (GB).
        - **Min Time** and **Max Time**: Set the minimum and maximum lease duration limits, as defined by the provider. `0` means no limit.
        - Set all other fields to `0`, including **CPU RAM**.
    </TabItem>
    <TabItem value="cpu" label="To deploy the model on CPU">
        Complete the following fieds:

        - **Price**: Set the price in SPPI tokens for leasing the model and select the pricing type:
            - **Fixed**: A one-time payment for each <a id="order"><span className="dashed-underline">order</span></a>, regardless of the lease duration.
            - **Per Hour**: Payment is based on the number of hours the offer is leased.
        - **Disk**: Set the required disk space in gigabytes (GB). It should not be less than the sum of all model files.
        - **CPU RAM**: Set the required RAM in gigabytes (GB).
        - **Min Time** and **Max Time**: Set the minimum and maximum lease duration limits, as defined by the provider. `0` means no limit.
        - Set all other fields to `0`, including **GPU RAM**.
    </TabItem>
</Tabs>

Click **Save** to create a slot.

If the uploaded model exists in several formats, create requirement slots for each of them.

## 7. Publish the offer

Click **Publish Offer** in the bottom-right corner to validate and publish the offer on the Marketplace. If validation is unsuccessful, you will see yellow indicators marking the fields that need to be configured before the offer can be published.

If you want to unpublish the offer, click the **[ ⋮ ]** button in the top-right corner of the screen. Note that offers cannot be completely deleted due to the blockchain immutability. However, unpublished offers do not appear on the Marketplace and cannot be used in orders.

## Contact Super Protocol

If you face any issues, contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.