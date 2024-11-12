---
id: "order-builder"
title: "Order Builder"
slug: "/orders/order-builder"
sidebar_position: 1
---

Order Builder is a tool for creating and placing orders on Super Protocol. Learn more about [Orders](/fundamentals/orders).

(image: Order Builder full screen)
<br/>
<br/>

To build an order, you must select the **Order Type** and add main components:

- **Model**
- **Datasets**
- **Engine**
- **Compute**

For detailed steps, refer to the guide on [How to Place an Order](/marketplace/guides/place-order).

## Order Type

**Order Type** determines the operating mode:

- **Fine-tune** is an order to customize a pre-trained AI model for a specific purpose by creating an additional layer. This type of order performs a computation and generates a result. Once the order is complete, you can download the result as a file.
- **Deploy** is an order to run a pre-trained AI model with a web interface. The model is accessible from the internet via secure tunnels deployed automatically by a separate order. The model continues to run as long as the order balance remains positive, without a set end time.

Learn more about [Tunnels](/fundamentals/tunnels).

## Model

A pre-trained model is a mandatory component for both types of orders. You can lease a model by selecting its offer from the **Marketplace**, or you can use your own model by uploading it to Super Protocol and adding it to the order from **My Content**.

Clicking on **Marketplace** displays available offers. Clicking **My Content** displays your uploaded models. To narrow down the results, use the filters on the right side of the screen.

While browsing Marketplace offers, clicking the model's name opens the [**Offer** window](/marketplace/marketplace/offer), which provides a detailed description and pricing. Note that unlike offers, models from **My Content** do not have a price.

To view the model's default requirement slot, expand the **Requirements** section. You can find the full list of the model's requirement slots in the **Pricing** tab within the model's **Offer** window.

To add a model to the order, use the blue **[+]** button next to the model or go to the **Pricing** tab in the model's **Offer** window. Once you add a model, its settings may open for configuration.

:::warning

A yellow warning icon indicates that the requirements of the selected model are not specified, and the system will not include the model to the automatic calculation of compute configuration. In this case, you should manually adjust the compute configuration before checkout to include the model's requirements.

:::

## Datasets

A dataset can be any data the model works with, for example, data for fine-tuning a model or a file with a new layer for Deploy orders.

Selecting datasets is similar to selecting a model, but for Deploy orders, dataset is optional.

:::note

Datasets and Fine-tune orders are not availible yet in the current version of the Marketplace.

:::

## Engine

The engine is required to launch an AI model and provide a user interface. You can select an engine offer only after adding the mandatory components to the order:

- For Fine-tune orders: a model and dataset.
- For Deploy orders: a model.

Clicking **Select AI engine** opens a list of engines compatible with the added model. Selecting an engine is similar to selecting a model. However, unlike models and datasets, engines are only available as Marketplace offers. Currently, users cannot upload engines, and Super Protocol is the sole provider of engine offers.

:::warning

A yellow warning icon indicates that the selected engine is incompatible with another offer or uploaded content already added to the order.

:::

Once you add an engine, its configuration will open:

(image: engine settings)
<br/>
<br/>

The **Engine** tab contains the main settings. Only make changes if you are confident in what you are doing, as modifying these settings can cause the model to malfunction. For detailed information about the settings, refer to the documentation for [Text Generation WebUI](https://github.com/oobabooga/text-generation-webui/wiki) and [ComfyUI](https://docs.comfy.org/).

For orders using tunnels, the engine settings will include the **Tunnels** tab with **Domain Settings**:

- **Temporary Domain** uses pre-configured settings to create a domain on superprotocol.io with a generic name, for example, [mund-avys-kefs.superprotocol.io](https://mund-avys-kefs.superprotocol.io/).
- **Manual Configuration** allows advanced users to host the model on a custom domain.

## Compute

Compute refers to the confidential computing device that processes the order. You can select a compute only after adding the mandatory components to the order:

- For Fine-tune orders: a model, dataset, and engine.
- For Deploy orders: a model and engine.

Clicking **Select Compute** opens a list of available compute offers. On the right side of the screen, you can manage the compute configuration:

- **Price**. The slider allows you to adjust the maximum price to narrow down the list of available compute offers.
- **Slots** section displays the sum of required compute resources:
    + **CPU vCores**: number of CPU cores, can be fractional.
    + **CPU RAM, Gb**: amount of RAM in gigabytes.
    + **GPU vCores**: number of GPU cores, can be fractional.
    + **GPU RAM**: amount of video RAM in gigabytes.
    + **Disk, Gb**: disk space in gigabytes.
- **Options** section displays the sum of required network-related resources:
    + **Bandwidth, Mbps**: data transfer rate in megabits per second.
    + **Traffic, GB**: amount of traffic in gigabytes.
    + **Ext.Port**: external port for internet access.
- **Lease**. Enter the minimum and maximum lease time to narrow down the list of available compute offers.

The selected compute configuration must meet or exceed the combined order requirements of the model, datasets, and engine added to the order. If the requirements of your uploaded models and datasets are not specified, and you add them to the order, you should manually adjust the automatically calculated requirements for the compute configuration.

You can only select a single configuration slot for the order. However, to meet the order requirements, the system will automatically add this selected configuration slot multiple times if necessary. Learn more about [requirements and configurations](/fundamentals/slots).

## Footer

The footer at the bottom of the screen displays the total costs of the offers added to the order:

(image)
<br/>
<br/>

These values are updated as you add more offers to the order:

- **Fixed**: the total in TEE tokens for all fixed-price offers.
- **Per Hour**: the total cost of all hourly-priced offers.
- **Lease Time**: the duration for which you plan to lease the offers. Increasing the lease time raises the minimum deposit amount. For Fine-tune orders, ensure the lease time is sufficient to complete the computation. For Deploy orders, this is the duration the model will remain running. The lease time cannot exceed the maximum allowed lease time specified by any of the offers in the order.
- **Pay now**: the initial order deposit required at checkout. It is calculated using the formula: **Fixed** + (**Per Hour** * **Lease Time**). You can increase the deposit now by increasing the **Lease Time** or later while the order is processing.

The **Checkout** button opens the [**Checkout** window](/marketplace/orders/order-builder/checkout), where you must create a passphrase and confirm the transaction to place the order.