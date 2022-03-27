---
id: "Consensus"
title: "Class: Consensus"
sidebar_label: "Consensus"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Consensus**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Consensus.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L15)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/Consensus.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L16)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/Consensus.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L17)

___

### offers

▪ `Static` `Optional` **offers**: `string`[]

#### Defined in

[staticModels/Consensus.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L22)

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

[staticModels/Consensus.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L19)

___

### addMarks

▸ `Static` `Private` **addMarks**(`L1Marks`, `L2Marks`, `tcb`, `transactionOptions?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `L1Marks` | `number`[] |
| `L2Marks` | `number`[] |
| `tcb` | [`TCB`](TCB.md) |
| `transactionOptions?` | `TransactionOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Consensus.ts:51](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L51)

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

[staticModels/Consensus.ts:127](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L127)

___

### addToSupply

▸ `Static` `Private` **addToSupply**(`tcbAddress`, `transactionOptions?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tcbAddress` | `string` |
| `transactionOptions?` | `TransactionOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Consensus.ts:47](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L47)

___

### checkInit

▸ `Static` `Private` **checkInit**(`transactionOptions?`): `Contract`

Checks if contract has been initialized, if not - initialize contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionOptions?` | `TransactionOptions` |

#### Returns

`Contract`

#### Defined in

[staticModels/Consensus.ts:27](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L27)

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

[staticModels/Consensus.ts:154](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L154)

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

[staticModels/Consensus.ts:184](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L184)

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

[staticModels/Consensus.ts:90](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L90)

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

[staticModels/Consensus.ts:194](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L194)

___

### initTcb

▸ `Static` `Private` **initTcb**(`teeOfferAddress`, `transactionOptions?`): `Promise`<[`TCB`](TCB.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `teeOfferAddress` | `string` |
| `transactionOptions?` | `TransactionOptions` |

#### Returns

`Promise`<[`TCB`](TCB.md)\>

#### Defined in

[staticModels/Consensus.ts:40](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L40)

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

[staticModels/Consensus.ts:167](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/Consensus.ts#L167)
