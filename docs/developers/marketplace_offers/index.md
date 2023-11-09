---
id: "marketplace_offers"
title: "Marketplace Offers"
slug: "/marketplace_offers"
sidebar_position: 4
---

## Offers and provided slots table
|**Offer Id**|**Description**|**Slot Id**|
| :- | :- | :- |
|1|TEE Offer #1|1|
|2|TEE Offer #2|3|
|3|TEE Offer #3|5|
|4|TEE Offer #4|7|
|5|Python Base Image|1|
|6|NodeJS Base Image|2|
|7|Image Classification Solution|3|
|8|Speech Recognition Solution|4|
|9|Face Recognition Solution|5|
|10|Tunnel Server Solution|6|
|11|Tunnel Client Solution|7|
|12|Hosting Launcher Solution|8|
|13|Image Classification Dataset #1|9|
|14|Image Classification Dataset #2|10|
|15|Speech Recognition Dataset #1|11|
|16|Speech Recognition Dataset #2|12|
|17|Face Recognition Dataset #1|13|
|18|Face Recognition Dataset #2|14|
|19|Demo Static Website|15|
|20|Storj DCS Offer|16|



## Compatibility

Here is the list of proper combinations of Solutions+Data currently available in the Marketplace:

| Solution | Data | Description |
| :-- | :-------- |
| Hosting Launcher | Super Chat Config|
| Hosting Launcher | Demo Static Website|
| Hosting Launcher | Upload your own static web content|
| Face Recognition | Face Recognition Dataset #1<br/>Face Recognition Dataset #2<br/>Upload your own data (images)|
| Speech Recognition | Speech Recognition Dataset #1<br/>Speech Recognition Dataset #2<br/>Upload your own data (audio files)|
| Image Classification | Image Classification Dataset #1<br/>Image Classification Dataset #2<br/>Upload your own data (images+table)|

:::caution Attention!

In a single order you can deploy **only one** dataset with Hosting Launcher. Either a dynamic app or a static webpage. For ML scripts you can use multiple datasets at the same time.

:::