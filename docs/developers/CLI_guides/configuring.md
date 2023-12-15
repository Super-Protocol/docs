---
id: "configuring_spctl"
title: "Configuring SPCTL"
slug: "/cli_guides/configuring"
sidebar_position: 6
---

## Download SPCTL

Current SPCTL version is [0.8.2](https://github.com/Super-Protocol/ctl).

Open Terminal in the directory where you want to place SPCTL and run the following command:

For Linux:

```
curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
chmod +x ./spctl
```

For MacOS:

```
curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-macos-x64 -o spctl
chmod +x ./spctl
```

Windows is currently not supported. Please use WSL


## Set up config.json

You will need a `config.json` file in the same directory where you have placed SPCTL executable.

Download [this template](https://github.com/Super-Protocol/ctl/blob/master/config.example.json) or create a new file as below. Some parameters are pre-configured.

```
{
    "backend": {
        "url": "https://bff.testnet.superprotocol.com/graphql",
        "accessToken": ""
    },
    "blockchain": {
        "rpcUrl": "https://mumbai.polygon.superprotocol.com/hesoyam",
        "smartContractAddress": "0xA7Ff565f26b93926e4e6465Eb81d48EfF456848b",
        "accountPrivateKey": "",
        "authorityAccountPrivateKey": ""
    },
    "storage": {
        "type": "STORJ",
        "bucket": "",
        "writeAccessToken": "",
        "readAccessToken": ""
    },
    "workflow": {
        "resultEncryption": {
            "algo": "ECIES",
            "key": "",
            "encoding": "base64"
        }
    }
}
```

Insert the remaining parameters:

| **Parameter**    | **Description**                     |
|:-----------------|:-------------------|
|accessToken| Your personal *Access Token* from the Testnet invitation email.          | |
|accountPrivateKey| Your personal *Private Key* from the Testnet invitation email.              |
|authorityAccountPrivateKey| Leave this blank for now.                       |
|bucket| STORJ bucket name. Your encrypted solutions and data are uploaded to this bucket. Use [this guide](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/) to create it.        |
|writeAccessToken| STORJ access grant with *write* and *delete* permissions for the specified bucket. Use [this guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/) to generate it.    |
|readAccessToken| STORJ access grant with *read* permission for the specified bucket. Use [this guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/) to generate it.             |
|key| Private key for order results encryption. Use [workflows generate-key](/developers/cli_commands/workflows/generate-key) command to generate this key.|

You are done! Now you can use SPCTL.

## Create a test order

Let's make sure that it works.

Check version, it should be 0.8.2:
```
./spctl --version
```

Get your first TEE and MATIC tokens:

```
./spctl tokens request --tee
```
```
./spctl tokens request --matic
```

And then create your first simple order: an [Image Classification](/developers/offers/python-image) solution:
```
./spctl workflows create --tee 1 --solution 7,3 --solution 5,1 --data 16,20 --data 17,21 --storage 23,27
```

You will get an Order ID. You can then check the order status using the [orders](/developers/cli_commands/orders) command or using the [Marketplace GUI](/developers/marketplace). 
