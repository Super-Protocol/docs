---
id: "migration-guide"
title: "Migration Guide"
slug: "/migration-guide"
sidebar_position: 3
---

This guide provides general instructions on how to select an open-source decentralized application (dApp) suitable for the [Super Hackathon](https://hackathon.superprotocol.com/) and migrate it to the opBNB blockchain.

## 1. Select a dApp

Choose any open-source dApp or smart contract deployed on the Ethereum, BNB, or Polygon blockchain that uses Chainlink data feeds.

You can explore suitable projects using the [Chainlink Ecosystem search tool](https://www.chainlinkecosystem.com/ecosystem) and applying the Product → Data Feeds filter.

[image]

## 2. Check the project

Before migrating the project, ensure it meets the requirements.

### 2.1. Open the repository

Visit the project's GitHub repository.

[image]

### 2.2. Search for feed methods

Inspect the source code and look for any of the following methods:

```
latestAnswer
getAnswer
latestRound
getRoundData
latestRoundData
```

These functions indicate that the project retrieves price or data feed values.

[image]

:::important

Ensure the call originates from a smart contract (a .sol file).
If the call is made from the frontend (.ts, .js, .tsx, or .jsx files), the dApp will not be accepted.

:::

## 3. Check the contract

1. Open the project’s documentation and find the mainnet contract address.

2. View it on [Etherscan](https://etherscan.io/) or another blockchain explorer.

Ensure that:

- The contract was deployed before September 1, 2025.
- The contract is verified (its source code is publicly available on the explorer).

[image]

## 4. Migrate the dApp

If the selected project meets all the requirements, proceed with the migration process.

### 4.1. Clone the repository

Clone the project’s repository and open it in your preferred IDE.

### 4.2. Compile and deploy

Compile the smart contracts and deploy them on the opBNB network.

## 4.3. Submit your project

Once deployed, submit your migrated dApp through the [Super Hackathon page](https://hackathon.superprotocol.com/).

## Examples

We have prepared step-by-step guides for two dApps that you can use as examples:

[Venus Protocol](/oracles/venus-protocol)

[Liquity](/oracles/liquity)