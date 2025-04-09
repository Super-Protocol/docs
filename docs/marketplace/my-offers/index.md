---
id: "my-offers"
title: "My Content"
slug: "/my-offers"
sidebar_position: 5
---

This screen allows you to manage your uploaded models and datasets.

:::note

Datasets are not yet available in the current version of the Marketplace.

:::

<img src={require('../images/my-content.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The **Upload File** button opens the [**Upload Content**](/marketplace/my-offers/upload-content) window. Read [How to Upload a Model (TGWUI)](/marketplace/guides/upload-tgwui) and [How to Upload a Model (ComfyUI)](/marketplace/guides/upload-comfyui) for step-by-step instructions.

The table in the middle of the screen includes the following columns:

- **Type**: indicates whether the content is a **Model** or **Dataset**.
- **Name**: the name of the content. It may differ from the original file name.
- **Date Uploaded**: the date and time when the content was uploaded.
- **Size**: file size of the file in gigabytes. For the exact size in bytes, check the file's [**Info**](/marketplace/my-offers/info).
- **Storage**: the storage to where you uploaded the content, either **Super Cloud** or **Storj**. Read about [types of storage](/marketplace/account/web3#storage).
- **Offer ID**: the identification number of the offer created from the uploaded file. No number means an offer has not yet been created.

To deploy a model, click the blue **Deploy** button next to it.

For more actions, click the buttons with three vertical dots next to a file to open the content's management menu:

- [**Info**](/marketplace/my-offers/info): view detailed information about the uploaded content.
- [**Edit**](/marketplace/my-offers/edit-content): edit the content's metadata, such as name, type, categories, etc.
- **Create offer**: create an offer using the uploaded content (not yet implemented).
- **Delete content**: delete the uploaded content from the storage.