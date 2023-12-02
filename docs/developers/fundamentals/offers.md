---
id: "offers"
title: "Offers"
slug: "/fundamentals/offers"
sidebar_position: 2
---


## Understanding Offers

There are four basic components that may be involved in creation of an order:

- *Solutions* – base images, tunnel clients, tunnel server, oracles, Python models - basically, any application.

- *Data* – data is anything that is used by a solution: webpages, configs, datasets, databases, etc.

- *Compute* – confidential computing resources where the solutions and data are executed inside the Trusted Execution Environment (TEE).

- *Storage* – decentralized storages, such as Storj, where the content, computation results and service files are stored.

An *offer* is a solution, data, compute or storage that is made available on the Marketplace for all users. Offers cost money (TEE tokens) to use, prices set by their respective *providers*. 

Specifically solutions and data may be deployed without them being an offer: you can deploy your own application or a dataset privately without making them available on the Marketplace.

You can see some of the offers [here](/developers/offers).

:::info Testnet limitation

At the moment offers and providers can be created only by the Super team. Functionality to register as providers and create offers will be enabled for all users in the upcoming releases.

:::

## Types of Offers

### Solution and Data

Solutions and data are called *value offers* because they are the reason why computing takes place: they bring value.

A value offer exists in two parts:
1. As a record on blockchain. It contains the parameters that govern how an offer may be ordered. 
2. As content in storage. These are the actual files that will be downloaded by the Compute provider for execution. 

Value offers are created and managed by the solution and data providers.


### Compute

A compute offer exists in two parts:
1. As a record on blockchain. It contains the parameters that govern how an offer may be ordered.
2. As an actual machine with enabled TEE and connected to the Super Protocol consensus. 

Compute offers are created and managed by the compute providers.

### Storage

A storage offer exists in two parts:
1. As a record on blockchain. It contains the parameters that govern how an offer may be ordered.
2. As an account on a decentralized storage network where files might be uploaded and downloaded.

Storage offers are created and managed by the storage providers.

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

* *Cancelable* - whether an order may be canceled without penalties.

* *Restrictions* - whether an offer has dependencies. For instance, a Node.js-based solution offer will likely have a *Must Use* restriction for a Node.js base image solution: an order must have both of these two solutions to run. Or a solution offer might be restricted to running only with certain data offers or even compute offers. There can be many scenarios. 

### Requirements

Applicable only to solutions, data and storage offers.

*Requirements* specify a compute configuration that an offer needs to run properly. Requirements are set by the provider. There may be multiple requrements to choose from and each can be priced differently depending on expected usage. Learn more about requirements [here](/developers/fundamentals/slots).

### Configurations

Applicable only to compute offers.

*Slots* and *Options* are sets of parameters of a compute configuration. They are set by the compute provider. A single compute offer may have multiple configurations which are priced differently. A customer must choose a configuration that is at least equal to the sum of all requirements - if a solution requires 2 CPU cores, then the configuration must have available at least that much. Learn more about slots and options [here](/developers/fundamentals/slots).





