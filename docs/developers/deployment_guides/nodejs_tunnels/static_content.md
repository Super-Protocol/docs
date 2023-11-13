---
id: "static_example"
title: "Example: Static Content"
slug: "/developers/guides/nodejs_tunnels/static_content"
sidebar_position: 8
---
 
## Overview and Prerequisites

что требуется?

## Setting up Tunnel Server

### Generate a UUID Token

    1. You can generate one using the website [UUID Generator](https://fusionauth.io/dev-tools/uuid-generator).
    2. For security purposes, it's better to create a script to generate the token.

Save it in a file named `auth-token` (without any file extension).

You'll need to insert the token into `config.json` in subsequent steps.

### Create an archive 

using the command:

```
tar -czvf tunnel-server-data.tar.gz auth-token
```

This will result in `tunnel-server-data.tar.gz`.

### Upload archive to StorJ 

using the command:

```
spctl files upload tunnel-server-data.tar.gz --output tunnel-server-data.json --filename tunnel-server-data.tar.gz
```
This will produce `tunnel-server-data.json`.

### Create a tunnel server order

```
spctl workflows create --tee 1,1 --tee-slot-count 3 --solution 6,2 --solution 10,6 --data tunnel-server-data.json --storage 20,16
```

Remember the resulting order ID.

## Setting up Tunnel Client

### Content structure

This is the internal structure. The website files are placed in the `content` dir.

- config.json
- content
    - index.html
    - css, etc.
- private.pem
- cert.crt

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
  "authToken": "token",
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

using the command:

```
tar -czvf tunnel-client-data.tar.gz private.pem cert.crt content config.json
```
This will result in `tunnel-client-data.tar.gz`. 

### Upload archive to StorJ 

using the command:

```
spctl files upload tunnel-client-data.tar.gz --output tunnel-client-data.json --filename tunnel-client-data.tar.gz
```
This will produce `tunnel-client-data.json`.

### Create the tunnel client order 

using the command:

```
spctl workflows create --tee 1,1 --tee-slot-count 3 --solution 6,2 --solution 11,7 --data tunnel-client-data.json --storage 20,16
```

Remember the resulting order ID.

## Retrieving the results

### Check Order Status

You can check the status of the server and client tunnels using that ID in the following [command](/developers/cli_commands/orders/get):

```
spctl orders get <tunnel server order ID>
spctl orders get <tunnel client order ID>
```

When the both orders turn to status `Done` proceed to the next step.

### Retrieve result

<Highlight color="red">//а как делать схему 2х2? мы сейчас запустили 1 клиент и 1 сервер? Или 11 оффер автоматически разворачивает 2х2? А если руками то как?</Highlight>

Retrieve the result of the tunnel server order using the command:

```
spctl orders download-result <tunnel server order ID>
```

The result will be a JSON in the form: `ip: www.xxx.yyy.zzz, port: 443`.

## Setting up DNS

Go to your host's DNS settings and add two DNS records:
    1. An A-record pointing your domain to the IP address `www.xxx.yyy.zzz`.
    2. A TXT-record for your domain with the content: 
`r=superprotocol;ip=[www.xxx.yyy.zzz](http://www.xxx.yyy.zzz/)`.
    3. Set the TTL to 5 minutes.

## Visiting your site.

Go to `www.xxx.yyy.zzz`. You are done! Don't forget to replenish the tunnel orders with TEE tokens to make sure that your site stays up.

