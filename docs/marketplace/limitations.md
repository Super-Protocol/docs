---
id: "limitations"
title: "Testnet Limitations"
slug: "/limitations"
sidebar_position: 1
---

Testnet has a limited amount of compute resources. Super Protocol has set limits on CPU/GPU compute configurations and amounts of available tokens so everyone can participate. More NVIDIA H100 machines are on the way.

## Order limits and pricing

On testnet, you can deploy models using Intel TDX CPU or NVIDIA H100 GPU. GPU is much faster, but CPU is more available and cheaper. We currently have two machines available for public use:

- **Super 2: TDX+H100 (Public)** can run orders on CPU and GPU.
- **Super 3: TDX (Public)** can run orders on CPU only.

Limits:

- The minimum order lease time is 2 hours, and the maximum lease time is 4 hours.
- Price per hour is 2 TEE tokens for CPU and 4 TEE for GPU.
- All models on Marketplace cost 1 TEE per order.
- All AI engines cost 1 TEE per order.
- There is also an estimated 1 TEE fee for Tunnels Launcher services that set up the confidential tunnel.

For example, a four-hour GPU order will cost you 4*4+1+1+1=19 TEE.

## Token limits

- Demo users receive a one-time advance of 50 TEE tokens. These may not be replenished. To continue testing, users must [log in with a Web3 account](https://docs.superprotocol.com/marketplace/guides/log-in).
- Web3 users receive a maximum of 24 TEE tokens and 5 POL tokens per day. These may be replenished daily.
- Web3 users can have a maximum of 24 TEE tokens and 5 POL tokens in their wallets at one time.

## Model limits

For your uploaded models, the maximum size of all the model's files must not exceed 10 GB. Otherwise, the deployment may fail.
