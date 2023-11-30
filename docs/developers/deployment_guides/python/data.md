---
id: "data"
title: "2. Preparing Data"
slug: "/deployment_guides/python/data_prep"
sidebar_position: 3
---

## Create data archives

Pack both test input directories into separate tar.gz archives:

```
tar -czvf input-1.tar.gz -C <your solution root directory>/inputs/input-0001 .
```

```
tar -czvf input-2.tar.gz -C <your solution root directory>/inputs/input-0002 .
```

## Upload data archives

Upload archives to the storage:

```
./spctl files upload input-1.tar.gz --output input-1.json --filename input-1.tar.gz
```

```
./spctl files upload input-2.tar.gz --output input-2.json --filename input-2.tar.gz
```
