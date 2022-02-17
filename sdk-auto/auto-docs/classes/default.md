[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [defaultActionAccount](default.md#defaultactionaccount)

### Methods

- [getTransactions](default.md#gettransactions)
- [init](default.md#init)
- [initActionAccount](default.md#initactionaccount)

## Constructors

### constructor

• **new default**()

## Properties

### defaultActionAccount

▪ `Static` `Optional` **defaultActionAccount**: `string`

#### Defined in

[BlockchainConnector.ts:25](https://github.com/Super-Protocol/sp-sdk-js/blob/f252afa/src/BlockchainConnector.ts#L25)

## Methods

### getTransactions

▸ `Static` **getTransactions**(`addresses`, `startBlock?`): `Promise`<{ `lastBlock`: `number` = endBlock; `transactionsByAddress`: { [key: string]: `Transaction`[];  }  }\>

Fetch transactions for specific addresses starting with specific block until last block

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addresses` | `string`[] | array of addresses to fetch transactions (from this addresses and to this addresses) |
| `startBlock?` | `number` | number of block to start fetching transactions (if empty fetch only for last block) |

#### Returns

`Promise`<{ `lastBlock`: `number` = endBlock; `transactionsByAddress`: { [key: string]: `Transaction`[];  }  }\>

Promise<{
  transactionsByAddress, - found transactions sorted by addresses
  lastBlock, - number of last fetched block (can be used to start fetching from this block next time)
}>

#### Defined in

[BlockchainConnector.ts:82](https://github.com/Super-Protocol/sp-sdk-js/blob/f252afa/src/BlockchainConnector.ts#L82)

___

### init

▸ `Static` **init**(`config`): `Promise`<`void`\>

Function for connecting to blockchain
Used to setting up settings for blockchain connector
Needs to run this function before using blockchain connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](../modules.md#config) |

#### Returns

`Promise`<`void`\>

#### Defined in

[BlockchainConnector.ts:32](https://github.com/Super-Protocol/sp-sdk-js/blob/f252afa/src/BlockchainConnector.ts#L32)

___

### initActionAccount

▸ `Static` **initActionAccount**(`actionAccountKey`): `string`

Function for connecting provider action account
Needs to run this function before using any set methods in blockchain connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionAccountKey` | `string` |

#### Returns

`string`

#### Defined in

[BlockchainConnector.ts:65](https://github.com/Super-Protocol/sp-sdk-js/blob/f252afa/src/BlockchainConnector.ts#L65)
