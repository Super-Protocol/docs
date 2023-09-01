---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Minecraft server

[flying-squid](https://github.com/PrismarineJS/flying-squid) — это Minecraft-сервер, написанный на JavaScript и последняя его версия работает на базе Node.js v18. Поскольку мы планируем запуск системы на базе Node.js v16, мы будет использовать [commit](https://github.com/PrismarineJS/flying-squid/tree/1158513f782b41a25a9ff5859495b6d2be4d31f0), который был до перехода на версию 18. Это можно сделать установив следующую зависимость в файле `package.json` в разделе `dependencies`:

```
"flying-squid":  "git+https://github.com/PrismarineJS/flying-squid.git#1158513f782b41a25a9ff5859495b6d2be4d31f0",
```

Для того, чтобы не устанавливать все зависимости вручную, нужно скопировать конфигурацию ниже в файл `package.json`:

```json
{
  "name": "@super-protocol/minecraft-lib",
  "version": "0.1.1",
  "description": "Minecraft Solution",
  "main": "dist/app.js",
  "types": "dist/app.d.ts",
  "directories": {
    "lib": "dist"
  },
  "repository": "https://github.com/Super-Protocol/sp-solutions.git",
  "author": "Super Protocol",
  "license": "ISC",
  "engines": {
    "node": ">=16.18",
    "npm": ">=8.19.2"
  },
  "scripts": {
    "dependencies": "yarn && cd client && yarn",
    "dependencies-scripts": "yarn --frozen-lockfile && cd client && yarn --frozen-lockfile",
    "build": "tsc --build --force tsconfig.build.json",
    "build:clean": "rm -rf ./dist && yarn build",
    "build:all": "yarn build:clean && cp -r world ./dist/ && cd ./client && yarn build",
    "start": "node ./dist/app.js",
    "dev": "nodemon src/app.ts dev | pino-pretty"
  },
  "dependencies": {
    "@types/node": "^20.5.0",
    "@types/yargs": "^17.0.24",
    "dotenv": "^16.3.1",
    "flying-squid":  "git+https://github.com/PrismarineJS/flying-squid.git#1158513f782b41a25a9ff5859495b6d2be4d31f0",
    "global": "^4.4.0",
    "pino": "^8.15.0",
    "pino-pretty": "^10.2.0",
    "typescript": "^5.1.6"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.8.0",
    "@typescript-eslint/parser": "^5.8.0",
    "eslint": "8.22.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-tsdoc": "^0.2.14",
    "eslint-plugin-unused-imports": "^2.0.0",
    "nodemon": "^3.0.1",
    "prettier": "^2.4.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.1.6"
  },
  "peerDependencies": {
    "pino": "^7.0.3"
  }
}

```

Далее, в корневой директории создадим папку `server` и файл в ней, `mc-server.js`:

```sh
$ mkdir server
$ cd server
$ nano mc-server.js
```

Копируем в файл следующее содержимое:

{% @github-files/github-code-block url="https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/minecraft/server/app.js" %}
