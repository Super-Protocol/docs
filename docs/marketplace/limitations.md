---
id: "limitations"
title: "Testnet Limitations"
slug: "/limitations"
sidebar_position: 1
---

The testnet has a limited amount of computing resources. To ensure fair access, Super Protocol has set limits on CPU/GPU compute configurations and token availability, allowing everyone to participate. Additional NVIDIA H100 machines will be added soon.

## Pricing for orders

On the testnet, you can deploy models using either Intel TDX CPUs or NVIDIA H100 GPUs. While GPUs are significantly faster, CPUs are cheaper and have more availability. The current public machines include:

- **Super 2: TDX+H100 (Public)** can run orders on GPU.
- **Super 3: TDX (Public)** can only run orders on CPU.

Pricing and restrictions:

- Order lease time: minimum of 2 hours and a maximum of 4 hours.
- Price per hour:
    + CPU: 2.13 TEE tokens/hour.
    + GPU: 4.126 TEE tokens/hour.
- Models from the Marketplace cost 1 TEE per order.
- Engines cost 0.5 TEE per order.
- Tunnels Launcher fee to set up a confidential tunnel: approximately 1-2 TEE per order.

For example, a four-hour GPU order will cost approximately:

4.126 * 4 + 1 + 0.5 + 2 = **~19-20 TEE** tokens.

## Token limits

- **Demo users** receive a one-time advance of 50 TEE tokens with no possibility to replenish. To continue testing, users must [log in with a Web3 account](/marketplace/guides/log-in).
- **Web3 users** can receive up to 25 TEE tokens and 5 POL tokens per day, which can be replenished daily. At any given time, Web3 users can hold a maximum of 25 TEE tokens and 5 POL tokens in their wallets.

## Model limits

The total size of your model files must not exceed 10 GB; otherwise, deployment may fail. Larger slots to support bigger models will be available in the future.

Also, deployed models must belong to a category supported by one of the AI engines:

- **Text Generation Web UI** supports models that involve text-based chats:
  + Text Generation
  + Text Classification
  + Translation
  + Text2Text Generation
- **ComfyUI** supports various image- and video-related tasks:
  + Image Classification
  + Object Detection
  + Image Segmentation
  + Text-to-Image
  + Image-to-Text
  + Image-to-Image
  + Image-to-Video
  + Video Classification
  + Text-to-Video
  + Mask Generation
