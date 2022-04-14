---
id: "architecture"
title: "Architecture"
slug: "/architecture"
sidebar_label: "Architecture"
sidebar_position: 8
custom_edit_url: null
---
# Architecture
## Overview
**Super Protocol** consists of three layers: 

<p align="center">
  <img src={require('./architecture-01.png').default} />
</p>

1. **Client Infrastructure.** At this layer there are applications for connecting to data provisioning services with integrated support for external APIs. The protocol SDK is used for exchanging requests with the blockchain in different programming languages.
1. **Blockchain Solution**. At this layer requests are received for confidential data processing and access to the provider's resources in order to get the results segments. This is where order payments and rewards are distributed, and staking takes place. It is implemented via the Super Protocol smart contract system. Super Protocol allows different blockchain networks to be interconnected and requests to be redirected to the main network so that a larger segment of participants can join in.


The security is ensured through both the use of an individual public and private key pair and encryption of the network connection channel. The gateways and validator nodes provide additional security when transferring data between blockchain networks.

1. **Provider solutions.** Each solution includes an execution controller that allows processing and further distribution of requests from the blockchain. The main solution types are as follows:
   1. **TEE Provider.** The solution is used to fulfill orders for confidential execution within the TEE. The TEE Provider publishes the public key signed by the device in advance to enable trusted loader attestation.

The Execution Controller receives the request for device allocation and solution execution. Then, the trusted loader is launched within the TEE. If the solution is encrypted, the loader decrypts it using the private key and then executes it.

Once executed, the results are encrypted for the customer and stored in the selected data storage.

The TEE provider also receives a fixed reward for online presence via the TEE Confirmation Protocol (see further sections).

1. **Storage Provider.** The solution provides access to the data storage, usually distributed, such as Filecoin or Arweave. Scripts, applications, containers, solution execution results, among other things, can be stored in the data storage.

The Execution Controller receives the request to allocate storage space and returns the encrypted storage access settings for the blockchain.

1. **Data Provider**. The solution is used to provide the provider's data for processing. These processes are conducted in the TEE environment, which guarantees complete data confidentiality.

   The execution controller receives the request, checks the necessary dependencies (typically these would be the solution, TEE, and storage) and returns the URL of the encrypted data along with the key to then decrypt it into the blockchain. The key is encrypted with the trusted loader public key.

1. **Solution Provider.** Solution Provider is responsible for various solutions such as scripts, applications, and containers.

The Execution Controller receives the request for a solution and returns the URL of the encrypted solution along with the key to then decrypt it into the blockchain. The key is encrypted with the trusted loader key.
## Protocol Speed
Polygon has been chosen as the main network. Polygon supports the execution of up to [7,200 transactions per second](https://twitter.com/0xpolygon/status/1283467641076584448?lang=en). A minimum of 4 transactions is required to process one request. Thus, Super Protocol allows you to process up to 1,800 orders per second. There are no limitations on the data volume provided as the protocol allows the use of any file storage.
## Security
Since confidentiality is the core feature of Super Protocol, data is secured at all stages of processing. On the Data Provider side, the encrypted data is immediately transferred to the TEE. It can only be decrypted by the trusted loader to execute a particular solution. The solutions for processing run in the TEE and the results are encrypted and stored in the external storage.

The protocol also allows the content of the solutions to be hidden, if it is considered a trade secret. In this case the Solution Provider can provide an encrypted solution.

Now let us take a look at each layer individually.