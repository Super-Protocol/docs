---
id: "limitations"
title: "Testnet Limitations"
slug: "/limitations"
sidebar_position: 1
---

The testnet has a limited amount of computing resources. To ensure fair access, Super Protocol has set limits on CPU/GPU compute configurations and token availability, allowing everyone to participate.

## Pricing for orders

During the testnet, you can deploy models using either Intel TDX CPUs or NVIDIA H100 Tensor Core GPUs.

Super Protocol has two types of machines:

- **TDX+H100 (CPU and GPU)**: can run orders on GPU or CPU, depending on the selected engine type.
- **TDX (CPU only)**: can only run orders on CPU. Note that CPUs are much slower.

Super Protocol constantly adds more TDX+H100 machines and will soon begin onboarding machines from third-party providers.

Pricing and restrictions:

- Order lease time: minimum 2 hours.
- Compute costs 0.2126 SPPI tokens per hour in most cases.
- Models from the Marketplace cost 0 SPPI per order.
- Engines cost 0 SPPI per order.
- Setting up a confidential tunnel costs 0.1 SPPI per order or less.

For example, a two-hour GPU-order would cost:

0.2126 x 2 + ~0.1 = **0.5252 SPPI** tokens.

The total gas fee varies, but it is approximately **0.00001 BNB** per order.

## Token limits

Web3 users can receive up to **5 SPPI** tokens and **0.0001 BNB** tokens daily.

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