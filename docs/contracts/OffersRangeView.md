---
id: "OffersRangeView"
title: "OffersRangeView"
sidebar_label: "OffersRangeView"
sidebar_position: 0
---

## `OffersRangeView`
Contains range functions to retrieve Super Protocol offers.


## Functions
### getTeeOffersRange
```solidity
  function getTeeOffersRange(
    uint256 begin,
    uint256 end
  ) public returns (struct TeeOfferData[])
```
Returns range of value offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`begin` | uint256 | The first element of range.
|`end` | uint256 | One past the final element in the range.
### getValueOffersRange
```solidity
  function getValueOffersRange(
    enum OfferType begin,
    uint256 end
  ) public returns (struct ValueOfferData[])
```
Returns range of value offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`begin` | enum OfferType | The first element of range.
|`end` | uint256 | One past the final element in the range.
