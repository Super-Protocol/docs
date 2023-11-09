---
id: "initial set-up"
title: "1. Generate TLS and set up DNS"
slug: "/deployment_guides/nodejs_tunnels/setup"
sidebar_position: 1
---

## Requirements

<Highlight color="red">//какие требования?</Highlight>

## Generating TLS and setting up DNS

You will need:
* A DNS record for the domain that will be used to access the solution.
* A TLS certificate in order to ensure the operation of a web server over HTTPS.

If a certificate already exists, it may be used.

If not, the following command using [certbot](https://certbot.eff.org/) can be used to generate a certificate based on ECC:

```shell
sudo certbot certonly --manual --preferred-challenges=dns --email <YOUR_EMAIL>  --agree-tos --key-type ecdsa -d <YOUR_DOMAIN>
```

<Highlight color="red">//не очень понятный кусок, что за TXT файл? можно ли как-то более обще описать настройку DNS для домена?</Highlight>

Please note that in this command a TXT record will need to be added in the domain's control panel in order to confirm ownership of the domain. The required parameters will appear in the prompt after running the command.

As a result, two files will be obtained: `fullchain.pem` and `privkey.pem`.

These files will be necessary for repository configuration.