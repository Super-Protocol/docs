---
id: "venus-protocol"
title: "Example: Venus Protocol"
slug: "/venus-protocol"
sidebar_position: 5
---

Follow the steps below to migrate the Venus Protocol Oracle to the opBNB blockchain.

This example demonstrates a complete migration workflow, from repository setup and deployment to contract verification and submission.

## Prerequisites

- Git
- Yarn 3.2.0
- Node.js ≥20
- BNB for gas on opBNB

## 1. Clone the repository

Clone the [Venus Protocol oracle repository](https://github.com/VenusProtocol/oracle):

```bash
git clone git@github.com:VenusProtocol/oracle.git
```

## 2. Install dependencies

Navigate to the cloned repository and install all required dependencies:

```bash
yarn
```

## 3. Configure the environment

### 3.1. Create a `.env` file

```bash
cp .env.example .env
```

### 3.2. Set environment variables

Open the newly created `.env` file and configure the following:

- `DEPLOYER_PRIVATE_KEY`: your private key without the `0x` prefix
- `ETHERSCAN_API_KEY`: your Etherscan API key. To obtain it, register on [Etherscan](https://etherscan.io/) and generate a new key in the [API Dashboard](https://etherscan.io/apidashboard).

## 4. Verify the environment

Run tests to ensure your environment is properly configured:

```bash
npx hardhat test
```

## 5. Clean existing deployments

Remove any previous deployment data to ensure a clean migration:

```bash
rm -rf deployments/opbnbmainnet/*
```

## 6. Deploy to opBNB mainnet

Deploy the contract to the opBNB mainnet:

```bash
npx hardhat deploy --network opbnbmainnet --tags "deploy"
```

## 7. Review deployment logs

After successful deployment, review the terminal output:

<img src={require('./images/venus-implementation.png').default} width="auto" height="auto" border="1"/>
<br/>

## 8. Save the implementation address

Locate and copy the deployed address of your contract: `ChainlinkOracle_Implementation`

You will need this address for the verification and submission steps.

## 9. Update your Hardhat configuration

Update the Hardhat configuration to include the correct opBNB network parameters:

In the `hardhat.config.ts` file, find the section under `etherscan.customChains` for `network: "opbnbmainnet"` and replace it with the following:

```ts
{
  network: "opbnbmainnet",
  chainId: 204,
  urls: {
    apiURL: 'https://api.etherscan.io/v2/api?chainid=204',
    browserURL: 'https://opbnb.bscscan.com/',
  },
},
```

## 10. Run verification

Run the verification command:

```bash
npx hardhat verify <ChainlinkOracle_Implementation-address> --network opbnbmainnet
```

Replace `<ChainlinkOracle_Implementation-address>` with the `ChainlinkOracle_Implementation` address you saved in Step 8. For example:

```bash
npx hardhat verify 0x6DA2Fe3A44dc2837e1ffc450339Ae107AE1AC2B0 --network opbnbmainnet
```

You should see `Successfully submitted source code for contract...`. Ignore the error `Error in plugin @nomiclabs/hardhat-etherscan: The Etherscan API responded with a failure status. The verification may still succeed but should be checked manually.`

## 11. Check the verified contract

Check your contract on [opbnb.bscscan.com](https://opbnb.bscscan.com/).

For example, [opbnb.bscscan.com/address/0x6DA2Fe3A44dc2837e1ffc450339Ae107AE1AC2B0\#code](https://opbnb.bscscan.com/address/0x6DA2Fe3A44dc2837e1ffc450339Ae107AE1AC2B0#code)

## 12. Submit the migration

To complete the migration, you’ll need both the original and new contract addresses.

### 12.1. Locate the original deployment

In the cloned repository, open `oracle/deployments/ethereum/ChainlinkOracle_Implementation.json`. Inside, find the original Chainlink Oracle address, for example: `0x36EFe8716fa2ff9f59D528d154D89054581866A5`.

### 12.2. Submit the project

Go to the [Super Hackathon webpage](https://hackathon.superprotocol.com/) and fill out the submission form:

- Original network: `1`
- Original contract address: `0x36EFe8716fa2ff9f59D528d154D89054581866A5`
- New opBNB contract address: your `ChainlinkOracle_Implementation` address