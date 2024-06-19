---
id: "fundamentals"
title: "Fundamentals"
slug: "/fundamentals"
sidebar_position: 2
---

This section describes the most essential concepts of Super Protocol.

## Trusted execution environment

A trusted execution environment—or TEE for short—is a secure area in memory, CPU, and, in some cases, GPU. This area is protected from unauthorized access from the outside, so the data inside TEE cannot be read or edited without the authorized code.

This hardware-based data protection is an integral part of Super Protocol. It ensures confidentiality and protects both providers and customers. Customers' orders cannot be accessed even by the owners of the hardware that performs the computation. And no one can download, modify, or otherwise access the provider's offer content even if they use it in their orders.

## Marketplace

The Super Protocol Marketplace is a blockchain-based system that connects the sellers and the buyers of digital products and services. It consists of providers of solutions, data, storage, and compute resources, as well as the offers that these providers created. Currently, users who registered as providers can create solution and data offers, and only Super Protocol provides compute and storage resources. But in future releases, providers will receive this functionality as well.

Super Protocol Marketplace is accessible via [CLI](/developers/cli_guides) and, more conveniently, via the [web app GUI](/developers/marketplace).

## Providers

Starting with Phase 5, Super Protocol users can register as providers on Super Protocol. Providers can monetize their applications and datasets by offering them to other users. Since Super Protocol is still in the testnet stage, monetization is only possible with test tokens as a demonstration. In the future, with the updated Marketplace and the new possibilities it brings, there will be additional features and more convenient workflow for providers.

Provider registration and offer creation are available for anyone to try. However, this functionality is currently in testing mode and recommended for advanced users only. Refer to the [Providers and offers](/developers/cli_guides/providers_offers) guide to register a provider.

## Offers

Offers are the basic building blocks of the Marketplace. There are four types of offers: solution, data, storage, and compute. When placing orders on Super Protocol, you can use existing offers or upload your solution and data instead. Moreover, it is possible to register as a provider and monetize your solutions and datasets by offering them to others.

Note that Super Protocol users do not buy offers, only rent them for a limited period. A trusted execution environment ensures that the content of offers remains confidential.

Learn more about the offers [**here**](/developers/fundamentals/offers).

## Slots

Slots are also known as _requirements_ and _configurations_. Strictly speaking, slots are a subset of the offers. However, due to the complexity of the subject, they are explained in a separate section.

In short, the _requirements_ are the compute resources that solutions and data need to run (vCores, RAM, Disk, Bandwidth, Traffic, External Port). The _configurations_ are the compute resources that run them. It is a very flexible system that can accommodate any usage scenario for the offer providers and the customers.

Learn more about the slots [**here**](/developers/fundamentals/slots).

## Orders

An _order_ involves paying the providers in TEE tokens for their products and services. The order manages the operational and financial settlements between the participants. Because Super Protocol is decentralized, the order system is P2P with no central authority. The centerpiece of an order is a confidential compute offer where solutions and data are executed in the trusted execution environment.

Learn more about the orders [**here**](/developers/fundamentals/orders).

## Tunnels

The _tunnel protocol_ allows web services to run inside a TEE. The purpose of tunnels is load balancing, scalability, and protection from DDOS attacks. Tunnels consist of servers and clients, where the server has an external public IP. Multiple servers and clients may support a single domain. Ideally, each tunnel is hosted by a different compute provider to ensure stability, fault tolerance, and decentralization.

Learn more about the tunnels [**here**](/developers/fundamentals/tunnels).