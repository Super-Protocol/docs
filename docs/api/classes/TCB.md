---
id: "TCB"
title: "Class: TCB"
sidebar_label: "TCB"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new TCB**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/TCB.ts:28](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L28)

## Properties

### L1

• `Optional` **L1**: `string`[]

#### Defined in

[models/TCB.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L19)

___

### L1\_statusess

• `Optional` **L1\_statusess**: `number`[]

#### Defined in

[models/TCB.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L21)

___

### L2

• `Optional` **L2**: `string`[]

#### Defined in

[models/TCB.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L20)

___

### L2\_statusess

• `Optional` **L2\_statusess**: `number`[]

#### Defined in

[models/TCB.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L22)

___

### address

• **address**: `string`

#### Defined in

[models/TCB.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L15)

___

### contract

• `Private` **contract**: `Contract`

#### Defined in

[models/TCB.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/TCB.ts#L16)

___

### epoch

• `Optional` **epoch**: [`TcbEpochInfo`](../modules.md#tcbepochinfo)

#### Defined in

[models/TCB.ts:23](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L23)

___

### logger

• `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[models/TCB.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/TCB.ts#L17)

___

### negative

• `Optional` **negative**: `number`

#### Defined in

[models/TCB.ts:25](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L25)

___

### positive

• `Optional` **positive**: `number`

#### Defined in

[models/TCB.ts:24](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L24)

___

### quote

• `Optional` **quote**: `string`

#### Defined in

[models/TCB.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L26)

## Methods

### addData

▸ **addData**(`pb`, `quote`, `transactionOptions?`): `Promise`<`void`\>

Add processed TCB data to smart-contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pb` | [`PublicData`](../modules.md#publicdata) | - |
| `quote` | `string` | data generated from Enclave |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TCB.ts:108](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L108)

___

### addMarks

▸ **addMarks**(`lType`, `marks`, `transactionOptions?`): `Promise`<`void`\>

Append marks for selected TCBs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lType` | [`LType`](../enums/LType.md) | type of appending marks |
| `marks` | `number`[] | list of marks |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TCB.ts:159](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L159)

___

### getEpochInfo

▸ **getEpochInfo**(): `Promise`<[`TcbEpochInfo`](../modules.md#tcbepochinfo)\>

#### Returns

`Promise`<[`TcbEpochInfo`](../modules.md#tcbepochinfo)\>

#### Defined in

[models/TCB.ts:118](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L118)

___

### getL1

▸ **getL1**(): `Promise`<`string`[]\>

Function for fetching list of TCBs from LastBlocksTable formed for veirifying

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/TCB.ts:58](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L58)

___

### getL1Marks

▸ **getL1Marks**(): `Promise`<`number`[]\>

Function for fetching the given marks for recruited TCBs from the LastBlocksTable

#### Returns

`Promise`<`number`[]\>

#### Defined in

[models/TCB.ts:74](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L74)

___

### getL2

▸ **getL2**(): `Promise`<`string`[]\>

Function for fetching list of TCBs from SuspiciousBlocksTable formed for veirifying

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/TCB.ts:66](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L66)

___

### getL2Marks

▸ **getL2Marks**(): `Promise`<`number`[]\>

Function for fetching the given marks for recruited TCBs from the SuspiciousBlocksTable

#### Returns

`Promise`<`number`[]\>

#### Defined in

[models/TCB.ts:82](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L82)

___

### getOwnMarks

▸ **getOwnMarks**(): `Promise`<{ `negative`: `number` ; `positive`: `number`  }\>

Function for fetching marks of TCB (from Consensus)

#### Returns

`Promise`<{ `negative`: `number` ; `positive`: `number`  }\>

#### Defined in

[models/TCB.ts:126](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L126)

___

### getPaidAmount

▸ **getPaidAmount**(): `Promise`<`number`\>

Function for fetching calimed amount of TCB reward

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TCB.ts:98](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L98)

___

### getPublicData

▸ **getPublicData**(): `Promise`<[`PublicData`](../modules.md#publicdata)\>

Function for fetching used TCB data

#### Returns

`Promise`<[`PublicData`](../modules.md#publicdata)\>

#### Defined in

[models/TCB.ts:136](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L136)

___

### getQuote

▸ **getQuote**(): `Promise`<`string`\>

Function for fetching stored TCB data

#### Returns

`Promise`<`string`\>

#### Defined in

[models/TCB.ts:148](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L148)

___

### getTcbStatus

▸ **getTcbStatus**(): `Promise`<[`TcbStatus`](../enums/TcbStatus.md)\>

Function for fetching TCB status

#### Returns

`Promise`<[`TcbStatus`](../enums/TcbStatus.md)\>

#### Defined in

[models/TCB.ts:91](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L91)

___

### needL1toCompleted

▸ **needL1toCompleted**(): `Promise`<`number`\>

Function for fetching number of TCB's to request for verifying from LastBlocksTable

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TCB.ts:40](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L40)

___

### needL2toCompleted

▸ **needL2toCompleted**(): `Promise`<`number`\>

Function for fetching number of TCB's to request for verifying from SuspiciousBlocksTable

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TCB.ts:49](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/TCB.ts#L49)
