---
id: "exec"
title: "3. Execution and Result"
slug: "/deployment_guides/python/exec"
sidebar_position: 4
---

## Execute Solution

It is time to run this script on Superprotocol!

Now you will need to execute together:

* Your Python solution (`solution.json` uploaded to storage);
* Python base image solution offer from the [Marketplace](https://marketplace.superprotocol.com/solutions?offerId=5&offer=offerId%3D5);
* Your two datasets represented by `input-1.json` and `input-2.json` (which will direct TEE to download the archives from storage).

Use the following [command](/cli/commands/workflows/create):

```
./spctl workflows create --tee 1,1 --tee-slot-count 1 --storage 25,30 --solution 5,1 --solution solution.json --data input-1.json --data input-2.json
```

An order ID is generated upon execution.

## Check Order Status

You can check the order status using the [Marketplace GUI](/developers/marketplace) or the SPCTL [command](/cli/commands/orders/get):

```
./spctl orders get <order_ID>
```

When the status turns to `Done`, proceed to the next step.

## Receive Result

Retrieve the result using the [Marketplace GUI](/developers/marketplace) or the following [command](/cli/commands/orders/download-result):

```
./spctl orders download-result <order_ID>
```

