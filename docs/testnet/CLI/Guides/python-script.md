---
id: "cli-guides-python-script"
title: "Execution of Python Script"
slug: "/cli/guides/python-script"
---

## Pre-requisites

Before you can use this guide, you need to receive an invitation letter with personal credentials to access the Super Protocol Testnet. If you don't have it, please refer to [Getting Started guide](/docs/content/04-testnet-testnet).

In order to deploy your own solutions you need [Command-line Interface (CLI)](/testnet/cli).

The following systems are supported:
- Linux x64
- macOS x64
- Windows (WSL only) x64

:::note
ARM-based CPUs such as Apple M1 are not supported.
:::

Additional required software:
- Docker
- OpenSSL

## Downloading Python base image

Your solution will be using base Python image that is already available on Super Protocol. Therefore, in order to test it locally, as well as prepare the solution for deployment, you need to download the base image and upload it to Docker.

Use the following CLI command to download the base image and save it to the current directory:

```
spctl offers download-content 5
```

Load the image to Docker:

```
docker load -i python3.10-base-solution-image-0.0.2.image.tar.gz
```

## Create new solution

Create the following subdirectories in your solution root directory:
- `run`: the solution and libraries are placed here
- `inputs`: used for input files when testing the solution locally
- `output`: used for output files when testing the solution locally

Create `entrypoint.py` file in `run` directory with the following code:

```python
import os
import traceback
from PIL import Image, ImageDraw, ImageFont

RUN_DIR = os.getenv('RUN_FOLDER', os.path.dirname(os.path.abspath(__file__)))
INPUT_DIR = os.getenv('INPUT_DATA_FOLDER', os.path.join(RUN_DIR, "..", "inputs"))
OUTPUT_DIR = os.getenv('OUTPUT_DATA_FOLDER', os.path.join(RUN_DIR, "..", "output"))

FONT_FILE = os.path.join(RUN_DIR, 'arial.ttf')


def draw_from_text_file(text_file, result_image):
    with open(text_file) as f:
        input_text = f.read()

    width = 512
    height = 512

    font = ImageFont.truetype(FONT_FILE, size=24)

    image = Image.new('RGB', (512, 512), color=(9, 10, 72))

    img_draw = ImageDraw.Draw(image)

    box = img_draw.textbbox((0, 0), input_text, font=font)
    x_text = (width - (box[2] - box[0])) / 2
    y_text = (height - (box[3] - box[1])) / 2

    img_draw.text((x_text, y_text), input_text, font=font, fill=(1, 240, 255))

    image.save(result_image)


def main():
    # Scan input directories and execute draw_from_text_file function for each txt file
    # Each dataset is placed in a separate subdirectory under the `inputs` directory: input-0001, input-0002, etc.
    for root, dirs, files in os.walk(INPUT_DIR):
        rel_root = root[len(INPUT_DIR) + 1:]
        os.makedirs(os.path.join(OUTPUT_DIR, rel_root), exist_ok=True)
        for filename in files:
            try:
                if not filename.endswith(".txt"):
                    raise TypeError("Only .txt files are supported as inputs")
                draw_from_text_file(
                    os.path.join(INPUT_DIR, rel_root, filename),
                    os.path.join(OUTPUT_DIR, rel_root, filename[:-len(".txt")] + ".png"))
            except Exception:
                # If unsuccessful, create a file with an error
                with open(os.path.join(OUTPUT_DIR, rel_root, filename[:-len(".txt")] + ".err"), 'w') as output:
                    output.write(str(traceback.format_exc()))


if __name__ == '__main__':
    main()

```

:::note
File `entrypoint.py` is the one that gets executed when you run your Python script on Super Protocol. You can use any additional modules in your project as long as you have this file in place.
:::

The script above requires `arial.ttf` font file in `run` directory. You can download it [here](https://www.freefontspro.com/14454/arial.ttf).

Create `requirements.txt` file in your solution root directory. For the script above, the content looks like this:

```
Pillow~=9.2.0
```

Run the following command in the solution root directory to download the required libraries:

```
pip3 install -r requirements.txt -t ./run/pypi/lib/python3.10/site-packages
```

**Double-check yourself!** If done correctly, the content of `run` directory should look as follows:
- `pypi`: Python libraries
- `arial.ttf`: font file
- `entrypoint.py`: Python script

## Test the solution

In order to test the solution, you need some data as an input. Create subdirectory `input-0001` in `inputs` directory. In this new subdirectory create `text-file-1.txt` file with the following text:
```
Super Protocol is awesome!
```

Now in the same way place `text-file-2.txt` file in this new subdirectory with any text you like.

Run the following command in the solution root directory to launch the solution inside a Docker container:

```
docker run --rm -ti -v $PWD/run:/sp/run -v $PWD/inputs:/sp/inputs -v $PWD/output:/sp/output \
--entrypoint /usr/bin/python3 -w /sp/run -e PYTHONPATH="${PYTHONPATH}:/sp/run/pypi/lib/python3.10/site-packages" \
gsc-python3.10-base-solution:latest entrypoint.py
```

If done correctly, `output` directory should have two subdirectories `input-0001` and `input-0002` with `png` files with the same text as in the input files.

## Prepare the solution

Before running your own solution on Super Protocol, you need to pack, encrypt and upload it to a storage.

First of all, run the following command in the directory where you placed the CLI file to generate the signing key:

```
spctl solutions generate-key signing-key
```

:::note
You don't need to generate a new key for every solution, you can just reuse the existing one.
:::

Next up, pack your solution with the following command:

```
spctl solutions prepare --pack-solution solution.tar.gz  --write-default-manifest \
--base-image-path python3.10-base-solution-image-0.0.2.image.tar.gz \
<your solution root directory>/run signing-key
```

Now upload your solution to the storage:
```
spctl files upload solution.tar.gz --output solution.json \
--filename solution.tar.gz --metadata ./metadata.json
```

## Prepare the data

Pack both test input directories into separate tar.gz archives:
```
tar -czvf input-1.tar.gz -C <your solution root directory>/inputs/input-0001 .
```
```
tar -czvf input-2.tar.gz -C <your solution root directory>/inputs/input-0002 .
```

Upload archives to the storage:
```
spctl files upload input-1.tar.gz --output input-1.json --filename input-1.tar.gz
```
```
spctl files upload input-2.tar.gz --output input-2.json --filename input-2.tar.gz
```

## Run the solution on Super Protocol

In order to run your prepared solution with the data on Super Protocol, run the following command:
```
spctl workflows create --tee 1,1 --tee-slot-count 3 --storage 20,16 --solution 5,1 \
--solution solution.json --data input-1.json --data input-2.json
```

The command above creates 2 orders:
- TEE: a parent order for computational resources (TEE offer with ID=1). Only this particular node can decrypt your solution and data, and only in a trusted execution environment, so even the owner of that node themselves cannot access and modify the code, data, or results.
- Solution: a sub-order for the base image (Solution offer with ID=5).

Additionally, a sub-order for storage will be created after the calculation is complete to temporarily store the results (Storage offer with ID=20).

At the end of execution the command will show the ID of the parent TEE order that is created. Use this ID to check the status of the order:
```
spctl orders get <order ID>
```

When the status is `Done`, run the following command to download the results:
```
spctl orders download-result <order ID>
```

In your CLI directory there should be a new file called `result.tar.gz`. In the archive you should find the same result that you got earlier during local testing, as well as a log file. If any errors occur during the execution of the script, they will be recorded to this log file.

If the order status is "Error", you can still download the results, but instead of an archive there will be a `result.txt` file with an error message.
