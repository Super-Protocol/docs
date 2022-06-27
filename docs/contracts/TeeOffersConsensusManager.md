---
id: "TeeOffersConsensusManager"
title: "TeeOffersConsensusManager"
sidebar_label: "TeeOffersConsensusManager"
sidebar_position: 0
---

## `TeeOffersConsensusManager`



## Functions
### getTeeOfferByDeviceId
```solidity
  function getTeeOfferByDeviceId(
    bytes32 deviceID
  ) external returns (uint256)
```
Returns TEE offer ID by its device ID.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deviceID` | bytes32 | Device ID.
### getTeeOfferLastTcbReward
```solidity
  function getTeeOfferLastTcbReward(
    uint256 teeOfferId
  ) public returns (uint256)
```
Returns last TCB reward of TEE offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
### getTeeOfferViolationRate
```solidity
  function getTeeOfferViolationRate(
    uint256 teeOfferId
  ) public returns (uint256)
```
Returns violation rate of TEE offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
### getLastTeeBenchmark
```solidity
  function getLastTeeBenchmark(
    uint256 teeOfferId
  ) public returns (uint256)
```
Returns added TEE offer benchmark.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
### getTeeVerifiedBenchmark
```solidity
  function getTeeVerifiedBenchmark(
    uint256 teeOfferId
  ) external returns (uint256)
```
Returns verified TEE offer benchmark.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
### banTeeOffer
```solidity
  function banTeeOffer(
    uint256 teeOfferId,
    bytes32 deviceID
  ) public onlyApp 
```
Bans TEE offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
|`deviceID` | bytes32 | Device ID.
### updateVerifiedTeeBenchmark
```solidity
  function updateVerifiedTeeBenchmark(
    uint256 teeOfferId
  ) external onlyApp 
```
Updates TEE offer verified benchmark.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
### incrTeeOfferViolationRate
```solidity
  function incrTeeOfferViolationRate(
    uint256 teeOfferId
  ) public onlyApp 
```
Increments TEE offer violation rate.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | Offer id.
### setTeeDeviceId
```solidity
  function setTeeDeviceId(
    uint256 teeOfferId,
    bytes32 deviceID
  ) external onlyApp 
```
Sets TEE offer device ID.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
|`deviceID` | bytes32 | Device ID.
### lockTcbReward
```solidity
  function lockTcbReward(
    uint256 teeOfferId,
    uint256 tcbId,
    uint256 reward
  ) public onlyApp 
```
Locks reward for TCB.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
|`tcbId` | uint256 | TCB id.
|`reward` | uint256 | Reward amount.
### unlockTcbReward
```solidity
  function unlockTcbReward(
    uint256 tcbId
  ) external 
```
Unlocks avaliable TCB reward.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tcbId` | uint256 | TCB id.
### blockTeeOffer
```solidity
  function blockTeeOffer(
    uint256 teeOfferId,
    bytes32 deviceID
  ) public onlyApp 
```
Blocks TEE offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
|`deviceID` | bytes32 | Device ID.
### confisacateAllRewards
```solidity
  function confisacateAllRewards(
    uint256 teeOfferId
  ) public onlyApp 
```
Confiscates all rewards of TEE offer.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`teeOfferId` | uint256 | TEE offer id.
## Events
### WarningMessage
```solidity
  event WarningMessage(
    uint256 teeOfferId,
    string message
  )
```
Emitted when confiscated tokens are unavailable for confiscation.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`teeOfferId`| uint256 | Id of the TEE offer.
|`message`| string | Message explaining the reason.
### TeeOfferViolationRateChanged
```solidity
  event TeeOfferViolationRateChanged(
    address providerAuth,
    uint256 teeOfferId,
    uint256 violationRate
  )
```
Emitted when TEE offer is pennaltyed.


#### Parameters:
| Name                           | Type          | Description                                    |
| :----------------------------- | :------------ | :--------------------------------------------- |
|`providerAuth`| address | Address of the provider authority.
|`teeOfferId`| uint256 | Id of the TEE offer.
|`violationRate`| uint256 | TEE offer penalty rate.
