---
id: "vllm"
title: "Inference With vLLM"
slug: "/guides/solutions/vllm"
sidebar_position: 6
---

This guide provides step-by-step instructions for running an AI model inference using the Super Protocol packaging of [vLLM](https://www.vllm.ai/), an inference and serving engine for LLMs. This <a id="solution"><span className="dashed-underline">solution</span></a> allows you to run LLM inference within Super Protocol's Trusted Execution Environment (TEE).

## Prerequisites

- [SPCTL](https://docs.develop.superprotocol.com/cli/)
- Git
- BNB and SPPI tokens (opBNB) to pay for transactions and orders

## Repository

Clone the repository with Super Protocol solutions:

```shell
git clone https://github.com/Super-Protocol/solutions.git
```

The vLLM solution includes a Dockerfile and a helper script `run-vllm.sh` that facilitates workflow creation. Note that `run-vllm.sh` does not build an image and instead uses a pre-existing solution offer.

## run-vllm.sh

Copy SPCTL’s binary and its `config.json` to the `vllm/scripts` directory inside the cloned Super-Protocol/solutions repository.

### Place an order

1. Initiate a dialog to construct and place an order:

```shell
./run-vllm.sh
```

2. `Select domain option`:

- `1) Temporary Domain (*.superprotocol.io)` is suitable for testing and quick deployments.
- `2) Own domain` will require you to provide a domain name, TLS certificate, private key, and a tunnel server auth token.

3. `Enter TEE offer id`: Enter a compute offer ID. This determines the available compute resources and cost of your order. You can find the full list of available compute offers on the [Marketplace](https://marketplace.superprotocol.com/).

4. `Provide model as resource JSON path, numeric offer id, or folder path`: Enter one of the following:

- a path to the model's resource JSON file, if it was already uploaded with SPCTL
- model offer ID, if the model exists on the Marketplace
- a path to the local directory with the model to upload it using SPCTL.

5. `Enter API key` or press `Enter` to generate one automatically.

Wait for the deployment to be ready and find the information about it in the output, for example:

```shell
===================================================
VLLM server is available at: https://whau-trug-nail.superprotocol.io
API key: d75c577d-e538-4d09-8f59-a0f00ae961a3
Order IDs: Launcher=269042, VLLM=269044
===================================================
```

### API

Once deployed on Super Protocol, your model runs inside a TEE and exposes an OpenAI-compatible API. You can interact with it as you would with a local vLLM instance.

Depending on the type of request you want to make, use the following API endpoints:

- Chat Completions (`/v1/chat/completions`)
- Text Completions (`/v1/completions`)
- Embeddings (`/v1/embeddings`)
- Audio Transcriptions & Translations (`/v1/audio/transcriptions`, `/v1/audio/translations`)

See the [full list of API endpoints](https://docs.vllm.ai/en/latest/serving/openai_compatible_server/).

## Dry run

```shell
./run-vllm.sh --suggest-only
```

The option `--suggest-only` allows you to perform a dry run without actually uploading files and creating orders.

Complete the dialog, as usual; only use absolute paths.

In the output, you will see a prepared command for running the script non-interactively, allowing you to easily modify the variables and avoid re-entering the dialog. For example:

```shell
RUN_MODE=temporary \
MODEL_RESOURCE=55 \
VLLM_API_KEY=9c6dbf44-cef7-43a4-b362-43295b244446 \
/home/user/vllm/scripts/run-vllm.sh \
--config ./config.json \
--tee 8
```

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).