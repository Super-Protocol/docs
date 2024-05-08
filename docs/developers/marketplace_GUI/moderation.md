---
id: "gui_moderation"
title: "Moderation"
slug: "/moderation/"
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
* **Inactive** - offers that did not respond to a request to create a new order, considered non-functional and likely abandoned.

<Highlight color="red">больше про Inactive, как это работает</Highlight>

<br/>
<br/>
<br/>

<img src={require('./../images/gui_moderation_1.png').default} width="300" height="auto"/>

These categories are exclusive (an offer can belong only to one category). Offers in status **Disabled** do not appear in Marketplace GUI at all (providers can use [offers disable](/developers/cli_commands/offers/offers/disable) or [offers enable](/developers/cli_commands/offers/offers/enable) commands to manage this). 

## Requirements

Your offer should be well-documented, operational, and not contain anything illegal.

### Well-documented

It is important that the description of your offers clearly states:
* What does your solution do?
* What is the expected result? Provide an example;
* What kind of data does it use? Provide examples of required format and structure;
* If data offer, what kind of data it contains? Provide examples of format and structure;

By default, neither the users nor the Super team will have access to the actual content of your offers (due to confidentiality), so we will have to go on the description. However, at your discretion, you can make your offer available for download using the [offers download-content](/developers/cli_commands/offers/offers/download-content). You can also provide links to outside sources (such as GitHub) if open-source. This would certainly help both us and users to evaluate your offer.


<Highlight color="red">как активировать возможность скачивая оффера?</Highlight>




## Moderation process
