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

[crypto/Crypto.ts:78](https://github.com/Super-Protocol/sp-sdk-js/blob/5474680/src/crypto/Crypto.ts#L78)

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

[crypto/Crypto.ts:102](https://github.com/Super-Protocol/sp-sdk-js/blob/5474680/src/crypto/Crypto.ts#L102)

___

### encrypt

▸ `Static` **encrypt**(`algorithm`, `content`, `key`, `encoding?`): `Promise`<`Encryption`\>

Used to encrypt data before sending it to blockchain

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `algorithm` | `CryptoAlgorithm` | `undefined` | encryption algorithm |
| `content` | `string` | `undefined` | string data to encrypt |
| `key` | `string` | `undefined` | key in string format (default encoding base64) |
| `encoding` | `base64` | `Encoding.base64` | encoding of key and output data |

#### Returns

`Promise`<`Encryption`\>

Promise<Encryption> - object what contains encrypted data, key and spec to decryption

#### Defined in

[crypto/Crypto.ts:23](https://github.com/Super-Protocol/sp-sdk-js/blob/5474680/src/crypto/Crypto.ts#L23)

___

### encryptStream

▸ `Static` **encryptStream**(`inputStream`, `outputStream`, `algorithm`, `encoding`, `key`): `Promise`<`Encryption`\>

Encrypts data stream

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputStream` | `ReadStream` | path to file that will be encrypted |
| `outputStream` | `WriteStream` | place where it will be saved |
| `algorithm` | `CryptoAlgorithm` | file encryption algorithm |
| `encoding` | `base64` | - |
| `key` | `string` | – key that will be used to encrypt data |

#### Returns

`Promise`<`Encryption`\>

Promise<Encryption> - encryption info

#### Defined in

[crypto/Crypto.ts:52](https://github.com/Super-Protocol/sp-sdk-js/blob/5474680/src/crypto/Crypto.ts#L52)
