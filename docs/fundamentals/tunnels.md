---
id: "tunnels"
title: "Tunnels"
slug: "/tunnels"
sidebar_position: 5
---

_Tunneling_ is a communication method that wraps data within a different data format to transmit securely and efficiently across a network. This creates a virtual communication channel—a _tunnel_—within the network. Data passes through securely and appears to be traveling over a direct connection.

Super Protocol has implemented tunnels to provide decentralized confidential computing as a web service. In Super Protocol, a tunnel consists of the Tunnel Server and Tunnel Client solutions with a confidential connection between them. Tunnel servers have an external public IP. They are accessible from the internet via HTTPS  through a browser or another service through API. Tunnel clients run web servers and hide behind tunnel servers from malicious attacks. Both tunnel server and client run inside a Trusted Execution Environment on their respective machines. This ensures the confidentiality of the content and execution.

Super Protocol supports the deployment of multiple instances of clients and servers. Distributing tunnels over different cloud service providers increases decentralization and fault tolerance.

A good practice when deploying tunnels through Super Protocol is to deploy multiple instances of clients and servers and distribute them over different CSPs, thus increasing decentralization and fault tolerance.

Read more in the [Node.js with Tunnels](/developers/deployment_guides/tunnels/) deployment guide.

<img src={require('./images/fundamentals_tunnels_1.png').default} width="auto" height="auto"/>
<br/>

## Advantages

**Hide the internal network structure.** Tunneling conceals the structure of the internal network from the outside. This makes it difficult to launch attacks on internal resources since attackers will not know which services are within the network.

**Enhance security.** Tunneling combined with encryption ensures the confidentiality and integrity of transmitted data. Encryption protocols such as HTTPS protect data during transmission and guard against man-in-the-middle attacks.

**Reduce attacks on web servers.** Attackers cannot directly target a web server because it does not have a public IP address and is only accessible through a tunnel. Network-level attacks such as DDos are directed to the server with a public IP address. This helps to reduce the risk of impacting the web server.

**Increase flexibility and scalability.** Tunneling allows flexible configuration of the network infrastructure and facilitates the scalability of the system. It is possible to add or remove tunnel servers and tunnel clients through DNS without affecting the whole system. Tunnel servers also act as load balancers by using a round-robin mechanism to evenly distribute requests among multiple client tunnels.














