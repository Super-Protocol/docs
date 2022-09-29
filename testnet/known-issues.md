---
id: "index-known-issues"
title: "Known issues and limitations"
slug: "/known-issues"
sidebar_position: 1
---

## General

At the moment, applications running on TEE nodes will not be able to access the Internet. This restriction will be lifted in the future.

## Python

### Truncate

The reduction in the file size is not supported. Thus, the following functions and methods will not work:
- `truncate()`
- `open()`: when opening an existing file in `w` or `w+` modes

### Multiprocessing

Package `multiprocessing` is not supported.