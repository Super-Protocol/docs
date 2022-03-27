---
id: "OffersFactory"
title: "Class: OffersFactory"
sidebar_label: "OffersFactory"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new OffersFactory**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/OffersFactory.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OffersFactory.ts#L17)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/OffersFactory.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OffersFactory.ts#L18)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/OffersFactory.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OffersFactory.ts#L19)

___

### offers

▪ `Static` `Optional` **offers**: `string`[]

#### Defined in

[staticModels/OffersFactory.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OffersFactory.ts#L21)

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

[staticModels/OffersFactory.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OffersFactory.ts#L26)

___

### createOffer

▸ `Static` **createOffer**(`providerAuthorityAccount`, `offerInfo`, `externalId?`, `transactionOptions?`): `Promise`<`void`\>

Creates new offer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerAuthorityAccount` | `string` | address of authority account of provider |
| `offerInfo` | [`OfferInfo`](../modules.md#offerinfo) | data of new offer |
| `externalId` | `string` | - |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/OffersFactory.ts:55](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OffersFactory.ts#L55)

___

### getAllOffers

▸ `Static` **getAllOffers**(): `Promise`<`string`[]\>

Function for fetching list of all offers addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/OffersFactory.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OffersFactory.ts#L42)

___

### onOfferCreated

▸ `Static` **onOfferCreated**(`callback`): () => `void`

Function for adding event listeners on offer created event in offers factory contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`onOfferCreatedCallback`](../modules.md#onoffercreatedcallback) | function for processing created offer |

#### Returns

`fn`

unsubscribe - unsubscribe function from event

▸ (): `void`

Function for adding event listeners on offer created event in offers factory contract

##### Returns

`void`

unsubscribe - unsubscribe function from event

#### Defined in

[staticModels/OffersFactory.ts:75](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OffersFactory.ts#L75)
