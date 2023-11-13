---
id: "cli-solutions-prepare"
title: "Prepare a solution"
slug: "/cli_commands/solutions/prepare"
sidebar_label: "prepare"
---

Prepare solution for deployment

## Usage

```
spctl solutions prepare <solutionPath> <solutionKeyPath> [OPTIONS]
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
|`--sgx-max-threads`||Number of enclave threads|
|`--sgx-enclave-size`||Entire enclave size (#M or #G), must be a value to the power of 2|
|`--sgx-loader-internal-size`||Size of the internal enclave structs (#M or #G)|
|`--sgx-stack-size`||Size of the enclave thread stack (#K, #M or #G)|
|`--config`|`./config.json`|Path to the configuration file|

## Examples

Prepare the solution using the signing key and the base image.
* The solution is located in `./my-solution/run` folder;
* The signing key is here: `./my-solution/signing-key`;
* The base image can be downloaded using the `spctl download-content 6 --save-to ~/` command.
Please see the example below (adjusting for folder paths and file names):
```
spctl solutions prepare --pack-solution my-solution.tar.gz --write-default-manifest --base-image-path ~/node16-base-solution-image-v0.1.0.tar.gz --sgx-max-threads 256 --sgx-enclave-size 16G ./my-solution/run ./my-solution/signing-key
```