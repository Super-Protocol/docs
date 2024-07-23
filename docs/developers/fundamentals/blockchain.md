---
id: "blockchain"
title: "Blockchain"
slug: "/fundamentals/blockchain"
sidebar_position: 7
---

Blockchain lies at the foundation of Super Protocol. It is a decentralized, trustless, transparent, and verifiable environment. Blockchain stores metadata with information about users, providers, offers, and orders. Moreover, it provides an infrastructure for smart contracts to orchestrate the work of all components, govern the system behavior, and process transactions.

Currently, Super Protocol uses the Polygon Amoy testnet. In the future, Super Protocol will support multiple blockchains simultaneously thorough a messaging mechanism.

## Smart contracts

The following smart contracts exist in Super Protocol:

- Basic smart contract with the system configuration
- Staking smart contract
- Provider registry smart contract
- TEE Offers smart contract
- Value Offers smart contract
- Orders smart contract
- ERC-20 smart contract.

### Basic smart contract

_Basic smart contract_ contains the system configuration and information on other smart contracts. This contract is necessary to set and update the system information and settings.

The smart contract contains the following records:

- Addresses of Super Protocol smart contracts:
    + The latest version of the basic smart contract
    + Provider smart contract
    + TEE offer smart contract
    + Value offer smart contract
    + Order smart contrat
    + Token smart contract
- Offer parameters:
    + Minimum balance of the provider's security deposit
    + Value offer security deposit
    + Penalty for not fulfilling a value offer
    + Compute offer security deposit
    + Penalty for not fulfilling a compute offer
    + Reward per epoch (24 hours) for all compute resources
- Order parameters:
    + Minimum order deposit
    + Delay in days before a provider can withdraw the reward for a fulfilled offer.

### Staking smart contract

_Staking smart contract_ enables holding tokens for later profit. This functionality is currently unavailable.

The smart contract contains the following records:

- Name of the staker
- Sum of tokens staked
- Date when the tokens will be released and transferred to the main deposit.

### Provider registry smart contract

_Provider registry smart contract_ enables registration and management of [providers](/developers/fundamentals/offers) in the system.

The smart contract contains the following records:

- Authority account address
- Action account address
- Token receiver account address
- Name
- Description
- Metadata.

### TEE offers smart contract

_TEE offer smart contract_ enables the creation and management of [compute offers](/developers/fundamentals/offers#compute). Each compute offers represents a single confidential computing device.

The smart contract contains the following records:

- Authority account address of the offer provider
- Offer ID
- Offer name
- Offer description
- Type of the Trusted Execution Environment: CPU only or CPU+GPU
- Compute offer [configuraion](/developers/fundamentals/slots#configuration):
    + Arrays of provided slots and options
    + Conditions of use
    + Price
- TEE confirmation block and TEE loader block
- Public key and algorithm to encrypt offer arguments.

### Value offers smart contract

_Value offers smart contract_ enables the creation and management of [value offers](/developers/fundamentals/offers#solution-and-data)—solution, data, and storage offers. Providers can set the price, the minimum order deposit, and the [restriction rules](/developers/fundamentals/offers/#rules) to govern what offers can and cannot do.

The smart contract contains the following records:

- Authority account address of the offer provider
- Offer ID
- Offer name and description
- Other metadata:
    + Offer type: solution, data, or storage
    + Offer group: `INPUT`, `OUTPUT`, or `PROCESSING`
    + Flag that indicates if orders that use this offer are cancelable
    + Input and output data format
- Possible restrictions:
    + Offer dependencies and restrictions
    + List of customers allowed to use this offer
- Array of [requrement slots](/developers/fundamentals/slots#requirements)
- Public key and algorithm to encrypt offer arguments.

### Orders smart contract

_Order smart contract_ enables creation of [orders](/developers/fundamentals/orders). The customer who creates an order must take into account all restrictions and requirements of all the selected offers. Additionally, they must pay a security deposit.

The smart contract determines the minimum deposit for the order based on the sum of minimum deposits of all suborders and the order minimum deposit set by the protocol, whatever is bigger.

The smart contract contains the following records:

- Customer account address
- Compute offer ID
- Order ID
- Lists of public and encrypted arguments
- Order status
- Price and deposits, may change during processing:
    + Current order price
    + Current amount of spent deposit
    + Current amount of deposit spent on options
- Order result:
    + Public key and algorithm to encrypt the order result
    + Encrypted result.
