---
id: "checkout"
title: "Confirm Transactions"
slug: "/orders/order-builder/checkout"
sidebar_position: 1
---

This window provides information about the creation of transactions on the blockchain, which is the final step in placing an order.

(image: window)
<br/>
<br/>

Before your order can be processed, you must pay the initial order deposit. [**Order Builder**](/marketplace/orders/order-builder) shows this amount as **Pay Now** before the checkout.

The confirmation process depends on the account type:

- **Web3 users** must confirm the transactions in the MetaMask window. If it does not appear automatically, manually open the MetaMask browser extension, select the transaction in the **Activity** tab, and confirm it.
- **Demo users** do not need to confirm the transaction manually, as they pay using free TEE tokens they provided at account creation. The transaction is processed automatically.

The confirmation process also depends on the order type:

- **Deploy** orders require confirmation of two separate transactions. This type of order launches confidential tunnels to make the running model accessible from the internet. These tunnels are created automatically by a separate **Tunnels Launcher** order, which requires an additional payment. Learn more about [Tunnels](/fundamentals/tunnels).
- **Fine-tune** orders only require confirmation of a single transaction. This type of orders is not availible yet in the current version of the Marketplace.

Once the order is placed successfully, you will be redirected to its [**Order** screen](/marketplace/orders/order).

## Handling errors

If an error occurs during transaction confirmation, you will see the error message in this window and a notification in the bottom-right corner of the screen.

(image: errors)
<br/>
<br/>

To retry, click the **Try again** button. If the error persists, contact the Super Protocol team on [Discord](https://discord.gg/superprotocol) for assistance.