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

[staticModels/ProviderRegistry.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/ProviderRegistry.ts#L12)

___

### providers

▪ `Static` `Optional` **providers**: `string`[]

#### Defined in

[staticModels/ProviderRegistry.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/ProviderRegistry.ts#L16)

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

[staticModels/ProviderRegistry.ts:41](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/ProviderRegistry.ts#L41)

___

### getAllProviders

▸ `Static` **getAllProviders**(): `Promise`<`string`[]\>

Function for fetching list of all providers addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/ProviderRegistry.ts:32](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/ProviderRegistry.ts#L32)

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

[staticModels/ProviderRegistry.ts:49](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/ProviderRegistry.ts#L49)

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

[staticModels/ProviderRegistry.ts:75](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/ProviderRegistry.ts#L75)

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

[staticModels/ProviderRegistry.ts:59](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/ProviderRegistry.ts#L59)

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

[staticModels/ProviderRegistry.ts:87](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/ProviderRegistry.ts#L87)
