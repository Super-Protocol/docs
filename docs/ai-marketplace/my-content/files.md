---
id: "files"
title: "Files"
slug: "/my-content/files"
sidebar_position: 1
---

The [**File**]() screen contains the full list of the uploaded content files.

## Files screen

To show, hide, and rearrange the table columns, open the menu by clicking the cog button.

images/ai-marketplace-19.png').default} width="800" height="auto" border="1"/>
<br/>
<br/>

To manage the uploaded content, open the menu by clicking the vertical ellipsis button:

- **Info**: check the uploaded content information and download a resource JSON file. This file contains the information for confidential computing devices on accessing the uploaded model or dataset to use in compute orders.
- **Edit**: change the name and type of the uploaded content.
- **Create offer**: create an offer using the uploaded content (not implemented yet in this version of the Marketplace).
- **Delete content**: delete the uploaded content.

images/ai-marketplace-18.png').default} width="800" height="auto" border="1"/>
<br/>
<br/>

## Upload and edit content

- **Content Name**: write any desired name.
- **Content Type**: select the type of content you are uploading.
- **Engine**: choose compatible AI engines from the drop-down menu.
- **Category**: choose compatible categories from the drop-down menu.
- **Requirements**: specify the requirements of the AI model or dataset now or later. If you decide to do it now, fill in all the fields:
    + **CPU vCores**: number of CPUs, can be fractional
    + **CPU  RAM, GB**: RAM in gigabytes
    + **GPU vCore**: number of GPUs, can be fractional
    + **GPU  RAM, GB**: VRAM in gigabytes
    + **Disk, GB**: disk space in gigabytes
    + **Bandwidth, Mbps**: required bandwidth in megabits per second
    + **Traffic, GB**: required traffic in gigabytes
    + **Ext.Port**: external port availability

Read [How to Upload Content](/guides/guide-upload)

## Info

## Delete content