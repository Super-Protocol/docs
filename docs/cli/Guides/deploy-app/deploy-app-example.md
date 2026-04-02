---
id: "deploy-app-example"
title: "Example: Python script"
slug: "/guides/deploy-app/example"
sidebar_position: 1
---

This guide serves as an example to the more general [deployment guide](/cli/guides/deploy-app) and shows how to deploy a Python script on Super Protocol without modifying its code.

The [simple script](/files/usd_to_crypto.py) used here as an example calculates how much Bitcoin (BTC) and Ether (ETH) can be bought for given amount in US dollars:

1. Reads the input amount from `input.txt` located in the same directory.
2. Fetches current prices of BTC and ETH using CoinGecko API.
3. Calculates how much BTC and ETH can be bought for this amount of USD.
4. Creates `result.txt` in the same directory and writes the result to it.

In this deployment, the script will be the <a id="solution"><span className="dashed-underline">solution</span></a>, and `input.txt` will be the <a id="data"><span className="dashed-underline">data</span></a>.

## Prerequisites

- Docker
- [SPCTL](/cli)

### 0. Prepare the files

Create a local directory `usd_to_crypto`. Download the [example script](/files/usd_to_crypto.py) and rename it to `usd_to_crypto.py`.

Create a new file `input.txt` to serve as the data input, and add a number—USD amount, for example, `100000`.

Copy SPCTL and its `config.json` into this directory.

### 1. Prepare the solution

Keep in mind that file locations inside a CVM will differ from a local run:

- Data (`input.txt`) must be found in one of the `/sp/inputs/input-xxxx` directories.
- `result.txt` must be placed into `/sp/output` to be available to download once the execution is finished.

1.1. Create a new file named `entrypoint.sh` and add the following code:

```sh title="entrypoint.sh"
#!/bin/sh
set -eu

# Fixed CVM paths (overridable if needed)
: "${INPUTS_DIR:=/sp/inputs}"
: "${OUTPUT_DIR:=/sp/output}"
: "${SCRIPT_PATH:=/usr/local/bin/usd_to_crypto.py}"

mkdir -p "${OUTPUT_DIR}"
cd "${OUTPUT_DIR}"

# Resolve input file
INPUT_FILE="$(find "${INPUTS_DIR}" -mindepth 2 -maxdepth 3 -type f -name 'input.txt' 2>/dev/null | sort | head -n 1 || true)"

# Make the script's expected input file available in CWD (/sp/output)
rm -f input.txt || true
if [ -n "${INPUT_FILE}" ] && [ -f "${INPUT_FILE}" ]; then
  cp -f "${INPUT_FILE}" input.txt
else
  # If missing, create an empty file so the Python script emits a clean error
  : > input.txt
fi

# Run the Python script; it reads ./input.txt and writes ./result.txt here (/sp/output)
exec python3 "${SCRIPT_PATH}"
```

Create a new file named `Dockerfile` and add the following code:

```dockerfile title="Dockerfile"
FROM ubuntu:22.04

# Non-interactive tzdata install
ENV DEBIAN_FRONTEND=noninteractive

# System deps
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    ca-certificates \
    curl \
    jq \
    openssl \
    tzdata \
    sed \
    grep \
    coreutils \
 && rm -rf /var/lib/apt/lists/*

# Python deps
RUN pip3 install --no-cache-dir requests

# Put the scripts where your environment expects executables
COPY usd_to_crypto.py /usr/local/bin/usd_to_crypto.py
RUN chmod +x /usr/local/bin/usd_to_crypto.py

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set /sp as workdir (doesn't matter in this case -- entrypoint.sh uses /sp/output as workdir)
WORKDIR /sp

# Set entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
```

1.2. Build a Docker image:

```shell
docker build -t usd_to_crypto .
```

1.3. Save and archive the image:

```shell
docker save usd_to_crypto:latest | gzip > usd_to_crypto.tar.gz
```

1.4. Upload the archive:

```shell
./spctl files upload usd_to_crypto.tar.gz \
    --filename usd_to_crypto.tar.gz \
    --output usd_to_crypto.resource.json
```

### 2. Prepare data

2.1. Archive the file:

```shell
tar -czvf input.tar.gz ./input.txt
```

2.2. Upload the archive:

```shell
./spctl files upload ./input.tar.gz \
    --filename input.tar.gz \
    --output input.resource.json
```

### 3. Deploy

Place an order:

```shell
./spctl workflows create \
    --tee 7 \
    --solution ./usd_to_crypto.resource.json \
    --data ./input.resource.json
```

Find the order ID in the output, for example:

```
Workflow was created, TEE order id: ["275510"]
```

### 4. Download the result

Replace `275510` with your order ID:

```shell
./spctl orders download-result 275510
```

If there is no result for your order yet, wait a couple of minutes and try again.

Find `output/result.txt` inside the downloaded archive `result.tar.gz`.

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).