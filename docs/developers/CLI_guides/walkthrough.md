---
id: "walkthrough"
title: "Walkthrough"
slug: "/cli_guides/walkthrough/"
sidebar_position: 4
---

## 1. Introduction

To better understand how Super Protocol works, let’s take a step-by-step walkthrough.

As an example we’ll deploy the [Super Chat](/developers/offers/superchat) app with Tunnels. Please note that for this walkthrough we'll be using [Tunnels Provisioner](/developers/architecture/tunnels/provisioner) (Hosting Launcher), which cuts a few corners in order to streamline the experience. For the full Tunnels deployment capabilities please refer to [this guide](/developers/deployment_guides/tunnels).


We will also be providing CLI steps in parallel where applicable. For this you will need to have [configured SPCTL](/developers/cli_guides/).

## 2. Building the Order

get tokens just in case


lets see which offers are available

```
./spctl offers list value --limit 20
```

we are interested in Hosting Launcher. It'd id 12. lets see its slots. 

```
./spctl offers get-slot value --offer 12 --slot 13
```



./spctl workflows create --tee 1,1 --solution 12,13 --solution 6,2 --data 16,21 --storage 20,16


## 4. Getting Results

At this point your order is either waiting in queue (status `New`) or is being executed (status `Processing`).

:::info Step 8. Go to the order.

If not forwarded to the order automatically, press the `All Orders` button and then click on the last order in the list.

:::



<br/>
<br/>
<br/>

:::info Step 9. Just wait, really.

Processing takes about 30 minutes, depending on how many workloads the machine is processing. You might need to refresh the page to see the status change.

:::


<br/>
<br/>
<br/>

:::info Step 10. Get result.

The order changes to status `Done`. Press the `Get Result` button and enter your passphrase. You will see the link - this is your brand new Super Chat URL.

:::

Please keep in mind that for testnet purposes the site will remain ***online only for 72 hours***. But you are always free to create new orders.



You will also see created orders for the `Tunnel Clients` and `Tunnel Servers`. Tunnel technology provides communication between public and private networks. Unlike the Hosting Launcher order, which is Done, you will see that the Tunnel orders are still processing - which simply means that they are running, this is normal.

For testnet purposes, the proportion is 2x2: two server tunnels and two client tunnels. This is the minimum to achieve decentralization.

**Tunnel Client** – The client side of the tunnels. It is responsible for performance and runs with the applications and data in a confidential enclave (TEE). For instance, the Node.js app (such as Super Chat) is executed here, called Tunnel Client: Super Chat.

**Tunnel Server** – The server side of the tunnels. It is responsible for load balancing, protection against DDOS attacks and holds the Public Ingress (public static IP) which routes to the Client.

You can use the `Private key for created orders` to open the results of the Tunnel server orders and see the IP and the port of the server.




<br/>
<br/>
<br/>

:::info Step 11. Like and share!

You are all set! Go to your new domain and please don’t forget to tell the world all about it on Twitter (or anywhere else). We’d really appreciate it!

:::



<Highlight color="red">check confidentiality</Highlight>

<Highlight color="red">replenishing order</Highlight>
