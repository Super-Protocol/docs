---
description: Introduction
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

# Предварительная настройка

Minecraft - популярная игра, любимая многими. В этой статье мы представим простой гайд по запуску сервера и клиента Minecraft на платформе Super Protocol.

Здесь описывается пример, который демонстрирует возможность запуска динамических приложений в TEE, используя такие инструменты, как _Tunnel Client_ и _Tunnel Server_.

С помощью этого руководства Вы можете запустить своё приложение в TEE, действуя шаг за шагом по аналогии.

Для запуска игры необходим сервер и web-клиент к нему.

В качестве примера, мы будем использовать сервер [flying-squid](https://github.com/PrismarineJS/flying-squid) и клиент [prismarine-web-client](https://github.com/PrismarineJS/prismarine-web-client).

Код, описание процедуры сборки и запуска проекта на локальном компьютере можно посмотреть [здесь](https://github.com/Super-Protocol/solutions/tree/mc/deploy/Tunnel%20Client/minecraft).

### Подготовка

Создадим директорию `minecraft` и перейдём в неё:

```sh
$ mkdir minecraft
$ cd minecraft
```

Инициализируем проект TypeScript и установим основные зависимости.

При инициализации проекта все поля можно пропустить, кроме поля `entry point (index.js)`, укажем путь к основному файлу: `src/app.ts`.

```sh
$ yarn init
$ yarn add @types/node typescript 
$ yarn add -D ts-node
```

Создадим файл `tsconfig.json`, необходимый tsc и ts-node для компиляции TypeScript в JavaScript и скопируем в него следующие настройки:

```json
{
  "compilerOptions": {
    "target": "ES2021",
    "module": "commonjs",
    "lib": ["es7"],
    "composite": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "pretty": true,
    "inlineSourceMap": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
  },
  "include": [
    "src", "test"],
  "exclude": []
}
```

Для удобства сборки и дальнейшей модификаций создадим дополнительный конфигурационный файл `tsconfig.build.json` и поместим в него следующие настройки:

```json
{
  "compilerOptions": {
    "rootDir": "src"
  },
  "extends": "./tsconfig.json",
  "include": ["src"],
  "exclude": ["**/*/__mocks__"]
}
```

Создадим директорию для исходного кода и поместим в неё файл с тестовой командой:

```sh
$ mkdir src
$ echo "console.log('Hello Minecraft!')" > src/app.ts
```

Соберём проект командой:

```
$ yarn tsc --build tsconfig.build.json
```

Теперь у нас появилась директория `dist` с JavaScript файлами `app.js` и `app.d.js`.

Запустим:

```
$ node ./dist/app.js
# Hello Minecraft!
```

Для целей разработки можно запускать решение без предварительной компиляции:

```
$ yarn ts-node ./src/app.ts
# Hello Minecraft!
# ✨  Done in 2.36s.
```

Для удобства запуска приложения предварительно настроим скрипты в файле `package.json`. Перед секцией "dependencies" добавим следующее:

```
"scripts": {
  "build": "tsc --build --force tsconfig.build.json",
  "start": "node ./dist/app.js",
  "dev": "ts-node ./src/app.ts"
},
```

Клонируем репозиторий Minecraft-клиента в корневую директорию проекта и переименуем эту папку:

```
$ git clone https://github.com/PrismarineJS/prismarine-web-client.git
$ mv prismarine-web-client client
```

На этом предварительная настройка закончена.
