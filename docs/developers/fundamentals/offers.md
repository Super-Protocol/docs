---
id: "offers"
title: "Offers"
slug: "/fundamentals/offers"
sidebar_position: 2
---


## Understanding Offers

<img src={require('./../images/fundamentals_offers_1.png').default} width="auto" height="auto"/>

<br/>
<br/>

There are four basic building blocks that may be involved in creation of an [order](/developers/fundamentals/orders):

- **Solutions** – AI models, base images, tunnels, oracles - basically, any application.
- **Data** – data is anything that is used by a solution: webpages, configs, datasets, databases, etc.
- **TEE Compute** – confidential computing resources where the solutions and data are executed inside the Trusted Execution Environment (TEE).
- **Storage** – decentralized storages, such as Storj, where the offer content, computation results and service files are stored.

Thus, an **offer** is a solution, data, compute or storage that is made available on the Marketplace for all users. Offers cost money (TEE tokens) to use, prices set by their respective *providers*. 

You can see some of the offers [here](/developers/offers).

## Types of Offers

### Solutions and Data

Solutions and data are called *value offers* because they are the reason why computing takes place: they bring value. 

A value offer exists in two parts:
1. As a record on blockchain. It contains the parameters that govern how an offer may be ordered. 
2. As content in storage. These are the actual files that will be downloaded by the Compute provider for execution. 

Solution and data providers create and manage solution and data offers.

### TEE Compute

A TEE Compute offer exists in two parts:
1. As a record on blockchain. It contains the parameters that govern how an offer may be ordered.
2. As an actual machine with enabled TEE and connected to the Super Protocol consensus. 

Compute providers create and manage compute offers.

### Storage

A Storage offer exists in two parts:
1. As a record on blockchain. It contains the parameters that govern how an offer may be ordered.
2. As an account on a decentralized storage network where files might be uploaded and downloaded.

Storage providers create and manage storage offers.

## Community offers

Any Super Protocol user can [register as a provider](/developers/cli_guides/providers_offers/) and create solution and data offers. This way, users can share and monetize their applications and datasets.

:::note
Currently, only Super Protocol provides storage and compute offers. In future releases, the ability to create compute and storage offers will be available to anyone with proper hardware.
:::

The filter on the left side of the screen in the Marketplace GUI divides all offers into four categories:

- **Super Protocol**: offers provided by Super Protocol.
- **Approved**: community offers [reviewed](/developers/marketplace/moderation/) by the Super Protocol team and considered acceptably operational.
- **Unmoderated**: community offers that were not reviewed. All new offers appear here.
- **Inactive**: community offers that [do not respond](/developers/cli_guides/providers_offers#about-offer-provisioner) and, therefore, are nonfunctional and likely abandoned. Read [Inactive offers](/developers/cli_guides/providers_offers#inactive-offers) for more information.

<img src={require('../images/gui_moderation_1.png').default} width="300" height="auto"/>

### Offer posts on Discord

All offers from the **Super Protocol** and **Approved** categories in the Marketplace GUI have dedicated posts in the [#offers](https://discord.com/channels/951018794590023681/1239934457041916035) channel on the Super Protocol Discord server. There, you can find descriptions, links, and other information. To quickly find an offer, search by its name or ID.

### Stuck orders

If you are using a community offer in your order and the offer fails to respond, your order will not proceed. When you see your order stuck with the **New** status for more than 15 minutes, check the community offer you used. If it is in the **Inactive** category, this offer is nonfunctional. Cancel your order to return the deposit.

### Inactive offers

Offers may be flagged as Inactive in the Marketplace GUI for two reasons:

1. If the offer content is no longer accessible because its [storage order has expired](/developers/cli_guides/providers_offers#lease-on-uploaded-offer-content). Due to confidentiality and security, the Super Protocol team cannot change the resource link in offers. In this case, you have to create your offer again.

2. If the lease on the [Offer Provisioner order has expired](/developers/cli_guides/providers_offers#lease-on-offer-provisioner). Create a new Offer Provisioner order and contact Super Protocol Community Managers [Discord](https://discord.gg/superprotocol). They will reactivate your offer.

## Blockchain Parameters

### Metadata

* *Type* - offer type: solution, data, compute, storage.
* *Id* - unique identification number of the offer (numbering is regardless of type)
* *Description* - text description of offer.
* *Provider* - name of the provider who created the offer.
* *Date Published* - date when offer was created.
* *Date Updated* - date when changes were made to the offer.
* *MRENCLAVE* - value that represents the hash of the code and data inside the TEE.
* *MRSIGNER* - value is used to uniquely identify the signing entity of the TEE.

### Rules

Rules are set by the providers and govern what offers can and cannot do.

* *Restrictions* - whether an offer has dependencies. For instance, a Node.js-based solution offer will likely have a *Must Use* restriction for a Node.js base image solution: an order must have both of these two solutions to run. Or a solution offer might be restricted to running only with certain data offers or even compute offers. There can be many scenarios. 

### Requirements

Applicable only to solutions, data and storage offers.

*Requirements* specify a compute configuration that an offer needs to run properly. Requirements are set by the provider. There may be multiple requrements to choose from and each can be priced differently depending on expected usage. 

Learn more about requirements [here](/developers/fundamentals/slots).

### Configurations

Applicable only to compute offers.

*Slots* and *Options* are sets of parameters of a compute configuration. They are set by the compute provider. A single compute offer may have multiple configurations which are priced differently. A customer must choose a configuration that is at least equal to the sum of all requirements - if a solution requires 2 CPU cores, then the configuration must have available at least that much. 

Learn more about slots and options [here](/developers/fundamentals/slots).



