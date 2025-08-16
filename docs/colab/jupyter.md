---
id: "jupyter"
title: "Prepare a Jupyter Notebook script"
slug: "/"
sidebar_position: 0
---

## Super Protocol TEE file system

Inside the TEE, you have a special file structure:

| Location | Purpose | Access |
| :---- | :---- | :---- |
| `/sp/inputs/input-0001` | Possible data location 1 | Read-only |
| `/sp/inputs/input-0002` | Possible data location 2 | Read-only |
| `/sp/output` | Output folder for your results | Write; you can also read own files |

:::important

Always use absolute paths, such as `/sp/...`.

:::

## 1. Prepare your script

In the Jupyter Notebook:

1. Locate your input file in `/sp/inputs`.

2. Load the data; for example, from a CSV file.

3. Process the data as needed.

4. Write the results to `/sp/output` so they are saved and returned after execution.

## 2. Find the input file

In the TEE, locate your input file, for example `input.csv`, using the `find_input_file()` function. This function checks both input folders and returns the absolute path:

```py
from pathlib import Path

# Helper function to find the input file 
def find_input_file(filename):
locations = [
Path(f"/sp/inputs/input-0002/{filename}"),
Path(f"/sp/inputs/input-0001/{filename}")
]
for path in locations:
if path.exists():
print(f"Using input file: {path}")
return path
raise FileNotFoundError(f"{filename} not found in input-0002 or input-0001")

# Specify the input file (replace "input.csv" with the name of your file) 
input_path = find_input_file("input.csv")
```

## 3. Read the input file

You can load the input file using any library or method suitable for your data format. For example, with pandas:

```py
import pandas as pd

df = pd.read_csv(input_path)
print(df.head())
```

Use `input_path` as the file location if you use another method, such as the csv module, a JSON parser, or any other library.

## 4. Process and save the data

After loading your data, process it in memory and save the results to `/sp/output`. Ensure your processed data, whether a DataFrame, list, dictionary, or other format, is ready before saving. For example:

```py
from pathlib import Path
import pandas as pd

# Create the output directory if it doesn't exist
output_path = Path("/sp/output")
output_path.mkdir(parents=True, exist_ok=True)
# Specify the output file (replace "output.csv" with the name of your file)
output_file = output_path / "output.csv"
df.to_csv(output_file, index=False)
```