[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Suspicious

# Class: Suspicious

## Table of contents

### Constructors

- [constructor](Suspicious.md#constructor)

### Properties

- [address](Suspicious.md#address)

### Methods

- [count](Suspicious.md#count)
- [getRandomL2](Suspicious.md#getrandoml2)
- [listAll](Suspicious.md#listall)

## Constructors

### constructor

• **new Suspicious**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Suspicious.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/d074eb7/src/staticModels/Suspicious.ts#L10)

## Methods

### count

▸ `Static` **count**(): `Promise`<`string`[]\>

Function for fetching TCB suspect list size

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/Suspicious.ts:54](https://github.com/Super-Protocol/sp-sdk-js/blob/d074eb7/src/staticModels/Suspicious.ts#L54)

___

### getRandomL2

▸ `Static` **getRandomL2**(`tcbAddress`, `max`, `transactionOptions?`): `Promise`<`void`\>

Function generates a list of blocks to be checked in a random way

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tcbAddress` | `string` | TCB into which other TCBs are recruited from tables for verification |
| `max` | `number` | limit for getting blocks (like a batch size) |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Suspicious.ts:31](https://github.com/Super-Protocol/sp-sdk-js/blob/d074eb7/src/staticModels/Suspicious.ts#L31)

___

### listAll

▸ `Static` **listAll**(): `Promise`<`string`[]\>

Function for fetching TCB suspect list

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/Suspicious.ts:46](https://github.com/Super-Protocol/sp-sdk-js/blob/d074eb7/src/staticModels/Suspicious.ts#L46)
