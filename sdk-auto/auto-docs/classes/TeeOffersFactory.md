[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / TeeOffersFactory

# Class: TeeOffersFactory

## Table of contents

### Constructors

- [constructor](TeeOffersFactory.md#constructor)

### Properties

- [address](TeeOffersFactory.md#address)
- [teeOffers](TeeOffersFactory.md#teeoffers)

### Methods

- [createTeeOffer](TeeOffersFactory.md#createteeoffer)
- [getAllTeeOffers](TeeOffersFactory.md#getallteeoffers)

## Constructors

### constructor

• **new TeeOffersFactory**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/TeeOffersFactory.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/f252afa/src/staticModels/TeeOffersFactory.ts#L17)

___

### teeOffers

▪ `Static` `Optional` **teeOffers**: `string`[]

#### Defined in

[staticModels/TeeOffersFactory.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/f252afa/src/staticModels/TeeOffersFactory.ts#L21)

## Methods

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

[staticModels/TeeOffersFactory.ts:49](https://github.com/Super-Protocol/sp-sdk-js/blob/f252afa/src/staticModels/TeeOffersFactory.ts#L49)

___

### getAllTeeOffers

▸ `Static` **getAllTeeOffers**(): `Promise`<`string`[]\>

Function for fetching list of all TEE offers addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/TeeOffersFactory.ts:37](https://github.com/Super-Protocol/sp-sdk-js/blob/f252afa/src/staticModels/TeeOffersFactory.ts#L37)
