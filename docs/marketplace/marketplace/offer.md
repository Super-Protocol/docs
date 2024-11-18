---
id: "offer"
title: "Offer"
slug: "/marketplace/offer"
sidebar_position: 2
---

This window provides detailed information about a model or dataset available for lease on the Marketplace.

The **About** tab displays the general description of the offer given by its provider:

(image About tab)
<br/>
<br/>

The **Pricing** tab contains the offer's requirements, detailing how many resources the offer requires:

(image: Pricing tab)
<br/>
<br/>

A _requirement slot_ is a specific set of offer requirements:

- Pricing type and cost in TEE tokens:
    + **Fixed** indicates that you must pay for each use of the offer, regardless of the lease duration.
    + **Per Hour** indicates that must pay for each hour of leasing the offer.
- **vCores**: number of CPU cores, can be fractional.
- **RAM**: amount of required RAM in gigabytes.
- **Disk**: required disk space in gigabytes.
- **Bandwidth**: data transfer rate in megabits per second.
- **Traffic**: amount of traffic in gigabytes.
- **Ext.Port**: availability of an external port for internet access; either **Yes** or **Any**.
- **Min Time** and **Max Time**: minimum and maximum lease time in hours. Note that the minimum lease time affects the initial order deposit. Learn more about [Lease, deposit, and balance](/fundamentals/orders/#lease-deposit-and-balance).
- **slotID**: a unique identification number of the requirement slot. It is incremental and continuous for model offers and dataset offers.

The offer provider can define multiple requirement slots with varying prices based on expected usage. Higher requirements imply a higher expected workload, and the slot price may reflect that. Learn more about [requirement slots](/fundamentals/slots#requirements).

On the right side of the screen, you can see the offer's metadata:

- **Offer ID**: a unique offer identification number. It is incremental and continuous for model offers and dataset offers.
- **Offer Type**: the type of the offer, either **Model** or **Dataset**.
- **Category**: the tasks for which the model or dataset is intended. Models can only belong to one category; datasets may belong to several categories.
- **Provider**: the name of the offer provider. 
- **Source**: the resource from where the content was downloaded.
- **Published**: the date and time when the offer was created.
- **Updated**: the date and time of the latest offer update.

(image: metadata)
<br/>
<br/>

To add the offer to an order, click the blue **[+]** button next to a slot. **Offer added to Order** in the bottom-right corner of the window indicates that a requirement slot was added to the order:

(image: added)
<br/>
<br/>