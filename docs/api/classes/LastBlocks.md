---
id: "LastBlocks"
title: "Class: LastBlocks"
sidebar_label: "LastBlocks"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new LastBlocks**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/LastBlocks.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/LastBlocks.ts#L10)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/LastBlocks.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/LastBlocks.ts#L11)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/LastBlocks.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/LastBlocks.ts#L12)

## Methods

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

[staticModels/LastBlocks.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/LastBlocks.ts#L17)

___

### count

▸ `Static` **count**(): `Promise`<`number`\>

Function for fetching TCB last blocks list size

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/LastBlocks.ts:55](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/LastBlocks.ts#L55)

___

### getRandomL1

▸ `Static` **getRandomL1**(`tcbAddress`, `transactionOptions?`): `Promise`<`void`\>

Function generates a list of blocks to be checked in a random way

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tcbAddress` | `string` | TCB into which other TCBs are recruited from tables for verification |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/LastBlocks.ts:35](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/LastBlocks.ts#L35)

___

### listAll

▸ `Static` **listAll**(): `Promise`<`string`[]\>

Function for fetching TCB last blocks list

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/LastBlocks.ts:47](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/LastBlocks.ts#L47)
