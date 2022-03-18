[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Order

# Class: Order

## Table of contents

### Constructors

- [constructor](Order.md#constructor)

### Properties

- [address](Order.md#address)
- [consumer](Order.md#consumer)
- [orderInfo](Order.md#orderinfo)
- [orderResult](Order.md#orderresult)
- [origins](Order.md#origins)
- [parentOrder](Order.md#parentorder)
- [subOrders](Order.md#suborders)

### Methods

- [cancelOrder](Order.md#cancelorder)
- [complete](Order.md#complete)
- [createSubOrder](Order.md#createsuborder)
- [getConsumer](Order.md#getconsumer)
- [getOrderInfo](Order.md#getorderinfo)
- [getOrderResult](Order.md#getorderresult)
- [getOrigins](Order.md#getorigins)
- [getParentOrder](Order.md#getparentorder)
- [getSubOrders](Order.md#getsuborders)
- [onOrderStatusUpdated](Order.md#onorderstatusupdated)
- [start](Order.md#start)
- [updateStatus](Order.md#updatestatus)
- [withdrawChange](Order.md#withdrawchange)
- [withdrawProfit](Order.md#withdrawprofit)

## Constructors

### constructor

• **new Order**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Defined in

[models/Order.ts:36](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L36)

## Properties

### address

• **address**: `string`

#### Defined in

[models/Order.ts:25](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L25)

___

### consumer

• `Optional` **consumer**: `string`

#### Defined in

[models/Order.ts:33](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L33)

___

### orderInfo

• `Optional` **orderInfo**: [`OrderInfo`](../modules.md#orderinfo)

#### Defined in

[models/Order.ts:29](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L29)

___

### orderResult

• `Optional` **orderResult**: [`OrderResult`](../modules.md#orderresult)

#### Defined in

[models/Order.ts:30](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L30)

___

### origins

• `Optional` **origins**: [`Origins`](../modules.md#origins)

#### Defined in

[models/Order.ts:34](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L34)

___

### parentOrder

• `Optional` **parentOrder**: `string`

#### Defined in

[models/Order.ts:32](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L32)

___

### subOrders

• `Optional` **subOrders**: `string`[]

#### Defined in

[models/Order.ts:31](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L31)

## Methods

### cancelOrder

▸ **cancelOrder**(`transactionOptions?`): `Promise`<`void`\>

Function for updating status of contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionOptions?` | `TransactionOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/Order.ts:114](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L114)

___

### complete

▸ **complete**(`status`, `encryptedResult?`, `encryptedError?`, `transactionOptions?`): `Promise`<`void`\>

Completes order

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `status` | [`OrderStatus`](../enums/OrderStatus.md) | `undefined` |
| `encryptedResult` | `string` | `""` |
| `encryptedError` | `string` | `""` |
| `transactionOptions?` | `TransactionOptions` | `undefined` |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/Order.ts:132](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L132)

___

### createSubOrder

▸ **createSubOrder**(`subOrderInfo`, `blocking`, `externalId?`, `transactionOptions?`): `Promise`<`void`\>

Function for creating sub orders for current order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subOrderInfo` | [`OrderInfo`](../modules.md#orderinfo) | order info for new subOrder |
| `blocking` | `boolean` | is sub order blocking |
| `externalId` | `string` | - |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

Promise<void> - Does not return address of created contract!

#### Defined in

[models/Order.ts:152](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L152)

___

### getConsumer

▸ **getConsumer**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[models/Order.ts:53](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L53)

___

### getOrderInfo

▸ **getOrderInfo**(): `Promise`<[`OrderInfo`](../modules.md#orderinfo)\>

Function for fetching order info from blockchain

#### Returns

`Promise`<[`OrderInfo`](../modules.md#orderinfo)\>

#### Defined in

[models/Order.ts:48](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L48)

___

### getOrderResult

▸ **getOrderResult**(): `Promise`<[`OrderResult`](../modules.md#orderresult)\>

Function for fetching order result from blockchain

#### Returns

`Promise`<[`OrderResult`](../modules.md#orderresult)\>

#### Defined in

[models/Order.ts:61](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L61)

___

### getOrigins

▸ **getOrigins**(): `Promise`<[`Origins`](../modules.md#origins)\>

Fetch new Origins (createdDate, createdBy, modifiedDate and modifiedBy)

#### Returns

`Promise`<[`Origins`](../modules.md#origins)\>

#### Defined in

[models/Order.ts:85](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L85)

___

### getParentOrder

▸ **getParentOrder**(): `Promise`<`string`\>

Function for fetching parent order from blockchain

#### Returns

`Promise`<`string`\>

#### Defined in

[models/Order.ts:77](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L77)

___

### getSubOrders

▸ **getSubOrders**(): `Promise`<`string`[]\>

Function for fetching sub orders from blockchain

#### Returns

`Promise`<`string`[]\>

#### Defined in

[models/Order.ts:69](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L69)

___

### onOrderStatusUpdated

▸ **onOrderStatusUpdated**(`callback`): () => `void`

Function for adding event listeners to contract events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`onOrderStatusUpdatedCallback`](../modules.md#onorderstatusupdatedcallback) | function for processing each order related with event |

#### Returns

`fn`

unsubscribe - function unsubscribing from event

▸ (): `void`

Function for adding event listeners to contract events

##### Returns

`void`

unsubscribe - function unsubscribing from event

#### Defined in

[models/Order.ts:191](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L191)

___

### start

▸ **start**(`transactionOptions?`): `Promise`<`void`\>

Starts suspended order

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionOptions?` | `TransactionOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/Order.ts:123](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L123)

___

### updateStatus

▸ **updateStatus**(`status`, `price`, `transactionOptions?`): `Promise`<`void`\>

Function for updating status of contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`OrderStatus`](../enums/OrderStatus.md) |
| `price` | `number` |
| `transactionOptions?` | `TransactionOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/Order.ts:101](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L101)

___

### withdrawChange

▸ **withdrawChange**(`transactionOptions?`): `Promise`<`void`\>

Function for withdrawing change from order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/Order.ts:180](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L180)

___

### withdrawProfit

▸ **withdrawProfit**(`transactionOptions?`): `Promise`<`void`\>

Function for withdrawing profit from order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[models/Order.ts:170](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/models/Order.ts#L170)
