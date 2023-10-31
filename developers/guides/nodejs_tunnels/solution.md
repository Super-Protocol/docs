---
id: "solution"
title: "3. Creating Solution"
slug: "/guides/nodejs_tunnels/solution"
sidebar_position: 3
---
## Основные шаги
Для того, чтобы запустить свое решение в TEE, нужно выполнить несколько шагов.

1. Необходимо сгенерировать TLS-сертификат и ключ,
   как описано [здесь](https://docs.dev.superprotocol.com/developers/guides/tunnel-clients/prepare).

2. Нужно скопировать папку [.github/workflows](https://github.com/Super-Protocol/docs/tree/develop/.github/workflows) 
   с GitHub Actions в корневой каталог Вашего решения.
3. Нужно разместить своё решение в репозитории GitHub.
4. Необходимо в GitHub Secrets и GitHub Variables сохранить значения, как описано в этой 
   [инструкции](https://docs.dev.superprotocol.com/developers/guides/tunnel-clients/repo).
5. Запустить GitHub Action туннель-клиента и туннель-сервера, получить IP-адрес запущенного сервера и настроить
   DNS-запись. Этот процесс описан [здесь](https://docs.dev.superprotocol.com/developers/guides/tunnel-clients/deploy).

## Настройка https-соединения

Для установления защищённого канала между Вашим приложением и браузером, необходимо настроить https-соединение.
Пример кода, иллюстрирующий это, приведён ниже:

```javascript
const express = require("express");
const compression = require("compression");
const https = require('https');

if (!process.env.TLS_KEY || !process.env.TLS_CERT || !process.env.HTTPS_PORT) {
   console.error("Error: Required environment variables TLS_KEY, TLS_CERT, and HTTPS_PORT are not set");
   process.exit(1);
}

const app = express();
app.use(compression());

const credentials = { key: process.env.TLS_KEY, cert: process.env.TLS_CERT };
const httpsServer = https.createServer(credentials, app);

httpsServer.on('error', (error) => {
   console.error('Server error:', error);
});

httpsServer.listen(process.env.HTTPS_PORT, () => {
   console.log(`Server is running on https://localhost:${process.env.HTTPS_PORT}`);
});
```

<Highlight color="red">//TODO: Дописать про переменные окружения</Highlight>


