---
id: "Orders"
title: "Orders"
sidebar_label: "Orders"
sidebar_position: 0
---

## `Orders`



## Functions
### isOrderValid
```solidity
  function isOrderValid(
  ) public returns (bool)
```


### isOrderStarted
```solidity
  function isOrderStarted(
  ) public returns (bool)
```


### isOrderCompleted
```solidity
  function isOrderCompleted(
  ) public returns (bool)
```


### getOrdersCount
```solidity
  function getOrdersCount(
  ) public returns (uint256)
```


### getOrderHoldDeposit
```solidity
  function getOrderHoldDeposit(
  ) external returns (uint256)
```


### getOrderPrice
```solidity
  function getOrderPrice(
  ) external returns (uint256)
```


### getOrderOrigins
```solidity
  function getOrderOrigins(
  ) public returns (struct Origins)
```


### getOrderProfitWithdrawn
```solidity
  function getOrderProfitWithdrawn(
  ) external returns (bool)
```


### getOrderChangeWithdrawn
```solidity
  function getOrderChangeWithdrawn(
  ) external returns (bool)
```


### getOrderParentOrder
```solidity
  function getOrderParentOrder(
  ) public returns (uint256)
```


### getOrder
```solidity
  function getOrder(
  ) public returns (address, struct OrderInfo, struct OrderResult)
```


### getOrderSubOrders
```solidity
  function getOrderSubOrders(
  ) public returns (uint256[])
```


### getAwaitingPayment
```solidity
  function getAwaitingPayment(
  ) public returns (bool)
```


### getDepositSpent
```solidity
  function getDepositSpent(
  ) public returns (uint256)
```


### setAwaitingPayment
```solidity
  function setAwaitingPayment(
  ) public onlyProviderActionAccount(orderId) 
```


### setDepositSpent
```solidity
  function setDepositSpent(
  ) public onlyProviderActionAccount(orderId) 
```


### createOrder
```solidity
  function createOrder(
  ) public 
```


### startOrder
```solidity
  function startOrder(
  ) public onlyConsumer(orderId) 
```


### completeOrder
```solidity
  function completeOrder(
  ) public onlyProviderActionAccount(orderId) 
```


### updateOrderPrice
```solidity
  function updateOrderPrice(
  ) external onlyProviderActionAccount(orderId) 
```


### processOrder
```solidity
  function processOrder(
  ) external onlyProviderActionAccount(orderId) 
```


### updateOrderResult
```solidity
  function updateOrderResult(
  ) external onlyProviderActionAccount(orderId) 
```


### cancelOrder
```solidity
  function cancelOrder(
  ) public onlyConsumer(orderId) 
```


### createSubOrder
```solidity
  function createSubOrder(
  ) public 
```


### refillOrder
```solidity
  function refillOrder(
  ) external 
```


### withdrawChange
```solidity
  function withdrawChange(
  ) external 
```


### withdrawProfit
```solidity
  function withdrawProfit(
  ) external 
```


## Events
### OrderCreated
```solidity
  event OrderCreated(
  )
```



### OrderStatusUpdated
```solidity
  event OrderStatusUpdated(
  )
```



### OrderPriceUpdated
```solidity
  event OrderPriceUpdated(
  )
```



### SubOrderCreated
```solidity
  event SubOrderCreated(
  )
```



### OrderStarted
```solidity
  event OrderStarted(
  )
```



### OrderDepositRefilled
```solidity
  event OrderDepositRefilled(
  )
```



### OrderChangedWithdrawn
```solidity
  event OrderChangedWithdrawn(
  )
```



### OrderProfitWithdrawn
```solidity
  event OrderProfitWithdrawn(
  )
```



### OrderAwaitingPaymentChanged
```solidity
  event OrderAwaitingPaymentChanged(
  )
```



### OrderEncryptedResultUpdated
```solidity
  event OrderEncryptedResultUpdated(
  )
```



### OrderDepositSpentChanged
```solidity
  event OrderDepositSpentChanged(
  )
```



