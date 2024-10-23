---
id: "files"
title: "Files"
slug: "/my-content/files"
sidebar_position: 1
---

The [**My Files**] screen allows uploading and managing AI models and datasets. Users can add uploaded content to [orders](https://docs.superprotocol.com/developers/fundamentals/orders) and create offers (not yet implemented in the current version of the AI Marketplace). Read [How to Place an Order](/ai-marketplace/guides/guide-place-order).

## My Files screen

The table contains the list of user-uploaded files:

- **Type**: the type of the uploaded content (Model or Dataset).
- **Name**: the content name given by the user.
- **Date** Uploaded: the date and time the file was uploaded.
- **Size**: file size in gigabytes.
- **Storage**: the [storage](/ai-marketplace/my-content) the file is uploaded to, either Super Cloud or personal Storj.
- **Offer ID**: the identification number of the offer created from the uploaded file.

(image full screen, the table highlighted)
<br/>
<br/>

To manage the uploaded content, open the menu by clicking the vertical ellipsis button:

- [**Info**]: check the uploaded content information.
- [**Edit**]: change the name and type of the uploaded content.
- [**Create offer**]: create an offer using the uploaded content (not yet implemented in this Marketplace version).
- [**Delete content**]: delete the uploaded content.

(images/ai-marketplace-18.png').default} width="800" height="auto" border="1"/>)
<br/>
<br/>

Click the **+** button to add the uploaded file to an order. Click the **trash can** button to remove the file from the order.

(image blue + and trash buttons highlighted)
<br/>
<br/>

Click the **Upload File** button to open the **Upload Content** window. Read [How to Upload Content](/ai-marketplace/guides/guide-upload).

(image Upload File highlighted)
<br/>
<br/>

Use the drop-down menu to sort out the table content.

(image Newest drop-down highlighted)
<br/>
<br/>

Click the cog button menu to show, hide, and rearrange table columns.

(image cog button highlighted)
<br/>
<br/>

## Upload content

Use this window to [upload](/ai-marketplace/my-content) AI models and datasets to Super Protocol. Read [How to Upload Content](/ai-marketplace/guides/guide-upload).

(image upload window)
<br/>
<br/>

- **Content Name**: write any desired name.
- **Content Type**: select the type of content you are uploading.
- **Category**: choose the content category from the drop-down menu.
- **Engine**: choose compatible AI engines from the drop-down menu. Untick a checkbox next to a selected engine to remove it from the selection.
- **Upload file**: select a TAR.GZ archive file to upload.

## Info

This small window contains information about the uploaded file.

(image info window)
<br/>
<br/>

- **File Name**: content name given by the user.
- **Uploaded**: date and time of the uploading.
- **Size**: the exact size of the file in bytes.
- **Hash**: hash to verify the integrity of the file.
- **Content ID**: a unique file identificator.
- **Storage**: selected uploading method; Super Cloud or Storj.
- **Bucket**: the name of the Storj bucket that stores the file.
- **Path**: Storj gateway link and a button to download a resource JSON file. This file contains the information for confidential computing devices to access the uploaded model or dataset to use in compute orders.

## Edit content

Here, you can change the parameters of the uploaded file.

(image edit content window)
<br/>
<br/>

- **Content Name**: write any desired name.
- **Content Type**: select the type of content you are uploading.
- **Category**: choose the content category from the drop-down menu.
- **Engine**: choose compatible AI engines from the drop-down menu. Untick a checkbox next to a selected engine to remove it from the selection.

## Delete content

Confirm file deletion if you no longer need it. This operation is irreversible and cannot be undone.

(image delete window)
<br/>