---
id: "offer"
title: "Offer"
slug: "/marketplace/offer"
sidebar_position: 2
---

The **Offer** window displays detailed information about an [offer](/fundamentals/offers/).

(image Offer window full, About tab)
<br/>
<br/>

**[1] About**: this tab displays the general offer description given by the [offer provider](/fundamentals/offers#providers). It may contain links and other helpful information.

(image Offer window full, Pricing tab)
<br/>
<br/>

**[2] Pricing**: this tab contains offer's [requirement slots](/fundamentals/slots)—sets of offer requirements.

The offer provider can define multiple requirement slots with different prices depending on expected usage. Higher requirements imply a higher expected workload, and the slot price may reflect that.

**[3] Requirement slot**: a specific set of offer requirements and its price in TEE tokens.

- The slot's pricing type:
    + **Fixed** means you have to pay for each use of the offer, regardless of the lease term.
    + **Per Hour** means the cost will be deducted from the order deposit every hour while the order is running.
- **vCores**: number of CPU cores. It can be a fraction.
- **RAM**: required RAM in gibibytes (GiB).
- **Disk**: required disk space in gibibytes (GiB).
- **Bandwidth**: the rate of data transfer in megabit per second (Mbps).
- **Traffic**: traffic in gigabytes (GB).
- **Ext.Port**: availability of an external port for internet access; **Yes** or **No**.
- **Min Time**: minimum lease time in minutes. This value affects the initial order deposit. Read more about [least time, deposit, and balance](/fundamentals/orders#lease-deposit-and-balance).
- **Max Time**: maximum lease time in minutes.
- **slotID**: unique identification number of the requirement slot. It is incremental and continuous for all model and dataset offers.

To add or remove a slot from the order, use the blue **+** and **Trash** buttons.

**[4] Offer metadata**:

- **Offer ID**: a unique offer identification number. It is incremental and continuous for model offers and dataset offers.
- **Offer Type**: the type of the offer; either **Model** or **Dataset**.
- **Category**: the primary task of the offer. Models can only belong to one category; datasets may belong to several categories.
- **Provider**: the name of the offer provider. 
- **Source**:
- **Published**: the date and time when the offer was created.
- **Updated**: the date and time of the latest offer update.

**[5] Offer added to Order**: indicates that a requirement slot was added to the order and shows the price of the slot. To remove the slot from the order, click the **Trash** button.