---
id: "Suspicious"
title: "Class: Suspicious"
sidebar_label: "Suspicious"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Suspicious**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Suspicious.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Suspicious.ts#L10)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/Suspicious.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Suspicious.ts#L11)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/Suspicious.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Suspicious.ts#L12)

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

[staticModels/Suspicious.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Suspicious.ts#L17)

___

### count

▸ `Static` **count**(): `Promise`<`string`[]\>

Function for fetching TCB suspect list size

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/Suspicious.ts:59](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Suspicious.ts#L59)

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

[staticModels/Suspicious.ts:36](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Suspicious.ts#L36)

___

### listAll

▸ `Static` **listAll**(): `Promise`<`string`[]\>

Function for fetching TCB suspect list

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/Suspicious.ts:51](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Suspicious.ts#L51)
