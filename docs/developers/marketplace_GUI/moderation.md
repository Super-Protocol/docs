---
id: "gui_moderation"
title: "Moderation"
slug: "/marketplace/moderation/"
sidebar_position: 4
---

## About

This section is for providers who want their solution or data offers to appear in the **Approved** category in Marketplace GUI. As a prerequisite you must complete the [Providers and Offers](/developers/cli_guides/providers_offers) guide.

Super Protocol is a permissionless cloud and does not moderate or restrict offers or deployments. Providers can create any offers on blockchain, which will be accessible by users through SPCTL. However, the Marketplace GUI is a separate Super Protocol product where offers are presented in a transparent and user-friendly manner.

## Offer filter

Marketplace GUI has a special filter that divides the offers into four categories:

- **Super Protocol**: offers provided by Super Protocol
- **Approved**: community offers [reviewed](/developers/marketplace/moderation/) by the Super Protocol team and considered acceptably operational
- **Unmoderated**: community offers that were not reviewed; all new offers appear here
- **Inactive**: community offers that [do not respond](/developers/cli_guides/providers_offers#about-offer-provisioner) and, therefore, are nonfunctional and likely abandoned. Read about [Inactive offers](/developers/cli_guides/providers_offers#inactive-offers)

<img src={require('./../images/gui_moderation_1.png').default} width="300" height="auto"/>

These categories are exclusive meaning an offer can belong only to one category. Offers with the **Disabled** status do not appear in the Marketplace GUI. Providers can use [`offers disable`](/developers/cli_commands/offers/offers/disable) and [`offers enable`](/developers/cli_commands/offers/offers/enable) commands to manage this. 

## Requirements

Your offer should be well-documented and operational. It also should not contain anything illegal.

### Well-documented

The [offer description](/developers/cli_guides/providers_offers#offer-description) must explain:

- What your solution does
- The expected result; provide an example
- For solution offers: what kind of data the offer uses; provide examples of the required format and structure
- For data offers: what kind of data the offer contains; provide examples of the format and structure

In the description, you can also use HTML links to outside resources like GitHub for additional description or downloads of your offer content. By default, neither the users nor the Super Protocol team have access to the actual content of your offers due to confidentiality reasons.

### Operational

Your offer has to work. Test it locally and [deploy it](/developers/cli_guides/quick_guide) to Super Protocol before turning it into an offer. After you create the offer, test it before submitting for review.

### Not illegal

Super Protocol does not condone any type of illegal operations.

Your offer, its description, and HTML links to external resources must not be related to any of the following:

- **Copyright infringement:** Uploading, sharing, or distributing copyrighted material without proper authorization
- **Illegal file sharing:** Sharing or distributing illegal content such as pirated software, movies, or music
- **Hacking/cyberattacks:** Attempting to gain unauthorized access to systems, networks, or data
- **Data theft:** Stealing sensitive information or personal data belonging to others
- **Fraudulent activities:** Engaging in scams, phishing, or other fraudulent schemes.
- **Distribution of malware:** Uploading or distributing malicious software or viruses.
- **DDoS attacks:** Launching Distributed Denial of Service attacks against websites or networks.
- **Child exploitation:** Sharing, distributing, or possessing child pornography or related material.
- **Terrorist activities:** Planning, promoting, or participating in terrorist activities.
- **Money laundering:** Using cloud services to facilitate illegal financial transactions.

## Moderation process

1. Create an offer following the [Providers and Offers](/developers/cli_guides/providers_offers) guide. Your offer will appear in Marketplace GUI in the **Unmoderated** category.
2. Check that your new offer is fully functional and can be ordered using SPCTL.
3. Create a new post on Super Protocol Discord in the [#offers](https://discord.com/channels/951018794590023681/1239934457041916035) channel:
   + Make sure that it follows the naming convention: "Offer ###. The name of your offer" For example: "Offer 12. Tunnels Launcher".
   + Add a link to the offer in Marketplace GUI. The link is what you see when you open an offer window. It looks something like [marketplace.superprotocol.com/?offer=offerId%3D12&tab=about](https://marketplace.superprotocol.com/?offer=offerId%3D12&tab=about).
   + Introduce yourself and your work to the community (optional).
   + Use [Markdown](https://www.markdownguide.org/) to make your post more presentable.
4. Answer questions by our moderators. They will look at your offer and make a test order.
5. If all is fine, your offer will be moved to the **Approved** category.
6. If your offer becomes **Inactive**, contact the Super Protocol team in the offer's post or [create a ticket](https://discord.com/channels/951018794590023681/1094128903037128735).

Note that other users may provide feedback on your offer using the same offer's post.