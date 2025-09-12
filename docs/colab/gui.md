---
id: "gui"
title: "Deploy using the UI (Jupyter)"
slug: "/gui"
sidebar_position: 1
---

## Before you begin

Log in and get tokens.

1. Open the [Marketplace](https://marketplace.superprotocol.com).
 
2. Click **Enter Marketplace** in the upper-right corner and log in using your preferred method.

3. Click on your account name in the upper-right corner and select **Account**.

<img src={require('./images/1.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

4. In the Account window, copy your **Super Wallet** address and share it with your contact in Super Protocol to receive SPPI tokens.

<img src={require('./images/2.png').default} width="auto" height="auto" border="1"/>
<br/>

## Upload an IPYNB script or dataset

1. Open the [Marketplace Colab page](https://marketplace.superprotocol.com/order-create-colab).

2. Press **Upload Content**, select a file or folder, and click **Upload**. The uploaded content will be automatically encrypted and placed in a decentralized file storage (Storj).

3. Save the resulting TII.JSON file; it can be opened in any text editor. Inside:

- Encrypted data describing how to download and decrypt the uploaded content (objects `"encryptedResource"` and `"encryptedTRI"`).
- Hash of the uploaded content, calculated before the encryption.
- Restrictions on the computing device and the solution offer (i.e., Jupyter Notebook).

:::note

TII.JSON files are safe to share.

The information about the uploaded content is encrypted with the public key of the specified confidential virtual machine (`"offerId": "10"`). Only this machine can decrypt it and then download and decrypt the content itself. The machine runs inside a Trusted Execution Environment with no external access.

:::

## Run

1. Open the [Marketplace Colab page](https://marketplace.superprotocol.com/order-create-colab).

2. Press **Run Colab**.

3. Add the application and dataset TII.JSON files generated during the upload process.

4. Press **Run**. When the order is created, you will be redirected to the order page. Write down the order ID; you may need it later for verification.

5. Wait until the order is complete. For small files, it typically takes around 20 minutes, but the time can be significantly longer for large files. Use the **Extend Lease** button to add tokens to the order balance if the lease time is running out.

6. When the order is complete (Status: Done), press **Get Result** and download the TAR.GZ archive containing the order result.

7. Unzip the downloaded archive. The execution result is located in the `output` folder.

## Verify

1. [Download and set up SPCTL](/cli/)—the Super Protocol CLI tool.

2. Get the order report:

```shell
./spctl orders get-report <ORDER_ID> --save-to report.json
```

Replace `<ORDER_ID>` with your order ID, for example:

```shell
./spctl orders get-report 244834 --save-to report.json
```

The command shows the order report and saves it to the `report.json` file in the SPCTL directory. This report includes the certificate chain, order metadata, and validation result.

3. Ensure you see `Order report validation successful!` in the output.

4. Open `report.json` in a text editor and find two entries in the `“runtimeInfo”` array that start with `"type": "Data"`. For example:

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

One such entry corresponds to the IPYNB script, the other to the dataset.

The hashes in these entries were calculated inside the TEE before the execution. Open the TII.JSON files in a text editor and compare the hashes within them with the hashes in the report. The match means the IPYNB script and the dataset are genuine and have not been altered.