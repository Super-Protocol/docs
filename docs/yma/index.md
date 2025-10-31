---
id: "index"
title: "Fine-tune (Unsloth)"
slug: "/"
sidebar_position: 0
---

## Prerequisites

- Git
- SPCTL, [configured](/cli#for-users) with your wallet and Storj account
- BNB and SPPI tokens on your wallet to pay for orders

## 1. Prepare

### Training script

Use the provided `train.py` as an example for your own training scripts. Keep in mind the special file structure within the <a id="tee"><span className="dashed-underline">TEE</span></a>:

| Location                  | Purpose                               | Access |
| :-                        | :-                                    | :- |
| `/sp/inputs/input-0001`   | Directory with the training script    | Read-only |
| `/sp/inputs/input-0002`   | Directory with the dataset            | Read-only |
| `/sp/inputs/input-0002`   | Directory with the model              | Read-only |
| `/sp/output`              | Output directory for results          | Write; read own files |

### Repository

Clone the [Super-Protocol/solutions](https://github.com/Super-Protocol/solutions) repository:

```shell
git clone https://github.com/Super-Protocol/solutions.git
```

### SPCTL

Go to the `unsloth/scripts` directory inside the cloned repository and copy or download the SPCTL binary there alongside its `config.json` file.

## 2. Execute

Run the script `unsloth/scripts/run-unsloth.sh`:

```shell
./run-unsloth.sh --suggest-only
```

The option `--suggest-only` is not required but recommended if you are running the script for the first time. It will perform a dry run without actually creating any orders.

When prompted:

1. (Step 3) Enter the compute offer ID.

2. (Step 4) Choose run mode: file (`1`).

3. (Step 4.1) Select the model option. Super Protocol already has an offer with MedGemma 27b (offer ID: 15900), or you can choose to upload a model manually from the local drive.

4. (Step 5) Enter the path to the training script.

5. (Step 5.1) Enter the path to the dataset directory.

:::note

After the training script, dataset, and model were uploaded, SPCTL creates resource files (respectively, `train.json`, `data.json`, or `model.json`). These files contain information on how to access and decrypt the uploaded content. This makes them unsafe to share if the uploaded content is sensitive.

To delete the uploaded content from the storage, use the SPCTL's [`files delete`](/cli/commands/files/delete) command.

:::

In the output, you will see a prepared command for running the script non-interactively, allowing you to change the variables easily. Instead of uploading the model and dataset again, you can reuse the existing resource files. The training script, however, should be uploaded every time.

When you are familiarized with the process, execute the script again:

```shell
./run-unsloth.sh
```