---
id: "certification"
title: "Certification System"
slug: "/fundamentals/certification"
sidebar_position: 6
---

The Super Protocol Certification System is a hierarchical infrastructure for managing trust in confidential computing environments. The main purpose of the system is to create a valid chain of X.509 certificates for any applications running in <a id="tee"><span className="dashed-underline">Trusted Execution Environments</span></a> (TEEs). The Certification System itself also operates within TEEs, ensuring the entire chain is rooted in hardware-based trust.

The Certification System performs remote attestation under the hood, but exposes a familiar X.509-style certificate chain on the surface. This allows any verifier (a user, an auditor, or an automated service) to validate that:

- The execution took place within a TEE.
- The certificate chain leading to the workload is valid and trusted.

The Certification System can function as an independent, standalone service. In this capacity, it could serve external companies and users who need to establish certificate chains for their own confidential computing applications.

Note that the system is not responsible for validating what an application does internally. Its primary role is to issue certificates to trusted confidential environments, forming a cryptographically verifiable trust chain.

All system components are planned to be open-sourced, improving transparency and verifiability.

## Architecture

The Certification System is organized as a hierarchy of <a id="ca"><span className="dashed-underline">Certification Authorities</span></a> (CAs) that establishes trust for TEEs through a standard certificate chain. Every CA operates within a TEE—Intel SGX enclave.

<img src={require('./images/certification-system-architecture.png').default} width="auto" height="auto"/>
<br/>
<br/>

The chain consists of three levels:

- Root CA is the top-level certificate authority that establishes the trust anchor for the entire system. At the start, it generates a self-signed certificate that embeds the SGX attestation quote.
- SubRoot CAs are intermediate certificate authorities. They submit their quotes and public keys to the Root CA and request certificates. The Root CA verifies these incoming requests and then issues and signs certificates for the SubRoot CAs. Once a SubRoot CA is certified by the Root CA, it can certify any TEE-backed environment that proves it is actually confidential.
- End certificates are issued to specific workloads, entire <a id="ca"><span className="dashed-underline">Confidential Virtual Machines</span></a> (CVMs) running in TEEs, and in some other cases. These certificates are not CAs and cannot be used to sign or issue other certificates.

Each level in the hierarchy receives its certificate from the level above, creating a chain of trust that ultimately traces back to the Root CA.

## Trusted Loader

Trusted Loader is a special service that prepares and launches the workload associated with an <a id="order"><span className="dashed-underline">order</span></a> inside a CVM running in a TEE. Loader occupies a privileged position within the execution environment, enabling it to access the platform's underlying attestation capabilities. Workloads themselves do not have such access.

Trusted Loader also:

- Collects hashes of the workload and its components.
- Verifies workload integrity before execution starts.
- Requests end certificates.

All end certificates are requested and received by Trusted Loader. Other components do not interact directly with Certificate Authorities. Trusted Loader may request certificates in several cases:

- At startup. The certificate confirms that the confidential environment is correctly configured and that the attestation challenge (TDX, SEV-SNP, etc.) matches expectations.
- When generating session keys. The certificate is included in the session key structures used during execution.
- When forming a <a id="tcb"><span className="dashed-underline">TEE Confirmation Block</span></a> (TCB). The certificate is embedded into TCB, which also includes system information and measurements.
- When deploying an order. An order-specific certificate is issued and delivered, along with cryptographic keys, to the order's execution environment.

## Order certificates

Trusted Loader requests a dedicated order-specific certificate when an order is prepared for execution. This certificate includes order-specific data, such as the hash of workload information.

Trusted Loader places the order certificate as a file into the order's execution environment. There, it can be used by the order itself to prove that it was launched within a confidential environment.

Note that the Certification System does not determine whether a CVM is correct or compromised. If a CVM runs in a confidential environment, it can obtain certificates. However, differences in hashes are visible in the certificate chain and can be detected by any verifying party.

### Order validation

Orders in Super Protocol are created with a workload description known as *Workload Info*.

Workload Info includes an array called `runtimeInfo` that contains information about <a id="solution"><span className="dashed-underline">solutions</span></a> and <a id="data"><span className="dashed-underline">data</span></a> associated with the order. Each data and solution component of the order has an entry in this array, which includes:

- Type (solution or data)
- Hash
- Size
- Signature key hash (optional)
- Hash of the input arguments (optional)

The hash of the Workload Info is included in the order certificate.

Before order execution begins, Trusted Loader checks the integrity of the full workload composition (solutions, data, and configuration). The order proceeds only if this verification succeeds.

Trusted Loader also generates and publishes a report to the blockchain, allowing any verifier to validate the order. The report includes:

- The public components of all the certificates in the chain
- Workload Info:
    - Order creation date
    - The `runtimeInfo` array

The immutable nature of blockchain prevents any further alterations to the report once it is published. The report enables verifiers to confirm what exactly was launched and that the certificate corresponds to that specific workload.