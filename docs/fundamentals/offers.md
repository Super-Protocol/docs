---
id: "offers"
title: "Offers and Providers"
slug: "/offers"
sidebar_position: 2
---

_Offer_ is an open listing for a computing service, software product, or data available on the Marketplace. To add an offer to an <a id="order"><span className="dashed-underline">order</span></a>, users must pay the price in SPPI tokens set by the offer provider.

_Providers_ share and monetize their applications and datasets by creating and maintaining _community offers_ on the Super Protocol Marketplace. 

## Types of offers

Offers are the basic building blocks of the Marketplace. Four types of offers exist in Super Protocol:

- _Compute offers_: Confidential computing resources required to deploy models, launch confidential tunnels, and execute <a id="solution"><span className="dashed-underline">solutions</span></a> inside a <a id="tee"><span className="dashed-underline">Trusted Execution Environment</span></a>.
- _Solution offers_: Applications such as AI frameworks, base images, tunnels, oracles, etc.
- _Data offers_: AI models, webpages, configs, datasets, databases, etc.
- _Storage offers_: Decentralized storage, such as Storj, to keep the offer content, order results, and service files.

_Value offer_ is a collective term for solution, data, and storage offers.

<img src={require('./images/fundamentals_offers_1.png').default} width="auto" height="auto"/>
<br/>
<br/>

Usually, placing an order involves adding all four types of offers. However, customers can also upload their solutions and data instead of using an existing offer.

Every offer has an identification number—_offer ID_. It is incremental and unique for all offers regardless of their type.

### Compute

Compute offer is the main component in any order. It provides the resources and a Trusted Execution Environment necessary to perform a secure execution of solutions.

A compute offer is a combination of two parts:

- A record on the blockchain containing the parameters that govern how to order the offer
- A physical confidential computing device connected to Super Protocol.

To balance the load and set better prices for the users, the compute provider can divide the resources of the physical machine into smaller parts—configuration [slots and options](/fundamentals/slots#configuration).

### Solution and data

Each solution or data offer is a combination of two parts:

- A record on the blockchain containing the parameters that govern how to order the offer.
- Files in decentralized storage that the compute provider downloads and executes.

Every solution and data require certain amount of computer resources to run. Solution and data providers can define sets of such requirements called _requirement slots_ and price them differently. Refer to [Requirements](/fundamentals/slots#requirements) to learn more.

An order can include several solution and data offers. For example, a solution offer with a Python script most likely depends on the [Python Base Image](https://marketplace.superprotocol.com/solutions?offer=offerId%3D5). If a customer adds this solution offer to an order, they also must add the base image. The offer provider must specify the restrictions when creating a value offer.

### Storage

Storage offers are necessary to store the order results. It is also possible to create independent storage orders for encrypted solution and data files for respective community offers.

A storage offer is a combination of two parts:

- A record on the blockchain containing the parameters that govern how to order the offer.
- A decentralized storage account to upload and download files.

As with solution and data offers, providers of storage offers can divide them into [slots](/fundamentals/slots#requirements). Every slot can have a different price depending on the disk space and lease time.

## Providers

Any Super Protocol user can register a provider and create solution and data offers. This way, users can share and monetize their applications and datasets.

Besides the user Testnet account, providers also have three _provider accounts_:

- _Authority account_ can change provider's records. It is the main provider account.
- _Action account_ executes actions on behalf of the authority account.
- _Token receiver account_ receives rewards in SPPI tokens for providing offers on Super Protocol.

Because Super Protocol is still in the testnet stage, monetization is only possible with test tokens as a demonstration. Moreover, providers can create only solution and data offers.

Upcoming releases will bring an updated Marketplace, a more convenient GUI-based workflow, and additional features like creating compute and hardware offers.

Besides, providers will have to pay a security deposit to register. If a provider is penalized, does not replenish the security deposit balance, and lets it decrease below the limit, then the provider's offers can no longer be added to orders. If a provider disables all their offers, they may withdraw the remaining security deposit.

### Community offers

A _community offer_ is any offer not provided by Super Protocol. In the [Marketplace GUI](/marketplace), the filter on the left side of the screen divides all offers into four categories:

- **Super Protocol**: offers provided by Super Protocol.
- **Approved**: community offers reviewed by the Super Protocol team and considered acceptably operational.
- **Unmoderated**: community offers that were not reviewed. All new offers appear in this category.
- **Inactive**: community offers that do not respond and, therefore, are nonfunctional and likely abandoned.

<img src={require('./images/gui_moderation_1.png').default} width="300" height="auto"/>

<br/>

### Stuck orders

If you add a community offer to your order and the offer fails to respond, your order will not proceed. When you see your order stuck with the **New** status for more than 15 minutes, check the community offer you used. If it is in the **Inactive** category, this offer is nonfunctional. Cancel your order to return the deposit.

### Inactive offers

Offers may be flagged as Inactive in the Marketplace GUI for two reasons:

- If the offer content is no longer accessible because its storage order has expired. Due to confidentiality and security, the Super Protocol team cannot change the resource link in offers. In this case, you have to create your offer again.
- If the lease on the Offer Provisioner order has expired. Create a new Offer Provisioner order and contact Super Protocol Community Managers [Discord](https://discord.gg/superprotocol). They will reactivate your offer.

## Metadata

Every offer comes with the following descriptive parameters:

- **Type**:
    + Compute
    + Solution
    + Data
    + Storage
- **Id**: unique identification number of the offer.
- **Description**: text description of the offer.
- **Provider**: name of the provider who created the offer.
- **Published date**: the date when the offer was created.
- **Updated date**: the date when changes were made to the offer.
- **MRENCLAVE**: value that represents the hash of the code and data inside a Trusted Execution Environment.
- **MRSIGNER**: value for identifying the signing entity of a Trusted Execution Environment.

## Rules

Providers can set the rules to govern what offers can and cannot do.

_Restrictions_ determine whether an offer has dependencies. The provider can make a solution or data offer run only with certain other offers of any type—compute, data, solution, and storage. On the other hand, compute and storage offers cannot impose restrictions.

For example, if a Node.js-based solution depends on Node.js Base Image, the offer provider must set up this solution offer to require the base image.

Additionally, the provider can make the offer available only for certain customers.

## Requirements and configurations

_Requirements_ specify the configuration that a solution, data, or storage offer needs to run. Offer providers can create multiple sets of requirements—_requirement slots_—for every offer and price them differently depending on expected usage.

_Configuration slots_ are sets of compute-related parameters of compute offers:

- The number of CPU cores
- RAM
- Disk space
- Minimum and maximum [lease time](/fundamentals/orders#usage-scenarios)

_Configuration options_ are sets of network-related parameters of compute offers:

- Bandwidth
- Traffic
- External port availability

Compute providers can create multiple configuration slots and options for every offer and price them differently. The customer must choose a compute configuration to meet the sum of all the solution, data, and storage requirements in the order.

Read more in [Slots and Options](/fundamentals/slots).