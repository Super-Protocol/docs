---
id: "all-orders"
title: "All Orders"
slug: "/orders/all-orders"
sidebar_position: 2
---

This screens displays the full list of the orders you placed on Super Protocol. Read [How to Place an Order](/marketplace/guides/place-order) for step-by-step instructions.

<img src={require('../images/all-orders.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The table in the center of the screen provides essential information about your orders:

- **Created Date** (hidden by default): the date and time when the customer placed the order.
- **Modified Date**: the date and time of the latest change in the order status.
- **Order ID**: a unique order identification number. It is incremental and continuous for all orders and suborders on Super Protocol.
- **Status**: current status of the order. Learn more about [statuses](/fundamentals/orders#order-status).
- **Cost to Date**: the total amount of TEE tokens spent on the order so far.
- **Balance**: the remaining order balance. When it reaches zero, the order gets the Done status. You can replenish the balance using the **Extend Lease** button.
- **Model**: the main model used in the order; only for Deploy and Fine-tune orders.
- **Datasets** (hidden by default): the main dataset used in the order.

Clicking an order opens its [**Order**](/marketplace/orders/order) screen with detailed information.

The contents of all orders are encrypted and accessible only to the users who placed them. However, general information about orders is recorded on the blockchain and publicly visible due to the blockchain's transparent nature.