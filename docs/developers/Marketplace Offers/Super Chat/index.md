---
id: "chat-index"
title: "Super Chat"
slug: "/chat/"
---

# Super Chat

## Introduction

Welcome to the Super Chat, developed by the Super Protocol, the confidential cloud and marketplace for Web3. We had fun making it and we hope that you'll have fun using it!

This chat is:
* **A technological demo app** to demonstrate that a complex web app can be decentralized, confidential and accessible securely from any browser. This app is running on multiple compute machines, inside confidential environments which are protected by the machines' special hardware.
* **A barebone product**. It's user-friendly, but the features are pretty basic. We might add more bells and whistles later on.
* **Confidential**. Not even the Super Protocol team has access to the user data in this chat.

## Guide

### How to access Super Chat?
Super Chat is a solution offer that you can deploy on Super Protocol. But since this chat is decentralized, we as Super Protocol do not provide an official single point of public access to it. Any Testnet 3 user can deploy their own Super Chat and share with friends.

There are two ways of gaining access:

1. **Deploy your own**. Testers can easily deploy Super Chat using the Marketplace UI or CLI. Follow [this guide](/developers/marketplace). You need to be approved for Testnet 3 - apply [here](/testnet/) if you don't have your access token. 
2. **Join a friend**. Find someone from Testnet 3 who has already deployed their Super Chat app. Once there, you can create your own chat room or join someone else's. Our [Discord](https://discord.com/invite/superprotocol) server could be a good place to start looking.

:::note What are instances and domains?

An instance is a machine running a copy of the app. Because Super Protocol is decentralized, you'd host the same app on multiple machines. But from the end user perspective, your entry point would be a randomly generated domain name such as https://duck-tish-bek.superprotocol.io 

:::

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

## Chat Limitations

* The generated Chat URL's are temporary and will expire in 72 hours. But you can always make new ones.
* Chats are saved to a decentralized database and will live on regardless of the domain or instances. 
* You can access any chat room from any domain.
* Beware: chat has no authentication, people can use the same user names and this cannot be verified.
* If you open chat in different tabs in the same browser, then it will count you as one user. But if you open chat in another browser, it will be a new user.
* There is no chat administration, you cannot kick or ban users. As long as they have the password they'll be able to join.


## How is it secure?

Just the highlights:

* The chat app runs inside the Trusted Execution Environment, or TEE, where data in use is protected by the [Intel SGX processor](https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html).
* End-to-end message encryption (from browser to browser, without decryption at the server).
* [Intel SGX attestation](https://www.intel.com/content/www/us/en/developer/articles/technical/quote-verification-attestation-with-intel-sgx-dcap.html) mechanism allows SSL certificates to be generated inside the TEE, enabling a remote party to verify that intended software is running inside the TEE as well as providing a quote to prove the TEE identity (you can add `/quotes` to the chat domain URL to see the quote), thus excluding the possibility of a man-in-the-middle attack.
* Chat server encrypts chat metadata before synchronizing them in a decentralized database.
* The tunneling network protocol hides the encrypted inbound traffic from the host owner.
* The developer (Super Protocol team) doesn't have access to your conversations. 
* This chat app is open-source. We will release it soon after launch, as well as a tool to verify that this specific code is being executed inside the TEE.

## How is it different?

* **Decentralized**. Encrypted chat conversations are synchronized and replicated to a distributed and decentralized database (Storj). The confidential compute machines themselves are sourced from different CSP's, excluding the possibility of a single point of failure.
* **Confidential**. Confidential computing allows for additional possibilities of securely working with data in use. Data may be decrypted inside the TEE, executed, and then re-encrypted, thus resolving the classic problem of data vulnerability during execution.
* **Tunnels**. The tunnelling network protocol ensures the proper scaling and balancing of loads as well as preventing malicious parties from having direct access to the app itself. For testnet purposes all tunnel orders use proportion 2x2: two tunnel servers and two tunnel clients.


## Support

If something doesn't work or look the way it should - we want to know about it! Please contact us through any of the social networks: [Discord](https://discord.com/invite/superprotocol), [Twitter](https://twitter.com/super__protocol) or [Telegram](https://t.me/superprotocol). 
