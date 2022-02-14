[@super-protocol/sp-sdk-js](README.md) / Exports

# @super-protocol/sp-sdk-js

## Table of contents

### Enumerations

- [BallotState](enums/BallotState.md)
- [BallotStateReason](enums/BallotStateReason.md)
- [ContractName](enums/ContractName.md)
- [LType](enums/LType.md)
- [ModifyRequestType](enums/ModifyRequestType.md)
- [OfferGroup](enums/OfferGroup.md)
- [OfferType](enums/OfferType.md)
- [OrderStatus](enums/OrderStatus.md)
- [ParamName](enums/ParamName.md)
- [TcbStatus](enums/TcbStatus.md)

### Classes

- [Ballot](classes/Ballot.md)
- [Consensus](classes/Consensus.md)
- [Crypto](classes/Crypto.md)
- [Epochs](classes/Epochs.md)
- [LastBlocks](classes/LastBlocks.md)
- [Offer](classes/Offer.md)
- [OffersFactory](classes/OffersFactory.md)
- [Order](classes/Order.md)
- [OrdersFactory](classes/OrdersFactory.md)
- [Provider](classes/Provider.md)
- [ProviderRegistry](classes/ProviderRegistry.md)
- [Staking](classes/Staking.md)
- [Superpro](classes/Superpro.md)
- [SuperproToken](classes/SuperproToken.md)
- [Suspicious](classes/Suspicious.md)
- [TCB](classes/TCB.md)
- [TIIGenerator](classes/TIIGenerator.md)
- [TeeOffer](classes/TeeOffer.md)
- [TeeOffersFactory](classes/TeeOffersFactory.md)
- [Voting](classes/Voting.md)
- [default](classes/default.md)

### Interfaces

- [IStorageProvider](interfaces/IStorageProvider.md)

### Type aliases

- [BallotInfo](modules.md#ballotinfo)
- [Config](modules.md#config)
- [Epoch](modules.md#epoch)
- [LockInfo](modules.md#lockinfo)
- [ModifyRequest](modules.md#modifyrequest)
- [OfferInfo](modules.md#offerinfo)
- [OfferRestrictions](modules.md#offerrestrictions)
- [OrderArgs](modules.md#orderargs)
- [OrderInfo](modules.md#orderinfo)
- [OrderResult](modules.md#orderresult)
- [ProviderInfo](modules.md#providerinfo)
- [PublicData](modules.md#publicdata)
- [SolutionHash](modules.md#solutionhash)
- [StakeInfo](modules.md#stakeinfo)
- [StorageAccess](modules.md#storageaccess)
- [StorageFileAccess](modules.md#storagefileaccess)
- [StorageObject](modules.md#storageobject)
- [TcbEpochInfo](modules.md#tcbepochinfo)
- [TeeOfferInfo](modules.md#teeofferinfo)
- [TeeRunInfo](modules.md#teeruninfo)
- [VoterInfo](modules.md#voterinfo)
- [onOrderCreatedCallback](modules.md#onordercreatedcallback)
- [onOrderStatusUpdatedCallback](modules.md#onorderstatusupdatedcallback)

### Properties

- [getStorageProvider](modules.md#getstorageprovider)

### Variables

- [BallotInfoStructure](modules.md#ballotinfostructure)
- [EpochStructure](modules.md#epochstructure)
- [LockInfoStructure](modules.md#lockinfostructure)
- [ModifyRequestStructure](modules.md#modifyrequeststructure)
- [OfferInfoStructure](modules.md#offerinfostructure)
- [OfferRestrictionsStructure](modules.md#offerrestrictionsstructure)
- [OrderArgsStructure](modules.md#orderargsstructure)
- [OrderInfoStructure](modules.md#orderinfostructure)
- [OrderResultStructure](modules.md#orderresultstructure)
- [ProviderInfoStructure](modules.md#providerinfostructure)
- [PublicDataStructure](modules.md#publicdatastructure)
- [StakeInfoStructure](modules.md#stakeinfostructure)
- [TcbEpochInfoStructure](modules.md#tcbepochinfostructure)
- [TeeOfferInfoStructure](modules.md#teeofferinfostructure)
- [VoterInfoStructure](modules.md#voterinfostructure)

## Type aliases

### BallotInfo

Ƭ **BallotInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `closeDate` | `number` |
| `depositAmount` | `number` |
| `execDate` | `number` |
| `issuer` | `string` |
| `no` | `number` |
| `openDate` | `number` |
| `quorum` | `number` |
| `reason` | [`BallotStateReason`](enums/BallotStateReason.md) |
| `request` | [`ModifyRequest`](modules.md#modifyrequest) |
| `state` | [`BallotState`](enums/BallotState.md) |
| `totalHoldedVotes` | `number` |
| `voters` | [`VoterInfo`](modules.md#voterinfo)[] |
| `yes` | `number` |

#### Defined in

[types/Ballot.ts:61](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Ballot.ts#L61)

___

### Config

Ƭ **Config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockchainUrl?` | `string` |
| `contractAddress` | `string` |
| `gasLimit?` | `number` |
| `gasPrice?` | `string` |

#### Defined in

[BlockchainConnector.ts:127](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/BlockchainConnector.ts#L127)

___

### Epoch

Ƭ **Epoch**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `benchmark` | `number` |
| `endDate` | `number` |
| `reparation` | `number` |
| `reparationBenchmark` | `number` |
| `reward` | `number` |
| `startDate` | `number` |

#### Defined in

[types/Epoch.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Epoch.ts#L10)

___

### LockInfo

Ƭ **LockInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `fromDate` | `number` |
| `toDate` | `number` |

#### Defined in

[types/Staking.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Staking.ts#L21)

___

### ModifyRequest

Ƭ **ModifyRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contractName` | [`ContractName`](enums/ContractName.md) |
| `newContractAddress` | `string` |
| `newParamValue` | `number` |
| `paramName` | [`ParamName`](enums/ParamName.md) |
| `requestType` | [`ModifyRequestType`](enums/ModifyRequestType.md) |

#### Defined in

[types/Ballot.ts:27](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Ballot.ts#L27)

___

### OfferInfo

Ƭ **OfferInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowedAccounts` | `string`[] |
| `allowedArgs` | `string` |
| `argsPublicKey` | `string` |
| `argsPublicKeyAlgo` | `string` |
| `cancelable` | `boolean` |
| `description` | `string` |
| `disabledAfter` | `number` |
| `group` | [`OfferGroup`](enums/OfferGroup.md) |
| `hash` | `string` |
| `hashAlgo` | `string` |
| `holdSum` | `number` |
| `inputFormat` | `string` |
| `linkage` | `string` |
| `maxDurationTimeMinutes` | `number` |
| `name` | `string` |
| `offerType` | [`OfferType`](enums/OfferType.md) |
| `outputFormat` | `string` |
| `properties` | `string` |
| `restrictions` | [`OfferRestrictions`](modules.md#offerrestrictions) |
| `resultUrl` | `string` |

#### Defined in

[types/Offer.ts:46](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Offer.ts#L46)

___

### OfferRestrictions

Ƭ **OfferRestrictions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `offers` | `string`[] |
| `types` | [`OfferType`](enums/OfferType.md)[] |

#### Defined in

[types/Offer.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Offer.ts#L18)

___

### OrderArgs

Ƭ **OrderArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inputOffers` | `string`[] |
| `selectedOffers` | `string`[] |
| `slots` | `number` |

#### Defined in

[types/Order.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Order.ts#L19)

___

### OrderInfo

Ƭ **OrderInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args` | [`OrderArgs`](modules.md#orderargs) |
| `encryptedArgs` | `string` |
| `encryptedRequirements` | `string` |
| `offer` | `string` |
| `resultPublicKey` | `string` |
| `resultPublicKeyAlgo` | `string` |
| `status` | [`OrderStatus`](enums/OrderStatus.md) |

#### Defined in

[types/Order.ts:35](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Order.ts#L35)

___

### OrderResult

Ƭ **OrderResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encryptedError` | `string` |
| `encryptedResult` | `string` |
| `orderPrice` | `number` |

#### Defined in

[types/Order.ts:51](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Order.ts#L51)

___

### ProviderInfo

Ƭ **ProviderInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actionAccount` | `string` |
| `description` | `string` |
| `metadata` | `string` |
| `name` | `string` |
| `tokenReceiver` | `string` |

#### Defined in

[types/Provider.ts:9](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Provider.ts#L9)

___

### PublicData

Ƭ **PublicData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `benchmark` | `number` |
| `deviceID` | `string` |
| `properties` | `string` |
| `teeOffer` | `string` |

#### Defined in

[types/TcbData.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/TcbData.ts#L13)

___

### SolutionHash

Ƭ **SolutionHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `hashAlgo` | `string` |

#### Defined in

[TIIGenerator.ts:106](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/TIIGenerator.ts#L106)

___

### StakeInfo

Ƭ **StakeInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `profit` | `number` |
| `startDate` | `number` |
| `totalLocked` | `number` |

#### Defined in

[types/Staking.ts:8](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Staking.ts#L8)

___

### StorageAccess

Ƭ **StorageAccess**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentials` | `any` |
| `storageType` | `StorageType` |

#### Defined in

[types/storage/StorageAccess.ts:3](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/storage/StorageAccess.ts#L3)

___

### StorageFileAccess

Ƭ **StorageFileAccess**: [`StorageAccess`](modules.md#storageaccess) & { `filepath`: `string`  }

#### Defined in

[types/storage/StorageFileAccess.ts:3](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/storage/StorageFileAccess.ts#L3)

___

### StorageObject

Ƭ **StorageObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `childrenCount` | `number` |
| `createdAt` | `Date` |
| `isFolder` | `boolean` |
| `name` | `string` |
| `size` | `number` |

#### Defined in

[types/storage/StorageObject.ts:1](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/storage/StorageObject.ts#L1)

___

### TcbEpochInfo

Ƭ **TcbEpochInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `reparation` | `boolean` |
| `valid` | `boolean` |

#### Defined in

[types/TcbData.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/TcbData.ts#L26)

___

### TeeOfferInfo

Ƭ **TeeOfferInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `argsPublicKey` | `string` |
| `argsPublicKeyAlgo` | `string` |
| `description` | `string` |
| `minTimeMinutes` | `number` |
| `name` | `string` |
| `properties` | `string` |
| `slots` | `number` |
| `tcb` | `string` |
| `teeType` | `string` |
| `tlb` | `string` |

#### Defined in

[types/TeeOffer.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/TeeOffer.ts#L14)

___

### TeeRunInfo

Ƭ **TeeRunInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args` | `any` |
| `encryption` | `Encryption` |
| `solutionHashes` | [`SolutionHash`](modules.md#solutionhash)[] |

#### Defined in

[TIIGenerator.ts:111](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/TIIGenerator.ts#L111)

___

### VoterInfo

Ƭ **VoterInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `voter` | `string` |
| `yes` | `boolean` |

#### Defined in

[types/Ballot.ts:40](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Ballot.ts#L40)

___

### onOrderCreatedCallback

Ƭ **onOrderCreatedCallback**: (`address`: `string`) => `void`

#### Type declaration

▸ (`address`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

##### Returns

`void`

#### Defined in

[staticModels/OrdersFactory.ts:118](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/staticModels/OrdersFactory.ts#L118)

___

### onOrderStatusUpdatedCallback

Ƭ **onOrderStatusUpdatedCallback**: (`status`: [`OrderStatus`](enums/OrderStatus.md)) => `void`

#### Type declaration

▸ (`status`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`OrderStatus`](enums/OrderStatus.md) |

##### Returns

`void`

#### Defined in

[models/Order.ts:207](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/models/Order.ts#L207)

## Properties

### getStorageProvider

• **getStorageProvider**: (`storageAccess`: [`StorageAccess`](modules.md#storageaccess)) => [`IStorageProvider`](interfaces/IStorageProvider.md)

#### Type declaration

▸ (`storageAccess`): [`IStorageProvider`](interfaces/IStorageProvider.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `storageAccess` | [`StorageAccess`](modules.md#storageaccess) |

##### Returns

[`IStorageProvider`](interfaces/IStorageProvider.md)

## Variables

### BallotInfoStructure

• **BallotInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `closeDate` | `NumberConstructor` |
| `depositAmount` | `NumberConstructor` |
| `execDate` | `NumberConstructor` |
| `issuer` | `StringConstructor` |
| `no` | `NumberConstructor` |
| `openDate` | `NumberConstructor` |
| `quorum` | `NumberConstructor` |
| `reason` | typeof [`BallotStateReason`](enums/BallotStateReason.md) |
| `request` | { `contractName`: typeof [`ContractName`](enums/ContractName.md) = ContractName; `newContractAddress`: `StringConstructor` = String; `newParamValue`: `NumberConstructor` = Number; `paramName`: typeof [`ParamName`](enums/ParamName.md) = ParamName; `requestType`: typeof [`ModifyRequestType`](enums/ModifyRequestType.md) = ModifyRequestType } |
| `request.contractName` | typeof [`ContractName`](enums/ContractName.md) |
| `request.newContractAddress` | `StringConstructor` |
| `request.newParamValue` | `NumberConstructor` |
| `request.paramName` | typeof [`ParamName`](enums/ParamName.md) |
| `request.requestType` | typeof [`ModifyRequestType`](enums/ModifyRequestType.md) |
| `state` | typeof [`BallotState`](enums/BallotState.md) |
| `totalHoldedVotes` | `NumberConstructor` |
| `voters` | { `voter`: `StringConstructor` = String; `yes`: `NumberConstructor` = Number }[] |
| `yes` | `NumberConstructor` |

#### Defined in

[types/Ballot.ts:46](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Ballot.ts#L46)

___

### EpochStructure

• **EpochStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `benchmark` | `NumberConstructor` |
| `endDate` | `NumberConstructor` |
| `reparation` | `NumberConstructor` |
| `reparationBenchmark` | `NumberConstructor` |
| `reward` | `NumberConstructor` |
| `startDate` | `NumberConstructor` |

#### Defined in

[types/Epoch.ts:2](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Epoch.ts#L2)

___

### LockInfoStructure

• **LockInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `NumberConstructor` |
| `fromDate` | `NumberConstructor` |
| `toDate` | `NumberConstructor` |

#### Defined in

[types/Staking.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Staking.ts#L16)

___

### ModifyRequestStructure

• **ModifyRequestStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contractName` | typeof [`ContractName`](enums/ContractName.md) |
| `newContractAddress` | `StringConstructor` |
| `newParamValue` | `NumberConstructor` |
| `paramName` | typeof [`ParamName`](enums/ParamName.md) |
| `requestType` | typeof [`ModifyRequestType`](enums/ModifyRequestType.md) |

#### Defined in

[types/Ballot.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Ballot.ts#L20)

___

### OfferInfoStructure

• **OfferInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowedAccounts` | `StringConstructor`[] |
| `allowedArgs` | `StringConstructor` |
| `argsPublicKey` | `StringConstructor` |
| `argsPublicKeyAlgo` | `StringConstructor` |
| `cancelable` | `BooleanConstructor` |
| `description` | `StringConstructor` |
| `disabledAfter` | `NumberConstructor` |
| `group` | typeof [`OfferGroup`](enums/OfferGroup.md) |
| `hash` | `StringConstructor` |
| `hashAlgo` | `StringConstructor` |
| `holdSum` | `NumberConstructor` |
| `inputFormat` | `StringConstructor` |
| `linkage` | `StringConstructor` |
| `maxDurationTimeMinutes` | `NumberConstructor` |
| `name` | `StringConstructor` |
| `offerType` | typeof [`OfferType`](enums/OfferType.md) |
| `outputFormat` | `StringConstructor` |
| `properties` | `StringConstructor` |
| `restrictions` | { `offers`: `StringConstructor`[] ; `types`: typeof [`OfferType`](enums/OfferType.md)[]  } |
| `restrictions.offers` | `StringConstructor`[] |
| `restrictions.types` | typeof [`OfferType`](enums/OfferType.md)[] |
| `resultUrl` | `StringConstructor` |

#### Defined in

[types/Offer.ts:24](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Offer.ts#L24)

___

### OfferRestrictionsStructure

• **OfferRestrictionsStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `offers` | `StringConstructor`[] |
| `types` | typeof [`OfferType`](enums/OfferType.md)[] |

#### Defined in

[types/Offer.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Offer.ts#L14)

___

### OrderArgsStructure

• **OrderArgsStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inputOffers` | `StringConstructor`[] |
| `selectedOffers` | `StringConstructor`[] |
| `slots` | `NumberConstructor` |

#### Defined in

[types/Order.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Order.ts#L14)

___

### OrderInfoStructure

• **OrderInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args` | { `inputOffers`: `StringConstructor`[] ; `selectedOffers`: `StringConstructor`[] ; `slots`: `NumberConstructor` = Number } |
| `args.inputOffers` | `StringConstructor`[] |
| `args.selectedOffers` | `StringConstructor`[] |
| `args.slots` | `NumberConstructor` |
| `encryptedArgs` | `StringConstructor` |
| `encryptedRequirements` | `StringConstructor` |
| `offer` | `StringConstructor` |
| `resultPublicKey` | `StringConstructor` |
| `resultPublicKeyAlgo` | `StringConstructor` |
| `status` | typeof [`OrderStatus`](enums/OrderStatus.md) |

#### Defined in

[types/Order.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Order.ts#L26)

___

### OrderResultStructure

• **OrderResultStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encryptedError` | `StringConstructor` |
| `encryptedResult` | `StringConstructor` |
| `orderPrice` | `NumberConstructor` |

#### Defined in

[types/Order.ts:46](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Order.ts#L46)

___

### ProviderInfoStructure

• **ProviderInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actionAccount` | `StringConstructor` |
| `description` | `StringConstructor` |
| `metadata` | `StringConstructor` |
| `name` | `StringConstructor` |
| `tokenReceiver` | `StringConstructor` |

#### Defined in

[types/Provider.ts:2](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Provider.ts#L2)

___

### PublicDataStructure

• **PublicDataStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `benchmark` | `NumberConstructor` |
| `deviceID` | `StringConstructor` |
| `properties` | `StringConstructor` |
| `teeOffer` | `StringConstructor` |

#### Defined in

[types/TcbData.ts:7](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/TcbData.ts#L7)

___

### StakeInfoStructure

• **StakeInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `NumberConstructor` |
| `profit` | `NumberConstructor` |
| `startDate` | `NumberConstructor` |
| `totalLocked` | `NumberConstructor` |

#### Defined in

[types/Staking.ts:2](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Staking.ts#L2)

___

### TcbEpochInfoStructure

• **TcbEpochInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `NumberConstructor` |
| `reparation` | `BooleanConstructor` |
| `valid` | `BooleanConstructor` |

#### Defined in

[types/TcbData.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/TcbData.ts#L21)

___

### TeeOfferInfoStructure

• **TeeOfferInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `argsPublicKey` | `StringConstructor` |
| `argsPublicKeyAlgo` | `StringConstructor` |
| `description` | `StringConstructor` |
| `minTimeMinutes` | `NumberConstructor` |
| `name` | `StringConstructor` |
| `properties` | `StringConstructor` |
| `slots` | `NumberConstructor` |
| `tcb` | `StringConstructor` |
| `teeType` | `StringConstructor` |
| `tlb` | `StringConstructor` |

#### Defined in

[types/TeeOffer.ts:2](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/TeeOffer.ts#L2)

___

### VoterInfoStructure

• **VoterInfoStructure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `voter` | `StringConstructor` |
| `yes` | `NumberConstructor` |

#### Defined in

[types/Ballot.ts:36](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/types/Ballot.ts#L36)
