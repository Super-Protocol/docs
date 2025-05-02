---
id: "index"
title: "Configure SPCTL"
slug: "/"
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**SPCTL**—Super Protocol Control—is a versatile tool to access the Marketplace CLI. With this tool, you can create and manage orders, offers, providers, keys, workflows, files in distributed storage, and more.

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
    Launch [WSL](https://learn.microsoft.com/en-us/windows/wsl) from PowerShell, go to the directory where you want to place SPCTL, and run the following command:
    ```
    curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
    chmod +x ./spctl
    ```
  </TabItem>
</Tabs>

You can also download and install SPCTL manually from the Super Protocol [GitHub repository](https://github.com/Super-Protocol/ctl).

## For users

Execute the `./spctl setup` command to initiate the setup dialog.

Enter the following Access Token when prompted:

```
eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g
```

Then, enter a private key to your testnet EVM wallet.

Further, SPCTL asks if you have a Storj bucket with configured access grants. This step is optional. Select `No` if you do not have them yet. You can configure Storj and provide this information [later in this guide](/cli#set-up-storj-access) or skip this step entirely.

After that, SPCTL creates `config.json` in the SPCTL root directory. If you need to update your account information, execute `./spctl setup` again or modify `config.json` manually in a text editor.

:::note

For SPCTL to work correctly, `config.json` must be in the same directory as the SPCTL executable. Do not move or rename this file unless you want to create a separate SPCTL configuration for another Testnet account.

:::

### Manual configuration

You can also skip the `./spctl setup` command completely and set up SPCTL manually. Create an empty `config.json` file in the SPCTL directory and add the following template:

```json title="config.json"
{
    "backend": {
        "url": "https://bff.superprotocol.com/graphql",
        "accessToken": "eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g"
    },
    "blockchain": {
        "rpcUrl": "https://polygon.superprotocol.com/",
        "smartContractAddress": "0x3C69ea105Fc716C1Dcb41859281Aa817D0A0B279",
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
|accountPrivateKey| Your Testnet Private Key from the Testnet invitation email|
|key| Private key for order result encryption. Use the [workflows generate-key](/cli/commands/workflows/generate-key) command to create this key|
|bucket| Name of your Storj bucket (optional)|
|writeAccessToken| Storj access grant with **Full** permission (**Read**, **List**, **Write**, **Delete**) for this bucket (optional)|
|readAccessToken| Storj access grant with **Read** permission for this bucket (optional)|

## For offer providers

This section is for offer providers only. Skip it if you are a regular user.

Offer providers need another copy of SPCTL configured for their provider accounts. If you completed all the necessary steps in the [Providers and Offers] guide, you should have the configuration file created automatically in your Provider Tools directory. Its name looks similar to the following:

```spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAb.json```

Where `0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAb` is your Authority Account wallet address.

Use the `--config` option with [SPCTL commands](/cli/commands) to manage your provider and orders. For example:

```
./spctl orders list --my-account --type tee --config spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAa.json
```

Alternatively, rename this file to `config.json` so SPCTL can recognize it as its configuration file. Copy or download the SPCTL binary to the Provider Tools root directory.

### Manual configuration

As with your User Account's configuration file, you can manually create the provider's configuration file. Back up the current `config.json` or create a separate directory for your provider's copy of the SPCTL executable.

Use the following `config.json` template:

```json title="config.json"
{
    "backend": {
        "url": "https://bff.superprotocol.com/graphql",
        "accessToken": "eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g"
    },
    "blockchain": {
        "rpcUrl": "https://polygon.superprotocol.com/",
        "smartContractAddress": "0x3C69ea105Fc716C1Dcb41859281Aa817D0A0B279",
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
|accountPrivateKey| Private Key of your provider's Action Account|
|authorityAccountPrivateKey| Private Key of your provider's Authority Account|
|key| Private key for order result encryption. Use the key from your User Account or generate a new one with the [workflows generate-key](/cli/commands/workflows/generate-key) command|
|bucket| Name of your Storj bucket (optional)|
|writeAccessToken| Storj access grant with **Full** permission (**Read**, **List**, **Write**, **Delete**) for this bucket (optional)|
|readAccessToken| Storj access grant with **Read** permission for this bucket (optional)|

You can find the section with your Authority and Action Accounts Private Keys in `provider-tools-config.json` in the Provider Tools directory. Example:

```json title="provider-tools-config.json"
    "account": {
        "authority": "0x50612a8bf52cb263825e58c72361ea58c04efa7af7e5b549ea9c2ed02059c668d",
        "action": "0x0512ad96fzc01900d3ecf0987m81c7bc1fd2daf455ebb49kjce5b410c7dc6f05",
        "tokenReceiver": "0x167d93786ghbf00d19b7d58065a5a59276e55ca1e621e47330f2b64d9fcb6a38"
    },
```

## Set up Storj access

This step is optional. You can add a Marketplace storage offer to the [`files upload`](/cli/commands/files/upload) command instead of configuring Storj. However, for additional control, you can set up and use your storage.

Register a [Storj](https://www.storj.io/) account if you do not have one yet.

:::note

If you use a free Storj account, your files will become unavailable after the end of the trial period.

:::

Create a bucket for your encrypted solutions and data. Refer to the [Storj documentation](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/) for guidance.

Create two access grants for this bucket. One should provide **Full** permission (**Read**, **List**, **Write**, **Delete**), and the other one **Read** permission. Refer to the [Storj guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/) to generate access grants.

Open SPCTL's `config.json` in a text editor and fill in the following parameters:

|**Parameter**|**Description**|
|:-|:-|
|bucket| Name of a Storj bucket|
|writeAccessToken| Storj access grant with **Full** permission (**Read**, **List**, **Write**, **Delete**) for this bucket|
|readAccessToken| Storj access grant with **Read** permission for this bucket|

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol). The Community Managers will be happy to help you.