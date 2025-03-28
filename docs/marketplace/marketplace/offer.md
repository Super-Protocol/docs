---
id: "offer"
title: "Offer"
slug: "/marketplace/offer"
sidebar_position: 2
---

This window provides information about a model available for lease on the Marketplace, including its pricing and requirements.

<img src={require('../images/offer-about.png').default} width="auto" height="auto" border="1"/>
<br/>

## Metadata

On the right-hand side of the window, you can find metadata about the offer:

- **Offer ID**: a unique identifier; it is incremental and continuous across model and dataset offers.
- **Offer Type**: the type of the offer:
    + **Model**
    + **Dataset**
    + **Engine**
    + **Compute**.
- **Provider**: name of the provider that created the offer.
- **Category**: the tasks the model or dataset is intended for.
- **Published**: date and time when the offer was created.
- **Updated**: date and time of the most recent update.

## About tab

The **About** tab displays the general description of the offer's content given by its provider.

## Pricing tab

The **Pricing** tab contains details about how many confidential computing resources the offer requires.

The offer provider can configure multiple sets of requirements called *[slots](/fundamentals/slots#requirements)*. Each slot may have a different price based on expected usage—higher workload typically imply higher pricing.

<img src={require('../images/offer-pricing.png').default} width="auto" height="auto" border="1"/>
<br/>

Super Protocol supports two pricing types:

- **Fixed**: a one-time payment for each order, regardless of the lease duration.
- **Per Hour**: payment is based on the number of hours the offer is leased.

Each slot includes the following requirements:

- **CPU vCores**: number of CPU cores; can be fractional.
- **CPU RAM**: RAM in gigabytes (GB).
- **GPU vCores**: number of GPU cores; can be fractional.
- **GPU RAM**: video RAM in gigabytes (GB).
- **Disk**: disk space in gigabytes (GB).
- **Bandwidth**: data transfer rate in megabits per second (Mbps).
- **Traffic**: total allowed data transfer usage in gigabytes (GB).
- **Ext.Port**: availability of an external port for internet access; either **Yes** or **Any**.
- **Min Time** and **Max Time**: minimum and maximum lease duration limits, as defined by the provider.

The **slotID**, shown in the bottom-right corner of each slot, is a unique identifier. These IDs are incremental and continuous across model and dataset offers.

To add the offer to your order, click the blue **Deploy** button next to the desired slot.