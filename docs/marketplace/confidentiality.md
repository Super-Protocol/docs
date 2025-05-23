---
id: "confidentiality"
title: "Check Confidentiality"
slug: "/confidentiality"
sidebar_position: 21
---

*Check Confidentiality* is a service that verifies the authenticity of a domain deployed on Super Protocol and ensures its content is running in a valid <a id="tee"><span className="dashed-underline">Trusted Execution Environment</span></a> (TEE).

<img src={require('./images/check-confidentiality.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Super Protocol uses *SSL/TLS certificates* to encrypt the data exchange between the user's browser and the web server inside a <a id="tunnel"><span className="dashed-underline">tunnel client</span></a> deployment. Besides, Super Protocol Certification Authorities [issue certificates](/fundamentals/certification) for every <a id="order"><span className="dashed-underline">order</span></a>.

The Check Confidentiality service performs the following:

- Validates the order certificate chain to ensure the order is being processed in a correct TEE.
- Validates the integrity of the tunnel client deployment.
- Checks if the <a id="solution"><span className="dashed-underline">solution</span></a> is a Marketplace <a id="offer"><span className="dashed-underline">offer</span></a> (for instance, a specific <a id="engine"><span className="dashed-underline">engine</span></a>). Otherwise, you will see a warning "Deployed solution is not an offer" meaning the solution cannot be verified.

<img src={require('./images/check-confidentiality-not-offer.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To view the service report, paste the domain URL, for example, **Access Link** available on the [**Order** screen](/marketplace/all-orders/order) of a deployed model.

## Validation

The tunnel client signs the fingerprint of the domain SSL/TLS certificate with the order certificate's private key. Then, it provides to the Check Confidentiality service:

- The SSL/TLS certificate fingerprint—the expected fingerprint.
- The fingerprint signature. A valid signature means the tunnel client has the private key to the order certificate.
- The order certificate chain to check that all the certificates in the chain have not expired or been revoked. A valid certificate chain means the order is being processed in a correct TEE.

## Fingerprint comparison

You can compare the certificate fingerprint with the expected fingerprint, preventing possible man-in-the-middle attacks.

The Check Confidentiality service displays the expected SSL/TLS certificate fingerprint:

<img src={require('./images/check-confidentiality-fingerprint.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Find the domain SSL/TLS certificate fingerprint in your web browser to compare it with the expected fingerprint provided by the Check Confidentiality service:

<img src={require('./images/check-confidentiality-connection-1.png').default} width="auto" height="auto" border="1"/>
<br/>

<img src={require('./images/check-confidentiality-connection-2.png').default} width="auto" height="auto" border="1"/>
<br/>

<img src={require('./images/check-confidentiality-connection-3.png').default} width="auto" height="auto" border="1"/>