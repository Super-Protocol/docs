---
id: "chat-index"
title: "Super Chat"
slug: "/chat/"
---

# Super Chat

## Introduction

Welcome to the Super Chat, developed by the Super Protocol team. We had fun making it and we hope that you'll have fun using it.


This chat is:
* **A proof-of-concept app** to demonstrate that a complex web app can be decentralized, confidential, and be accessible securely from any browser.
* **A barebone product**. We tried to make it user-friendly, but currently its features are pretty basic. We might add more bells and whistles later on.
* **Confidential**. This is the first chat app ever to use confidential computing - meaning that it's secured by a special kind of CPU. This technology makes it very different from classic peer-to-peer chats and opens up many possibilities.
* **Testnet Phase 3** release. Which means that the domains generated are temporary and will expire in 72 hours. But you can always make new ones.


## Guide

### How to access Super Chat?
Super Chat is a solution offer that you can deploy in the Super Protocol confidential Web3 cloud. But we don’t provide official instances and domains of this chat for public access. This is a do-it-yourself kind of service.

There are two ways of gaining access:

1. **Deploy your own**. Testers can easily deploy their own instances of the chat app using the Marketplace UI or CLI. Follow [this guide](/testnet/marketplace). You need to be approved for Testnet 3 - apply [here](/testnet/) if you don't have your access token. 
2. **Join a friend**. Find someone from Testnet 3 who has already deployed their chat instances. Our [Discord](https://discord.com/invite/superprotocol) server could be a good place to start looking.

:::note What are instances and domains?

An instance is a machine running a copy of the app. Because Super Protocol is decentralized, you'd host the same app on multiple machines (client tunnels). But from the end user perspective, your entry point would be a randomly generated domain name such as https://duck-tish-bek.superprotocol.io. 

:::

### How to join a chat room?
Once you have access to a chat domain, it gets much easier. All you need now is a friend who provides you with the Password to Join to their chat room.

Each chat room has a unique Password to Join and it looks something like this: 

> 5a39348412809d9051288746414c3379b66a46b73f85e8c2f37f4c67b1d89f8a

Press `Join Chat Room` button, enter your desired user name (15 symbols maximum) and your Password to Join.

Remember that you can only be in one chat room at a time. After you have joined one room, the button changes to `Return to Chat`, meaning that you don't need to re-enter your credentials every time. To join another chat room you need to leave your current one. Press `Leave Room` button while in chat room. 

### How to create a chat room?

It's very easy. Press the `Create Chat Room` button and enter your desired user name and desired chat room name. 

Two important considerations to keep in mind:
1. **Save your Chat URL and Password to Join**. Give them to those you want to invite into your chat room. Remember that Super Chat doesn't authenticate - users can choose any nickname. And those with the password will have access to the entire history of room's conversations.
2. **Save your Passphrase to Delete** and **don't** give it to anyone. Any user with the passphrase will be able to delete your chat room. There is no recovery.

Passphrase to Delete looks something like this:
> crash gloom bundle agree twelve ramp burden verify apology wrist defy use bulb position client eight exhibit above enrich castle foster lesson ecology skull

## How is it secure?

Just the highlights:

* The chat app runs inside the Trusted Execution Environment. Data-in-use is protected from all unauthorized third parties by the hardware ([Intel SGX processor](https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html)) of the host machines;
* End-to-end TLS encryption (from browser to browser, without decryption at the server);
* SSL certificates are generated inside the TEE (Trusted Execution Environment), verifying that TEE and excluding the possibility of man-in-the-middle attack. 
* [Intel SGX attestation](https://www.intel.com/content/www/us/en/developer/articles/technical/quote-verification-attestation-with-intel-sgx-dcap.html) allows a remote party to verify that intended software is running inside the TEE as well as providing a quote to prove the identity of the TEE. 
* The chat app encrypts the messages as well as their metadata before backing them up to a decentralized database. This happens every 1 second;
* The tunneling network protocol hides the encrypted inbound traffic from the host owner;
* The developer (Super Protocol team) doesn't have access to your conversations; 
* This chat app is open-source. We will release it soon after launch, as well as a tool to verify that this specific code is being executed inside the TEE.

## How is it different?

How is the Super Chat different from many other chats and messengers? 

* **Decentralized**. Encrypted chat conversations are syncronized and replicated to a decentralized database (StorJ). 
* **Confidential**. Confidential computing allows for additional possibilities of securely working with data-in-use. Data may be decrypted inside the TEE, executed, and then re-encrypted, thus resolving the classic problem of data vulnerability during execution.
* **Tunnels**. The tunnelling network protocol ensures the proper scaling and balancing of loads as well as preventing malicious parties from having direct access to the app itself. For testnet purposes all tunnel orders use proportion 2x2: two tunnel servers and two tunnel clients.


## Support

If something doesn't work or look the way it should - we want to know about it! Please contact us through any of the social networks: [Discord](https://discord.com/invite/superprotocol), [Twitter](https://twitter.com/super__protocol) or [Telegram](https://t.me/superprotocol). 
