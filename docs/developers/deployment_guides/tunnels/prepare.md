---
id: "preparing"
title: "1. Prepare DNS and SSL certificate"
slug: "/deployment_guides/tunnels/preparing"
sidebar_position: 1
---

## Prerequisites

- [Docker](https://docs.docker.com/engine/install/) - for building solutions.

- [Node.js](https://nodejs.org/en/download/package-manager) - This example is based on Node.js v16.

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) - package manager needed for the Minecraft deployment example.

- [GIT CLI](https://github.com/git-guides/install-git) - needed for cloning of repositories and automating GitHub Actions.

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

:::note
You must use a different SSL certificate and private key for each deployed solution. So if you go through this guide and then want to deploy Minecraft or Superchat or anything else, you'll need to generate new SSL for each of those. 
:::