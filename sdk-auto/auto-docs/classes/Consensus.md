[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Consensus

# Class: Consensus

## Table of contents

### Constructors

- [constructor](Consensus.md#constructor)

### Properties

- [address](Consensus.md#address)
- [offers](Consensus.md#offers)

### Methods

- [LEnough](Consensus.md#lenough)
- [addTCB](Consensus.md#addtcb)
- [claimRewards](Consensus.md#claimrewards)
- [getInitedTcb](Consensus.md#getinitedtcb)
- [getListsForVerification](Consensus.md#getlistsforverification)
- [getTimeInited](Consensus.md#gettimeinited)
- [unlockRewards](Consensus.md#unlockrewards)

## Constructors

### constructor

• **new Consensus**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Consensus.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L15)

___

### offers

▪ `Static` `Optional` **offers**: `string`[]

#### Defined in

[staticModels/Consensus.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L22)

## Methods

### LEnough

▸ `Static` **LEnough**(`tcb`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tcb` | [`TCB`](TCB.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[staticModels/Consensus.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L19)

___

### addTCB

▸ `Static` **addTCB**(`teeOfferAddress`, `L1Marks`, `L2Marks`, `tcbData`, `transactionOptions?`): `Promise`<`void`\>

Add data to TeeConfirmationBlock and push it to Consensus

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teeOfferAddress` | `string` | TCB's device offer, as key |
| `L1Marks` | `number`[] | marks of LastBlocks |
| `L2Marks` | `number`[] | marks of SuspiciousBlocks |
| `tcbData` | `Object` | TEE generated |
| `tcbData.publicData` | [`PublicData`](../modules.md#publicdata) | - |
| `tcbData.quote` | `string` | - |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Consensus.ts:122](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L122)

___

### claimRewards

▸ `Static` **claimRewards**(`tcbAddress`, `transactionOptions?`): `Promise`<`void`\>

Function stake and lock TCB's reward

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tcbAddress` | `string` | TEE Offer's completed and valid TCB contract |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Consensus.ts:149](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L149)

___

### getInitedTcb

▸ `Static` **getInitedTcb**(`teeOfferAddress`): `Promise`<`string`\>

Function return last inited TCB of TEE offer

#### Parameters

| Name | Type |
| :------ | :------ |
| `teeOfferAddress` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[staticModels/Consensus.ts:178](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L178)

___

### getListsForVerification

▸ `Static` **getListsForVerification**(`teeOfferAddress`, `transactionOptions?`): `Promise`<{ `L1`: `string`[] ; `L2`: `string`[]  }\>

Function initialize TCB and returns two lists of anothers' TCB addresses for their checking

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teeOfferAddress` | `string` |  |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<{ `L1`: `string`[] ; `L2`: `string`[]  }\>

two lists of anothers' TCB addresses for their checking

#### Defined in

[staticModels/Consensus.ts:85](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L85)

___

### getTimeInited

▸ `Static` **getTimeInited**(`teeOfferAddress`): `Promise`<`number`\>

Function return last inited TCB of TEE offer

#### Parameters

| Name | Type |
| :------ | :------ |
| `teeOfferAddress` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/Consensus.ts:188](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L188)

___

### unlockRewards

▸ `Static` **unlockRewards**(`tcbAddress`, `unlockAmount`, `transactionOptions?`): `Promise`<`void`\>

Function unlock previously locked TCB rewards (by claimRewards)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tcbAddress` | `string` | TCB contract address |
| `unlockAmount` | `number` | amount of tokens to unlock, max available amount = TeeOffer.getLockInfo(tcbAddress) |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Consensus.ts:161](https://github.com/Super-Protocol/sp-sdk-js/blob/6811aa1/src/staticModels/Consensus.ts#L161)
