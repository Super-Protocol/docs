---
id: "limitations"
title: "Testnet Limitations"
slug: "/limitations"
sidebar_position: 0
---

Testnet has a limited amount of compute resources. Super Protocol imposed limits on compute configurations and amounts of available tokens so everyone could participate in the testnet.

If you feel your solution's additional uptime would benefit Testnet and other users, contact the Super Protocol team on [Discord](https://discord.gg/superprotocol).

### Order limits

- Tunnel orders created by Tunnels Launcher expire after 72 hours, regardless of the deposit.
- You can have up to two open orders. Orders in the Done, Error, or Canceled statuses do not count towards this limit. The total number of orders is unlimited.
- Compute configurations for Marketplace offers cannot exceed the selected offer requirements more than twice. For example, if the sum of solutions and data requirements equals two CPU cores, then the maximum compute you can select is four CPU cores. The same applies to other parameters.
- For uploaded solutions, the limit is 2 CPU cores, 100 MB of traffic, and 1 Mbit/sec bandwidth. The selected configuration cannot exceed this limit.

### Token limits

- You cannot request tokens if you have more than 9 TEE and 0.9 MATIC tokens in your testnet wallet.
- You can request up to 15 TEE and 1.5 MATIC tokens per 24 hours.
- You can request tokens an unlimited number of times.
- Each token request grants 9 TEE and 0.5 MATIC tokens.
- Do not transfer your test MATIC tokens to other accounts, or you will be banned.

### Marketplace GUI

The Super Protocol team has streamlined some configuration steps to simplify the Marketplace GUI for new users. For detailed configurations, use the [CLI](/developers/cli_guides/).

- All orders created through the GUI use the storage offer [Storj DCS Offer](https://marketplace.superprotocol.com/storage?offer=offerId%3D25) by Super Protocol. Although your order results are saved to the Super Protocol Storj account, only you have the key. No one besides you can access the results, including the Super Protocol team.
- Tunnels created using [Tunnels Launcher](/developers/offers/launcher) use the Super Protocol DNS. Your domain name will look like this: [nap-larn-nef.superprotocol.io](https://nap-larn-nef.superprotocol.io/).
- Tunnels Launcher orders have enough deposit for 72 hours. Not that these orders expire after 72 hours, even if you replenish the deposit.

### Testnet credentials

Super Protocol provides you with a testnet account strictly for testing purposes. **Do not** use this account outside of Super Protocol Marketplace, and **do not** put your funds into it. The Super Protocol team has the private key to this account, so it is not truly yours.

