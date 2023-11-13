---
id: "exec"
title: "3. Execution and Result"
slug: "/deployment_guides/python/exec"
sidebar_position: 4
---

## Execute Solution

Now you will need to execute together:

* Your Python solution (`solution.json` uploaded to StorJ);
* Python base image from the Marketplace (offer 5);
* Your two datasets (`input-1.json` and `input-2.json` uploaded to StorJ).

Use the following [command](/developers/cli_commands/workflows/create):

```
spctl workflows create --tee 1,1 --tee-slot-count 3 --storage 20,16 --solution 5,1 \
--solution solution.json --data input-1.json --data input-2.json
```

<Highlight color="red">//Какой дата оффер из маркетплейса можно добавить в эту строчку? Датасет 16 это speech recognition</Highlight>

An order ID is generated upon execution.

## Check Order Status

You can check the order status using that ID in the following [command](/developers/cli_commands/orders/get):

```
spctl orders get <order_ID>
```

When the status turns to `Done` proceed to the next step.

## Receive Result

Retrieve the result with the following [command](/developers/cli_commands/orders/download-result):

```
spctl orders download-result <order_ID>
```

This command downloads the `result.tar.gz` file, containing:
1. `logs\log.txt` - a log file of the script. If any errors occur during the execution of the script, they will be recorded to this log file.
2. `output\inner1` and `output\inner2` - directories where the script's output is stored.

<Highlight color="red">//это точно правильные папки?</Highlight>

If the order status is `Error`, you can still download the results, but instead of an archive there will be a result.txt file with an error message.