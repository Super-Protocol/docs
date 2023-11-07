---
id: "setup_cli"
title: "Setting Up"
slug: "/cli_overview/setup_cli"
sidebar_position: 1

---

## Introduction

Super Protocol CLI is a powerful tool for developers. It supports all the functionality currently available in the protocol.

## Installation

Linux:
```
curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
sudo install spctl /usr/local/bin/spctl
```

macOS:
```
curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-macos-x64 -o spctl
sudo install spctl /usr/local/bin/spctl
```

:::note
Windows is not supported, please use WSL
:::

Alternatively, you can download CLI from [GitHub repository](https://github.com/Super-Protocol/ctl). It will be constantly updated in the future so follow the announcements in our social networks.

## Getting started

Before you can use CLI you need to create a configuration file. Please refer to [this guide](/testnet/cli/configuration) to do that.

To get familiar with the available commands please use [commands documentation](/testnet/cli/commands).

If you want to deploy your own solutions on Super Protocol, check [our guides section](/testnet/cli/guides).


## Configuring
---

In order to use Super Protocol CLI tool, you need to create `config.json` file in the same directory where you put `spctl` file. You can obtain the [sample](https://github.com/Super-Protocol/ctl/blob/master/config.example.json) of `config.json` file from the repository. Alternatively, you can make use of the CLI commands and the tool will automatically create an empty `config.json` file for you.

Open `config.json` file and fill in the parameters in accordance with the instructions below.

## backend

This section contains parameters needed to connect to Super Protocol backend. The backend significantly optimizes the reading of data from the blockchain, for example, offers and orders.

|**Parameter**|**Description**|
| :- | :- |
|url|`https://bff.testnet.superprotocol.com/graphql`|
|accessToken|Your personal access token from the Testnet invitation email|

## blockchain

This section contains parameters needed to establish a connection to the blockchain.

|**Parameter**|**Description**|
| :- | :- |
|rpcUrl|`https://mumbai.polygon.superprotocol.com/hesoyam`<br/><br/>**Note.** You can use a different node, but the Super Protocol team will not be able to provide any support associated with it.|
|smartContractAddress|`0xf96266Ec42f8D7ccf5831eBCaD3f4851967e9D45`|
|accountPrivateKey|Your personal private key from the Testnet invitation email|
|authorityAccountPrivateKey|Required for offer creation. Leave this field blank if you are not a provider.|

## storage

Before you can deploy your own solutions or use your own data on Super Protocol, you need to encrypt and upload them to some storage that TEE providers could have access to. See [these guides](/testnet/cli/storages) for information on the supported storages and how to configure them.

|**Parameter**|**Description**|
| :- | :- |
|type|`STORJ`<br/><br/>**Note.** More storage types will be supported in the future.|
|bucket|STORJ bucket. Your encrypted solutions and data are uploaded to this bucket.|
|writeAccessToken|STORJ access grant with `write` permission for the specified bucket. This token is used by CLI to upload your encrypted solutions and data to the specified bucket.|
|readAccessToken|STORJ access grant with `read` permission for the specified bucket. This token is used by TEE providers to access your encrypted solutions and data.|

## workflow

This section contains parameters related to the creation of new orders.

### resultEncryption

TEE providers always encrypt results before uploading them to the storage. The parameters below are related to this encryption.

|**Parameter**|**Description**|
| :- | :- |
|algo|`ECIES`<br/><br/>**Note.** More algorithms will be supported in the future.|
|key|Private key for order results encryption. Public key derived from it is used by TEE providers to encrypt order results. Use [workflows generate-key](/testnet/cli/commands/workflows/generate-key) command to generate this key.|
|encoding|`base64`<br/><br/>**Note.** More types will be supported in the future.|


