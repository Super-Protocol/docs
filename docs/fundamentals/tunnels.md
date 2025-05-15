---
id: "tunnels"
title: "Tunnels"
slug: "/tunnels"
sidebar_position: 5
---

_Tunneling_ is a communication method that encapsulates data within a different format to enable secure, efficient transmission over a network. It creates a virtual communication channel—a _tunnel_—that allows data to travel as if over a direct secure connection.

Super Protocol uses tunnels to provide decentralized confidential computing as a web service. A tunnel consists of two components with a confidential connection between them:

- A _tunnel server_ has a public IP address and is accessible over HTTPS via a browser or API.
- A _tunnel client_ hosts a web server; it remains hidden behind the tunnel server and protected from external threats.

Both the tunnel server and tunnel client operate inside a <a id="tee"><span className="dashed-underline">Trusted Execution Environment</span></a> (TEE) on separate compute machines, ensuring data confidentiality and secure execution.

Multiple tunnel servers and clients can be deployed across different cloud service providers (CSPs), increasing decentralization and fault tolerance.

<img src={require('./images/fundamentals_tunnels_1.png').default} width="auto" height="auto"/>
<br/>

## Advantages

**Hide the internal network structure:** Tunneling conceals internal services, making it difficult for attackers to identify or target them.

**Enhance security:** Tunneling combined with encryption protects data integrity and confidentiality, preventing man-in-the-middle and other attacks during transmission.

**Reduce exposure of web servers:** Web servers without public IPs are only reachable via tunnels. This limits exposure and deflects network-level attacks, such as DDoS, to the publicly accessible tunnel server.

**Increase flexibility and scalability:** Tunnel clients and tunnel servers can be added or removed via DNS without disrupting the system. Tunnel servers also distribute traffic evenly among tunnel clients using round-robin load balancing.