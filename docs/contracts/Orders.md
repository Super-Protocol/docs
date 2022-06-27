---
id: "Orders"
title: "Orders"
sidebar_label: "Orders"
sidebar_position: 0
---

## `Orders`
Contains logic that controls Super Protocol orders.


## Functions
### isOrderValid
```solidity
  function isOrderValid(
    uint256 orderId
  ) public returns (bool)
```
Returns whether order exists.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### isOrderStarted
```solidity
  function isOrderStarted(
    uint256 orderId
  ) public returns (bool)
```
Returns whether order is started.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### isOrderCompleted
```solidity
  function isOrderCompleted(
    uint256 orderId
  ) public returns (bool)
```
Returns whether order is completed.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getOrdersCount
```solidity
  function getOrdersCount(
  ) public returns (uint256)
```
Returns number of orders.

### getOrderHoldDeposit
```solidity
  function getOrderHoldDeposit(
    uint256 orderId
  ) external returns (uint256)
```
Returns order hold deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getOrderPrice
```solidity
  function getOrderPrice(
    uint256 orderId
  ) external returns (uint256)
```
Returns order price.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getOrderOrigins
```solidity
  function getOrderOrigins(
    uint256 orderId
  ) public returns (struct Origins)
```
Returns timestamps of creating and updating order information.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getOrderProfitWithdrawn
```solidity
  function getOrderProfitWithdrawn(
    uint256 orderId
  ) external returns (bool)
```
Returns whether order profit is locked in favor of provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getOrderChangeWithdrawn
```solidity
  function getOrderChangeWithdrawn(
    uint256 orderId
  ) external returns (bool)
```
Returns whether remaining of order deposit is transfered to the consumer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getOrderParentOrder
```solidity
  function getOrderParentOrder(
    uint256 orderId
  ) public returns (uint256)
```
Returns an order parent order id.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getOrder
```solidity
  function getOrder(
    uint256 orderId
  ) public returns (address, struct OrderInfo, struct OrderResult)
```
Returns order information.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getOrderSubOrders
```solidity
  function getOrderSubOrders(
    uint256 orderId
  ) public returns (uint256[])
```
Returns a list of suborders ids for given order.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getAwaitingPayment
```solidity
  function getAwaitingPayment(
    uint256 orderId
  ) public returns (bool)
```
Returns true if the order has not been paid.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### getDepositSpent
```solidity
  function getDepositSpent(
    uint256 orderId
  ) public returns (uint256)
```
Returns the number of tokens spent by the provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### setAwaitingPayment
```solidity
  function setAwaitingPayment(
    uint256 orderId,
    bool value
  ) public onlyProviderActionAccount(orderId) 
```
Sets a signaled state to the consumer that the order must be paid.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
|`value` | bool | New value.
### setDepositSpent
```solidity
  function setDepositSpent(
    uint256 orderId,
    uint256 value
  ) public onlyProviderActionAccount(orderId) 
```
Sets the actual number of tokens spent by the provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
|`value` | uint256 | New value.
### createOrder
```solidity
  function createOrder(
    struct OrderInfo info,
    uint256 holdDeposit,
    bool suspended,
    bytes32 externalId
  ) public 
```
Creates a new order.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`info` | struct OrderInfo | Order information.
|`holdDeposit` | uint256 | The number of tokens to be transferred as order security.
|`suspended` | bool | True, if order should be created in 'suspended' state.
|`externalId` | bytes32 | Custom id provided by the consumer.
### startOrder
```solidity
  function startOrder(
    uint256 orderId
  ) public onlyConsumer(orderId) 
```
Starts an order.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### completeOrder
```solidity
  function completeOrder(
    uint256 orderId,
    enum OrderStatus status,
    string encryptedResult
  ) public onlyProviderActionAccount(orderId) onlyValidOrder(orderId) 
```
Completes the order.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
|`status` | enum OrderStatus | Order final state.
|`encryptedResult` | string | Execution result of the order.
### updateOrderPrice
```solidity
  function updateOrderPrice(
    uint256 orderId,
    uint256 orderPrice
  ) external onlyProviderActionAccount(orderId) 
```
Updates the order price.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
|`orderPrice` | uint256 | New order price.
### processOrder
```solidity
  function processOrder(
    uint256 orderId
  ) external onlyProviderActionAccount(orderId) 
```
Sets the `processing` status of order.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### updateOrderResult
```solidity
  function updateOrderResult(
    uint256 orderId,
    string encryptedResult
  ) external onlyProviderActionAccount(orderId) 
```
Updates order execution result.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
|`encryptedResult` | string | New order execution result.
### cancelOrder
```solidity
  function cancelOrder(
    uint256 orderId
  ) public onlyConsumer(orderId) 
```
Cancels the order execution.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### createSubOrder
```solidity
  function createSubOrder(
    uint256 parentOrderId,
    struct OrderInfo suborderInfo,
    struct SubOrderParams params
  ) public 
```
Creates a new sub order.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`parentOrderId` | uint256 | Parent order id.
|`suborderInfo` | struct OrderInfo | New suborder information.
|`params` | struct SubOrderParams | ExternalId, deposit amount (holdSum) and `blockParentOrder` flag.
### refillOrder
```solidity
  function refillOrder(
    uint256 orderId,
    uint256 amount
  ) external onlyValidOrder(orderId) 
```
Increases secure deposit of order.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
|`amount` | uint256 | Number of tokens to transfer.
### withdrawChange
```solidity
  function withdrawChange(
    uint256 orderId
  ) external 
```
Transfers the remaining part of the deposit back to the consumer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### withdrawProfit
```solidity
  function withdrawProfit(
    uint256 orderId
  ) external 
```
Locks tokens from the order deposit in favor of the provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
## Events
### OrderCreated
```solidity
  event OrderCreated(
    address consumer,
    bytes32 externalId,
    uint256 offerId,
    uint256 orderId
  )
```
Emitted when a new order is created.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`consumer`| address | Creator of order.
|`externalId`| bytes32 | Custom id provided by the consumer.
|`offerId`| uint256 | Offer id.
|`orderId`| uint256 | New order id.
### OrderStatusUpdated
```solidity
  event OrderStatusUpdated(
    uint256 orderId,
    enum OrderStatus status
  )
```
Emitted when an order status is updated.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`orderId`| uint256 | New order id.
|`status`| enum OrderStatus | New order status.
### OrderPriceUpdated
```solidity
  event OrderPriceUpdated(
    uint256 orderId,
    uint256 price
  )
```
Emitted when an order price is updated.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`orderId`| uint256 | New order id.
|`price`| uint256 | New order price.
### SubOrderCreated
```solidity
  event SubOrderCreated(
    uint256 subOrderId,
    uint256 parentOrderId
  )
```
Emitted when a new sub order is created.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`subOrderId`| uint256 | New order id.
|`parentOrderId`| uint256 | Parent order id.
### OrderStarted
```solidity
  event OrderStarted(
    address consumer,
    uint256 orderId
  )
```
Emitted when execution of the order is started.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`consumer`| address | Order owner.
|`orderId`| uint256 | Order id.
### OrderDepositRefilled
```solidity
  event OrderDepositRefilled(
    address consumer,
    uint256 orderId,
    uint256 amount
  )
```
Emitted when order deposit is increased.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`consumer`| address | Order owner.
|`orderId`| uint256 | Order id.
|`amount`| uint256 | The amount of deposit increase.
### OrderChangedWithdrawn
```solidity
  event OrderChangedWithdrawn(
    address consumer,
    uint256 orderId,
    uint256 change
  )
```
Emitted when remaining part of order deposit is transfered to the consumer.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`consumer`| address | Order owner.
|`orderId`| uint256 | Order id.
|`change`| uint256 | The amount of remaining deposit.
### OrderProfitWithdrawn
```solidity
  event OrderProfitWithdrawn(
    address tokenReceiver,
    uint256 orderId,
    uint256 profit
  )
```
Emitted when the profit from the order is locked in favor of the provider.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`tokenReceiver`| address | Provider token receiver account.
|`orderId`| uint256 | Order id.
|`profit`| uint256 | The amount of locked tokens.
### OrderAwaitingPaymentChanged
```solidity
  event OrderAwaitingPaymentChanged(
    address consumer,
    uint256 orderId,
    bool value
  )
```
Emitted when the provider signals that an additional payment is required for the order.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`consumer`| address | Order owner.
|`orderId`| uint256 | Order id.
|`value`| bool | Current 'awaiting payment' flag value.
### OrderEncryptedResultUpdated
```solidity
  event OrderEncryptedResultUpdated(
    address consumer,
    uint256 orderId,
    string encryptedResult
  )
```
Emitted when order result is updated.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`consumer`| address | Order owner.
|`orderId`| uint256 | Order id.
|`encryptedResult`| string | New order result.
### OrderDepositSpentChanged
```solidity
  event OrderDepositSpentChanged(
    address consumer,
    uint256 orderId,
    uint256 value
  )
```
Emitted when provider updates the actual amount of the deposit spent.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`consumer`| address | Order owner.
|`orderId`| uint256 | Order id.
|`value`| uint256 | New 'deposit spent' value.
