---
id: "Staking"
title: "Class: Staking"
sidebar_label: "Staking"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Staking**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Staking.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Staking.ts#L12)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/Staking.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Staking.ts#L13)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/Staking.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Staking.ts#L14)

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

[staticModels/Staking.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Staking.ts#L19)

___

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

[staticModels/Staking.ts:45](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Staking.ts#L45)

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

[staticModels/Staking.ts:35](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Staking.ts#L35)

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

[staticModels/Staking.ts:57](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Staking.ts#L57)
