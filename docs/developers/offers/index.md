---
id: "offers"
title: "Marketplace Offers"
slug: "/offers"
sidebar_position: 4
---

This section describes the offers provided by the Super Protocol team. But in the near future Marketplace will be made accessible to all testnet users to create and monetize their own offers.

Learn more about offers [here](/developers/fundamentals/offers).

You can also see the source code for some of the solutions and data offers in the public [Super Protocol GitHub](https://github.com/Super-Protocol).

## For Developers

These are the offers that will be most useful for developers when deploying your own solutions with CLI.

### Solutions

These solution offers are instrumental in setting up [tunnels](/developers/fundamentals/tunnels) or other solutions based on Node.js or Python.

| **Id** | **Name**                                                                                            | **Description**                                                         |
|:-------|:----------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|
| ?      | Tunnel Client: Dynamic Content                                                                      | Tunnel client used to deploy Node.js-based apps.                        |
| 11     | Tunnel Client: Static Web Content                                                                   | Tunnel client used to deploy simple static websites (HTML, JavaScript). |
| 10     | Tunnel Server                          | Tunnel server used for any tunnels deployment.                          |
| 6      | NodeJS                                                                                             | Node.js base image, required for Node.js apps.                          |
| 5      | Python                                                                                              | Python base image, required for Python apps.                            |

### Data

There are not preset data offers for developers, you will be uploading your own depending on the use case.

### Compute

Below are the compute offers available for Testnet from our CSP partners. Each machine is divided into [slots and options](/developers/fundamentals/slots/). Explore each compute offer to see which best fits the requirements of your solution. 

| **Id** | **Name**                                                               | **Description**                                    |
|:-------|:-----------------------------------------------------------------------|:---------------------------------------------------|
| 1      | TEE Offer #1                                                          | 24 cores, 123 Gb RAM, 830 Gb SSD, 1 GBit bandwidth |
| 2      | TEE Offer #2                                                          | 24 cores, 123 Gb RAM, 830 Gb SSD, 1 GBit bandwidth      |
| 3      | TEE Offer #3                                                          | 24 cores, 123 Gb RAM, 830 Gb SSD, 1 GBit bandwidth      |
| 4      | TEE Offer #4                                                           | 24 cores, 123 Gb RAM, 830 Gb SSD, 1 GBit bandwidth      |


### Storage

At this phase of Testnet only Storj storage is supported.

| **Id** | **Name**                                                                   | **Description**                                                    |
|:-------|:---------------------------------------------------------------------------|:-------------------------------------------------------------------|
| 20     | Storj DCS Offer                                                            | This is the basic Storj storage offer, to be used with all orders. |


## Other Offers

### Solutions

Tunnels Launcher is a [tunnel provisioner](/developers/fundamentals/tunnels/provisioner) that was created by the Super team to streamline the experience of deploying tunnels for beginner Marketplace GUI users. It essentially mimics the steps in [this guide](/developers/deployment_guides/tunnels). The downside of simplicity is that it's using Super Protocol infrastructure credentials: storage, DNS, SSL certificates, auth tokens. It is best to create tunnels through CLI using your own setup.

| **Id** | **Name**                                        | **Description**                                                                                    |
|:-------|:------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| 12     | [Tunnels Launcher](/developers/offers/launcher) | Preconfigured tunnel provisioner used to simplify deployment of tunnels for Marketplace GUI users. |
| 21     | Tunnel Client: Super Chat                       | Tunnel client containing the preconfigured [Super Chat](/developers/offers/superchat) solution.    |

Additionally, we have developed some simple Python models to test with your own data or data from the Marketplace.

| **Id** | **Name**                                                      | **Description** |
|:-------|:--------------------------------------------------------------|:----------------|
| 7      | Image Classification Solution                                 | A machine trained Python model that recognizes and classifies objects in an image.               |
| 8      | Speech Recognition Solution                                   | A machine trained Python model that transcribes speech audio files into text.               |
| 9      | Face Recognition Solution   | A machine trained Python model that determines the probability that two images contain the same person.               |

### Data

Data offers for use with the Hosting Launcher.

| **Id** | **Name**                                                                     | **Description**                                                                  |
|:-------|:-----------------------------------------------------------------------------|:---------------------------------------------------------------------------------|
| 22     | Super Chat Config                                                            | Contains configuration files needed to launch Super Chat using Hosting Launcher. |
| 19     | Demo Static Website | A simple demo webpage that we created for the Testnet 2 launch.                  |

Datasets for use with the Python models.

| **Id** | **Name**                                                                             | **Description**                                                                  |
|:-------|:-------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------|
| 13     | [Image Classification Dataset #1](/developers/offers/python-image)                   | Dataset contains images of different breeds of dogs.                        |
| 14     | [Image Classification Dataset #2](/developers/offers/python-image)                   | Dataset contains images of different types of objects.                       |
| 15     | [Speech Recognition Dataset #1](/developers/offers/python-speech)                    | Dataset contains audio files of male and female voices speaking slowly and distinctly.                          |
| 16     | [Speech Recognition Dataset #2](/developers/offers/python-speech)                    | Dataset contains audio files of male and female voices speaking in an everyday manner with some background noise.   |
| 17     | [Face Recognition Dataset #1](/developers/offers/python-face)                        | Dataset contains images of various movie stars and a table that pairs them with each other.                                                                               |
| 18     | [Face Recognition Dataset #2](/developers/offers/python-face) | Dataset contains images of Lord of the Rings movie characters, the actors who played them, and a table that pairs actors to characters.                     
                                                          |

### Compatibility

Here is the list of proper combinations of Solutions+Data offers currently on Marketplace:

| **Solution**         | **Data**                                                                                                    |
|:---------------------|:------------------------------------------------------------------------------------------------------------|
| Hosting Launcher     | Super Chat Config                                                                                           |
| Hosting Launcher     | Demo Static Website                                                                                         |
| Hosting Launcher     | Upload your own static web content                                                                          |
| Face Recognition     | Face Recognition Dataset #1<br/>Face Recognition Dataset #2<br/>Upload your own data (images)               |
| Speech Recognition   | Speech Recognition Dataset #1<br/>Speech Recognition Dataset #2<br/>Upload your own data (audio files)      |
| Image Classification | Image Classification Dataset #1<br/>Image Classification Dataset #2<br/>Upload your own data (images+table) |