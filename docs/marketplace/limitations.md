---
id: "limitations"
title: "Testnet Limitations"
slug: "/limitations"
sidebar_position: 1
---

Testnet has a limited amount of compute resources. Super Protocol imposed limits on compute configurations and amounts of available tokens so everyone could participate in the testnet.

## Model limitations

The maximum model size is 7 billion parameters, the maximum file size is 10 GB.

## Compute limitations

## Token limitations

## Marketplace GUI

Deployed confidential use the Super Protocol temporary domain name such as [mund-avys-kefs.superprotocol.io](https://mund-avys-kefs.superprotocol.io/).

_Old:_

### Order limits

- Tunnel orders created by Tunnels Launcher expire after 72 hours, regardless of the deposit.
- You can have up to two open orders. Orders in the Done, Error, or Canceled statuses do not count towards this limit. The total number of orders is unlimited.
- Compute configurations for Marketplace offers cannot exceed the selected offer requirements more than twice. For example, if the sum of solutions and data requirements equals two CPU cores, then the maximum compute you can select is four CPU cores. The same applies to other parameters.

### Token limits

- You cannot request tokens if you have more than 9 TEE and 0.9 POL tokens in your testnet wallet.
- You can request up to 15 TEE and 1.5 POL tokens per 24 hours.
- You can request tokens an unlimited number of times.
- Each token request grants 9 TEE and 0.5 POL tokens.
- Do not transfer your test POL tokens to other accounts, or you will be banned.

### Marketplace GUI

The Super Protocol team has streamlined some configuration steps to simplify the Marketplace GUI for new users. For detailed configurations, use the [CLI](/developers/cli_guides/).

- All orders created through the GUI use the storage offer [Storj DCS Offer](https://marketplace.superprotocol.com/storage?offer=offerId%3D25) by Super Protocol. Although your order results are saved to the Super Protocol Storj account, only you have the key. No one besides you can access the results, including the Super Protocol team.
- Tunnels created using [Tunnels Launcher](/developers/offers/launcher) use the Super Protocol DNS. Your domain name will look like this: [nap-larn-nef.superprotocol.io](https://nap-larn-nef.superprotocol.io/).
- Tunnels Launcher orders have enough deposit for 72 hours. Not that these orders expire after 72 hours, even if you replenish the deposit.