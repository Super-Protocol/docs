[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / OffersFactory

# Class: OffersFactory

## Table of contents

### Constructors

- [constructor](OffersFactory.md#constructor)

### Properties

- [address](OffersFactory.md#address)
- [offers](OffersFactory.md#offers)

### Methods

- [createOffer](OffersFactory.md#createoffer)
- [getAllOffers](OffersFactory.md#getalloffers)

## Constructors

### constructor

• **new OffersFactory**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/OffersFactory.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/staticModels/OffersFactory.ts#L17)

___

### offers

▪ `Static` `Optional` **offers**: `string`[]

#### Defined in

[staticModels/OffersFactory.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/staticModels/OffersFactory.ts#L21)

## Methods

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

[staticModels/OffersFactory.ts:50](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/staticModels/OffersFactory.ts#L50)

___

### getAllOffers

▸ `Static` **getAllOffers**(): `Promise`<`string`[]\>

Function for fetching list of all offers addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/OffersFactory.ts:37](https://github.com/Super-Protocol/sp-sdk-js/blob/bf0e5d1/src/staticModels/OffersFactory.ts#L37)
