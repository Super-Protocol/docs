---
id: "check_confidentiality"
title: "Check Confidentiality"
slug: "/marketplace/confidentiality"
sidebar_position: 3
---

_Quote verification_ checks the authenticity and integrity of a Trusted Execution Environment (TEE) by examining the enclave _quote_. The SGX quote is a cryptographic data structure that provides proof of the enclave's identity and the measurement of its code and data. It is a critical element in the attestation process, enabling parties to establish trust in the execution environment.

In simple terms, quote verification ensures that the content of a domain is running in a TEE. Additionally, if the content is Super Protocol solution offers, the quote verification links the content to the offers.

For quote verification, use the [`quotes validate`](/cli/cli_commands/quotes/validate) CLI command or the **Check confidentiality** function in the Marketplace GUI.

## Check how it works

Create a tunnel order using the [Marketplace GUI](/developers/marketplace/walkthrough) or [CLI](/developers/deployment_guides/tunnels). Your order result will be a domain address.

Go to the Instruments panel and select **Check Confidentiality**.

<img src={require('../images/gui_confidentiality_1.png').default} width="400" height="auto"/>

Enter your domain.

<img src={require('../images/gui_confidentiality_2.png').default} width="400" height="auto"/>


If the quote is verified, then you will see the results that look like this:

<img src={require('../images/gui_confidentiality_3.png').default} width="400" height="auto"/>

### Solution offers

**Offer name and ID**

If the deployed solution is a Marketplace offer, you will see its name, a link to the offer, and the offer ID.

The solution will be _"Tunnels Launcher"_ if deployed through Marketplace GUI, and _"Tunnel Client: Dynamic Content"_ or _"Tunnel Client: Static Web Content"_ if deployed directly through CLI.

If the deployed solution is not from the Marketplace, you will see the _"Deployed solution is not an offer"_. This is not an error, just a warning that the content of the solution cannot be verified. This is typically a response you will get when deploying your solutions. For instance, if a developer locally puts together a version of Tunnel Client, then it will not be recognized as an offer because it is not listed on the Marketplace. 

<img src={require('../images/gui_confidentiality_4.png').default} width="400" height="auto"/>

<br/>
<br/>

**MRENCLAVE**

_MRENCLAVE_ is a value that representing the hash of the code and data inside a TEE. This measurement identifies the TEE and ensures its integrity.

**MRSIGNER**

The _MRSIGNER_ value identifies the signing entity of a TEE. It ensures that the TEE was signed by the expected entity and has not been tampered with.

Both MRENCLAVE and MRSIGNER are always present to verify that the solution is running inside an authentic TEE. If something is wrong, you will see an error _"At least one of the received quotes is not valid"_.

### Public key fingerprint

Super Protocol uses SSL/TLS certificates to encrypt the data exchange between the user browser and the web server inside the Tunnel Client deployment. The public key fingerprint is derived from the public key contained in the SSL/TLS certificate. You can verify the authenticity of a website by comparing the displayed fingerprint with the expected fingerprint, preventing possible man-in-the-middle attacks.

The following steps show the verification for the Chrome browser:

<img src={require('../images/gui_confidentiality_5.png').default} width="400" height="auto"/>

<img src={require('../images/gui_confidentiality_6.png').default} width="400" height="auto"/>

<img src={require('../images/gui_confidentiality_7.png').default} width="400" height="auto"/>

If the public key in the browser matches the public key fingerprint, the connection is secure.






