---
id: "IStorageProvider"
title: "Interface: IStorageProvider"
sidebar_label: "IStorageProvider"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### calculateStorageDepostit

▸ **calculateStorageDepostit**(`offer`, `sizeMb`, `hours`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Offer`](../classes/Offer.md) |
| `sizeMb` | `number` |
| `hours` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

[providers/storage/IStorageProvider.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/providers/storage/IStorageProvider.ts#L18)

___

### deleteFile

▸ **deleteFile**(`remotePath`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `remotePath` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[providers/storage/IStorageProvider.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/providers/storage/IStorageProvider.ts#L15)

___

### downloadFile

▸ **downloadFile**(`remotePath`, `localPath`, `progressListener?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `remotePath` | `string` |
| `localPath` | `string` |
| `progressListener?` | (`total`: `number`, `current`: `number`) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[providers/storage/IStorageProvider.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/providers/storage/IStorageProvider.ts#L10)

___

### getSize

▸ **getSize**(`remotePath`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `remotePath` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[providers/storage/IStorageProvider.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/providers/storage/IStorageProvider.ts#L17)

___

### listObjects

▸ **listObjects**(`remotePath`): `Promise`<[`StorageObject`](../modules.md#storageobject)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `remotePath` | `string` |

#### Returns

`Promise`<[`StorageObject`](../modules.md#storageobject)[]\>

#### Defined in

[providers/storage/IStorageProvider.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/providers/storage/IStorageProvider.ts#L16)

___

### uploadFile

▸ **uploadFile**(`localPath`, `remotePath`, `progressListener?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `localPath` | `string` |
| `remotePath` | `string` |
| `progressListener?` | (`total`: `number`, `current`: `number`) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[providers/storage/IStorageProvider.ts:5](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/providers/storage/IStorageProvider.ts#L5)
