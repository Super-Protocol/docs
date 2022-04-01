---
id: "default"
title: "Class: default"
sidebar_label: "default"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new default**()

## Properties

### defaultActionAccount

▪ `Static` `Optional` **defaultActionAccount**: `string`

#### Defined in

[BlockchainConnector.ts:25](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/BlockchainConnector.ts#L25)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` & `ChildLoggerOptions` & `DestinationStream` & `ChildLoggerOptions`\>

#### Defined in

[BlockchainConnector.ts:23](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/BlockchainConnector.ts#L23)

## Methods

### getBalance

▸ `Static` **getBalance**(`address`): `Promise`<`string`\>

Returns balance of blockchain platform tokens in wei

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[BlockchainConnector.ts:97](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/BlockchainConnector.ts#L97)

___

### getTransactions

▸ `Static` **getTransactions**(`addresses`, `startBlock?`): `Promise`<{ `lastBlock`: `number` = endBlock; `transactionsByAddress`: { `[key: string]`: `Transaction`[];  }  }\>

Fetch transactions for specific addresses starting with specific block until last block

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addresses` | `string`[] | array of addresses to fetch transactions (from this addresses and to this addresses) |
| `startBlock?` | `number` | number of block to start fetching transactions (if empty fetch only for last block) |

#### Returns

`Promise`<{ `lastBlock`: `number` = endBlock; `transactionsByAddress`: { `[key: string]`: `Transaction`[];  }  }\>

{Promise<{
  transactionsByAddress, - found transactions sorted by addresses
  lastBlock, - number of last fetched block (can be used to start fetching from this block next time)
}>}

#### Defined in

[BlockchainConnector.ts:111](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/BlockchainConnector.ts#L111)

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

[BlockchainConnector.ts:32](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/BlockchainConnector.ts#L32)

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

[BlockchainConnector.ts:86](https://github.com/Super-Protocol/sp-sdk-js/blob/bbd7f28/src/BlockchainConnector.ts#L86)