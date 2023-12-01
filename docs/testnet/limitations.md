---
id: "limitations"
title: "Issues and Limitations"
slug: "/limitations"
sidebar_position: 0
---

For testnet we have a limited amount of computing resources, so we have imposed limits on compute configurations and amounts of available tokens: we want to make sure that everyone gets to participate in the Testnet. However, if you feel that the additional uptime of your solution would be beneficial to Testnet and other users, then we can discuss replenishing your order with more tokens. Please contact us at Discord. 

### Order limits

* A maximum of 2 open orders per user at the same time. Total number of orders unlimited. An order in status Done, Error or Canceled is considered closed.

* For marketplace offers: Compute configurations can be at most 2x (double) the selected offer requirements. So if the total solutions+data requirements need 2 CPU cores, then the maximum compute you can select may have 4 CPU cores. Same for other parameters.

* For your own solutions: because we don't know the requirements of your solutions, we have imposed hard limits. CPU: 2 cores, Traffic: 100 megabytes, Bandwidth: 1 megabit. Selected configuration must be no more than this limit.

### Token limits

* The most tokens you can have in your testnet wallet at a time is 2.5 TEE and 0.2 MATIC.

* You can request tokens unlimited number of times.

* The amount of token dispensed per request is 2.5 TEE and 0.2 MATIC.

* The most tokens you can request per 24 hours is 5 TEE and 0.5 MATIC.

* Do not transfer your test MATIC tokens to other accounts. Violators will be banned from Testnet.

### Marketplace GUI

To simplify Marketplace GUI for new users, we have streamlined some steps related to pre-configuration. For custom configurations please use [CLI](/developers/cli_guides/).

* All orders created through the GUI are using the default Super Protocol storage. So your order results are saved to our Storj account. But results are encrypted and only you have the key. We don't have the access.

* Tunnels created using Hosting Launcher are using the Super Protocol DNS. So your domains will look like this: https://bd-veri-toms.superprotocol.io/

### CLI commands

Some commands in CLI are currently for internal use by the Super team only. They will become available in upcoming releases.

* Commands related to creation or management of offers. 

* Commands related to registration or management of providers. 

### Testnet credentials

Your testnet accounts are issued by Super Protocol for testing purposes only. Please **do not** use them outside of Testnet and **do not** put your personal funds into them! We have the private keys to these accounts.

