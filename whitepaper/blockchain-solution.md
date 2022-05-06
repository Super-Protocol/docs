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
2. PROCESSING (TEE) and OUTPUT offers cannot impose restrictions

## Orders
In order to execute a provider offer, an order should be created by using the appropriate smart contract. The order creator must assign offers taking into account all restrictions and requirements the order possesses and pay a security deposit, which will be held for the duration of the order execution. The deposit amount is equal to the sum of deposits specified in all used offers. However, it should be noted that the final deposit cannot be less than the minimum deposit for the order set out by the protocol - *orderMinimumDeposit*.

The total deposit to be held is calculated according to the formula below:

![](images/blockchain-solution-formula-01.svg)

The results of the execution or encountered errors are later added up to the order by the provider. To maintain confidentiality, the arguments in the order must be encrypted using the public key specified in the offer. Also, both the result and the error string are encrypted using the public key of the result, which is specified in the order along with the encryption algorithm.

**OrderArgs public argument structure:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|slots|number|number of rented slots. Set during the TEE order creation.|
|inputOffers|guid[]|INPUT offers are part of the overall processing. Set during the TEE order creation, if necessary.|
|selectedOffers|guid[]|offers the customer has selected to meet the order restrictions|


**Order record structure:**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|consumer|account|account of the offer consumer|
|offer|guid|unique offer identifier|
|id|guid|unique order identifier|
|resultPublicKey|string|public key and algorithm used to encrypt the result in JSON format|
|args|OrderArgs|public arguments are mainly used for processing within a smart contract|
|encryptedArgs|string|list of arguments encrypted using the public key of the arguments specified in the offer|
|status|string|order status (suspended, blocked, new, processing, stopping, done, error, canceling, canceled)|
|encryptedResult|string|results of the order execution encrypted using the results public key|
|orderPrice|number|current value of the order. Can be changed by the provider during processing.|
|depositSpent|number|amount of deposit spent. Can be changed by the provider during processing.|

**Contract interface:**

|**Name and description**|**Access**|**Execution location**|
| :- | :- | :- |
|**create(Order order, uint256 holdDeposit, bool suspended) public returns (Order)**|any|blockchain|
|Order creation. When this method is called, *HoldDeposit* is paid. The "suspended" status is necessary when blocking sub-orders need to be created before the order can be executed. The provider cannot execute the order until the order status is marked as "new".|||
|**createSubOrder(guid orderId, Order subOrder, bool blockParentOrder) public returns (Order)**|<p>order.consumer</p><p></p><p>order.provider.actionAccount</p>|blockchain|
|Sub-orders are created by the customer (to assemble the entire order chain) or the provider (normally at the execution controller level). When calculating *HoldDeposit* for a sub-order, the *orderMinimumDeposit* is not taken into account in the system settings. *HoldDeposit* for a sub-order is transferred from the *HoldDeposit* of the main order*.* Once created, such an order becomes a regular one. If the *blockParentOrder* parameter is set to true, the sub-order will block the main order if its status is "suspended" or "blocked".|||
|**start(guid orderId)**|order.consumer|blockchain|
|Updates the order status from "suspended" to "blocked" if there are blocking sub-orders, or to "new" if there are none.|||
|**updateOrderPrice(guid orderId, uint256 orderPrice)**|order.provider.actionAccount|blockchain|
|Order price update. The price may be higher than the original.|||
|**updateOrderDepositSpent(guid orderId, uint256 depositSpent)**|order.provider.actionAccount|blockchain|
|Updates the deposit spent by the provider.|||
|**complete(guid orderId, status OrderStatus, string encryptedResult)**|order.provider.actionAccount|blockchain|
|Order completion. The results output or error values in the *encryptedResult* parameter are assigned as required. After the method has been executed, the order is complete and nothing more can be done to it.|||
|**cancelOrder(guid orderId) public returns(bool)**|order.consumer|blockchain|
|<p>Request to stop execution of the order on the consumer's side. The order status is changed to "canceling", the provider saves the end result of the order and moves the order to "canceled" status. If the offer is of cancelable type, smart contract immediately refunds the remaining deposit based on the proportion of time running or *depositSpent*. If the offer is of non-cancellable type, the provider sets a fee for their work after the order is complete.</p><p></p><p>***This method works only when all sub-orders are stopped.***</p>|||
|**refillOrder(guid orderId, uint256 orderAmount)**|order.consumer|blockchain|
|Replenishment of the deposit by the customer. Normally required when renewing a rental. It can also be used to obtain additional results if that is supported by the provider’s offer.|||
|**withdrawProfit(guid orderId) public**|order.provider.tokenReceiver|SDK + blockchain|
|Order profit withdrawal by the provider. Available after the order is executed. In this case, the profit is transferred to deferred payments for the number of days specified in the protocol settings (*profitWithdrawDelayDays*).|||
|**withdrawChange(guid orderId) public**|order.consumer|SDK + blockchain|
|Deposit balance withdrawal by the customer. Available order execution and price update.|||
|**getStatus(guid orderId) public returns (string)**|any|SDK|
|Retrieving the order status.|||
|**getEncryptedResult(guid orderId) public returns (string)**|any|SDK|
|Retrieving the encrypted order result string (if present). It can be decrypted using the private key of *order.resultPublicKey*.|||
|**getOrderPrice(guid orderId) public returns (uint256)**|any|SDK|
|Retrieving the current or final price of the order.|||
|**getDepositSpent(guid orderId) public returns (uint256)**|any|SDK|
|Getting the amount of the deposit spent.|||
|**setAwaitingPayment(uint256 orderId, bool value) public**|order.provider.actionAccount|blockchain|
|Setting or resetting the awaiting payment flag to signal the need for a deposit replenishment.|||
|**getAwaitingPayment(uint256 orderId) public view returns (bool)**|any|SDK|
|Getting the awaiting payment flag.|||
|**setOrderMark(guid orderId, bool positive) public**|order.consumer|blockchain|
|Giving a positive or negative rating to the provider based on the completed order. This can be triggered an unlimited number of times, depending on how the provider deals with potential errors and inaccuracies in the order. However, any order can only have a single rating. The score is given to *offer.provider*.|||
|**getProviderRating(guid providerId) public returns (fixed128x18)**|any|SDK|
|Retrieving a provider rating based on the rating formula (described below).|||

<p align="center">
  <img src={require('./images/blockchain-solution-07.png').default} />
</p>

Smart contract methods allow anyone to create orders. When additional orders related to the main order are created, the *createSubOrder* method is called with the main order ID passed as one of the parameters. This allows users to avoid paying for each sub-order as *HoldDeposit* already includes these fees.

The methods also allow both the provider to set a final order price that does not exceed *minDeposit* and the customer to receive the change.

When creating a sub-order, the following procedure must be considered:

<p align="center">
  <img src={require('./images/blockchain-solution-08.png').default} />
</p>

1. The PROCESSING (TEE) group can only have a single OUTPUT sub-order, which is specified in the *args.selectedOffers* offer list.
2. The PROCESSING (TEE) group can have any INPUT sub-order, which is specified in the *args.inputOffers* offer list. However, INPUT offer restrictions must be respected.
3. The INPUT group offer can only have a single sub-order, which is from the OUTPUT group only. It is specified in the *args.selectedOffers* offer list. However, INPUT offer restrictions must be respected.
4. The OUTPUT group can have no sub-orders.
5. When creating any order or sub-order, *args.selectedOffers* is specified if the offer contains a requirement regarding different types of offers.

### Order state transition diagram
During processing of the order, its status is subject to change according to the diagram below. Also, to indicate the lack of a deposit, the *AwaitingPayment* flag is used.

<p align="center">
  <img src={require('./images/blockchain-solution-09.png').default} />
</p>

### Workflow
When creating a complex order with dependencies, the customer creates the main order (normally for TEE) and sub-orders. The customer sets up all the required offers in *args.selectedOffers*. If the main order is created for TEE, the customer also configures all INPUT offers in the *args.inputOffers* field:

<p align="center">
  <img src={require('./images/blockchain-solution-10.png').default} />
</p>

Let us consider different scenarios for using the ordering system.

### Hardware rental
For hardware rentals, an order is created for the TEE offer and *args.selectedOffers* specifies the offer for OUTPUT, where the results will be uploaded to if needed. The number of rental minutes is also specified, and the customer pays for the entire period of time.

<p align="center">
  <img src={require('./images/blockchain-solution-11.png').default} />
</p>

Since we cannot rent a TEE alone, we have to choose a solution offer to run in it. If the solution uses a base image, such as Alpine, which is also represented as a solution offer, you need to specify it in *args.inputOffers* as well. You can also pass a link to your own solution in the parameters instead of using solution offers.

An OUTPUT is specified for each solution, if required.

The customer executes the *cancelOrder* method to terminate the hardware rental and the order is immediately terminated since all the TEE offers are of the cancelable type.

Rental can be renewed as follows:

1. The TEE provider initially assigns an awaiting payment flag to the order using the *setAwaitingPayment* method and sets a new order amount
2. The customer pays the missing amount using the *refillOrder* method

### Algorithm for choosing a suitable TEE
If you need to create an order for a TEE offer, and there are several candidates (or the offer is not specified at all), you have to select one manually. To do this, the SDK uses an algorithm to select the suitable TEE:

1. Firstly, all offers matching the TEE parameters are searched for. To do this, all properties of the INPUT solutions are analyzed, and their values are added together. These values must be less than those in the TEE offer:

    <p align="center">
      <img src={require('./images/blockchain-solution-12.png').default} />
    </p>

2. Secondly, in order to check TEE availability, the algorithm looks for the required number of available slots among suitable devices. If there are free slots available, this TEE offer can be used:

    <p align="center">
      <img src={require('./images/blockchain-solution-13.png').default} />
    </p>

    If there are no available offers, the least loaded candidates are selected.

3. Thirdly, if there is more than one candidate, the selection is carried out randomly, so the TEE order is created, and the TEE is rented out.

### Container infrastructure deployment
It is often necessary to deploy multiple containers on a single TEE device so that they can communicate with one another without the need for external access.

For example, we may want to deploy a DBMS container, a computing application providing a service to merge processed results, or a web server.

For this purpose, an order is created at the SDK level for the desired device with the total number of slots required in the "suspended" status. From there sub-orders are created for the desired containers. The order status is then changed to "blocked" until all sub-orders are completed.