---
id: "cli-solutions-prepare"
title: "Prepare solution"
slug: "/cli/solutions/prepare"
sidebar_label: "prepare"
---

## Usage:

```shell
$ CLI solutions prepare <solutionPath> <solutionKeyPath> \
    --pack-solution <packSolution> \
    --base-image-path <pathToContainerImage> | --base-image-resource <containerImageResource> \
    --sgx-thread-num <threadNum> \
    --sgx-enclave-size <enclaveSize> \
    --sgx-loader-internal-size <internalSize> \
    --sgx-stack-size <stackSize> \
    [--write-default-manifest] \
    [--hash-algo <solutionHashAlgo>] \
    [--config <configPath>]
```

prepares a solution

## Description:

Prepares a solution in `<solutionPath>`, signs it with `<solutionKeyPath>`

## Arguments:

|**Name**|**Description**|
| :- | :- |
|`solutionPath`|Path to a file for uploading|
|`solutionKeyPath`|Path to a solution key|

## Options:

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--config`|`./config.json`|Path to a config file|
|`--pack-solution`||Pack solution folder into tar gz|
|`--base-image-path`||A container image file (Required if no `--base-image-resource` specified)|
|`--base-image-resource`||A container image resource name (Required if no `--base-image-path` specified)|
|`--write-default-manifest`|`false`|Write a default manifest for solutions with empty sgxMrEnclave|
|`--hash-algo`|`sha256`|Hash calculation algorithm for solution|
|`--sgx-thread-num`||A number of enclave threads|
|`--sgx-enclave-size`||Entire enclave size (#M or #G), must be some value to the power of 2|
|`--sgx-loader-internal-size`||Size of the internal enclave structs (#M or #G)|
|`--sgx-stack-size`||Size of the enclave thread stack (#K, #M or #G)|
