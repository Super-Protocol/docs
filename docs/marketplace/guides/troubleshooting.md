---
id: "troubleshooting"
title: "Troubleshooting"
slug: "/guides/troubleshooting"
sidebar_position: 4
---

This page contains the most common issues and ways to fix them. This list is incomprehensive and is constantly updated.

## Endless logging in

If the **Enter Marketplace** button is stuck in the loading state, open the MetaMask browser extension to check for pending requests.

<img src={require('../images/stuck-login.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

If MetaMask shows no requests, refresh the page and press the **Enter Marketplace** button again.

If the problem persists, restart your browser and unlock MetaMask before trying to enter the Marketplace.

## Order status: Error

The **Error** status means something went completely wrong, and the model was not deployed.

<img src={require('../images/order-error.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Click the **Get Result** button to download the order log file containing technical information about the error. If the file is difficult to read, you can analyze it using a chatbot like Claude, ChatGPT, or similar.

### Trust remote code

Some models may contain scripts without which the model will not run. If you deploy such a model with default settings, the order will end with an error.

An example of a model that relies on remote scripts is [cerebras/btlm-3b-8k-base](https://huggingface.co/cerebras/btlm-3b-8k-base).

To avoid this error, allow executing remote code in the engine settings using the following instructions.

In the Order Builder, open the engine settings.

<img src={require('../images/order-builder-engine-settings.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Go to the **Model loader** tab, select your model's loader from the drop-down menu, and tick the **trust-remote-code** checkbox.

<img src={require('../images/order-builder-trust-remote-code.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

:::warning

Review the code before deploying the model to avoid executing unsafe or malicious scripts.

:::

## Contact Super Protocol

If you face any issues, do not hesitate to contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.