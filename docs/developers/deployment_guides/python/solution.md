---
id: "solution"
title: "1. Preparing Solution"
slug: "/deployment_guides/python/solution_prep"
sidebar_position: 2
---

## Prerequisites

You need to have the following installed and configured:

- [Docker](https://www.docker.com/get-started/) - for building solutions.

- [OpenSSL](https://www.openssl.org/) - you will need OpenSSL installed to generate solution signing key. Linux: by default, Ubuntu: `apt install openssl`, MacOs: `brew install openssl`.

- [SPCTL](/developers/CLI_guides/) - our CLI tool, must be fully configured, including access to decentralized storage.

## Create folder structure

Create the following subdirectories in your solution root directory:

- `run`: the solution and libraries are placed here
- `inputs`: used for input files when testing the solution locally
- `output`: used for output files when testing the solution locally

And place your Python executables and libraries into the `run` folder.

## Set-up entrypoint.py

For illustration purposes, we will use a simple Python code as example. This program processes text files in a specified input directory, generates image from each text input, and saves the images in an output directory.

Create `entrypoint.py` file in `run` directory and add the following code:

```
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

File `entrypoint.py` is the one that gets executed when you run your Python script on Super Protocol. You can use any additional modules in your project as long as you have this file in place.

The script above requires `arial.ttf` font file in `run` directory. You can download it [here](https://www.freefontspro.com/d/14454/arial.zip).

## Install Python libraries

Create `requirements.txt` file in your solution root directory. For the script above, the content looks like this:

```
Pillow~=9.2.0
```

Run the following command in the `run` directory to download the required libraries:

```
pip3 install -r requirements.txt -t ./run/pypi/lib/python3.10/site-packages
```

**Double-check!** At this step the content of `run` directory should look as follows:

- `pypi` folder: Python libraries
- `arial.ttf`: font file
- `entrypoint.py`: Python script

## Install Python base image

For deployment your solution will be using the Python base image that is available as an offer on the Marketplace. But first you will need to test your solution locally and prepare it for deployment. To do that you need to download the Python base image and load it to Docker.

Use this command to download the Python image from its solution offer:

```
./spctl offers download-content 5
```

Then use this command to load the Python image to Docker:

```
docker load -i <Python base image archive name>
```

## Test the solution

In order to test the solution you will need some data as an input. 

Create subdirectory `input-0001` in `inputs` directory. In this new subdirectory create `text-file-1.txt` file with the following text:

```
Super Protocol is awesome!
```

Then using the same logic create `text-file-2.txt` file in the `input-0001` subdirectory with any text you like.

Run the following command in the solution root directory to launch the solution inside a Docker container:

```
docker run --platform linux/amd64 --rm -ti -v $PWD/run:/sp/run -v $PWD/inputs:/sp/inputs -v $PWD/output:/sp/output \
--entrypoint /usr/bin/python3 -w /sp/run -e PYTHONPATH="${PYTHONPATH}:/sp/run/pypi/lib/python3.10/site-packages" \
gsc-python3.10-base-solution:latest entrypoint.py
```

If done correctly, the `output` directory should now have two subdirectories, `input-0001` and `input-0002`, with .png image files containing the same text as the input files.

## Generate signing key

Now that we are happy with the way solution runs locally, the next steps are related to preparation for deployment to Super Protocol.

Run the following [command](/developers/CLI_commands/solutions/generate-key) in the directory where you placed the SPCTL executable to generate the signing key for the solution:

```
./spctl solutions generate-key signing-key
```

## Pack the solution

When the Docker image should run inside an Intel SGX enclave, the image has to be built and signed with [Gramine](https://gramine.readthedocs.io/en/latest/gsc-installation.html) (a.k.a graminized). Execute the following [command](/developers/CLI_commands/solutions/prepare) to prepare and pack the solution:

```
./spctl solutions prepare --pack-solution solution.tar.gz  --write-default-manifest \
--base-image-path python3.10-base-solution-image-0.0.2.image.tar.gz \
./run signing-key
```

After running the command, `solution.tar.gz` and `metadata.json` files are generated.

## Upload the solution

Solution needs to be uploaded to a decentralized storage before it may be executed in TEE. The storage credentials have been configured during the [SPCTL setup](/developers/cli_guides/configuring#storage).

Run the following command:

```
./spctl files upload solution.tar.gz --output solution.json \
--filename solution.tar.gz --metadata ./metadata.json
```

`solution.json` file is created.

