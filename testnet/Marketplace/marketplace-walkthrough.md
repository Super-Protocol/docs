---
id: index-marketplace-walkthrough
title: Marketplace Walkthrough
slug: /marketplace/marketplace-walkthrough/
---

# Marketplace Walkthrough

### 1. Understanding Offers

To create an order we will need to select the necessary components. The basic component is an Offer. There are four types of offers in the Marketplace. You will need all four to create an order.

* **Solutions** – the applications offered by the community and the Super Protocol team, any required base images such as Python and Node.js, as well as the tunnel clients and server.
* **Data** – data can be anything that is used by a solution: webpages, configs, photo, audio, webpages, text, databases, etc. You can use datasets from the Marketplace or upload your own.
* **Compute** – confidential computing resources, machines where the solutions and data are executed inside the Trusted Execution Environment (TEE).
* **Storage** – decentralized storages where the offers and computation results are stored.

Here is the list of proper combinations of Solutions+Data currently available in the Marketplace:

\| Solution | Data | Description | | :-- | :-------- | | Hosting Launcher | Super Chat Config| | Hosting Launcher | Demo Static Website| | Hosting Launcher | Upload your own static web content| | Face Recognition | Face Recognition Dataset #1\
Face Recognition Dataset #2\
Upload your own data (images)| | Speech Recognition | Speech Recognition Dataset #1\
Speech Recognition Dataset #2\
Upload your own data (audio files)| | Image Classification | Image Classification Dataset #1\
Image Classification Dataset #2\
Upload your own data (images+table)|

:::caution Attention!

In a single order you can deploy **only one** dataset with Hosting Launcher. Either a dynamic app or a static webpage. For ML scripts you can use multiple datasets at the same time.

:::

### 2. Building the Order

To better understand how Marketplace works, let’s take a step-by-step walkthrough.

As an example we’ll deploy the [Super Chat app](../chat/), a technological demo developed by the Super Protocol team to show how complex dynamic web apps can be run in decentralized confidential environments (TEE).

Let's begin by going to the Marketplace at [marketplace.superprotocol.com](https://marketplace.superprotocol.com/). At this point we assume that you have completed all the preliminary steps [here](../marketplace/first-steps/).

:::info Step 1. Add a solution.

Go to the `Solutions` tab and click on the `Hosting Launcher` offer. It will open a window with a detailed description of the offer. Click on the `Add to Order` button.

:::

\<img src={require('./../images/marketplace\_1.png').default}/>

\<img src={require('./../images/marketplace\_2.png').default}/>

You can also see in the `Restricted` tab that this Solution requires another offer: a `NodeJS base image`. It is added to the order automatically.

\


:::info Step 2. Add Super Chat dataset Go to the `Data` tab and add the `Super Chat Config` offer to the order.

:::

Note: The `Super Chat Config` data offer contains the necessary pre-configured settings to make deployment of Super Chat through the Marketplace more user-friendly. The actual chat solution deployed is `Tunnel Client: Super Chat` (see Step 10).

\<img src={require('./../images/marketplace\_3.png').default}/>

\
\
\


:::info Step 3. Add a Compute.

Now it’s time to select the provider of confidential computing resources. Go to the `Compute` tab and add one of the compute offers to the order using the `[+]` button.

:::

It’s best to select the Compute offer with the fewest orders in the queue.

\<img src={require('./../images/marketplace\_5.png').default}/>

\
\
\


:::info Step 4. Add a Storage.

Finally, we complete the assembly of the order by adding the Storage provider. Go to the `Storage` tab and add the `StorJ` offer to the order.

:::

Decentralized storage is where the Super Chat app saves the encrypted chat rooms and conversations. This architecture ensures complete decentralization.

\<img src={require('./../images/marketplace\_6.png').default}/>

### 3. Creating Order

Now that all the offers have been added, it's time to create the order.

:::info Step 5. Order Checkout.

Open the `Order` window and press the `Checkout` button.

:::

\<img src={require('./../images/marketplace\_7.png').default}/>

\
\
\


:::info Step 6. Set up a passphrase.

Either input your own passphrase or generate a new one. Then press the `Place Order` button. Save your passphrase! You won’t be able to access your order results without it.

:::

\<img src={require('./../images/marketplace\_8.png').default}/>

\
\
\


:::info Step 7a. Approve Metamask Spending Cap.

If this is your first time using SP Testnet, Metamask will ask you to approve the maximum spend allowed from this smart contract. [This feature](https://support.metamask.io/hc/en-us/articles/6055177143579-How-to-customize-token-approvals-with-a-spending-cap) is made by Metamask for your protection. But for purposes of Testnet you can set unlimited cap. Press `Use Default`, then `Next` at the next screen, and `Approve` at the next screen again. You only have to do this once.

:::

\<img src={require('./../images/marketplace\_9a.png').default}/>

\
\
\


:::info Step 7b. Confirm transactions.

After you have set up the Spending Cap for this smart contract, further approvals are much easier: just press the `Confirm` button when Metamask prompt appears. If its window doesn't open automatically or hangs on the loader screen, open it manually from the browser extensions.

:::

\<img src={require('./../images/marketplace\_9b.png').default}/>

### 4. Getting Results

At this point your order is either waiting in queue (status `New`) or is being executed (status `Processing`).

:::info Step 8. Go to the order.

If not forwarded to the order automatically, press the `All Orders` button and then click on the last order in the list.

:::

\<img src={require('./../images/marketplace\_10.png').default}/>

\<img src={require('./../images/marketplace\_11.png').default}/>

\
\
\


:::info Step 9. Just wait, really.

Processing takes about 30 minutes, depending on how many workloads the machine is processing. You might need to refresh the page to see the status change.

:::

\<img src={require('./../images/marketplace\_12.png').default}/>

\
\
\


:::info Step 10. Get result.

The order changes to status `Done`. Press the `Get Result` button and enter your passphrase. You will see the link - this is your brand new Super Chat URL.

:::

Please keep in mind that for testnet purposes the site will remain _**online only for 72 hours**_. But you are always free to create new orders.

\<img src={require('./../images/marketplace\_13.png').default}/>

\<img src={require('./../images/marketplace\_14.png').default}/>

You will also see created orders for the `Tunnel Clients` and `Tunnel Servers`. Tunnel technology provides communication between public and private networks. Unlike the Hosting Launcher order, which is Done, you will see that the Tunnel orders are still processing - which simply means that they are running, this is normal.

For testnet purposes, the proportion is 2x2: two server tunnels and two client tunnels. This is the minimum to achieve decentralization.

**Tunnel Client** – The client side of the tunnels. It is responsible for performance and runs with the applications and data in a confidential enclave (TEE). For instance, the Node.js app (such as Super Chat) is executed here, called Tunnel Client: Super Chat.

**Tunnel Server** – The server side of the tunnels. It is responsible for load balancing, protection against DDOS attacks and holds the Public Ingress (public static IP) which routes to the Client.

You can use the `Private key for created orders` to open the results of the Tunnel server orders and see the IP and the port of the server.

\<img src={require('./../images/marketplace\_15.png').default}/>

\<img src={require('./../images/marketplace\_16.png').default}/>

\
\
\


:::info Step 11. Like and share!

You are all set! Go to your new domain and please don’t forget to tell the world all about it on Twitter (or anywhere else). We’d really appreciate it!

:::

\<img src={require('./../images/marketplace\_17.png').default}/>
