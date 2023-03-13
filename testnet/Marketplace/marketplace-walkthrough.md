---
id: "index-marketplace-walkthrough"
title: "Marketplace Walkthrough"
slug: "/marketplace/marketplace-walkthrough/"
---

To better understand how Marketplace works, let’s take a step-by-step walkthrough. 

As an example we’ll use the scenario of hosting a static webpage in a confidential decentralized environment. However, the process for other types of offers is almost the same.

## 1. Assembling Order

First of all, we need to browse the Marketplace and select the necessary components to create an order. The basic component is an Offer.

There are four types of offers in the Marketplace. In most cases you will need all four to create an order. 

**Solutions** – the programs offered by the community and the Super Protocol team, as well as any required base images (Python, JavaScript, etc). 

**Data** – complementary to Solutions, the data is used by the solutions (photo, audio, webpages, etc). You can use datasets from the Marketplace or upload your own.

**Compute** – providers of confidential computing resources, machines where the solutions and data are executed in the Trusted Execution Environment (TEE).

**Storage** – providers of decentralized storages, where the computation results are stored.

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 1. Add a Solution</b><br/>
Open Marketplace at <a href="https://marketplace.superprotocol.com" target="_blank">https://marketplace.superprotocol.com</a>. Go to the <b>Solutions</b> tab and click on the <b>Hosting Launcher</b> offer. It will open a window with a detailed description. Click on the <b>Add to Order</b> button.</div><br/>

Hosting Launcher is the app that enables the operations of decentralized confidential hosting.

<p>
  <img width="621" height="310" src={require('./../images/marketplace_1.png').default}/>
</p>

<p>
  <img width="619" height="310" src={require('./../images/marketplace_2.png').default}/>
</p>

Besides the descriptions, you can also see in the Restricted tab that this Solution offer requires another offer: a NodeJS base image. It is added to Order automatically.

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 2a. Add a Dataset</b><br/>
Now we need a website to host. Go to the <b>Data</b> tab and add the <b>Demo Static Website</b> to the order.</div><br/>

The **Show compatible with order** filter narrows down the selection only to the offers that are compatible with the ones you have previously added to the Order. For instance, an Image Recognition solution is only compatible with datasets that consist of images (JPG, PNG).

The Demo Static Website is a simple static site that we made to illustrate the capabilities of the decentralized confidential hosting functionality. This version of Testnet only supports static sites, but in the coming months we will upgrade to hosting of full stack dynamic apps.

<p>
  <img width="619" height="310" src={require('./../images/marketplace_3.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 2b. Or add your own data</b><br/>
Alternatively, there is also an option to host your own static website. Press the <b>Order</b> button and then <b>Add Your Own</b> button. Upload your site in an archive.</div><br/>

Before uploading your own data all files and folders must be packaged into a TAR or TAR.GZ (TGZ) archive. There must be an index.html file at the root. Do not place all data in a single folder before archiving - the app won’t be able to read it.

<p>
  <img width="619" height="313" src={require('./../images/marketplace_4.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 3. Add a Compute</b><br/>
Now it’s time to select the provider of confidential computing resources. Go to the <b>Compute</b> tab and add one of the compute offers to the order using the <b>[+] button</b>.</div><br/>

The Trusted Execution Environment (TEE) in the compute machine is where the Tunnel Provisioner app will meet the Tunnel Demo Dataset (or your own data) to set up a confidential hosting environment.

It’s best to select the Compute offer with the fewest orders in the queue. 

<p>
  <img width="620" height="310" src={require('./../images/marketplace_5.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 4. Add a Storage</b><br/>
Finally, we complete the assembly of the order by adding the <b>Storage</b> provider. Go to the Storage tab and add the <b>StorJ</b> offer to the order.</div><br/>

Decentralized storage is where the results of the computation are placed (because the Compute provider does not store the results) and also where the solutions and data offers are stored by the providers. This architecture ensures complete decentralization.

<p>
  <img width="619" height="311" src={require('./../images/marketplace_6.png').default}/>
</p>

## 2. Creating Order

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 5. Checkout Order</b><br/>
It is time to create the order. Open the <b>Order</b> window and press the <b>Checkout</b> button.</div><br/>

<p>
  <img width="619" height="311" src={require('./../images/marketplace_7.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 6. Set up passphrase</b><br/>
Either insert your own passphrase or generate a new one. Then press the <b>Place Order</b> button. Save your passphrase! You won’t be able to access your results without it.</div><br/>

<p>
  <img width="619" height="312" src={require('./../images/marketplace_8.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 7. Confirm transactions</b><br/>
Now you need to confirm the transaction in Metamask. Its window will open automatically, but if it doesn’t, open it manually from the browser. Press the <b>Confirm</b> button.</div><br/>

<p>
  <img width="301" height="516" src={require('./../images/marketplace_9.png').default}/>
</p>

## 3. Getting Results

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 8. Go to the order</b><br/>
The order has been created and is now being executed. If not forwarded to it automatically, press the <b>All Orders</b> button and then click on the last order in the list.</div><br/>

<p>
  <img width="621" height="313" src={require('./../images/marketplace_10.png').default}/>
</p>

<p>
  <img width="620" height="312" src={require('./../images/marketplace_11.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 9. Just wait, really</b><br/>
It takes a few minutes, depending on how many workloads the server is processing.</div><br/>

<p>
  <img width="620" height="313" src={require('./../images/marketplace_12.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 10. Get result</b><br/>
The order changes to status <b>Done</b>. Press the <b>Get Result</b> button and enter your passphrase. You will see the link - this is your website URL.</div><br/>

The link to your new website will take 2-3 minutes to go live after the order is done.

Also please keep in mind that for testnet purposes the site will remain online only for 72 hours. But you are always free to create new orders.

<p>
  <img width="621" height="310" src={require('./../images/marketplace_13.png').default}/>
</p>

<p>
  <img width="622" height="310" src={require('./../images/marketplace_14.png').default}/>
</p>

<p>
  <img width="620" height="289" src={require('./../images/marketplace_15.png').default}/>
</p>

You will also see that other orders have been created. These are for the Tunnel Clients and Servers, which is the technology that makes hosting work in a confidential environment (which cannot be accessed from the internet directly). The more Clients and Servers you have supporting your hosting - the more stable and fault resistant it is. 

**Tunnel Client** – The client side of the tunnels. It is responsible for performance and contains the applications and data in a confidential enclave (TEE).

**Tunnel Server** – The server side of the tunnels. It is responsible for protection against DDOS attacks and holds the Public Ingress (public static IP) which routes to the Client.

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 11. Like and share!</b><br/>
You are all set! Go to your new website and please don’t forget to tell the world all about it on Twitter (or anywhere else). We’d really appreciate it!</div><br/>

<p>
  <img width="621" height="448" src={require('./../images/marketplace_16.png').default}/>
</p>







