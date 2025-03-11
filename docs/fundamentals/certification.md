---
id: "certification"
title: "Certification System"
slug: "/certification"
sidebar_position: 6
---

Super Protocol uses the certification system for signing data, verifying signatures, and ensuring applications operate in a correct confidential computing environment. The system publishes verified data in the blockchain on behalf of confidential containers, allowing anyone to validate application integrity and ensure confidentiality.

All the system components are open-source, which guarantees transparency and verifiability.

## Architecture

The backbone of the system is a hierarchical structure of Certification Authorities. Each Certification Authority works in a Confidential Virtual Machine (VM) executed inside a Trusted Execution Environment (TEE)—Intel SGX enclave.

<img src={require('./images/certification-system-architecture.png').default} width="auto" height="auto"/>
<br/>
<br/>

The Root Certification Authority (*Root CA*) is located at the highest hierarchical level. At the start, Root CA generates a self-signed certificate, embedding an SGX attestation quote.

Distributed SubRoot Certification Authorities (*SubRoot CAs*) operate under the Root CA at the next hierarchical level. They provide their quotes and public keys for future certificates to the Root CA and request certificates.

Root CA receives these incoming requests, verifies them, and issues and signs certificates for SubRoot CAs. The SubRoot CAs, in turn, issue and sign certificates for [orders](/fundamentals/orders). Confidential VMs that execute orders may be deployed inside TDX, SEV, or other CPU- or GPU-based TEE.

## Order certificates

The certification system facilitates attestation verification for orders, as only the order certificate is required. The certificate chain up to the Root CA is verified automatically.

The issuing of order certificates involves [Trusted Loader](/whitepaper/tee-provider/#trusted-loader-mechanism)—a mechanism developed to load and run applications within a TEE. Trusted Loader operates inside a Confidential VM that executes the order.

The process of getting an order certificate is the following:

1. Trusted Loader provides its quote and a public key to a SubRoot CA and sends a request for an order certificate.
2. The SubRoot CA verifies the Trusted Loader’s quote and issues the order certificate with the provided public key.

Any new order in Super Protocol contains necessary input data, including the solution hash or, in other words, the hash of the executed application. This execution environment is referred to as *Workload Info*.

The Workload Info includes an array called `runtimeInfo[]`, which contains each order component’s Type, Hash, and Size. It may also contain a signature key (SignatureKey), stored as a hash, and hashes of input arguments (Args hash). Each application, dataset, or other order component has a corresponding entry in this array.

The hash of the Workload Info is stored in the certificate generated for each order. The certificate’s public part, private key, Workload Info, and complete certificate chain are stored in the `sp/certs` directory available to the order during execution.

Besides, the public part of the certificate and the `runtimeInfo[]` array are recorded on the blockchain, allowing anyone to validate the order and verify the certificate chain using the following [SPCTL](/cli) command:

```
./spctl orders get-report <ORDER_ID>
```

Where:

- `<ORDER_ID>` is the ID of the order.