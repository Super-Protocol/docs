---
id: "python-speech"
title: "Speech Recognition"
slug: "/offers/python-speech"
sidebar_position: 2
---

## Speech Recognition

A machine trained Python model that transcribes speech audio files into text.

INPUT

You can use compatible datasets from the Marketplace and/or upload your own data.

It is possible to use several datasets in the same order (for instance, a dataset from the Marketplace and a dataset of your own).

The audio format is WAV. Before uploading your own data all files must be packaged into a TAR or TAR.GZ (TGZ) archive. You can download the compatible datasets for reference: Speech Recognition Dataset #1 and #2.

OUTPUT

The model provides output in a TAR.GZ archive. Inside the archive there is a folder for every dataset that was used as an input. For example, if two datasets were used, then there would be two folders: input-0001 and input-0002.

Each folder contains a TXT file for each WAV file that was provided for input. Each TXT file has the same name as the corresponding input file and contains the result of speech-to-text transcription.

LINKS

See this offer through the Marketplace GUI [here](https://marketplace.superprotocol.com/?offerId=8).


## Compatibility

### Data: Speech Recognition Dataset #1

Dataset contains audio files of male and female voices speaking slowly and distinctly.

Archive size is 2.8 MB. Inside are 10 WAV files.

You can download it [here](https://github.com/Super-Protocol/datasets/blob/main/Speech%20Recognition%20Datasets/speech-recognition-ds1.tar.gz?raw=true).

See this offer through the Marketplace GUI [here](https://marketplace.superprotocol.com/?offerId=15).


### Data: Speech Recognition Dataset #2

Dataset contains audio files of male and female voices speaking in an everyday manner with some background noise.

Archive size is 1.5 MB. Inside are 6 WAV files.

You can download it [here](https://github.com/Super-Protocol/datasets/blob/main/Speech%20Recognition%20Datasets/speech-recognition-ds2.tar.gz?raw=true).

See this offer through the Marketplace GUI [here](https://marketplace.superprotocol.com/?offerId=16).
