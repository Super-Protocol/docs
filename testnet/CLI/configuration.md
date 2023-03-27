---
id: "cli-configuration"
title: "Configuration"
slug: "/cli/configuration/"
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
|rpcUrl|`https://matic.getblock.io/testnet/85482b49-c3cc-4a91-9db0-044560a53206`<br/><br/>**Note.** You can use a different node, but the Super Protocol team will not be able to provide any support associated with it.|
|smartContractAddress|`0x7765A6A28D46F09A6197082aa2f62Cb8E4CCF6B7`|
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


