---
id: "new-offer"
title: "New Offer"
slug: "/my-offers/new-offer"
sidebar_position: 1
---

This window allows you to upload a model and create an <a id="offer-bottom"><span className="dashed-underline">offer</span></a>. After uploading, you can deploy the model. Additionally, you can configure and publish the offer on the Marketplace to lease the uploaded model to other users.

<img src={require('../images/new-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To upload a model, complete all the fields:

- **Name**: A model name. Providing a meaningful name makes it easier to find the model later.
- **Category**: Type of task that a model is designed to perform.
- **Engine**: A <a id="solution"><span className="dashed-underline">solution</span></a> designed to launch AI models, customize parameters, configure workflows, and provide an interface to interact with models. Each engine exists in two variants:
    - **GPU-only** engines require CPU+GPU <a id="compute"><span className="dashed-underline">compute</span></a> offers to run.
    - **CPU-only** engines can run on both CPU-only and CPU+GPU compute offers. However, models work much slower in this mode.
- **Upload**: A directory or files to upload. The uploaded model files are encrypted and accessible only to the Confidential Computing machine that deploys the model.

You can modify all of this data later using the [Offer Builder](/marketplace/my-offers/offer-builder), including replacing or adding uploaded files.