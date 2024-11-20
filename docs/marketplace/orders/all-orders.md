---
id: "all-orders"
title: "All Orders"
slug: "/orders/all-orders"
sidebar_position: 2
---

This screens displays the full list of the orders you placed on Super Protocol. Read [How to Place an Order](/marketplace/guides/place-order) for detailed instructions.

The table in the center of the screen provides essential information about your orders:

(image full screen)
<br/>
<br/>

- **Date Created** (hidden by default): the date and time when the customer placed the order.
- **Date Modified**: the date and time of the latest change in the order status.
- **Order ID**: a unique offer identification number. It is incremental and continuous for all orders and suborders on Super Protocol.
- **Offer**: _solution_.
- **Status**: current status of the order. Learn more about [statuses](/fundamentals/orders#order-status).
- **Lease Remaining**: the remaining time until the order is completed and gets the Done status. It is calculated by dividing the remaining order balance by the total cost of all the offers priced per hour. For Deploy orders, it is the duration the model will operate. For storage suborders, it is the duration the order result will remain available.
- **Cost to Date**: the total amount of TEE tokens spent on the order so far.
- **Cost Per Hour** (hidden by default): the total cost of all the offers priced per hour. Every hour, the order balance decreases by this amount.
- **Balance**: the remaining order balance. When it reaches zero, the order gets the Done status. You can replenish the balance using the **Extend Lease** button.
- **Model**: _model_.
- **Datasets** (hidden by default):

Clicking an order in the list opens its [**Order** screen](/marketplace/orders/order) with detailed information.

The drop-down menu and cogwheel button in the top-right corner allow you to sort the table contents and customize table columns:

(image)
<br/>
<br/>

The **Extend Lease** button allows you to add TEE tokens to the balance of orders with the Suspended, Blocked, New, or Processing statuses:

(image)
<br/>
<br/>