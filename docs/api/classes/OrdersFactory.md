---
id: "OrdersFactory"
title: "Class: OrdersFactory"
sidebar_label: "OrdersFactory"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new OrdersFactory**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/OrdersFactory.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OrdersFactory.ts#L17)

___

### contract

▪ `Static` `Private` **contract**: `Contract`

#### Defined in

[staticModels/OrdersFactory.ts:18](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OrdersFactory.ts#L18)

___

### logger

▪ `Static` `Private` **logger**: `Logger`<`LoggerOptions` \| `DestinationStream`\>

#### Defined in

[staticModels/OrdersFactory.ts:19](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OrdersFactory.ts#L19)

___

### orders

▪ `Static` `Optional` **orders**: `string`[]

#### Defined in

[staticModels/OrdersFactory.ts:21](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/OrdersFactory.ts#L21)

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

[staticModels/OrdersFactory.ts:26](https://github.com/Super-Protocol/sp-sdk-js/blob/7d2af19/src/staticModels/OrdersFactory.ts#L26)

___

### createOrder

▸ `Static` **createOrder**(`orderInfo`, `holdDeposit?`, `suspended?`, `externalId?`, `transactionOptions?`): `Promise`<`void`\>

Function for creating orders

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `orderInfo` | [`OrderInfo`](../modules.md#orderinfo) | `undefined` | order info for new order |
| `holdDeposit` | `number` | `0` | - |
| `suspended` | `boolean` | `false` | is orders suspended |
| `externalId` | `string` | `undefined` | - |
| `transactionOptions?` | `TransactionOptions` | `undefined` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

- Does not return address of created contract!

#### Defined in

[staticModels/OrdersFactory.ts:86](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/OrdersFactory.ts#L86)

___

### getAllOrders

▸ `Static` **getAllOrders**(): `Promise`<`string`[]\>

Function for fetching list of all orders addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/OrdersFactory.ts:42](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/OrdersFactory.ts#L42)

___

### getOrderHoldDeposit

▸ `Static` **getOrderHoldDeposit**(`orderAddress`): `Promise`<`number`\>

Function for fetching order hold deposit for specific order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderAddress` | `string` | address of order for fetching hold deposit |

#### Returns

`Promise`<`number`\>

#### Defined in

[staticModels/OrdersFactory.ts:52](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/OrdersFactory.ts#L52)

___

### onOrderCreated

▸ `Static` **onOrderCreated**(`callback`): () => `void`

Function for adding event listeners on order created event in orders factory contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`onOrderCreatedCallback`](../modules.md#onordercreatedcallback) | function for processing created order |

#### Returns

`fn`

unsubscribe - unsubscribe function from event

▸ (): `void`

Function for adding event listeners on order created event in orders factory contract

##### Returns

`void`

unsubscribe - unsubscribe function from event

#### Defined in

[staticModels/OrdersFactory.ts:62](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/OrdersFactory.ts#L62)

___

### refillOrderDeposit

▸ `Static` **refillOrderDeposit**(`orderAddress`, `amount`, `transactionOptions?`): `Promise`<`void`\>

Function for refilling order deposit

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderAddress` | `string` | address of order |
| `amount` | `number` | amount of tokens to refilling |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

#### Defined in

[staticModels/OrdersFactory.ts:109](https://github.com/Super-Protocol/sp-sdk-js/blob/0eeb728/src/staticModels/OrdersFactory.ts#L109)
