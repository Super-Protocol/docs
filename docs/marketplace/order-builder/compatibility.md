---
id: "compatibility"
title: "Compatibility Issues"
slug: "/order-builder/compatibility"
sidebar_position: 1
---

This window informs you about issues with your <a id="order"><span className="dashed-underline">order</span></a>. You must fix them before you will be able to check out.

## Not compatible with the model

This message appears when the selected model and a dataset do not belong to the same category. An example of such a message:

<img src={require('../images/compatibility-issues-2.png').default} width="auto" height="auto" border="1"/>
<br/>

## Not compatible with the engine

This message appears when the selected <a id="engine"><span className="dashed-underline">engine</span></a> does not support the model or dataset. An example of such a message:

<img src={require('../images/compatibility-issues-1.png').default} width="auto" height="auto" border="1"/>
<br/>

## Compute configuration is not sufficient

This message appears when the selected <a id="configuration"><span className="dashed-underline">compute configuration</span></a> does not meet the combined <a id="requirements"><span className="dashed-underline">requirements</span></a> of the models, datasets, and engine added to the order.

<img src={require('../images/compatibility-issues-3.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Ensure your order fits into the total maximum compute configuration allowed for the testnet. Check the [Testnet Limitations](/marketplace/limitations).

## Incorrect lease time

This message appears if the lease time entered before checkout is either too short or too long. An example of such a message:

<img src={require('../images/compatibility-issues-4.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Providers can define minimum and maximum lease time limits for their <a id="offer"><span className="dashed-underline">offers</span></a>. To check these limits, go to the [**Pricing** tab](/marketplace/models/offer#pricing-tab) in the **Offer** window. If the order lease time is outside these limits, the order cannot proceed.

For example, you add offers with the following lease time limitations:

- The model's minimum lease time is 3 hours, and the maximum lease time is not limited.
- The engine does not have restrictions on the lease time.
- The computing device's minimum lease time is 2 hours, and the maximum is 4 hours.

In this example, your lease time must be between 3 and 4 hours.