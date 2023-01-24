---
id: "web-ui-user-manual"
title: "User Manual"
slug: "/web-ui/user-manual/"
sidebar_label: "User Manual"
sidebar_position: 3
custom_edit_url: null
---

## Introduction

This guide is indented to familiarize new users with the Super Protocol Web UI and its basic functions.

## Getting access

When you open Web UI for the first time, you will be asked to provide an access token. Please use the access token that you received in the invitation letter.

<p align="center"><img src={require('./images/um-01.png').default}/></p>

## Connecting a wallet

At the moment Web UI supports only Metamask wallet. Please use [this guide](/testnet/web-ui/metamask) to configure it before you can connect it to Web UI.

To connect the wallet, click on the **Connect wallet** button in the top right corner. After that, select the account that was sent to you in the invitation letter.

<p align="center"><img src={require('./images/um-02.png').default}/></p>

If everything is done correctly, you will see your account number as well as your token balance.

<p align="center"><img src={require('./images/um-03.png').default}/></p>

If you see an error below, it means that you connected the wrong account.

<p align="center"><img src={require('./images/um-16.png').default}/></p>

In this case, open Metamask and disconnect your account. After that, click on the **Connect wallet** button in the UI again and select the account that was sent to you in the invitation letter.

<p align="center"><img src={require('./images/um-17.png').default}/></p>

## Getting tokens

There are two types of tokens that are used in Super Protocol:
1. MATIC token is used for gas fees as a native token of Matic Testnet Mumbai.
2. TEE token is used to pay for offers as a native token of Super Protocol.

To get token, use the corresponding links in the top menu. Please note that there is a limit to the maximum balance of each token in one account. If you reach this limit, you cannot to request additional tokens until your balance falls below the limit. There is also a restriction on subsequent requests. After you request tokens, please wait at least a few minutes before making new requests.

<p align="center"><img src={require('./images/um-04.png').default}/></p>

**Important!** Do not send tokens to other accounts. Violators will be banned from using Super Protocol testnet.

## Main page

### Providers

This tab shows data of all active providers registered on the protocol. Click on the link in the description to learn more about a particular provider.

<p align="center"><img src={require('./images/um-05.png').default}/></p>

### TEE Offers

This tab shows data of all active TEE offers. TEE offer is a node that provides computational resources on the protocol. You can see hardware specification in the description, how many orders currently in queue, and how many resources are in use.

<p align="center"><img src={require('./images/um-06.png').default}/></p>

### Offers

This tab shows data of all active offers other than TEE. There are 3 types of them:
- **Data**. A dataset that could be used with a particular solution on the protocol.
- **Solution**. A solution that is available on the protocol.
- **Storage**. A temporary storage that can be used to store order results and other data that may be created by the solution.

Click on the link in the description to learn more about a particular offer.

<p align="center"><img src={require('./images/um-07.png').default}/></p>

### Orders

This tab shows data of all orders that you created before. You can see which offers were used and the current status of the order. Click on the order ID to open [Order details](#order-details) page.

<p align="center"><img src={require('./images/um-08.png').default}/></p>

### Transactions

This tab shows recent transactions that you published on the blockchain while interacting with Super Protocol. Here are the links to corresponding entities in [polygonscan](https://mumbai.polygonscan.com/).

<p align="center"><img src={require('./images/um-09.png').default}/></p>

## Managing orders

### Creating an order

Click on the **New order** button.

<p align="center"><img src={require('./images/um-10.png').default}/></p>

Fill in all fields of the form:
- **Solution**. Select one of the solutions deployed on the protocol. To learn more about a particular solution click on the link in the description. A base image that is used by the solution will be added automatically and cannot be removed.
- **Data**. If you want to use one or several datasets available on the protocol, then fill in this field. If you want to use your own data, then leave it empty.
- **Storage**. Select storage offer that will be used to temporarily store calculation results.
- **TEE**. Select a node that will be performing the calculations. If several nodes are available, then select the one with the least number of active orders.
- **File**. Add a file with the data that you want to be processed. Note that the data format must match the requirements of the solution. Check the solution description if not sure.
- **Encryption passphrase**. This passphrase is used to encrypt order results. You will not be able to access the results if you lose it. You can either generate the passphrase or use your own.
- **Deposit, TEE**. A deposit in TEE tokens, which is used for payments. It is calculated automatically and can be increased. Note that only the necessary amount will be used, the rest you will be able to withdraw after the order is completed.

<p align="center"><img src={require('./images/um-11.png').default}/></p>

After filling the fields, click **Create** button. You will be prompted several times to sign transactions in Metamask wallet. Please sign every transaction and wait until the entire creation process is completed.

<p align="center"><img src={require('./images/um-12.png').default}/></p>

Once the order is created, you can track its progress on the **Order details**, which you can access at any time from the [Orders tab](#orders).

### Order details

On this page you can see all information about your order. The main order is always used for TEE computational resources, while sub-orders are used for solutions, data and storage.

As long as the order is active,you can perform two actions with it using the buttons in the top right corner:
- **Cancel order**. Cancel the order and all suborders that are cancellable. You will be able to return the unspent part of the deposit.
- **Replenish deposit**. Add additional tokens to the deposit.

<p align="center"><img src={require('./images/um-13.png').default}/></p>

When the order is complete, the available actions change to the following:
- **Withdraw deposit**. Return unspent deposit.
- **Get result**. Decrypt and download the order result. Note that the result is only stored for a limited time and becomes unavailable afterwards. Also, you need to provide the order passphrase to be able to decrypt it.

<p align="center"><img src={require('./images/um-14.png').default}/></p>