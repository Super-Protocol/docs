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

Read [How to Place an Order](/marketplace/guides/place-order) for step-by-step instructions.

<img src={require('../../images/order-builder-empty.png').default} width="auto" height="auto" border="1"/>
<br/>

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

Clicking the model's name opens its [**Offer**](/marketplace/marketplace/offer) window. It provides a detailed description and pricing. Your uploaded models do not have such window, and they do not have a price.

To view the model's requirement slot, expand the **Requirements**. If an offer has multiple requirement slots, the **[+]** and **Requirements** buttons will open the **Pricing** tab within the model's **Offer** window. There, you can find the complete list of the model's requirement slots.

If you add your uploaded model, its requirements are not specified. The system does not include such models in the automatic calculation of the compute configuration.

:::warning

Ensure your uploaded model fits into the total maximum compute configuration allowed for the testnet. Refer to the [Testnet Limitations](/marketplace/limitations).

:::

## Datasets

A dataset is any data the model works with. For example, it can be a set of files for fine-tuning a model or a single file with a new layer for Deploy orders.

Dataset is a mandatory component for Fine-tune orders, but optional for Deploy orders.

:::note

Datasets are not yet available in the current version of the Marketplace.

:::

## Engine

The engine is required to deploy and fine-tune models. It also provides a web UI.

At the moment, Marketplace supports two AI engines:

- **Text Generation Web UI** for text-to-text models.
- **ComfyUI** for image- and video-related tasks.

The Super Protocol team will add more popular open-source AI engines in the future. Currently, user-uploaded engines are not allowed as they may have built-in vulnerabilities.

To add an engine to the order, click the blue **[+]** button next to it. If a yellow warning icon appears, it indicates that the selected engine is incompatible with a selected model.

Clicking the engine's name opens its [**Offer**](/marketplace/marketplace/offer) window.

Once you add an engine, you can open its configuration by pressing the **Settings** button. Only make changes if you are confident in what you are doing, as modifying these settings can cause the model to fail to deploy. For more information about the settings, refer to the documentation for [Text Generation Web UI](https://github.com/oobabooga/text-generation-webui/wiki) and [ComfyUI](https://docs.comfy.org/).

<img src={require('../../images/order-builder-engine-settings.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

For orders using tunnels, the engine settings will include the **Tunnels** tab with **Domain Settings**:

- **Temporary Domain** uses pre-configured settings to create a domain on `superprotocol.io` with a randomly generated name, for example, `mund-avys-kefs.superprotocol.io`. It is the recommended option that does not require additional setup.
- **Manual Configuration** is not available right now. It will allow advanced users to host a model on a custom domain. This feature is not yet available in the current version of the Marketplace.

## Compute

The term _compute_ refers to a confidential computing machine that processes the order.

The system automatically calculates a compute configuration that meets or exceeds the combined requirements of the models, datasets, and engine added to the order. To add a machine to the order, click the blue **[+]** button next to it.

**In Queue** shows the number of orders waiting for an empty slot on this machine. If it is not zero, your order may take longer to process. Consider choosing another compute offer.

Clicking the machine's name opens its [**Offer**](/marketplace/marketplace/offer) window.

<img src={require('../../images/order-builder-queue.png').default} width="auto" height="auto" border="1" alt="Screenshot showing the queue status indicator for compute offers"/>
<br/>

Learn more about [requirements and configurations](/fundamentals/slots).

## Checkout

The panel at the bottom of the screen displays the total prices of the offers added to the order.

**Fixed** is the total for all fixed-price offers. You will pay this sum immediately after placing the order.

**Per Hour** is the total for all hourly-priced offers. This sum will be gradually deducted from the order deposit for each hour the order is running.

**Lease Time** is the duration in hours for which you plan to run the order. Increasing the lease time raises the initial deposit amount. For Fine-tune orders, ensure the lease time is sufficient to complete the computation. For Deploy orders, this is the duration for which the model will remain running and available.

Note that providers may set the minimum and maximum allowed lease time for their offers to limit the usage. The lease time you enter must be within these limits.

**Pay now** is the initial order deposit you must pay at checkout. It is calculated using the formula: **Fixed** + (**Per Hour** * **Lease Time**). You can increase the deposit now by increasing the **Lease Time** or after checkout while the order is processing.

The **Checkout** button opens the [**Confirm Transactions**](/marketplace/orders/order-builder/checkout) window that informs you about the creation of transactions on the blockchain.