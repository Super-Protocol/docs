---
id: "Providers"
title: "Providers"
sidebar_label: "Providers"
sidebar_position: 0
---

## `Providers`
Contains logic controlling the list of registered service providers.


## Functions
### isProviderRegistered
```solidity
  function isProviderRegistered(
    address providerAuth
  ) public returns (bool)
```
Returns whether given address is the address of registered provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProvidersCount
```solidity
  function getProvidersCount(
  ) public returns (uint256)
```
Returns number of registered providers.

### getProviderActionAccount
```solidity
  function getProviderActionAccount(
    address providerAuth
  ) public returns (address)
```
Returns action account of provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderTokenReceiver
```solidity
  function getProviderTokenReceiver(
    address providerAuth
  ) public returns (address)
```
Returns "token receiver" account of provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderInfo
```solidity
  function getProviderInfo(
    address providerAuth
  ) public returns (struct ProviderInfo)
```
Returns stored information of provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderOrigins
```solidity
  function getProviderOrigins(
    address providerAuth
  ) public returns (struct Origins)
```
Returns timestamps for creating and updating provider information.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderViolationRate
```solidity
  function getProviderViolationRate(
    address providerAuth
  ) public returns (uint256)
```
Returns violation rate of provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProviderSecurityDeposit
```solidity
  function getProviderSecurityDeposit(
    address providerAuth
  ) public returns (uint256)
```
Returns security deposit of provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
### getProvidersAuths
```solidity
  function getProvidersAuths(
  ) public returns (address[])
```
Returns list of registered providers.

### registerProvider
```solidity
  function registerProvider(
    struct ProviderInfo info
  ) public onlyNotRegistered 
```
Register new service provider in the system.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`info` | struct ProviderInfo | Information about new provider.
### modifyProvider
```solidity
  function modifyProvider(
    struct ProviderInfo info
  ) public onlyRegistered 
```
Updates the registered provider information.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`info` | struct ProviderInfo | New information about new provider.
### refillProviderSecurityDepo
```solidity
  function refillProviderSecurityDepo(
    uint256 amount
  ) public onlyRegistered 
```
Locks additional tokens from the provider's stake as offers security deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Number of tokens to lock.
### returnProviderSecurityDepo
```solidity
  function returnProviderSecurityDepo(
    uint256 amount
  ) public 
```
Unlocks tokens from the provider's security deposit and return them to it stake.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Number of tokens to unlock.
### incrProviderViolationRate
```solidity
  function incrProviderViolationRate(
    address providerAuth
  ) public onlyApp 
```
Increments violation rate of given provider.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`providerAuth` | address | Provider authority address.
## Events
### ProviderRegistered
```solidity
  event ProviderRegistered(
    address auth
  )
```
Emitted when a new provider is registred.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`auth`| address | Provider authority address.
### ProviderModified
```solidity
  event ProviderModified(
    address auth
  )
```
Emitted when a provider info is updated.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`auth`| address | Provider authority address.
### ProviderViolationRateIncremented
```solidity
  event ProviderViolationRateIncremented(
    address auth,
    uint256 newViolationRate
  )
```
Emitted when a provider violation rate is incremented.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`auth`| address | Provider authority address.
|`newViolationRate`| uint256 | New violation rate.
### ProviderSecurityDepoRefilled
```solidity
  event ProviderSecurityDepoRefilled(
    address auth,
    uint256 amount
  )
```
Emitted when a provider security depo is refilled.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`auth`| address | Provider authority address.
|`amount`| uint256 | Number of locked tokens.
### ProviderSecurityDepoUnlocked
```solidity
  event ProviderSecurityDepoUnlocked(
    address auth,
    uint256 amount
  )
```
Emitted when a provider security depo is unlocked.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`auth`| address | Provider authority address.
|`amount`| uint256 | Number of unlocked tokens.
### ProviderPenalty
```solidity
  event ProviderPenalty(
    address auth,
    uint256 charge
  )
```
Emitted when the provider was penalized.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`auth`| address | Provider authority address.
|`charge`| uint256 | Number of confiscated tokens.
