---
id: "quick-guide"
title: "Quick Deployment Guide"
slug: "/guides/quick-guide"
sidebar_position: 2
---

This quick guide provides instructions on deploying a <a id="solution"><span className="dashed-underline">solution</span></a> and <a id="data"><span className="dashed-underline">data</span></a> on Super Protocol. Its purpose is to introduce you to the logic and sequence of the CLI commands.

## Prerequisites

- Docker
- [SPCTL](/cli)

## 1. Prepare the solution

### 1.1. Create a Dockerfile

When writing a Dockerfile, keep in mind the special file structure inside the <a id="tee"><span className="dashed-underline">TEE</span></a>:

| Location                  | Purpose                           | Access |
| :-                        | :-                                | :- |
| `/sp/inputs/input-0001`   | Possible data location 1          | Read-only |
| `/sp/inputs/input-0002`   | Possible data location 2          | Read-only |
| `/sp/output`              | Output directory for results      | Write; read own files |
| `/sp/certs`               | Contains the order certificate    | Read-only |

:::important

Always use absolute paths, such as `/sp/...`.

:::

You can find several Dockerfile examples in the [Super-Protocol/solutions](https://github.com/Super-Protocol/solutions) GitHub repository.

### 1.2. Build a Docker image

```shell
docker build -t <YOUR_PROJECT> .
```

For example:

```shell
docker build -t my-solution .
```

### 1.3. Save and archive the image

```shell
docker save <YOUR_PROJECT>:latest | gzip > <YOUR_PROJECT>.tar.gz
```

For example:

```shell
docker save my-solution:latest | gzip > my-solution.tar.gz
```

### 1.4. Upload the archive

From your SPCTL directory, [upload](/cli/commands/files/upload) the archive with your solution:

```shell
./spctl files upload <ARCHIVE_PATH> \
--filename <YOUR_PROJECT>.tar.gz \
--output <YOUR_PROJECT>.resource.json
```

For example:

```shell
./spctl files upload ./my-solution.tar.gz \
--filename my-solution.tar.gz \
--output my-solution.resource.json
```

## 2. Prepare data

If your application requires additional input data, prepare and upload it as well.

### 2.1. Archive the data

Archive the data:

```shell
tar -czvf <DATA_NAME>.tar.gz -C <DATA_PATH> .
```

For example:

```shell
tar -czvf my_data.tar.gz -C ./data .
```

### 2.2. Upload the archive

From your SPCTL directory, [upload](/cli/commands/files/upload) the archive with your data, just like you did with the solution:

```shell
./spctl files upload <ARCHIVE_PATH> \
--filename <YOUR_DATA>.tar.gz \
--output <YOUR_DATA>.resource.json
```

For example:

```shell
./spctl files upload ./my-data.tar.gz \
--filename my-data.tar.gz \
--output my-data.resource.json
```

## 3. Deploy

Place an order using the [`workflows create`](/cli/commands/workflows/create) command. For example:

```shell
./spctl workflows create \
--tee 7
--solution ./my-solution.resource.json \
--data ./my-data.resource.json \
--data ./more-data.resource.json
```

Find the order ID in the output.

## 4. Download the result

Wait a few minutes and [check the order status](/cli/commands/orders/get):

```shell
./spctl orders get <ORDER_ID>
```

For example:

```shell
./spctl orders get 256587
```

If the status is `Done`, the order is ready, and you can [download the order result](/cli/commands/orders/download-result):

```shell
./spctl orders download-result <ORDER_ID>
```

For example:

```shell
./spctl orders download-result 256587
```