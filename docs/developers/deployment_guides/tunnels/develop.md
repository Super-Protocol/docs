---
id: "develop"
title: "2. Development and testing"
slug: "/deployment_guides/tunnels/develop"
sidebar_position: 2
---

## Development

To launch your application on Super Protocol it must meet several requirements:

- It should use Node.js version 16 with CommonJS modules.

- The entry point should be the file `server.js`, located either in the root of your app, in the `dist` folder, or in the `build` folder. Note that this file will be executed using `worker_threads`.

- Only an HTTPS server should be used (HTTP may be used for testing, see the example).

- The following environment variables will be available and should be used to start the server: `HTTPS_PORT`, `TLS_KEY`, `TLS_CERT`.<br/><br/>
    **Note:** the env variables `TLS_KEY` и `TLS_CERT` will be different from the ones generated in [Step 1](/developers/deployment_guides/tunnels/preparing).
- Events with termination signals `SIGINT` and `SIGTERM` will be forwarded to the `parentPort` of the `worker_threads` module.

Let's begin.

Create a tunnels project folder (let's call it */superprotocol-test-app/*) and place the SPCTL executable and config there. 

In that folder add `express` as dependency and create file `server.js`.

```bash
mkdir superprotocol-test-app
docker run --platform linux/amd64 -v $PWD/superprotocol-test-app:/home/node -w /home/node node:16-buster-slim npm add express 
touch superprotocol-test-app/server.js
```

Add the following code to `server.js`:

```javascript title="server.js"
const http = require('http');
const https = require('https');
const { isMainThread, parentPort } = require('worker_threads');
const express = require('express');


const app = express();
app.use((_req, res) => {
   res.status(200).send('Got it!')
});

let server;
let port;

const handledSignals = ['SIGINT', 'SIGTERM']; 
const terminationHandler = (signal) => {
   console.log(`Signal ${signal}`);
   server.close();
   console.log('Server closed');
}

if(isMainThread) {
   port = 3001;
   server = http.createServer(app);
   handledSignals.forEach((signal) => {
      process.on(signal, terminationHandler);
    });
} else {
   parentPort.on('message', (message) => {
      if (handledSignals.includes(message)) {
        terminationHandler(message);
      }
    });
   port = Number(process.env.HTTPS_PORT);
   if (!process.env.TLS_KEY || !process.env.TLS_CERT || Number.isNaN(port)) {
      console.error("Error: Required environment variables TLS_KEY, TLS_CERT, and HTTPS_PORT are not set");
      process.exit(1);
   }
   const credentials = { key: process.env.TLS_KEY, cert: process.env.TLS_CERT };
   server = https.createServer(credentials, app);
}

server.on('error', (error) => {
   console.error('Server error:', error);
});

server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
```

## Testing

Test your solution using our Node.js base image. You need to test specifically with the same base image that is contained in the Node.js base image offer. You can download it using this [command](/developers/cli_commands/offers/download-content):

```bash
./spctl offers download-content 6 
```

File *node16-base-solution-image-v0.3.1.tar.gz* is downloaded (naming might be slightly different if version changes). Load this file into Docker:

```bash
docker load --input node16-base-solution-image-v0.3.1.tar.gz
```

Now run the server locally:

```bash
docker run --platform linux/amd64 -p 3001:3001 --rm -it -w /sp/run  -v $PWD/superprotocol-test-app:/sp/run --entrypoint /usr/local/bin/node gsc-node16-base-solution:latest /sp/run/server.js
```

Go to http://localhost:3001. Browser should show you this text: "Got it!"

If you see error *"Bind for 0.0.0.0:3001 failed: port is already allocated"* - replacе 3001 with any other port available.
