---
id: "upload-content"
title: "Upload Content"
slug: "/my-content/my-files/upload-content"
sidebar_position: 1
---

Use this window to upload models. Uploading models is necessary to deploy and run them. In future releases, you will also be able to

- Upload datasets and use them to fine-tune models.
- Create offers to lease your uploaded models and datasets to other users.

<img src={require('../../images/upload-content.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To upload a file, fill in all the fields:

- **Content Name**: any desired content name. It may be different from the name of the TAR.GZ archive you are uploading.
- **Content Type**: either a model or a dataset.
- **Category**: the type of task that a model is designed to perform. Models can only belong to one category; datasets may belong to several categories. Category selection affects the list of compatible engines.
- **Engine**: compatible engines. Engine are required to fine-tune models, deploy them, and provide a user interface. Each engine exists in two variants, 'CPU only' and 'GPU only'. It is recommended to choose both and then decide how you want to run the model during order creation.
- **Upload file**: click to select a TAR.GZ archive file to upload.

You can change all this data later except for the uploaded file itself.

Note that before uploading a model or dataset, you must pack it into a TAR.GZ archive. The file will be uploaded to the storage specified in the Account settings. Read [How to Upload a Model (TGWUI)](/marketplace/guides/upload-tgwui) and [How to Upload a Model (ComfyUI)](/marketplace/guides/upload-comfyui) for step-by-step instructions.