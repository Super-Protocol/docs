---
id: "client-infrastructure"
title: "Client Infrastructure"
slug: "/client-infrastructure"
sidebar_label: "Client Infrastructure"
sidebar_position: 13
custom_edit_url: null
---
# Client Infrastructure
On the client side, there is a layered system with the following entities:

1. **User.** The customer or the owner of the service. For identification purposes, each user has an individual public and private key pair.

   The user also interacts with the Blockchain Solution to order payments and receive results. Both individuals and organizations can act as users.
2. **Client Applications.** Client Applications allow the user to send requests and receive responses, as well as provide additional integration with various systems. This entity also includes a wallet for managing blockchain tokens and coins.
3. **SDK layer for interaction with blockchain.** This layer includes various libraries for accessing the blockchain and using the Super Protocol smart contracts. All the necessary services and applications for deployment of the provider's solutions are also implemented at this layer.

In order to connect to the protocol, a client SDK has been developed**.** It contains GUI applications for order management in Super Protocol, as well as payment services, and modules for website integration.

Various testing and protocol emulation systems are available for providers in the public GitHub repository. In turn, as already mentioned,platforms and solutions for deployment and service delivery are available to providers with client SDK.

<p align="center">
  <img src={require('./images/client-infrastructure-01.png').default} />
</p>