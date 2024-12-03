---
id: "offer"
title: "Offer"
slug: "/marketplace/offer"
sidebar_position: 2
---

This window provides detailed information about a model or dataset available for lease on the Marketplace.

<img src={require('../images/offer-about.png').default} width="auto" height="auto" border="1"/>
<br/>

## Metadata

On the right side of the window, you can see the offer's metadata:

- **Offer ID**: a unique offer identification number. It is incremental and continuous for model offers and dataset offers.
- **Offer Type**: the type of the offer, either **Model** or **Dataset**.
- **Category**: the types of tasks that the model or dataset is designed to perform. Models can only belong to one category; datasets may belong to several categories.
- **Provider**: the name of the provider that created the offer.
- **Published**: the date and time when the offer was created.
- **Updated**: the date and time of the latest offer update.

## About tab

The **About** tab displays the general description of the offer's content given by its provider.

## Pricing tab

The **Pricing** tab contains the offer requirements, detailing how many confidential computing resources the offer needs.

<img src={require('../images/offer-pricing.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

- Pricing type and cost in TEE tokens:
    + **Fixed** indicates you must pay only once to lease the offer, regardless of the lease duration.
    + **Per Hour** indicates you must pay for each hour of leasing the offer.
- **CPU vCores**: number of CPU cores, can be fractional.
- **CPU RAM**: amount of RAM in gigabytes (GB).
- **GPU vCores**: number of GPU cores, can be fractional.
- **GPU RAM**: amount of video RAM in gigabytes (GB).
- **Disk**: disk space in gigabytes (GB).
- **Bandwidth**: data transfer rate in megabits per second (Mbps).
- **Traffic**: amount of traffic in gigabytes (GB).
- **Ext.Port**: availability of an external port for internet access; either **Yes** or **Any**.
- **Min Time** and **Max Time**: providers may set the minimum and maximum allowed lease time to limit the usage of the offer.
- **slotID**: a unique identification number of the requirement slot. It is incremental and continuous for model offers and dataset offers.

The offer provider can configure multiple requirement slots with varying prices based on expected usage. Higher requirements imply a higher expected workload, and the slot price may reflect that. Learn more about [requirement slots](/fundamentals/slots#requirements).

To add the offer to an order, click the blue **[+]** button next to a slot. **Offer added to Order** in the bottom-right corner of the window indicates that a requirement slot was added to the order:

<img src={require('../images/offer-added.png').default} width="auto" height="auto" border="1"/>