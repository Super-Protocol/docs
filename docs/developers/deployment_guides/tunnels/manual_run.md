---
id: 'manual_run'
title: '3. Deploy tunnels'
slug: '/deployment_guides/tunnels/manual_run'
sidebar_position: 3
---

## Prepare and deploy Tunnel Server

Deploying your application on Super Protocol involves creating two orders: an order for a Tunnel Server and an order for a Tunnel Client. The order for the tunnel server will include an authentication token, which will also be located in the configuration of the tunnel client and will be used for authentication between the tunnels.

First, let's prepare and deploy the server side of the tunnels.

Create folder */tunnel-server-data/* and generate a token to `auth-token` file (the name is important, don't change it):

```bash
mkdir tunnel-server-data
uuidgen > tunnel-server-data/auth-token
```

**Tip:** if you receive error: "uuidgen: command not found", then pick the command for your distribution in [this article](https://www.thegeekdiary.com/uuidgen-command-not-found).

Create an archive of the token:

```bash
tar -czf tunnel-server-data.tar.gz -C ./tunnel-server-data .
```

Encrypt and upload the archive to the storage using this [command](/developers/cli_commands/files/upload):

```bash
./spctl files upload tunnel-server-data.tar.gz --output tunnel-server-data.json --filename tunnel-server-data.tar.gz
```

`tunnel-server-data.json` file should be created locally and `tunnel-server-data.tar.gz` uploaded to storage (it will be downloaded by the TEE for execution). 

Create an order for Tunnel Server using the `tunnel-server-data.json` file containing our auth token.

```bash
./spctl workflows create --tee 1 --solution 6,2 --solution 10,9 --data tunnel-server-data.json --storage 23,27 --orders-limit 10 --min-rent-minutes 60
```

**Tip:** to create order make sure that you have sufficient TEE and MATIC tokens in your testnet wallet. You can get more tokens using the [tokens request](/developers/cli_commands/tokens/request) command. Be mindful of testnet [limitations](/testnet/limitations).

The last line of the output will look like this:

```
Workflow was created, TEE order id: ["XXXX"]
```

Where XXXX is the order ID.

You can check the status of the order using [Marketplace GUI](/developers/marketplace) or this [command](/developers/cli_commands/orders/get):

```shell
./spctl orders get <order ID>
```

In about 15 minutes after the status turns to `Processing` you can retrieve the order results:

```bash
./spctl orders download-result XXXX
```

In the case of Tunnel Server the result will be `result.txt` containing IP address and port of the server. We will need it later.

```bash
cat result.txt && echo "\n"
```

## Prepare and deploy Tunnel Client

Create folder */tunnel-client-data/* and move there the `server.js` with dependencies from [Step 2](/developers/deployment_guides/tunnels/develop).

```bash
mkdir -p tunnel-client-data/content
cp -R superprotocol-test-app/* tunnel-client-data/content
```

Next, in the project folder */tunnel-client-data/* create `config.json`. It will contain the data required by the Tunnel Client.

```bash
touch tunnel-client-data/config.json
```

Copy the following configuration to the `config.json` file:

```json title="config.json"
{
  "tunnels": [
    {
      "sgxMrEnclave": "82e55c6ec7268b07e030226cc42417b89cb17ecc8b6b73bafb84fc44b0ed059c",
      "sgxMrSigner": "22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513"
    }
  ],
  "authToken": "",
  "site": {
    "cert": "./fullchain.crt",
    "key": "./private.pem"
  }
}
```

`config.json` parameters:

- `sgxMrEnclave` и `sgxMrSigner` - leave these values as above, don't change them.
- `authToken` - token from the `auth-token` file that you have created in the [previous section](/developers/deployment_guides/tunnels/manual_run#prepare-and-deploy-tunnel-server).
- `cert` и `key` - relative path from the `config.json` to the files with SSL certificate and private key that you have generated in [Step 1](/developers/deployment_guides/tunnels/preparing#generating-ssl-certificate). Place these files next to `config.json`. 

To add the authorization token from `auth-token` to `config.json` you can use the following command:

```bash
sed -i.bak -e "/\"authToken\":/s/\"authToken\": \".*\"/\"authToken\": \"$(cat tunnel-server-data/auth-token)\"/" tunnel-client-data/config.json
```

Now let's prepare Tunnel Client for deployment. The steps are similar to the ones for Tunnel Server.

Add the folder to archive:

```bash
tar -czf tunnel-client-data.tar.gz  -C ./tunnel-client-data .
```

Encrypt and upload the archive to the storage using this [command](/developers/cli_commands/files/upload):

```bash
./spctl files upload tunnel-client-data.tar.gz --output tunnel-client-data.json --filename tunnel-client-data.tar.gz
```

`tunnel-client-data.json` file should be created locally and `tunnel-client-data.tar.gz` uploaded to storage (it will be downloaded by the TEE for execution).

Create an order for Tunnel Client using the `tunnel-client-data.json`:

```bash
./spctl workflows create --tee 1 --solution 6,2 --solution 13,15 --data tunnel-client-data.json  --storage 23,27 --orders-limit 10 --min-rent-minutes 60
```

The last line of the output will look like this:

```
Workflow was created, TEE order id: ["XXXX"]
```

Where XXXX is the order ID.


## Set up DNS

Now, it's necessary for the Tunnel Client to connect with the Tunnel Server with its token. We will do this through DNS. Let's go back to the `result.txt` file you received from Tunnel Server order. The IP inside it is the address of your future server. You need to add two records to your domain's DNS:

- `A` record pointing to the IP `xxx.yyy.www.zzz` with TTL=3600
- `TXT` record with the text `r=superprotocol;ip=xxx.yyy.www.zzz` and TTL=3600

Replace `xxx.yyy.www.zzz` with the address from the `result.txt` file.

After a few minutes, open your browser and go to your domain!

Don't forget to replenish the tunnel orders with TEE tokens if you want your site to stay up.

## Create more tunnels

To ensure decentralization and fault tolerance you can create additional tunnel servers and clients with other compute providers - so that if one goes down, your site will still be available through other tunnels.

Change the `--tee` parameter for another compute offer ID in the `workflows create` command. You can choose any ID from the [Compute](https://marketplace.superprotocol.com/compute) screen on Marketplace. 

For example, repeat some of the previous steps to deploy another couple of tunnels. Let's use compute offer 2 instead of 1:

1. Create the tunnel server order:

```bash
./spctl workflows create --tee 2 --solution 6,2 --solution 10,9 --data auth-token.json --storage 23,27 --orders-limit 10 --min-rent-minutes 60
```

2. Create the tunnel client order:

```bash
./spctl workflows create --tee 2 --solution 6,2 --solution 13,15 --data my-tunnel-client-app.json --storage 23,27 --orders-limit 10 --min-rent-minutes 60
```

3. [Set up DNS](#set-up-dns) with the new result file retrieved from Tunnel Server order.

## Notes

### Limits

When creating an order in the example, the parameter `--min-rent-minutes` is set to 60. This means that the tunnel server and tunnel client will operate for 60 minutes. If needed, replace the minute value with the desired duration, but keep in mind that you may need more TEE tokens. Please refer to the testnet [limitations](/testnet/limitations).

### Deploying your own solutions

When deploying your own application please note the following:

- Ensure that the application is built for production (if necessary).
- All dependencies for `linux/amd64` should be installed.
- The application should not rely on external environment variables; everything should be hardcoded into the configuration or stored in a `.env` file and read using the `dotenv` npm package.
- Don't worry about the security of your passwords and secret keys - Super Protocol ensures confidentiality of all data.

If your CPU architecture or operating system differs from `linux/amd64`, use the following Docker command to install dependencies and/or build your application:

```bash
docker run --platform linux/amd64 --rm -it -w /home/node -v ./:/home/node node:16-buster npm install && npm run build

```
Modify the dependency installation and build commands as needed for your application.
