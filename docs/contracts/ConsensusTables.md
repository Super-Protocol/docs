---
id: "ConsensusTables"
title: "ConsensusTables"
sidebar_label: "ConsensusTables"
sidebar_position: 0
---

## `ConsensusTables`



## Functions
### addSuspiciousBlock
```solidity
  function addSuspiciousBlock(
    uint256 tcbId
  ) public onlyApp 
```
Adds TCB to the table of suspicious TCBs.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB.
### addLastBlock
```solidity
  function addLastBlock(
    uint256 tcbId
  ) public onlyApp 
```
Adds TCB to the table of last TCBs.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB.
### removeSuspiciousBlock
```solidity
  function removeSuspiciousBlock(
    uint256 tcbId
  ) public onlyApp 
```
Removes TCB from the table of suspicious TCBs.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB.
### removeLastBlock
```solidity
  function removeLastBlock(
    uint256 tcbId
  ) public onlyApp 
```
Removes TCB from the table of last TCBs.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB.
### compareWithThreshold
```solidity
  function compareWithThreshold(
    uint256 tcbId
  ) public onlyApp 
```
Compare TCB marks with threshold and ban TEE offer if necessary.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB.
### findAccomplices
```solidity
  function findAccomplices(
    uint256 tcbId
  ) public onlyApp 
```
Transfers all blocks with a positive evaluation from the attacker's block to the table of suspicious blocks.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB.
### addTcbToEpoch
```solidity
  function addTcbToEpoch(
    uint256 tcbId
  ) external onlyApp 
```
Adds TCB to the current epoch.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB.
### increaseNextEpochCompensation
```solidity
  function increaseNextEpochCompensation(
    uint256 compensation
  ) public onlyApp 
```
Increases next epoch's reward.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`compensation` | uint256 | Size of the increase reward.
### compensateEpochDamage
```solidity
  function compensateEpochDamage(
    uint256 intruderTcbId
  ) public onlyApp 
```
Takes the attacker's reward from the epoch in which the invalid block was found.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`intruderTcbId` | uint256 | Id of the intruder TCB.
### updateConsensusTables
```solidity
  function updateConsensusTables(
    uint256 tcbId
  ) external onlyApp 
```
Enters marks from the new TCB into the tables of suspicious and last TCB's.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the new TCB.
## Events
### TcbBanned
```solidity
  event TcbBanned(
    uint256 tcbId,
    address provider
  )
```
Emitted when TCB is banned.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`tcbId`| uint256 | Id of the TCB.
|`provider`| address | Authority address of the provider.
