---
id: "python-face"
title: "Face Recognition"
slug: "/offers/python-face"
sidebar_position: 3
---

## Face Recognition


A machine trained Python model that determines the probability that two images contain the same person.

INPUT

You can use compatible datasets from the Marketplace and/or upload your own data.

It is possible to use several datasets in the same order (for instance, a dataset from the Marketplace and a dataset of your own).

The solution requires the following data as an input:

1. Images of people you want to compare in JPG or PNG format.

2. A file pairs.csv that contains the pairs of images in two columns to compare and calculate the probability that they are the same person.

Before uploading your own data all files must be packaged into a TAR or TAR.GZ (TGZ) archive. 

OUTPUT

The model provides output in a TAR.GZ archive. Inside the archive there is a folder for every dataset that was used as an input. For example, if two datasets were used, then there would be two folders: input-0001 and input-0002.

Every folder contains output.csv file and processing.error file in case there were errors during the calculation. Output file includes the same pairs that were provided in the pairs.csv plus the probability that the pair of images contains the same person.

LINKS

See this offer through the Marketplace GUI [here](https://marketplace.superprotocol.com/?offerId=9).


## Compatibility

### Face Recognition Dataset #1

Dataset contains images of various movie stars and a table that pairs them with each other.

Archive size is 15.3 MB. Inside are 18 JPG files (two for each movie star) and the pairs.csv file.

You can download it [here](https://github.com/Super-Protocol/datasets/blob/main/Face%20Recognition%20Datasets/face-recognition-ds1.tar.gz?raw=true).

See this offer through the Marketplace GUI [here](https://marketplace.superprotocol.com/?offerId=17).


### Face Recognition Dataset #2

Dataset contains images of Lord of the Rings movie characters, the actors who played them, and a table that pairs actors to characters.

Archive size is 7.2 MB. Inside are 30 JPG files (characters and actors) and the pairs.csv file.

You can download it [here](https://github.com/Super-Protocol/datasets/blob/main/Face%20Recognition%20Datasets/face-recognition-ds2.tar.gz?raw=true).

See this offer through the Marketplace GUI [here](https://marketplace.superprotocol.com/?offerId=18).
