---
id: "cli"
title: "Deploy using the CLI (Docker)"
slug: "/cli"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Before you begin: Create an account, get tokens, and set up SPCTL

1. Complete the first two steps of the guide [Log In as a Web3 User](https://docs.superprotocol.com/guides/log-in) (MetaMask is recommended).

2. In the [Marketplace](https://marketplace.superprotocol.com/), click on your account name in the upper-right corner and select **Account**.

<img src={require('./images/1.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

3. In the Account window, copy your Super Wallet address and share it with your contact in Super Protocol to receive SPPI tokens.

<img src={require('./images/2.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

4. Save your web3 account private key.

<p style={{marginLeft: '32px'}}>4.1. In the Metamask window, click your current account name:</p>

<img src={require('../marketplace/images/metamask-newacc-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

<p style={{marginLeft: '32px'}}>4.2. Open **Account details**:</p>

<img src={require('./images/3.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

<p style={{marginLeft: '32px'}}>4.3. Press the **Show private key** button in the **Details** tab:</p>

<img src={require('./images/4.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

<p style={{marginLeft: '32px'}}>4.4. Copy and save your web3 account private key. You will need it to set up SPCTL—the Super Protocol CLI tool.</p>

5. Download SPCTL.

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
        Install [WSL](https://learn.microsoft.com/en-us/windows/wsl).
        
        Launch WSL from PowerShell, go to the directory where you want to place SPCTL, and run the following command:

        ```
        curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
        chmod +x ./spctl
        ```
    </TabItem>
</Tabs>

You can also download and install SPCTL manually from the Super Protocol [GitHub repository](https://github.com/Super-Protocol/ctl).

6. Configure SPCTL.

<p style={{marginLeft: '32px'}}>6.1. Start a setup dialog:</p>

```shell
./spctl setup
```

<p style={{marginLeft: '32px'}}>6.2. Enter the following Access Token when prompted:</p>

```
eyJhbGciOiJFUzI1NiJ9.eyJhZGRyZXNzIjoiMHhBN0E5NjQ4ZGE2QTg5QjBhNzFhNGMwRDQ2Y2FENDAwMDU3ODI3NGEyIiwiaWF0IjoxNjc5OTk4OTQyLCJleHAiOjE3NDMxMTQxNDJ9.x2lx90D733mToYYdOWhh4hhXn3YowFW4JxFjDFtI7helgp2uqekDHFgekT5yjbBWeHTzRap7SHbDC3VvMIDe0g
```

<p style={{marginLeft: '32px'}}>6.3. Enter your web3 account private key when prompted.</p>


<p style={{marginLeft: '32px'}}>6.4. Answer `No` when promted about a Storj bucket. You can [configure Storj](/cli/#set-up-storj-access-optional) later or skip this step entirely.</p>


When done, SPCTL creates `config.json` in its directory. If you need to update your account information, run `./spctl setup` again or modify `config.json` manually in a text editor.

## Prepare the solution

In the Super Protocol terms, a _solution_ refers to a utility, application, engine, or other software.

1. Build a Docker image with your application.

2. Save and zip the image:

```shell
docker save <NAME>:latest | gzip > <NAME>.tar.gz
```

Replace `<NAME>` with the name of your image, for example:

```shell
docker save jupyter:latest | gzip > jupyter.tar.gz
```

3. Upload the archive using SPCTL:

```shell
./spctl files upload <ARCHIVE_PATH> --filename <NAME>.tar.gz --output <NAME>_resource.json
```

Replace:

- `<ARCHIVE_PATH>` with the path to the image archive
- `<NAME>` with the name of your image
 
For example:

```shell
./spctl files upload ~/Docker/jupyter.tar.gz --filename jupyter.tar.gz --output jupyter_resource.json
```

The resulting file `resource.json` contains information on how to access and decrypt the uploaded file. It also contains the solution hash that may be required to generate TII.JSON files for the data.

:::note

`resource.json` is enough to download and decrypt the content. This makes `resource.json` unsafe to share if the uploaded content is sensitive.

:::

If you need to delete the uploaded content from the file storage, use the [`files delete`](/cli/commands/files/delete) command.

## Prepare the data

In the Super Protocol terms, _data_ refers to AI models, webpages, configs, datasets, databases, or any other data that solutions may require. Note that IPYNB scripts for Jupyter Notebook qualify as _data_, not a _solution_.

1. Place all files into a separate directory. Ensure it does not contain hidden or system files.

2. Archive the directory:

```shell
tar -czvf <NAME>.tar.gz -C <PATH> .
```

Replace:

- `<NAME>` with a desired name of your data
- `<PATH>` with the path to the data directory

Do not omit the dot `.` at the end of the command.

For example:

```shell
tar -czvf dataset1.tar.gz -C ~/Data/dataset1/ .
```

3. Upload the archive to a decentralized file storage using SPCTL:

```shell
./spctl files upload <ARCHIVE_PATH> --filename <NAME>.tar.gz --output <NAME>_resource.json
```

Replace:

- `<ARCHIVE_PATH>` with the path to the archive file
- `<NAME>` with the name of your data

For example:

```shell
./spctl files upload ~/Data/dataset1.tar.gz --filename dataset1.tar.gz --output dataset1_resource.json
```

The resulting file `resource.json` contains information on how to access and decrypt the uploaded file.

:::note

`resource.json` is enough to download and decrypt the content. This makes `resource.json` unsafe to share if the uploaded content is sensitive.

:::

4. Generate TII:

```shell
./spctl tii generate data <NAME>_resource.json --solution-hash <SOLUTION_HASH> --output <NAME>.tii.json --offer 10
```

Replace:

- `<NAME>` with the name of your data
- `<SOLUTION_HASH>` with the hash from the uploaded solution's `resource.json`

For example:

```shell
./spctl tii generate data dataset1_resource.json --solution-hash f67cb61df27a514d58d173a567e09aea9d912a9b1de6dd13bfbeadfeffbe7567 --output dataset1.tii.json --offer 10
```

:::note

The resulting TII.JSON file is safe to share.

The information about the uploaded content is encrypted with the public key of the specified confidential virtual machine (`"offerId": "10"`). Only this machine can decrypt it and then download and decrypt the content itself. The machine runs inside a Trusted Execution Environment with no external access.

Additionally, the dataset can only be used if the hash of the Docker image matches the value specified in `--solution-hash`. If `--solution hash` is not specified, the data can be used with any solution.

:::

## Run

1. Place an order:

```shell
./spctl workflows create \
--solution <SOLUTION_RESOURCE> \
--data <DATASET_TII> \
--tee 10 \
--storage 47 \
--skip-hardware-check \
--orders-limit 100
```

Replace:

- `<SOLUTION_RESOURCE>` with the path to the `resource.json` of the uploaded Docker image.
- `<DATASET_TII>` with the path to a TII.JSON file. You can use the `--data` option multiple times if necessary.

For example:

```shell
./spctl workflows create \
--solution ~/SPCTL/jupyter_resource.json \
--data dataset1.tii.json \
--data dataset2.tii.json \
--tee 10 \
--storage 47 \
--skip-hardware-check \
--orders-limit 100
```

The output will contain the order ID.

2. Wait 15-20 minutes and check the order status:

```shell
./spctl orders get <ORDER_ID>
```

For example:

```shell
./spctl orders get 244834
```

3. If the order is complete, download the result:

```shell
./spctl orders download-result <ORDER_ID>
```

For example:

```shell
./spctl orders download-result 244834
```

4. Unzip the downloaded archive:

```shell
tar -xvzf result.tar.gz
```

The execution result is located in the `output` folder.

## Verify

1. Get the order report:

```shell
./spctl orders get-report <ORDER_ID> --save-to report.json
```

Replace `<ORDER_ID>` with your order ID, for example:

```shell
./spctl orders get-report 244834 --save-to report.json
```

The command will show the order report and save it to the `report.json` file in the SPCTL directory. This report includes the certificate chain, order metadata, and validation result.

2. Ensure you see `Order report validation successful!` in the output.

3. Open `report.json` in a text editor and find entries in the `“runtimeInfo”` array that start with `"type": "Image"` and `"type": "Data"`. For example:

```json
{
  "type": "Data",
  "size": 12901,
  "hash": {
  "algo": "sha256",
  "hash": "8598805cd2136a4beff17559a7228854f6a8cc0b027856ea5c196fb8d0602501",
  "encoding": "hex"
  }
},
```

The hashes in these entries were calculated inside the TEE before the execution. Open `resource.json` and the TII.JSON files in a text editor and compare the hashes within them with the hashes in the report. The match means the application and data are genuine and have not been altered.