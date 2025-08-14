---
id: "docker"
title: "Docker and Super Protocol CLI"
slug: "/docker"
sidebar_position: 1
---

Prerequisite:
- [SPCTL](https://docs.superprotocol.com/cli/) – the Super Protocol CLI tool.

### Prepare the solution

1. Build a Docker image with your script or application.

2. Save and zip the image:

```shell
docker save <NAME>:latest | gzip > <NAME>.tar.gz
```

Replace `<NAME>` with the name of your image, for example:

```shell
docker save jupyter:latest | gzip > jupyter.tar.gz
```

3. Upload the archive using SPCTL:

```shell
./spctl files upload <PATH> --filename <NAME> --output solution_resource.json
```

Replace:

* `<PATH>` with the path to the image archive
* `<NAME>` with the name of the image archive

For example:

```shell
./spctl files upload ~/Docker/jupyter.tar.gz --filename jupyter.tar.gz --output solution_resource.json
```

The resulting file `solution_resource.json` contains information on how to access and decrypt the uploaded solution.

### Deploy

1. Place an order:

```shell
./spctl workflows create \
--solution solution_resource.json \
--data <DATASET_TII>.json \
--tee 10 \
--storage 47 \
--skip-hardware-check \
--orders-limit 100
```

Replace `<DATASET_TII>` with the path and name of a TII.JSON file. You can use the `--data` option multiple times. For example:

```shell
./spctl workflows create \
--solution solution_resource.json \
--data superprotocol-file-pack-2025-08-14T13-51-26.tii.json \
--data superprotocol-file-pack-2025-08-14T13-56-42.tii.json \
--tee 10 \
--storage 47 \
--skip-hardware-check \
--orders-limit 100
```

The output will contain the order ID.

2. Wait 15-20 minutes and check the order status:

```shell
./spctl orders get <ORDER_ID>
```

For example:

```shell
./spctl orders get 244835
```

3. If the order is complete, download the result:

```shell
./spctl orders download-result <ORDER_ID>
```

For example:

```shell
./spctl orders download-result 244835
```

4. Unzip the downloaded archive:

```shell
tar -xvzf result.tar.gz
```

The execution result is located in the `output` folder.