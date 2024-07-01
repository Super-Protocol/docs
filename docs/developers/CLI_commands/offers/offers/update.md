---
id: "offers-update"
title: "offers update"
slug: "/cli_commands/offers/offers/update"
sidebar_position: 6
---

Update information of an existing offer using an offer description JSON file.

Refer to the [Offer description](/developers/cli_guides/providers_offers#offer-description) section to create the initial offer description.

**Important:** The `offers update` command requires SPCTL with the [provider configuration file]((/developers/cli_guides/configuring#for-providers)).

## Synopsis

```
./spctl offers update <type> <offerId> [option ...]
```

## Arguments

| **Name** | **Description**                 |
|:---------|:--------------------------------|
| `type`   | Type of the offer: `tee` or `value` |
| `offerId`     | Offer ID  |

## Options

| **Name** | **Description**                |
|:--------------------|:-------------------------------|
| `--path`            |Path to the offer content file. Default is `./offerInfo.json`|
| `--config`          |Path to the configuration file. Default is `./config.json`|


## Offer description file

The offer slot JSON file may contain the following objects, arrays, and strings:

|**String,<br/>unless specified**|**Description**|**Comments** |
|:-|:-|:-|
|`name`|Offer name ||
|`group` |Offer group type| `0` for data and solution offers<br/>`2` for storage offers (not implemented yet)|
|`offerType`       |Offer type  | `1` for storage offers (not implemented yet)<br/>`2` for solution offers<br/>`3` for data offers |
|`cancelable`      |Indicator that the offer can be canceled | `true` or `false` |
|`description`     |Offer description  ||
|`restrictions`    |Object that specifies the offers that should be executed together with the current one|This object contais the two following arrays, `offers` and `types`|
|`offers`|Array of IDs of required offers, including their own dependencies|Put each ID in quotation marks and separate with a comma|
|`types`|Array of types of required offers in accordance with `offerType`|State the type for each offer in `offers`.<br/>Put each type in quotation marks and separate with a comma|
| `metadata`        |Any additional information  | May be empty or contain the information about whether or not the current offer is a grouping one.<br/>For example, `"{\"groupingOffers\":true}"`  |
| `input`           |Not implemented yet (metadata about permitted inputs)  |Leave empty|
| `output`          |Not implemented yet (metadata about permitted outputs)|Leave empty |
| `allowedArgs`     |Will be deprecated |Leave empty |
| `allowedAccounts` |List of accounts allowed to use the current offer|Leave empty to allow all accounts|
| `argsPublicKey`   |Encryption information in a string format:<br/><br/>`algo`—algorithm for encrypting arguments<br/>`encoding`—encoding scheme<br/>`key`—public key | Example:<br/>`"argsPublicKey":`<br/>`"{\"algo\":\"ECIES\",`<br/>`\"encoding\":\"base64\",`<br/>`\"key\":\"<PUBLIC_KEY>\"}"`  |
| `resultResource`  | Unencrypted content that is available for downloading, in a string format<br/><br/>`type`, `storageType`, <br/>`credentials` to access content, including `token`, `storageId`, and `filepath` |Currently, only Storj is supported. Use `STORAGE_PROVIDER` for `type` and `STORJ` for `storageType`. `token` should be a STORJ access grant with **read** permission, `storageId` is the bucket name, and `filepath` is the path to the content file in the bucket.<br/><br/>It is mainly used for the base image solutions:<br/>`"resultResource":`<br/>`"{\"type\":\"STORAGE_PROVIDER\",`<br/>`\"storageType\":\"STORJ\",`<br/>`\"credentials\":`<br/>`{\"token\":\"<READ_ACCESS_TOKEN>\",`<br/>`\"storageId\":\"<BUCKET_NAME>\"},`<br/>`\"filepath\":\"<FILE_NAME>\"}"` |
| `linkage`         |Not implemented yet (verification of the solutions linked to the current offer)|Leave empty|
| `hash`            |Not implemented yet (verification of the solutions linked to the current offer)|Leave empty|

Offer JSON file template with example values for a solution identical to [Image Classification Dataset #1](https://marketplace.superprotocol.com/data?offer=offerId%3D18):

```json title="offer.json"
{
  "name": "Image Classification Dataset #1",
  "group": "0",
  "offerType": "3",
  "cancelable": false,
  "description": "Dataset with images of various breeds of dogs<br/><br/>This demo dataset is compatible with the Image Classification solution. Refer to the documentation for detailed instructions.",
  "restrictions": {
    "offers": [
      "8",
      "5"
    ],
    "types": [
      "2",
      "2"
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

The file may contain only the fields that need to be updated. For example, to only update the `name` and `description` fields, the file must look like this:

```json
{
  "name": "New Image Classification",
  "description": "New improved Image Classification solution"
}
```

## Example

The following command updates an existing value offer (ID 39) using the information in the `updated-offer-39.json` in the SPCTL root directory:

```
./spctl offers update value 39 --path ./updated-offer-39.json
```