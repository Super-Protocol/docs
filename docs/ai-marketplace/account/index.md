---
id: "account"
title: "Account"
slug: "/account"
sidebar_position: 3
---

Super Protocol supports two login modes:

- **Web3 User**
- **Demo User**.

(image Enter Marketplace window)
<br/>

Super Protocol does not have manual account creation. Instead, an account is automatically generated when a user logs in for the first time.

## Web3 User

_Web3 User_ is the primary type of account on Super Protocol that grants the full functionality of the AI Marketplace, including:

- Uploading files to the Super cloud or a personal Storj account
- Building and placing orders
- Registering providers and creating offers.

To enter as a Web3 user, you need an ERC-20 wallet and the MetaMask browser extension set up to access the Polygon Amoy testnet. Read [How to Log In](/ai-marketplace/guides/guide-log-in#web3-user) as a Web3 user.

### Select a storage

Web3 users can choose a storage to upload files to in the [**Web3 Account**](/ai-marketplace/account/web3) window.

(images/ai-marketplace-13.png').default} width="400" height="auto" border="1"/>)
<br/>
<br/>

- _Super Protocol cloud_: Super Protocol's Storj account.
- _Your Storj account_: your personal Storj account.

Uploading to a personal Storj:

- Requires [creating and setting up](/ai-marketplace/guides/guide-upload) a Storj account
- Gives sole control over the uploaded content.

Uploading to the Super Protocol cloud:

- Does not require additional setup
- Requires paying test TEE tokens to keep the uploaded files available (not implemented yet in this version of the Marketplace)
- Uses Super Protocol's Storj account and thus relies on Super Protocol as the storage provider.

Both methods involve encryption of the uploaded files. No unauthorized parties, including the Super Protocol and Storj teams, can access the file contents, regardless of the method.

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

- Upload files to their personal Storj accounts and can only use Super Protocol as a storage provider
- Replenish their token balance
- Register providers and create offers.

Future releases of the AI Marketplace will introduce additional functionality and, consequently, more limitations for Demo users.