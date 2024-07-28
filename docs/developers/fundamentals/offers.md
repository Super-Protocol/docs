---
id: "offers"
title: "Offers"
slug: "/fundamentals/offers"
sidebar_position: 2
---

<img src={require('./../images/fundamentals_offers_1.png').default} width="auto" height="auto"/>

<br/>
<br/>

_Offer_ is a solution, data, storage, or compute resource available on the Marketplace. Offers cost money—TEE tokens—to use with prices set by their providers.

The [order](/developers/fundamentals/orders) creation involves using four basic building blocks:

- **Solutions**: applications such as AI frameworks, base images, tunnels, oracles, etc.
- **Data**: anything that solutions use: AI models, webpages, configs, datasets, databases, etc.
- **Storage**: decentralized storage, such as Storj, to keep the offer content, computation results, and service files
- **Compute**: confidential computing resources to execute solutions and data inside a trusted execution environment.

Read about some of the available offers [here](/developers/offers).

## Types of offers

_Value offer_ is a collective term for solution, data, and storage offers.

### Solution and data

Two parts of a solution or data offer are
- The record on the blockchain: parameters that govern how to order the offer
- The content in storage: actual files that the compute provider downloads and executes.

Users can register offer providers to create solution and data [community offers](/developers/fundamentals/offers#community-offers).

### Storage

Two parts of a storage offer are
- The record on the blockchain: parameters that govern how to order the offer
- The account on decentralized storage to upload and download files.

Currently, only Super Protocol provides storage offers. This functionality will be available for anyone with proper hardware in future releases.

### Compute

Two parts of a compute offer are
- The record on the blockchain: parameters that govern how to order the offer
- The physical trusted execution environment device: a computer connected to the Super Protocol consensus.

Currently, only Super Protocol provides compute offers. This functionality will be available for anyone with proper hardware in future releases.

## Community offers

Any Super Protocol user can [register a provider](/developers/cli_guides/providers_offers/) and create solution and data offers. This way, users can share and monetize their applications and datasets.

Currently, only Super Protocol provides storage and compute offers. In future releases, the ability to create compute and storage offers will be available to anyone with proper hardware.

The filter on the left side of the screen in the Marketplace GUI divides all offers into four categories:

- **Super Protocol**: offers provided by Super Protocol
- **Approved**: community offers [reviewed](/developers/marketplace/moderation/) by the Super Protocol team and considered acceptably operational
- **Unmoderated**: community offers that were not reviewed. All new offers appear here
- **Inactive**: community offers that [do not respond](/developers/cli_guides/providers_offers#about-offer-provisioner) and, therefore, are nonfunctional and likely abandoned. Read [Inactive offers](/developers/cli_guides/providers_offers#inactive-offers) for more information

<img src={require('../images/gui_moderation_1.png').default} width="300" height="auto"/>

### Offer posts on Discord

All offers from the **Super Protocol** and **Approved** categories in the Marketplace GUI have dedicated posts in the [#offers](https://discord.com/channels/951018794590023681/1239934457041916035) channel on the Super Protocol Discord server. There, you can find descriptions, links, and other information. To quickly find an offer, search by its name or ID.

### Stuck orders

If you are using a community offer in your order and the offer fails to respond, your order will not proceed. When you see your order stuck with the **New** status for more than 15 minutes, check the community offer you used. If it is in the **Inactive** category, this offer is nonfunctional. Cancel your order to return the deposit.

### Inactive offers

Offers may be flagged as Inactive in the Marketplace GUI for two reasons:

- If the offer content is no longer accessible because its [storage order has expired](/developers/cli_guides/providers_offers#lease-on-uploaded-offer-content). Due to confidentiality and security, the Super Protocol team cannot change the resource link in offers. In this case, you have to create your offer again.
- If the lease on the [Offer Provisioner order has expired](/developers/cli_guides/providers_offers#lease-on-offer-provisioner). Create a new Offer Provisioner order and contact Super Protocol Community Managers [Discord](https://discord.gg/superprotocol). They will reactivate your offer.

## Metadata

Every offer comes with the following descriptive parameters:

- **Type**: offer type—solution, data, compute, or storage
- **Id**: unique identification number of the offer
- **Description**: text description of the offer
- **Provider**: name of the provider who created the offer
- **Published date**: the date when the offer was created
- **Updated date**: the date when changes were made to the offer
- **MRENCLAVE**: value that represents the hash of the code and data inside a Trusted Execution Environment
- **MRSIGNER**: value for identifying the signing entity of a Trusted Execution Environment.

## Rules

Providers can set the rules to govern what offers can and cannot do.

_Restrictions_ determine whether an offer has dependencies. For instance, a Node.js-based solution most likely depends on [Node.js Base Image](https://marketplace.superprotocol.com/?offer=offerId%3D6). So, any order that uses this Node.js-based solution must also use the base image.

Similarly, a solution offer may only run with certain data or compute offers. There are many possible scenarios.

## Configurations

_Configuration slots_ are sets of parameters of compute offers. They define

- The number of CPU cores
- RAM
- Disk space
- Minimum and maximum [lease time](/developers/fundamentals/orders#lease-deposit-and-balance).

_Configuration options_ contain network-related parameters:

- Bandwidth
- Traffic
- External port.

Compute providers can create multiple configuration slots and options for every offer and price them differently.

Read more in [Slots and Options](/developers/fundamentals/slots).

## Requirements

_Requirements_ specify the configuration that a solution, data, or storage offer needs to run. Offer providers can create multiple sets of requirements—_requirement slots_—for every offer and price them differently depending on expected usage.

The customer must choose a compute configuration to meet the sum of all the solution, data, and storage requirements in the order.

Read more in [Slots and Options](/developers/fundamentals/slots).
