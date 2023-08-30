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

### Подготовка

Итак, для начала, Вам необходимо создать свой скрипт для сборки приложения и подготовки его для деплоя в TEE.

Например, можно создать директорию scripts и поместить туда следующий файл, назовём его `prepare-solution.sh`

