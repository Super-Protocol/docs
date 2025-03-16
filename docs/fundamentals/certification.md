---
id: "certification"
title: "Certification System"
slug: "/certification"
sidebar_position: 6
---

Super Protocol uses a certification system for signing data, verifying signatures, and ensuring applications operate within a trusted confidential computing environment. Verified data is published on the blockchain on behalf of confidential containers, allowing anyone to validate application integrity and ensure confidentiality. End users only interact with issued certificates and verify signatures, while the complexities of Remote Attestation are seamlessly managed in the background.

All the system components are open-source, ensuring transparency and verifiability.

## Architecture

The backbone of the system is a hierarchical structure of Certification Authorities. Each Certification Authority operates inside a Trusted Execution Environment (TEE)—Intel SGX enclave.

<img src={require('./images/certification-system-architecture.png').default} width="auto" height="auto"/>
<br/>
<br/>

The Root Certification Authority (*Root CA*) is located at the highest hierarchical level. At the start, Root CA generates a self-signed certificate, embedding an SGX attestation quote.

Distributed SubRoot Certification Authorities (*SubRoot CAs*) are located at the next hierarchical level. They provide their quotes and public keys to the Root CA and request certificates.

Root CA verifies the incoming requests and then issues and signs certificates for SubRoot CAs. The SubRoot CAs, in turn, issue and sign certificates for [orders](/fundamentals/orders).

## Order certificates

The issuing of order certificates involves [Trusted Loader](/whitepaper/tee-provider/#trusted-loader-mechanism)—a mechanism developed to load and run applications within a TEE. Trusted Loader operates inside a Confidential VM that executes the order. This VM is deployed within Intel TDX, AMD SEV-SNP, NVIDIA GPU TEE, or other TEEs.

To receive an order certificate, the Trusted Loader sends a request to a SubRoot CA providing the quote and a public key. The SubRoot CA verifies the quote and issues the order certificate using the provided public key.

### Workload Info

All orders in Super Protocol contain necessary input data, including the hash of the executed application—the *solution hash*. This execution environment is referred to as *Workload Info*.

The Workload Info includes an array called `runtimeInfo[]`, which contains each order component’s `Type`, `Hash`, and `Size`. It may also contain a signature key (`SignatureKey`), stored as a hash, and hashes of input arguments (`Args`). Each application, dataset, or other order component has a corresponding entry in this array.

The hash of the Workload Info is stored in the certificate generated for each order. The certificate’s public component, private key, Workload Info, and complete certificate chain are stored in the `sp/certs` directory, available to the order during execution.

Additionally, the public component of the certificate and the `runtimeInfo[]` array are recorded on the blockchain, allowing anyone to validate the order and verify the certificate chain.