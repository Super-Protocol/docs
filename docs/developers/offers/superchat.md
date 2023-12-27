---
id: "chat-index"
title: "Super Chat Guide"
slug: "/offers/superchat/"
sidebar_position: 7
---

# Super Chat

## Introduction

Welcome to the Super Chat, developed by the Super Protocol, the confidential cloud and marketplace for Web3. We had fun making it and we hope that you'll have fun using it!

This chat is a technological demo app initially developed for Testnet 3 with a goal of demonstrating that a complex web app can be decentralized, confidential and accessible securely from any browser. 

<img src={require('./../images/offers_superchat_1.png').default} width="auto" height="auto"/>

## Access Super Chat

### Use our deployment

Generally we expect that our test users deploy their own Super Chat. But if you just want to see what it looks like, you can use our permanently running domain for illustration purposes: [https://vota-eli-gals.superprotocol.io](https://vota-eli-gals.superprotocol.io/).

This domain is running on the following [tunnels](/developers/fundamentals/tunnels) orders:

Tunnel server order: [8310](https://marketplace.superprotocol.com/order/8310) <br/>
Tunnel server order: [8328](https://marketplace.superprotocol.com/order/8328) <br/>
Tunnel client order: [8313](https://marketplace.superprotocol.com/order/8313) <br/>
Tunnel client order: [8332](https://marketplace.superprotocol.com/order/8332) <br/>

You can check this domain's confidentiality [here](/developers/marketplace/confidentiality).

### Deploy your own Super Chat

Any Testnet 4 user can deploy their own Super Chat and share with friends. There are two ways to do that:

* For beginners: Deploy using Marketplace GUI. Follow [this guide](/developers/marketplace/walkthrough).
* For developers: Deploy by following the steps and examples in our CLI [deployment guides](/developers/deployment_guides/tunnels).

Be mindful that any Super Chat orders, just like any other orders, are subject to the [Testnet limitations](/testnet/limitations).

## Guide

### How to join a chat room?
Once you have access to a chat domain, it gets much easier. All you need now is a friend who provides you with the `Password to Join` to their chat room.

Each chat room has a unique Password to Join and it looks something like this: 

> 5a39348412809d9051288746414c3379b66a46b73f85e8c2f37f4c67b1d89f8a

Press the `Join Chat Room` button, enter your desired user name (15 symbols maximum) and your Password to Join.

Remember that you can only be in one chat room at a time. After you have joined one room, the button changes to `Return to Chat`, meaning that you don't need to re-enter your credentials every time. To join another chat room you need to leave your current one. Press the `Leave Room` button while in a chat room. This is especially important when using public computers!

### How to create a chat room?

It's very easy. Press the `Create Chat Room` button and enter your desired user name and desired chat room name. 

Two important considerations to keep in mind:
1. **Save your Chat URL and Password to Join**. Give them to those you want to invite into your chat room. Remember that Super Chat doesn't authenticate - users can choose any nickname. And those with the password will have access to the entire history of the room's conversations.
2. **Save your `Passphrase to Delete`** and **don't** give it to anyone. Any user with the passphrase will be able to delete your chat room. There is no recovery.

Passphrase to Delete looks something like this:
> crash gloom bundle agree twelve ramp burden verify apology wrist defy use bulb position client eight exhibit above enrich castle foster lesson ecology skull

## Keep in mind

* Chat has no authentication, people can use the same user names and this cannot be verified.
* If you open chat in different tabs in the same browser, then it will count you as one user. But if you open chat in another browser, it will be a new user.
* There is no chat administration, you cannot kick or ban users. As long as they have the password they'll be able to join.
* Chat domains at *.superprotocol.io have shared chat rooms because these domains are using Super Protocol DNS and storage account.
* Chats deployed at any other domain will probably have chat rooms unique to that domain because the orders will be using different storage accounts.  

## How is it secure?

Just the highlights:

* The chat app runs inside the Trusted Execution Environment, or TEE, where data in use is protected by the [Intel SGX processor](https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html).
* End-to-end message encryption (from browser to browser, without decryption at the server).
* [Intel SGX attestation](https://www.intel.com/content/www/us/en/developer/articles/technical/quote-verification-attestation-with-intel-sgx-dcap.html) mechanism allows SSL certificates to be generated inside the TEE, enabling a remote party to verify that intended software is running inside the TEE as well as providing a quote to prove the TEE identity (you can add `/quotes` to the chat domain URL to see the quote), thus excluding the possibility of a man-in-the-middle attack.
* Chat server encrypts chat metadata before synchronizing them in a decentralized database.
* The tunneling network protocol hides the encrypted inbound traffic from the host owner.
* The developer (Super Protocol team) doesn't have access to your conversations. 
* This chat app is open-source. You can find it at our [GitHub](https://github.com/Super-Protocol/solutions/tree/main/Tunnel%20Client/chat).

## How is it different?

* **Decentralized**. Encrypted chat conversations are synchronized and replicated to a distributed and decentralized database (Storj). The confidential compute machines themselves are sourced from different CSP's, excluding the possibility of a single point of failure.
* **Confidential**. Confidential computing allows for additional possibilities of securely working with data in use. Data may be decrypted inside the TEE, executed, and then re-encrypted, thus resolving the classic problem of data vulnerability during execution.
* **Tunnels**. The tunnelling network protocol ensures the proper scaling and balancing of loads as well as preventing malicious parties from having direct access to the app itself. For testnet purposes all tunnel orders use proportion 2x2: two tunnel servers and two tunnel clients.


## Support

If something doesn't work or look the way it should - we want to know about it! Please contact us through any of the social networks: [Discord](https://discord.com/invite/superprotocol), [Twitter](https://twitter.com/super__protocol) or [Telegram](https://t.me/superprotocol). 
