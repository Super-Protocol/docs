[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Superpro

# Class: Superpro

## Table of contents

### Constructors

- [constructor](Superpro.md#constructor)

### Properties

- [address](Superpro.md#address)

### Methods

- [getContractAddress](Superpro.md#getcontractaddress)
- [getParam](Superpro.md#getparam)

## Constructors

### constructor

• **new Superpro**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Superpro.ts:9](https://github.com/Super-Protocol/sp-sdk-js/blob/3dbd7f6/src/staticModels/Superpro.ts#L9)

## Methods

### getContractAddress

▸ `Static` **getContractAddress**(`name`): `Promise`<`string`\>

Fetching address of contract by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`ContractName`](../enums/ContractName.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[staticModels/Superpro.ts:30](https://github.com/Super-Protocol/sp-sdk-js/blob/3dbd7f6/src/staticModels/Superpro.ts#L30)

___

### getParam

▸ `Static` **getParam**(`name`): `Promise`<`number`\>

Fetching config parameter value by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`ParamName`](../enums/ParamName.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/Superpro.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/3dbd7f6/src/staticModels/Superpro.ts#L42)
