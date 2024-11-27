---
id: "checkout"
title: "Confirm Transactions"
slug: "/orders/order-builder/checkout"
sidebar_position: 1
---

This window informs you about the creation of transactions on the blockchain, which is the final step in placing an order.

<img src={require('../../images/confirm-transactions.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Before your order can be processed, you must pay the initial order deposit. [**Order Builder**](/marketplace/orders/order-builder) shows this amount as **Pay Now** before the checkout.

The confirmation process depends on the account type:

- **Web3 users** must confirm transactions in MetaMask. If the MetaMask browser extension do not open automatically, open it manually, select the transaction in the **Activity** tab, and confirm it.
- **Demo users** do not need to confirm transactions, as they do not pay using decentralized wallets. Instead, payment relies on Super Protocol. The transactions are processed automatically.

Besides the account type, the confirmation process also depends on the order type:

- **Deploy** orders require confirmation of two separate transactions. This type of order launches confidential tunnels to make the running model accessible from the internet. These tunnels are created automatically by a separate **Tunnels Launcher** order, which requires an additional payment. Learn more about [Tunnels](/fundamentals/tunnels).
- **Fine-tune** orders only require confirmation of a single transaction. This type of orders is not availible yet in the current version of the Marketplace.

Once the order is placed successfully, you will be redirected to its [**Order** screen](/marketplace/orders/order).

## Handling errors

If an error occurs during transaction confirmation, you will see the error message in this window and a notification in the bottom-right corner of the screen.

<img src={require('../../images/confirm-transactions-error.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To retry, click the **Try again** button. If the error persists, contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) or via the [contact form](https://superprotocol.zendesk.com/hc/en-us/requests/new) for assistance.