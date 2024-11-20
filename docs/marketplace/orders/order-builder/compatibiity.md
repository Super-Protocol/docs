---
id: "compatibility"
title: "Compatibility Issues"
slug: "/orders/order-builder/compatibility"
sidebar_position: 2
---

This window informs you about issues with your order. You must fix them before you will be able to check out.

## Not compatible with the model

This message appears when a selected dataset does not belong to the model's category. An example of such a message:

(image: 2nd tile)
<br/>
<br/>

Note that the name of the model and the list of conflicting datasets may be different in your case.

To fix this issue, change the conflicting datasets.

## Not compatible with the engine

This message appears when the selected model or dataset belongs to a category that the engine does not support. An example of such a message:

(image: 1st tile)
<br/>
<br/>

Note that the name of the engine and the list of conflicting models and datasets may be different in your case.

To fix this issue, select another engine that will be compatible with the selected model and datasets.

## Compute configuration is not sufficient

This message appears when the selected compute configuration does not meet the combined requirements of the models, datasets, and engine added to the order.

(image: 3rd tile)
<br/>
<br/>

To fix this issue, change the order components or select a more capable compute configuration. Also, ensure your order fits into the total maximum compute configuration allowed for the testnet. Refer to the [Testnet Limitations](/marketplace/limitations).

## Incorrect lease time

This message appears when the lease time you specified lies outside of the limits set by selected order components. An example of such a message:

(image: 4th tile)
<br/>
<br/>

Note that the list of conflicting order components may be different in your case.

To fix this issue, adjust the lease time to ensure it lies within the set limits. Refer to the [Testnet Limitations](/marketplace/limitations).