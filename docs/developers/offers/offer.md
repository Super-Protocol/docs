---
id: "offer-provisioner"
title: "Offer Provisioner"
slug: "/offers/offer-provisioner"
sidebar_position: 5
---

## Introduction

Offer Provisioner is a utility application for Solution and Data providers. It enables users to launch orders using your Solution and Data offer.

Every five minutes, the script checks for new orders that use your active Solution or Data offer. When Offer Provisioner finds such an order, it decrypts your Solution or Data with its private key and allows the order to process securely. If the order doesn't receive a response from your Offer Provisioner, it won't process and will hang indefinitely. In case your offer fails to respond for 15 minutes, the system will mark it as potentially abandoned by moving it into the Inactive category.

## Offer Provisioner order

Running an Offer Provisioner order is mandatory for maintaining any active offer. Super Protocol is decentralized, so the responsibility for keeping an Offer Provisioner order running belongs to you as the offer provider. If your offer becomes inactive, you can reactivate it by contacting the Super Protocol team on [Discord](https://discord.gg/superprotocol) or [Telegram](https://t.me/superprotocol) (see [Moderation Guidelines](https://docs.dev.superprotocol.com/developers/marketplace/moderation/)).

It is possible to create an Offer Provisioner order using [Marketplace web-interface](https://marketplace.superprotocol.com/) as well as [Marketplace CLI](/developers/cli_guides). The order must have Offer Provisioner (ID: TBD) as Solution and information about your offer in a prepared tar.gz archive as Data. Please note that before creating the archive, you must complete all the steps from the [Providers and Offers](https://docs.dev.superprotocol.com/developers/cli_guides/providers_offers) guide and have your Solution or Data offer ready. Refer to that guide to create an Offer Provisioner order.

As of now, each of your offers should have its own Offer Provisioner order.

## Support

If something doesn't work or look the way it should, please contact the Super Protocol team on [Discord](https://discord.com/invite/superprotocol) or [Telegram](https://t.me/superprotocol).

