---
id: "Staking"
title: "Staking"
sidebar_label: "Staking"
sidebar_position: 0
---

## `Staking`
Contains logic for staking/unstaking and lock/unlock tokens.


## Functions
### getStakeInfo
```solidity
  function getStakeInfo(
    address stakeOwner
  ) public returns (struct StakeInfo ret)
```
Returns the total amount of tokens staked, including locked tokens, profit and last date of staking.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`stakeOwner` | address | Address of the staker.
### getLockedTokensInfo
```solidity
  function getLockedTokensInfo(
    enum Purpose executor,
    address stakeOwner
  ) public returns (struct LockedTokens ret)
```
Returns the total amount of tokens locked.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`executor` | enum Purpose | Purpose of the lock.
|`stakeOwner` | address | Address of the staker.
### stake
```solidity
  function stake(
    uint256 amount
  ) public 
```
Stakes tokens.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of tokens to stake.
### stakeFor
```solidity
  function stakeFor(
    address beneficiary,
    uint256 amount
  ) public 
```
Stakes tokens for another address than the sender.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`beneficiary` | address | Address of the token stake holder.
|`amount` | uint256 | Amount of tokens to stake.
### unstake
```solidity
  function unstake(
    uint256 amount
  ) public 
```
Unstakes tokens.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of tokens to unstake.
### lockTokens
```solidity
  function lockTokens(
    enum Purpose executor,
    address amount,
    uint256 secondsCount
  ) public onlyApp 
```
Lock tokens.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`executor` | enum Purpose | Purpose of the lock.
|`amount` | address | Amount of tokens to lock.
|`secondsCount` | uint256 | Number of seconds to lock the tokens.
### unlockTokens
```solidity
  function unlockTokens(
    enum Purpose executor,
    address amount
  ) public 
```
Unlock tokens.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`executor` | enum Purpose | Purpose of the unlock.
|`amount` | address | Amount of tokens to unlock.
### confiscateTokensFrom
```solidity
  function confiscateTokensFrom(
    enum Purpose executor,
    address stakeOwner,
    uint256 amount
  ) public onlyApp 
```
Confiscate tokens due protocol violations.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`executor` | enum Purpose | Purpose of the confiscation.
|`stakeOwner` | address | Address of the staker.
|`amount` | uint256 | Amount of tokens to confiscate.
## Events
### TokensStaked
```solidity
  event TokensStaked(
    address owner,
    uint256 amount,
    uint256 totalAmount
  )
```
Emmited when tokens are staked.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`owner`| address | Address of the staker.
|`amount`| uint256 | Amount of tokens staked.
|`totalAmount`| uint256 | Total amount of tokens staked.
### TokensUnstaked
```solidity
  event TokensUnstaked(
    address owner,
    uint256 amount,
    uint256 totalAmount
  )
```
Emmited when tokens are unstaked.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`owner`| address | Address of the staker.
|`amount`| uint256 | Amount of tokens unstaked.
|`totalAmount`| uint256 | Total amount of tokens unstaked.
### TokensLocked
```solidity
  event TokensLocked(
    enum Purpose executor,
    address owner,
    uint256 amount
  )
```
Emmited when tokens are locked.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`executor`| enum Purpose | Purpose of the lock.
|`owner`| address | Address of the tokens owner.
|`amount`| uint256 | Amount of tokens locked.
### TokensUnlocked
```solidity
  event TokensUnlocked(
    enum Purpose executor,
    address owner,
    uint256 amount,
    uint256 totalLocked
  )
```
Emmited when tokens are unlocked.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`executor`| enum Purpose | Purpose of the unlock.
|`owner`| address | Address of the tokens owner.
|`amount`| uint256 | Amount of tokens unlocked.
|`totalLocked`| uint256 | Total amount of tokens locked.
