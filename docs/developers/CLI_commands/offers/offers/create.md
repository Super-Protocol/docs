---
id: "offers-create"
title: "create"
slug: "/cli_commands/offers/offers/create"
sidebar_position: 5
---

Create a new offer.

## Usage

Syntax:

```
./spctl offers create <type> [OPTIONS]
```

Example: create a new value offer using the information in `offerInfo.json` which is located in the same directory together with SPCTL.

```
./spctl offers create value --path ./offerInfo.json
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of offer: `tee` or `value` |

## Options

| **Name, shorthand** | **Default**     | **Description**                |
|:--------------------|:----------------|:-------------------------------|
| `--path`            | `./offerInfo.json` | Path to the offer content file |
| `--config`          | `./config.json` | Path to the configuration file |

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
| `argsPublicKey`   | Additional encryption information in a string format<br/><br/>`algo` - algorithm for encrypting arguments<br/>`encoding` - encoding scheme<br/>`key` - public key                          | Example:<br/>`"argsPublicKey":`<br/>`"{\"algo\":\"ECIES\",`<br/>`\"encoding\":\"base64\",`<br/>`\"key\":\"<PUBLIC KEY>\"}"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `resultResource`  | Unencrypted content that is available for downloading, in a string format<br/><br/>`type`,`storageType`<br/>`credentials` to access content, including `token`, `storageId` and `filepath` | For now, only StorJ is supported. Please always use `STORAGE_PROVIDER` for `type` and `STORJ` for `storageType`. `token` should be **STORJ read access grant** with *read* permissions, `storageId` is a bucket name and `filepath` is the path to the content file located in the bucket.<br/><br/>It is mainly used for Base Image solutions. It should look like this:<br/>`"resultResource":`<br/>`"{\"type\":\"STORAGE_PROVIDER\",`<br/>`\"storageType\":\"STORJ\",`<br/>`\"credentials\":`<br/>`{\"token\":\"<READ_ACCESS_TOKEN>\",`<br/>`\"storageId\":\"<BUCKET_NAME>\"},`<br/>`\"filepath\":\"<FILE_NAME>\"}"` |
| `linkage`         | Will be used in the future to verify solutions which are linked to the current offer                                                                                                       | For now, it should be empty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `hash`            | Will be used in the future to verify solutions which are linked to the current offer                                                                                                       | For now, it should be empty                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

**Note:** once `linkage` and `hash` are set, they can not be changed later.

JSON example:
```json title="value-offer.json"
{
  "name": "Image Classification",
  "group": "0", # belongs to input group
  "offerType": "2", # belongs to solution type
  "cancelable": false,
  "description": "My Image Classification solution",
  "restrictions": {
    "offers": [ 
      "10", # should be executed together with solution offer 10
      "9" # should be executed together with data offer 9
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
  "argsPublicKey": "",
  "resultResource": "",
  "linkage": "",
  "hash": ""
}
```

### TEE offers


| **Field**            | **Description**                                                                                                                                                          | **Comments**                                                                                                                                                                                                                                       |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`               | Offer name                                                                                                                                                               |                                                                                                                                                                                                                                                    |
| `description`        | Offer description                                                                                                                                                        |                                                                                                                                                                                                                                                    |
| `teeType`            | Offer type                                                                                                                                                               | 0 - TEE offers                                                                                                                                                                                                                                     |
| `properties`         | Will be deprecated                                                                                                                                                       | For now, it should be empty                                                                                                                                                                                                                        |
| `tlb`                | TEE Loader Block                                                                                                                                                         |                                                                                                                                                                                                                                                    |
| `argsPublicKey`  | Additional enryption information in a string format<br/><br/>`algo` - algorithm for encrypting arguments<br/>`encoding` - encoding scheme<br/>`key` - public key         | Example:<br/>`"argsPublicKey":`<br/>`"{\"algo\":\"ECIES\",`<br/>`\"encoding\":\"base64\",`<br/>`\"key\":\"<PUBLIC KEY>\"}"`                                                                                                                        |
| `hardwareInfo`       | Overall computing power configuration<br/><br/>`cpuCores` - a float value<br/>`gpuCores` - a float value<br/>`diskUsage` - a value in bytes<br/>`ram` - a value in bytes | in the Marketplace<br/><br/>`diskUsage` and `ram` values will be converted to GB in accordance with the formula `initial value / (1024 ^ 3)`                                                                                                            |
| `optionInfo`         | Overall internet access configuration<br/><br/>`bandwidth` - a value in bits<br/>`traffic` - a value in bits<br/>`externalPort` - 1 for Yes, 0 for No                    | in the Marketplace<br/><br/>`bandwidth` value will be converted to Mbit in accordance with the formula `initial value / (1000 ^ 2)`<br/><br/>`traffic` value will be converted to Gbit in accordance with the formula `initial value / (1000 ^ 3)` |

JSON example:
```json title="tee-offer.json"
{
  "name": "TEE Offer",
  "description": "My TEE offer",
  "teeType": "0",
  "properties": "",
  "tlb": "",
  "argsPublicKey": "{\"algo\":\"ECIES\",\"encoding\":\"base64\",\"key\":\"<PUBLIC KEY>\"}",
  "hardwareInfo": {
    "slotInfo": {
      "cpuCores": 35.5,
      "gpuCores": 0,
      "diskUsage": 10737418240,
      "ram": 107374182400
    },
    "optionInfo": {
      "bandwidth": 2300000,
      "traffic": 321000000,
      "externalPort": 1
    }
  }
}
```