---
id: "limitations"
title: "Testnet Limitations"
slug: "/limitations"
sidebar_position: 1
---

The testnet has a limited amount of computing resources. To ensure fair access, Super Protocol has set limits on CPU/GPU compute configurations and token availability, allowing everyone to participate.

## Pricing for orders

On the testnet, you can deploy models using either Intel TDX CPUs or NVIDIA H100 Tensor Core GPUs.

Super Protocol has two types of compute:

- **TDX+H100** machines can run orders on GPU or CPU, depending on the selected engine type.
- **TDX** machines can only run orders on CPU. Note that this mode is much slower.

Super Protocol constantly adds more TDX+H100 machines and will soon begin onboarding machines from third-party providers.

Pricing and restrictions:

- Order lease time: minimum 2 hours and maximum 4 hours.
- Compute costs 4.134 TEE tokens per hour.
- Models from the Marketplace cost 1 TEE per order.
- Engines cost 0.5 TEE per order.
- Tunnels Launcher fee to set up a confidential tunnel is approximately 1-2 TEE per order.

For example, a four-hour GPU order will cost approximately:

4.134 * 4 + 1 + 0.5 + 2 = **~19-20 TEE** tokens.

## Token limits

- **Demo users** receive a one-time advance of 50 TEE tokens with no replenishment possibility. To continue testing, users must [log in with a Web3 account](/marketplace/guides/log-in).
- **Web3 users** can receive up to 25 TEE tokens and 5 POL tokens daily. At any given time, Web3 users can hold a maximum of 25 TEE tokens and 5 POL tokens in their wallets.

## Model limits

The total size of your model files should not exceed 10 GB; otherwise, deployment may fail. More compute with larger slots to support bigger models will be available in the future.

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
