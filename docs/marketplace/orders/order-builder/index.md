---
id: "order-builder"
title: "Order Builder"
slug: "/orders/order-builder"
sidebar_position: 1
---

Order Builder is a tool to configure orders from the main components:

- **Models**
- **Datasets**
- **Engine**
- **Compute**

<img src={require('../../images/order-builder-empty.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Read [How to Place an Order](/marketplace/guides/place-order) for step-by-step instructions.

## Order Type

Super Protocol supports two types of orders:

- **Fine-tune** is an order to customize a pre-trained model for a specific purpose by creating an additional layer. This type of order performs a computation and generates a result. Once the order is complete, you can download the result as a file.
- **Deploy** is an order to run a pre-trained model with a web interface. The model is accessible from the internet via secure [confidential tunnels](/fundamentals/tunnels) deployed automatically by a separate order. The model continues to run as long as the order balance remains positive, without a set end time.

:::note

Fine-tune orders are not yet available in the current version of the Marketplace.

:::

## Model

A pre-trained AI model is a mandatory component for both types of orders. You can lease a model from the **Marketplace**, or you can add your uploaded model from **My Content**.

To add a model to the order, click the blue **[+]** button next to it.

Clicking the model's name opens the [**Offer**](/marketplace/marketplace/offer) window. It provides a detailed description and pricing. Your uploaded models do not have such window, and they do not have a price.

To view the model's requirement slot, expand the **Requirements**. If an offer has multiple requirement slots, then the **[+]** and **Requirements** buttons will open the **Pricing** tab within the model's **Offer** window. There, you can find the full list of the model's requirement slots.

If you add your uploaded model, a yellow warning icon will appear. 

<img src={require('../../images/model-warning.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

It indicates that the requirements of the model are not specified. The system will not include the model in the automatic calculation of the compute configuration because it doesn't know how much resources it needs to run.

:::warning

Ensure your uploaded model fits into the total maximum compute configuration allowed for the testnet. Refer to the [Testnet Limitations](/marketplace/limitations).

:::

## Datasets

A dataset can be any data the model works with. For example, a dataset for fine-tuning a model or a file with a new layer for Deploy orders.

Dataset is a mandatory component for Fine-tune orders, but optional for Deploy orders.

:::note

Datasets are not yet available in the current version of the Marketplace.

:::

## Engine

The engine is required to launch a model and provide a web UI.

At the moment, Marketplace supports two AI engines:

- Text Generation Web UI for text-to-text models.
- ComfyUI for image- and video-related tasks.

The Super Protocol team will add more popular open-source AI engines in the future. Currently, user-uploaded engines are not allowed as they may have built-in vulnerabilities.

To add an engine to the order, click the blue **[+]** button next to it. If a yellow warning icon appears, it indicates that the selected engine is incompatible with a selected model.

Once you add an engine, its configuration will open.

<img src={require('../../images/order-builder-engine-settings.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The **Engine** tab contains the main settings specific for every engine. Only make changes if you are confident in what you are doing, as modifying these settings can cause the model to function incorrectly. For more information about the settings, refer to the documentation for [Text Generation Web UI](https://github.com/oobabooga/text-generation-webui/wiki) and [ComfyUI](https://docs.comfy.org/).

For orders using tunnels, the engine settings will include the **Tunnels** tab with **Domain Settings**:

- **Temporary Domain** uses pre-configured settings to create a domain on `superprotocol.io` with a randomly generated name, for example, `mund-avys-kefs.superprotocol.io`. It is the recommended option that does not require additional setup.
- **Manual Configuration** will allow advanced users to host a model on a custom domain. This feature is not yet available in the current version of the Marketplace.

## Compute

The term _compute_ refers to a confidential computing device that processes the order.

The system automatically calculates a compute configuration that meets or exceeds the combined requirements of the models, datasets, and engine added to the order. To add a compute to the order, click the blue **[+]** button next to it.

:::warning

The requirements of your uploaded models are not specified. The system will not include such a model in the automatic calculation of the compute configuration because it doesn't know how much resources it needs to run.

Ensure your model fits into the total maximum compute configuration allowed for the testnet. Refer to the [Testnet Limitations](/marketplace/limitations).

:::

Learn more about [requirements and configurations](/fundamentals/slots).

## Checkout

The panel at the bottom of the screen displays the total prices of the offers added to the order.

**Fixed** is the total for all fixed-price offers. You will pay this sum immediately after placing the order.

**Per Hour** is the total for all hourly-priced offers. This sum will be gradually deducted from the order deposit for each hour the order is running.

**Lease Time** is the duration in hours for which you plan to run the order. Increasing the lease time raises the initial deposit amount. For Fine-tune orders, ensure the lease time is sufficient to complete the computation. For Deploy orders, this is the duration for which the model will remain running and available.

**Pay now** is the initial order deposit you must pay at checkout. It is calculated using the formula: **Fixed** + (**Per Hour** * **Lease Time**). You can increase the deposit now by increasing the **Lease Time** or after checkout while the order is processing.

The **Checkout** button opens the [**Confirm Transactions**](/marketplace/orders/order-builder/checkout) window that informs you about the creation of transactions on the blockchain.