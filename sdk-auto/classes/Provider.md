[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Provider

# Class: Provider

## Table of contents

### Constructors

- [constructor](Provider.md#constructor)

### Properties

- [address](Provider.md#address)
- [authority](Provider.md#authority)
- [origins](Provider.md#origins)
- [providerInfo](Provider.md#providerinfo)
- [teeOffers](Provider.md#teeoffers)
- [valueOffers](Provider.md#valueoffers)
- [violationRate](Provider.md#violationrate)

### Methods

- [getAuthority](Provider.md#getauthority)
- [getInfo](Provider.md#getinfo)
- [getOrigins](Provider.md#getorigins)
- [getTeeOffers](Provider.md#getteeoffers)
- [getValueOffers](Provider.md#getvalueoffers)
- [getViolationRate](Provider.md#getviolationrate)

## Constructors

### constructor

• **new Provider**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/Provider.ts:23](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L23)

## Properties

### address

• **address**: `string`

#### Defined in

[models/Provider.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L12)

___

### authority

• `Optional` **authority**: `string`

#### Defined in

[models/Provider.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L18)

___

### origins

• `Optional` **origins**: `Origins`

#### Defined in

[models/Provider.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L21)

___

### providerInfo

• `Optional` **providerInfo**: [`ProviderInfo`](../modules.md#providerinfo)

#### Defined in

[models/Provider.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L16)

___

### teeOffers

• `Optional` **teeOffers**: `string`[]

#### Defined in

[models/Provider.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L20)

___

### valueOffers

• `Optional` **valueOffers**: `string`[]

#### Defined in

[models/Provider.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L19)

___

### violationRate

• `Optional` **violationRate**: `number`

#### Defined in

[models/Provider.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L17)

## Methods

### getAuthority

▸ **getAuthority**(): `Promise`<`string`\>

Function for fetching provider authority address from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/Provider.ts:43](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L43)

___

### getInfo

▸ **getInfo**(): `Promise`<[`ProviderInfo`](../modules.md#providerinfo)\>

Function for fetching provider info from blockchain

#### Returns

`Promise`<[`ProviderInfo`](../modules.md#providerinfo)\>

#### Defined in

[models/Provider.ts:35](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L35)

___

### getOrigins

▸ **getOrigins**(): `Promise`<`Origins`\>

Fetch new Origins (createdDate, createdBy, modifiedDate and modifiedBy)

#### Returns

`Promise`<`Origins`\>

#### Defined in

[models/Provider.ts:75](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L75)

___

### getTeeOffers

▸ **getTeeOffers**(): `Promise`<`string`[]\>

Function for fetching all TEE offers for this provider

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/Provider.ts:59](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L59)

___

### getValueOffers

▸ **getValueOffers**(): `Promise`<`string`[]\>

Function for fetching all value offers for this provider

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/Provider.ts:51](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L51)

___

### getViolationRate

▸ **getViolationRate**(): `Promise`<`number`\>

Function for fetching violationRate for this provider

#### Returns

`Promise`<`number`\>

#### Defined in

[models/Provider.ts:67](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Provider.ts#L67)
