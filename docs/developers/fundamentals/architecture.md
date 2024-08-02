---
id: "architecture"
title: "Architecture Overview"
slug: "/fundamentals/architecture"
sidebar_position: 6
---

It is possible to present the Super Protocol architecture as three interacting layers:

- The **user layer** includes the user of the service, the Marketplace interface, and the client SDK—a set of tools to interact with the blockchain, use smart contracts, and manage providers and offers.
- The **blockchain layer** includes decentralized infrastructure and smart contracts that orchestrate the interaction between providers of services—AI developers, data owners, confidential computing providers—and their customers.
- The **compute layer** includes decentralized storage, confidential computing resources, and providers of services and data.

## User layer

This layer includes everything related to Super Protocol users and their interaction with the system:

- User: an individual or organization registered on Super Protocol. Any user can act as a provider or a customer. All registered users have a user ID and one or several ERC-20 wallets.
- Marketplace GUI/CLI: an interface that enables user interaction with the system. It is possible to access the Super Protocol Marketplace through a web-based [graphical interface] (GUI) or a command-line interface (CLI). CLI performs the same functions as the GUI and MetaMask combined. For simplicity, it is not shown on the diagram. 
- MetaMask: a software cryptocurrency wallet (not shown on the diagram). The MetaMask browser extension is necessary to log in to the Super Protocol Marketplace, pay for orders, and receive fees. Read the [First Steps](/developers/marketplace/first-steps/) to set up MetaMask.
- Client SDK: a set of various libraries and tools to access the blockchain and interact with smart contracts, including order management, offer deployment, payment processing, etc.


The user layer provides a set of instruments that enable user interaction with the system:

- Place and manage [orders](/developers/fundamentals/orders)
- Get order results
- Pay and receive payments for services
- Register and manage providers
- Prepare, create, and manage [offers](/developers/fundamentals/offers)
- Upload and download data
- Generate signing keys.

## Blockchain layer

Blockchain provides an immutable, transparent, and decentralized environment for smart contracts to enable the interaction between users: AI developers, data owners, confidential computing resource providers, and customers. Currently, the blockchain layer utilizes the Polygon Amoy testnet. This ERC-20 blockchain is fundamental for Super Protocol as a decentralized Web3 cloud.

Blockchain stores information on

- Registered providers
- Available offers, [requirements](/developers/fundamentals/slots), and configuration
- Created orders
- Completed transactions
- Restrictions.

Smart contracts located at this level perform the following functions:

- Manage content
- Control data transfer
- Enable provider registration and offer creation
- Handle order payments
- Distribute rewards
- Process requests.

## Compute layer

This off-chain layer contains everything related to actual computations. The main components are

- [Compute provider](/developers/fundamentals/offers#compute) rents out a physical [Trusted Execution Environment](/developers/fundamentals#trusted-execution-environment) machine that performs computations.
- [Data provider](/developers/fundamentals/offers#solution-and-data) rents out AI models, datasets, frameworks, libraries, AI interfaces, applications, scripts, or other solutions and data.
- [Decentralized storage](/developers/fundamentals/offers#storage) is a storage network such as Storj that keeps order results and data for computations.

### Order execution

Only machines with Trusted Execution Environment support can provide computations in Super Protocol. When a customer places an order, smart contracts automatically select one or several machines that meet the order requirements.

_Execution controller_ and _trusted loader_ are special software mechanisms that enable running applications inside a Trusted Execution Environment.

When the machine receives an order compute request, the execution controller:

1. Verifies the order
2. Downloads encrypted order content—workload
3. Starts the trusted loader
4. Sends the workload to the trusted loader.

The trusted loader:

5. Decrypts the workload
6. Executes the workload
7. Encrypts the order result when it is ready.

After that, the execution controller stores the encrypted result in decentralized storage where it is available for the customer to download. Besides, it is possible to launch a [confidential tunnel](/developers/fundamentals/tunnels) to provide access to the running order from the internet.