---
id: "solutions-prepare"
title: "Prepare a solution"
slug: "/cli_commands/solutions/prepare"
sidebar_label: "prepare"
---

This command is for preparing a solution for deployment and execution in a Trusted Execution Environment (TEE) in Super Protocol. The command allows computing solution hashes, including MrEnclave, and creating a resulting archive that [can be uploaded](/developers/cli_commands/files/upload) to distributed storage. The resource file obtained from upload process is used to launch your solutions. To prepare a solution, you need to specify the path to the solution and the [key for signing](/developers/cli_commands/workflows/generate-key), the hash of whose public part will be MrSigner.

## Usage

```
./spctl solutions prepare [options] <solutionPath> <solutionKeyPath>
```

## Arguments

|**Name**|**Description**|
| :-|:-|
|`solutionPath`|Path to a solution folder|
|`solutionKeyPath`|Path to a key file|

## Options

|**Name, shorthand**|**Default**|**Description**|
| :-|:-|:-|
Options:
|`--metadata <pathToSave>`|`./metadata.json`|Path to save metadata (hash and MrEnclave)|
|`--pack-solution <packSolution>`|`""`|Path to save the resulting tar.gz archive|
|`--base-image-path <pathToContainerImage>`|`""`|Path to a container image file (required if no --base-image-resource specified)|
|`--base-image-resource <containerImageResource>`|`""`|Path to a container image resource file (required if no --base-image-path secified)|
|`--write-default-manifest`|`false`|Write the default manifest for solutions with empty sgxMrEnclave|
|`--env <envs...>`|| List of env variabeles to set into solution manifest|
|`--hash-algo <solutionHashAlgo>`| `sha256`|Hash calculation algorithm for solution|
|`--sgx-max-threads <maxThreads>`|`""`|Number of maximum threads. Gramine 1.4 option|
|`--sgx-enclave-size <enclaveSize>`|`""`|Entire enclave size (#M or #G), must be a value to the power of 2|
|`--sgx-loader-internal-size <internalSize>`|`""`|Size of the internal enclave structs (#M or #G)|
|`--sgx-stack-size <stackSize>`|`""`|Size of the enclave thread stack (#K, #M or #G)|
|`--config <configPath>`|`"./config.json"`|Path to the configuration file|
|`-h, --help`|| Display help for the command|

## Examples

Prepare the solution using the signing key and the base image.
* The solution is located in `./my-solution/run` folder;
* The signing key is here: `./my-solution/signing-key`;
* The base image can be downloaded using the `spctl download-content 5 --save-to ~/` command.
Please see the example below (adjusting for folder paths and file names):
```
./spctl solutions prepare --pack-solution my-solution.tar.gz --write-default-manifest --base-image-path ~/node16-base-solution-image-v0.1.0.tar.gz --sgx-max-threads 256 --sgx-enclave-size 16G ./my-solution/run ./my-solution/signing-key
```

Prepare the solution based on NodeJs
* The solution is located in `./sp-run` folder;
* The signing key is here: `./enclave-key.pem`;
* The base image can be downloaded using the `spctl download-content 6 --save-to ./base-image/node16` command.
```
./spctl solutions prepare --pack-solution ./solution-based-on-node16.tar.gz --write-default-manifest --base-image-path ./base-image/node16 ./sp-run ./enclave-key.pem --sgx-enclave-size 32G --sgx-max-threads 256 --env NODE_OPTIONS=--max-old-space-size=16384
```