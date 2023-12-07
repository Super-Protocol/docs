---
id: "nodejs_blockchain"
title: "Node.js with Blockchain"
slug: "/deployment_guides/blockchain"
sidebar_position: 2
---


## Example

| **Guide**                                                                | **Description**                                                                            | 
|:-------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|
| [Confidential Oracles](/developers/deployment_guides/blockchain/oracles) | This is a detailed guide on how to deploy a confidential Oracle service in Super Protocol. | 


## Deploying a Blockchain Service

<img src={require('./../../images/guides_blockchain_1.png').default} width="auto" height="auto"/>

### Overview

Deploying solution to Super Protocol ensures confidential interaction between on-chain and off-chain components, as well as their integration with secure Web2 services. To do this it is necessary to launch a confidential service that will communicate with both the blockchain and Web2 services from inside a confidential environment (TEE).

The use of smart contracts in the on-chain part of this architecture allows to automate processes, ensure their reliability and security, and link the results of execution with on-chain processing.

Confidential and secure channels are designed for safe data exchange between the blockchain network and external applications. This is achieved by employing encryption protocols, such as HTTPS, to protect data during transmission and guard against man-in-the-middle attacks.
