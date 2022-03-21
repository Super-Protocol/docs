[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Epochs

# Class: Epochs

## Table of contents

### Constructors

- [constructor](Epochs.md#constructor)

### Properties

- [address](Epochs.md#address)

### Methods

- [count](Epochs.md#count)
- [getEpoch](Epochs.md#getepoch)
- [getReward](Epochs.md#getreward)

## Constructors

### constructor

• **new Epochs**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Epochs.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/Epochs.ts#L10)

## Methods

### count

▸ `Static` **count**(): `Promise`<`number`\>

Function for fetching TCB last blocks list size

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/Epochs.ts:47](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/Epochs.ts#L47)

___

### getEpoch

▸ `Static` **getEpoch**(`index`): `Promise`<[`Epoch`](../modules.md#epoch)\>

Function for fetching epoch info by index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Promise`<[`Epoch`](../modules.md#epoch)\>

#### Defined in

[staticModels/Epochs.ts:28](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/Epochs.ts#L28)

___

### getReward

▸ `Static` **getReward**(`tcbAddress`): `Promise`<`number`\>

Function for fetching TCB reward by epoch

#### Parameters

| Name | Type |
| :------ | :------ |
| `tcbAddress` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/Epochs.ts:38](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/Epochs.ts#L38)
