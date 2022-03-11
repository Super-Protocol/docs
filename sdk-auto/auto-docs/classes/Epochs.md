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

[staticModels/Epochs.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/7510059/src/staticModels/Epochs.ts#L11)

## Methods

### count

▸ `Static` **count**(): `Promise`<`number`\>

Function for fetching TCB last blocks list size

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/Epochs.ts:48](https://github.com/Super-Protocol/sp-sdk-js/blob/7510059/src/staticModels/Epochs.ts#L48)

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

[staticModels/Epochs.ts:29](https://github.com/Super-Protocol/sp-sdk-js/blob/7510059/src/staticModels/Epochs.ts#L29)

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

[staticModels/Epochs.ts:39](https://github.com/Super-Protocol/sp-sdk-js/blob/7510059/src/staticModels/Epochs.ts#L39)
