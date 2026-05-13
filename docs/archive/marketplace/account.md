---
id: "account"
title: "Enter Marketplace"
slug: "/marketplace/account"
sidebar_position: 3
---

Super Protocol supports two login methods:

- Web2 requires an account on one of the supported platforms:
    - Google
    - Hugging Face
    - GitHub
    - Microsoft
- Web3 requires a software wallet installed as a browser extension:
    - MetaMask
    - Trust Wallet

For instructions on how to set up software wallets and connect them to the Marketplace, read [How to Log In as a Web3 User](/archive/marketplace/guides/log-in).

<img src={require('./images/enter-marketplace.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

## Account window

This window shows your user account settings.

<img src={require('./images/web2-account.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

**User ID**: your unique user ID.

**Login**: the OAuth2 provider and your login email address.

The **Get SPPI** button allows you to get tokens necessary to place <a id="order"><span className="dashed-underline">orders</span></a>.

### Storage

You have two options of decentralized storage to upload files:

- **Super Protocol cloud**:
    - Recommended for most users.
    - Does not require additional setup.
    - Uses Super Protocol's Storj account and thus relies on Super Protocol as the storage provider.
- **Your Storj account**:
    - Intended for advanced users.
    - Requires creating and [setting up a Storj account](/archive/marketplace/guides/storage).
    - Gives sole control over the uploaded content and storage account.

Read [How to Set Up Storage](/archive/marketplace/guides/storage) for step-by-step instructions.