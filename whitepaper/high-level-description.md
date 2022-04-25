---
id: "high-level-description"
title: "High-Level Description of the Protocol"
slug: "/high-level-description"
sidebar_label: "High-Level Description of the Protocol"
sidebar_position: 5
custom_edit_url: null
---

# High-Level Description of the Protocol

<p align="center">
  <img src={require('./images/high-level-01.png').default} />
</p>

From a bird’s eye view, Super Protocol involves the interactions shown in the above diagram. The interactions include the following entities:

- **Provider Offers.** In a form of a provider offer, the provider offers their resources or values in exchange for a certain reward. The offer can fall into one of three categories:
  - **Input.** Offers of this type are used for cooperative processing within a trusted execution environment (TEE). These can be data offers or solution offers.
  - **Execution.** Offers for cooperative execution of input data and obtaining the result. These can be TEE offers.
  - **Output.** Offers for storing the results. These can be storage offers.

  Let's take a closer look at the types of offers:

  - **Data offer.** The provider offers their data for processing. As a rule, these offers impose restrictions on the range of solutions for processing and may impose restrictions on the TEE where the data is processed. To protect the data from leakage, a mechanism for attestation and encryption of the data is used.
  - **Solution offer.** The provider publishes the solution for execution. Possible solution types:
    - **Script.** It accepts one of the selected formats as input data and saves the result in a specific format. The code is usually fully open source and can be verified.
    - **Application.** Executed in a controlled container. The result of the execution can be verified by the provider. All inputs and outputs are also strictly controlled. The code is usually closed or available for verification only to the provider.
    - **Container or deployed solution.** Executed separately, takes the specified parameters as input, and returns the result. As a rule, the solution is fully closed.

    To protect the solution from leakage, an attestation and encryption mechanism is used for the container.

  - **Storage offer.** The provider offers storage for the results.
  - **TEE Offer.** The provider offers TEE areas for confidential computing. It also participates in a consensus protocol to verify resources and receive rewards. Provides a special block with a public key for remote attestation and protection of input and output data and solutions.

  Users can create their own value offer types and dependencies on other values by offer type.

- **Value Customer.** Uses the deployed infrastructure to acquire certain values in exchange for tokens.

The protocol supports order payment with tokens, deferred payments, and penalties for unscrupulous providers. These features improve the quality of providers' service and attract more value customers. The mechanisms are described in more detail in the "Tokenomics"  section.
