---
id: "preparing"
title: "1. Prepare DNS and SSL certificate"
slug: "/deployment_guides/tunnels/preparing"
sidebar_position: 1
---

## Goal

<Highlight color="red">в чем состоит смысл этого упражнения, какой должен быть результат на выходе</Highlight>

## Prerequisites

- [Docker](https://docs.docker.com/engine/install/) - Для сборки решений, которые будут выполняться на Super Protocol.

- [GIT CLI](https://github.com/git-guides/install-git) - <Highlight color="red">для чего это</Highlight>

- [OpenSSL](https://www.openssl.org/) - you will need OpenSSL installed to generate solution signing key. Linux: by default, Ubuntu: `apt install openssl`, MacOs: `brew install openssl`.

- [SPCTL](/developers/CLI_guides/) - our CLI tool, must be fully configured, including access to decentralized storage: it will be used to store encrypted configurations for the oracle script.

- Prepare DNS - you will need admin access to your own domain or subdomain. In this guide you will need to configure CNAME, A and TXT records in your DNS. You can use [Cloudflare](https://www.cloudflare.com/products/registrar/) or any other domain registrar with DNS management.

## Generating SSL certificate

An SSL certificate is necessary for establishing a secure TLS connection between the tunnel server and your browser.

If you already have a valid certificate that isn't expired, you can skip this step and use that certificate later in this guide.

You can generate a free SSL certificate at any of those sites: [sslforfree.com](https://www.sslforfree.com/), [zerossl.com](https://zerossl.com/), [letsencrypt.org](https://letsencrypt.org/).

To generate a certificate without registration we recommend using [Certbot](https://certbot.eff.org/instructions). Select *Web Hosting Product* as Software and your OS - then follow instructions to generate SSL. To confirm ownership of your domain you will need to specify CNAME record in DNS if you choose the verification method through CNAME DNS.

Make sure that after you generate the certificate you download the file with the private key (e.g. `private.key`) and the certificate itself (e.g. `certificate.crt`). There may also be another file with the root and intermediary certificates (e.g. `ca_bundle.crt`). Copy the contents of that file into your certificate file.

:::note
A self-generated and self-signed certificate will not work in Super Protocol. You need a certificate provided by the Certificate Authority.
:::