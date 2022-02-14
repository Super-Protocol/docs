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

[staticModels/TeeOffersFactory.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/TeeOffersFactory.ts#L13)

___

### teeOffers

▪ `Static` `Optional` **teeOffers**: `string`[]

#### Defined in

[staticModels/TeeOffersFactory.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/TeeOffersFactory.ts#L17)

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

[staticModels/TeeOffersFactory.ts:45](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/TeeOffersFactory.ts#L45)

___

### getAllTeeOffers

▸ `Static` **getAllTeeOffers**(): `Promise`<`string`[]\>

Function for fetching list of all TEE offers addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/TeeOffersFactory.ts:33](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/TeeOffersFactory.ts#L33)
