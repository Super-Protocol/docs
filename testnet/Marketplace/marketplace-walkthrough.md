---
id: "index-marketplace-walkthrough"
title: "Marketplace Walkthrough"
slug: "/marketplace/marketplace-walkthrough/"
---

To better understand how Marketplace works, let’s take a step-by-step walkthrough.

As an example we’ll use the scenario of hosting a static webpage in a confidential decentralized environment. 

:::note Demo Video

You can also watch a short narrated [demo video](https://youtu.be/vbEuh90ocJA) of this walkthrough.

:::

To create an order we will need to select the necessary components. The basic component is an Offer. There are four types of offers in the Marketplace. You will need all four to create an order.

-  **Solutions** – the applications offered by the community and the Super Protocol team, as well as any required base images such as Python and JavaScript. 

- **Data** – data can be anything that is used by a solution: photo, audio, webpages, text, etc. You can use datasets from the Marketplace or upload your own.

- **Compute** – confidential computing resources, machines where the solutions and data are executed in the Trusted Execution Environment (TEE).

- **Storage** – decentralized storages where the offers and computation results are stored.

## 1. Building the Order

Let's begin by going to the Marketplace at [marketplace.superprotocol.com](https://marketplace.superprotocol.com/). At this point we assume that you have completed all the preliminary steps [here](/testnet/marketplace/first-steps/).


:::info Step 1. Add a solution.

Go to the `Solutions` tab and click on the `Hosting Launcher` offer. It will open a window with a detailed description of the offer. Click on the `Add to Order` button.

:::

Hosting Launcher is the app that enables the operations of decentralized confidential hosting.

<img src={require('./../images/marketplace_1.png').default}/>

<img src={require('./../images/marketplace_2.png').default}/>

You can also see in the `Restricted` tab that this Solution requires another offer: a NodeJS base image. It is added to Order automatically.

<br/>

:::info Step 2a. Add a Dataset

Now we need a website to host. Go to the `Data` tab and add the `Demo Static Website` offer to the order.

:::

The Demo Static Website is a simple static site that we made to illustrate the capabilities of the decentralized confidential hosting functionality. This version of Testnet only supports static sites, but in the coming months we will upgrade to hosting of full stack dynamic apps.

<img src={require('./../images/marketplace_3.png').default}/>

<br/>
<br/>
<br/>

:::info Step 2b. Add your own data.

Alternatively, there is also an option to host your own static website. Press the `Order` button and then `Add Your Own` button. Upload your site in an archive.

:::

Before uploading your own data all files and folders must be packaged into a TAR or TAR.GZ (TGZ) archive. There must be an index.html file at the root of the archive. Do not group all data into an additional folder before archiving - the app won’t be able to read it. For reference you can download the Static Demo Website offer [here](https://github.com/Super-Protocol/datasets/blob/main/Demo%20Static%20Website/Demo%20Static%20Website.tar.gz?raw=true).

<img src={require('./../images/marketplace_4.png').default}/>  

<br/>
<br/>
<br/>

:::info Step 3. Add a Compute.

Now it’s time to select the provider of confidential computing resources. Go to the `Compute` tab and add one of the compute offers to the order using the `[+]` button.

:::

It’s best to select the Compute offer with the fewest orders in the queue. 

<img src={require('./../images/marketplace_5.png').default}/>

<br/>
<br/>
<br/>

:::info Step 4. Add a Storage.

Finally, we complete the assembly of the order by adding the Storage provider. Go to the `Storage` tab and add the `StorJ` offer to the order.

:::

Decentralized storage is where the results of the computation are placed (because the Compute provider does not store the results) and also where the solutions and data offers are stored by the providers. This architecture ensures complete decentralization.

<img src={require('./../images/marketplace_6.png').default}/>

## 2. Creating Order

Now that all the offers have been added, it's time to create the order.

:::info Step 5. Order Checkout.

Open the `Order` window and press the `Checkout` button.

:::

<img src={require('./../images/marketplace_7.png').default}/>

<br/>
<br/>
<br/>

:::info Step 6. Set up a passphrase.

Either input your own passphrase or generate a new one. Then press the `Place Order` button. Save your passphrase! You won’t be able to access your order results without it.

:::

<img src={require('./../images/marketplace_8.png').default}/>

<br/>
<br/>
<br/>

:::info Step 7a. Confirm Metamask Spending Cap.

If this is your first time using SP Testnet, Metamask will ask you to approve the maximum spend allowed from this smart contract. [This feature](https://support.metamask.io/hc/en-us/articles/6055177143579-How-to-customize-token-approvals-with-a-spending-cap) is made by Metamask for your protection. But for purposes of Testnet you can set unlimited cap. Press "Use Default", then "Next" at the next screen, and "Approve" at the next screen again. You only have to do this once. 

:::

<img src={require('./../images/marketplace_16.png').default}/>
<img src={require('./../images/marketplace_17.png').default}/>
<img src={require('./../images/marketplace_18.png').default}/>

<br/>
<br/>
<br/>

:::info Step 7b. Confirm transactions.

After you have set up the Spending Cap for this smart contract, further approvals are much easier: just press the `Confirm` button when Metamask prompts for approval. If its window doesn't open automatically or hangs on the loader screen, open it manually from the browser extensions. 

:::

<img src={require('./../images/marketplace_9.png').default}/>

## 3. Getting Results

At this point your order is either waiting in queue (status `New`) or is being executed (status `Processing`). The solutions (Hosting Launcher and NodeJS) and the data (Demo Static Website) are being transferred from StorJ to the Compute TEE and launched there in a confidential container. 

:::info Step 8. Go to the order.

If not forwarded to the order automatically, press the `All Orders` button and then click on the last order in the list.

:::

<img src={require('./../images/marketplace_10.png').default}/>

<img src={require('./../images/marketplace_11.png').default}/>

<br/>
<br/>
<br/>

:::info Step 9. Just wait, really.

Processing takes about 15-20 minutes, depending on how many workloads the machine is processing. You might need to refresh the page to see the status change.

:::

<img src={require('./../images/marketplace_12.png').default}/>

<br/>
<br/>
<br/>

:::info Step 10. Get result.

The order changes to status `Done`. Press the `Get Result` button and enter your passphrase. You will see the link - this is your brand new website URL.

:::

Please keep in mind that for testnet purposes the site will remain ***online only for 72 hours***. But you are always free to create new orders.

For types of orders othan hosting (Face Recognition, etc) you will find your results in the TAR.GZ archive that will download automatically.

<img src={require('./../images/marketplace_13.png').default}/>

<img src={require('./../images/marketplace_14.png').default}/>

You will also see that other orders have been created. These are for the Tunnel Clients and Tunnel Servers, the tunneling network protocol that makes hosting work in a confidential environment (which cannot be accessed from the internet directly). The more Clients and Servers you have supporting your hosting - the more stable and fault resistant it is. 

**Tunnel Client** – The client side of the tunnels. It is responsible for performance and contains the applications and data in a confidential enclave (TEE).

**Tunnel Server** – The server side of the tunnels. It is responsible for protection against DDOS attacks and holds the Public Ingress (public static IP) which routes to the Client.

<br/>

:::info Step 11. Like and share!

You are all set! Go to your new website and please don’t forget to tell the world all about it on Twitter (or anywhere else). We’d really appreciate it!

:::

<img src={require('./../images/marketplace_15.png').default}/>







