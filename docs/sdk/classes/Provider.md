---
id: "Provider"
title: "Class: Provider"
sidebar_label: "Provider"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Provider**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/Provider.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L22)

## Properties

### address

• **address**: `string`

#### Defined in

[models/Provider.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L11)

___

### authority

• `Optional` **authority**: `string`

#### Defined in

[models/Provider.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L17)

___

### contract

• `Private` **contract**: `Contract`

#### Defined in

[models/Provider.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L12)

___

### logger

• `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[models/Provider.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L13)

___

### origins

• `Optional` **origins**: [`Origins`](../modules.md#origins)

#### Defined in

[models/Provider.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L20)

___

### providerInfo

• `Optional` **providerInfo**: [`ProviderInfo`](../modules.md#providerinfo)

#### Defined in

[models/Provider.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L15)

___

### teeOffers

• `Optional` **teeOffers**: `string`[]

#### Defined in

[models/Provider.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L19)

___

### valueOffers

• `Optional` **valueOffers**: `string`[]

#### Defined in

[models/Provider.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L18)

___

### violationRate

• `Optional` **violationRate**: `number`

#### Defined in

[models/Provider.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L16)

## Methods

### getAuthority

▸ **getAuthority**(): `Promise`<`string`\>

Function for fetching provider authority address from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/Provider.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L42)

___

### getInfo

▸ **getInfo**(): `Promise`<[`ProviderInfo`](../modules.md#providerinfo)\>

Function for fetching provider info from blockchain

#### Returns

`Promise`<[`ProviderInfo`](../modules.md#providerinfo)\>

#### Defined in

[models/Provider.ts:34](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L34)

___

### getOrigins

▸ **getOrigins**(): `Promise`<[`Origins`](../modules.md#origins)\>

Fetch new Origins (createdDate, createdBy, modifiedDate and modifiedBy)

#### Returns

`Promise`<[`Origins`](../modules.md#origins)\>

#### Defined in

[models/Provider.ts:74](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L74)

___

### getTeeOffers

▸ **getTeeOffers**(): `Promise`<`string`[]\>

Function for fetching all TEE offers for this provider

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/Provider.ts:58](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L58)

___

### getValueOffers

▸ **getValueOffers**(): `Promise`<`string`[]\>

Function for fetching all value offers for this provider

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/Provider.ts:50](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L50)

___

### getViolationRate

▸ **getViolationRate**(): `Promise`<`number`\>

Function for fetching violationRate for this provider

#### Returns

`Promise`<`number`\>

#### Defined in

[models/Provider.ts:66](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/models/Provider.ts#L66)