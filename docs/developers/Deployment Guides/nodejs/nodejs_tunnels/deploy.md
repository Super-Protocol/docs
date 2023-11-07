---
id: "deploy"
title: "4. Assembly and Deploy"
slug: "/Deployment Guides/nodejs_tunnels/deploy"
sidebar_position: 4
---

В процессе разработки своего решения Вам необходимо протестировать его в среде Super Protocol.
Для этого Вам необходимо:

1. Запустить GitHub Action туннель-клиента.
2. Запустить GitHub Action туннель-сервера и настроить Ваш DNS на тот IP-адрес, который выделил Вам сервер. 

После запуска туннель-сервер создаёт `OfferId`, который можно посмотреть в артефактах GiHub Actions.

Чтобы узнать IP адрес сервера, на котором запущено решение, нужно выполнить команду с помощью утилиты [spctl](https://docs.superprotocol.com/developers/cli/):

```shell
./spctl orders download-result <OrderId>
```

В результате команда вернёт файл `result.txt`, в котором будет IP адрес сервера.

Затем нужно перейти в личный кабинет Вашего DNS-провайдера и добавить две записи для Вашего домена:

```
Запись типа A        <IP сервера>
Запись типа TXT      "r=superprotocol;ip=<IP сервера>"
```

После этого, решение будет доступно по этому доменному имени.

Проконтролировать запущенные ордеры можно на Маркетплейсе Super Protocol.

<Imager src={require('./images/marketplace.png').default} />
