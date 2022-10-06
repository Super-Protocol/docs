---
id: "storage-provider"
title: "Storage Provider"
slug: "/storage-provider"
sidebar_position: 12
---

To store value segments and any other results, the provider can use decentralized repositories, which are enumerated on the order creation list alongside their own solutions. The outputs are encrypted with the order result key within the TEE area.

One possible solution is to use [Arweave](https://www.arweave.org/whitepaper.pdf) distributed storage with Proof of Access technology.

<p align="center">
  <img src={require('./images/storage-provider-01.png').default} />
</p>

There are also alternative solutions out there like [Filecoin](https://filecoin.io) and [Storj](https://www.storj.io). The protocol allows the use of any of the solutions by specifying the solution platform and the link for user access.

All of these solutions can be presented as part of the Super Protocol offer and used in conjunction with the underlying solution to preserve the results.