---
id: "liquity"
title: "Example: Liquity"
slug: "/liquity"
sidebar_position: 5
---

Follow the steps below to migrate Liquity V2 (BOLD) to the opBNB blockchain.

This guide is based on the original [Liquity V2 Development & Deployment Guide](https://github.com/liquity/bold/blob/main/INSTRUCTIONS.md) and includes additional comments to help you migrate the project to the opBNB blockchain.

## 1. Clone the repository

Clone the Liquity V2 (BOLD) repository:

```bash
git clone git@github.com:liquity/bold.git
```

## 2. Install dependencies

Install the required packages:

```bash
pnpm install
```

## 3. Set up the contracts environment

Navigate to the contracts folder and install the dependencies required for Forge:

```bash
cd contracts && forge install
```

## 4. Build the contracts

Compile the smart contracts:

```bash
forge build
```

## 5. Test deployment locally

Before deploying to opBNB, test the setup by deploying to a local blockchain.

### 5.1. Start a local node

Open a new terminal window and run:

```bash
anvil
```

### 5.2. Deploy locally

From the `contracts/` folder, execute:

```bash
./deploy local --open-demo-troves
```

### 5.3. Example output

Below is an example of partial console output:

[image]

## 6. Configure for opBNB Deployment

Now that local deployment works, let’s prepare the project for deployment to the opBNB mainnet.

### 6.1. Create the environment file

Copy the environment template:

```bash
cp .env.template .env
```

### 6.2. Update the deployment script

Open the file `bold/contracts/utils/deploy-cli.ts` and modify the configuration for the `"mainnet"` preset to target the opBNB network.

Original code:

```ts
// network preset: mainnet
if (networkPreset === "mainnet") {
  options.chainId ??= 1;
}
```

Replace with:

```ts
// network preset: mainnet
if (networkPreset === "mainnet") {
  options.chainId ??= 204;
  options.deployer ??= "your private key";
  options.rpcUrl ??= "https://opbnb.superprotocol.com/";
}
```

### 6.3. Update the gas configuration

Modify the gas settings to include the priority gas price.

Original code:

```ts
if (options.gasPrice) {
  forgeArgs.push("--with-gas-price");
  forgeArgs.push(options.gasPrice);
}
```

Replace with:

```ts
if (options.gasPrice) {
  forgeArgs.push("--with-gas-price");
  forgeArgs.push(options.gasPrice);
  forgeArgs.push("--priority-gas-price");
  forgeArgs.push(options.gasPrice);
}
```

## 7. Update the deployment script

Open the file `bold/contracts/script/DeployLiquity2.s.sol` and replace its contents with the updated version provided here:

[DeployLiquity2.s.sol]

This version includes the following modifications:

- Constants updated for the opBNB network (instead of Ethereum mainnet).
- `chainId` changed from `1` to `204`.
- Unused or unavailable assets on opBNB have been omitted.

## 8. Deploy and verify on opBNB

Deploy the project to the opBNB mainnet and verify the contracts:

```bash
./deploy mainnet --gas-price 1 --verify --verifier etherscan --etherscan-api-key <api-key> --verifier-url https://api.etherscan.io/v2/api?chainid=204
```

### Notes on verification

During verification, the process may take some time. You might see logs such as:

```
Warning: Verification is still pending...; waiting 15 seconds before trying again (7 tries remaining)
```

Be patient and do not interrupt the process. Verification will complete automatically.

You might also encounter a warning like:

```
Warning: We haven't found any matching bytecode for the following contracts: [0xc3bec8e3f6035d49744b667dd688abd554f6201d].
```

This simply means one auxiliary contract was not verified; the primary contracts, including `PriceFeed`, are verified successfully.

### Example output

Below is an example of a successful deployment log:

[image2]

## 9. Locate the required contract address

From the deployment results, find and copy the address of the `PriceFeed` contract:

```
PriceFeed  0xc4efab6547e6fea2735df3b7654c92ef6ff900b0
```

## 10. Submit Your Project

Once the contract is verified, submit your migrated project through the [Super Hackathon webpage](https://hackathon.superprotocol.com/).

Provide the following information:

- Original network: `1`
- Original contract address: `0xCC5F8102eb670c89a4a3c567C13851260303c24F`
- New opBNB contract address: your `PriceFeed` contract address