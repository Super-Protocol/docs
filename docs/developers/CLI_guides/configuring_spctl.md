---
id: "configuring_SPCTL"
title: "Configuring SPCTL"
slug: "/cli_guides/configuring"
sidebar_position: 3

---

## Prerequisites

In order to configure SPCTL you must have:

**1. Testnet access** (get it [here](/testnet/)):
* Access Token (`accessToken`)
* Private Key (`accountPrivateKey`)

**2. Storage access** (use [this guide](/developers/cli_guides/storages)):
* Bucket name (`bucket`).
* Access grant with *write* permission (`writeAccessToken`).
* Access grant with *read* permission (`readAccessToken`).

**3. Installed SPCTL** (download it [here](/developers/CLI_guides/downloading))

**4. Results Encryption private key** (run [this command](/developers/cli_commands/workflows/generate-key)):
* Private encryption key (`key`)

## Creating config.json

You will need a `config.json` file in the same directory where you have placed SPCTL from the [previous step](/developers/CLI_guides/downloading). 

The best way is to download [this template](https://github.com/Super-Protocol/ctl/blob/master/config.example.json) and modify the parameters as below.

## Config.json parameters

### Backend

This section contains parameters needed to connect to the Super Protocol backend. The backend significantly optimizes the reading of data from the blockchain, offers and orders.

|**Parameter**| **Description**                                                                                                                                 |
| :- |:------------------------------------------------------------------------------------------------------------------------------------------------|
|url| `https://bff.testnet.superprotocol.com/graphql`                                                                                                 |
|accessToken| Your personal Access Token from the Testnet invitation email. If you don't have this token, you can apply for Testnet access [here](/testnet/). |

### Blockchain

This section contains parameters needed to establish a connection to the Polygon blockchain.

|**Parameter**| **Description**                                                                                                                                                 |
| :- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|rpcUrl| `https://mumbai.polygon.superprotocol.com/hesoyam`<br/><br/>**Note.** You can use a different node, but the Super Protocol team will not be able to support it. |
|smartContractAddress| `0xA7Ff565f26b93926e4e6465Eb81d48EfF456848b`                                                                                                                    |
|accountPrivateKey| Your personal Private Key from the Testnet invitation email. If you don't have this token, you can apply for Testnet access [here](/testnet/).                  |
|authorityAccountPrivateKey| Required to create offers. Leave this blank for now.                                                                                                            |

### Storage

This section governs your credentials with the storage providers. You will need to have completed the steps in [this guide](/developers/cli_guides/storages).

|**Parameter**| **Description**                                                                                                                                          |
| :- |:---------------------------------------------------------------------------------------------------------------------------------------------------------|
|type| `STORJ`                                                                                                                                                  |
|bucket| STORJ bucket name. Your encrypted solutions and data are uploaded to this bucket.                                                                        |
|writeAccessToken| STORJ access grant with *write* and *delete* permissions for the specified bucket. This token is used to upload your encrypted solutions and data.       |
|readAccessToken| STORJ access grant with *read* permission for the specified bucket. This token is used by Compute providers to access your encrypted solutions and data. |

### Workflow

This section contains parameters related to the creation of new orders.

#### resultEncryption

Compute providers always encrypt order results before uploading them to your storage. This encryption is configured by parameters below.

|**Parameter**| **Description**                                                                                                                                                                                                                                                                                                                             |
| :- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|algo| `ECIES`                                                                                                                                                                                                                                                                                                                                     |
|key| Private key for order results encryption. Public key derived from it is used by Compute providers to encrypt order results. Use [workflows generate-key](/developers/cli_commands/workflows/generate-key) command to generate this key. <br/><br/>**Note.** Keep this key safe. You won't be able to receive your order results without it. |
|encoding| `base64`                                                                                                                                                                                                                                                                                                                                    |


