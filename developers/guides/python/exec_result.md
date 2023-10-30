---
id: "exec"
title: "Execution and Result"
slug: "/exec"
sidebar_position: 4
---

## Execute Solution

using the data you uploaded and a dataset from the marketplace

Execute the following command:

```
spctl workflows create --tee 1,1 --tee-slot-count 3 --storage 20,16 --solution 5,1 \
--solution solution.json --data input-1.json --data input-2.json --data 16,12
```

An order ID is generated upon execution.

## Check Order Status

Check the order status using:

```
spctl orders get order_ID
```

where order_ID is the number of your order

If the status is 'Done,' proceed to the next step.

## Receive Result

Retrieve the result with the following command:

```
spctl orders download-result order_ID
```

where order_ID is the number of your order

After running this command, I downloaded the `result.tar` file, which contains:
1. `logs\log.txt` - a log file of the script.
2. `output\inner1` and `output\inner2` - directories where the script's output is stored.
