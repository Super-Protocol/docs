---
id: "Ballot"
title: "Class: Ballot"
sidebar_label: "Ballot"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Ballot**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/Ballot.ts:16](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Ballot.ts#L16)

## Properties

### address

• **address**: `string`

#### Defined in

[models/Ballot.ts:10](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Ballot.ts#L10)

___

### ballotInfo

• `Optional` **ballotInfo**: [`BallotInfo`](../modules.md#ballotinfo)

#### Defined in

[models/Ballot.ts:14](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Ballot.ts#L14)

___

### contract

• `Private` **contract**: `Contract`

#### Defined in

[models/Ballot.ts:11](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Ballot.ts#L11)

___

### logger

• `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[models/Ballot.ts:12](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Ballot.ts#L12)

## Methods

### getBallotInfo

▸ **getBallotInfo**(): `Promise`<[`BallotInfo`](../modules.md#ballotinfo)\>

Function for fetching order info from blockchain

#### Returns

`Promise`<[`BallotInfo`](../modules.md#ballotinfo)\>

#### Defined in

[models/Ballot.ts:28](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/models/Ballot.ts#L28)
