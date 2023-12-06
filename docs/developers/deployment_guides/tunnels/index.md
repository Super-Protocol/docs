---
id: 'tunnels'
title: 'Node.js with Tunnels'
slug: '/deployment_guides/tunnels'
sidebar_position: 3
---

# Deployment of Node.js apps with Tunnels

You can find a general overview of tunnels [here](/developers/fundamentals/tunnels).

## Contents

### Main Deployment Steps

These are the detailed steps that may be used to deploy tunnels with any solution.

| **Guide**                                                                       | **Description**                                                                                                 | 
|:--------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| [1. Generate SSL certificates](/developers/deployment_guides/tunnels/preparing) | SSL certificates are needed to establishing a secure TLS connection between the tunnel server and your browser. | 
| [2. Development and testing](/developers/deployment_guides/tunnels/develop)     | Run your solution locally before deploying to Super Protocol.                                                   | 
| [3. Deploy tunnels](/developers/deployment_guides/tunnels/manual_run)           | Manually deploy tunnel servers and tunnel clients with your solution, and set up DNS.                           | 
| [4. Automating GitHub Actions](/developers/deployment_guides/tunnels/repo)      | Automate the manual steps in Part 3 with GitHub Actions.                                                        | 

### Examples

Complimentary to the main steps, these are specific examples on how to deploy selected solutions.

| **Guide**                                                              | **Description**                                                         | 
|:-----------------------------------------------------------------------|:-------|
| [Minecraft](/developers/deployment_guides/tunnels/minecraft)           | Steps to deploy Minecraft.                                              | 
| [Super Chat](/developers/deployment_guides/tunnels/superchat)          | Steps to deploy [Super Chat](/developers/offers/superchat).             | 
| [Static Content](/developers/deployment_guides/tunnels/static_content) | Steps to deploy static content such as simple websites (HTML, CSS, JS). | 

## Tunnel Deployment

<img src={require('./../../images/guides_tunnels_1.png').default} width="auto" height="auto"/>

### Overview

Step to deploy your solution using tunnels:

1. Generate the SSL certificate.
2. Build your solution using the Node.js base image. For example, [Minecraft](/developers/deployment_guides/tunnels/minecraft).
3. Prepare and place an order for running a [tunnel server](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-server) inside a compute TEE.
4.  Prepare your solution and use it as data to place an order for running a [tunnel client](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-client) inside a compute TEE.
5. Wait ~10 minutes until the orders have started and create the required DNS records with your domain provider. Any errors that may happen during the deployment will be downloadable as logs.

### Tunnel Server

To obtain the IP address from the tunnel server, you need to create an order. The order data includes a file at the root named `auth-token`, which contains a text token. This token will be used by the tunnel client for authentication.

The result of the tunnel server order is a JSON string, such as `{"ip":"123.123.123.123","port":443}`. This means that the tunnel server has assigned an IP address and is ready for connection at the specified IP and port for the tunnel clients with a matching token.

<img src={require('./../../images/guides_tunnels_2.png').default} width="500" height="auto"/>

### Tunnel Client

For deployment, tunnel client needs for input the following data:

* A `config.json`:
```
{
"tunnels": [
{
"sgxMrSigner": "TUNNEL_SERVER_MRSIGNER",
"sgxMrEnclave": "TUNNEL_SERVER_MRENCLAVE"
}
],
"authToken": "AUTH_TOKEN",
"site": {
"cert": "./website-fullchain.crt",
"key": "./website-private-key.pem"
}
}
```
* An SSL certificate file (such as `certificate.crt`);
* A private key to the SSL certificate file (such as `private.pem`);
* A */content/* folder that contains the solution or static website.

Tunnel client does the following:

1. Deploy a local HTTPS web server with the solution. The solution needs to have a `server.js` in one of its input folders: `/content`, `/content/dist`, `/content/build`.

and accept the following env variables:

* `HTTPS_PORT` - Port on which the local HTTPS web server is to be deployed and which will accept incoming connections.

* `TLS_CERT` - SSL certificate of the HTTPS server.

* `TLS_KEY` - Private key to the SSL of the HTTPS server.

2. Reads the domain certificate and connection token from the configuration file config.json.

3. Connects to the tunnel server and provides it with the token and the domain certificate along with the private key for registration and handling incoming connections.

4. Upon successful registration, the tunnel client forwards traffic to the deployed local web server from the tunnel server and returns the responses back.


### DNS

Web servers and browsers utilize different types of DNS records to determine public IP addresses and route traffic. Web servers without public IP addresses (tunnel clients) rely on TXT records to identify the public IP addresses of tunnel servers through which they should connect. Users' browsers use A records to identify the public IP addresses of tunnel servers.

Here's how this works:

1. The required number of tunnel clients and tunnel servers are launched.

2. TXT records are created in DNS for each tunnel server with a public IP address. These records contain information about public IP addresses in the format: `r=superprotocol;ip=10.5.0.5`

3. A records are created in DNS for each tunnel server with a public IP address. These records will be used by browsers to determine the IP addresses of tunnel servers.

4. A tunnel client without a public IP address initiates a DNS query to obtain TXT records associated with public IP addresses. Subsequently, tunnel client analyzes the TXT records to determine the parameters of the tunnels through which it should establish connections.

5. Tunnel client establishes an IP tunnel connection to each of the servers with public IP addresses, using the information obtained from the TXT records.

6. The user's browser performs a DNS query to obtain the A record associated with the domain of the tunnel server. The browser then uses the obtained IP address to connect to the tunnel server.

7. Traffic from users' browsers passes through tunnel servers with public IP addresses to the tunnel clients without public IP addresses.

This set up enables tunnel clients without public IP addresses to utilize tunnels for processing user requests, while users' browsers continue to use standard A records to determine IP addresses.
