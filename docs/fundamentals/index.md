---
id: "index"
title: "Fundamentals"
slug: "/"
sidebar_position: 1
---

import { Tooltip } from 'react-tooltip';

This section describes the most essential concepts of Super Protocol.

## Marketplace

Super Protocol Marketplace is a distributed blockchain-based ecosystem governed by smart contracts. It connects the sellers and buyers of digital products and services:

- Providers who <a id="offer"><span className="dashed-underline">offer</span></a> solutions, data, and compute resources.
- Customers who lease the offers and pay for the usage.

Providers create offers to share and monetize their compute resources as well as solutions, scripts, datasets, AI models, libraries, frameworks, etc. Read more about [offers and providers](/fundamentals/offers).

Customers place <a id="order"><span className="dashed-underline">orders</span></a> by adding offers and paying for them according to the prices set by the providers of these offers. To learn more about orders, order statuses, pricing, and possible usage scenarios, refer to the [documentation](/fundamentals/orders).

The Super Protocol Marketplace is accessible via one of the following:

- The command-line interface (CLI) using a utility called SPCTL.
- The graphical user interface (GUI) using a browser-based [web application](https://marketplace.superprotocol.com/).

## Trusted Execution Environment

A _Trusted Execution Environment_ is a secure area in memory, [CPU](https://www.intel.com/content/www/us/en/developer/tools/trust-domain-extensions/overview.html), and [GPU](https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/). This area is protected from unauthorized access from the outside, so the data inside a Trusted Execution Environment cannot be read or edited without the authorized code.

Confidentiality is an integral part of Super Protocol. All the user data in Super Protocol is encrypted and protected while stored, in transfer, and in use.

Trusted Execution Environment ensures confidentiality and protects both providers and customers. Only the customer can access their orders. Customers themselves cannot download, modify, or otherwise access the provider's offer content even if they use it in their orders. Neither the Super Protocol team nor the owner of the computing device have access to the order and offer content.

## Providers

Super Protocol users can register providers on Super Protocol. Providers can share and monetize their applications and datasets by offering them to other users. Since Super Protocol is still in the testnet stage, monetization is only possible with test tokens as a demonstration.

Provider registration and offer creation are available for anyone to try. Currently, this functionality requires CLI and is aimed at advanced users. Upcoming releases will bring an updated Marketplace, additional features, and a more convenient GUI-based workflow. Refer to the Providers and Offers guide for step-by-step instructions on how to register a provider and create an offer.

## Offers

Offers are the basic building blocks of the Marketplace. There are four types of offers:

- Solution
- Data
- Storage
- Compute

When placing orders on Super Protocol, you can use existing offers or upload your solution and data instead. Moreover, it is possible to register a provider and monetize your solutions and datasets by offering them to others.

Note that Super Protocol users do not buy offers, only rent them for a limited period. TEE ensures that the content of offers remains confidential.

Learn more about [Offers](/fundamentals/offers).

## Slots

Slots are also known as requirements and configurations. Strictly speaking, slots are a subset of the offers. However, due to the complexity of the subject, they are explained in a separate section.

In short, the _requirements_ are the compute resources that solutions and data need to run (vCores, RAM, Disk, Bandwidth, Traffic, External Port). The _configurations_ are the compute resources that run them. It is a very flexible system that can accommodate any usage scenario for the offer providers and the customers.

Learn more about [slots](/fundamentals/slots).

## Orders

An _order_ involves paying the providers in SPPI tokens for their products and services. The order manages the operational and financial settlements between the participants. Because Super Protocol is decentralized, the order system is P2P with no central authority. The centerpiece of an order is a confidential compute offer where solutions and data are executed inside a TEE.

Learn more about [Orders](/fundamentals/orders).

## Tunnels

The _tunnel protocol_ allows web services to run inside a TEE. The purpose of tunnels is load balancing, scalability, and protection from DDOS attacks. Tunnels consist of servers and clients, where the server has an external public IP. Multiple servers and clients may support a single domain. Ideally, each tunnel is hosted by a different compute provider to ensure stability, fault tolerance, and decentralization.

Learn more about [Tunnels](/fundamentals/tunnels).