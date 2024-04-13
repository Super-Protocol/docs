---
id: "solutions-prepare"
title: "Prepare a solution"
slug: "/cli_commands/solutions/prepare"
sidebar_label: "prepare"
---

Prepare and pack a solution for deployment and execution in a Trusted Execution Environment (TEE) in Super Protocol. It allows to compute solution hashes, including MrEnclave, and create a resulting archive that [can be uploaded](/developers/cli_commands/files/upload) to distributed storage for further usage in the process of executing orders. To prepare and pack a solution, you need to specify the path to the solution and the key for signing, the hash of whose public part will be MrSigner.

## Usage

```
./spctl solutions prepare <solutionPath> <solutionKeyPath> [OPTIONS]
```

## Arguments

|**Name**|**Description**|
| :-|:-|
|`solutionPath`|Path to a solution folder|
|`solutionKeyPath`|Path to a key file|

## Options

|**Name, shorthand**|**Default**| **Description**                                                                            |
| :-|:-|:-------------------------------------------------------------------------------------------|
|`--metadata <pathToSave>`|`./metadata.json`| Path to save metadata (hash and MrEnclave)                                                 |
|`--pack-solution <packSolution>`|`""`| Path to save a resulting `tar.gz` archive                                                    |
|`--base-image-path <pathToContainerImage>`|`""`| Path to a container image file (required if `--base-image-resource` is not specified)      |
|`--base-image-resource <containerImageResource>`|`""`| Path to a container image resource file (required if `--base-image-path` is not specified) |
|`--write-default-manifest`|`false`| Write the default manifest for solutions with empty sgxMrEnclave                           |
|`--env <envs...>`|| List of env variables to set into solution manifest                                        |
|`--hash-algo <solutionHashAlgo>`| `sha256`| Hash calculation algorithm for solution                                                    |
|`--sgx-max-threads <maxThreads>`|`""`| Number of maximum threads. Gramine 1.4 option                                              |
|`--sgx-enclave-size <enclaveSize>`|`""`| Entire enclave size (#M or #G), must be a value to the power of 2                          |
|`--sgx-loader-internal-size <internalSize>`|`""`| Size of the internal enclave structs (#M or #G)                                            |
|`--sgx-stack-size <stackSize>`|`""`| Size of the enclave thread stack (#K, #M or #G)                                            |
|`--config <configPath>`|`"./config.json"`| Path to the configuration file                                                             |
|`-h, --help`|| Display help for the command                                                               |

### Example

#### Python-based solution

The base image can be downloaded using the `spctl download-content 5` command.

```
./spctl solutions prepare ./my-solution/run ./my-solution/signing-key --pack-solution python_solution.tar.gz --base-image-path ./python_base_image.tar.gz 
```
Where:
* `./my-solution/run` - the path to a solution folder;
* `./my-solution/signing-key` - the path to a key file;
* `--pack-solution python_solution.tar.gz` - the path to save a resulting archive;
* `--base-image-path ./python_base_image.tar.gz` - the path to a container image file.

#### Node.js-based solution
The base image can be downloaded using the `spctl download-content 6` command.
```
./spctl solutions prepare ./sp-run ./enclave-key.pem --pack-solution nodejs_solution.tar.gz --base-image-path ./nodejs_base_image.tar.gz --env NODE_OPTIONS=--max-old-space-size=16384
```

Where:
* `./sp-run` - the path to a solution folder;
* `./enclave-key.pem` - the path to a key file;
* `--pack-solution nodejs_solution.tar.gz` - the path to save a resulting archive;
* `--base-image-path ./nodejs_base_image.tar.gz` - the path to a container image file;
* `--env NODE_OPTIONS=--max-old-space-size=16384` - the env variable which will be set in TEE for configuration purposes.