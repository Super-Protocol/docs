---
id: "rules"
title: "How It Works"
slug: "/rules"
sidebar_position: 2
---

## Choosing a dApp for migration

One way to find eligible dApps is to use the [Chainlink Ecosystem search tool](https://www.chainlinkecosystem.com/ecosystem) and filter by Ethereum, Polygon, and BNB Chain, selecting projects that use Chainlink Data Feeds.

### Eligibility requirements

The original dApp must use Chainlink Data Feeds in its on-chain logic. See the [list of supported data feeds](/hackathon/data-feeds).

The interface methods (`latestAnswer`, `getAnswer`, `latestRound`, `getRoundData`, `latestRoundData`) must be called from a smart contract (.sol file). If they are called from the frontend (.ts, .js, .tsx, or .jsx files), the dApp will not be accepted.

The dApp must be open-source and have been publicly deployed before September 1, 2025, on Ethereum, Polygon, or BNB Chain.

The chosen dApp’s original smart contracts must be verified on a public block explorer (e.g., Etherscan, BscScan, etc.).

The migration should require minimal code changes—no more than 5% of the original codebase.

Teams may submit multiple unique dApps, but each must have a different original contract address. Duplicates within a team are not allowed. Duplicate projects across different teams are allowed. The team that is the first to submit a unique dApp across the whole hackathon receives bonus points.

Frontends are welcome but optional—evaluation is based solely on the deployed smart contracts and their on-chain activity.

The project’s license must allow forking and reuse (acceptable licenses include MIT, Apache 2.0, GPL-family, or equivalent).

## Deploying to opBNB

All projects must be migrated to opBNB no earlier than the official hackathon start on October 13, 2025, at 11:00 UTC and no later than October 31, 2025, at 11:00 UTC.

Teams must use their own infrastructure for deployment and testing, including RPC endpoints, wallets, and funding.

Only verified contracts will be accepted—both the original and the migrated versions must be verified on a public block explorer so their source code can be automatically analyzed.

## Submitting projects

Projects must be submitted through the official [Super Hackathon webpage](https://hackathon.superprotocol.com/).

Teams must authorize with their team wallet, which uniquely identifies the team. The same wallet must be used for all submissions from that team.

When submitting a project, complete the following fields:

- **Original network**: the blockchain from which the dApp was migrated.
- **Original contract**: address of the original verified contract.
- **Original frontend**: link to the original frontend (optional).
- **New contract**: address of the newly deployed contract on opBNB.
- **New frontend**: web URL of the new frontend (optional).

**Only one dApp with the same original contract is allowed per team**. A dApp with the same original contract may be resubmitted, but it will overwrite all prior transactions achieved for this contract.

Only one dApp with the same new opBNB contract is allowed across the whole hackathon. Attempting to submit an existing opBNB contract will result in an error.

### Confirmation

Each submitted project will undergo an automated Confirmation process, which includes:

- Checking that both the original and migrated contracts are verified on public block explorers.
- Confirm sufficient code similarity between the original and migrated (must be over 95%).
- Validating that the contracts use Chainlink Data Feeds.
- Confirming valid contract creation dates: the original contract must be dated before September 1, 2025, and the new contract must be dated on or after October 13, 2025.

Submissions that fail any of these checks will be rejected. Possible rejection flags:

- **OldContractNotVerified**: Original contract is not verified
- **NewContractNotVerified**: Migrated contract is not verified
- **UnableToRetrieveSources**: Failed to retrieve source code
- **OldContractDateInvalid** / **NewContractDateInvalid**: Invalid creation date.
- **SimilarityTooLow**: Insufficient code similarity 
- **NotUsingChainlinkFeeds**: Missing Chainlink Data Feed usage
- **CheckFailed**: General validation failure
- **UnknownError**: Unexpected system error

## Scoring

There are three ways for a team to earn points.

### Unique dApp

The first team to submit and successfully confirm a specific open-source dApp (determined by its original contract address) receives a bonus of **100 points**. If other teams submit the same dApp later, those submissions do not earn them the bonus uniqueness points. This is done to promote a variety in dApp migrations.

### Deployment on opBNB

Each successfully deployed and confirmed contract on opBNB gives the team **100 points**. 

### Transactions

The total number of successful transactions to the deployed contracts determines the activity score. Points are calculated using a piecewise linear function with predefined thresholds. The score ranges from 1 to 100, where:

- 0 transactions = 1 point
- ≥10,000,000 transactions = 100 points
- Values in between are calculated using linear interpolation across 20 predefined milestone ranges (e.g., 5-10, 10-20, 50-100, etc.)

The progress of the top 10 teams is displayed on the Leaderboard.