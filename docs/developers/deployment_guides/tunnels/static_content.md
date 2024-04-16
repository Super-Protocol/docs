---
id: "static_example"
title: "Example: Static Content"
slug: "/deployment_guides/tunnels/static_content"
sidebar_position: 8
---

## Prerequisites

Same as in [Part 1](/developers/deployment_guides/tunnels/preparing) of this guide.

## Setting up Tunnel Server

### Generate a UUID Token

    1. You can generate one using the website [UUID Generator](https://fusionauth.io/dev-tools/uuid-generator).
    2. For security purposes, it's better to create a script to generate the token.

Save it in a file named `auth-token` (without any file extension).

This token will be used by Tunnel Server to identify Tunnel Client, which will be the web server.

You'll need to insert the token into `config.json` in subsequent steps.

### Create an archive

`auth-token` file will be used as input data for Tunnel Server deployment.

```
tar -czvf tunnel-server-data.tar.gz auth-token
```

This will result in `tunnel-server-data.tar.gz`.

### Upload archive

Solution needs to be encrypted and uploaded to a decentralized storage before it may be executed in Super Protocol. The storage credentials will need to have been configured during the [SPCTL setup](/developers/cli_guides/configuring#storage):

```
./spctl files upload tunnel-server-data.tar.gz --output tunnel-server-data.json --filename tunnel-server-data.tar.gz
```

This command will produce `tunnel-server-data.json`.

### Create a tunnel server order

You are now ready to start the Tunnel Server order. Note the parameter `--min-rent-minutes` which will deposit enough TEE tokens to ensure the tunnel is running for at least the specified period of time (in minutes). For this example we've set it to 60 minutes.

```
./spctl workflows create --tee 1 --solution 6,2 --solution 11,10 --data tunnel-server-data.json --storage 25,30 --min-rent-minutes 60
```

Remember the resulting order ID.

## Setting up Tunnel Client

### SSL certificate

Generate SSL certificate as per [Step 1](./preparing) of the Guide and place the SSL certificate and SSL private key files to the */superprotocol-test-website/* folder. Rename them as `cert.crt` and `private.pem`.

### Content structure

Create a new directory */superprotocol-test-website/* for Tunnel Client configuration files with this file structure:

```
├── config.json
└── content
    ├── index.html
    └── css, etc.
├── private.pem
└── cert.crt
```

The website files are placed in the `content` dir. You can use your own static website (HTML, CSS, JS) or you can download our Demo Static Website [**here**](https://github.com/Super-Protocol/datasets/tree/main/Demo%20Static%20Website).

### Set up the config.json

Next, in the project folder */superprotocol-test-website/* create an empty `config.json` file. It will contain the data required by the Tunnel Client.

Copy the following configuration to the `config.json` file:
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

`config.json` parameters:

- `sgxMrEnclave` и `sgxMrSigner` - leave these values as above, don't change them.
- `authToken` - token from the `auth-token` file that you have created earlier.
- `cert` и `key` - relative path from the `config.json` to the files with SSL certificate and private key that you have generated in [Step 1](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate).

### Create an archive

Go to */superprotocol-test-website/* and run this command:

```
tar -czvf tunnel-client-data.tar.gz <private.pem> <cert.crt> content config.json
```

This will create an archive `tunnel-client-data.tar.gz`.

### Upload archive

The same way as we did for Tunnel Server config file, upload `tunnel-client-data.tar.gz` to the storage:

```
./spctl files upload tunnel-client-data.tar.gz --output tunnel-client-data.json --filename tunnel-client-data.tar.gz
```

This will produce `tunnel-client-data.json`.

### Create the tunnel client order

Finally, create Tunnel Client order for the same duration as you created Tunnel Server:

```
./spctl workflows create --tee 1 --solution 6,2 --solution 13,14 --data tunnel-client-data.json --storage 23,27 --min-rent-minutes 60
```

Remember the resulting order ID.

## Retrieving the results

### Check Order Status

You can check the status of the server and client tunnels using the order ID's using this [command](/developers/cli_commands/orders/get):

```
./spctl orders get <tunnel server order ID>
./spctl orders get <tunnel client order ID>
```

Or, more conveniently, you can monitor progress using the [Marketplace GUI](/developers/marketplace)

Wait until the both orders turn to status `Processing`, wait about 10 minutes, and proceed to the next step.

### Retrieve result

Retrieve the result of the tunnel server order using the command:

```
./spctl orders download-result <tunnel server order ID>
```

In the case of Tunnel Server the result will be `result.txt` containing IP address and port of the server.

## Set up DNS

Follow steps as described in [Part 3: Set up DNS](/developers/deployment_guides/tunnels/manual_run#set-up-dns)
