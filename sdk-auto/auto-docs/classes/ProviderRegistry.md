[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / ProviderRegistry

# Class: ProviderRegistry

## Table of contents

### Constructors

- [constructor](ProviderRegistry.md#constructor)

### Properties

- [address](ProviderRegistry.md#address)
- [providers](ProviderRegistry.md#providers)

### Methods

- [get](ProviderRegistry.md#get)
- [getAllProviders](ProviderRegistry.md#getallproviders)
- [getSecurityDeposit](ProviderRegistry.md#getsecuritydeposit)
- [onProviderRegistered](ProviderRegistry.md#onproviderregistered)
- [refillSecurityDeposit](ProviderRegistry.md#refillsecuritydeposit)
- [registerProvider](ProviderRegistry.md#registerprovider)
- [returnSecurityDeposit](ProviderRegistry.md#returnsecuritydeposit)

## Constructors

### constructor

• **new ProviderRegistry**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/ProviderRegistry.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L17)

___

### providers

▪ `Static` `Optional` **providers**: `string`[]

#### Defined in

[staticModels/ProviderRegistry.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L21)

## Methods

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

[staticModels/ProviderRegistry.ts:46](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L46)

___

### getAllProviders

▸ `Static` **getAllProviders**(): `Promise`<`string`[]\>

Function for fetching list of all providers addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/ProviderRegistry.ts:37](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L37)

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

[staticModels/ProviderRegistry.ts:54](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L54)

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

[staticModels/ProviderRegistry.ts:105](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L105)

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

[staticModels/ProviderRegistry.ts:82](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L82)

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

[staticModels/ProviderRegistry.ts:64](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L64)

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

[staticModels/ProviderRegistry.ts:94](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/ProviderRegistry.ts#L94)
