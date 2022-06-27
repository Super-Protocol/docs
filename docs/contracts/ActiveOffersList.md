---
id: "ActiveOffersList"
title: "ActiveOffersList"
sidebar_label: "ActiveOffersList"
sidebar_position: 0
---

## `ActiveOffersList`
Contains logic controlling the list of active offers list.


## Functions
### getListOfActiveOffersSize
```solidity
  function getListOfActiveOffersSize(
  ) public returns (uint256)
```
Returns size of active offers list.

### getListOfActiveOffersRange
```solidity
  function getListOfActiveOffersRange(
    uint256 begin,
    uint256 end
  ) public returns (uint256[])
```
Returns range of active offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`begin` | uint256 | The first element of range.
|`end` | uint256 | One past the final element in the range.
### getActiveOffersEventsQueueLength
```solidity
  function getActiveOffersEventsQueueLength(
  ) public returns (uint256)
```
Returns the length of the 'disable-offer' event queue.

### getActiveOffersCurrentEventIndex
```solidity
  function getActiveOffersCurrentEventIndex(
  ) public returns (uint256)
```
Returns index of the current item in event queue.

### isListOfActiveOffersNeedToBeUpdated
```solidity
  function isListOfActiveOffersNeedToBeUpdated(
  ) public returns (bool)
```
Returns whether the list of active offers need to be updated.

### updateListOfActiveOffers
```solidity
  function updateListOfActiveOffers(
    uint256 maxProcessedEvents
  ) public 
```
Removes disabled offers from the list of active offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`maxProcessedEvents` | uint256 | Limit of items to process.
### onOfferEnabled
```solidity
  function onOfferEnabled(
    uint256 offerId
  ) public onlyApp 
```
Adds enabled offer to the list of active offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### onOfferDisableRequest
```solidity
  function onOfferDisableRequest(
    uint256 offerId,
    uint256 disabledAfter
  ) public onlyApp 
```
Adds disabled offer to the 'disabled-offer' event queue.

We need to be sure that the event queue is sorted. So, we make sure that this condition is met.
#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
|`disabledAfter` | uint256 | Timestamp when the offer will be disabled.

