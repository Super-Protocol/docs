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

To build an order, you must select the **Order Type** and add four main components:

- **Model**
- **Datasets**
- **Engine**
- **Compute**.

Read the guide on [How to Place an Order](/ai-marketplace/guides/guide-place-order).

## Order Type

**Order Type** determines the operating mode:

- **Fine-tune**. An order to customize a pre-trained AI model for a specific purpose by creating an additional layer. This type of order performs a computation and generates a result. Once the order is complete, you can download the result as a file.
- **Deploy**. An order to run a pre-trained AI model with a web interface. The model is accessible from the internet via secure tunnels deployed automatically by a separate order. The model continues to run as long as the order balance remains positive, without a set end time.

Learn more about [Tunnels](/fundamentals/tunnels).

## Model

A pre-trained model is a mandatory component for both types of orders, and each order must include a single model. You can lease a model by selecting its offer from the **Marketplace**, or you can use your own model by uploading it to Super Protocol and adding it to the order from **My Content**.

Clicking on **Marketplace** or **My Content** displays available offers or your uploaded models. To narrow down the results, use the filters on the right side of the screen.

While browsing Marketplace offers, clicking the model's name opens the [**Offer** window](/ai-marketplace/marketplace/offer), which provides a detailed description and pricing. Note that unlike offers, uploaded models do not have a price.

To view the model's default requirement slot, expand the **Requirements** section. You can find the full list of the model's requirement slots in the **Pricing** tab within the model's **Offer** window.

If a yellow warning icon appears, it indicates that the requirements of the selected model are not specified, and the system will exclude the model from the automatic calculation of compute configuration. In this case, you should manually adjust the compute configuration when selecting compute to include the model's requirements.

To add a model to the order, use the blue **+** button in the showcase or navigate to the **Pricing** tab within the model's **Offer** window. Once a model is added, the model's settings may open for configuration.

## Datasets

A dataset can be any data the model works with, for example, data for fine-tuning a model or a file with a new layer for Deploy orders.

Selecting datasets is similar to selecting a model, with two notable differences:

- It is possible to add multiple datasets to an order.
- For Deploy orders, dataset is optional.

## Engine

The engine provides a user interface for AI models. Selecting an engine is only available after you have added previous mandatory components to the order:

- For Fine-tune orders: a model and dataset.
- For Deploy orders: a model.

Clicking **Select AI engine** opens a list of engines compatible with the added model. Selecting an engine is similar to selecting a model. However, unlike models and datasets, engines are only available as Marketplace offers.

If a yellow warning icon appears, it indicates that the selected engine is not compatible with another offer or uploaded content already added to the order.

## Compute

Compute refers to the confidential computing device that processes the order. You can select a compute only after adding the mandatory components to the order:

- For Fine-tune orders: a model, dataset, and engine.
- For Deploy orders: a model and engine.

Clicking **Select Compute** opens a list of available compute offers. On the right side of the screen, you can find the maximum price _(уточнить, для чего это)_ and automatically calculated requirements for configuration slots and options.

**Slots** are responsible for compute resources:

- **CPU vCores**: number of CPU cores.
- **CPU RAM, Gb**: RAM in gigabytes (GB).
- **Disk, Gb**: disk space in gigabytes (GB).
- **GPU vCores**: number of GPU cores.
- **GPU RAM**: video RAM in gigabytes (GB).

**Options** are responsible for network-related resources:

- **Bandwidth, Mbps**: available bandwidth in megabits per second.
- **Traffic, GB**: available traffic in gigabytes (GB).
- **Ext.Port**: external port availability.

The selected compute configuration must meet or exceed the combined order requirements of the model, datasets, and engine added to the order. If the requirements of your uploaded models and datasets are not specified, and you add them to the order, you should manually adjust the automatically calculated requirements for the compute configuration.

You can only select one configuration slot for the order. To meet the order requirements, the system will automatically add the selected configuration slot multiple times if necessary.

Min Time, Max Time? _уточнить у Саши логику_

Learn more about [requirements and configurations](/fundamentals/slots).

## Footer

The footer at the bottom of the screen displays the total prices of the offers added to the order. These values are updated as you add offers to the order:

- **Fixed**: the total in TEE tokens for all fixed-price offers.
- **Per Hour**: the total cost of all hourly-priced offers.
- **Lease Time**: the duration for which you plan to lease the offers. Increasing the lease time raises the minimum deposit amount. For Fine-tune orders, ensure the lease time is sufficient to complete the computation. For Deploy orders, this is the duration the model will remain running. The lease time cannot exceed the maximum allowed lease time specified by any of the offers in the order.
- **Pay now**: the minimum order deposit required at checkout. It is calculated using the formula: Fixed + (Per Hour * Lease Time). You can increase the deposit later while the order is processing.

The **Checkout** button opens the [**Checkout** window](/ai-marketplace/orders/order-builder/checkout), where you must create a passphrase and confirm the transaction to place the order.