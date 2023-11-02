---
id: "installing-cli"
title: "Installing"
slug: "/cli_overview/installing_cli"
sidebar_position: 1

---

## Introduction

Super Protocol CLI is a powerful tool for developers. It supports all the functionality currently available in the protocol.

## Installation

Linux:
```
curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-linux-x64 -o spctl
sudo install spctl /usr/local/bin/spctl
```

macOS:
```
curl -L https://github.com/Super-Protocol/ctl/releases/latest/download/spctl-macos-x64 -o spctl
sudo install spctl /usr/local/bin/spctl
```

:::note
Windows is not supported, please use WSL
:::

Alternatively, you can download CLI from [GitHub repository](https://github.com/Super-Protocol/ctl). It will be constantly updated in the future so follow the announcements in our social networks.

## Getting started

Before you can use CLI you need to create a configuration file. Please refer to [this guide](/testnet/cli/configuration) to do that.

To get familiar with the available commands please use [commands documentation](/testnet/cli/commands).

If you want to deploy your own solutions on Super Protocol, check [our guides section](/testnet/cli/guides).