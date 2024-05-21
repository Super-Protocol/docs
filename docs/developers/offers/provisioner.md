---
id: "provisioner"
title: "Offer Provisioner"
slug: "/offers/provisioner/"
sidebar_position: 8
---

## Introduction

Provider Provisioner is a utility application for Solution and Data providers. It enables users to launch orders using your Solution or Data offer.

Every five minutes, Provider Provisioner checks for new orders that use your active Solution or Data offer. When found, Provider Provisioner decrypts it with its private key and allows the order to process securely. If the order doesn't receive a response from your Provider Provisioner, it won't process and will hang indefinitely with the New status. In case your offer fails to respond for 15 minutes, the system will mark it as potentially abandoned by moving it into the Inactive category.

## Provider Provisioner order

Running a Provider Provisioner order is mandatory for maintaining any active offer. Super Protocol is decentralized, so the responsibility for keeping a Provider Provisioner order running belongs to you as the offer provider. If your offer becomes inactive, you can reactivate it by contacting the Super Protocol team on [Discord](https://discord.gg/superprotocol) or [Telegram](https://t.me/superprotocol) (see [Moderation Guidelines](https://docs.dev.superprotocol.com/developers/marketplace/moderation/)).
## Support

If something doesn't work or look the way it should, please contact the Super Protocol team on [Discord](https://discord.com/invite/superprotocol) or [Telegram](https://t.me/superprotocol).
<!--stackedit_data:
eyJkaXNjdXNzaW9ucyI6eyJpWXdVTFdtWmd1NWVRQ0ptIjp7In
N0YXJ0IjoyMDUxLCJlbmQiOjIwODUsInRleHQiOiJjb250YWN0
IHRoZSBTdXBlciBQcm90b2NvbCB0ZWFtIG9uIn19LCJjb21tZW
50cyI6eyJIMmRNWFZaZjYzM01vSWtHIjp7ImRpc2N1c3Npb25J
ZCI6ImlZd1VMV21aZ3U1ZVFDSm0iLCJzdWIiOiJnbzoxMTU3MD
AwOTI5NDY3MzMxNzU5MTIiLCJ0ZXh0Ijoi0J3QsNGI0LggQ03R
iyDQvdC1INC80L7QvdC40YLQvtGA0Y/RgiDQotCy0LjRgtGC0L
XRgC4g0K8g0YHQv9GA0L7RgdC40Lsg0K7Qu9GOLCDQuCDQvtC9
0LAg0YHQutCw0LfQsNC70LAsINGH0YLQviDQu9GD0YfRiNC1IN
GD0LHRgNCw0YLRjCDQotCy0LjRgtGC0LXRgCDQutCw0Log0YHQ
v9C+0YHQvtCxINC60L7QvdGC0LDQutGC0LAg0LjQtyDQstGB0L
XQuSDQtNC+0LrRg9C80LXQvdGC0LDRhtC40Lg6IOKAnDEpIFR3
aXR0ZXIgLSDRjdGC0L4g0L3QtSDQv9C70L7RidCw0LTQutCwLC
DRh9GC0L7QsdGLINGD0LLQtdC00L7QvNC70Y/RgtGMINC+INC/
0YDQvtCx0LvQtdC80LDRhSDQs9C00LUg0YLRgNC10LHRg9C10Y
LRgdGPINGB0LDQv9C/0L7RgNGCLSDRjdGC0L4g0L/Qu9C+0YnQ
sNC00LrQsCDQtNC70Y8g0L/Rg9Cx0LvQuNGH0L3QvtCz0L4g0L
7QsdGJ0LXQvdC40Y8gIFxuMikg0YMg0L3QsNGBINC/0L7QutCw
INGN0LrQutCw0YPQvdGCINC90LUg0LHQuNC30L3QtdGBICjQvt
C9INC+0Ycg0LTQvtGA0L7Qs9C+0LkpLCDQsCDQuNC90LTQuNCy
0LjQtNGD0LDQu9GM0L3Ri9C5IC0g0YLQsNC6INGH0YLQviDQvd
C10YIg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDRgNCw0YHRiNC4
0YDQuNGC0Ywg0LTQvtGB0YLRg9C/INC90LAg0LLRgdC10YUuIN
GC0L7Qu9GM0LrQviAxINGH0LXQu9C+0LLQtdC6LuKAnSAgXG7Q
oi7QtS4g0LvQuNGH0LrRgyDQstC40LTQuNGCINGC0L7Qu9GM0L
rQviDQrtC70Y8sINCwINC/0YPQsdC70LjRh9C90YvQtSDRgdC+
0L7QsdGJ0LXQvdC40Y8g0YEg0L/RgNC+0LHQu9C10LzQsNC80L
gg0L/Rg9GB0YLRjCDQu9GD0YfRiNC1INC90LUg0L/QuNGI0YPR
giDRgdC+0LLRgdC10LwuINCf0YPRgdGC0Ywg0LvRg9GH0YjQtS
DQv9C40YjRg9GCINCyINCU0LjRgdC60L7RgNC00LUg0Lgg0KLQ
tdC70LXQs9GA0LDQvNC1IiwiY3JlYXRlZCI6MTcxNTgyMDY0MT
g3OH19LCJoaXN0b3J5IjpbNjkwNTQ2MTA2LC0xNjk2MjgyMzk1
LC0xNzQzOTA1ODM3LDczNjcxMzQ0NywyMzQyODg5MjUsMTM3MD
Q2NjkxOCwyMDAyNDUzNzg4LC0xNDkzMjU1NzAsLTExNzA4MTQ3
NDIsLTE5MzQ0MDg2MywxMTQzNDcyNzk0LC0xODM4MTMyODUwLD
g1MTI0NzA0OSwtNzk0NzUxOTMzLDEzMDU5NjA4OCwxNTM5MzUx
MTg2LC0xODI2NjQwNTIsMTQ4NTM3MDQzMSwxMTc1MjczMSw0Mz
kyMjk4N119
-->