---
id: "solutions-prepare"
title: "Prepare a solution"
slug: "/cli_commands/solutions/prepare"
sidebar_label: "prepare"
---

In order to be run correctly inside an Intel SGX confidential enclave (TEE), a solution has to be packed and signed with [Gramine](https://gramineproject.io/) (a.k.a graminized). The goal of this command is to write a [manifest](https://gramine.readthedocs.io/en/stable/manifest-syntax.html) which allows the solution code to be executed in a confidential environment. 

Confidential computing technology isolates sensitive data in a protected CPU enclave during processing. This enclave is called TEE. 



Prepare and pack a solution for deployment and execution in a Trusted Execution Environment (TEE) in Super Protocol. 


It allows to compute solution hashes, including MrEnclave, 


and create a resulting archive that [can be uploaded](/developers/cli_commands/files/upload) to distributed storage for further usage in the process of executing orders. 


To prepare and pack a solution, you need to specify the path to the solution and the key for signing, the hash of whose public part will be MrSigner.





## Usage

```
./spctl solutions prepare <solutionPath> <solutionKeyPath> --base-image-path <baseImagePath> [OPTIONS]
```

**Input**

* Your solution in a folder, including all dependencies;
* Signing key file, generated by the [solutions generate-key](/developers/cli_commands/solutions/generate-key) command;
* Node.js or Python base image downloaded from our offers using the [offers download-content](/developers/cli_commands/offers/offers/download-content) command. You must use specifically these base images.
  * Python base image: `./spctl download-content 5`
  * Node.js base image: `./spctl download-content 6`

**Output**

* A `tar.gz` archive with your graminized solution and dependencies. Base image is graminized, but not included, to be ordered separately.

## Example

In this simplest form, the command syntax looks like this:

```
./spctl solutions prepare ./my-solution/run ./my-solution/signing-key.pem --base-image-path ./base_image.tar.gz 
```
Where:
* `./my-solution/run` - path to the solution folder;
* `./my-solution/signing-key.pem` - path to the signing key file;
* `--base-image-path ./base_image.tar.gz` - path to the Node.js or Python base image.

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

