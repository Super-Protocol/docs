[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Ballot

# Class: Ballot

## Table of contents

### Constructors

- [constructor](Ballot.md#constructor)

### Properties

- [address](Ballot.md#address)
- [ballotInfo](Ballot.md#ballotinfo)

### Methods

- [getBallotInfo](Ballot.md#getballotinfo)

## Constructors

### constructor

• **new Ballot**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/Ballot.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Ballot.ts#L17)

## Properties

### address

• **address**: `string`

#### Defined in

[models/Ballot.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Ballot.ts#L11)

___

### ballotInfo

• `Optional` **ballotInfo**: [`BallotInfo`](../modules.md#ballotinfo)

#### Defined in

[models/Ballot.ts:15](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Ballot.ts#L15)

## Methods

### getBallotInfo

▸ **getBallotInfo**(): `Promise`<[`BallotInfo`](../modules.md#ballotinfo)\>

Function for fetching order info from blockchain

#### Returns

`Promise`<[`BallotInfo`](../modules.md#ballotinfo)\>

#### Defined in

[models/Ballot.ts:29](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/models/Ballot.ts#L29)
