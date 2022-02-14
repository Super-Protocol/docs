[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Offer

# Class: Offer

## Table of contents

### Constructors

- [constructor](Offer.md#constructor)

### Properties

- [address](Offer.md#address)
- [offerInfo](Offer.md#offerinfo)
- [origins](Offer.md#origins)
- [provider](Offer.md#provider)
- [providerAuthority](Offer.md#providerauthority)
- [type](Offer.md#type)

### Methods

- [disable](Offer.md#disable)
- [enable](Offer.md#enable)
- [getInfo](Offer.md#getinfo)
- [getOfferType](Offer.md#getoffertype)
- [getOrigins](Offer.md#getorigins)
- [getProvider](Offer.md#getprovider)
- [getProviderAuthority](Offer.md#getproviderauthority)
- [isRestrictedByOfferType](Offer.md#isrestrictedbyoffertype)
- [isRestrictionsPermitThatOffer](Offer.md#isrestrictionspermitthatoffer)

## Constructors

### constructor

• **new Offer**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/Offer.ts:23](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L23)

## Properties

### address

• **address**: `string`

#### Defined in

[models/Offer.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L13)

___

### offerInfo

• `Optional` **offerInfo**: [`OfferInfo`](../modules.md#offerinfo)

#### Defined in

[models/Offer.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L17)

___

### origins

• `Optional` **origins**: `Origins`

#### Defined in

[models/Offer.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L21)

___

### provider

• `Optional` **provider**: `string`

#### Defined in

[models/Offer.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L18)

___

### providerAuthority

• `Optional` **providerAuthority**: `string`

#### Defined in

[models/Offer.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L20)

___

### type

• `Optional` **type**: [`OfferType`](../enums/OfferType.md)

#### Defined in

[models/Offer.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L19)

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

[models/Offer.ts:89](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L89)

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

[models/Offer.ts:99](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L99)

___

### getInfo

▸ **getInfo**(): `Promise`<[`OfferInfo`](../modules.md#offerinfo)\>

Function for fetching offer info from blockchain

#### Returns

`Promise`<[`OfferInfo`](../modules.md#offerinfo)\>

#### Defined in

[models/Offer.ts:35](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L35)

___

### getOfferType

▸ **getOfferType**(): `Promise`<[`OfferType`](../enums/OfferType.md)\>

Fetch offer type from blockchain (works for TEE and Value offers)

#### Returns

`Promise`<[`OfferType`](../enums/OfferType.md)\>

#### Defined in

[models/Offer.ts:55](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L55)

___

### getOrigins

▸ **getOrigins**(): `Promise`<`Origins`\>

Fetch new Origins (createdDate, createdBy, modifiedDate and modifiedBy)

#### Returns

`Promise`<`Origins`\>

#### Defined in

[models/Offer.ts:71](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L71)

___

### getProvider

▸ **getProvider**(): `Promise`<`string`\>

Function for fetching offer provider from blockchain (works for TEE and Value offers)

#### Returns

`Promise`<`string`\>

#### Defined in

[models/Offer.ts:47](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L47)

___

### getProviderAuthority

▸ **getProviderAuthority**(): `Promise`<`string`\>

Function for fetching TEE offer provider authority account from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/Offer.ts:63](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L63)

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

[models/Offer.ts:119](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L119)

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

[models/Offer.ts:109](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Offer.ts#L109)
