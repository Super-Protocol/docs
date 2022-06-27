---
id: "Superpro"
title: "Superpro"
sidebar_label: "Superpro"
sidebar_position: 0
---

## `Superpro`
Contains logic that controls the Super Protocol configuration.


## Functions
### getVersion
```solidity
  function getVersion(
  ) public returns (string)
```
Returns protocol version.

### getToken
```solidity
  function getToken(
  ) public returns (address)
```
Returns address of Super Protocol token contract.

### getConfigParam
```solidity
  function getConfigParam(
    enum ParamName name
  ) public returns (uint256)
```
Returns the current parameter value by its name.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name` | enum ParamName | Name of the parameter.
### setVersion
```solidity
  function setVersion(
    string newVersion
  ) public onlyAdmin 
```
Updates protocol version.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newVersion` | string | New protocol version value.
### setConfigParam
```solidity
  function setConfigParam(
    enum ParamName name,
    uint256 value
  ) public onlyAdmin 
```
Sets the new value of the configuration parameter by its name.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name` | enum ParamName | Parameter name.
|`value` | uint256 | New parameter value.
### setConfigParams
```solidity
  function setConfigParams(
    struct SuperproParams params
  ) public onlyAdmin 
```
Batch update of configuration parameters.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`params` | struct SuperproParams | New parameter values.
