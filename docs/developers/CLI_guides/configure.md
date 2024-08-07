---
id: "configure_spctl"
title: "Configure SPCTL"
slug: "/cli_guides/configure"
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**SPCTL**—Super Protocol Control—is a versatile tool to access the Marketplace CLI. With this tool, you can create and manage orders, offers, providers, keys, workflows, files on distributed storage, and more.

## Testnet access

To set up SPCTL, you need Super Protocol Testnet access. If you do not have it yet, [apply to join](/testnet/). The Super Protocol team sends out invites daily, but it may take several days if the number of requests is high. You can ask any Community Manager on the [Super Protocol Discord server](https://discord.gg/superprotocol) about the status of your request. When your access is ready, you will receive a Testnet invitation email with your Testnet credentials:
  - _Testnet Account address_: the public key of the Testnet Account wallet
  - _Private Key_: the private key of the Testnet Account wallet
  - _Access Token_: necessary to receive free test TEE and MATIC tokens

## Download SPCTL

<Tabs>
  <TabItem value="linux" label="Linux" default>
    Open a terminal in the directory where you want to place SPCTL for Linux and run the following command:
    ```
    curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
    chmod +x ./spctl
    ```
  </TabItem>
  <TabItem value="macos" label="MacOS">
    Open Terminal in the directory where you want to place SPCTL for macOS and run the following command:
    ```
    curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-macos-x64 -o spctl
    chmod +x ./spctl
    ```
  </TabItem>
  <TabItem value="windows" label="Windows">
    Open a WSL terminal in the directory where you want to place SPCTL and run the following command:
    ```
    curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
    chmod +x ./spctl
    ```
  </TabItem>
</Tabs>

You can also download and install SPCTL manually from the Super Protocol [GitHub repository](https://github.com/Super-Protocol/ctl).

## For users

Execute the `./spctl setup` command to initiate the setup dialog. First, provide your Testnet Access Token and then your Testnet Private Key. You can find them in your Testnet invitation email.

Further, SPCTL asks if you have a Storj bucket with configured access grants. This step is optional. Select `No` if you do not have them yet. You can configure Storj and provide this information [later in this guide](/developers/cli_guides/configure#set-up-storj) or skip this step entirely.

After that, SPCTL creates `config.json` in the SPCTL root directory. If you need to update your account information, execute `./spctl setup` again or modify `config.json` manually in any text editor.

:::note

For SPCTL to work correctly, `config.json` must be in the same directory as the SPCTL executable. Do not move or rename this file unless you want to create a separate SPCTL configuration for another Testnet account.

:::

### Manual configuration

You can also skip the `./spctl setup` command completely and set up SPCTL manually. [Download the template](./assets/config.json) and rename it to `config.json`. Alternatively, create an empty `config.json` file in the SPCTL directory and then copy and paste the following template:

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

Do not change the preconfigured parameters and fill in the following ones:

|**Parameter**|**Description**|
|:-|:-|
|accessToken| Your Testnet Access Token from the Testnet invitation email||
|accountPrivateKey| Your Testnet Private Key from the Testnet invitation email|
|key| Private key for order result encryption. Use the [workflows generate-key](/developers/cli_commands/workflows/generate-key) command to create this key|
|bucket| Name of your Storj bucket (optional)|
|writeAccessToken| Storj access grant with **write** and **delete** permissions for this bucket (optional)|
|readAccessToken| Storj access grant with **read** permission for this bucket (optional)|

## For offer providers

This section is for offer providers only. If you are a regular user, skip it and go to the next section to [create a test order](/developers/cli_guides/configure#create-a-test-order).

Offer providers need another copy of SPCTL configured for their provider accounts. If you completed all the necessary steps in the [Providers and Offers](/developers/cli_guides/providers_offers) guide, you should have the configuration file created automatically in your Provider Tools directory. Its name looks like this:

```spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAa.json```

Where `0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAa` is your Authority Account wallet address.

Rename this file to `config.json` so SPCTL can recognize it as its configuration file. Copy or download the SPCTL executable to the Provider Tools root directory.

Alternatively, copy this provider's SPCTL config to your User Account's SPCTL directory. Use the `--config` option with [SPCTL commands](/developers/cli_commands) to manage your provider and orders. For example:

```
./spctl orders list --my-account --type tee --config spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAa.json
```

### Manual configuration

As with your User Account's configuration file, you can manually create the provider's configuration file. Back up the current `config.json` or create a separate directory for your provider's copy of the SPCTL executable.

Use the following `config.json` template:

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

Do not change the preconfigured parameters and fill in the following ones:

|**Parameter**|**Description**|
|:-|:-|
|accessToken| Your regular Testnet Access Token from the Testnet invitation email|
|accountPrivateKey| Private Key of your provider's Action Account|
|authorityAccountPrivateKey| Private Key of your provider's Authority Account|
|key| Private key for order result encryption. Use the key from your User Account or generate a new one with the [workflows generate-key](/developers/cli_commands/workflows/generate-key) command|
|bucket| Name of your Storj bucket (optional)|
|writeAccessToken| Storj access grant with **write** and **delete** permissions for this bucket (optional)|
|readAccessToken| Storj access grant with **read** permission for this bucket (optional)|

You can find the section with your Authority and Action Accounts Private Keys in `provider-tools-config.json` in the Provider Tools directory:

```json title="provider-tools-config.json"
    "account": {
        "authority": "0x50612a8bf52cb263825e58c72361ea58c04efn7af7e5b549ea9c2ed02059c668d",
        "action": "0x0512ad96f1900d3ecf0987m81c74af455ebb49kjce5bc1fd3zc0b410c7dc6f05",
        "tokenReceiver": "0x167d93786ghbf058065a5a592a1d55ca1e620d19b7d1e47330f2b64d9fcb6a38"
    },
```

## Create a test order

Before you create an order, ensure you have the latest version of SPCTL. Execute the following command to see the version you are currently using:

```
./spctl --version
```

Go to the SPCTL's [GitHub page](https://github.com/Super-Protocol/ctl/releases) to see the latest version.

Use the [`tokens request`](https://docs.dev.superprotocol.com/developers/cli_commands/tokens/request) command to get free test TEE and MATIC tokens:

```
./spctl tokens request --tee
./spctl tokens request --matic
```

It may take a couple of minutes for the tokens to appear on your account. When you have them, execute the [`workflows create`](/developers/cli_commands/workflows/create) command to create a [Super Chat](/developers/offers/superchat) order:

```
./spctl workflows create --solution 12,12 --solution 6,2 --data 17,22 --storage 25,30
```

When your order is created, you will see the following in the last line of the CLI output:

```
Workflow was created, TEE order id: ["XXXX"]
```

Where `XXXX` is the ID of your order.

It usually takes 20-25 minutes for this order to be done. You can then check the order status using the [`orders`](/developers/cli_commands/orders) command or in [Marketplace GUI](/developers/marketplace).

## Set up Storj

This step is optional. You can add a Marketplace storage offer to the [`files upload`](/developers/cli_commands/files/upload) command instead of configuring Storj. However, for additional control, you can set up and use your storage.

Register a [Storj](https://www.storj.io/) account if you do not have one yet.

:::note

If you use a free Storj account, your files will become unavailable after the end of the trial period.

:::

Create a bucket for your encrypted solutions and data. Refer to [this guide](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/).

Create two access grants for this bucket. One should provide the **write** and **delete** permissions, and the other one the **read** permission. Alternatively, you can create a single access grant with the **all** permission. Refer to [this guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/) to generate access grants.

Open SPCTL's `config.json` in a text editor and fill in the following parameters:

|**Parameter**|**Description**|
|:-|:-|
|bucket| Name of a Storj bucket|
|writeAccessToken| Storj access grant with the **write** and **delete** permissions for this bucket|
|readAccessToken| Storj access grant with the **read** permission for this bucket|

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol). The Community Managers will be happy to help you.