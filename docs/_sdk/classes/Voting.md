---
id: "Voting"
title: "Class: Voting"
sidebar_label: "Voting"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Voting**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Voting.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L11)

___

### ballots

▪ `Static` `Optional` **ballots**: `string`[]

#### Defined in

[staticModels/Voting.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L15)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/Voting.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L12)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/Voting.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L13)

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

[staticModels/Voting.ts:20](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L20)

___

### createBallotForAddressUpdate

▸ `Static` **createBallotForAddressUpdate**(`contractName`, `newAddress`, `transactionOptions?`): `Promise`<`void`\>

Creates ballot for replacing contract (updating address of contract in main config contract)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractName` | [`ContractName`](../enums/ContractName.md) | name of contract to replace |
| `newAddress` | `string` | address of new contract |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Voting.ts:39](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L39)

___

### createBallotForParamUpdate

▸ `Static` **createBallotForParamUpdate**(`paramName`, `newValue`, `transactionOptions?`): `Promise`<`void`\>

Creates ballot for updating params value (in main config contract)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paramName` | [`ParamName`](../enums/ParamName.md) | data of new provider |
| `newValue` | `number` | data of new provider |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/Voting.ts:58](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L58)

___

### getAllBallots

▸ `Static` **getAllBallots**(): `Promise`<`string`[]\>

Function for fetching list of all ballots addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/Voting.ts:74](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L74)

___

### getUserBallots

▸ `Static` **getUserBallots**(`userAddress`): `Promise`<`string`[]\>

Function for fetching list of all ballots for specific user addresses

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | address of user fpr fetching ballots |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/Voting.ts:85](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/staticModels/Voting.ts#L85)
