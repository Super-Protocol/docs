[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Staking

# Class: Staking

## Table of contents

### Constructors

- [constructor](Staking.md#constructor)

### Properties

- [address](Staking.md#address)

### Methods

- [getLockInfo](Staking.md#getlockinfo)
- [getStakeInfo](Staking.md#getstakeinfo)
- [stake](Staking.md#stake)

## Constructors

### constructor

• **new Staking**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Staking.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/Staking.ts#L13)

## Methods

### getLockInfo

▸ `Static` **getLockInfo**(`ownerAddress`, `contractName`): `Promise`<[`LockInfo`](../modules.md#lockinfo)\>

Fetching locked tokens info by owner address and contract name from blockchain

#### Parameters

| Name | Type |
| :------ | :------ |
| `ownerAddress` | `string` |
| `contractName` | [`ContractName`](../enums/ContractName.md) |

#### Returns

`Promise`<[`LockInfo`](../modules.md#lockinfo)\>

#### Defined in

[staticModels/Staking.ts:41](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/Staking.ts#L41)

___

### getStakeInfo

▸ `Static` **getStakeInfo**(`ownerAddress`): `Promise`<[`StakeInfo`](../modules.md#stakeinfo)\>

Fetching stake info by owner address from blockchain

#### Parameters

| Name | Type |
| :------ | :------ |
| `ownerAddress` | `string` |

#### Returns

`Promise`<[`StakeInfo`](../modules.md#stakeinfo)\>

#### Defined in

[staticModels/Staking.ts:31](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/Staking.ts#L31)

___

### stake

▸ `Static` **stake**(`amount`, `transactionOptions?`): `Promise`<`void`\>

Stakes tokens

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | number of tokens to be staked |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Staking.ts:53](https://github.com/Super-Protocol/sp-sdk-js/blob/4b1d731/src/staticModels/Staking.ts#L53)
