---
id: "certification"
title: "Certification System"
slug: "/certification"
sidebar_position: 6
---

Super Protocol uses a certification system for signing data, verifying signatures, and ensuring applications operate within a trusted <a id="tee"><span className="dashed-underline">confidential computing environment</span></a>. Verified data is published on the blockchain on behalf of confidential containers, allowing anyone to validate application integrity and ensure confidentiality. End users only interact with issued certificates and verify signatures, while the complexities of Remote Attestation are seamlessly managed in the background.

All the system components are open-source, ensuring transparency and verifiability.

## Architecture

The backbone of the system is a hierarchical structure of <a id="ca"><span className="dotted-underline">Certification Authorities</span></a> operating inside Trusted Execution Environments (TEE)—Intel SGX enclaves.

<img src={require('./images/certification-system-architecture.png').default} width="auto" height="auto"/>
<br/>
<br/>

The Root Certification Authority (*Root CA*) is located at the highest hierarchical level. At the start, Root CA generates a self-signed certificate, embedding the SGX attestation quote.

SubRoot Certification Authorities (*SubRoot CAs*) are located at the next hierarchical level. These submit their quotes and public keys to the Root CA and request certificates. The Root CA verifies these incoming requests and then issues and signs certificates for the SubRoot CAs.

The SubRoot CAs, in turn, issue and sign certificates for [orders](/fundamentals/orders) by request.

## Order certificates

The issuing of order certificates involves [Trusted Loader](/whitepaper/tee-provider/#trusted-loader-mechanism)—a mechanism developed to load and run applications within a TEE. Trusted Loader operates inside the Confidential VM that executes the order. This Confidential VM may be deployed within a CPU-based or CPU/GPU-augmented TEE using technologies such as Intel TDX, AMD SEV-SNP, NVIDIA Confidential Computing, or others, making the system TEE-agnostic.

To receive an order certificate, the Trusted Loader sends a request to a SubRoot CA providing the quote and a public key. The SubRoot CA verifies the quote, issues the order certificate, and signs it with the provided public key.

### Order validation

Orders in Super Protocol are created with necessary input data. This execution environment is referred to as *Workload Info*.

The Workload Info includes an array called `runtimeInfo[]` with metadata about solutions and datasets used in the order. Each such order component has an entry in this array, which includes:

- Type
- Hash
- Size
- Signature key hash (optional)
- Hash of the input arguments (optional)

The hash of the Workload Info is included in the order certificate.

Trusted Loader generates and publishes a report in the blockchain, allowing anyone to validate the order. This order report includes:

- The public components of all the certificates in the chain
- Workload Info:
    + Order creation date
    + The `runtimeInfo[]` array