---
id: "deployment_guides"
title: "Deployment Guides"
slug: "/deployment_guides"
sidebar_position: 8
---

Described below are the top three technical use cases for Super Protocol.

## Confidential Tunnels

[Confidential tunnels](/developers/fundamentals/tunnels), as introduced by Super Protocol, are a combination of confidential computing and network tunneling, where both ends of the tunnels - tunnel server and tunnel client - are deployed inside a TEE and interlinked via secure authorization tokens. The TEE protects data-in-use and the content inside the tunnel client, while tunnel server protects from external attacks.

Any type of dynamic or static content may be deployed using tunnels in Super Protocol. Read [**this guide**](/developers/deployment_guides/tunnels) on how to deploy Node.js applications with tunnels, using examples such as Minecraft and Super Chat. 

## Off-Chain Computing

Off-chain computing - as in taking certain calculations off-chain and then recording the results back on-chain - is used in Super Protocol to execute sensitive data in real time inside the TEE, ensuring confidentiality and protection from unauthorized third parties. The problem with true off-chain computing in Web3 has always boiled down to the matter of where exactly will these calculations take place? If a Dapp uses a centralized cloud provider, then it's a compromise on decentralization. If it uses decentralized computing, then it's a compromise on security, because data-in-use is unprotected during execution and thus the owner of the host machine may potentially tamper with the data. 

Super Protocol solves this dilemma by combining decentralization with confidential computing, which protects the data-in-use even from the owner of the host (compute provider). Any types of applications may be run inside the TEE and integrated with any blockchain Web3 services.

As an illustration we have developed our own Oracle application to show how TEE may protect from possible vulnerabilities in the process of providing external information or real-world data to a smart contract. 

Read [**this guide**](/developers/deployment_guides/blockchain) to learn how to deploy a confidential oracle service on Super Protocol.

## Distributed Jobs

Jobs can encompass a wide variety of applications and services, but one of the most promising cases that we see is, of course, AI training and inference on sensitive and private data, computed inside the TEE.

While Super Protocol support for NVIDIA GPU confidential computing is in development, you can deploy less resource-intensive Python models. Read [**this guide**](/developers/deployment_guides/python) to learn how to deploy Python-based solutions on Super Protocol.
