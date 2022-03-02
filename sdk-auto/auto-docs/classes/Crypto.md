[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Crypto

# Class: Crypto

## Table of contents

### Constructors

- [constructor](Crypto.md#constructor)

### Methods

- [decrypt](Crypto.md#decrypt)
- [decryptStream](Crypto.md#decryptstream)
- [encrypt](Crypto.md#encrypt)
- [encryptStream](Crypto.md#encryptstream)

## Constructors

### constructor

• **new Crypto**()

## Methods

### decrypt

▸ `Static` **decrypt**(`encryption`): `Promise`<`string`\>

Used to decrypt data from blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encryption` | `Encryption` | object what contains encrypted data, key and spec to decryption |

#### Returns

`Promise`<`string`\>

Promise<string> - decrypted string

#### Defined in

[crypto/Crypto.ts:82](https://github.com/Super-Protocol/sp-sdk-js/blob/36a237b/src/crypto/Crypto.ts#L82)

___

### decryptStream

▸ `Static` **decryptStream**(`inputStream`, `outputStream`, `encryption`): `Promise`<`void`\>

Decrypts data stream

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputStream` | `ReadStream` | stream with data to decrypt |
| `outputStream` | `WriteStream` | stream where the decrypted data will be written |
| `encryption` | `Encryption` | – encryption info |

#### Returns

`Promise`<`void`\>

#### Defined in

[crypto/Crypto.ts:109](https://github.com/Super-Protocol/sp-sdk-js/blob/36a237b/src/crypto/Crypto.ts#L109)

___

### encrypt

▸ `Static` **encrypt**(`content`, `encryption`): `Promise`<`Encryption`\>

Used to encrypt data before sending it to blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | string data to encrypt |
| `encryption` | `Encryption` | - |

#### Returns

`Promise`<`Encryption`\>

Promise<Encryption> - object what contains encrypted data, key and spec to decryption

#### Defined in

[crypto/Crypto.ts:24](https://github.com/Super-Protocol/sp-sdk-js/blob/36a237b/src/crypto/Crypto.ts#L24)

___

### encryptStream

▸ `Static` **encryptStream**(`inputStream`, `outputStream`, `encryption`): `Promise`<`Encryption`\>

Encrypts data stream

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputStream` | `ReadStream` | path to file that will be encrypted |
| `outputStream` | `WriteStream` | place where it will be saved |
| `encryption` | `Encryption` | - |

#### Returns

`Promise`<`Encryption`\>

Promise<Encryption> - encryption info

#### Defined in

[crypto/Crypto.ts:54](https://github.com/Super-Protocol/sp-sdk-js/blob/36a237b/src/crypto/Crypto.ts#L54)
