---
id: "solution"
title: "1. Preparing Solution"
slug: "/deployment_guides/python/solution_prep"
sidebar_position: 2
---

## About

This guide will take you through the steps of deploying a simple Python solution on Super Protocol, using our in-house [Image Classification](/developers/offers/python-image) solution with two sample datasets as an example. You can then use these steps to deploy your own Python solutions.

## Prerequisites

You need to have the following installed and configured:

- [Docker](https://www.docker.com/get-started/) - for building solutions.

- [OpenSSL](https://www.openssl.org/) - you will need OpenSSL installed to generate solution signing key. Linux: by default, Ubuntu: `apt install openssl`, MacOs: `brew install openssl`.

- [SPCTL](/developers/cli_guides/) - our CLI tool, must be fully configured, including access to decentralized storage.

## Create folder structure

Create the following subdirectories in your solution root directory:

- `run`: the solution and libraries are placed here
- `inputs`: used for input files when testing the solution locally
- `output`: used for output files when testing the solution locally

Python executables and libraries will be placed into the `run` folder on the next steps.

## Set up entrypoint.py

Download the solutions repository.

```shell
git clone https://github.com/Super-Protocol/solutions
```

Then download and decrypt solution using `resource.json` file in the `Image Classification` directory of the solutions repository to get the archive with the source code:

```shell
./spctl files download ./solutions/Image\ Classification/resource.json ./
```

Unpack the archive, copy all the files from it, except `pypi` folder, into your `run` directory. We will create `pypi` folder later ourselves.

The file `entrypoint.py` is the one that gets executed when you run your Python script on Super Protocol. You can use any additional modules in your project as long as you have this file in place. Please note that `entrypoint.py` should contain the information about how to access input and output data. An example is given below:

```
RUN_DIR = os.getenv('RUN_FOLDER', os.path.dirname(os.path.abspath(__file__)))
INPUT_DIR = os.getenv('INPUT_DATA_FOLDER', os.path.join(RUN_DIR, "..", "inputs"))
OUTPUT_DIR = os.getenv('OUTPUT_DATA_FOLDER', os.path.join(RUN_DIR, "..", "output"))
```

## Install Python base image

For deployment your solution will be using the Python base image that is available as an offer on the Marketplace. But first you will need to test your solution locally and prepare it for deployment. To do that you need to download the Python base image and load it to Docker.

Use this command to download the Python image from its solution offer:

```
./spctl offers download-content 5
```

Then use this command to load the Python image to Docker:

```
docker load -i <path to the Python base image archive>
```

## Install Python libraries

Create `requirements.txt` file in your solution `root` directory. For the script above, the content looks like this:

```
Pillow~=9.2.0
torchvision~=0.16
```

Run the following command in the `root` directory to download the required libraries using Docker and our base image:

```
docker run --platform linux/amd64 --rm -ti -v $PWD:/python --entrypoint /usr/bin/pip3 -v $PWD/.pip-cache:/root/.cache/pip -w /python gsc-python3.10-base-solution:latest install -r requirements.txt -t ./run/pypi/lib/python3.10/site-packages
```

:::note
Please check Docker limits in case if more resources are needed to finish the installation process successfully.
:::

As a result, `pypi` folder should be created in the `run` directory and it should include the installed libraries.

## Test the solution

In order to test the solution you will need some data as an input. 

You will need to download the datasets: [Image Classification Dataset #1](https://github.com/Super-Protocol/datasets/blob/main/Image%20Classification%20Datasets/image-classification-ds1.tar.gz?raw=true), [Image Classification Dataset #2](https://github.com/Super-Protocol/datasets/blob/main/Image%20Classification%20Datasets/image-classification-ds2.tar.gz?raw=true).

Create two subdirectories in `inputs` directory:
- `input-0001` with the images from Image Classification Dataset #1;
- `input-0002` with the images from Image Classification Dataset #2.

Run the following command in the solution root directory to launch the solution inside a Docker container:

```
docker run --platform linux/amd64 --rm -ti -v $PWD/run:/sp/run -v $PWD/inputs:/sp/inputs -v $PWD/output:/sp/output \
--entrypoint /usr/bin/python3 -w /sp/run -e PYTHONPATH="${PYTHONPATH}:/sp/run/pypi/lib/python3.10/site-packages" \
gsc-python3.10-base-solution:latest entrypoint.py
```

If done correctly, the `output` directory should contain `.csv` file with results.

## Generate signing key

Now that we are happy with the way solution runs locally, the next steps are related to preparation for deployment to Super Protocol.

Run the following [command](/cli/commands/solutions/generate-key) in the directory where you placed the SPCTL executable to generate the signing key for the solution:

```
./spctl solutions generate-key signing-key
```

## Pack the solution

When the Docker image should run inside an Intel SGX enclave, the image has to be built and signed with [Gramine](https://gramine.readthedocs.io/en/latest/gsc-installation.html) (a.k.a graminized). Execute the following [command](/cli/commands/solutions/prepare) to prepare and pack the solution:

```
./spctl solutions prepare --pack-solution solution.tar.gz  --write-default-manifest \
--base-image-path <Python base image archive name> \
./run signing-key
```

:::note
The path to run folder should a relative path from where SPCTL is located.
:::

After running the command, `solution.tar.gz` and `metadata.json` files are generated.

## Upload the solution

Solution needs to be uploaded to decentralized storage before it may be executed in TEE. The storage credentials have been configured during the [SPCTL setup](/cli#set-up-storj-access).

Run the following command:

```
./spctl files upload solution.tar.gz --output solution.json --filename solution.tar.gz --metadata ./metadata.json
```

`solution.json` file is created.

