---
id: "First Steps"
title: "First Steps"
slug: "/first_steps"
sidebar_position: 1
---

## Prerequisites

Before you can use this guide, you need to receive an invitation letter with personal credentials to access the Super Protocol Testnet. If you don't have it, please refer to [Getting Started guide](https://docs.dev.superprotocol.com/testnet).

In order to deploy your own solutions you need [Command-line Interface (CLI)](https://docs.dev.superprotocol.com/testnet/cli).

The following systems are supported:

- Linux x64
- macOS x64
- Windows (WSL only) x64

ARM-based CPUs such as Apple M1 are not supported.

Additional required software:

- Docker
- OpenSSL

## Install Python base image

Your solution will be using base Python image that is already available on Super Protocol. Therefore, in order to test it locally, as well as prepare the solution for deployment, you need to download the base image and upload it to Docker.

### Download Python Image

Use this command to download the Python image from this Super Protocol offer.&#x20;

```
spctl offers download-content 5
```

### Upload Python image to Docker

Then use this command to upload the Python image to Docker.

```
docker load -i <Python base image archive name>
```
