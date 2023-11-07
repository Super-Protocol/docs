---
id: "TEE Provider"
title: "TEE Provider"
slug: "/tee-provider"
sidebar_position: 9
---

This layer is where the secure solution execution takes place i.e. the processing of the provided value to obtain the result.

## Trusted loader mechanism

In order to run applications within TEE and transfer data to it, a trusted loader mechanism has been developed. For this purpose, each TEE device generates a loader block by running it in block generation mode:

<p align="center">
  <img src={require('./images/tee-provider-01.png').default} />
</p>

TEE supports the generation of unique keys tied to both the hash of executable code within TEE and the processor. For example, Intel's EGETKEY method inside the enclave is used for this exact operation. Once the key is obtained, the loader generates a pair of keys for asymmetric encryption, writes them to the disk for recovery when needed, and encrypts them with a unique key bound to the loader hash:

![](images/tee-provider-formula-01.svg)

The public key—*PubKey*—is written to the TEE Loader Block and signed with the TEE key. The resulting block is written to the blockchain and linked to the TEE device.

Providers can encrypt their data using this key and be sure that it can be decrypted only by the selected loader.

## Passing parameters to the loader

Along with the order, the TEE execution controller receives encrypted input data parameters (TII) from the sub-order results. They are used to decrypt the solution, data, etc. Only the loader can decrypt these parameters, decode the solutions and data, and pass additional arguments to the solutions. On top of that, each encrypted parameter contains the hash of the solution that is allowed to output the parameter:

<p align="center">
  <img src={require('./images/parameterTransfer.png').default} />
</p>

## Confidential execution

In order to execute the solution in the TEE area, the TEE provider's execution controller loads the encrypted solution and starts a trusted solution loader in the TEE area with the task of executing the solution using the TII parameters encrypted with the loader's public key.

The loader then decrypts and executes the solution by conducting local attestation of the running solution and giving it the correct keys over the attested channel:

<p align="center">
  <img src={require('./images/tee-provider-03.png').default} />
</p>

The solution can read encrypted data both from the installed provider server (2) and via the passed arguments (1) (e.g., link to distributed file storage and access key).

<p align="center">
  <img src={require('./images/tee-provider-04.png').default} />
</p>

The following procedure is used to assemble solutions and data:

<p align="center">
  <img src={require('./images/tee-provider-05.png').default} />
</p>

The output of the solution is encrypted and stored in the remote distributed storage.

## Cluster execution

You can also use a whole TEE cluster for parallelization and additional protection. In this case, you need to deploy a TEE coordinator to attest and manage the machine cluster. The coordinator distributes the execution of the solution to the TEE machines:

<p align="center">
  <img src={require('./images/tee-provider-06.png').default} />
</p>

## Confidential aggregation

Data providers can coordinate with each other and execute the same solution on their databases at the same time and then aggregate the results. In this case, the data must not fall outside the confidential TEE area. This mechanism requires mutual agreement between the parties. One of the providers is designated as the master who takes orders and so the processing is done in two steps:

1. First, the solutions are executed on each provider's piece of data and the results are stored in an encrypted form with the providers' keys

2. The master provider runs a program to aggregate the results and gives it the encrypted results along with the keys encrypted for the trusted loader

## Supported TEEs (first-priority)

The team has significant experience using Intel SGX for confidential processing of big data. Their expertise will help simplify the migration of their existing solution to Super Protocol and the creation of the necessary infrastructure.

The currently available solutions are described below. Note that only Intel SGX and AMD SEV solutions are available for use. Despite that, Super Protocol includes support for other solutions, including GPU:

1. **Intel SGX**
   
   Application and solution developers can now greatly enhance data security with new hardware controls for cloud and enterprise environments. Intel Software Guard Extensions (Intel SGX) provides hardware-based memory encryption that isolates specific application code and data in memory. Intel SGX allows placing the user-level code in private areas of memory called enclaves, which isolate the code from processes running at more privileged levels.

   Intel Software Guard (Intel SGX) extensions protect against many known and active threats. They add another layer of protection [helping to reduce the attack surface of the system](https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html).

<p align="center">
  <img src={require('./images/tee-provider-07.png').default} />
</p>

2. **AMD SEV**
   
   AMD offers the [Secure Encrypted Virtualization](https://www.amd.com/system/files/TechDocs/SEV-SNP-strengthening-vm-isolation-with-integrity-protection-and-more.pdf) (SEV) technology that has emerged with the release of the EPYC processors. It is a hardware feature that encrypts memory for each virtual machine so that only the guest itself has access to the data.

   As a result, the information is unavailable to other VMs, containers, and untrusted hypervisors.

<p align="center">
  <img src={require('./images/tee-provider-08.png').default} />
</p>

3. **AMD Platform Security Processor**
   
   AMD also offers the [AMD Platform Security Processor](https://en.wikipedia.org/wiki/AMD_Platform_Security_Processor) technology on certain hybrid AMD processors with the ARM processor on the same chip. The ARM TrustZone technology with a system-based approach to security acts as a protective "layer" for the hardware and creates a safe environment by separating the CPU in two virtual "realms". Important tasks are executed in the AMD Platform Security Processor "safe realm" while other tasks are processed in normal mode. This helps ensure that important data and trusted applications are stored and processed securely. It also helps protect the integrity and confidentiality of key resources such as the user interface and service provider materials.

<p align="center">
  <img src={require('./images/tee-provider-09.png').default} />
</p>

4. **ARM Confidential Computing Architecture (CCA)**

   ARM released a new Armv9 processor architecture based on the [ARM ](https://www.anandtech.com/show/16584/arm-announces-armv9-architecture/2)[Confidential Compute Architecture](https://www.anandtech.com/show/16584/arm-announces-armv9-architecture/2) technology. CCA's goal is to get the most out of the current software stack situation, where applications running on a device need to trust the operating system and the hypervisor on which they run. In the traditional security model, more privileged software layers have full access to the lower layers, which becomes a problem if the operating system or hypervisor is compromised.

   CCA introduces a new concept of dynamically created "realms", which can be seen as secure containerized runtime environments that are completely non-transparent to the operating system or hypervisor. The hypervisor will still be used, but it will focus on planning and resource allocation. The "realm manager" is used to control the realms.

<p align="center">
  <img src={require('./images/tee-provider-10.png').default} />
</p>

5. **Graviton**
   
   INESC-ID / IST, University of Lisbon proposed the idea of creating TEE on GPU.

   [Graviton](https://www.microsoft.com/en-us/research/uploads/prod/2018/09/Graviton-Trusted-Execution-Environments-on-GPUs.pdf) is an architecture for supporting trusted runtime environments on GPUs. It allows applications to offload code and data that should be protected to the GPU and run the code in isolation from other code running on the GPU as well as from all the software on the host, including the device driver, operating system, hypervisor, etc.

   The hardware complexity of Graviton integration with existing GPUs is relatively low; all changes are limited to peripheral components such as the GPU command processor, while the existing GPU, its cores, MMU, and memory controller require no modification.

<p align="center">
  <img src={require('./images/tee-provider-11.png').default} />
</p>

## Computation types supported by our TEE

TEE implements so-called attested computations and programs. They require that the user's execution expectations are met and that the code is actually executed in isolation on a given remote machine.

If the attested program stores any information internally at runtime, it must guarantee [minimum leakage](https://eprint.iacr.org/2016/014), which means that the input/output of the attested program must not leak any information other than the unavoidable leakage predicted by a fair code execution.

## Difference between SP and ZK/MPC

Unlike ZK-SNARKs and MPCs, Super Protocol uses hardware protection rather than algorithmic protection.

When using the standard MPC-based algorithmic protection, the data must be encrypted before it can be used and, resulting in the data also being returned encrypted:

<p align="center">
  <img src={require('./images/tee-provider-12.png').default} />
</p>

With TEE, data encryption and computations take place inside the protected area of the processor:

<p align="center">
  <img src={require('./images/tee-provider-13.png').default} />
</p>

The result is immediately encrypted within the TEE area to ensure complete confidentiality of the data once it is processed.

TEE guarantees code and data isolation at runtime through the additional use of cryptographic operations to protect secrets. For example, Intel SGX provides protected memory areas (or enclaves) in which code or data is not encrypted when it is processed in the CPU cache and registers, but is encrypted when it falls outside the CPU perimeter.

It is also worth noting that the low performance of MPC solutions is due to the need for cryptographic primitives and decomposition of executable code into logical elements.

The TEE solution itself is neither scalable nor distributed, but it gains both in the Super Protocol concept.

To summarize, let's have a look at the comparison table:

||**Security**|**Speed**|**Scalable**|**Any application**|**Distribution**|
| :- | :- | :- | :- | :- | :- |
|**TEE**|**Yes**|**Yes**|No|**Yes**|No|
|**MPC**|**Yes**|No|**Yes**|No|**Yes**|
|**Simple Application**|No|**Yes**|No|**Yes**|No|
|**Cloud Application**|No|**Yes**|**Yes**|**Yes**|No|
|**TEE Super Protocol solution**|**Yes**|**Yes**|**Yes**|**Yes**|**Yes**|

## Speed and performance

Storing unencrypted code and data at the processor level allows TEE solutions and applications to be executed much faster compared to the scenarios where complex cryptography is used.

The code at the TEE level executes almost [as fast as normal code](https://medium.com/@danny_harnik/impressions-of-intel-sgx-performance-22442093595a).

## Fault tolerance

<p align="center">
  <img src={require('./images/tee-provider-14.png').default} />
</p>

The entire Super Protocol stack is built on the use of distributed systems. At the heart of such systems is the blockchain, with which the value customer and the value provider interact. For the results of completed orders, the blockchain also provides references to the distributed storage.

The main Super Protocol blockchain is Polygon. The Polygon blockchain network uses the so-called **Proof of Stake (PoS)** consensus system, which is backed by **Tower Consensus** to ensure fault tolerance. It is a variation of the system known as Practical Byzantine Fault Tolerance (PBFT). It allows distributed networks to achieve consensus despite attacks from malicious nodes.

As a distributed storage, it is proposed to use systems based on the same principle as PBFT. An example of such a system could be Filecoin. Also, in order to add extra fault tolerance for important data, backup mechanisms can be applied.

Ensuring client fault tolerance is an important task for developers who connect to the network via the SDK. The SDK itself supports asynchronous threaded access to resources for this purpose.

## Security

TEE areas provide the opportunity to validate code and data contained inside in order to determine their integrity as well as limit potential attacks. Ideally, the attacker can only control the consumption of resources.

However, implementing TEE to protect multi-party computations is not just a matter of code migration. The trust model associated with TEE differs significantly from the cryptographic approaches in MPC. Using TEE requires making additional security assumptions and a modified trusted computing base (TCB), whereas the security assumptions in cryptography are often much simpler. The security properties of each TEE must be carefully examined to determine whether they meet the computational requirements or not. Besides that, a great deal of attention must be paid to avoid accidental leakage of secrets through side channels and when exchanging data between trusted and untrusted components.

For this purpose, Super Protocol provides a core feature: a solution loader that validates solutions before they are loaded and executed. All data outside the TEE must be encrypted in both transmission and use states.

### Known TEE issues and their fixes

Although hardware technology is attractive, it should not be used carelessly in applications that guarantee confidentiality of computing. Premature use of these technologies can lead to unintentional exposure.

For example, in a cuckoo attack, the malware can redirect messages intended for the local Trusted Platform Module (TPM) to a different computer controlled by the attacker. The attacker can then stealthily take control of all communications between the victim and the local TPM. To prevent this, a secure channel to the local TPM must be set up.

In the case of Intel SGX, improper separation of code into trusted (enclave) and untrusted components could result in a leakage of confidential information. Automated partitioning tools, such as [Glamdring](https://www.researchgate.net/publication/317933820_Glamdring_Automatic_Application_Partitioning_for_Intel_SGX), can help ensure correct partitioning with minimal leakage. The partitioning can be further verified by using verifiers such as [Moat](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/ccsfp089-sinhaA.pdf), which uses the automatic theorem proving mechanism and information flow analysis to formally verify confidentiality properties of SGX applications. In addition to partitioning errors, Intel SGX is vulnerable to a number of other attacks. Side channels have been a particularly major problem for SGX. Intel however has excluded these attacks from the threat model, believing that responsibility for this vulnerability lies on the shoulders of the developer.

Even so, vulnerabilities within SGX are a serious concern. [Controlled-channel attacks](https://www.ieee-security.org/TC/SP2015/papers-archived/6949a640.pdf) are cache-based attacks that use memory access patterns to exfiltrate information from the enclaves. Schwarz demonstrates that it is possible to use SGX itself as a means of hiding [malicious](https://arxiv.org/pdf/1702.08719.pdf) cache attacks that come from the enclaves. It is not just the cache that is a concern—SGX [can also be used](https://www.researchgate.net/publication/317061754_Leaky_Cauldron_on_the_Dark_Land_Understanding_Memory_Side-Channel_Hazards_in_SGX) to find side channels throughout the entire memory hierarchy, from DRAM to the Translation Lookaside Buffer (TLB). Attacks on the microarchitecture have generated a lot of interest recently, in particular, [Meltdown](https://www.usenix.net/system/files/conference/usenixsecurity18/sec18-lipp.pdf) and [Spectre](https://arxiv.org/abs/1801.01203) attacks targeting speculative execution units by allowing the reading of privileged kernel memory. While SGX has proven largely resistant to these attacks, more recent [Foreshadow](https://www.usenix.org/conference/usenixsecurity18/presentation/bulck) attacks have also targeted speculative execution and in particular SGX by using attestation key disclosure techniques in secure enclaves. Although significant research is underway to develop defensive mechanisms for these attacks, it is clear that protection of SGX from memory vulnerabilities will remain an active area of research for a long time.

There have also been several attacks on AMD SEV. The [SEVered](https://arxiv.org/pdf/1805.09604.pdf) attack amplifies the lack of integrity protection and allows the hypervisor to change the memory structure of virtual machines and force services to return the contents of memory as plain text. A compromised hypervisor can arbitrarily modify the contents of the virtual machine's encrypted text using the AMD configuration algorithm based on physical addresses; these modifications go undetected due to the lack of encrypted memory integrity checks.

There are also attacks specific to Intel TXT and ARM TrustZone. Each technology has its own strengths and weaknesses, so it is important to choose the right technology (or technologies) for each specific threat model, computing environment, or application.

To summarize, the main disadvantage of trusted computing primitives is the possible leakage in data exchange between trusted and untrusted components. The proper use of hardware technologies will require a careful assessment of whether the chosen primitive meets all the required security features of a particular solution.

### Hiding data sources

Due to the possibility of taking TEE outside the perimeter of the value provider, there is a mechanism for proxying queries. If we consider possible attacks on the TEE boundaries, the following types can be distinguished:

1. **Software attacks.** This type of attack is ruled out because TEE guarantees processor-level protection.
2. **Hardware attacks.** Hardware vulnerabilities are described in detail in the section dedicated to known attacks. The protocol supports the ability to check the TEE version to determine if it is secure enough to perform the desired execution.
3. **Transmission channel attacks.** The channel between the TEE and the value provider is cryptographically protected, however the attacker can obtain secondary information such as the source IP address and conduct further analysis. In this regard, super protocol has the capability of proxy data transmission:

<p align="center">
  <img src={require('./images/tee-provider-15.png').default} />
</p>

For additional protection, we can split data processing into several TEE areas and set up secure channels in between them, as well as collect the results similar to the aggregation scheme of multiple value providers:

<p align="center">
  <img src={require('./images/tee-provider-16.png').default} />
</p>