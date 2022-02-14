[@super-protocol/sp-sdk-js](../README.md) / [Exports](../modules.md) / Crypto

# Class: Crypto

## Table of contents

### Constructors

- [constructor](Crypto.md#constructor)

### Methods

- [decrypt](Crypto.md#decrypt)
- [encrypt](Crypto.md#encrypt)

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

[crypto/Crypto.ts:48](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/crypto/Crypto.ts#L48)

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

[crypto/Crypto.ts:22](https://github.com/Super-Protocol/sp-sdk-js/blob/8e674e4/src/crypto/Crypto.ts#L22)
