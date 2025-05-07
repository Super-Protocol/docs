---
id: "troubleshooting"
title: "Troubleshooting"
slug: "/guides/troubleshooting"
sidebar_position: 99
---

This page contains the most common issues and ways to fix them. This list is incomprehensive and is constantly updated.

## Endless logging in

Issue: the **Enter Marketplace** button is stuck in the loading state.

<img src={require('../images/stuck-login.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Possible solutions:

- Open the MetaMask browser extension to check for pending requests.
- If MetaMask shows no requests, refresh the page and press the **Enter Marketplace** button again.
- If you have other wallet extensions installed, temporarily switch them off and try to log in again. Some wallet extensions may interfere with login attempts. 
- If the problem persists, restart your browser and unlock MetaMask before trying to enter the Marketplace.
- Ensure the Marketplace is not undergoing maintenance. Wait a few minutes and try again, or contact Super Protocol on [Discord](https://discord.gg/superprotocol) for a quick update.

## Order status: Error

Issue: the <a id="order"><span className="dashed-underline">order</span></a> processing stops due to the **Error** status.

<img src={require('../images/order-error.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The **Error** status means something went completely wrong, and the model was not deployed.

Click the **Get Result** button to download the order log file containing technical information about the error. The file may be difficult to read, but you can analyze it using a chatbot like Claude, ChatGPT, or similar.

Feel free to contact Super Protocol on [Discord](https://discord.gg/superprotocol) if you need help determining the reason.

Some possible reasons are listed below.

### The model is too big

If your model is too big to fit into current [Testnet Limitations](/marketplace/limitations), the deployment will fail with an error similar to the following:

```
UserWarning: Current model requires 167773440 bytes of buffer for offloaded layers, which seems does not fit any GPU's remaining memory.
```

Solution: upload a variant of the model with a lower-bit quantization or choose another model. Support for bigger models will be available in the future.

### Remote code

Some models rely on scripts without which they will not run. If you deploy such a model with the default settings, the order will end with an error. An example of such a model is [cerebras/btlm-3b-8k-base](https://huggingface.co/cerebras/btlm-3b-8k-base).

Solution: allow executing remote code in the engine settings before placing the order:

1. In the Order Builder, open the engine settings.

<img src={require('../images/order-builder-engine-settings.png').default} width="auto" height="auto" border="1"/>
<br/>

2. Go to the **Model loader** tab, select your model's loader from the drop-down menu, and tick the **trust-remote-code** checkbox.

<img src={require('../images/order-builder-trust-remote-code.png').default} width="auto" height="auto" border="1"/>
<br/>

:::warning

Review the code before deploying the model to avoid executing unsafe or malicious scripts.

:::

### No model file was found

If Text Generation Web UI cannot find the model file, you will see the following error in the `result.txt`:

```
Error: Error no file named pytorch_model.bin, model.safetensors, tf_model.h5, model.ckpt.index or flax_model.
```

Possible solutions:

- Check if the model files exist.
- Check if the model configuration is correct.
- Check if the model was uploaded properly.
- Check if the token in the `resource.json` file grants the Read access.

## The model does not reply

The model is deployed with Text Generation Web UI but does not reply.

Possible reasons:

- Incorrect loader (AutoGPTQ, ExLlama, Transformers, etc.).
- Incompatible versions (transformers, torch, cuda).
- Error in the config (`config.json`, `quantize_config.json`).

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.