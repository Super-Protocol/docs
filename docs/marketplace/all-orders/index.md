---
id: "all-orders"
title: "All Orders"
slug: "/all-orders"
sidebar_position: 6
---

This screens displays the full list of the orders you placed on Super Protocol.

<img src={require('../images/all-orders.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The table in the center of the screen provides essential information about your orders:

- **Created Date**: The date and time when the customer placed the order.
- **Modified Date**: The date and time of the latest change in the order status.
- **Order ID**: A unique order identification number. It is incremental and continuous for all orders and suborders on Super Protocol.
- **Status**: Current status of the order. Read about [statuses](/fundamentals/orders#order-status).
- **Cost to Date**: The total amount of SPPI tokens spent on the order so far.
- **Balance**: The remaining order balance. When it reaches zero, the order processing stops. To replenish the balance, open the **Order** screen and click the **Extend Lease** button.
- **Engine**: A solution that launches the model and provide a UI.
- **Model**: The main model used in the order.
- **Datasets**: The main dataset used in the order. Note that there may be several datasets in the order.

Clicking an order opens its [**Order**](/marketplace/all-orders/order) screen with detailed information.

The contents of all orders are encrypted and accessible only to the users who placed them. However, general information about orders is recorded on the blockchain and publicly visible due to the blockchain's transparent nature.