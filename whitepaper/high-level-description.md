---
id: "high-level-description"
title: "High-Level Description of the Protocol"
slug: "/high-level-description"
sidebar_label: "High-Level Description of the Protocol"
sidebar_position: 3
custom_edit_url: null
---

# High-Level Description of the Protocol

<p align="center">
  <img src={require('./high-level-01.png').default} />
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
## Protocol use cases
### Confidential computing on demand
Super Protocol is based on confidential computing. Therefore, the basic use case involves renting computing power for a wide range of different tasks. The long-term goal of our protocol development is to create a full analogue of the largest cloud service providers in the Web3 concept.

This scenario includes the following roles:

- User
- TEE provider
#### User
Super Protocol is for those who need decentralized, permissionless, trustless and easily scalable computing resources. Computing power can be rented either for a one-time task with a specific result or for an unlimited period of time.

Below is an non-exhaustive list of tasks that can be solved within the scenario:

- Individual developers and companies:
  - Deploying development and testing environments
  - Deploying distributed industrial solutions: from simple services to complex web and mobile applications
- Data Scientists:
  - Preprocessing large datasets
  - Training heavy models
  - Deploying AI services
- Content creators:
  - Rendering photos and videos
  - 3D modeling

#### TEE provider
Super Protocol is a good alternative to mining. The versatility of the protocol ensures a relatively even use of all resources: CPU, GPU (in the future), RAM, storage, and network. The same cannot be said about mining, which has repeatedly caused a serious shortage of graphics cards and power supply units on the market, and there have been concerns about [HDD and SSD shortage](https://www.tomshardware.com/news/hard-drive-ssd-shortages-imminent-if-new-cryptocurrency-blooms). Also, unlike mining, where multiple resources are used to continuously perform the same type of computation, Super Protocol resources are used to solve user problems, i.e., to constantly create new value.

Resources for the protocol can be provided both by individual owners of hardware that is currently idle and by professional hosts who can use the protocol to better utilize hardware and attract new customers.
### Solutions on demand
On-demand solutions are a logical extension of the previous scenario. In this case, the user takes advantage of the solutions prepared by the protocol providers.

This scenario includes the same roles as the previous one, and adds a new one—Solution Provider.
#### Solution Provider
Super Protocol offers solution developers a convenient platform to promote their products and scale with increasing demand for solutions, using as much TEE provider capacity as needed to fulfill orders.

Providers can offer a choice of several solutions according to the table below:

|Solution option|Examples|
| :- | :- |
|One-time use, no computing power included (to be paid separately by the customer)|<p>Solutions where load, data volume, and traffic are unpredictable:</p><p>- AI services: image classification, text translation, article title generation, etc.</p><p>- Services that require high computing power or high traffic volume: e.g., big data processing</p>|
|One-time use, computing power included|<p>Solutions that do not store data, and/or resource requirements are known in advance:</p><p>- Services for processing data from public sources with predictable resource costs: Wikipedia, social media, etc.</p><p>- Services for processing strictly regulated data sets: 10,000 pictures, 100,000 text words, etc.</p>|
|Rent, computing power not included|<p>Solutions where load, volume of data, and traffic are unpredictable:</p><p>- Ready-to-use solutions for business: project management systems, CRM, ERP, etc.</p><p>- AI service for synchronous multiple requests: bots, classification of user comments</p>|
|Rent, computing power included|<p>Solutions that do not store data, and/or resource requirements are known in advance:</p><p>- Services for online processing of data streams: analysis of stock quotes, news</p><p>- Services for visualizing public data: blockchain network statistics</p>|
### Processing of sensitive data
Super Protocol gives owners of sensitive data a unique opportunity to monetize their data without having to build a comprehensive infrastructure for data processing and protection—other providers can offer their own solutions, and Super Protocol will ensure data protection at all stages of its processing.

This scenario includes the same roles as the previous one, and adds a new one—Data Provider.
#### Data provider
In the simplest scenario, the data provider may just grant access to the data: processing solutions would come from other providers (the data provider can check and approve them for use), and computing power would be allocated as orders come in.

If maximum control over the data is required, the process can be organized in such a way that the data provider independently verifies all data processing results before handing them over to the customer.

Providers can offer data in several ways according to the table below:

|Solution option|Examples|
| :- | :- |
|One-time use, data only|A data set and a list of pre-tested and approved solutions from other providers for data processing.|
|One-time use, complete solution|A turnkey solution that includes the data set, the data processing solution (in-house or from another provider), and the necessary computing power.|
|Rent, data only|A data source and a list of pre-tested and approved solutions for data processing from other providers. Access to the data source is active as long as the rent is paid.|
|Rent, complete solution|A turnkey solution that includes the data source, the data processing solution (in-house or from another provider), and the necessary computing power. The solution is provided as long as the user pays the rent.|