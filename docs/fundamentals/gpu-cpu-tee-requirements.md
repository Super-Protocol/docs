---
id: "gpu-cpu-tee-requirements"
title: "GPU + CPU Requirements for TEE Mode"
slug: "/gpu-cpu-tee-requirements"
sidebar_position: 1
---

This guide outlines the core requirements and technical insights for GPU + CPU TEE compatibility, including supported setups, unsupported options, and hardware selection criteria for confidential computing and onboarding to Super Protocol.

As of May 22, 2026

This document is subject to periodic updates as new hardware, drivers, and validation data become available — or as such information is confirmed by or reported to Super Protocol.

*For the most accurate and up-to-date guidance, always consult your provider directly when making a decision.*

## Core TEE Requirements

### TEE Mode Compatibility

The system's CPU and GPU must both support TEE mode and be fully compatible with each other to operate in confidential mode.

### Recommended Instance Types

- Bare Metal or Colocation Hosting
- For Google Cloud — use Confidential Virtual Machine (CVM) — with Super OS image
- Support for CVMs from other cloud providers will be added in upcoming Super Protocol releases

### Supported GPU + CPU Configurations

#### Hopper (H100, H200, H800)

- Google Cloud CVM with NVIDIA H100 and Intel TDX (A3 machine series)
- Single-GPU Servers (PCIe or NVL).
  **Supported GPU SKUs**: H100 PCIe, H800 PCIe, H100 NVL, H800 NVL, H200 NVL.
  Paired with:
  - Intel CPU: Starting from 5th Gen Intel Xeon (x5xx series — Emerald Rapids) with Intel TDX. [Memory configuration must comply with Intel TDX requirements.](https://cc-enabling.trustedservices.intel.com/intel-tdx-enabling-guide/03/hardware_selection/)
  - AMD CPU: Starting from AMD EPYC Genoa (9xx4 series) with AMD SEV-SNP.
- 4-GPU HGX Systems (SXM5 form-factor with NVLink)
  **Supported GPU SKUs**: HGX H100 4-GPU 64GB HBM2e (Partner Cooled), HGX H100 4-GPU 80GB HBM3 (Partner Cooled), HGX H100 4-GPU 94GB HBM2e (Partner Cooled).
  Paired with:
  - Intel CPU: Starting from 5th Gen Intel Xeon (x5xx series — Emerald Rapids) with Intel TDX. [Memory configuration must comply with Intel TDX requirements.](https://cc-enabling.trustedservices.intel.com/intel-tdx-enabling-guide/03/hardware_selection/)
  - AMD CPU: Starting from AMD EPYC Genoa (9xx4 series) with AMD SEV-SNP.
- 8-GPU HGX Systems (SXM5 form-factor with NVLink & 4 NVSwitches)
  **Supported GPU SKUs:** HGX H100 8-GPU 80GB (Air Cooled), HGX H100 8-GPU 96GB (Air Cooled), HGX H20 141GB HBM3e 8-GPU (Air Cooled), HGX H20A HBM3 96GB 8-GPU (Air Cooled), HGX H200 8-GPU 141GB (Air Cooled), HGX H800 8-GPU 80GB (Air Cooled), HGX H800 8-GPU 80GB (Partner Cooled).
  Paired with:
  - Intel CPU: Starting from 5th Gen Intel Xeon (x5xx series — Emerald Rapids) with Intel TDX. [Memory configuration must comply with Intel TDX requirements.](https://cc-enabling.trustedservices.intel.com/intel-tdx-enabling-guide/03/hardware_selection/)
  - AMD CPU: Starting from AMD EPYC Genoa (9xx4 series) with AMD SEV-SNP.

#### Blackwell (B200, B300, RTX PRO 6000)

- HGX B200 System. 8x Blackwell GPUs with NVLink 5 & 2 NVLink Switches
  **Supported GPU SKUs:** HGX B200 8-GPU 180GB HBM3e (Air Cooled), HGX B200 8-GPU 180GB HBM3e (Partner Cooled), HGX B200-850 8-GPU 180GB HBM3e (Air Cooled).
  Paired with:
  - Intel CPU: Starting from 5th Gen Intel Xeon (x5xx series — Emerald Rapids) with Intel TDX. [Memory configuration must comply with Intel TDX requirements.](https://cc-enabling.trustedservices.intel.com/intel-tdx-enabling-guide/03/hardware_selection/)
  - AMD CPU: Starting from AMD EPYC Genoa (9xx4 series) with AMD SEV-SNP.
- HGX B300 System. 8x Blackwell Ultra GPUs with NVLink 5 & NVLink Switch
  **Supported GPU SKUs:** HGX B300 8-GPU 270GB HBM3e (Air Cooled).
  Paired with:
  - Intel CPU: Intel Xeon 6 (65xxP/65xxE and 67xxP/67xxE series — Granite Rapids (P-core) / Sierra Forest (E-core)) with Intel TDX. [Memory configuration must comply with Intel TDX requirements.](https://cc-enabling.trustedservices.intel.com/intel-tdx-enabling-guide/03/hardware_selection/)
  - AMD CPU: Starting from AMD EPYC Genoa (9xx4 series) with AMD SEV-SNP.
- RTX PRO 6000 Blackwell Server Edition (SE).
  **Supported GPU SKUs:** RTX PRO 6000 Blackwell SE, RTX PRO 6000 Blackwell SE (Liquid Cooled).
  Paired with:
  - Intel CPU: Starting from 5th Gen Intel Xeon (x5xx series — Emerald Rapids) with Intel TDX. [Memory configuration must comply with Intel TDX requirements.](https://cc-enabling.trustedservices.intel.com/intel-tdx-enabling-guide/03/hardware_selection/)
  - AMD CPU: Starting from AMD EPYC Genoa (9xx4 series) with AMD SEV-SNP.

#### Expected

Blackwell Architecture:

1. RTX PRO 6000 Blackwell Workstation and Max-Q Workstation Editions.

Rubin Architecture:

1. Vera Rubin NVL72. 72x Rubin GPUs, 36x Vera CPUs.
2. DGX Rubin NVL8. 8x Rubin GPUs, 2x Intel Xeon 6776P processors.
3. HGX Rubin NVL8.

*More information will be provided at a later time.*

## Technical Insights

### Hopper and Blackwell in TEE Mode

Unlike Hopper-based DGX/HGX systems (H100/H200), Blackwell-based platforms (such as B200, B300, and RTX PRO 6000) introduce significantly greater flexibility for confidential GPU allocation and multi-GPU deployment in TEE mode.

Blackwell-based HGX/DGX systems with NVLink support secure multi-GPU configurations in TEE mode with 1, 2, 4, or 8 GPU deployments, providing significantly more deployment options than previous-generation systems.

By contrast, Hopper multi-GPU passthrough (PPCIe) does not encrypt GPU-to-GPU NVLink communication, preventing the creation of a secure shared multi-GPU memory domain for confidential workloads. As a result, Hopper-based confidential deployments are constrained to either Single GPU Passthrough (SPT CC) or full-platform passthrough configurations (e.g., entire 8-GPU systems).

Blackwell systems may also support mixed TEE and non-TEE virtual machines (VMs) on the same physical server, subject to configuration. However, for bare metal servers, where the entire machine is dedicated to a single user, this distinction may be operationally less relevant.

#### GPU & Memory Boundaries in TEE Mode

The boundary of the Trusted Execution Environment — and therefore the boundary of accessible confidential memory — depends on two factors: the GPU architecture and the CC mode in use.

- **Single GPU Passthrough (SPT CC)** confines the trusted boundary to a single GPU's VRAM. One GPU is passed through per Confidential VM (CVM); multiple CVMs may share the same physical node, each with its own isolated GPU.
- **Hopper Multiple GPU Passthrough (Protected PCIe / PPCIe).** In this mode, multiple Hopper-architecture GPUs interconnected by NVSwitch or NVLink can be passed through to a single CVM. As in the SPT CC mode, a bounce buffer is used to stage encrypted data transfers between the GPU device and the CVM over the PCI Express bus. In this mode, GPU-GPU communications over the NVLink or NVSwitch interconnect are not hardware-encrypted.
- **Blackwell Multiple GPU Passthrough (MPT CC)** extends hardware encryption across the NVLink fabric, encrypting all GPU–GPU communication within a CVM and placing multiple GPUs inside a shared cryptographic trust boundary.

**Why this matters for workloads**: Large Language Model (LLM) inference relies on tensor parallelism (TP) to distribute model weights across multiple GPUs, requiring constant, massive data transfers. Because PPCIe does not encrypt inter-GPU NVLink traffic, Hopper architectures cannot establish a hardware-encrypted shared Peer-to-Peer (P2P) memory domain for multi-GPU confidential workloads. As a result, when operating multi-GPU Hopper platforms (such as 4-GPU or 8-GPU HGX H100) under strict zero-trust security, the GPUs cannot be treated as a hardware-encrypted aggregated confidential memory pool. While multiple GPUs can reside inside a single CVM, they can be utilized for independent task parallelization. This means each GPU operates as an isolated compute entity inside the CVM, processing separate workloads or independent model instances concurrently to prevent plaintext data exposure on the physical interconnect.

Blackwell MPT CC addresses this limitation by extending hardware-level encryption directly across the NVLink fabric. This architectural upgrade allows up to 8 GPUs to securely combine their VRAM into a single, aggregated memory pool inside one CVM.

Blackwell also enables a second path for confidential large-model inference through native NVFP4 (NVIDIA's hardware 4-bit floating-point format, E2M1 with per-block scales, executed on dedicated Blackwell Tensor Cores). According to NVIDIA's NVFP4 materials, NVFP4 cuts the model memory footprint by roughly 4× versus bf16 with near-lossless accuracy on standard benchmarks. This allows workloads that would otherwise require multi-GPU TP to fit inside a single GPU operating in SPT CC mode. For example, certain 122B-parameter MoE models can fit on a single RTX PRO 6000 Blackwell SE (96 GB), avoiding the need for multi-GPU TP or NVLink-based scaling. This is particularly relevant for SKUs without NVLink (such as RTX PRO 6000 SE), as well as for deployments that prefer the simplicity and broader hardware availability of single-GPU SPT CC over MPT CC.

For a practical example of how this unlocks workloads, see our [High-Performance Inference with vLLM on Super Protocol](https://superprotocol.com/resources/inference-with-vllm) article.

#### Hopper TEE Configurations

Hopper GPUs support two TEE configurations:

1. Single GPU Passthrough (SPT CC): 1 GPU per Confidential VM (CVM). Multiple CVMs may run on the same node, each with 1 GPU.
2. Hopper Multiple GPU Passthrough (PPCIe): All GPUs within the physical platform are passed through to a single CVM. CPU–GPU traffic is encrypted via a bounce buffer, but GPU–GPU communication over NVLink or NVSwitch is not hardware-encrypted.

As a result, Hopper architectures do not support secure shared confidential multi-GPU memory or partial GPU allocation within a larger multi-GPU platform.

#### Blackwell HGX/DGX TEE Configurations

Blackwell GPUs support two TEE modes:

1. Single GPU Passthrough (SPT CC): 1 GPU per Confidential VM (CVM). Multiple CVMs may run on the same node, each with 1 GPU.
2. Blackwell Multiple GPU Passthrough (MPT CC): The R595 TRD1 driver enables MPT CC on supported HGX B200, B200-850, B200 (Partner Cooled), and B300 platforms. Within a supported multi-GPU platform, 1, 2, 4, or 8 GPUs may be assigned to a single Confidential VM (CVM). CPU–GPU traffic is encrypted via bounce buffers, while GPU–GPU communication within the same CVM occurs over hardware-encrypted NVLink connections. This enables granular GPU allocation and extends the trusted boundary across multiple GPUs within a CVM.

Blackwell systems may also support mixed TEE and non-TEE virtual machines on the same physical server, subject to configuration. However, for bare metal servers, where the entire machine is dedicated to a single user, this distinction may be operationally less relevant.

Refer to the official [NVIDIA Confidential Computing driver documentation](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf) for SKU-level compatibility and supported modes.

#### Blackwell RTX PRO 6000 TEE Configurations

TEE functionality is currently available only for the Server Edition, while the Workstation and Max-Q Editions are expected to add support in future releases. Super plans to validate this release in upcoming tests.

The release of RTX PRO 6000 Blackwell Server Edition (SE) makes TEE support much more flexible in various topologies.

1. Currently, only SPT CC mode is validated on the RTX PRO 6000 Blackwell SE. Multi-GPU passthrough (MPT CC) on RTX PRO 6000 SE is not yet validated in R595, limiting TEE workloads to 1 GPU per CVM until future driver releases enable MPT CC for this SKU.
2. RTX PRO 6000 systems do not include NVLink, allow 1 to 8 GPUs (1, 2, 3, 4, 5, 6, 7, or 8) to operate in a single TEE instance, provided all components meet Confidential Computing requirements. The efficiency of some configurations (e.g., 2 or 3 GPUs) is still to be evaluated.
3. TEE and non-TEE VMs are also expected to operate together within the same system, following specific setup instructions.

### NVIDIA Confidential Computing Driver Releases

The driver version primarily determines which TEE modes and GPU SKUs are available on a specific platform. The overview below details the features introduced by each release.

#### Hopper

Hopper TEE capabilities were first introduced in earlier driver releases (R550-R575) and have since been stabilized and expanded across subsequent updates. R595 TRD1 is the current General Availability (GA) release.

- [**R595 TRD1 (Current GA)**](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf)**:** Carries forward baseline support for existing qualified Hopper platforms.
- [**R590 TRD1**](https://docs.nvidia.com/590trd1-trusted-computing-solutions-release-notes.pdf)**:** Maintained foundational, stable Hopper TEE validation across all established single-GPU and 8-GPU configurations.
- [**R580 TRD1**](https://docs.nvidia.com/580trd1-trusted-computing-solutions-release-notes.pdf): Provided critical optimization for Hopper multi-CVM slicing (running multiple independent SPT CC environments per physical node).
- [**R550-R575**](https://docs.nvidia.com/nvtrust/index.html#nvidiatab-release-notes): Established the core infrastructure for Hopper TEEs. R550 TRD1 launched General Availability (GA) for Single GPU Passthrough (SPT CC), while R550 TRD3 initiated the Early Access phase for Protected PCIe (PPCIe). R575 TRD1 officially graduated Protected PCIe (PPCIe) to General Availability (GA) for monolithic 8-GPU scale-up architectures.

#### Blackwell HGX/DGX systems with NVLink

Blackwell TEE capabilities represent a major architectural shift in the driver, moving from unencrypted NVLink (Hopper PPCIe) to hardware-encrypted NVLink (Blackwell MPT CC).

- **R595 TRD1 (Current GA)**: Expanded MPT CC and SPT CC support to new hardware, officially adding the HGX B300 and HGX B200 (Partner Cooled).
- **R590 TRD1**: Introduced Multiple GPU Passthrough (MPT CC), allowing 1, 2, 4, or 8 GPUs per CVM with hardware-encrypted NVLink. Initially limited to HGX B200 and B200-850 (Air Cooled (AC)).
- **R580 TRD1**: Introduced basic Blackwell TEE support with Single GPU Passthrough (SPT CC) only for HGX B200 and RTX PRO 6000 Server Edition.

#### RTX PRO 6000 Blackwell

RTX PRO 6000 TEE capabilities were introduced in recent driver releases and are gradually expanding to new hardware variants.

- **R595 TRD1 (Current GA)**: Expanded SPT CC support to new hardware, officially adding the RTX PRO 6000 Blackwell Server Edition, Liquid Cooled SKU.
- **R590 TRD1**: Continued SPT CC support for the RTX PRO 6000 Server Edition.
- **R580 TRD1**: Introduced basic TEE support with Single GPU Passthrough (SPT CC) exclusively for the RTX PRO 6000 Blackwell Server Edition.

For current firmware and OS requirements per SKU, refer to the [NVIDIA Secure AI Compatibility Matrix](https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/secure-ai-compatibility-matrix/).

### Intel CPU Support for TEE

**4th Gen Intel Xeon (Sapphire Rapids).** Intel supplied 4th Gen Xeon CPUs with TDX support exclusively to Google Cloud Platform, Microsoft Azure, IBM, and Alibaba. Only these cloud providers can offer instances with TEE-enabled 4th Gen Intel Xeon CPUs. All 4th Gen Intel Xeon CPUs from any other sources (cloud providers, OEMs, etc.) do not support Intel TDX.

For all other cases, TDX support begins with the 5th Gen Xeon (Emerald Rapids) and newer — including Sierra Forest, Granite Rapids, and beyond.

However, Intel TDX support alone may not be sufficient for NVIDIA GPU TEE workloads. NVIDIA certifies platforms based on CPU generation (among other factors), and in some cases, OEMs support only specific CPU models (SKUs) to ensure proper functionality in GPU TEE mode.

These compatibility requirements apply to both Intel TDX and AMD SEV-SNP based systems.

### Certification vs Functioning

**NVIDIA Secure AI Compatibility Matrix.** NVIDIA publishes the [Secure AI Compatibility Matrix](https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/secure-ai-compatibility-matrix/) — the official reference for supported combinations of NVIDIA GPUs, VBIOS versions, CUDA driver versions, and Confidential Computing modes (SPT CC, PPCIe, MPT CC). This matrix is the primary reference for GPU-level TEE support validation.

For a comprehensive list of GPU-accelerated systems available from the NVIDIA partner network, refer to [NVIDIA's official qualification and certification catalog](https://marketplace.nvidia.com/en-us/enterprise/qualified-system-catalog/?page=1&limit=15).

**GPU-Level vs System-Level Functioning.** The Compatibility Matrix confirms whether a specific GPU SKU and software stack are TEE-capable. However, it does not guarantee that the entire physical server will function reliably in TEE mode.

The Matrix covers GPU-level compatibility; it does not replace OEM system-level validation, which accounts for the full system integration: CPU generation, memory (DIMM) configuration, BIOS/Firmware settings, and the component interaction within a specific server chassis.

**Cooling Variants:** Air Cooled (AC), Partner Cooled (PC), and Liquid Cooled (LC) versions of the same GPU platform are treated as distinct SKUs by NVIDIA and often do not share the same TEE support status or driver availability. Always verify the exact cooling variant in the Compatibility Matrix before making a decision.

### OEM Validation Practices

OEMs are not required to conduct separate testing for TEE mode. While OEMs may not officially validate systems for TEE configurations, they often limit available configurations to those more likely to function reliably, especially in scenarios involving TEE workloads.

Additionally, many OEMs confirm that if TEE is part of the GPU feature set and all components meet the necessary requirements, TEE functionality is expected to work as intended.

Caution is advised with brand-new server models that have not yet been widely tested in the field. We've encountered cases where a newly launched system did not meet the OEM's own standards for TEE readiness and required additional adjustments or testing. Actual outcomes may vary depending on the OEM and their internal validation processes.

Even when a GPU SKU appears in the Secure AI Compatibility Matrix, testing the full configuration in a staging or pilot environment remains the most reliable way to confirm compatibility.

### System Configuration Matters

Always consult directly with your OEM or hardware reseller to verify that your specific system configuration (including BIOS/Firmware versions, memory (DIMMs), and OS validation) fully meets the requirements for Intel TDX, AMD SEV-SNP, NVIDIA GPU TEE, and your intended confidential computing workloads.

In some cases, ODMs had TEE-related BIOS settings hidden by default, making it impossible to enable TEE on otherwise compatible CPUs (AMD SEV-SNP in our case) — simply because TEE was not part of their expected use case. It can be solved but requires extra effort and time.

Some cloud providers claimed to offer Intel TDX-enabled instances, but the required DIMM configuration (i.e., main memory setup) was not met, preventing TEE mode from being properly enabled.

- As a result, the instance could not be used in TEE mode until it was replaced with the correctly configured memory setup.
- In some cases, it was not possible at all due to unavailable memory options, or required revising quote commits since the configuration fell outside standard offerings.

### Unsupported Configurations

The configurations below are not compatible for use in TEE mode in their current form.

#### GPU Configurations

- (Temporarily) RTX PRO 6000 Blackwell Workstation and Max-Q Editions — until drivers are released. TEE functionality is currently available only for the RTX PRO 6000 Blackwell [Server Edition](https://docs.nvidia.com/580trd1-trusted-computing-solutions-release-notes.pdf), while the Workstation and Max-Q Editions are expected to add support in future releases.
- 72 GPU setups.
- HGX 8 GPU PCIe systems. NVSwitches must be present instead of PCIe switches for the topology checks to be passed. As a result, PCIe cards with bridges will not pass PPCIe attestation.
- [DGX H100](https://www.nvidia.com/en-gb/data-center/dgx-h100/) (4th Gen Intel Xeon SKUs (non-TEE) and 8 x H100 (TEE-capable)) → Incompatible with TEE mode.
- [NVIDIA Grace CPU](https://www.nvidia.com/en-us/data-center/grace-cpu-superchip/): While Blackwell and Hopper GPUs can operate in TEE mode, TEE requires a TEE-capable CPU. The current NVIDIA Grace CPUs do not support TEE, as they were developed and released before ARM finalized its hardware-based TEE technology (CCA).
  - [GH200 Grace Hopper Superchip](https://www.nvidia.com/en-us/data-center/grace-hopper-superchip/): Combines 1 Hopper GPU (TEE-capable) with 1 Grace CPU (non-TEE) → Incompatible with TEE mode.
  - [NVIDIA GB200 NVL2](https://www.nvidia.com/en-us/data-center/gb200-nvl2/): Combines 2 Blackwell GPUs with two Grace CPUs (non-TEE) → Incompatible with TEE mode.
  - [NVIDIA GB200 NVL72](https://www.nvidia.com/en-us/data-center/gb200-nvl72/): Combines 72 Blackwell GPUs with two Grace CPUs (non-TEE) → Incompatible with TEE mode.
- [HGX B100 Systems.](https://www.exxactcorp.com/blog/hpc/nvidia-blackwell-deployments-gb200-nvl72-dgx-hgx-b200-hgx-b100) Although some OEMs offer such systems, for planning and compatibility purposes, we focus only on officially announced products by NVIDIA, such as [HGX B200 and B300](https://www.nvidia.com/en-us/data-center/hgx/), which come with publicly available guides and reference documentation.

#### CPU Configurations (when paired with GPU TEEs)

- 4th Gen Intel Xeon Scalable CPUs (a.k.a. Sapphire Rapids) — if not offered by Google Cloud Platform, Microsoft Azure, IBM, or Alibaba — these CPUs do not support Intel TDX and cannot be used for confidential computing with GPU TEEs.
- AMD EPYC Milan (7xx3 series) with basic SEV-SNP support. Super Protocol supports only AMD SEV-SNP starting from AMD Genoa CPUs, which align with its security requirements for decentralized architectures.
- NVIDIA Grace CPUs: Current models lack TEE support, making them incompatible with GPU TEE requirements.

### More about NVIDIA's Confidential Computing mode

1. [Secure AI Compatibility Matrix](https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/secure-ai-compatibility-matrix/): supported combinations of NVIDIA GPUs, VBIOS versions, CUDA driver versions, and Confidential Computing modes.
2. [Qualified System Catalog](https://marketplace.nvidia.com/en-us/enterprise/qualified-system-catalog/?page=1&limit=15): comprehensive list of GPU-accelerated systems available from the NVIDIA partner network.
3. [NVIDIA Trusted Computing Solutions](https://docs.nvidia.com/nvtrust/index.html): technical documentation for NVIDIA's confidential computing software stack — drivers, attestation tools, and deployment guides.
4. [Confidential Computing General Access on NVIDIA H100 Tensor Core GPUs](https://developer.nvidia.com/blog/announcing-confidential-computing-general-access-on-nvidia-h100-tensor-core-gpus/); H100 PCIe and H100 NVL form factors.
5. Confidential Computing on [NVIDIA Hopper H100 PCIe and HGX H100 8-GPU](https://developer.nvidia.com/blog/confidential-computing-on-h100-gpus-for-secure-and-trustworthy-ai/).
6. Secure AI General Availability on [NVIDIA HGX H100 8-GPU and NVIDIA HGX H200 8-GPU](https://developer.nvidia.com/blog/announcing-nvidia-secure-ai-general-availability/).
7. Confidential Computing (OC3 2026): [NVIDIA Talk](https://www.youtube.com/watch?v=OgnTJ9Bp9Xg).
8. [NVIDIA Vera Rubin NVL72](https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/?ncid=no-ncid).
