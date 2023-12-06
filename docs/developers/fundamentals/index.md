---
id: "fundamentals"
title: "Fundamentals"
slug: "/fundamentals"
sidebar_position: 2
---

This section is about the most important concepts of Super Protocol.

## Marketplace

The Super Protocol Marketplace is a blockchain-based system of connecting the sellers and the buyers of digital products and services. It consists of *providers* of solutions, data, storage, and compute, as well as the *offers* that these providers have to, well, offer. Currently, providers and offers are limited to the Super team, but in the upcoming releases anyone will be able to register as a provider to create and monetize their offers using TEE tokens. Marketplace is accessible via CLI, but most conveniently via the [Marketplace GUI](/developers/marketplace) web app.

## Offers

Offers are the basic building blocks of the Marketplace. There are four types: solution, data, storage, and compute. You can deploy on Super Protocol using exclusively only offers, or you can use your own solutions and data, for example. Offers cannot be bought outright, only rented for a limited period of time. Contents of offers are confidential.

Learn more about the offers [here](/developers/fundamentals/offers).

## Slots

Also known as *Requirements* and *Configurations*. Strictly speaking, slots are a subset of the offers, but due to complexity of the subject they are expounded in a separate section.

In very simple terms, the *requirements* are the computing resources that solutions and data need to run (vCores, RAM, Disk, Bandwidth, Traffic, External Port) and *configurations* are the computing resources that will be running them. It is a very flexible system that can accommodate any usage scenario for the offer providers and the customers. 

Learn more about the slots [here](/developers/fundamentals/slots).

## Orders

An *order* involves paying the providers money (in TEE tokens) for their products and services. The order manages the operational and financial settlements between the participants. Because Super Protocol is decentralized, the order system is P2P with no central authority. The centerpiece of an order is a confidential compute offer where solutions and data are executed in the TEE (Trusted Execution Environment). 

Learn more about the orders [here](/developers/fundamentals/orders).


## Tunnels

The *tunnels* protocol allows the running of a web service inside a TEE. The purpose of tunnels is load balancing, scalability, and protection from DDOS attacks. Tunnels consist of servers and clients, where the server has an external public IP. There may be multiple servers and clients supporting a single domain, and preferably each tunnel is hosted by different CSPs to ensure stability, fault tolerance and decentralization.  

Learn more about the tunnels [here](/developers/fundamentals/tunnels).
