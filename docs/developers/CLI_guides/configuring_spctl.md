---
id: "configuring_SPCTL"
title: "Configuring SPCTL"
slug: "/cli_guides/configuring"
sidebar_position: 3

---

## Testnet access

Super Protocol is currently in Testnet phase. In order to properly set up SPCTL you will need the following Testnet credentials:

* Access Token
* Private Key

If you have not yet applied for Testnet access, you can do it [here](/testnet/).

## Storage access

To configure SPCTL you will need to have completed the steps in [this guide](/developers/cli_guides/storages).

Please have at hand:
* Bucket name.
* Access grant with *write* permission.
* Access grant with *read* permission.


## Creating config.json

You will need a `config.json` file in the same directory where you have placed SPCTL from the [previous step](/developers/CLI_guides/downloading). 

The best way is to download [this template](https://github.com/Super-Protocol/ctl/blob/master/config.example.json) and modify the parameters as below.

## Config.json parameters

### Backend

This section contains parameters needed to connect to the Super Protocol backend. The backend significantly optimizes the reading of data from the blockchain, offers and orders.

|**Parameter**| **Description**                                              |
| :- |:-------------------------------------------------------------|
|url| `https://bff.testnet.superprotocol.com/graphql`              |
|accessToken| Your personal Access Token from the Testnet invitation email.|

### Blockchain

This section contains parameters needed to establish a connection to the Polygon blockchain.

|**Parameter**| **Description**                                                                                                                                                 |
| :- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|rpcUrl| `https://mumbai.polygon.superprotocol.com/hesoyam`<br/><br/>**Note.** You can use a different node, but the Super Protocol team will not be able to support it. |
|smartContractAddress| `0xf96266Ec42f8D7ccf5831eBCaD3f4851967e9D45`                                                                                                                    |
|accountPrivateKey| Your personal private key from the Testnet invitation email.                                                                                                    |
|authorityAccountPrivateKey| Required to create offers. Leave this blank for now.                                                                                                            |

### Storage



Before you can deploy your own solutions or use your own data on Super Protocol, you need to encrypt and upload them to some storage that TEE providers could have access to. 


See [these guides](/developers/cli_guides/storages) for information on the supported storages and how to configure them.

|**Parameter**|**Description**|
| :- | :- |
|type|`STORJ`<br/><br/>**Note.** More storage types will be supported in the future.|
|bucket|STORJ bucket. Your encrypted solutions and data are uploaded to this bucket.|
|writeAccessToken|STORJ access grant with `write` permission for the specified bucket. This token is used by CLI to upload your encrypted solutions and data to the specified bucket.|
|readAccessToken|STORJ access grant with `read` permission for the specified bucket. This token is used by TEE providers to access your encrypted solutions and data.|

### Workflow

This section contains parameters related to the creation of new orders.

### resultEncryption

TEE providers always encrypt results before uploading them to the storage. The parameters below are related to this encryption.

|**Parameter**| **Description**                                                                                                                                                                                                                     |
| :- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|algo| `ECIES`<br/><br/>**Note.** More algorithms will be supported in the future.                                                                                                                                                         |
|key| Private key for order results encryption. Public key derived from it is used by TEE providers to encrypt order results. Use [workflows generate-key](/developers/cli_commands/workflows/generate-key) command to generate this key. |
|encoding| `base64`<br/><br/>**Note.** More types will be supported in the future.                                                                                                                                                             |


