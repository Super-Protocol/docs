---
id: "Superpro"
title: "Class: Superpro"
sidebar_label: "Superpro"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Superpro**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Superpro.ts:9](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Superpro.ts#L9)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/Superpro.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Superpro.ts#L10)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/Superpro.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Superpro.ts#L11)

## Methods

### checkInit

▸ `Static` `Private` **checkInit**(): `void`

Checks if contract has been initialized, if not - initialize contract

#### Returns

`void`

#### Defined in

[staticModels/Superpro.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Superpro.ts#L16)

___

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

[staticModels/Superpro.ts:30](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Superpro.ts#L30)

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

[staticModels/Superpro.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Superpro.ts#L42)
