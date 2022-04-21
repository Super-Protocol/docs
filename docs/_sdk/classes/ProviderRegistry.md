---
id: "ProviderRegistry"
title: "Class: ProviderRegistry"
sidebar_label: "ProviderRegistry"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ProviderRegistry**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/ProviderRegistry.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L17)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/ProviderRegistry.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L18)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/ProviderRegistry.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L19)

___

### providers

▪ `Static` `Optional` **providers**: `string`[]

#### Defined in

[staticModels/ProviderRegistry.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L21)

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

[staticModels/ProviderRegistry.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L26)

___

### get

▸ `Static` **get**(`providerAuthority`): `Promise`<`string`\>

Fetch provider address by provider authority account

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerAuthority` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[staticModels/ProviderRegistry.ts:51](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L51)

___

### getAllProviders

▸ `Static` **getAllProviders**(): `Promise`<`string`[]\>

Function for fetching list of all providers addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/ProviderRegistry.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L42)

___

### getSecurityDeposit

▸ `Static` **getSecurityDeposit**(`providerAuthority`): `Promise`<`number`\>

Fetch provider security deposit by provider authority account

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerAuthority` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/ProviderRegistry.ts:59](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L59)

___

### onProviderRegistered

▸ `Static` **onProviderRegistered**(`callback`): () => `void`

Function for adding event listeners on provider registered event in provider registry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`onProviderRegisteredCallback`](../modules.md#onproviderregisteredcallback) | function for processing new provider |

#### Returns

`fn`

unsubscribe - unsubscribe function from event

▸ (): `void`

Function for adding event listeners on provider registered event in provider registry

##### Returns

`void`

unsubscribe - unsubscribe function from event

#### Defined in

[staticModels/ProviderRegistry.ts:112](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L112)

___

### refillSecurityDeposit

▸ `Static` **refillSecurityDeposit**(`amount`, `transactionOptions?`): `Promise`<`void`\>

Refills security deposit for provider
Call this function with provider authority account (in transactionOptions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | amount of additional tokens |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/ProviderRegistry.ts:89](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L89)

___

### registerProvider

▸ `Static` **registerProvider**(`providerInfo`, `externalId?`, `transactionOptions?`): `Promise`<`void`\>

Reg new provider

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerInfo` | [`ProviderInfo`](../modules.md#providerinfo) | data of new provider |
| `externalId` | `string` | - |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/ProviderRegistry.ts:69](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L69)

___

### returnSecurityDeposit

▸ `Static` **returnSecurityDeposit**(`amount`, `transactionOptions?`): `Promise`<`void`\>

Return security deposit for provider
Call this function with provider authority account (in transactionOptions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | amount of tokens to return |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/ProviderRegistry.ts:101](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/ProviderRegistry.ts#L101)
