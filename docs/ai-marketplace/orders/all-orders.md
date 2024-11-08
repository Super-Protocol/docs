---
id: "all-orders"
title: "All Orders"
slug: "/orders/all-orders"
sidebar_position: 2
---

The **All Orders** screens displays the full list of your orders. 

Read [How to Place an Order](/ai-marketplace/guides/guide-place-order).

(image full screen, UI elements highlighted and numbered)
<br/>
<br/>

**[1] List of orders**...

- **Date Created** (hidden by default): the date and time when the customer placed the order.
- **Date Modified**: the date and time of the latest change in the order status.
- **Order ID**: a unique offer identification number. It is incremental and continuous for all orders and suborders on Super Protocol.
- **Offer**:
- **Status**: current status of the order. [Read more](/ai-marketplace/orders#order-status) about statuses.
- **Lease Remaining**: the remaining time until the order is completed and gets the Done status. It is calculated by dividing the remaining order balance by the total cost of all the offers priced per hour. For Deploy orders, it is the duration the model will operate. For storage suborders, it is the duration the order result will remain available.
- **Cost to Date**: the total amount of TEE tokens spent on the order so far.
- **Cost Per Hour** (hidden by default): the total cost of all the offers priced per hour. Every hour, the order balance decreases by this amount.
- **Balance**: the remaining order balance. When it reaches zero, the order gets the Done status. You can replenish the balance using the **Extend Lease** button.
- **Model**: 
- **Datasets** (hidden by default):

Clicking an order in the list [opens the **Order** screen](/ai-marketplace/orders/order) with detailed information.

**[2]** These drop-down menus allow you to sort the table contents and show and hide table columns.

**[3]** The **Extend Lease** button opens a pop-up window that allows you to add TEE tokens to the order balance. It is only available for orders with the Suspended, Blocked, New, or Processing statuses.

- For Deploy orders, replenishing the order balance increases the time the model will be running and available to users.
- For storage suborders, replenishing the order balance increases the time the order result will be available for download.

Note that anyone can replenish the balance, not just the customer who placed the order.