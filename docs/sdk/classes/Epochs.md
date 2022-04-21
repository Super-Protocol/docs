---
id: "Epochs"
title: "Class: Epochs"
sidebar_label: "Epochs"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Epochs**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Epochs.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Epochs.ts#L10)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/Epochs.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Epochs.ts#L11)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/Epochs.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Epochs.ts#L12)

## Methods

### checkInit

▸ `Static` `Private` **checkInit**(): `void`

Checks if contract has been initialized, if not - initialize contract

#### Returns

`void`

#### Defined in

[staticModels/Epochs.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Epochs.ts#L17)

___

### count

▸ `Static` **count**(): `Promise`<`number`\>

Function for fetching TCB last blocks list size

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/Epochs.ts:47](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Epochs.ts#L47)

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

[staticModels/Epochs.ts:28](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Epochs.ts#L28)

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

[staticModels/Epochs.ts:38](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Epochs.ts#L38)
