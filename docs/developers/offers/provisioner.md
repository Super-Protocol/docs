---
id: "provisioner"
title: "Provider Provisioner"
slug: "/offers/provisioner/"
sidebar_position: 8
---

## Introduction

Provider Provisioner is a utility application for Solution and Data Providers. It enables users to launch orders using the provider's Solution or Data Offers.

Every five minutes, Provider Provisioner checks for new orders that use your active Solution or Data offer. When found, the application decrypts the order with its private key and allows it to be processed securely. If the order doesn't receive a response from your Provider Provisioner, it won't process and will hang indefinitely with the New status. If your offer fails to respond for 15 minutes, the system marks it as potentially abandoned by moving it into the Inactive category.

## Provider Provisioner order

Running a Provider Provisioner order is mandatory for maintaining any active offer. Super Protocol is decentralized, so you, as the Offer Provider, are responsible for keeping the Provider Provisioner order running. If your offer becomes Inactive, you can reactivate it by contacting the Super Protocol team on [Discord](https://discord.gg/superprotocol) in the #developers channel (see [Moderation Guidelines](https://docs.dev.superprotocol.com/developers/marketplace/moderation/)).

Currently, each of your active offers should have a dedicated Provider Provisioner order running.

## Support

If you face issues or have questions, contact any Community Manager on the Super Protocol [Discord server](https://discord.com/invite/superprotocol).