---
id: "tunnels"
title: "Tunnels"
slug: "/fundamentals/tunnels"
sidebar_position: 5
---

## Understanding tunnels

A *tunneling protocol* is a communication method that allows data to be wrapped within a different data format for secure and efficient transmission across a network. It enables the creation of virtual communication channels, or "tunnels," within a network, allowing data to pass through securely while appearing as if it is traveling over a direct connection.

Super Protocol has implemented tunnels to provide decentralized confidential computing as a web service. In Super Protocol, tunnels consist of *Tunnel Server* and *Tunnel Client* solutions, with a confidential conneсtion between them. Tunnel server has an external public IP and is accessible via HTTPS from the internet (through a browser, for instance, or another service through API). Tunnel client, which runs the web server, "hides" behind the tunnel server from any malicious attacks. Both tunnel server and client run inside the TEE on their respective compute machines, ensuring confidentiality of contents and execution.

A good practice when deploying tunnels through Super Protocol is to deploy multiple instances of clients and servers and distribute them over different CSPs, thus increasing decentralization and fault tolerance. 

Learn more about deploying Node.js applications with tunnels in [this guide](/developers/deployment_guides/tunnels).

<br/>

<img src={require('./../images/fundamentals_tunnels_1.png').default} width="auto" height="auto"/>

## Advantages

1. **Hiding the Internal Network Structure:** Tunneling conceals the structure of the internal network from the external world. This makes it difficult to launch attacks on internal resources since attackers won't know which services are within the network.

2. **Enhanced Security:** Tunneling is be combined with encryption to ensure the confidentiality and integrity of transmitted data. This is achieved by employing encryption protocols such as HTTPS to protect data during transmission and guard against man-in-the-middle attacks.

3. **Reducing Attacks on Web Servers:** Since a web server without a public IP address is accessible only through a tunnel, attackers cannot directly target it. Network-level attacks, such as DDoS, will be directed at the server with a public IP address, helping to reduce the risk of impacting the web server.

4. **Flexibility and Scalability:** Tunneling allows flexible configuration of the network infrastructure and facilitates the scalability of the system. Both tunnel clients and tunnel servers can be added or removed through DNS without affecting the system as a whole. Tunnel servers also act as load balancers by using a round-robin mechanism to evenly distribute requests among multiple client tunnels.














