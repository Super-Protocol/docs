---
id: "blockchain-solution"
title: "Blockchain Solution"
slug: "/blockchain-solution"
sidebar_label: "Blockchain Solution"
sidebar_position: 14
custom_edit_url: null
---
# Blockchain solution
## Overview

<p align="center">
  <img src={require('./images/blockchain-solution-01.png').default} />
</p>

To ensure order processing, the blockchain environment provides an infrastructure with several smart contracts:

- **Basic smart contract for the Super Protocol Config system**
- **ERC-20 smart contract**
- **Smart contract for staking**
- **Provider Registry**
- **Value Offers**
- **TEE Offers**
- **Orders**

Now let’s take a look at each smart contract in detail.
## Basic smart contract for the Super Protocol Config system
It contains information on the other smart contracts in the system. This contract is used to update current information about the system and the system settings. It also contains a link to its later version, if it ever existed. The contract contains several system configurations:

**General smart contract configuration:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|nextVersionAddress|address|address of the latest version of the Super Protocol smart contract|
|providerRegistry|address|address of the provider smart contract|
|TEEOffers|address|address of the TEE offer smart contract|
|valueOffers|address|address of the value offer smart contract|
|orders|address|address of the order smart contract|
|tokens|address|address of the tokens smart contract|

**Provider offers configuration:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|stopDelayDays|number|number of days from the moment the offer is declared irrelevant until it is no longer being processed|
|minSecDeposit|number|minimum balance of the provider's security deposit|
|offerSecDeposit|number|security deposit for the offer|
|offerPenalty|number|amount of penalty for not fulfilling the offer|
|TEEOfferSecDeposit|number|security deposit for the TEE offer|
|TEEOfferPenalty|number|amount of penalty for not fulfilling the TEE offer|
|TEERewardPerEpoch|number|reward for all TEE resources per epoch equal to 24 hours|

**Order configuration:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|orderMinimumDeposit|number|minimum deposit for each order. The remainder is refunded after the order is completed|
|profitWithdrawDelayDays|number|number of days from the moment the reward  for the completed order or TEE is received until the reward can be withdrawn|

**Contract interface:**

|**Name**|**Access**|**Execution location**|
| :- | :- | :- |
|constructor(address owner)|owner|blockchain|
|getSPConfiguration() public returns (SPConfiguration)|any|SDK|
|getOffersConfiguration() public returns (OffersConfiguration)|any|SDK|
|getOrdersConfiguration() public returns (OrdersConfiguration)|any|SDK|
|getPenaltiesCount(address provider) public returns (uint64)|any|SDK|

The smart contract makes it possible to set configurations.
## Staking smart contract
This smart contract allows tokens to be held for profit.

**Held tokens record structure:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|owner|account|owner of the tokens|
|amount|uint256|number of held tokens|
|unholdDatetime|uint64|point in time at which tokens can be released and transferred to the main deposit|

**Contract interface:**

|**Name**|**Access**|**Execution location**|
| :- | :- | :- |
|lockTokens(Propose propose, address stakeOwner, uint256 amount, uin256 period ) external returns (bool)|system|blockchain|
|confiscateTokensFrom(Purpose executor, address stakeOwner, uint256 amount)|system|blockchain|
|unlockTokens(Purpose executor, address stakeOwner, uint256 amount)|any|blockchain|
|stake(uint256 amount)|any|blockchain|
|unstake(uint256 amount)|any|blockchain|
|stakeFor(address beneficiary, uint256 amount)|any|blockchain|

Smart contract methods allow tokens to be stored so that they can later be released and rewarded for  staking.
## Provider Registry
This smart contract contains information about providers, their properties, as well as some other information. In order to be included in the registry, the provider must pay the security fee, which is immediately transferred to the provider's deposit and further kept there.

**Provider record structure:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|authority|account|owner's account that can change the provider's record|
|tokenReceiver|account|token recipient account for the data provider services|
|actionAccount|account|active account that can add and modify offer records for a data provider|
|name|string|name of the provider|
|description|string|description of the provider|
|metadata|string|metadata, which may contain additional properties, such as a link to the logo|

**Contract interface:**

|**Name**|**Access**|**Execution location**|
| :- | :- | :- |
|register(Provider provider) public returns (Provider)|any|blockchain|
|refillProviderSecurityDeposit(uint amount) public|provider.authority|blockchain|
|returnProviderSecurityDeposit(uint amount) public|provider.authority|blockchain|
|modifyProvider(Provider provider) public returns (Provider)|provider.authority|blockchain|
|get(guid providerId) public returns (Provider)|any|SDK|
|listAll() public returns (Provider[])|any|SDK|

Smart contract methods allow the registration of a provider and the modification of its properties.

<p align="center">
  <img src={require('./images/blockchain-solution-02.png').default} />
</p>

To be able to register, the provider accesses the provider registry smart contract and invokes the registration method. The provider has to pay the security deposit in the first place. If the security deposit decreases below the required level during the process (in cases where penalties have been applied and no replenishment has been made), all of the provider's offers cannot be used to create and fulfill the orders.

The *returnSecurityDeposit* method allows the withdrawal of the entire remaining security deposit, provided that all offers (regular and TEE) of the data provider are disabled.
## TEE offers
This smart contract contains offers for the use of the TEE resource. In the Super Protocol system, the price for using TEE depends on the number of hours rented under the offer. One offer corresponds to one TEE device.


**Offer record structure:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|providerAuthority|address|unique provider identifier|
|id|guid|unique offer identifier|
|name|string|offer name|
|description|string|offer description|
|teeType|string|TEE: CPU/GPU type|
|slots|number|maximum amount of resources to be used; for example, a 4-core processor can provide 1 core and hence 4 slots to use.|
|minTimeMinutes|number|minimum TEE usage time in minutes|
|properties|string|<p>device specifications in json format, for example:</p><p>{ “max\_mem”\_mb: 512,</p><p>“max\_disk”\_gb: 256,</p><p>“cpu\_passmark”: 5000,</p><p>“disk\_type”: ”ssd” }</p><p></p><p>**Can be set and modified by the consensus protocol only.**</p>|
|TCBId|guid|TEE Confirmation Block|
|TLB|binary|TEE Loader Block|
|argsPublicKey|string|public key and encryption algorithm for arguments in JSON format when placing an order for execution|

**Contract interface:**

|**Name**|**Access**|**Execution location**|
| :- | :- | :- |
|create(TEEOffer offer) public returns (TEEOffer)|Provider.actionAccount|blockchain|
|setOfferName(uint256 offerId, string name)|offer.provider.actionAccount|blockchain|
|setOfferPublicKey(uint256 offerId, string publicKey)|offer.provider.actionAccount|blockchain|
|setOfferDescription(uint256 offerId, string description)|offer.provider.actionAccount|blockchain|
|setTeeOfferTlb(uint256 offerId, string tlb)|offer.provider.actionAccount|blockchain|
|getTEEsToConfirm() returns (guid[])|offer.provider.actionAccount|blockchain|
|enable(guid offerId)|offer.provider.actionAccount|blockchain|
|disable(guid offerId)|offer.provider.actionAccount|blockchain|
|listOf(guid providerId) public returns (TEEOffer[])|any|SDK|
|listAll(bool withDisabled = false) public returns (TEEOffer[])|any|SDK|
|get(guid offerId) public returns (TEEOffer)|any|SDK|

Smart contract methods allow the provider to create a TEE offer, modify it, or mark it as disabled. For each TEE provider offer, a portion (TEEOfferSecDeposit) of the security deposit is blocked. This is to ensure protection against spam attacks and operation of the TEE consensus protocol. If the available deposit amount is insufficient, the offer will not be registered.

<p align="center">
  <img src={require('./images/blockchain-solution-03.png').default} />
</p>

In order to add a new TEE offer, the provider accesses the TEE offer smart contract and invokes the offer creation method.

The “slots” field contains the maximum number of devices provided per unit of time. A TEE can be rented for at least *minTimeMinutes* minutes.

Each TEE device participates in a validation protocol, in which all its characteristics are updated.

If the TEE device has not sent a TCB within 48 hours, it is removed from the list of active devices.
## Value offers
### Overview
This smart contract contains offers for certain values. It is also possible to create a combined value using the required values of other types. For example, the provider allows its data to be processed by another provider's solution within a secure TEE area and the encrypted result is stored in the distributed storage.

The offer describes the cost of using it and the minimum order deposit. To maintain confidentiality, the arguments for  offer execution must be encrypted. For this purpose, the public key of the asymmetric algorithm and the encryption algorithm itself are specified.

**Value offer record structure:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|providerAuthority|address|unique provider identifier|
|id|guid|unique offer identifier|
|group|string|“INPUT”,  “OUTPUT” or “PROCESSING” offer group|
|offerType|string|offer type, e.g., "Storage", "Solution", "Data", etc.|
|cancelable|bool|flag regarding the possibility of canceling the order on this offer|
|name|string|offer name|
|description|string|offer description|
|linkage|string|linkage spec, for example, for docker|
|holdSum|number|minimum deposit to place an order for offer execution|
|restrictions|string|possible restrictions and requirements for various provider offers. Used when creating an order. E.g.: ‘{“TEE”: [GUID1, GUID2], “Storage”, “Solution”: [GUID3, GUID4]}’|
|properties|string|device specifications in json format, e.g.: {“max\_mem\_mb”: 512}.|
|maxDurationTimeMinutes|number|maximum order execution duration in minutes|
|inputFormat|string|input data format , e.g., “PartiQL”, “binary”|
|outputFormat|string|output data format , e.g., “JSON”, “binary”|
|allowedArgs|dictionary|dictionary of allowed arguments in the following format: [name:string, value: string[]]|
|allowedAccounts|account[]|list of accounts allowed to place an order based on this offer. If the list is empty, all are allowed|
|argsPublicKey|string|public key and algorithm for  encrypting arguments in JSON format when the order is being placed for fulfillment|
|hash|string|hash and algorithm for non-encrypted result (if known beforehand) in JSON format|
|resultUrl|string|final path for automatic generation of the result without mandatory fulfillment|

**Contract interface:**

|**Name**|**Access**|**Execution location**|
| :- | :- | :- |
|create(Offer offer) public returns (Offer)|Provider.actionAccount|blockchain|
|setOfferName(uint256 offerId, string name)|offer.provider.actionAccount|blockchain|
|setOfferPublicKey(uint256 offerId, string publicKey)|offer.provider.actionAccount|blockchain|
|setOfferDescription(uint256 offerId, string description)|offer.provider.actionAccount|blockchain|
|enable(guid offerId)|offer.provider.actionAccount|blockchain|
|disable(guid offerId)|offer.provider.actionAccount|blockchain|
|listOf(guid providerId) public returns (Offer[])|any|SDK|
|listAll(bool withDisabled = false) public returns (Offer[])|any|SDK|
|get(guid offerId) public returns (Offer)|any|SDK|

Smart contract methods allow the provider to create a script execution offer, modify it, or mark it as disabled.

***You can only change the name and description of the offer.***

<p align="center">
  <img src={require('./images/blockchain-solution-04.png').default} />
</p>

For each provider offer, a portion of the security deposit (offerSecDeposit) is blocked. This is to ensure protection against spam attacks. If the available deposit amount is insufficient, the offer will not be registered.

In order to  add a new offer, the provider accesses the offer smart contract and invokes the offer creation method. Each offer may impose restrictions on execution. For example, an offer for big data processing imposes restrictions on the solutions that are allowed to process that data, on the TEE that can be used for execution, and on the Storage for preparing the data to be processed.

Also, the offer may simply involve the provision of a service, such as a solution. In this case, the property field contains the characteristics of the service provided, while the *resultUrl* field contains the basic *Url* of the solution. A unique identifier can be used as an argument. When the *resultUrl* is set, the smart contract immediately executes the order.

### Offer dependencies
Let us consider an example of offer dependencies based on a system of restrictions, starting from the basic data offer:

<p align="center">
  <img src={require('./images/blockchain-solution-05.png').default} />
</p>

The following restrictions are shown on the diagram:

- **Storage restriction.** The provider must save the order result to any storage (if the Storage list is empty) or to any storage from the list of restrictions (if the list is not empty). 
- **Solution restriction on the data offer side.** The Data Provider must be processed by any solution (if the Solution list is empty) or by any solution from the list of restrictions.
- **Solution restriction on the Solution Provider side.** Solutions can be executed independently (if there are no restrictions) or by utilizing any base image from the list of restrictions.
- **Processing restriction.** The data or solution must be processed/executed in any TEE (if the TEE list is empty) or in any TEE from the list of restrictions.
- **Restrictions related to processed data.** The solution must process any data (if the list of data types is empty) or any data from the list of restrictions, e.g., {"Data" : ["mp4", "avi"]} meaning that only specified formats are allowed for data input.

This chain of possible restrictions allows the provided data to be processed without access to its original value.

In terms of offer groups, only the following restrictions are possible:


<p align="center">
  <img src={require('./images/blockchain-solution-06.png').default} />
</p>

1. The INPUT offer can restrict the list of supported PROCESSING, INPUT, and OUTPUT offers
1. PROCESSING (TEE) and OUTPUT offers cannot impose restrictions