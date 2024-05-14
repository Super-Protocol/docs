---
id: "gui_moderation"
title: "Moderation"
slug: "/marketplace/moderation/"
sidebar_position: 4
---

## About

This section is for providers who want their Solution or Data offers to appear in Marketplace GUI in the **Approved** section. As a prerequisite you need to have completed the steps in [Creating Providers and Offers](/developers/cli_guides/providers_offers) guide.

As a permissionless cloud, Super Protocol does not moderate or restrict offers or deployments: providers can create any offers on blockchain, which will be accessible by all users through SPCTL. However, Marketplace GUI is a separate Super Protocol product and as such we see it as our responsibility to present offers in a transparent and user-friendly manner.

## Offers filter

For the Solution and Data offers Marketplace GUI has a special filter that divides the offers in four categories:

* **Super Protocol** - offers produced by Super Protocol;
* **Approved** - community offers that were reviewed by Super team and considered acceptably operational;
* **Unmoderated** - community offers that were not reviewed, all offers end up here by default;
* **Inactive** - offers that [did not respond](/developers/cli_guides/providers_offers#about-ec) to a request to create a new order, considered non-functional and likely abandoned. See [FAQ](/developers/cli_guides/providers_offers#orders-marked-inactive).

<img src={require('./../images/gui_moderation_1.png').default} width="300" height="auto"/>

These categories are exclusive (an offer can belong only to one category). Offers in status **Disabled** do not appear in Marketplace GUI at all (providers can use [offers disable](/developers/cli_commands/offers/offers/disable) or [offers enable](/developers/cli_commands/offers/offers/enable) commands to manage this). 

## Requirements

Your offer should be well-documented, operational, and not contain anything illegal.

### Well-documented

It is important that the [description](/developers/cli_guides/providers_offers#offer-description) of your offers clearly states:
* What does your solution do?
* What is the expected result? Provide an example;
* What kind of data does it use? Provide examples of required format and structure;
* If data offer, what kind of data it contains? Provide examples of format and structure;

In the description you can also provide HTML links to outside sources (such as GitHub) for additional description and - at your discretion - downloads of your offer contents. By default, neither the users nor the Super team will have access to the actual content of your offers (due to confidentiality).

### Operational

Your offer has to work. At very least you need to test it locally and it would be a good idea to also [deploy it](/developers/cli_guides/quick_guide) to Super Protocol before turning it into an offer. After you create the offer, please test it yourself before submitting for review. 

### Not illegal

This should be self-explanatory. We do not condone the usage of Super Protocol for any types of illegal operations, just like any other cloud provider.

Your solution or data should not contain any of the following:

* **Copyright Infringement:** Uploading, sharing, or distributing copyrighted material without proper authorization.
* **Illegal File Sharing:** Sharing or distributing illegal content such as pirated software, movies, or music.
* **Hacking/Cyberattacks:** Attempting to gain unauthorized access to systems, networks, or data.
* **Data Theft:** Stealing sensitive information or personal data belonging to others.
* **Fraudulent Activities:** Engaging in scams, phishing, or other fraudulent schemes.
* **Distribution of Malware:** Uploading or distributing malicious software or viruses.
* **DDoS Attacks:** Launching Distributed Denial of Service attacks against websites or networks.
* **Child Exploitation:** Sharing, distributing, or possessing child pornography or related material.
* **Terrorist Activities:** Planning, promoting, or participating in terrorist activities.
* **Money Laundering:** Using cloud services to facilitate illegal financial transactions.

The list above refers not only to the offer content, but also the offer descriptions and any HTML links to external resources.

Please be responsible!

## Moderation process

It is quite simple.

1. Create an offer as per the [Offers and Providers Guide](/developers/cli_guides/providers_offers). Complete all steps.
2. Check that your new offer is fully functional and able to be ordered using SPCTL. Your offer will also automatically appear in Marketplace GUI in the **Unmoderated** category.
2. Create a new post in [Discord](https://discord.com/invite/superprotocol) in the **#offers** channel:
   * Make sure that it follows the naming convention: "Offer ###. The name of your offer." For example: "Offer 12. Tunnels Launcher";
   * Add a link to the offer in Marketplace GUI. The link is what you see when you open an offer window. It looks something like this: [https://marketplace.superprotocol.com/?offer=offerId%3D12&tab=about](https://marketplace.superprotocol.com/?offer=offerId%3D12&tab=about).
   * Optional but welcome: Introduce yourself and your work. We are building a Super community and every voice matters;
3. Answer any questions if requested by our moderators. They will look at your offer and make a test order;
4. If all is fine, your offer will be moved to the **Approved** category.
5. If your offer becomes **Inactive**, then you can contact our support in the same post.

This Discord topic may also be used by other users for provide feedback about your offer. 

The Super Marketplace is a great way to share and monetize your work in a secure and confidential manner. Everyone is welcome! 