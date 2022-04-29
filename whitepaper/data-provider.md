---
id: "data-provider"
title: "Data Provider"
slug: "/data-provider"
sidebar_label: "Data Provider"
sidebar_position: 11
custom_edit_url: null
---
# Data provider
## Overview
The data provider solution distributes requests from the blockchain, validates TEE and results, and then uploads them to the distributed repository, including logs, etc.

These operations are performed by using an execution controller that connects to the blockchain via a node deployed in it. This layer also stores unprotected data, which is accessed from the validated TEE area over a secure channel through the data adapter:

<p align="center">
  <img src={require('./images/data-provider-01.png').default} />
</p>

To be able to use raw data in TEE scripts, the data needs to be pre-processed with appropriate **adapters**. As a result, the script retrieves attribute dictionary values. This allows the creation of generic scripts for different providers. There is no need to pre-process the data in order to use it in TEE applications and containers.

A separate data provider service for validation checks the results obtained from the solution in TEE, re-saves and encrypts them for the customer.
## Data adapter
Since different data providers utilize completely different data formats and data storage methods, it is necessary to pre-process the data for generic sampling from the script. This requires a data adapter, for example, [PartiQL](https://partiql.org/)-compatible adapter:

<p align="center">
  <img src={require('./images/data-provider-02.png').default} />
</p>