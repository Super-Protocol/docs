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

Value offers are created and managed by the solution and data providers.

### TEE Compute

A TEE Compute offer exists in two parts:
1. As a record on blockchain. It contains the parameters that govern how an offer may be ordered.
2. As an actual machine with enabled TEE and connected to the Super Protocol consensus. 

Compute offers are created and managed by the compute providers.

### Storage

A Storage offer exists in two parts:
1. As a record on blockchain. It contains the parameters that govern how an offer may be ordered.
2. As an account on a decentralized storage network where files might be uploaded and downloaded.

Storage offers are created and managed by the storage providers.

## Creating offers

Anyone can create new offers on Super Protocol. Follow the steps in [Creating and Managing Providers and Offers](/developers/cli_guides/providers_offers) guide.

:::info Testnet limitations

As of Testnet 5, you can only create Solution and Data offers. Ability to create Storage and TEE Compute offers will be available in future releases.

:::

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



