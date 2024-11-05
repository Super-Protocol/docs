---
id: "account"
title: "Account"
slug: "/account"
sidebar_position: 3
---

Super Protocol supports two types of account:

- **Web3 User**
- **Demo User**.

(image Enter Marketplace window)
<br/>
<br/>

Super Protocol does not have manual account registration. The system generates an account automatically when you log in for the first time.

## Web3 User

_Web3 User_ is the primary type of account on Super Protocol. It grants the full functionality of the AI Marketplace, including:

- Uploading files to the Super cloud or a personal Storj account
- Building and placing orders
- Registering providers and creating offers (not implemented yet).

To enter as a Web3 user, you need an ERC-20 wallet and the MetaMask browser extension set up to access the Polygon Amoy testnet. Read [How to Log In](/ai-marketplace/guides/guide-log-in#web3-user) as a Web3 user. ьььь

## Demo User

_Demo User_ account is suitable for a quick introduction to the system. Instead of MetaMask and an ERC-20 wallet, Demo access requires OAuth2 authentication and authorization by one of the following providers:

- Google
- Hugging Face
- GitHub
- Microsoft
- Facebook.

Every Demo user account receives a limited amount of TEE tokens they can spend to place orders. However, Demo mode imposes functionality limitations.

### Demo mode limitations

Compared to Web3 users, Demo users cannot:

- Upload files to their personal Storj accounts and can only use Super Protocol cloud as storage
- Replenish their token balance
- Register providers and create offers.

Future releases of the AI Marketplace will introduce additional functionality and, consequently, more limitations for Demo users.