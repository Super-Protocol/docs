---
id: "cli-offers-update"
title: "offers update"
slug: "/commands/offers/update"
sidebar_label: "update"
sidebar_position: 5
---

Updates information about an <a id="offer"><span className="dashed-underline">offer</span></a>.

**Important:** This command requires SPCTL with a [provider configuration file](/cli/guides/provider-tools#providers-spctl).

## Syntax

```shell
./spctl offers update <OFFER_TYPE> <OFFER>
    [--path <OFFER_INFO>]
    [--config <CONFIG_PATH>]
    [--help | -h]
```

## Arguments

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `<OFFER_TYPE>`                            | Type of the offer: `tee` for a compute offer or `value` for a solution, data, or storage offer. |
| `<OFFER>`                                 | Offer ID. |

## Options

| <div style={{width:200}}>**Name**</div>   | <div style={{width:565}}>**Description**</div> |
| :-                                        | :- |
| `--path <OFFER_INFO>`                     | Path to an offer-info JSON file. <br/>Default: `./offerInfo.json`. |
| `--config <CONFIG_PATH>`                  | Path to the SPCTL configuration file. <br/>Default: `./config.json`. |
| `--help`, `-h`                            | Help for the command. |

## Offer info file

The offer-info JSON file may contain the following objects, arrays, and strings, among others:

| **String, array, <br/>or object** | **Description**                                                                           | **Comments** |
| :-                                |:-                                                                                         |:- |
| `name`                            | Offer name.                                                                               | |
| `group`                           | Offer group type.                                                                         | `0` for data and solution offers. <br/>`2` for storage offers (not implemented yet). |
| `offerType`                       | Offer type .                                                                              | `1` for storage offers (not implemented yet). <br/>`2` for solution offers. <br/>`3` for data offers. |
| `cancelable`                      | Flag indicating if the offer is cancelable.                                               | `true` or `false` |
| `description`                     | Offer description.                                                                        | |
| `restrictions`                    | Object that specifies the offers that should be executed together with the current one.   | This object contains the `offers` and `types` arrays |
| `offers`                          | Array of IDs of required offers, including their dependencies.                            | Put each ID in quotation marks and separate them with a comma |
| `types`                           | Array of types of the required offers, the same codes as in `offerType`.                  | State the type for each offer in `offers`. Put each type in quotation marks and separate them with a comma |
| `allowedAccounts`                 | List of accounts allowed to use the current offer.                                        | Leave empty to allow all accounts. |
| `argsPublicKey`                   | Encryption information in a string format:<br/>`algo`: algorithm for encrypting arguments<br/>`encoding`: encoding scheme<br/>`key`: public key. | Template: <br/>`"argsPublicKey":`<br/>`"{\"algo\":\"ECIES\",`<br/>`\"encoding\":\"base64\",`<br/>`\"key\":\"<PUBLIC_KEY>\"}"` <br/><br/>Replace `<PUBLIC_KEY>` with a public key. |
| `resultResource`                  | Unencrypted content available for downloading, in a string format:<br/>`type`, `storageType`, `credentials` to access content, including `token`, `storageId`, and `filepath`. <br/><br/>It is mainly used for base image solutions.| Template: <br/>`"resultResource":`<br/>`"{\"type\":\"STORAGE_PROVIDER\",`<br/>`\"storageType\":\"STORJ\",`<br/>`\"credentials\":`<br/>`{\"token\":\"<READ_ACCESS_TOKEN>\",`<br/>`\"storageId\":\"<BUCKET_NAME>\"},`<br/>`\"filepath\":\"<FILE_NAME>\"}"` <br/><br/>Use `STORAGE_PROVIDER` for `type` and `STORJ` for `storageType` (currently, only Storj is supported). Replace: `<READ_ACCESS_TOKEN>` with a Storj access grant with **Read** permission, `<BUCKET_NAME>` with the bucket name, and `<FILE_NAME>` with the path to the file in the bucket. |

Use the [`offers get-info`](/cli/commands/offers/get-info) command to get the offer-info of an existing offer to use as an example.

The file you prepare should contain only the fields that need to be updated. For example, to only update the `name` and `description` fields, the file should look like this:

```json title="offerInfo.json"
{
  "name":"New Image Classification",
  "description":"New improved Image Classification solution"
}
```

## Example

```shell
./spctl offers update value 346 --path ./updated-offerInfo-346.json
```