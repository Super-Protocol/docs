---
id: "cli-configuration"
title: "Configuration"
slug: "/cli/configuration/"
---

In order to use Super Protocol CLI tool you need to create `config.json` file in the same directory where you put `spctl` file. You can get the [example](https://github.com/Super-Protocol/ctl/blob/master/config.example.json) of the file from the repository. Alternatively, just use of the CLI commands and the tool will create an empty `config.json` file for you.

Open `config.json` file and fill in the parameters in accordance with instructions below.

## backend

This section contains parameters needed to connect to Super Protocol backend. The backend significantly optimizes the reading of data from the blockchain, for example, offers and orders.

|**Parameter**|**Description**|
| :- | :- |
|url|`https://bff.testnet.superprotocol.com/graphql`|
|accessToken|Your personal access token from the Testnet invitation email|

## blockchain

This section contains parameters needed to connect to the blockchain. 

|**Parameter**|**Description**|
| :- | :- |
|rpcUrl|`https://wandering-snowy-sun.matic-testnet.quiknode.pro/98e3f8f8fe7ef3c53743ba59fbe6fd6771638d61/`<br/><br/>**Note.** Your can use a different node but Super Protocol team will not be able to provide any support related to it.|
|smartContractAddress|`0x2Bb91A63BC4956Ae4dAC5dBe9B068da0bD1D035d`|
|accountPrivateKey|Your personal private key from the Testnet invitation email|

## storage

Before you can deploy your own solutions or use your own data on Super Protocol you need to encrypt and upload them to some storage that TEE providers could access. See [these guides](/testnet/cli/storages) for information about the supported storages and how to configure them.

|**Parameter**|**Description**|
| :- | :- |
|type|`STORJ`<br/><br/>**Note.** More storage types will be supported in the future.|
|bucket|STORJ bucket. Your encrypted solutions and data are uploaded to this bucket.|
|writeAccessToken|STORJ access grant with `write` permission for the specified bucket. This token is used by CLI to upload your encrypted solutions and data to the specified bucket.|
|readAccessToken|STORJ access grant with `read` permission for the specified bucket. This token is used by TEE providers to access your encrypted solutions and data.|

## workflow

This section contains parameters related to the creation of new orders.

### resultEncryption

TEE providers always encrypt results of before uploading them to storage. Parameters below are related to this encryption.

|**Parameter**|**Description**|
| :- | :- |
|algo|`ECIES`<br/><br/>**Note.** More algorithms will be supported in the future.|
|key|Private key for order results encryption. Public key derived from it is used by TEE providers to encrypt order results. Use [workflows generate-key](/testnet/cli/commands/workflows/generate-key) command to generate this key.|
|encoding|`base64`<br/><br/>**Note.** More types will be supported in the future.|


