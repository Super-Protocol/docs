[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / SuperproToken

# Class: SuperproToken

## Table of contents

### Constructors

- [constructor](SuperproToken.md#constructor)

### Properties

- [address](SuperproToken.md#address)

### Methods

- [approve](SuperproToken.md#approve)
- [balanceOf](SuperproToken.md#balanceof)
- [transfer](SuperproToken.md#transfer)

## Constructors

### constructor

• **new SuperproToken**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/SuperproToken.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/SuperproToken.ts#L10)

## Methods

### approve

▸ `Static` **approve**(`address`, `amount`, `transactionOptions?`): `Promise`<`void`\>

Approve tokens for specific address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | address for approval |
| `amount` | `number` | number of tokens to be approved |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/SuperproToken.ts:56](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/SuperproToken.ts#L56)

___

### balanceOf

▸ `Static` **balanceOf**(`address`): `Promise`<`number`\>

Fetching balance of SuperProtocol tokens on address

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/SuperproToken.ts:33](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/SuperproToken.ts#L33)

___

### transfer

▸ `Static` **transfer**(`to`, `amount`, `transactionOptions?`): `Promise`<`number`\>

Transfers specific amount of SP tokens to specific address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `string` | address to revive tokens |
| `amount` | `number` | amount of tokens to transfer |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/SuperproToken.ts:44](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/SuperproToken.ts#L44)
