---
id: "data"
title: "2. Preparing Data"
slug: "/deployment_guides/python/data_prep"
sidebar_position: 3
---

Now we need to prepare and upload data.

## Create data archives

After successfully completed [previous step](/developers/deployment_guides/python/solution_prep) you should have two folders `input-0001` and `input-0002` in `input` folder. We need to pack both these input directories (`input-0001` and `input-0002`) into separate tar.gz archives:

```
tar -czvf input-1.tar.gz -C <your solution root directory>/inputs/input-0001 .
```

```
tar -czvf input-2.tar.gz -C <your solution root directory>/inputs/input-0002 .
```

:::note
Please make sure that system or hidden files are not included into the archive.
:::
## Upload data archives

And [upload](/developers/cli_commands/files/upload) archives to storage:

```
./spctl files upload input-1.tar.gz --output input-1.json --filename input-1.tar.gz
```

```
./spctl files upload input-2.tar.gz --output input-2.json --filename input-2.tar.gz
```

Files `input-1.tar.gz` and `input-2.tar.gz` have been uploaded to storage and `input-1.json` and `input-2.json` have to be created.