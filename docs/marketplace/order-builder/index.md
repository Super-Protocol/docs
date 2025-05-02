---
id: "order-builder"
title: "Order Builder"
slug: "/order-builder"
sidebar_position: 7
---

_Order Builder_ is a tool to configure deployment orders for AI models. Deployment orders consist of three main components:

- **Model**
- **Engine**
- **Compute**

<img src={require('../images/order-builder.png').default} width="auto" height="auto" border="1"/>
<br/>

## Model

If no model is currently added to the Order Builder, go to the **Marketplace** or **My Content** using the links and click the **Deploy** button next to the desired model. This will add the model to the order along with automatically selected engine and compute offers.

If the model offer has multiple [requirement slots](/fundamentals/slots), the **Deploy** button adds the first slot configured for GPU deployment. To deploy the model on CPU, click the model's name to open its [**Offer**](/marketplace/models/offer) window, go to the **Pricing** tab, and click the blue **[+]** button next to the desired slot.

To view the model's selected slot, expand the **Requirements**. If you add your uploaded model to the order, its requirements are not specified. The system does not include such models in the automatic calculation of the compute configuration.

:::warning

Ensure your uploaded model fits into the maximum compute configuration [allowed for the testnet](/marketplace/limitations), or it may fail to deploy correctly.

:::

## Engine

The term _engine_ refers to the software necessary to deploy models and provide a user interface.

Currently, Super Protocol supports two AI engines:

- **Text Generation Web UI** for text-to-text models.
- **ComfyUI** for image- and video-related tasks.

The Super Protocol team will add more popular open-source AI engines in the future. User-uploaded engines are not yet allowed as they may have built-in vulnerabilities.

A suitable engine offer is automatically added to the order once you add a model. To select another engine, remove the suggested one and select the desired engine offer from the list.

Clicking the engine's name opens its [**Offer**](/marketplace/models/offer) window.

You can configure the added engine by pressing the **Settings** button. Only make changes if you are confident in what you are doing, as modifying these settings can cause the model to fail to deploy. For more information about the settings, refer to the [Text Generation Web UI](https://github.com/oobabooga/text-generation-webui/wiki) and [ComfyUI](https://docs.comfy.org/) documentation.

<img src={require('../images/order-builder-engine-settings.png').default} width="auto" height="auto" border="1"/>
<br/>

### API mode

When deploying a model with Text Generation Web UI (TGWUI), you can run the engine in the API mode. TGWUI uses an OpenAI-compatible API that is private, does not create logs, and does not connect to OpenAI.

To deploy a model in the API mode, tick the **api** checkbox in the engine settings and set the API authentication keys. Note that GUI will not start in this mode.

API requests must include the deployed model's domain on Super Protocol and the API authentication key:

```bash
curl "<URL_ENDPOINT>" \
-H "Authorization: Bearer <API_AUTH_KEY>" \
-H "Content-Type: application/json"
```

Where:

- `<URL_ENDPOINT>` is a web UI access link with the API endpoint. The access link is available on the [**Order**](/marketplace/all-orders/order) screen when the model is deployed. The API endpoint can be `/v1/completions` or `/v1/chat/completions`; check the full list of compatible endpoints in the [TGWUI documentaion](https://github.com/oobabooga/text-generation-webui/wiki/12-%E2%80%90-OpenAI-API#compatibility--not-so-compatibility).
- `<API_AUTH_KEY>` is the API authentication key set in the engine settings.

An example of an API request:

```bash
curl https://mund-avys-kefs.superprotocol.io/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer authkey123" \
  -d '{
    "messages": [{"role": "user", "content": "What is confidential computing?"}],
    "mode": "instruct",
    "instruction_template": "Alpaca",
    "max_tokens": 300,
    "temperature": 0.9,
    "top_p": 0.95
  }'
```

Refer to the [Text Generation Web UI API documentation](https://github.com/oobabooga/text-generation-webui/wiki/12-%E2%80%90-OpenAI-API) to learn more.

### Tunnels

Placing a deployment order also places an order for a [confidential tunnel](https://docs.superprotocol.com/fundamentals/tunnels) to access the engine's web UI via HTTPS. The engine settings include the **Tunnels** tab with **Domain Settings**:

- **Temporary Domain** uses pre-configured settings to create a domain on `superprotocol.io` with a randomly generated name, for example, `mund-avys-kefs.superprotocol.io`. It is the recommended option that does not require additional setup.
- **Manual Configuration** will allow advanced users to host a model on a custom domain. This feature is not yet available.

## Compute

The term _compute_ refers to a confidential computing machine that processes the order.

A suitable compute offer is automatically added to the order once you add a model or engine based on the combined requirements of the selected model and engine. To select another compute, remove the suggested one and select the desired compute offer from the list.

The system automatically calculates a [compute configuration](/fundamentals/slots#configuration) that meets or exceeds the combined requirements of the model and engine added to the order.

**In Queue** shows the number of orders waiting for an empty slot on this machine. If the number is greater than zero, your order may take longer to process. Consider choosing another compute offer.

Clicking the machine's name opens its [**Offer**](/marketplace/models/offer) window.

<img src={require('../images/order-builder-queue.png').default} width="auto" height="auto" border="1"/>
<br/>

## Checkout

The panel at the bottom of the screen lets you set the desired lease time and confirm total costs before checkout.

**Fixed** is the total for all fixed-price offers, including the cost of creating a tunnel. You will pay this sum immediately after placing the order.

**Per Hour** is the total for all hourly-priced offers, including the cost of creating a tunnel. This sum will be gradually deducted from the order deposit for each hour the order is running.

**Lease Time** allows you to set the duration for which the order will run. Increasing the lease time raises the initial deposit amount.

Providers may limit the minimum and maximum allowed lease time for their offers. You will see a warning if the lease time you enter is outside these limits.

**Pay now** shows the initial order deposit you must pay at checkout. It is calculated using the following formula:

**Pay now** = **Per Hour** x **Lease Time** + **Fixed**

You can increase the deposit now by increasing the **Lease Time** or after checkout while the order is processing.

The blue **Pay Now** button opens the [**Confirm Transactions**](/marketplace/order-builder/checkout) window, informing you about creating blockchain transactions.