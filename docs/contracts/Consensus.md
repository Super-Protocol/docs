---
id: "Consensus"
title: "Consensus"
sidebar_label: "Consensus"
sidebar_position: 0
---

## `Consensus`
Contains logic that controls Super Protocol consensus.


## Functions
### getTcbById
```solidity
  function getTcbById(
    uint256 tcbId
  ) external returns (struct Tcb)
```
Returns TCB with given id.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of TCB.
### getInitializedTcbId
```solidity
  function getInitializedTcbId(
    uint256 teeOfferId
  ) external returns (uint256)
```
Returns initialized TCB with given TEE offer id.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | Id of TEE offer.
### getActualTcbId
```solidity
  function getActualTcbId(
    uint256 teeOfferId
  ) external returns (uint256)
```
Returns completed TCB with given TEE offer id.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | Id of TEE offer.
### getTcbReward
```solidity
  function getTcbReward(
    uint256 tcbId
  ) public returns (uint256)
```
Returns amount of TCB reward.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of TCB.
### getSuspiciousBlockTableSize
```solidity
  function getSuspiciousBlockTableSize(
  ) external returns (uint256)
```
Returns suspicious blocks table size.

### getLastBlockTableSize
```solidity
  function getLastBlockTableSize(
  ) external returns (uint256)
```
Returns last blocks table size.

### getEpoch
```solidity
  function getEpoch(
    uint256 index
  ) external returns (struct Epoch)
```
Returns epoch info.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint256 | Index of epoch.
### getEpochIndex
```solidity
  function getEpochIndex(
  ) external returns (uint256)
```
Returns actual epochs index.

### getSuspiciousBlockTable
```solidity
  function getSuspiciousBlockTable(
  ) external returns (uint256[])
```
Returns suspicious blocks IDs.

### getLastBlockTable
```solidity
  function getLastBlockTable(
  ) external returns (uint256[])
```
Returns last blocks IDs.

### isBenchmarkChangedByLastbBlock
```solidity
  function isBenchmarkChangedByLastbBlock(
    uint256 offerId
  ) external returns (bool)
```
Returns whether benchamrk changed in last TCB.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Id of TEE offer.
### isTeeOfferVerifying
```solidity
  function isTeeOfferVerifying(
    uint256 offerId
  ) public returns (bool)
```
Returns whether TEE offer is on verifying.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`offerId` | uint256 | Id of TEE offer.
### setTcbStatus
```solidity
  function setTcbStatus(
    uint256 tcbId,
    enum TcbStatus status
  ) external onlyApp 
```
Sets TCB status.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of TCB.
|`status` | enum TcbStatus | New status of TCB.
### initializeTcb
```solidity
  function initializeTcb(
    uint256 teeOfferId
  ) external 
```
Create empty TCB.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | Id of TEE offer.
### setTcbData
```solidity
  function setTcbData(
    uint256 tcbId,
    uint256 benchmark,
    string properties,
    bytes32 deviceID,
    string quote
  ) external onlyProviderActionAccount(tcbId) notCompleted(tcbId) 
```
fills the TCB with data.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB to be filled.
|`benchmark` | uint256 | Benchmark of the TEE offer.
|`properties` | string | Properties of the TEE offer.
|`deviceID` | bytes32 | Device ID of the TEE offer.
|`quote` | string | Quote of the TEE offer.
### assignLastBlocksToCheck
```solidity
  function assignLastBlocksToCheck(
    uint256 tcbId
  ) external onlyProviderActionAccount(tcbId) notCompleted(tcbId) 
```
Assigns blocks from last blocks table to initialized TCB.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB to be filled.
### assignSuspiciousBlocksToCheck
```solidity
  function assignSuspiciousBlocksToCheck(
    uint256 tcbId
  ) external onlyProviderActionAccount(tcbId) notCompleted(tcbId) 
```
Assigns blocks from suspicious blocks table to initialized TCB.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB to be filled.
### applyTcbMarks
```solidity
  function applyTcbMarks(
    enum TcbVerifiedStatus[] marks,
    uint256 tcbId
  ) external onlyProviderActionAccount(tcbId) notCompleted(tcbId) 
```
Apply blocks marks to initialized TCB.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`marks` | enum TcbVerifiedStatus[] | Marks of blocks.
|`tcbId` | uint256 | Id of the TCB to be filled.
### addTcbToSupply
```solidity
  function addTcbToSupply(
    uint256 tcbId
  ) external onlyProviderActionAccount(tcbId) 
```
Verify TCB and add it to supply.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB to be verified.
### claimRewards
```solidity
  function claimRewards(
    uint256 tcbId
  ) external 
```
Takes avaliable rewards for TCB.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | Id of the TCB to be taken rewards.
## Events
### TcbBenchmarkChanged
```solidity
  event TcbBenchmarkChanged(
    uint256 tcbId,
    address provider
  )
```
Emmited when offer changed benchmark.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`tcbId`| uint256 | Id of offer's TCB.
|`provider`| address | Address of provider.
### TcbInitialized
```solidity
  event TcbInitialized(
    uint256 tcbId,
    address provider
  )
```
Emmited when TCB is initialized.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`tcbId`| uint256 | ID of initialized TCB.
|`provider`| address | Address of provider.
### TcbCompleted
```solidity
  event TcbCompleted(
    uint256 tcbId,
    address provider
  )
```
Emmited when TCB is completed.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`tcbId`| uint256 | ID of completed TCB.
|`provider`| address | Address of provider.
### RewardsClaimed
```solidity
  event RewardsClaimed(
    uint256 tcbId,
    uint256 amount,
    address claimer
  )
```
Emmited when TCB is claimed.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`tcbId`| uint256 | ID of claimed TCB.
|`amount`| uint256 | Amount of claimed TCB.
|`claimer`| address | Address of claimer.
