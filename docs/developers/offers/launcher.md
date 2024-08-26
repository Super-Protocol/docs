---
id: "launcher"
title: "Tunnels Launcher"
slug: "/offers/launcher"
sidebar_position: 2
---

## About

Tunnels Launcher is a pre-configured provisioner application that automates the deployment of [server and client tunnels](/developers/deployment_guides/tunnels), executing most of the GitHub Actions steps in [this guide](/developers/deployment_guides/tunnels/repo). It's primary purpose to simplify the deployment of tunnels through the [Marketplace GUI](/developers/marketplace) which doesn't yet support custom tunnels deployment. Tunnels Launcher uses Super Protocol DNS and SSL certificates.

At the moment Tunnels Launcher works in two scenarios: deploying Super Chat and deploying static web pages.

<img src={require('../images/offers_launcher_1.png').default} width="auto" height="auto"/>


## Deployment Scenarios

### Super Chat

Compatible offers for [Super Chat](/developers/offers/superchat):

| **Solution**       | **Base Image** | **Data**          | Storage | Compute        |
|:-------------------|:---------------|:------------------|:--------|:---------------|
| Tunnels Launcher   | Node.js        | Super Chat Config | Storj   | Any compatible |

*Super Chat Config* directs Tunnel Launcher to which tunnel offers it needs to use and applies configurations. **Note:** you cannot upload any other data when using Super Chat Config as data offer.

As output *Tunnels Launcher* produces a domain in this format: abcd-klmn-wxyz.superprotocol.io 

It also creates four individual orders: two client tunnels and two server tunnels.

| **Tunnel Client**         | **Tunnel Server** | 
|:--------------------------|:------------------|
| Tunnel Client: Super Chat | Tunnel Server     | 

*Tunnel Client: Super Chat* is a prebuilt solution that mimics the steps in [this guide](/developers/deployment_guides/tunnels/superchat). It is used only for Super Chat - other dynamic Node.js applications use the *Tunnel Client: Dynamic Content* offer.

### Static Web Pages

Compatible offers for static web pages:

| **Solution**       | **Base Image** | **Data**            | Storage | Compute        |
|:-------------------|:---------------|:--------------------|:--------|:---------------|
| Tunnels Launcher   | Node.js        | Demo Static Website | Storj   | Any compatible |
| Tunnels Launcher   | Node.js        | User static content | Storj   | Any compatible |

*Demo Static Site* is a data offer that contains the content for a showcase website produced by the Super team.

You can also use your own static website (HTML, CSS, JavaScript). Before uploading your own data all files and folders must be packaged into a TAR or TAR.GZ (TGZ) archive. There must be an index.html file at the root of the archive. Only one website archive may be used.

As output *Tunnels Launcher* produces a domain in this format: abcd-klmn-wxyz.superprotocol.io.

It also creates four individual orders: two client tunnels and two server tunnels.

| **Tunnel Client**                 | **Tunnel Server** | 
|:----------------------------------|:------------------|
| Tunnel Client: Static Web Content | Tunnel Server     | 

*Tunnel Client: Static Web Content* is an offer that is used for any type of static content, even when deploying manually through CLI ([read guide](/developers/deployment_guides/tunnels/static_content)).








