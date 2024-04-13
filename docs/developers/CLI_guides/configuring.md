---
id: "configuring_spctl"
title: "Configuring SPCTL"
slug: "/cli_guides/configuring"
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Download SPCTL

<Tabs>
  <TabItem value="linux" label="Linux" default>
    Open Terminal in the directory where you want to place SPCTL for Linux and run the following command:
    ```
    curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
    chmod +x ./spctl
    ```
  </TabItem>
  <TabItem value="macos" label="MacOS">
    Open Terminal in the directory where you want to place SPCTL for MacOS and run the following command:
    ```
    curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-macos-x64 -o spctl
    chmod +x ./spctl
    ```
  </TabItem>
  <TabItem value="windows" label="Windows">
    Open WSL Terminal in the directory where you want to place SPCTL for Windows and run the following command:
    ```
    curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
    chmod +x ./spctl
    ```
  </TabItem>
</Tabs>

You can also download and install SPCTL manually from our [GitHub repository](https://github.com/Super-Protocol/ctl).

## Set up config.json manually

You will need a file called `config.json` in the same directory where you have placed the SPCTL executable.

### For Users
Copy and paste into a new file or [download a template](./assets/config.json). Parameters shared by all users are pre-configured.

```json title="config.json"
{
    "backend": {
        "url": "https://bff.testnet.superprotocol.com/graphql",
        "accessToken": ""
    },
    "blockchain": {
        "rpcUrl": "https://amoy.polygon.superprotocol.com/hesoyam",
        "smartContractAddress": "0x589c5F093524e9a6cD4bAEe786859bC6C3e38bec",
        "accountPrivateKey": ""
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

Then fill in the remaining parameters that are specific to your account:

|**Parameter**|**Description**|
|:-----------------|:-------------------|
|accessToken| Your personal *Access Token* from the Testnet invitation email.||
|accountPrivateKey| Your personal *Private Key* from the Testnet invitation email.|
|key| Private key for order results encryption. Use [workflows generate-key](/developers/cli_commands/workflows/generate-key) command to generate this key.|

You are done! Now you can use SPCTL.

### For Providers
Copy and paste into a new file or [download a template](./assets/config.json). Parameters shared by all users are pre-configured.

```json title="config.json"
{
    "backend": {
        "url": "https://bff.testnet.superprotocol.com/graphql",
        "accessToken": ""
    },
    "blockchain": {
        "rpcUrl": "https://amoy.polygon.superprotocol.com/hesoyam",
        "smartContractAddress": "0x589c5F093524e9a6cD4bAEe786859bC6C3e38bec",
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

Then fill in the remaining parameters that are specific to your account:

|**Parameter**| **Description**                                                                                                                                       |
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|accessToken| Your personal *Access Token* from the Testnet invitation email.                                                                                       ||
|accountPrivateKey| Your *Private Key* of your provider's action account.                                                                                                 |
|authorityAccountPrivateKey| Your *Private Key* of your provider's authority account.                                                                                              |
|key| Private key for order results encryption. Use [workflows generate-key](/developers/cli_commands/workflows/generate-key) command to generate this key. |

You are done! Now you can use SPCTL.

## Create a test order

Let's make sure that it works.

Check version, it should be the latest version. To check the current latest version, please follow the [link](https://github.com/Super-Protocol/ctl/releases):
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

And then [create](/developers/cli_commands/workflows/create) your first simple order: a [Super Chat](/developers/offers/superchat) solution using tunnels.

```
./spctl workflows create --solution 11,11 --solution 6,2 --data 15,19 --storage 23,27
```

You will get an Order ID. You can then check the order status using the [orders](/developers/cli_commands/orders) command or using the [Marketplace GUI](/developers/marketplace). 

## Set up Storj

For quick deployments you can pick an existing storage offer from the Marketplace when using the [files upload](/developers/cli_commands/files/upload) command. This is recommended for new users.

But for additional control you also have an option to configure your own storage manually in SPCTL. Populate the appropriate fields in `config.json` as below (you will need to sign up with Storj):

|**Parameter**|**Description**|
|:-----------------|:-------------------|
|bucket| STORJ bucket name. Your encrypted solutions and data are uploaded to this bucket. Use [this guide](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/) to create it.|
|writeAccessToken| STORJ **write** access grant with *write* and *delete* permissions for the specified bucket. Use [this guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/) to generate it.|
|readAccessToken| STORJ **read** access grant with *read* permission for the specified bucket. Use the same guide as above to generate it.|
