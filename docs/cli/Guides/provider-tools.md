---
id: "provider-tools"
title: "Set Up Provider Tools"
slug: "/guides/provider-tools"
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Provider Tools is a Super Protocol CLI utility for registering <a id="provider"><span className="dashed-underline">providers</span></a> and creating <a id="offer"><span className="dashed-underline">offers</span></a>.

## Download

<Tabs>
  <TabItem value="linux" label="Linux" default>
Create a separate directory, open a terminal there, and run the following command:
```
curl -L https://github.com/Super-Protocol/provider-tools/releases/latest/download/provider-tools-linux-x64 -o provider-tools
chmod +x ./provider-tools
```
  </TabItem>
  <TabItem value="macos" label="macOS">
Create a separate directory, open Terminal there, and run the following command:
```
curl -L https://github.com/Super-Protocol/provider-tools/releases/latest/download/provider-tools-macos-x64 -o provider-tools
chmod +x ./provider-tools
```
  </TabItem>
  <TabItem value="windows" label="Windows">
Install and launch [WSL](https://learn.microsoft.com/en-us/windows/wsl). Create a separate directory, and install Provider Tools for Linux:
```
curl -L https://github.com/Super-Protocol/provider-tools/releases/latest/download/provider-tools-linux-x64 -o provider-tools
chmod +x ./provider-tools
```
  </TabItem>
</Tabs>

## Set Up

```shell
./provider-tools setup
```

Enter the Access token:

```text
eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g
```

Follow the dialog:

Q: `Do you need to generate a new authority account?`<br/>
A: `y` (Yes)

Q: `Do you need to generate a new action account?`<br/>
A: `y` (Yes)

Q: `Do you need to generate a new tokenReceiver account?`<br/>
A: `y` (Yes)

## Provider's SPCTL

Providers need another copy of SPCTL configured to manage their offers.

<Tabs>
    <TabItem value="provider-tools" label="Provider Tools" default>
        If you registered a provider using Provider Tools, you should have a configuration file created automatically in the Provider Tools directory. Its name should be similar to `spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAb.json`, where `0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAb` is your Authority Account wallet address.

        Copy or download the SPCTL binary to the Provider Tools directory; rename this file to `config.json` so SPCTL can recognize it as its configuration file.

        Alternatively, add the `--config` option to SPCTL commands to use the same SPCTL binary with another account. For example:

        ```shell
        ./spctl orders list --my-account --type tee --config ../provider-tools/spctl-config-0xB9f0b77BDbAe9fBe3E60BdC567E453f503605BAb.json
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
        | `"accountPrivateKey"`          | Action Account private key. |
        | `"authorityAccountPrivateKey"` | Authority Account private key. |
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

        Save and close the file.

        3. Generate a key for order result encryption using the [`workflows generate-key`](/cli/commands/workflows/generate-key) command. Open `config.json` again and set the generated key to `workflow.resultEncryption.key`. Save and close the file.
    </TabItem>
</Tabs>

### Set up Storj access (optional)

If you already [set up Storj access](/cli/#set-up-storj-access-optional) for your regular SPCTL, you may reuse the same credentials for your provider's SPCTL.

If you skip this step, Super Protocol will automatically provide you with 20 GB of storage.

## Support

If you have any issues or questions, contact Super Protocol on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new).