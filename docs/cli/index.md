---
id: "index"
title: "Configure SPCTL"
slug: "/"
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**SPCTL**—Super Protocol Control—is a versatile tool to access the Super Protocol CLI. With this tool, you can create and manage <a id="order"><span className="dashed-underline">orders</span></a>, <a id="offer"><span className="dashed-underline">offers</span></a>, providers, keys, files, and more.

## Download

<Tabs>
    <TabItem value="linux" label="Linux" default>
        Open a terminal in the directory where you want to place SPCTL for Linux and run the following command:

        ```bash
        curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
        chmod +x ./spctl
        ```
    </TabItem>
    <TabItem value="macos" label="MacOS">
        Open Terminal in the directory where you want to place SPCTL for macOS and run the following command:

        ```bash
        curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-macos-x64 -o spctl
        chmod +x ./spctl
        ```
    </TabItem>
    <TabItem value="windows" label="Windows">
        Install and launch [WSL](https://learn.microsoft.com/en-us/windows/wsl). Go to the directory where you want to place SPCTL, and run the following command:

        ```bash
        curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
        chmod +x ./spctl
        ```
    </TabItem>
</Tabs>

You can also download and install SPCTL manually from the Super Protocol [GitHub repository](https://github.com/Super-Protocol/ctl).

## Set Up

You can set up SPCTL using the `./spctl setup` command or by manually creating a configuration file.

<Tabs>
    <TabItem value="spctl" label="SPCTL setup" default>
        1. Super Protocol recommends creating a separate wallet for the testnet. Generate a private key:

        ```bash
        head -c 32 /dev/urandom | xxd -p -c 32
        ```
        
        2. Execute the `./spctl setup` command to initiate the setup dialog.

        3. Enter the following Access Token when prompted:

        ```
        eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g
        ```

        4. Enter the private key you generated in step 1.

        5. Answer `No` when prompted about a Storj bucket. You can [configure Storj](/cli/#set-up-storj-access-optional) and provide this information later or skip this step entirely.

        When done, SPCTL creates `config.json` in the SPCTL root directory. If you need to update your account information, execute `./spctl setup` again or modify `config.json` manually in a text editor.
    </TabItem>
    <TabItem value="spctl-manual" label="Manual configuration">
        1. Super Protocol recommends creating a separate wallet for the testnet. Generate a private key:

        ```bash
        head -c 32 /dev/urandom | xxd -p -c 32
        ```
        
        2. In the SPCTL directory, create a file named `config.json`. Use the following template:

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

        3. Do not change the preconfigured values and set values to the following keys:

        | **Key**               | **Description** |
        | :-                    | :- |
        | `"accountPrivateKey"` | The private key you generated in step 1. |
        | `"bucket"`            | (optional) Name of a Storj bucket. |
        | `"prefix"`            | (optional) Path to a directory inside the bucket with a trailing slash, for example, `data/`. It can be empty. |
        | `"writeAccessToken"`  | (optional) Storj access grant with **Full** permission (**Read**, **List**, **Write**, **Delete**) for this bucket. |
        | `"readAccessToken"`   | (optional) Storj access grant with **Read** permission for this bucket. |

        Save and close the file.

        4. Generate a key for order result encryption using the [`workflows generate-key`](/cli/commands/workflows/generate-key) command. Open `config.json` again and set the generated key to `workflow.resultEncryption.key`. Save and close the file.
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

| **Key**               | **Description** |
| :-                    | :- |
| `"bucket"`            | Name of a Storj bucket. |
| `"writeAccessToken"`  | Storj access grant with **Full** permission (**Read**, **List**, **Write**, **Delete**) for this bucket. |
| `"readAccessToken"`   | Storj access grant with **Read** permission for this bucket. |

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).