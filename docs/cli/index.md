---
id: "index"
title: "Configure SPCTL"
slug: "/"
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**SPCTL**—Super Protocol Control—is a versatile tool to access the Marketplace CLI. With this tool, you can create and manage <a id="order"><span className="dashed-underline">orders</span></a>, <a id="offer"><span className="dashed-underline">offers</span></a>, providers, keys, files, and more.

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

You can set up SPCTL using the `./spctl setup` command or by manually creating a configuration file.

<Tabs>
    <TabItem value="spctl" label="SPCTL setup" default>
        1. Execute the `./spctl setup` command to initiate the setup dialog.

        2. Enter the following Access Token when prompted:

        ```
        eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g
        ```

        3. Enter a private key to your testnet EVM wallet when prompted.

        4. Answer `No` when promted about a Storj bucket. You can [configure Storj](/cli/#set-up-storj-access-optional) and provide this information later or skip this step entirely.

        When done, SPCTL creates `config.json` in the SPCTL root directory. If you need to update your account information, execute `./spctl setup` again or modify `config.json` manually in a text editor.
    </TabItem>
    <TabItem value="spctl-manual" label="Manual configuration">
        In the SPCTL directory, create a file named `config.json`. Use the following template:

        ```json title="config.json"
        {
            "backend": {
                "url": "https://bff.superprotocol.com/graphql",
                "accessToken": "eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g"
            },
            "blockchain": {
                "rpcUrl": "https://opbnb.superprotocol.com",
                "smartContractAddress": "0x3C69ea105Fc716C1Dcb41859281Aa817D0A0B279",
                "accountPrivateKey": "",
                "authorityAccountPrivateKey": ""
            },
            "storage": {
                "type": "STORJ",
                "bucket": "",
                "prefix": "",
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

        2. Do not change the preconfigured values and provide values to the following keys:

        | **Key**               | *Description** |
        | :- | :- |
        | `"accountPrivateKey"` | An EVM wallet private key. Super Protocol recommends creating a separate wallet for the testnet. |
        | `"bucket"`            | (optional) Name of a Storj bucket. |
        | `"prefix"`            | (optional) Path to a directory inside the bucket. It can be empty. |
        | `"writeAccessToken"`  | (optional) Storj access grant with **Full** permission (**Read**, **List**, **Write**, **Delete**) for this bucket. |
        | `"readAccessToken"`   | (optional) Storj access grant with **Read** permission for this bucket. |

        3. Generate a private key for order result encryption using the [`workflows generate-key`](/cli/commands/workflows/generate-key) command. Set it in `"key"` (`workflow.resultEncryption.key`) in `config.json`.
    </TabItem>
</Tabs>

### Set up Storj access (optional)

If you [upload files](/cli/commands/files/upload) without configuring Storj access, Super Protocol will automatically provide you with 20 GB of storage. However, for additional control and storage space, set up and use your Storj account.

1. Register a [Storj](https://www.storj.io/) account if you do not have one yet.

:::note

If you use a free Storj account, your files will become unavailable after the end of the trial period.

:::

2. Create a bucket for your encrypted <a id="solution"><span className="dashed-underline">solutions</span></a> and <a id="data"><span className="dashed-underline">data</span></a>. Refer to the [Storj documentation](https://docs.storj.io/dcs/getting-started/quickstart-objectbrowser/) for guidance.

3. Create two access grants for this bucket. One should provide **Full** permission (**Read**, **List**, **Write**, **Delete**), and the other one **Read** permission. Refer to the [Storj guide](https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/uploading-your-first-object/create-first-access-grant/) to generate access grants.

4. Run `./spctl setup` again or open SPCTL's `config.json` in a text editor and provide values to the following key:

| **Key**              | **Description** |
| :- | :- |
| `"bucket"`           | Name of a Storj bucket. |
| `"writeAccessToken"` | Storj access grant with **Full** permission (**Read**, **List**, **Write**, **Delete**) for this bucket. |
| `"readAccessToken"`  | Storj access grant with **Read** permission for this bucket. |

## For providers

This section is for providers only. Skip it if you are a regular user.

Providers need another copy of SPCTL configured to manage their offers.

<Tabs>
    <TabItem value="provider-tools" label="Provider Tools" default>
        If you registered a provider using Provider Tools, you should have a configuration file created automatically in the Provider Tools directory. Its name should be similar to `spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAb.json`, where `0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAb` is your Authority Account wallet address.

        Rename this file to `config.json` so SPCTL can recognize it as its configuration file. Copy or download the SPCTL binary to the Provider Tools directory.

        Alternatively, use the `--config` option with SPCTL commands to use the same SPCTL binary with a different account. For example:

        ```shell
        ./spctl orders list --my-account --type tee --config ./spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAb.json
        ```
    </TabItem>
    <TabItem value="pt-manual" label="Manual Configuration">
        As with your User Account's configuration file, you can manually create the provider's SPCTL configuration file.
        
        1. In the Provider Tools directory, create a file named `config.json`. Use the following template:

        ```json title="config.json"
        {
            "backend": {
                "url": "https://bff.superprotocol.com/graphql",
                "accessToken": "eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g"
            },
            "blockchain": {
                "rpcUrl": "https://opbnb.superprotocol.com",
                "smartContractAddress": "0x3C69ea105Fc716C1Dcb41859281Aa817D0A0B279",
                "accountPrivateKey": "",
                "authorityAccountPrivateKey": ""
            },
            "storage": {
                "type": "STORJ",
                "bucket": "",
                "prefix": "",
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

        2. Do not change the preconfigured values and provide values to the following keys:

        | **Key**                        | **Description** |
        | :-                             | :- |
        | `"accountPrivateKey"`          | The provider's Action Account private key. |
        | `"authorityAccountPrivateKey"` | The provider's Authority Account private key. |
        | `"bucket"`                     | (optional) Name of a Storj bucket. |
        | `"prefix"`                     | (optional) Path to a directory inside the bucket. It can be empty. |
        | `"writeAccessToken"`           | (optional) Storj access grant with **Full** permission (**Read**, **List**, **Write**, **Delete**) for this bucket. |
        | `"readAccessToken"`            | (optional) Storj access grant with **Read** permission for this bucket. |

        You can find the section with your Authority and Action Accounts private keys in `provider-tools-config.json` in the Provider Tools directory. For example:

        ```json title="provider-tools-config.json"
            "account": {
                "authority": "0x50612a8bf52cb263825e58c72361ea58c04efa7af7e5b549ea9c2ed02059c668d",
                "action": "0x0512ad96fzc01900d3ecf0987m81c7bc1fd2daf455ebb49kjce5b410c7dc6f05",
                "tokenReceiver": "0x167d93786ghbf00d19b7d58065a5a59276e55ca1e621e47330f2b64d9fcb6a38"
            },
        ```

        3. Generate a private key for order result encryption using the [`workflows generate-key`](/cli/commands/workflows/generate-key) command. Set it in `"key"` (`workflow.resultEncryption.key`) in `config.json`.
    </TabItem>
</Tabs>

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol). The Community Managers will be happy to help you.