---
id: "cli-offers-update"
title: "offers update"
slug: "/commands/offers/update"
sidebar_label: "update"
sidebar_position: 5
---

Updates information about an <a id="offer"><span className="dashed-underline">offer</span></a>.

Refer to the [Providers and Offers] guide to create the initial offer description.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/#configure-spctl-for-providers).

## Syntax

```
./spctl offers update <offerType> <offerId>
    [--path <offerInfo>]
    [--config <path>]
    [--help | -h]
```

## Arguments

| **Name** | **Description** |
| :- | :- |
| `<offerType>` | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |
| `<offerId>` | Offer ID. |

## Options

| **Name** | **Description** |
| :- | :- |
| `--path <offerInfo>` | Path to the offerInfo JSON file. The default is `./offerInfo.json`. |
| `--config <path>` | Path to the SPCTL configuration file. The default is `./config.json`. |
| `--help`, `-h` | Help for the command. |

## Offer description file

The offerInfo JSON file may contain the following objects, arrays, and strings:

| **String, array, <br/>or object** | **Description** | **Comments** |
| :- |:- |:- |
| `name`            | Offer name | |
| `group`           | Offer group type | `0` for data and solution offers.<br/>`2` for storage offers (not implemented yet). |
| `offerType`       | Offer type  | `1` for storage offers (not implemented yet).<br/>`2` for solution offers.<br/>`3` for data offers. |
| `cancelable`      | Flag indicating if the offer is cancelable. | `true` or `false` |
| `description`     | Offer description  | |
| `restrictions`    | Object that specifies the offers that should be executed together with the current one|This object contains the `offers` and `types` arrays |
| `offers`          | Array of IDs of required offers, including their dependencies | Put each ID in quotation marks and separate them with a comma |
| `types`           | Array of types of the required offers, the same codes as in `offerType` | State the type for each offer in `offers`. Put each type in quotation marks and separate them with a comma |
| `metadata`        | Any additional information  | May be empty or contain information about whether the current offer is a grouping one. For example, `"{\"groupingOffers\":true}"`. |
| `input`           | Metadata about permitted inputs (not implemented yet) | Leave empty. |
| `output`          | Metadata about permitted outputs (not implemented yet) | Leave empty. |
| `allowedArgs`     | Deprecated | Leave empty. |
| `allowedAccounts` | List of accounts allowed to use the current offer | Leave empty to allow all accounts. |
| `argsPublicKey`   | Encryption information in a string format:<br/>`algo`: algorithm for encrypting arguments<br/>`encoding`: encoding scheme<br/>`key`: public key | Example:<br/>`"argsPublicKey":`<br/>`"{\"algo\":\"ECIES\",`<br/>`\"encoding\":\"base64\",`<br/>`\"key\":\"<PUBLIC_KEY>\"}"`  |
| `resultResource`  | Unencrypted content available for downloading, in a string format:<br/>`type`, `storageType`, `credentials` to access content, including `token`, `storageId`, and `filepath` |Currently, only Storj is supported. Use `STORAGE_PROVIDER` for `type` and `STORJ` for `storageType`. `token` should be a Storj access grant with **Read** permission, `storageId` is the bucket name, and `filepath` is the path to the content file in the bucket.<br/><br/>It is mainly used for base image solutions:<br/>`"resultResource":`<br/>`"{\"type\":\"STORAGE_PROVIDER\",`<br/>`\"storageType\":\"STORJ\",`<br/>`\"credentials\":`<br/>`{\"token\":\"<READ_ACCESS_TOKEN>\",`<br/>`\"storageId\":\"<BUCKET_NAME>\"},`<br/>`\"filepath\":\"<FILE_NAME>\"}"` |
| `linkage`         | Verification of the solutions linked to the current offer (not implemented yet) | Leave empty. |
| `hash`            | Verification of the solutions linked to the current offer (not implemented yet) | Leave empty. |

An `offerInfo.json` file template with example values for a solution identical to [Image Classification Dataset #1](https://marketplace.superprotocol.com/marketplace?offer=offerId%3D30):

```json title="offerInfo.json"
{
  "name":"Image Classification Dataset #1",
  "group":"0",
  "offerType":"3",
  "cancelable":false,
  "description":"Dataset with images of various breeds of dogs<br/><br/>This demo dataset is compatible with the Image Classification solution. Refer to the documentation for detailed instructions.",
  "restrictions":{
    "offers":[
      "8",
      "5"
    ],
    "types":[
      "2",
      "2"
    ]
  },
  "metadata":"",
  "input":"",
  "output":"",
  "allowedArgs":"",
  "allowedAccounts":[],
  "argsPublicKey":"",
  "resultResource":"",
  "linkage":"",
  "hash":""
}
```

The file may contain only the fields that need to be updated. For example, to only update the `name` and `description` fields, the file must look like this:

```json
{
  "name":"New Image Classification",
  "description":"New improved Image Classification solution"
}
```

## Example

```
./spctl offers update value 46 --path ./updated-offer-46.json
```