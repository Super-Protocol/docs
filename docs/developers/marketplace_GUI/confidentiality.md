---
id: "check_confidentiality"
title: "Check Confidentiality"
slug: "/marketplace/confidentiality"
sidebar_position: 3
---

## Understanding quote verification

*Quote verification* is the process of verifying the authenticity and integrity of a TEE by examining the enclave *quote*. The SGX quote is a cryptographic data structure that provides proof of the enclave's identity and the measurement of its code and data. It is a critical element in the attestation process, enabling parties to establish trust in the execution environment.

In simple terms, quote verification allows to ensure that the contents of a domain are in fact running in a genuine confidential environment (TEE) and link the contents to Marketplace solution offers (if the contents are offers). 

For the moment quote verification is accessible only through the [Marketplace GUI](/developers/marketplace).

## How it works

### Getting there

Create a tunnels order using the [Marketplace GUI](/developers/marketplace/walkthrough) or [CLI](/developers/deployment_guides/tunnels). Your order result will be a domain address.

Go to the Instruments panel and select *Check Confidentiality*.

<img src={require('./../images/gui_confidentiality_1.png').default} width="400" height="auto"/>

Enter your domain.

<img src={require('./../images/gui_confidentiality_2.png').default} width="400" height="auto"/>


If the quote is verified, then you will see the results that look like this:

<img src={require('./../images/gui_confidentiality_3.png').default} width="400" height="auto"/>

### Solution Offers

**Offer name and ID**

If the deployed solution is a Marketplace offer, then you will see its name, a link to the offer and the offer id.

The solution will be *Tunnels Launcher* if deployed through Marketplace GUI, and *Tunnel Client: Dynamic Content* or *Tunnel Client: Static Web Content* if deployed directly through CLI.

But if the deployed solution is not from the Marketplace, you will see "Deployed solution is not an offer" text. This is not an error, just a warning that contents of the solution cannot be verified. This is typically the response that you'll get when deploying your own solution. For instance, a developer could locally put together their own version of Tunnel Client (just like we did with Tunnel Client: Super Chat), and then it won't be recognized as an offer because it's not listed on the Marketplace. 

<img src={require('./../images/gui_confidentiality_4.png').default} width="400" height="auto"/>

<br/>
<br/>

**MRENCLAVE**

*MRENCLAVE* is a value that represents the hash of the code and data inside the TEE (enclave). This measurement is used to uniquely identify the TEE and to ensure its integrity. It's a way to verify that the TEE being executed is the expected one and has not been tampered with.

**MRSIGNER**

The *MRSIGNER* value is used to uniquely identify the signing entity of the TEE. This is important for security purposes, as it helps in verifying the authenticity and integrity of the TEE. It ensures that the TEE was signed by the expected entity and has not been tampered with.

Both MRENCLAVE and MRSIGNER have to always be present to verify that the solution is running inside an authentic TEE. If there is an error "At least one of the received quotes is not valid", then something is wrong.

### Public Key Fingerprint

Super Protocol uses SSL/TLS certificates to encrypt the data exchanged between the user's browser and the web server inside the Tunnel Client deployment. The public key fingerprint is derived from the public key contained in the SSL/TLS certificate. You can verify the authenticity of the website by comparing the displayed fingerprint with an expected fingerprint, preventing possible man-in-the-middle attacks.

For the Chrome browser follow these steps:

<img src={require('./../images/gui_confidentiality_5.png').default} width="400" height="auto"/>

<img src={require('./../images/gui_confidentiality_6.png').default} width="400" height="auto"/>

<img src={require('./../images/gui_confidentiality_7.png').default} width="400" height="auto"/>

If the public key in the browser matches the public key fingerprint, then the connection is secure.






