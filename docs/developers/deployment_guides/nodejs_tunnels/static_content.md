---
id: "static_example"
title: "Example: Static Content"
slug: "/deployment_guides/nodejs_tunnels/static_content"
sidebar_position: 8
---

## Overview and Prerequisites

## Prerequisites

Для выполнения последовательности всех действий необходимо установить
* [Node.js](https://nodejs.org/en/download/package-manager) v16
* [Docker](https://docs.docker.com/engine/install/)
* [spctl](/developers/cli_guides)

## Setting up Tunnel Server

### Generate a UUID Token

    1. You can generate one using the website [UUID Generator](https://fusionauth.io/dev-tools/uuid-generator).
    2. For security purposes, it's better to create a script to generate the token.

Save it in a file named `auth-token` (without any file extension).

This token will be used by Tunnel Server to identify Tunnel Client, which will be a website server. To securely deliver it to Cloud provider we will archive, encrypt and upload it to cloud storage.

You'll need to insert the token into `config.json` in subsequent steps.

### Create an archive

`auth-token` file will be used as input data for Tunnel Server deployment.

```
tar -czvf tunnel-server-data.tar.gz auth-token
```

This will result in `tunnel-server-data.tar.gz`.

### Upload archive to StorJ

Solution needs to be encrypted and uploaded to a decentralized storage before it may be executed in Super Protocol. The storage credentials have been configured during the [CLI setup](/developers/cli_guides/configuring#storage).:

```
./spctl files upload tunnel-server-data.tar.gz --output tunnel-server-data.json --filename tunnel-server-data.tar.gz
```

This command will produce `tunnel-server-data.json`.

### Create a tunnel server order

You are now ready to start the Tunnel Server order. Note the parameter `--min-rent-minutes` which will deposit enough TEE tokens to ensure the tunnel is running for at least the specified period of time (in minutes). For this example we've set it to 1440 minutes which is equivalent to 24 hours.

```
./spctl workflows create --tee 1 --solution 6,2 --solution 10,6 --data tunnel-server-data.json --storage 20,16 --min-rent-minutes 1440
```

Remember the resulting order ID.

## Setting up Tunnel Client

### Content structure

Create a new directory for Tunnel Client configuration files. This is the target file structure that we will set up:

```
├── config.json
└── content
    ├── index.html
    └── css, etc.
├── private.pem
└── cert.crt
```

The website files are placed in the `content` dir. You can use any website you want or you can download a template from our [**datasets**](https://github.com/Super-Protocol/datasets/tree/main/Demo%20Static%20Website) repository

Learn about obtaining `private.pem` and `cert.crt` files in [Step 1](./preparing) of the Guide

### Set up the config.json

The JSON file should have the following structure:

```
{
  "tunnels": [
    {
      "sgxMrSigner": "22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513",
      "sgxMrEnclave": "f022aefb6d74aa6684761550aed6712c75bd0e1730f667037716c0a5d0cf451d"
    }
  ],
  "authToken": "<auth-token>",
  "site": {
    "cert": "./cert.crt",
    "key": "./private.pem"
  }
}
```

* `sgxMrSigner` and `sgxMrEnclave` are identifiers for the tunnel server that the client trusts. The current values are accurate for the testnet.
* `authToken` is the token that you saved in the `auth-token` file from the first section.
* The `cert` and `key` fields specify the relative paths to the SSL certificate and key files, respectively.

### Create an archive

From inside the directory, run the command:

```
tar -czvf tunnel-client-data.tar.gz private.pem cert.crt content config.json
```

This will create an archive `tunnel-client-data.tar.gz`.

### Upload archive to StorJ

The same way as we did for Tunnel Server config file, upload `tunnel-client-data.tar.gz` to StorJ:

```
./spctl files upload tunnel-client-data.tar.gz --output tunnel-client-data.json --filename tunnel-client-data.tar.gz
```

This will produce `tunnel-client-data.json`.

### Create the tunnel client order

Finally, create Tunnel Client order for the same duration as you created Tunnel Server:

```
./spctl workflows create --tee 1 --solution 6,2 --solution 11,7 --data tunnel-client-data.json --storage 20,16 --min-rent-minutes 1440
```

Remember the resulting order ID.

## Retrieving the results

### Check Order Status

You can check the status of the server and client tunnels using that ID in the following [command](/developers/cli_commands/orders/get):

```
./spctl orders get <tunnel server order ID>
./spctl orders get <tunnel client order ID>
```

You can also visit our Marketplace by url `https://marketplace.superprotocol.com/order/<your-order-ID>` for more convenient observation. Wait till the both orders turn to status `Processing`, wait for ~10 minutes (or until you see a blue button `Get Result` on Marketplace) and proceed to the next step.

### Retrieve result

<Highlight color="red">//а как делать схему 2х2? мы сейчас запустили 1 клиент и 1 сервер? Или 11 оффер автоматически разворачивает 2х2? А если руками то как?</Highlight>

Retrieve the result of the tunnel server order using the command:

```
./spctl orders download-result <tunnel server order ID>
```

The result will be a JSON in the form: `ip: 255.255.255.255, port: 443`.

## Setting up DNS

Go to your host's DNS settings and add two DNS records:
    1. An A-record pointing your domain to the IP address `255.255.255.255`.
    2. A TXT-record for your domain with the content:
`r=superprotocol;ip=255.255.255.255`.
    3. Set the TTL to 5 minutes.

## Visiting your site.

And you are done! After setting up DNS let records to distribute and synchronize for several minutes. Then you can visit your site by your domain name `https://your.domain.com`. Don't forget to replenish the tunnel orders with TEE tokens to make sure that your site stays up.
