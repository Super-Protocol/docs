---
id: "offers-update"
title: "update"
slug: "/cli_commands/offers/offers/update"
sidebar_position: 6
---

Update an existing offer.

## Usage

Syntax:

```
./spctl offers update <type> <id> [OPTIONS]
```

Example: update an existing value offer using the information in `offerInfo.json` which is located in the same directory together with SPCTL.

```
./spctl offers update value 10 --path ./offerInfo.json
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |
| `id`     | Offer `id`  |

## Options

| **Name, shorthand** | **Default**        | **Description**                |
|:--------------------|:-------------------|:-------------------------------|
| `--path`            | `./offerInfo.json` | Path to the offer content file |
| `--config`          | `./config.json`    | Path to the configuration file |


## Content file requirements

### Value offers

| **Field**         | **Description**                                                                                                                                                                            | **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`            | Offer name                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `group`           | Offer group type                                                                                                                                                                           | 0 - input (data / solution offers) <br/>2 - output (storage offers)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `offerType`       | Offer type                                                                                                                                                                                 | 1 - storage offers<br/>2 - solution offers<br/>3 - data offers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `cancelable`      | Indicator if an offer can be cancelled                                                                                                                                                     | true / false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `description`     | Offer description                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `restrictions`    | Offers that should be executed together with the current one<br/><br/>`offers` - an array of offer ids<br/>`types` - an array of offer types in accordance with offerType above            | For example, if the current solution should use a base image, then restrictions should look like this:<br/>`"restrictions":`<br/>`{`<br/>`"offers": [<base image offer id>],`<br/>`"types": [<base image offer type>]`<br/>`}`                                                                                                                                                                                                                                                                                                                                                                                          |
| `metadata`        | Any additional information                                                                                                                                                                 | For example, there might be the information about whether or not the current offer is a grouping one, like in case of Tunnels<br/>`"{\"groupingOffers\":true}"`                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `input`           | Will be used in the future to specify the metadata about permitted inputs                                                                                                                  | For now, it should be empty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `output`          | Will be used in the future to specify the metadata about permitted outputs                                                                                                                 | For now, it should be empty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `allowedArgs`     | Will be deprecated                                                                                                                                                                         | For now, it should be empty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `allowedAccounts` | List of accounts allowed to place an order based on this offer                                                                                                                             | If empty, all accounts are allowed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `argsPublicKey`   | Encryption information in a string format<br/><br/>`algo` - algorithm for encrypting arguments<br/>`encoding` - encoding scheme<br/>`key` - public key                                     | Example:<br/>`"argsPublicKey":`<br/>`"{\"algo\":\"ECIES\",`<br/>`\"encoding\":\"base64\",`<br/>`\"key\":\"<PUBLIC KEY>\"}"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `resultResource`  | Unencrypted content that is available for downloading, in a string format<br/><br/>`type`,`storageType`<br/>`credentials` to access content, including `token`, `storageId` and `filepath` | For now, only StorJ is supported. Please always use `STORAGE_PROVIDER` for `type` and `STORJ` for `storageType`. `token` should be **STORJ read access grant** with *read* permissions, `storageId` is a bucket name and `filepath` is the path to the content file located in the bucket.<br/><br/>It is mainly used for Base Image solutions. It should look like this:<br/>`"resultResource":`<br/>`"{\"type\":\"STORAGE_PROVIDER\",`<br/>`\"storageType\":\"STORJ\",`<br/>`\"credentials\":`<br/>`{\"token\":\"<READ_ACCESS_TOKEN>\",`<br/>`\"storageId\":\"<BUCKET_NAME>\"},`<br/>`\"filepath\":\"<FILE_NAME>\"}"` |
| `linkage`         | Will be used in the future to verify solutions which are linked to the current offer                                                                                                       | For now, it should be empty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `hash`            | Will be used in the future to verify solutions which are linked to the current offer                                                                                                       | For now, it should be empty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

**Note:** once `linkage` and `hash` are set, they can not be changed later.

JSON example:
```json title="value-offer.json"
{
  "name": "Image Classification",
  "group": "0", // belongs to input group
  "offerType": "2", // belongs to solution type
  "cancelable": false,
  "description": "My Image Classification solution",
  "restrictions": {
    "offers": [ 
      "5", // should be executed together with solution offer 5
      "16" // should be executed together with data offer 16
    ],
    "types": [
      "2",
      "3"
    ]
  },
  "metadata": "",
  "input": "",
  "output": "",
  "allowedArgs": "",
  "allowedAccounts": [],
  "argsPublicKey": "{}",
  "resultResource": "",
  "linkage": "",
  "hash": ""
}
```

**Note:** the file can contain only those fields that need to be updated. For example, if you need to update `name` and `description` fields only, the file can look like this:

```
{
  "name": "New Image Classification",
  "description": "My New Image Classification solution"
}
```