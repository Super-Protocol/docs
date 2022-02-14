[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / TeeOffer

# Class: TeeOffer

## Table of contents

### Constructors

- [constructor](TeeOffer.md#constructor)

### Properties

- [address](TeeOffer.md#address)
- [disabledAfter](TeeOffer.md#disabledafter)
- [offerInfo](TeeOffer.md#offerinfo)
- [origins](TeeOffer.md#origins)
- [provider](TeeOffer.md#provider)
- [tcb](TeeOffer.md#tcb)
- [tcbAddedTime](TeeOffer.md#tcbaddedtime)
- [tlbAddedTime](TeeOffer.md#tlbaddedtime)
- [totalLocked](TeeOffer.md#totallocked)
- [type](TeeOffer.md#type)
- [violationRate](TeeOffer.md#violationrate)

### Methods

- [addTlb](TeeOffer.md#addtlb)
- [disable](TeeOffer.md#disable)
- [enable](TeeOffer.md#enable)
- [getDisabledAfter](TeeOffer.md#getdisabledafter)
- [getInfo](TeeOffer.md#getinfo)
- [getLastTcbAddedTime](TeeOffer.md#getlasttcbaddedtime)
- [getLastTlbAddedTime](TeeOffer.md#getlasttlbaddedtime)
- [getOfferType](TeeOffer.md#getoffertype)
- [getOrigins](TeeOffer.md#getorigins)
- [getProvider](TeeOffer.md#getprovider)
- [getTcb](TeeOffer.md#gettcb)
- [getTlb](TeeOffer.md#gettlb)
- [getTotalLocked](TeeOffer.md#gettotallocked)
- [getViolationRate](TeeOffer.md#getviolationrate)
- [setDescription](TeeOffer.md#setdescription)
- [setKeys](TeeOffer.md#setkeys)
- [setName](TeeOffer.md#setname)

## Constructors

### constructor

• **new TeeOffer**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/TeeOffer.ts:29](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L29)

## Properties

### address

• **address**: `string`

#### Defined in

[models/TeeOffer.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L14)

___

### disabledAfter

• `Optional` **disabledAfter**: `number`

#### Defined in

[models/TeeOffer.ts:23](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L23)

___

### offerInfo

• `Optional` **offerInfo**: [`TeeOfferInfo`](../modules.md#teeofferinfo)

#### Defined in

[models/TeeOffer.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L20)

___

### origins

• `Optional` **origins**: `Origins`

#### Defined in

[models/TeeOffer.ts:27](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L27)

___

### provider

• `Optional` **provider**: `string`

#### Defined in

[models/TeeOffer.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L22)

___

### tcb

• `Optional` **tcb**: `string`

#### Defined in

[models/TeeOffer.ts:24](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L24)

___

### tcbAddedTime

• `Optional` **tcbAddedTime**: `number`

#### Defined in

[models/TeeOffer.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L26)

___

### tlbAddedTime

• `Optional` **tlbAddedTime**: `number`

#### Defined in

[models/TeeOffer.ts:25](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L25)

___

### totalLocked

• `Optional` **totalLocked**: `number`

#### Defined in

[models/TeeOffer.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L19)

___

### type

• `Optional` **type**: [`OfferType`](../enums/OfferType.md)

#### Defined in

[models/TeeOffer.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L21)

___

### violationRate

• `Optional` **violationRate**: `number`

#### Defined in

[models/TeeOffer.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L18)

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

[models/TeeOffer.ts:140](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L140)

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

[models/TeeOffer.ts:197](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L197)

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

[models/TeeOffer.ts:207](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L207)

___

### getDisabledAfter

▸ **getDisabledAfter**(): `Promise`<`number`\>

Function for fetching offer provider from blockchain

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:65](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L65)

___

### getInfo

▸ **getInfo**(): `Promise`<[`TeeOfferInfo`](../modules.md#teeofferinfo)\>

Function for fetching TEE offer info from blockchain

#### Returns

`Promise`<[`TeeOfferInfo`](../modules.md#teeofferinfo)\>

#### Defined in

[models/TeeOffer.ts:41](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L41)

___

### getLastTcbAddedTime

▸ **getLastTcbAddedTime**(): `Promise`<`number`\>

Function for fetching last TCB addition time for this TEE offer

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:98](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L98)

___

### getLastTlbAddedTime

▸ **getLastTlbAddedTime**(): `Promise`<`number`\>

Function for fetching last TLB addition time for this TEE offer

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:90](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L90)

___

### getOfferType

▸ **getOfferType**(): `Promise`<[`OfferType`](../enums/OfferType.md)\>

Fetch offer type from blockchain (works for TEE and Value offers)

#### Returns

`Promise`<[`OfferType`](../enums/OfferType.md)\>

#### Defined in

[models/TeeOffer.ts:57](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L57)

___

### getOrigins

▸ **getOrigins**(): `Promise`<`Origins`\>

Fetch new Origins (createdDate, createdBy, modifiedDate and modifiedBy)

#### Returns

`Promise`<`Origins`\>

#### Defined in

[models/TeeOffer.ts:122](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L122)

___

### getProvider

▸ **getProvider**(): `Promise`<`string`\>

Function for fetching TEE offer provider from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/TeeOffer.ts:49](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L49)

___

### getTcb

▸ **getTcb**(): `Promise`<`string`\>

Function for fetching tcb provider from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/TeeOffer.ts:73](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L73)

___

### getTlb

▸ **getTlb**(): `Promise`<`string`\>

Function for fetching TLB provider from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/TeeOffer.ts:81](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L81)

___

### getTotalLocked

▸ **getTotalLocked**(): `Promise`<`number`\>

Function for fetching amount of total locked tokens

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:114](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L114)

___

### getViolationRate

▸ **getViolationRate**(): `Promise`<`number`\>

Function for fetching violationRate for this TEE offer

#### Returns

`Promise`<`number`\>

#### Defined in

[models/TeeOffer.ts:106](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L106)

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

[models/TeeOffer.ts:164](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L164)

___

### setKeys

▸ **setKeys**(`argsPublicKey`, `argsPublicKeyAlgo`, `transactionOptions?`): `Promise`<`void`\>

Updates argsPublicKey and argsPublicKeyAlgo in order info

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `argsPublicKey` | `string` | new argsPublicKey |
| `argsPublicKeyAlgo` | `string` | new argsPublicKeyAlgo |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/TeeOffer.ts:177](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L177)

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

[models/TeeOffer.ts:152](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/TeeOffer.ts#L152)
