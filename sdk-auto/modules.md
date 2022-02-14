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

- [BallotInfoArguments](modules.md#ballotinfoarguments)
- [FileCrypto](modules.md#filecrypto)
- [LockInfoArguments](modules.md#lockinfoarguments)
- [ModifyRequestArguments](modules.md#modifyrequestarguments)
- [OfferInfoArguments](modules.md#offerinfoarguments)
- [OfferRestrictionsArguments](modules.md#offerrestrictionsarguments)
- [OrderArgsArguments](modules.md#orderargsarguments)
- [OrderInfoArguments](modules.md#orderinfoarguments)
- [OrderResultArguments](modules.md#orderresultarguments)
- [ProviderInfoArguments](modules.md#providerinfoarguments)
- [StakeInfoArguments](modules.md#stakeinfoarguments)
- [TeeOfferInfoArguments](modules.md#teeofferinfoarguments)
- [VoterInfoArguments](modules.md#voterinfoarguments)

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

[types/Ballot.ts:58](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Ballot.ts#L58)

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

[BlockchainConnector.ts:127](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/BlockchainConnector.ts#L127)

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

[types/Epoch.ts:1](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Epoch.ts#L1)

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

[types/Staking.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Staking.ts#L12)

___

### ModifyRequest

Ƭ **ModifyRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contractName` | [`ContractName`](enums/ContractName.md) |
| `newContractAddress` | `number` |
| `newParamValue` | `number` |
| `paramName` | `number` |
| `requestType` | [`ModifyRequestType`](enums/ModifyRequestType.md) |

#### Defined in

[types/Ballot.ts:27](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Ballot.ts#L27)

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

[types/Offer.ts:43](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Offer.ts#L43)

___

### OfferRestrictions

Ƭ **OfferRestrictions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `offers` | `string`[] |
| `types` | [`OfferType`](enums/OfferType.md)[] |

#### Defined in

[types/Offer.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Offer.ts#L15)

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

[types/Order.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Order.ts#L14)

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

[types/Order.ts:30](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Order.ts#L30)

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

[types/Order.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Order.ts#L42)

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

[types/Provider.ts:3](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Provider.ts#L3)

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

[types/TcbData.ts:6](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/TcbData.ts#L6)

___

### SolutionHash

Ƭ **SolutionHash**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `hashAlgo` | `string` |

#### Defined in

[TIIGenerator.ts:107](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/TIIGenerator.ts#L107)

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

[types/Staking.ts:3](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Staking.ts#L3)

___

### StorageAccess

Ƭ **StorageAccess**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `credentials` | `any` |
| `storageType` | `StorageType` |

#### Defined in

[types/storage/StorageAccess.ts:3](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/storage/StorageAccess.ts#L3)

___

### StorageFileAccess

Ƭ **StorageFileAccess**: [`StorageAccess`](modules.md#storageaccess) & { `filepath`: `string`  }

#### Defined in

[types/storage/StorageFileAccess.ts:3](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/storage/StorageFileAccess.ts#L3)

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

[types/storage/StorageObject.ts:1](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/storage/StorageObject.ts#L1)

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

[types/TcbData.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/TcbData.ts#L13)

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

[types/TeeOffer.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/TeeOffer.ts#L14)

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

[TIIGenerator.ts:112](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/TIIGenerator.ts#L112)

___

### VoterInfo

Ƭ **VoterInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `voter` | `string` |
| `yes` | `boolean` |

#### Defined in

[types/Ballot.ts:37](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Ballot.ts#L37)

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

[staticModels/OrdersFactory.ts:112](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/OrdersFactory.ts#L112)

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

[models/Order.ts:210](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Order.ts#L210)

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

### BallotInfoArguments

• **BallotInfoArguments**: `string`[]

#### Defined in

[types/Ballot.ts:43](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Ballot.ts#L43)

___

### FileCrypto

• **FileCrypto**: () => `IFileCrypto`

#### Type declaration

• ()

#### Defined in

[index.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/index.ts#L13)

___

### LockInfoArguments

• **LockInfoArguments**: `string`[]

#### Defined in

[types/Staking.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Staking.ts#L11)

___

### ModifyRequestArguments

• **ModifyRequestArguments**: `string`[]

#### Defined in

[types/Ballot.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Ballot.ts#L20)

___

### OfferInfoArguments

• **OfferInfoArguments**: `string`[]

#### Defined in

[types/Offer.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Offer.ts#L21)

___

### OfferRestrictionsArguments

• **OfferRestrictionsArguments**: `string`[]

#### Defined in

[types/Offer.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Offer.ts#L14)

___

### OrderArgsArguments

• **OrderArgsArguments**: `string`[]

#### Defined in

[types/Order.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Order.ts#L13)

___

### OrderInfoArguments

• **OrderInfoArguments**: `string`[]

#### Defined in

[types/Order.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Order.ts#L21)

___

### OrderResultArguments

• **OrderResultArguments**: `string`[]

#### Defined in

[types/Order.ts:41](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Order.ts#L41)

___

### ProviderInfoArguments

• **ProviderInfoArguments**: `string`[]

#### Defined in

[types/Provider.ts:2](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Provider.ts#L2)

___

### StakeInfoArguments

• **StakeInfoArguments**: `string`[]

#### Defined in

[types/Staking.ts:2](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Staking.ts#L2)

___

### TeeOfferInfoArguments

• **TeeOfferInfoArguments**: `string`[]

#### Defined in

[types/TeeOffer.ts:2](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/TeeOffer.ts#L2)

___

### VoterInfoArguments

• **VoterInfoArguments**: `string`[]

#### Defined in

[types/Ballot.ts:36](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/types/Ballot.ts#L36)
