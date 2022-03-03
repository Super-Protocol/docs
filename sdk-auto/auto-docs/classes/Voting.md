[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Voting

# Class: Voting

## Table of contents

### Constructors

- [constructor](Voting.md#constructor)

### Properties

- [address](Voting.md#address)
- [ballots](Voting.md#ballots)

### Methods

- [createBallotForAddressUpdate](Voting.md#createballotforaddressupdate)
- [createBallotForParamUpdate](Voting.md#createballotforparamupdate)
- [getAllBallots](Voting.md#getallballots)
- [getUserBallots](Voting.md#getuserballots)

## Constructors

### constructor

• **new Voting**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/Voting.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/8816d66/src/staticModels/Voting.ts#L11)

___

### ballots

▪ `Static` `Optional` **ballots**: `string`[]

#### Defined in

[staticModels/Voting.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/8816d66/src/staticModels/Voting.ts#L15)

## Methods

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

[staticModels/Voting.ts:34](https://github.com/Super-Protocol/sp-sdk-js/blob/8816d66/src/staticModels/Voting.ts#L34)

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

[staticModels/Voting.ts:53](https://github.com/Super-Protocol/sp-sdk-js/blob/8816d66/src/staticModels/Voting.ts#L53)

___

### getAllBallots

▸ `Static` **getAllBallots**(): `Promise`<`string`[]\>

Function for fetching list of all ballots addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/Voting.ts:69](https://github.com/Super-Protocol/sp-sdk-js/blob/8816d66/src/staticModels/Voting.ts#L69)

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

[staticModels/Voting.ts:80](https://github.com/Super-Protocol/sp-sdk-js/blob/8816d66/src/staticModels/Voting.ts#L80)
