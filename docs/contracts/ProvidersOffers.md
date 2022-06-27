---
id: "ProvidersOffers"
title: "ProvidersOffers"
sidebar_label: "ProvidersOffers"
sidebar_position: 0
---

## `ProvidersOffers`
Contains logic controlling the list of provider offers.


## Functions
### isProviderHasEnabledOffers
```solidity
  function isProviderHasEnabledOffers(
    address providerAuth
  ) public returns (bool)
```
Returns whether provider has any of enabled offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### isProviderHasEnoughSecurityDeposit
```solidity
  function isProviderHasEnoughSecurityDeposit(
    address providerAuth
  ) public returns (bool)
```
Returns whether provider has enough security deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderOffersState
```solidity
  function getProviderOffersState(
    address providerAuth
  ) public returns (struct ProviderOffersState)
```
Returns number of enabled provider offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`offersState`| address | Number of enabled offers of provider.
### getProviderRequiredSecDepo
```solidity
  function getProviderRequiredSecDepo(
    address providerAuth,
    uint256 additional
  ) public returns (uint256)
```
Calculates required amount of tokens to secure all of provider offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
|`additional` | uint256 | Additional amount to add to the result value.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`requiredAmount`| address | Number of tokens required to secure all provider offers.
### getProviderRecentlyEnabledValueOffersCount
```solidity
  function getProviderRecentlyEnabledValueOffersCount(
    address providerAuth
  ) public returns (uint256)
```
Returns count of enabled value offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderRecentlyEnabledTeeOffersCount
```solidity
  function getProviderRecentlyEnabledTeeOffersCount(
    address providerAuth
  ) public returns (uint256)
```
Returns count of enabled tee offers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderValueOffers
```solidity
  function getProviderValueOffers(
    address providerAuth
  ) external returns (uint256[])
```
Returns list of value offers ids


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderTeeOffers
```solidity
  function getProviderTeeOffers(
    address providerAuth
  ) external returns (uint256[])
```
Returns list of tee offers ids


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### gcProviderOffers
```solidity
  function gcProviderOffers(
    address providerAuth
  ) public onlyApp 
```
Clears list of pending offers (can only be called from the application itself).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### addProviderOffer
```solidity
  function addProviderOffer(
    address providerAuth,
    uint256 offerId,
    enum OfferType offerType
  ) public onlyApp 
```
Adds provider offer to the offers index (can only be called from the application itself).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
|`offerId` | uint256 | Provider offer id.
|`offerType` | enum OfferType | Provider offer type.
### setProviderOfferState
```solidity
  function setProviderOfferState(
    address providerAuth,
    uint256 offerId,
    enum OfferType offerType,
    bool enabled,
    uint256 disabledAfter
  ) public onlyApp 
```
Enables/Disables providers offer by application.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
|`offerId` | uint256 | Provider offer id.
|`offerType` | enum OfferType | Provider offer type.
|`enabled` | bool | New state of offer.
|`disabledAfter` | uint256 | Number of seconds to delay disabling the offer.
