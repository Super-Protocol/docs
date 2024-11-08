---
id: "order-builder"
title: "Order Builder"
slug: "/orders/order-builder"
sidebar_position: 1
---

Order Builder is a tool for creating and placing orders on Super Protocol.

## Order Builder screen

To build an order, you need to select its type and pick four order components in the left part of the screen:

- AI model you want to fine-tune or launch
- One or several datasets, if the order requires them
- AI engine (compatibile with the selected model? that may provide user interface to the model?)
- Confidential computing device that will process the order.

(image fullscreen, left side highlighted)
<br/>
<br/>

Read [How to Place an Order](/ai-marketplace/guides/guide-place-order).

### Order Type

Two types of orders exist on Super Protocol:

- **Fine-tune**: an order to adjust a pre-trained model to optimize its performance.
- **Deploy**: an order to launch an AI model using an engine with a web UI and a set of [confidential tunnels](/fundamentals/tunnels).

(image left side, order type highlighted)
<br/>
<br/>

### Model

Select and add an AI model you want to fine-tune or deploy.

(image left side, Model highlighted)
<br/>
<br/>

Click **Marketplace** or **My Content** to open a list of, respectively, Marketplace offers or models [uploaded](/ai-marketplace/guides/guide-upload) by you.

(image full, minishowcase highlighted)
<br/>
<br/>

Use the Marketplace and My Content tabs to switch between offers and uploaded files.

(image tabs highlighted)
<br/>
<br/>

Use filters on the right side of the screen to narrow down the results.

(image filters highlighted)
<br/>
<br/>

Click **Requirements** to expand or collapse the [requirement slot](/fundamentals/slots/#requirements) parameters.

(image expanded and collapsed, requirements highlighted)
<br/>
<br/>

Click the blue **+** button next to a model to add it to the order and open model settings.

(image blue + highlighted)
<br/>
<br/>

Click a **trash can** button to remove the model from the order.

(image trash buttons highlighted)
<br/>
<br/>

### Datasets

Selecting datasets is similar to selecting a model with two notable differences:

- It is possible to add several datasets to an order.
- Deployment orders may not require a dataset at all.

Yellow triangle

Add a model by clicking... One or multiple datasets

Мини-витрина. Add an offer vs Add an uploaded file

Offers.

Filters.

Expand Requirements...

Slots

Requirements; у uploaded files может не быть.

Yellow warning icon / overlay symbol / exclamation mark warning / ? means not all requirements are specified and you need to select a more powerful (?) configuration slot when you Select a Compute Offer.

### Engine

Select an engine...

You can add compute to an order only after adding a model and an engine. Click **Select AI engine** to see the list of available engines.

(image left side, Engine highlighted)
<br/>
<br/>

Add an engine by clicking...

Описание мини-витрины движков.

Requirement slots

Incompatible engines (grayed)

Blue **+** button adds the selected engine to the order and opens the engine parameters screen.

When the engine is selected, you can open the engine parameters screen by clicking the engine plate...

Yellow warning icon / overlay symbol / exclamation mark warning / ? means the selected offer is incompatible with another one

## Engine parameters

Categories

Groups

Presets

### Compute

Select confidential computing resources that will process the order.

You can add compute to an order only after adding a model and an engine. Click **Select AI engine** to see the list of available engines.

(image left side, Compute highlighted)
<br/>
<br/>

Add compute by clicking...

Мини-витрина Compute. Offers sorted by price

Configuration slots and options. Expand...

## Footer

The footer at the bottom of the screen calculates a subtotal of the minimum deposit required by the order. The values change as you add offers to the order.

(image footer)
<br/>
<br/>

- **Fixed**: the sum in TEE tokens of all fixed-price [slots and options](/fundamentals/slots) added to the order.
- **Per Hour**: the sum of all hourly-priced slots and options.
- **Lease Time**: type in the minimum time you want to lease the offers. Increasing this time also increases the minimum order deposit.
- **Pay now**: 