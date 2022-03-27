---
id: "Offer"
title: "Class: Offer"
sidebar_label: "Offer"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Offer**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/Offer.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L22)

## Properties

### address

• **address**: `string`

#### Defined in

[models/Offer.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L12)

___

### contract

• `Private` **contract**: `Contract`

#### Defined in

[models/Offer.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Offer.ts#L13)

___

### logger

• `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[models/Offer.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Offer.ts#L14)

___

### offerInfo

• `Optional` **offerInfo**: [`OfferInfo`](../modules.md#offerinfo)

#### Defined in

[models/Offer.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L16)

___

### origins

• `Optional` **origins**: [`Origins`](../modules.md#origins)

#### Defined in

[models/Offer.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L20)

___

### provider

• `Optional` **provider**: `string`

#### Defined in

[models/Offer.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L17)

___

### providerAuthority

• `Optional` **providerAuthority**: `string`

#### Defined in

[models/Offer.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L19)

___

### type

• `Optional` **type**: [`OfferType`](../enums/OfferType.md)

#### Defined in

[models/Offer.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L18)

## Methods

### disable

▸ **disable**(`transactionOptions?`): `Promise`<`void`\>

Function for disabling offer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/Offer.ts:84](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L84)

___

### enable

▸ **enable**(`transactionOptions?`): `Promise`<`void`\>

Function for enabling offer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/Offer.ts:94](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L94)

___

### getInfo

▸ **getInfo**(): `Promise`<[`OfferInfo`](../modules.md#offerinfo)\>

Function for fetching offer info from blockchain

#### Returns

`Promise`<[`OfferInfo`](../modules.md#offerinfo)\>

#### Defined in

[models/Offer.ts:34](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L34)

___

### getOfferType

▸ **getOfferType**(): `Promise`<[`OfferType`](../enums/OfferType.md)\>

Fetch offer type from blockchain (works for TEE and Value offers)

#### Returns

`Promise`<[`OfferType`](../enums/OfferType.md)\>

#### Defined in

[models/Offer.ts:50](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L50)

___

### getOrigins

▸ **getOrigins**(): `Promise`<[`Origins`](../modules.md#origins)\>

Fetch new Origins (createdDate, createdBy, modifiedDate and modifiedBy)

#### Returns

`Promise`<[`Origins`](../modules.md#origins)\>

#### Defined in

[models/Offer.ts:66](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L66)

___

### getProvider

▸ **getProvider**(): `Promise`<`string`\>

Function for fetching offer provider from blockchain (works for TEE and Value offers)

#### Returns

`Promise`<`string`\>

#### Defined in

[models/Offer.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L42)

___

### getProviderAuthority

▸ **getProviderAuthority**(): `Promise`<`string`\>

Function for fetching TEE offer provider authority account from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/Offer.ts:58](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L58)

___

### isRestrictedByOfferType

▸ **isRestrictedByOfferType**(`type`): `Promise`<`any`\>

Checks if this offer contains restrictions of a certain type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`OfferType`](../enums/OfferType.md) | address of offer what needs to be checked |

#### Returns

`Promise`<`any`\>

#### Defined in

[models/Offer.ts:114](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L114)

___

### isRestrictionsPermitThatOffer

▸ **isRestrictionsPermitThatOffer**(`offerAddress`): `Promise`<`any`\>

Checks if offer (offerAddress) match restrictions in this offer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerAddress` | `string` | address of offer what needs to be checked |

#### Returns

`Promise`<`any`\>

#### Defined in

[models/Offer.ts:104](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Offer.ts#L104)
