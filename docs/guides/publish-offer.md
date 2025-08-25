---
id: "publish-offer"
title: "Publish an Offer"
slug: "/publish-offer"
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide provides step-by-step instructions on how to register a provider and publish an AI model on the Marketplace.

## 1. Create a provider

1.1. In the [Marketplace web app](https://marketplace.superprotocol.com/), open your account settings.

<img src={require('../marketplace/images/my-offers-account.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

1.2. Scroll down, type in the desired **Provider Name**, and click **Create Provider**.

<img src={require('../marketplace/images/account-create-provider.png').default} width="auto" height="auto" border="1"/>
<br/>

## 2. Deploy your model

[Deploy Your Model](/guides/deploy-model) to ensure the model runs without issues.

## 3. Configure the offer

The offer you created to deploy your model is unpublished. You need to configure it in the Offer Builder before publishing to the Marketplace.

Go to **My Offers** and open the offer you want to publish. In the **Description** tab, provide additional information about the model. It is recommended that you complete all the fields.

<img src={require('../marketplace/images/offer-builder-description.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- **About\***: Write a general model description; you can use Markdown. If the model files contain a `README.md` file, the description will be taken from it.
- **Name\***: Change the offer name if you like, or leave as is.
- **Category\***: Change the model category if you like, or leave the one you already selected.
- **Engine\***: Change the engine selection if you like, or leave those you already selected.
- **Parameters**: Specify the number of model parameters in millions or billions.
- **License\***: State the license under which the model is distributed.
- **Source URL**: Provide a link to the resource with the model files.
- **Languages**: Select supported languages.
- **Libraries**: Select the libraries that the model requires.

Fields required to publish the offer are marked with \*.

## 4. Create requirement slots

In the **Pricing** tab, click the **Add Slot** button to open an editable template for a <a id="requirements"><span className="dashed-underline">requirement slot</span></a>.

<img src={require('../marketplace/images/offer-builder-pricing.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

You can create and configure multiple slots for each offer.

If the offer supports both GPU-only and CPU-only engines, create at least one slot for each type to enable deployment on both.

<Tabs>
    <TabItem value="gpu" label="To deploy the model on a GPU" default>
        Complete the following fields:

        - **Price**: Set the price in SPPI tokens for leasing the model and select the pricing type:
            - **Fixed**: A one-time payment for each <a id="order"><span className="dashed-underline">order</span></a>, regardless of the lease duration.
            - **Per Hour**: Payment is based on the number of hours the offer is leased.
        - **Disk**: Set the required disk space in gigabytes (GB). It should not be less than the sum of all model files.
        - **GPU RAM**: Set the required video RAM in gigabytes (GB).
        - **Min Time** and **Max Time**: Set the minimum and maximum lease duration limits, as defined by the provider. `0` means no limit.
        - Set all other fields to `0`, including **CPU RAM**.
    </TabItem>
    <TabItem value="cpu" label="To deploy the model on a CPU">
        Complete the following fields:

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

## 5. Publish the offer

Click **Publish Offer** in the bottom-right corner to validate and publish the offer on the Marketplace. If validation is unsuccessful, you will see yellow indicators marking the fields that need to be configured before you can publish the offer.

If you want to unpublish the offer, click the **[ ⋮ ]** button in the top-right corner of the screen. Your unpublished offers do not appear on the Marketplace and can be used only by you. Note that offers cannot be completely deleted due to blockchain immutability.

## Contact Super Protocol

If you face any issues, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.