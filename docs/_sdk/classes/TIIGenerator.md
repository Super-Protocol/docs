---
id: "TIIGenerator"
title: "Class: TIIGenerator"
sidebar_label: "TIIGenerator"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new TIIGenerator**()

## Methods

### generate

▸ `Static` **generate**(`orderId`, `resource`, `args`, `encryption`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderId` | `string` |
| `resource` | `Resource` |
| `args` | `any` |
| `encryption` | `Encryption` |

#### Returns

`Promise`<`string`\>

#### Defined in

[TIIGenerator.ts:57](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/TIIGenerator.ts#L57)

___

### generateByOffer

▸ `Static` **generateByOffer**(`offerId`, `solutionHashes`, `resource`, `args`, `encryption`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offerId` | `string` |
| `solutionHashes` | `string`[] |
| `resource` | `Resource` |
| `args` | `any` |
| `encryption` | `Encryption` |

#### Returns

`Promise`<`string`\>

#### Defined in

[TIIGenerator.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/TIIGenerator.ts#L17)

___

### getResource

▸ `Static` **getResource**<`T`\>(`tii`, `decryptionKey`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tii` | `string` |
| `decryptionKey` | `Buffer` |

#### Returns

`Promise`<`T`\>

#### Defined in

[TIIGenerator.ts:103](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/TIIGenerator.ts#L103)

___

### getTRI

▸ `Static` **getTRI**(`tii`, `decryptionKey`): `Promise`<[`TeeRunInfo`](../modules.md#teeruninfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tii` | `string` |
| `decryptionKey` | `Buffer` |

#### Returns

`Promise`<[`TeeRunInfo`](../modules.md#teeruninfo)\>

#### Defined in

[TIIGenerator.ts:91](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/TIIGenerator.ts#L91)

___

### getUrl

▸ `Static` **getUrl**(`tii`, `decryptionKey`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tii` | `string` |
| `decryptionKey` | `Buffer` |

#### Returns

`Promise`<`string`\>

#### Defined in

[TIIGenerator.ts:98](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/TIIGenerator.ts#L98)
