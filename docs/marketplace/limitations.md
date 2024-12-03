---
id: "limitations"
title: "Testnet Limitations"
slug: "/limitations"
sidebar_position: 1
---

Testnet has a limited amount of compute resources. Super Protocol has set limits on CPU/GPU compute configurations and amounts of available tokens so everyone can participate. More NVIDIA H100 machines are on the way.

## Order limits and pricing

On testnet, you can deploy models using Intel TDX CPU or NVIDIA H100 GPU. GPU is much faster, but CPU has more availability and is cheaper. We currently have two machines for public use:

- **Super 2: TDX+H100 (Public)** can run orders on GPU.
- **Super 3: TDX (Public)** can only run orders on CPU.

Limits:

- The minimum order lease time is 2 hours, and the maximum lease time is 4 hours.
- Price per hour is 2.13 TEE tokens for CPU and 4.126 TEE for GPU.
- All models on Marketplace cost 1 TEE per order.
- All engines cost 0.5 TEE per order.
- There is also an estimated 1-2 TEE fee for a Tunnels Launcher order that sets up a confidential tunnel.

For example, a four-hour GPU order will cost you approximately 19-20 TEE (4.126 * 4 + 1 + 0.5 + 2).

## Token limits

- Demo users receive a one-time advance of 50 TEE tokens with no replenishment possibility. To continue testing, users must [log in with a Web3 account](/marketplace/guides/log-in).
- Web3 users can receive up to 25 TEE tokens and 5 POL tokens per day, which are replenished daily.
- At any given time, Web3 users can hold a maximum of 25 TEE tokens and 5 POL tokens in their wallets.

## Model limits

The total size of your model's files must be less than 10 GB. Otherwise, the deployment may fail. Read more about the [requirements for the user-uploaded models](/marketplace/guides/upload#step-1-choose-a-model).
