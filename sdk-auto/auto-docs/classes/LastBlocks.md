[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / LastBlocks

# Class: LastBlocks

## Table of contents

### Constructors

- [constructor](LastBlocks.md#constructor)

### Properties

- [address](LastBlocks.md#address)

### Methods

- [count](LastBlocks.md#count)
- [getRandomL1](LastBlocks.md#getrandoml1)
- [listAll](LastBlocks.md#listall)

## Constructors

### constructor

• **new LastBlocks**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/LastBlocks.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/94e36db/src/staticModels/LastBlocks.ts#L10)

## Methods

### count

▸ `Static` **count**(): `Promise`<`number`\>

Function for fetching TCB last blocks list size

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/LastBlocks.ts:47](https://github.com/Super-Protocol/sp-sdk-js/blob/94e36db/src/staticModels/LastBlocks.ts#L47)

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

[staticModels/LastBlocks.ts:30](https://github.com/Super-Protocol/sp-sdk-js/blob/94e36db/src/staticModels/LastBlocks.ts#L30)

___

### listAll

▸ `Static` **listAll**(): `Promise`<`string`[]\>

Function for fetching TCB last blocks list

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/LastBlocks.ts:39](https://github.com/Super-Protocol/sp-sdk-js/blob/94e36db/src/staticModels/LastBlocks.ts#L39)
