---
id: "slots"
title: "Slots and Options"
slug: "/slots"
sidebar_position: 4
---

_Requirements_ specify how much computing resources an <a id="offer"><span className="dashed-underline">offer</span></a> needs to run.

_Configurations_ provide flexibility in selecting computing resources and internet access for offer deployment. The compute offer configuration added to an <a id="order"><span className="dashed-underline">order</span></a> must meet all the requirements in this order.

## Requirements

Requirements specify how much computing resources a value offer needs to run. A _requirement slot_ is a specific set of requirements that may include the following:

- Number of CPU cores
- RAM
- Disk space
- Bandwidth
- External port
- Traffic
- Minimum and maximum lease time.

_Lease time_ is the duration for which a customer can rent the services of an offer.

Offer providers can define multiple requirement slots for every offer. Each slot may have a different [price](/fundamentals/orders#cost-and-pricing) depending on expected usage. For example, a Python script will compute faster on 4 CPU cores than on 2 cores, and the price may reflect that.

Additionally, providers can make their offers available for a fixed price or per hour using different slots. The customer can choose which one makes more economic sense in their case.

<img src={require('./images/fundamentals_slots_1.png').default} width="auto" height="auto"/>

## Configuration

_Configuration_ is a way to divide the resources of a physical confidential computing device into smaller parts. This division enables a better distribution of compute offer resources between orders. Customers usually do not need the resources of the whole machine for their orders.

Configuration is a combination of _configuration slots_ and _configuration options_. Configuration slots are responsible for compute resources:

- Number of CPU cores
- RAM
- Disk space
- Minimum and maximum lease time.

Configuration options are responsible for network-related resources:

- Bandwidth
- Traffic
- External port availability.

When a customer creates an order, the selected configuration must equal or exceed the sum of all solution, data, and storage requirements in the order. Additionally, the requested lease time must be within the limits set by the minimum and maximum lease time.

Every slot and option has its price. Configuration slots are always priced per hour and never have a fixed price, while configuration option prices may be fixed or per hour.

A customer can only select one configuration slot for each order. However, to meet the order requirements, they can add the chosen slot multiple times or, in other words, apply _increments_.

For example, the physical machine behind a compute offer has 24 CPU cores, 48 GB of RAM, and 960 GB of disk space. The compute provider divided these resources proportionally into 12 parts and created a configuration slot of 2 CPU cores, 4 GB of RAM, and 80 GB of disk space. A customer can add this slot to their order up to 12 times to meet the requirements. The division also lets the machine process up to 12 small orders simultaneously.

The same logic applies to configuration options, except customers can select multiple options multiple times.

<img src={require('./images/fundamentals_slots_2.png').default} width="auto" height="auto"/>

<img src={require('./images/fundamentals_slots_3.png').default} width="auto" height="auto"/>

## Automatic selection

Super Protocol supports the automatic selection of a configuration to simplify the order creation.

The system calculates the sum of all requirements in the order. When a customer adds a compute offer to the order in the Marketplace GUI, the system automatically determines configuration slots, options, and their increments.

<img src={require('./images/fundamentals_slots_4.png').default} width="auto" height="auto"/>

In the Marketplace CLI, SPCTL selects the configuration automatically if the customer specifies no `--tee`-related options. Read more in the description of the `workflows create` command.

## Parameters

The full list of parameters is the same for requirements and configurations. In the [Marketplace GUI](/marketplace):

- **Per Hour** or **Fixed**: pricing type of a slot or an option
- **vCores**: number of CPU cores, can be a fraction
- **RAM**: RAM for computations in gibibytes (GiB)
- **Disk**: disk space in gibibytes (GiB)
- **Bandwidth**: rate of data transfer in megabit per second (Mbps)
- **Traffic**: available traffic in gigabytes (GB), decreases with use
- **Ext.Port**: availability of an external port for internet access
- **Min Time**: minimum lease time, minutes
- **Max Time**: maximum lease time, minutes.