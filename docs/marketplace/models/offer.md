---
id: "offer"
title: "Offer"
slug: "/models/offer"
sidebar_position: 2
---

This window provides information about a model available for lease on the Marketplace, including its pricing and <a id="requirements"><span className="dashed-underline">requirements</span></a>.

<img src={require('../images/offer-about.png').default} width="auto" height="auto" border="1"/>
<br/>

## Metadata

On the right-hand side of the window, you can find metadata about the <a id="offer"><span className="dashed-underline">offer</span></a>:

- **Offer ID**: A unique identifier; it is incremental and continuous across all offers.
- **Offer Type**: The type of the offer:
    - **Model**
    - **Dataset**
    - <a id="engine"><span className="dashed-underline">**Engine**</span></a>
    - <a id="compute"><span className="dashed-underline">**Compute**</span></a>.
- **Provider**: The name of the provider that created the offer.
- **Category**: The tasks the model is intended for.
- **Source**: A link to the resource from which the model was taken.
- **Published**: The date and time when the offer was created.
- **Updated**: The date and time of the most recent update.

## About tab

The **About** tab displays the general description of the offer's content given by its provider.

## Pricing tab

The **Pricing** tab contains the cost of leasing the model and details about how many confidential computing resources the offer requires.

<img src={require('../images/offer-pricing.png').default} width="auto" height="auto" border="1"/>
<br/>

**Model Format** allows you to change the model format if others are available.

### Slots

The offer provider can configure multiple sets of *[requirement slots](/fundamentals/slots#requirements)*. Each slot may have a different price based on expected usage—a higher workload typically implies higher pricing.

Slots may be divided into two categories:

- For GPU: run the model on an NVIDIA H100 Tensor Core GPU.
- For CPU: run the model on an Intel TDX CPU. Note that the model may run slower in this mode. However, it may be a suitable way to deploy smaller models since the TDX-only machines are cheaper and has more availability than TDX+H100 machines.

Super Protocol supports two pricing types:

- **Fixed**: a one-time payment for each <a id="order"><span className="dashed-underline">order</span></a>, regardless of the lease duration.
- **Per Hour**: payment is based on the number of hours the offer is leased.

Each slot includes the following requirements:

- **CPU vCores**: The number of virtual CPU cores; can be fractional.
- **CPU RAM**: RAM in gigabytes (GB).
- **GPU vCores**: The number of virtual GPU cores; can be fractional.
- **GPU RAM**: Video RAM in gigabytes (GB).
- **Disk**: Disk space in gigabytes (GB).
- **Bandwidth**: Data transfer rate in megabits per second (Mbps).
- **Traffic**: Total required data transfer usage in gigabytes (GB).
- **Ext.Port**: Availability of an external port for internet access; either **Yes** or **Any**.
- **Min Time** and **Max Time**: Minimum and maximum lease duration limits, as defined by the provider.

The **slotID**, shown in the bottom-right corner of each slot, is a unique identifier. These IDs are incremental and continuous across all offers.

To add the offer to your order, click the blue **Deploy** button next to the desired slot.