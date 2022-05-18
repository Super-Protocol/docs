---
id: "Marks"
title: "Marks"
sidebar_label: "Marks"
sidebar_position: 0
---

## `Marks`
Contains functions for setting and retrieving marks. Mark can be either positive or negative


## Functions
### getProviderMarks
```solidity
  function getProviderMarks(
    address provider
  ) external returns (struct ProviderMarksCount)
```
Returns total amounts of provider's positive and negative marks


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`provider` | address | Provider's account
### getOrderMark
```solidity
  function getOrderMark(
    uint256 orderId
  ) external returns (enum Mark)
```
Returns a mark for the specific order


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | Order ID
### setOrderMark
```solidity
  function setOrderMark(
    uint256 orderId,
    enum Mark mark
  ) external 
```
Sets a positive or negative mark by client for completed order


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`orderId` | uint256 | ID of an order in status Done
|`mark` | enum Mark | Should be positive or negative
