---
description: Introduction
---

# minecraft

Minecraft - популярная игра, любимая многими. В этой статье мы представим простой гайд по запуску сервера и клиента Minecraft на платформе Super Protocol.

Здесь описывается пример, который демонстрирует возможность запуска динамических приложений в TEE, используя такие инструменты, как _Tunnel Client_ и _Tunnel Server_.

С помощью этого руководства Вы можете запустить своё приложение в TEE, действуя шаг за шагом по аналогии.

Для запуска игры необходим сервер и web-клиент к нему.

В качестве примера, мы будем использовать сервер [flying-squid](https://github.com/PrismarineJS/flying-squid) и клиент [prismarine-web-client](https://github.com/PrismarineJS/prismarine-web-client).

Код проекта, процедуру сборки и запуска на локальном компьютере можно посмотреть [здесь](https://github.com/Super-Protocol/solutions/tree/mc/deploy/Tunnel%20Client/minecraft).

### Prepare

Итак, для начала, Вам необходимо создать свой скрипт для сборки приложения и подготовки его для деплоя в TEE.

Например, можно создать директорию scripts и поместить туда следующий файл, назовём его `prepare-solution.sh`

{% @github-files/github-code-block url="https://github.com/Super-Protocol/solutions/blob/067f4c0c5fdfbcb7bf7336b10c17355f24f7a29c/Tunnel%20Client/minecraft/scripts/prepare-solution.sh" %}

Для запуска скрипта ему необходимо передать параметр, путь к директории, куда будут копироваться файлы, необходимые для запуска решения в TEE.

Например:

```bash
$ cd minecraft
$ ./scripts/prepare-solution.sh /home/user/mc-solution
```

После запуска скрипта, будет сформирована примерно следующая структура:

```bash
.
├── client
├── dist
├── logs
├── node_modules
├── package.json
├── server
└── yarn.lock
```

Примечание

Запускать скрипт не нужно. Эта инфрмация приведена для общего понимания процесса. Запуск скрипта будет происходить автоматически, что будет описано ниже.
