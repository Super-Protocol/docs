---
id: "limitations"
title: "Testnet Limitations"
slug: "/limitations"
sidebar_position: 1
---

The testnet has a limited amount of computing resources. To ensure fair access, Super Protocol has set limits on CPU/GPU compute configurations and token availability, allowing everyone to participate.

## Pricing for orders

On the testnet, you can deploy models using either Intel TDX CPUs or NVIDIA H100 Tensor Core GPUs.

Super Protocol has two types of machines:

- **TDX+H100 (CPU and GPU)**: can run orders on GPU or CPU, depending on the selected engine type.
- **TDX (CPU only)**: can only run orders on CPU. Note that CPUs are much slower.

Super Protocol constantly adds more TDX+H100 machines and will soon begin onboarding machines from third-party providers.

Pricing and restrictions:

- Order lease time: minimum 2 hours.
- Compute costs 2.126 TEE tokens in most cases.
- Models from the Marketplace cost 1 TEE per order.
- Engines cost 0.5 TEE per order.
- Tunnels Launcher fee for setting up a confidential tunnel is approximately 2 TEE per order.

For example, a two-hour GPU order will cost approximately:

2.126 * 2 + 1 + 0.5 + 2 = **~8** TEE tokens.

## Token limits

- **Demo users** receive a one-time advance of 50 TEE tokens with no replenishment possibility. To continue testing, users must [log in with a Web3 account](/marketplace/guides/log-in).
- **Web3 users** can receive up to 35 TEE tokens and 5 POL tokens daily. At any given time, Web3 users can hold a maximum of 35 TEE tokens and 5 POL tokens in their wallets.

## Model limits

The total size of your model files should not exceed 13 GB; otherwise, deployment may fail. More machines with larger slots to support bigger models will be available in the future.

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