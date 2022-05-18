---
id: "Staking"
title: "Staking"
sidebar_label: "Staking"
sidebar_position: 0
---

## `Staking`



## Functions
### getStakeInfo
```solidity
  function getStakeInfo(
  ) public returns (struct StakeInfo ret)
```


### getLockedTokensInfo
```solidity
  function getLockedTokensInfo(
  ) external returns (struct LockedTokens ret)
```


### stake
```solidity
  function stake(
  ) public 
```


### stakeFor
```solidity
  function stakeFor(
  ) public 
```


### unstake
```solidity
  function unstake(
  ) public 
```


### lockTokens
```solidity
  function lockTokens(
  ) public onlyApp 
```


### unlockTokens
```solidity
  function unlockTokens(
  ) public onlyApp 
```


### confiscateTokensFrom
```solidity
  function confiscateTokensFrom(
  ) public onlyApp 
```


## Events
### TokensStaked
```solidity
  event TokensStaked(
  )
```



### TokensUnstaked
```solidity
  event TokensUnstaked(
  )
```



### TokensLocked
```solidity
  event TokensLocked(
  )
```



### TokensUnlocked
```solidity
  event TokensUnlocked(
  )
```



