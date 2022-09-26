---
id: "cli-solutions-prepare"
title: "Prepare a solution"
slug: "/cli/commands/solutions/prepare"
sidebar_label: "prepare"
---

Prepare a solution for deployment

## Usage

```
$ spctl solutions prepare <solutionPath> <solutionKeyPath> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :- | :- |
|`solutionPath`|Path to a solution folder|
|`solutionKeyPath`|Path to a key file|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :- | :- | :- |
|`--pack-solution`||Path to save the resulting tar.gz archive|
|`--base-image-path`||Path to a container image file (required if no `--base-image-resource` specified)|
|`--base-image-resource`||Path to a container image resource file (required if no `--base-image-path` specified)|
|`--write-default-manifest`|`false`|Write the default manifest for solutions with empty sgxMrEnclave|
|`--hash-algo`|`sha256`|Hash calculation algorithm for solution|
|`--sgx-thread-num`||Number of enclave threads|
|`--sgx-enclave-size`||Entire enclave size (#M or #G), must be a value to the power of 2|
|`--sgx-loader-internal-size`||Size of the internal enclave structs (#M or #G)|
|`--sgx-stack-size`||Size of the enclave thread stack (#K, #M or #G)|
|`--config`|`./config.json`|Path to the configuration file|
