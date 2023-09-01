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

{% @github-files/github-code-block url="https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/minecraft/package.json" %}

Далее, в корневой директории создадим папку `server` и файл в ней, `mc-server.js`:

```sh
$ mkdir server
$ cd server
$ nano mc-server.js
```

Копируем в файл следующее содержимое:

{% @github-files/github-code-block url="https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/minecraft/server/app.js" %}

В этом коде происходит настройка и запуск сервера Minecraft с использованием модуля flying-squid. Сервер создается с переданными параметрами из файла `settings.json`. Создадим этот файл в этой же директории:

```sh
$ nano settings.json
```

И скопируем в него следующее:

{% @github-files/github-code-block url="https://github.com/Super-Protocol/solutions/blob/main/Tunnel%20Client/minecraft/server/settings.json" %}

Для лучшего структурирования сообщений в консоли, будем использовать модуль `pino`.

Кроме этого, нам необходимо скачать Minecraft "Мир", в котором находятся карты, текстуры и пр.&#x20;

