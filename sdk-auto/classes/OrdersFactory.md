[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / OrdersFactory

# Class: OrdersFactory

## Table of contents

### Constructors

- [constructor](OrdersFactory.md#constructor)

### Properties

- [address](OrdersFactory.md#address)
- [orders](OrdersFactory.md#orders)

### Methods

- [createOrder](OrdersFactory.md#createorder)
- [getAllOrders](OrdersFactory.md#getallorders)
- [getOrderHoldDeposit](OrdersFactory.md#getorderholddeposit)
- [onOrderCreated](OrdersFactory.md#onordercreated)
- [refillOrderDeposit](OrdersFactory.md#refillorderdeposit)

## Constructors

### constructor

• **new OrdersFactory**()

## Properties

### address

▪ `Static` **address**: `string`

#### Defined in

[staticModels/OrdersFactory.ts:13](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/OrdersFactory.ts#L13)

___

### orders

▪ `Static` `Optional` **orders**: `string`[]

#### Defined in

[staticModels/OrdersFactory.ts:17](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/OrdersFactory.ts#L17)

## Methods

### createOrder

▸ `Static` **createOrder**(`orderInfo`, `suspended`, `externalId?`, `transactionOptions?`): `Promise`<`void`\>

Function for creating orders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderInfo` | [`OrderInfo`](../modules.md#orderinfo) | order info for new order |
| `suspended` | `boolean` | is orders suspended |
| `externalId` | `string` | - |
| `transactionOptions?` | `TransactionOptions` | object what contains alternative action account or gas limit (optional) |

#### Returns

`Promise`<`void`\>

Promise<void> - Does not return address of created contract!

#### Defined in

[staticModels/OrdersFactory.ts:77](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/OrdersFactory.ts#L77)

___

### getAllOrders

▸ `Static` **getAllOrders**(): `Promise`<`string`[]\>

Function for fetching list of all orders addresses

#### Returns

`Promise`<`string`[]\>

#### Defined in

[staticModels/OrdersFactory.ts:33](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/OrdersFactory.ts#L33)

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

[staticModels/OrdersFactory.ts:43](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/OrdersFactory.ts#L43)

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

[staticModels/OrdersFactory.ts:53](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/OrdersFactory.ts#L53)

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

[staticModels/OrdersFactory.ts:98](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/staticModels/OrdersFactory.ts#L98)
