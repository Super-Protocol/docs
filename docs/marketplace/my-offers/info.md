---
id: "info"
title: "Info"
slug: "/my-offers/info"
sidebar_position: 2
---

This window contains information about the uploaded file.

<img src={require('../images/info.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The following metadata is available:

- **File Name**: the name of the uploaded TAR.GZ archive.
- **Uploaded**: date and time of the uploading.
- **Size**: the exact size of the file in bytes.
- **Hash**: hash to verify the integrity of the file.
- **Content ID**: a unique file identification number.
- **Storage**: the storage where the file was uploaded, either **Super Cloud** or **Storj**.
- **Bucket**: the name of the Storj bucket that stores the file.
- **Path**: button to download the content's resource JSON file. This file contains the information for confidential computing devices that allows them to access the uploaded model or dataset.
- **Name**: the name of the content given by the user. It may differ from the name of the uploaded TAR.GZ archive.
- **Categories**: the list of the types of tasks that the model is designed to perform. Models can only belong to one category; datasets may belong to several categories.
- **Engines**: the list of compatible engines.