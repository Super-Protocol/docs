---
id: "TeeOffer"
title: "Class: TeeOffer"
sidebar_label: "TeeOffer"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new TeeOffer**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/TeeOffer.ts:28](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L28)

## Properties

### address

• **address**: `string`

#### Defined in

[models/TeeOffer.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L13)

___

### contract

• `Private` **contract**: `Contract`

#### Defined in

[models/TeeOffer.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L14)

___

### disabledAfter

• `Optional` **disabledAfter**: `number`

#### Defined in

[models/TeeOffer.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L22)

___

### logger

• `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[models/TeeOffer.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L15)

___

### offerInfo

• `Optional` **offerInfo**: [`TeeOfferInfo`](../modules.md#teeofferinfo)

#### Defined in

[models/TeeOffer.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L19)

___

### origins

• `Optional` **origins**: [`Origins`](../modules.md#origins)

#### Defined in

[models/TeeOffer.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L26)

___

### provider

• `Optional` **provider**: `string`

#### Defined in

[models/TeeOffer.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L21)

___

### tcb

• `Optional` **tcb**: `string`

#### Defined in

[models/TeeOffer.ts:23](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L23)

___

### tcbAddedTime

• `Optional` **tcbAddedTime**: `number`

#### Defined in

[models/TeeOffer.ts:25](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L25)

___

### tlbAddedTime

• `Optional` **tlbAddedTime**: `number`

#### Defined in

[models/TeeOffer.ts:24](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L24)

___

### totalLocked

• `Optional` **totalLocked**: `number`

#### Defined in

[models/TeeOffer.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L18)

___

### type

• `Optional` **type**: [`OfferType`](../enums/OfferType.md)

#### Defined in

[models/TeeOffer.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L20)

___

### violationRate

• `Optional` **violationRate**: `number`

#### Defined in

[models/TeeOffer.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L17)

## Methods

### addTlb

▸ **addTlb**(`tlb`, `transactionOptions?`): `Promise`<`void`\>

Updates TLB in order info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tlb` | `string` | new TLB |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TeeOffer.ts:139](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L139)

___

### disable

▸ **disable**(`transactionOptions?`): `Promise`<`void`\>

Function for disabling TEE offer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TeeOffer.ts:193](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L193)

___

### enable

▸ **enable**(`transactionOptions?`): `Promise`<`void`\>

Function for enabling TEE offer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TeeOffer.ts:203](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L203)

___

### getDisabledAfter

▸ **getDisabledAfter**(): `Promise`<`number`\>

Function for fetching offer provider from blockchain

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:64](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L64)

___

### getInfo

▸ **getInfo**(): `Promise`<[`TeeOfferInfo`](../modules.md#teeofferinfo)\>

Function for fetching TEE offer info from blockchain

#### Returns

`Promise`<[`TeeOfferInfo`](../modules.md#teeofferinfo)\>

#### Defined in

[models/TeeOffer.ts:40](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L40)

___

### getLastTcbAddedTime

▸ **getLastTcbAddedTime**(): `Promise`<`number`\>

Function for fetching last TCB addition time for this TEE offer

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:97](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L97)

___

### getLastTlbAddedTime

▸ **getLastTlbAddedTime**(): `Promise`<`number`\>

Function for fetching last TLB addition time for this TEE offer

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:89](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L89)

___

### getOfferType

▸ **getOfferType**(): `Promise`<[`OfferType`](../enums/OfferType.md)\>

Fetch offer type from blockchain (works for TEE and Value offers)

#### Returns

`Promise`<[`OfferType`](../enums/OfferType.md)\>

#### Defined in

[models/TeeOffer.ts:56](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L56)

___

### getOrigins

▸ **getOrigins**(): `Promise`<[`Origins`](../modules.md#origins)\>

Fetch new Origins (createdDate, createdBy, modifiedDate and modifiedBy)

#### Returns

`Promise`<[`Origins`](../modules.md#origins)\>

#### Defined in

[models/TeeOffer.ts:121](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L121)

___

### getProvider

▸ **getProvider**(): `Promise`<`string`\>

Function for fetching TEE offer provider from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/TeeOffer.ts:48](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L48)

___

### getTcb

▸ **getTcb**(): `Promise`<`string`\>

Function for fetching tcb provider from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/TeeOffer.ts:72](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L72)

___

### getTlb

▸ **getTlb**(): `Promise`<`string`\>

Function for fetching TLB provider from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/TeeOffer.ts:80](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L80)

___

### getTotalLocked

▸ **getTotalLocked**(): `Promise`<`number`\>

Function for fetching amount of total locked tokens

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:113](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L113)

___

### getViolationRate

▸ **getViolationRate**(): `Promise`<`number`\>

Function for fetching violationRate for this TEE offer

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:105](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L105)

___

### setDescription

▸ **setDescription**(`description`, `transactionOptions?`): `Promise`<`void`\>

Updates description in order info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | new description |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TeeOffer.ts:163](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L163)

___

### setKeys

▸ **setKeys**(`argsPublicKey`, `transactionOptions?`): `Promise`<`void`\>

Updates argsPublicKey and argsPublicKeyAlgo in order info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `argsPublicKey` | `string` | new argsPublicKey |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TeeOffer.ts:175](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L175)

___

### setName

▸ **setName**(`name`, `transactionOptions?`): `Promise`<`void`\>

Updates name in order info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | new name |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TeeOffer.ts:151](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/TeeOffer.ts#L151)