[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / TCB

# Class: TCB

## Table of contents

### Constructors

- [constructor](TCB.md#constructor)

### Properties

- [L1](TCB.md#l1)
- [L1\_statusess](TCB.md#l1_statusess)
- [L2](TCB.md#l2)
- [L2\_statusess](TCB.md#l2_statusess)
- [address](TCB.md#address)
- [epoch](TCB.md#epoch)
- [negative](TCB.md#negative)
- [positive](TCB.md#positive)
- [publicData](TCB.md#publicdata)
- [quote](TCB.md#quote)

### Methods

- [addData](TCB.md#adddata)
- [addMarks](TCB.md#addmarks)
- [getEpochInfo](TCB.md#getepochinfo)
- [getL1](TCB.md#getl1)
- [getL1Marks](TCB.md#getl1marks)
- [getL2](TCB.md#getl2)
- [getL2Marks](TCB.md#getl2marks)
- [getOwnMarks](TCB.md#getownmarks)
- [getPublicData](TCB.md#getpublicdata)
- [getQuote](TCB.md#getquote)
- [needL1toCompleted](TCB.md#needl1tocompleted)
- [needL2toCompleted](TCB.md#needl2tocompleted)

## Constructors

### constructor

• **new TCB**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/TCB.ts:29](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L29)

## Properties

### L1

• `Optional` **L1**: `string`[]

#### Defined in

[models/TCB.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L19)

___

### L1\_statusess

• `Optional` **L1\_statusess**: `number`[]

#### Defined in

[models/TCB.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L21)

___

### L2

• `Optional` **L2**: `string`[]

#### Defined in

[models/TCB.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L20)

___

### L2\_statusess

• `Optional` **L2\_statusess**: `number`[]

#### Defined in

[models/TCB.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L22)

___

### address

• **address**: `string`

#### Defined in

[models/TCB.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L15)

___

### epoch

• `Optional` **epoch**: [`TcbEpochInfo`](../modules.md#tcbepochinfo)

#### Defined in

[models/TCB.ts:23](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L23)

___

### negative

• `Optional` **negative**: `number`

#### Defined in

[models/TCB.ts:25](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L25)

___

### positive

• `Optional` **positive**: `number`

#### Defined in

[models/TCB.ts:24](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L24)

___

### publicData

• `Optional` **publicData**: [`PublicData`](../modules.md#publicdata)

#### Defined in

[models/TCB.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L26)

___

### quote

• `Optional` **quote**: `string`

#### Defined in

[models/TCB.ts:27](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L27)

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

[models/TCB.ts:94](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L94)

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

[models/TCB.ts:146](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L146)

___

### getEpochInfo

▸ **getEpochInfo**(): `Promise`<[`TcbEpochInfo`](../modules.md#tcbepochinfo)\>

#### Returns

`Promise`<[`TcbEpochInfo`](../modules.md#tcbepochinfo)\>

#### Defined in

[models/TCB.ts:104](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L104)

___

### getL1

▸ **getL1**(): `Promise`<`string`[]\>

Function for fetching list of TCBs from LastBlocksTable formed for veirifying

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/TCB.ts:59](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L59)

___

### getL1Marks

▸ **getL1Marks**(): `Promise`<`number`[]\>

Function for fetching the given marks for recruited TCBs from the LastBlocksTable

#### Returns

`Promise`<`number`[]\>

#### Defined in

[models/TCB.ts:75](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L75)

___

### getL2

▸ **getL2**(): `Promise`<`string`[]\>

Function for fetching list of TCBs from SuspiciousBlocksTable formed for veirifying

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/TCB.ts:67](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L67)

___

### getL2Marks

▸ **getL2Marks**(): `Promise`<`number`[]\>

Function for fetching the given marks for recruited TCBs from the SuspiciousBlocksTable

#### Returns

`Promise`<`number`[]\>

#### Defined in

[models/TCB.ts:83](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L83)

___

### getOwnMarks

▸ **getOwnMarks**(): `Promise`<{ `negative`: `number` ; `positive`: `number`  }\>

Function for fetching marks of TCB (from Consensus)

#### Returns

`Promise`<{ `negative`: `number` ; `positive`: `number`  }\>

#### Defined in

[models/TCB.ts:112](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L112)

___

### getPublicData

▸ **getPublicData**(): `Promise`<[`PublicData`](../modules.md#publicdata)\>

Function for fetching used TCB data

#### Returns

`Promise`<[`PublicData`](../modules.md#publicdata)\>

#### Defined in

[models/TCB.ts:122](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L122)

___

### getQuote

▸ **getQuote**(): `Promise`<`string`\>

Function for fetching stored TCB data

#### Returns

`Promise`<`string`\>

#### Defined in

[models/TCB.ts:135](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L135)

___

### needL1toCompleted

▸ **needL1toCompleted**(): `Promise`<`number`\>

Function for fetching number of TCB's to request for verifying from LastBlocksTable

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TCB.ts:41](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L41)

___

### needL2toCompleted

▸ **needL2toCompleted**(): `Promise`<`number`\>

Function for fetching number of TCB's to request for verifying from SuspiciousBlocksTable

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TCB.ts:50](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TCB.ts#L50)
