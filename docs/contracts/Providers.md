---
id: "Providers"
title: "Providers"
sidebar_label: "Providers"
sidebar_position: 0
---

## `Providers`



## Functions
### isProviderRegistered
```solidity
  function isProviderRegistered(
  ) public returns (bool)
```


### getProvidersCount
```solidity
  function getProvidersCount(
  ) public returns (uint256)
```


### getProviderActionAccount
```solidity
  function getProviderActionAccount(
  ) public returns (address)
```


### getProviderTokenReceiver
```solidity
  function getProviderTokenReceiver(
  ) public returns (address)
```


### getProviderInfo
```solidity
  function getProviderInfo(
  ) public returns (struct ProviderInfo)
```


### getProviderOrigins
```solidity
  function getProviderOrigins(
  ) public returns (struct Origins)
```


### getProviderViolationRate
```solidity
  function getProviderViolationRate(
  ) public returns (uint256)
```


### getProviderSecurityDeposit
```solidity
  function getProviderSecurityDeposit(
  ) public returns (uint256)
```


### getProvidersAuths
```solidity
  function getProvidersAuths(
  ) public returns (address[])
```


### registerProvider
```solidity
  function registerProvider(
  ) public onlyNotRegistered 
```


### modifyProvider
```solidity
  function modifyProvider(
  ) public onlyRegistered 
```


### refillProviderSecurityDepo
```solidity
  function refillProviderSecurityDepo(
  ) public onlyRegistered 
```


### returnProviderSecurityDepo
```solidity
  function returnProviderSecurityDepo(
  ) public 
```


### incrProviderViolationRate
```solidity
  function incrProviderViolationRate(
  ) public onlyApp 
```


### chargePenalty
```solidity
  function chargePenalty(
  ) public onlyApp 
```


## Events
### ProviderRegistered
```solidity
  event ProviderRegistered(
  )
```



### ProviderModified
```solidity
  event ProviderModified(
  )
```



### ProviderViolationRateIncremented
```solidity
  event ProviderViolationRateIncremented(
  )
```



### ProviderSecurityDepoRefilled
```solidity
  event ProviderSecurityDepoRefilled(
  )
```



### ProviderSecurityDepoUnlocked
```solidity
  event ProviderSecurityDepoUnlocked(
  )
```



### ProviderPenalty
```solidity
  event ProviderPenalty(
  )
```



