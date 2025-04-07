---
id: "confidentiality"
title: "Check Confidentiality"
slug: "/confidentiality"
sidebar_position: 21
---

*Check Confidentiality* is a service that verifies the authenticity of a domain deployed on Super Protocol. To access the service, open the menu in the upper-right corner of the Marketplace web app.

<img src={require('./images/check-confidentiality-menu.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Paste the access link available on the order screen of a deployed model to see the report:

<img src={require('./images/check-confidentiality.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

The service does the following:

- Checks the integrity of the [Tunnel Client](/fundamentals/tunnels) deployment.
- Validates the [order certificate chain](/fundamentals/certification) to ensure the order is being processed in a trusted confidential environment.
- Displays if the order uses a solution offer (for instance, an [engine](/marketplace/order-builder#engine)) from the Marketplace. Otherwise, you will see a warning "Deployed solution is not an offer" meaning the contents of the solution cannot be verified.

<img src={require('./images/check-confidentiality-not-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Super Protocol uses SSL/TLS certificates to encrypt the data exchanged between the user's browser and the web server inside the Tunnel Client deployment. Tunnel Client signs the fingerprint of the domain SSL/TLS certificate with the order certificate's private key. Then, it provides to the Check Confidentiality service:

- The SSL/TLS certificate fingerprint. You can verify the authenticity of the domain by comparing the displayed fingerprint with the expected fingerprint, preventing possible man-in-the-middle attacks.
- The fingerprint signature. The valid signature means the Tunnel Client has the private key to the order certificate.
- The order certificate and the certificate chain. Valid order certificate means the order is being processed in a valid confidential environment.

## SSL/TLS certificate fingerprint

The Check Confidentiality service displays the expected SSL/TLS certificate signature:

<img src={require('./images/check-confidentiality-fingerprint.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To compare the expected SSL/TLS certificate signature with the domain SSL/TLS certificate signature, find the latter in your web browser:

<img src={require('./images/check-confidentiality-connection-1.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

<img src={require('./images/check-confidentiality-connection-2.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

<img src={require('./images/check-confidentiality-connection-3.png').default} width="auto" height="auto" border="1"/>
<br/>