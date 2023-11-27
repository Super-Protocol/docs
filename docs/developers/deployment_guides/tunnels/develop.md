---
id: "develop"
title: "2. Development and testing"
slug: "/deployment_guides/tunnels/develop"
sidebar_position: 2
---

## Development

Для запуска Вашего приложения на Superprotocol-е оно должно удовлетворять нескольким требованиям:
* использует NodeJs 16 версии с CommonJs модулями
* точкой входа должен быть файл `server.js`, расположенный или в корне Вашего app или в папке `dist` или в папке `build`; необходимо учитывать, что данный файл будет запущен при помощи `worker_threads`
* должен использоваться только `https` сервер (`http` можно использовать для тестов, см. пример)
* в environment-е будут доступны следующие переменные, которые необходимо использовать для запуска сервера
    * _HTTPS_PORT_ - порт, который должен использловать сервер для старта
    * _TLS_KEY_ - TLS ключ, который так же должен использовать сервер 
    * _TLS_CERT_ -  TLS сертификат, который так же должен использовать сервер
    
    Обращаем Ваше внимание, что env-переменные _TLS_KEY_ и _TLS_CERT_ будут содержать не тот ключ и сертификат, который был сгененрирован в [п 1. данного гайда](/developers/deployment_guides/nodejs_tunnels/preparing).
* events with termination signals SIGINT and SIGTERM будут проброшены на parentPort модуля `worker_threads`

Пример простого commonJs express-сервера:
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

Протестируйте работоспособность вашего приложения с помощью нашего базового образа. Для этого его необходимо скачать при помощи команды:

```bash
./spctl offers download content 6 
```

В той директории, где вы запускали эту команду вас появится файл `node16-base-solution-image-v0.3.1.tar.gz`, который необходимо будет загрузить в Docker

```bash
docker load --input node16-base-solution-image-v0.3.1.tar.gz
```

Дальше, находясь в папке с файлом `server.js`, выполните данную команду, для запуска Вашего приложения с нашим базовым образом:

```bash
docker run --platform linux/amd64 -p 3001:3001 --rm -it -w /sp/run  -v .:/sp/run --entrypoint /usr/local/bin/node gsc-node16-base-solution:latest /sp/run/server.js
```

При необходимости замените порт 3001 на тот, которое использует Ваше приложение.