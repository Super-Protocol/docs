---
id: "solution"
title: "Preparing Solution"
slug: "/guides/python/solution_prep"
sidebar_position: 2
---

## Create folder structure

Create the following subdirectories in your solution root directory:

- `run`: the solution and libraries are placed here
- `inputs`: used for input files when testing the solution locally
- `output`: used for output files when testing the solution locally

And place your Python executables and libraries into the `run` folder.

## Set-up entrypoint.py

For illustration purposes, we will use a simple Python code as example.

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

The script above requires `arial.ttf` font file in `run` directory. You can download it [here](https://www.freefontspro.com/14454/arial.ttf).

## Install Python libraries

Create `requirements.txt` file in your solution root directory. For the script above, the content looks like this:

```
Pillow~=9.2.0
```

Run the following command in the solution root directory to download the required libraries:

```
pip3 install -r requirements.txt -t ./run/pypi/lib/python3.10/site-packages
```

**Double-check yourself!** At this step the content of `run` directory should look as follows:

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

## Generate signing key

First of all, run the following command in the directory where you placed the CLI file to generate the signing key:

```
spctl solutions generate-key signing-key
```

You don't need to generate a new key for every solution, you can just reuse the existing one. You will need this key to receive the result.

## Pack the solution

Execute the following command to prepare and pack the solution:

```markdown
spctl solutions prepare --pack-solution solution.tar.gz  --write-default-manifest \
--base-image-path python3.10-base-solution-image-0.0.2.image.tar.gz \
./run signing-key
```

After running the command, a \`metadata.json\` file is generated.

## Upload the solution

Solution needs to be uploaded to a decentralized storage before it may be executed in Super Protocol.&#x20;

Run the following command.

```
spctl files upload solution.tar.gz --output solution.json \
--filename solution.tar.gz --metadata ./metadata.json
```

Solution.json file is created.
