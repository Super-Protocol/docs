---
id: "offer-provisioner"
title: "Offer Provisioner"
slug: "/offers/offer-provisioner/"
sidebar_position: 8
---

## Introduction

Offer Provisioner is a utility application for Solution and Data providers. It enables users to launch orders using the provider's Solution or Data offers.

Every five minutes, Offer Provisioner checks for new orders that use your active Solution or Data offer. When found, the application decrypts the order with its private key and allows it to be processed securely. If the order doesn't receive a response from your Offer Provisioner, it won't process and will hang indefinitely with the New status. If your offer fails to respond for 15 minutes, the system marks it as potentially abandoned by moving it into the Inactive category.

## Offer Provisioner order

Running an Offer Provisioner order is mandatory for maintaining any active offer. Super Protocol is decentralized, so you, as the Offer Provider, are responsible for keeping the Offer Provisioner order up and running. If your offer becomes Inactive, you can reactivate it by contacting the Super Protocol team on [Discord](https://discord.gg/superprotocol) in the #developers channel (see [Moderation Guidelines](https://docs.dev.superprotocol.com/developers/marketplace/moderation/)).

Currently, every active offer should have a dedicated Offer Provisioner order running.

## Support

If you face issues or have questions, contact any Community Manager on the Super Protocol [Discord server](https://discord.com/invite/superprotocol).