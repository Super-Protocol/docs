---
id: "TeeOffersFactory"
title: "Class: TeeOffersFactory"
sidebar_label: "TeeOffersFactory"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new TeeOffersFactory**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/TeeOffersFactory.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/TeeOffersFactory.ts#L17)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/TeeOffersFactory.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/TeeOffersFactory.ts#L18)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/TeeOffersFactory.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/TeeOffersFactory.ts#L19)

___

### teeOffers

▪ `Static` `Optional` **teeOffers**: `string`[]

#### Defined in

[staticModels/TeeOffersFactory.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/TeeOffersFactory.ts#L21)

## Methods

### checkInit

▸ `Static` `Private` **checkInit**(`transactionOptions?`): `Contract`

Checks if contract has been initialized, if not - initialize contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionOptions?` | `TransactionOptions` |

#### Returns

`Contract`

#### Defined in

[staticModels/TeeOffersFactory.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/TeeOffersFactory.ts#L26)

___

### createTeeOffer

▸ `Static` **createTeeOffer**(`providerAuthorityAccount`, `teeOfferInfo`, `externalId?`, `transactionOptions?`): `Promise`<`void`\>

Creates new TEE offer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerAuthorityAccount` | `string` | address of authority account of provider |
| `teeOfferInfo` | [`TeeOfferInfo`](../modules.md#teeofferinfo) | data of new TEE offer |
| `externalId` | `string` | - |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/TeeOffersFactory.ts:54](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/TeeOffersFactory.ts#L54)

___

### getAllTeeOffers

▸ `Static` **getAllTeeOffers**(): `Promise`<`string`[]\>

Function for fetching list of all TEE offers addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/TeeOffersFactory.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/TeeOffersFactory.ts#L42)

___

### onTeeOfferCreated

▸ `Static` **onTeeOfferCreated**(`callback`): () => `void`

Function for adding event listeners on TEE offer created event in TEE offers factory contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`onTeeOfferCreatedCallback`](../modules.md#onteeoffercreatedcallback) | function for processing created TEE offer |

#### Returns

`fn`

unsubscribe - unsubscribe function from event

▸ (): `void`

Function for adding event listeners on TEE offer created event in TEE offers factory contract

##### Returns

`void`

unsubscribe - unsubscribe function from event

#### Defined in

[staticModels/TeeOffersFactory.ts:75](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/TeeOffersFactory.ts#L75)
