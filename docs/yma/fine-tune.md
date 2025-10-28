---
id: "fine-tune-unsloth"
title: "Fine-tune (Unsloth)"
slug: "/"
sidebar_position: 0
---

This guide provides step-by-step instructions on how to fine tune your AI model on Super Protocol using [Unsloth](https://unsloth.ai/).

## Prerequisites

- [SPCTL](/cli)
- Docker
- SPPI and BNB tokens

## 1. Prepare the solution

1.1. Create `Dockerfile`, `requirements.txt`, `train.py`.

1.2. Build a Docker image with Unsloth:

```shell
docker build -t unsloth .
```

1.3. Save and zip the image:

```shell
docker save unsloth:latest | gzip > unsloth.tar.gz
```

1.4. Copy the SPCTL's binary and `config.json` to the directory with the archived image.

1.5. Upload the archive

```shell
./spctl files upload ./unsloth.tar.gz --filename unsloth.tar.gz --output unsloth.resource.json
```

:::note

The output resource file contains information on how to access and decrypt the uploaded content. This makes it unsafe to share if the uploaded content is sensitive.

To delete the uploaded content from the storage, use the [`files delete`](/cli/commands/files/delete) command.

:::

---

**Expected step results:**

- `unsloth.resource.json`

## 2. Prepare the model

2.1. Place the model files into a separate directory.

2.2. Upload the model:

```shell
./spctl files upload <PATH> --filename model.tar.gz --output model.resource.json --use-addon
```

Replace `<PATH>` with the path to the directory with the dataset.

---

**Expected step results:**

- `model.resource.json`

## 3. Prepare the dataset

3.1. Place the dataset files into a separate directory.

3.2. Upload the dataset:

```shell
./spctl files upload <PATH> --filename dataset.tar.gz --output dataset.resource.json --use-addon
```

Replace `<PATH>` with the path to the directory with the dataset.

---

**Expected step results:**

- `dataset.resource.json`

## 4. Place the order

Ensure all three resource JSON files are located in the SPCTL directory.

Execute the command:

```shell
./spctl workflows create --tee <OFFER>,<SLOT> --tee-slot-count <INC> --solution ./unsloth.resource.json --data ./model.resource.json --data ./dataset.resource.json
```

Replace:

- `<OFFER>` with the compute offer ID
- `<SLOT>` with the selected slot ID
- `<INC>` with a slot increment