---
id: "ActiveOrdersList"
title: "ActiveOrdersList"
sidebar_label: "ActiveOrdersList"
sidebar_position: 0
---

## `ActiveOrdersList`
Contains logic controlling the list of active orders.


## Functions
### getListOfActiveOrdersSize
```solidity
  function getListOfActiveOrdersSize(
  ) public returns (uint256)
```
Returns size of active orders list.

### getListOfActiveOrdersRange
```solidity
  function getListOfActiveOrdersRange(
    uint256 begin,
    uint256 end
  ) public returns (uint256[])
```
Returns range of active orders.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`begin` | uint256 | The first element of range.
|`end` | uint256 | One past the final element in the range.
### onOrderActivated
```solidity
  function onOrderActivated(
    uint256 orderId
  ) public onlyApp 
```
Adds order to the list of active orders.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
### onOrderDeactivated
```solidity
  function onOrderDeactivated(
    uint256 orderId
  ) public onlyApp 
```
Removes order from the list of active orders.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order id.
