---
id: "Offers"
title: "Offers"
sidebar_label: "Offers"
sidebar_position: 0
---

## `Offers`
Contains logic that controls Super Protocol offers.


## Functions
### isOfferExists
```solidity
  function isOfferExists(
    uint256 offerId
  ) public returns (bool)
```
Returns whether the offer exists.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### isOfferEnabled
```solidity
  function isOfferEnabled(
    uint256 offerId
  ) public returns (bool)
```
Returns whether offer is enabled.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### isOfferCancelable
```solidity
  function isOfferCancelable(
    uint256 offerId
  ) public returns (bool)
```
Returns whether the orders created for the offer can be canceled by the consumer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### isOfferAllowedForConsumer
```solidity
  function isOfferAllowedForConsumer(
    uint256 offerId,
    address consumer
  ) public returns (bool)
```
Returns whether the consumer can create an order for the offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
|`consumer` | address | Consumer address.
### isOfferRestrictionsPermitOtherOffer
```solidity
  function isOfferRestrictionsPermitOtherOffer(
    uint256 offerId,
    uint256 otherOfferId
  ) public returns (bool)
```
Returns whether the constraints of the offer allow working with another offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
|`otherOfferId` | uint256 | Other offer id.
### isOfferRestrictedByOfferType
```solidity
  function isOfferRestrictedByOfferType(
    uint256 offerId,
    enum OfferType offerType
  ) public returns (bool)
```
Returns whether the offer restrictions contain restrictions for the specified offer type.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
|`offerType` | enum OfferType | Offer type.
### getOffersTotalCount
```solidity
  function getOffersTotalCount(
  ) public returns (uint256)
```
Returns the total number of offers in the Super Protocol.

### getOffersCountByType
```solidity
  function getOffersCountByType(
  ) public returns (uint256)
```
Returns the number of tee offers in the Super Protocol.

### getOfferType
```solidity
  function getOfferType(
    uint256 offerId
  ) public returns (enum OfferType)
```
Returns type of offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### getOfferGroup
```solidity
  function getOfferGroup(
    uint256 offerId
  ) public returns (enum OfferGroup)
```
Returns group of offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### getOfferOrigins
```solidity
  function getOfferOrigins(
    uint256 offerId
  ) public returns (struct Origins)
```
Returns timestamps for creating and updating offer information.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### getOfferProviderAuthority
```solidity
  function getOfferProviderAuthority(
    uint256 offerId
  ) public returns (address)
```
Returns offer provider authority.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### getOfferDisabledAfter
```solidity
  function getOfferDisabledAfter(
    uint256 offerId
  ) public returns (uint256)
```
Returns the timestamp when the offer will be disabled.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### getOfferHoldDeposit
```solidity
  function getOfferHoldDeposit(
    uint256 offerId
  ) public returns (uint256)
```
Returns the amount of tokens that will be locked when placing a new order for offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### getOfferClosingPrice
```solidity
  function getOfferClosingPrice(
    uint256 offerId,
    uint256 startDate,
    uint256 orderPrice
  ) external returns (uint256)
```
Returns the order final price.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
|`startDate` | uint256 | Order start time.
|`orderPrice` | uint256 | Estimated order price.
### getTeeOfferLastTlbAddedTime
```solidity
  function getTeeOfferLastTlbAddedTime(
    uint256 offerId
  ) public returns (uint256)
```
Returns time when last TLB was added.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | TEE offer id.
### getValueOffer
```solidity
  function getValueOffer(
    uint256 offerId
  ) public returns (struct ValueOfferData ret)
```
Returns information about value offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Value offer id.
### getTeeOffer
```solidity
  function getTeeOffer(
    uint256 offerId
  ) public returns (struct TeeOfferData ret)
```
Returns information about TEE offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | TEE offer id.
### setOfferName
```solidity
  function setOfferName(
    uint256 offerId,
    string name
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```
Sets a new name of offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
|`name` | string | New offer name.
### setOfferPublicKey
```solidity
  function setOfferPublicKey(
    uint256 offerId,
    string publicKey
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```
Sets a new public key of offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
|`publicKey` | string | New public key.
### setOfferDescription
```solidity
  function setOfferDescription(
    uint256 offerId,
    string description
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```
Sets a new description of offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
|`description` | string | New description.
### setTeeOfferTlb
```solidity
  function setTeeOfferTlb(
    uint256 offerId,
    string tlb
  ) external onlyProviderActionAccount(offerId) notBlocked(offerId) 
```
Sets a new loader block of TEE offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | TEE offer id.
|`tlb` | string | New TEE loader block.
### createValueOffer
```solidity
  function createValueOffer(
    address providerAuth,
    struct ValueOfferInfo info,
    bytes32 externalId
  ) public 
```
Creates a new value offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority.
|`info` | struct ValueOfferInfo | Information about the new offer.
|`externalId` | bytes32 | Reference value for binding to an generated event.
### createTeeOffer
```solidity
  function createTeeOffer(
    address providerAuth,
    struct TeeOfferInfo info,
    bytes32 externalId
  ) public 
```
Creates a new TEE offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority.
|`info` | struct TeeOfferInfo | Information about the new offer.
|`externalId` | bytes32 | Reference value for binding to an generated event.
### enableOffer
```solidity
  function enableOffer(
    uint256 offerId
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```
Enables an offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
### disableOffer
```solidity
  function disableOffer(
    uint256 offerId
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```
Disables an offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Offer id.
## Events
### OfferCreated
```solidity
  event OfferCreated(
    address creator,
    bytes32 externalId,
    uint256 offerId
  )
```
Emitted when a new value offer is created.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`creator`| address | Creator of the offer.
|`externalId`| bytes32 | Custom id provided by the creator of the offer.
|`offerId`| uint256 | New offer id.
### TeeOfferCreated
```solidity
  event TeeOfferCreated(
    address creator,
    bytes32 externalId,
    uint256 offerId
  )
```
Emitted when a new TEE offer is created.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`creator`| address | Creator of the offer.
|`externalId`| bytes32 | Custom id provided by the creator of the offer.
|`offerId`| uint256 | New offer id.
### OfferEnabled
```solidity
  event OfferEnabled(
    address providerAuth,
    uint256 offerId,
    enum OfferType offerType
  )
```
Emitted when the offer is enabled.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`providerAuth`| address | Provider authority.
|`offerId`| uint256 | Offer id.
|`offerType`| enum OfferType | Offer id.
### OfferDisabled
```solidity
  event OfferDisabled(
    address providerAuth,
    uint256 offerId,
    enum OfferType offerType
  )
```
Emitted when the offer is disabled.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`providerAuth`| address | Provider authority.
|`offerId`| uint256 | Offer id.
|`offerType`| enum OfferType | Offer id.
### TeeOfferViolationRateChanged
```solidity
  event TeeOfferViolationRateChanged(
    address providerAuth,
    uint256 offerId,
    uint256 violationRate
  )
```
Emitted when the violation rate of the offer is updated.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`providerAuth`| address | Provider authority.
|`offerId`| uint256 | Offer id.
|`violationRate`| uint256 | Updated violation rate value.
